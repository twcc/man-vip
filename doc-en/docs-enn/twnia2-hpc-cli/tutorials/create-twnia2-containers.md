---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-twnia2-create-sglrt-container-en' 
---

# Create TWNIA2 containers

Use **Singularity** to package up the pieces of software and **create a container environment that can execute jobs in TWCC TWNIA2 (HPC CLI)** in a way that is portable and reproducible.


- In this document, we will show you how to:
    - Use Singularity containers in TWNIA2, or use [TWCC VCS instance](https://www.twcc.ai/doc?page=vm) to customize containers
    - Run simple container commands
    - Advanced operations: create container sandbox to test environments and lightweight containers

:::info
[<ins>Singularity</ins>](https://sylabs.io/) is similar to Docker. It can create rootless containers.
:::

<br/>


## Prerequisites: Container images

Download container images preloaded by TWCC or customize your container environment.

<br/>


### 1. Container images preloaded by TWCC

TWCC has preloaded common NGC containers for users and placed them under the path `/work/TWCC_cntr`:

| [PyTorch](https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel_21-11.html#rel_21-11) | [TensorFlow](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_21-11.html#rel_21-11) |[CUDA](https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/index.html#abstract) |[HPC SDK](https://docs.nvidia.com/hpc-sdk/hpc-sdk-release-notes/index.html)|
| -------- | -------- | -------- | -------- |
| pytorch_21.11-py3   | tensorflow_21.11-tf2-py3     | cuda_11.5.1-cudnn8-devel-ubuntu20.04     | nvhpc_22.1-runtime-cuda11.5-ubuntu20.04
| pytorch_21.11-py3_horovod   | tensorflow_21.11-tf1-py3    |  cuda_11.5.1-cudnn8-runtime-ubuntu20.04    | nvhpc_22.1-devel-cuda11.5-ubuntu20.04|
|   -   | -     |   cuda_11.5.1-cudnn8-devel-centos8   | nvhpc_22.1-runtime-cuda11.5-centos7     |
|   -     | -     | cuda_11.5.1-cudnn8-runtime-centos8    | nvhpc_22.1-devel-cuda11.5-centos7  |   -     | -     | 11.5.1-cudnn8-devel-centos8      | 

> TWCC Release Date: 31Mar22

You can use the following command to create a container and execute the command, and the used image cache will be stored in `$HOME/.singularity/cache` by default, so you can use the container again quickly and save the time of waiting for download.

```
singularity exec --nv oras://registry.twcc.ai/singularity/<package>:<version> <command to be executed in the container>
```

<br/>

### 2. Download container images

For those who are familiar with container technology and want to add other applications and packages to the image, use [TWCC VCS instance](https://www.twcc.ai/doc?page=vm) to customize your image first, then upload the image to TWNIA2 (HPC CLI) for use.

- In this document, we use **[<ins>TWCC VCS instance</ins>](https://www.twcc.ai/doc?page=vm)** and select CentOS 7 for the operating system.

:::caution

Since customizing the Singularity container images requires sudo privileges, TWNIA2 (HPC CLI) is unable to provide users with sudo privileges to avoid damage to the physical server. We suggest you use **[<ins>TWCC VCS instance</ins>](https://www.twcc.ai/doc?page=vm)** to compile your image, and delete it after completion.

:::
:::tip
Ubuntu is mostly used for the container images, so it is recommended to use CentOS for the VCS instance environment. This makes it easier to distinguish the environment is inside or outside of the container.
:::

<br/>


#### Step 1. Install Singularity in the VCS instance

The installation steps are from Singularity official website. For detailed steps or other versions of Linux, please refer to [Singularity latest file](https://sylabs.io).

- Install with the following commands in **Ubuntu** VCS instances:

```bash
sudo wget -O- http://neuro.debian.net/lists/xenial.us-ca.full | sudo tee /etc/apt/sources.list.d/neurodebian.sources.list && \
    sudo apt-key adv --recv-keys --keyserver hkp://pool.sks-keyservers.net:80 0xA5D32F012649A5A9 && \
    sudo apt-get update && \
    sudo apt-get install -y singularity-container
```
    
- Install with the following commands in **CentOS** VCS instances:

```bash
sudo yum update -y && \
    sudo yum install -y epel-release && \
    sudo yum update -y && \
    sudo yum install -y singularity
```

<br/>


#### Step 2. Customize a Singularity container

You can determine the source of the base image by writing a **Singularity definition file**, and install the required applications to create your own customized container.

The following is an example of how to build a definition file with reference to the [Singularity Quick Start](https://sylabs.io/guides/3.6/user-guide/quick_start.html#singularity-definition-files) example. A definition file is devided into **header** and **sections**.

:::info
- **Header**: Determines the base container to begin with, such as docker, library, yum, etc.
- **Sections**: There are a variety of options to set up here, mainly using the following 2 items:
    - `%post`: Executes within the container at build time after the base OS has been installed.
    - `%environment`: Defines some environment variables that will be available in /environment at runtime.
:::

Here is an example of creating a CUDA10.1 image, and compiling deviceQuery container of [CUDA Samples](https://github.com/NVIDIA/cuda-samples):

- Build a Singularity definition file.

```
vim <DEF_FILE_NAME>.def
```

- Modified to meet the needs of customized content:

```bash
# Use docker nvidia/cuda:10.1-devel-ubuntu18.04 as the base container
BootStrap: docker
From: nvcr.io/nvidia/cuda:10.1-devel-ubuntu18.04
Stage: devel
%post
    # Initialize the environment variables of the base image
    . /.singularity.d/env/10-docker*.sh
%post
    # install wget
    apt-get update -y
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        wget
    rm -rf /var/lib/apt/lists/*
%post
    # Download and compile the deviceQuery example of cuda sample
    cd /
    mkdir -p /var/tmp && wget -q -nc --no-check-certificate -P /var/tmp https://github.com/NVIDIA/cuda-samples/archive/v10.1.tar.gz
    mkdir -p /var/tmp && tar -x -f /var/tmp/v10.1.tar.gz -C /var/tmp -z
    cd /var/tmp/cuda-samples-10.1/Samples/deviceQuery
    make
    mkdir -p /usr/local/cuda-samples-10.1/bin
    cp deviceQuery /usr/local/cuda-samples-10.1/bin
    rm -rf /var/tmp/cuda-samples-10.1 /var/tmp/v10.1.tar.gz
%environment
    # Add the environment variables of the container
    export PATH=/usr/local/cuda-samples-10.1/bin:$PATH
```

:::info
The writing syntax of **Singularity definition file** and **Dockerfile** are different, but the purpose of them are similar. Users can run commands to install applications and create customized container images through these file.
:::

- To build a container from this definition file.

```bash
sudo singularity build <CONTAINER_NAME>.sif <DEF_FILE_NAME>.def
```

:::tip
We recommend you to use [<ins>HPC Container Maker</ins>](https://github.com/NVIDIA/hpc-container-maker) to write Singularity definition file, which is as easy to maintain as writing programs.
:::

<br/>


#### Step 3. Download the image

Download your container image to your local machine.

<br/>


#### Step 4. Upload the image to Hyper File System (HFS)

Refer to [Hyper File System (HFS)](https://www.twcc.ai/doc?page=hfs), upload the container image to the storage space of TWNIA2 (HPC CLI) through the data transferring node `xdata1.twcc.ai`, and store it in the `/home/$USER` directory or `/work/$USER` directory for use.

<br/>


## Run the container

After the container image is ready, you can run commands in the container and execute jobs in TWNIA2 (HPC CLI).

The following are 2 basic Singularity commands. For more commands information, please refer to [Singularity- Command Line Interface](https://sylabs.io/guides/3.6/user-guide/cli.html).


**1. `shell` (Run a shell within a container)**

- Enter the container and open shell. You may view the files in the container.

```bash
singularity shell --nv <CONTAINER_NAME>.sif
```

**2. `exec` (Run a command within a container)**

- Run `cat` command in the container. For example, run the following command, and os-release will show that the container OS is ubuntu.

```bash
singularity exec --nv <CONTAINER_NAME>.sif cat /etc/os-release
```


:::info
- To run GPU resources, all commands must be added with `--nv`.
:::

<br/>


## Advanced operations

### 1. Create sandbox containers

If you need to test whether the package is compatible with the container environment, you can create a **sandbox container**, which does not affect the original container image and there is no need to re-create the container. Moreover, it can be installed or operated in the container:

- Build a sandbox directory with all contents of the container image.

```bash
sudo singularity build --sandbox <FOLDER_NAME> docker://nvidia/cuda:10.1-devel-ubuntu18.04
```

- `shell` into the sandbox container, and when you use your container you can also write files within the sandbox directory (provided you have the permissions to do so).

```bash
sudo singularity shell --writable <FOLDER_NAME>/
```

- Then you can use `apt` to update and install the packages like the following commands:

```bash
apt-get update
apt-get install wget
```

- Use the sandbox to create a Singularity container image.

:::info
Since the sandbox does not write the packages into the definition file, you cannot record which packages are in the container, which is difficult to maintain. It is not recommended to use this method to create a container image. We recommend you [<ins>Customize Singularity containers</ins>](#2-customize-singularity-containers).
:::

```bash
sudo singularity build <CONTAINER_NAME>.sif <FOLDER_NAME>/
```

<br/>


### 2. Create lightweight containers

In order to create a slimmer container that only stores compiled exe file and dependent runtime library, please refer to the [Singularity official website example](https://sylabs.io/guides/3.6/user-guide/definition_files.html#multi-stage-builds) that uses **Multi-Stage Builds** to define the container building process of more than 2 stages, and run the job by stages in the same Singularity definition file.

Take the example of this tutorial:
- The first stage, it uses `nvcc` to compile and generate `deviceQuery` exe file
- Then copy deviceQuery to the second stage (**does not include the content for compilation**) to create a lightweight container image
- Container file size reduced from 1.4G to 664M
```bash
BootStrap: docker
From: nvcr.io/nvidia/cuda:10.1-devel-ubuntu18.04
Stage: devel
%post
    # initialize base image environment
    . /.singularity.d/env/10-docker*.sh
%post
    # install wget
    apt-get update -y
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
        wget
    rm -rf /var/lib/apt/lists/*
%post
    # download and compile cuda sample deviceQuery
    cd /
    mkdir -p /var/tmp && wget -q -nc --no-check-certificate -P /var/tmp https://github.com/NVIDIA/cuda-samples/archive/v10.1.tar.gz
    mkdir -p /var/tmp && tar -x -f /var/tmp/v10.1.tar.gz -C /var/tmp -z
    cd /var/tmp/cuda-samples-10.1/Samples/deviceQuery
    make
    mkdir -p /usr/local/cuda-samples-10.1/bin
    cp deviceQuery /usr/local/cuda-samples-10.1/bin
    rm -rf /var/tmp/cuda-samples-10.1 /var/tmp/v10.1.tar.gz
%environment
    export PATH=/usr/local/cuda-samples-10.1/bin:$PATH
BootStrap: docker
From: nvcr.io/nvidia/cuda:10.1-runtime-ubuntu18.04
%post
    . /.singularity.d/env/10-docker*.sh
# copy precompiled cuda sample deviceQuery 
# from develop stage
%files from devel
    /usr/local/cuda-samples-10.1/bin /usr/local/cuda-samples-10.1/bin
%environment
    export PATH=/usr/local/cuda-samples-10.1/bin:$PATH
```

<!-- ## 下個主題 <i class="fa fa-forward" aria-hidden="true"></i>
- 如何利用容器完成跨節點高速運算工作？:point_right: [使用容器跨節點高速運算－AI Benchmark]() -->