---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-twnia2-run-parallel-job-container-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-twnia2-run-parallel-job-container-en' 
---

# Run parallel computing with multi-nodes on containers －AI Benchmark


In this document, we will show you how to create containers and run multi-node parallel computing using **TWNIA2 (HPC CLI)**.

Both TWCC Container Compute Service (Interactive Container and Scheduled Container) and High-performance Computing run [containers optimized by NVIDIA NGC](https://ngc.nvidia.com/catalog/containers), including `TensorFlow`, `PyTorch`, and more. In this document, we will also use the NGC container as an example<sup>[1]</sup>.

Since the version after `NGC 19.11`<sup>[2]</sup>, the container image has [experimental support for Singularity container](https://developer.nvidia.com/blog/how-to-run-ngc-deep-learning-containers-with-singularity/) which is well suited to the HPC environment. Therefore, users of TWNIA2 (HPC CLI) can directly download the NGC container for use, or use the container from NGC as the base images for building and customizing your environment<sup>[3]</sup>.

We will use the Singularity container to wrap the packages needed for computing jobs, and then write job scripts to request resources, queue schedules, and submit computing jobs using Slurm Workload Manager.

:::info
[1] NVIDIA provides many [<ins>deep learning examples</ins>](https://github.com/NVIDIA/DeepLearningExamples) to improve the accessibility.<br/>
[2] NGC version numbers consist of **year.month**: `NGC 20.09` is the version released in September 2020. Refer to [<ins>NGC Support Matrix</ins>](https://docs.nvidia.com/deeplearning/frameworks/support-matrix/index.html) to know more about the differences between NGC's AI frameworks and packages versions.<br/>
[3] You may also download containers from Docker Hub or other container registry, for more information, please refer to [<ins>Create TWNIA2 containers</ins>](./create-twnia2-containers.md).
:::

<br/>


## Step 1. Download pre-loaded or NGC containers

TWCC has pre-loaded the following 3 commonly used NGC containers for users and store in the `/work/TWCC_cntr` directory:
- **NGC 20.09 TensorFlow 1** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_20-09.html#rel_20-09) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)<br/>
 Path: `/work/TWCC_cntr/tensorflow_20.09-tf1-py3.sif` 
- **NGC 20.09 TensorFlow 2** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_20-09.html#rel_20-09) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)<br/>
 Path: `/work/TWCC_cntr/tensorflow_20.09-tf2-py3.sif`
- **NGC 20.09 PyTorch** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel_20-09.html#rel_20-09) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)<br/>
 Path1: `/work/TWCC_cntr/pytorch_20.09-py3.sif`<br/>
 Path2: `/work/TWCC_cntr/pytorch_20.09-py3_horovod.sif` (Additionally install Horovod)

If you want to use other versions or other containers, TWNIA2 has already installed Singularity, you may run the `singularity pull` command to download Singularity containers<sup>[4]</sup>.

:::info
[4] You may also download containers from Docker Hub or other container registry, for more information, please refer to [<ins>Create TWNIA2 containers</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-en).
:::

<br/>


## Step 2. Install packages in the container (Optional)

It requires sudo privileges to install packages in Singularity container, so you may create custom container on your own server (virtual machines are recommended, such as TWCC VCS), then upload to TWNIA2 for use<sup>[5]</sup>.


For example: Using PyTorch container as the base image to install [Horovod distributed training framework](https://horovod.ai/)<sup>[6]</sup>:

- Create **a container**

```bash
sudo singularity build pytorch_20.09-py3_horovod.sif pytorch_20.09-py3_horovod.def
```

- **Contents of `pytorch_20.09-py3_horovod.def`**
```bash
BootStrap: docker
From: nvcr.io/nvidia/pytorch:20.09-py3
Stage: build
%post
    # source env
    . /.singularity.d/env/10-docker*.sh
    # install horovod
    export HOROVOD_GPU=CUDA
    export HOROVOD_GPU_OPERATIONS=NCCL
    export HOROVOD_NCCL_LINK=SHARED
    export HOROVOD_WITHOUT_GLOO=1
    export HOROVOD_WITH_MPI=1
    export HOROVOD_WITH_PYTORCH=1
    export HOROVOD_WITHOUT_TENSORFLOW=1
    export HOROVOD_WITHOUT_MXNET=1
    export LD_LIBRARY_PATH=/usr/local/cuda/lib64/stubs:$LD_LIBRARY_PATH
    pip install --no-cache-dir horovod==0.20.3
```

:::info 
[5] For more information about how to customize the container, please refer to [<ins>Customize Singularity Containers</ins>](./create-twnia2-containers.md#step-2-customize-a-singularity-container).<br/>
[6] For the containers from NGC, TensorFlow has already installed Horovod, but PyTorch has not. So, additional installation is required for PyTorch.
:::

<br/>


## Step 3. Enable Mixed Precision (Optional)

TensorFlow, PyTorch and MXNet provided by NVIDIA are able to enable Automatic Mixed Precision, which helps improving the computing speed. Please refer to NVIDIA [Automatic Mixed Precision for Deep Learning](https://developer.nvidia.com/automatic-mixed-precision) if needed.

:::info
You may also refer to [<ins>Enable TensorFlow Automatic Mixed Precision and run benchmarks</ins>](../../ccs-interactive-container/tutorials/activate-tensorflow-amp.md) using TWCC container service.
:::

<br/>


## Step 4. Write Slurm Job Scripts

When you have prepared the computing environment, please follow the steps below to write job scripts using Slurm Workload Manager to request resources, queue schedules, and submit computing jobs.


The `.sh` file is the job script submitted by Slurm, the content is divided into **two parts**:

1. **Information of Job, project and resources**: job name, number of nodes, number of jobs running per node, number of GPUs per node, maximum job running time, project ID, and queue name.
3. **The content of the job**


Here is an example of the benchmark script for editing and testing using Horovod:

Run the following edit command > Press <kbd>i</kbd> key> Select an example to copy and paste > Press <kbd>ESC</kbd> key> Enter `:wq!` to save and exit. We're done!

```bash
vim <FILE_NAME>.sh
```
:::info
You may write `.sh` files using the editor you're used to, the example uses vim to operate.
:::

<br/>

### TensorFlow 1

```bash
#!/bin/bash
#SBATCH --job-name=Hello_twcc    ## job name
#SBATCH --nodes=2                ## request 2 nodes
#SBATCH --ntasks-per-node=8      ## run 8 srun tasks per node
#SBATCH --cpus-per-task=4        ## request 4 CPUs per srun task 
#SBATCH --gres=gpu:8             ## request 8 GPUs per node
#SBATCH --time=00:10:00          ## Run for up to 10 minutes (remember to change it after testing, or delete this line directly)
#SBATCH --account="PROJECT_ID"   ## PROJECT_ID(e.g.,  MST108XXX). Billing will also be based on this project ID
#SBATCH --partition=gtest        ## gtest is used for testing queue. After subsequent tests, it can be changed to gp1d (maximum running 1 day), gp2d (maximum running 2 days), gp4d (maximum running 4 days)
module purge
# tf 1
SIF=/work/TWCC_cntr/tensorflow_20.09-tf1-py3.sif
SINGULARITY="singularity run --nv $SIF"
# tf 1 horovod benchmark script from
# wget https://raw.githubusercontent.com/horovod/horovod/v0.19.1/examples/tensorflow_synthetic_benchmark.py
HOROVOD="python tensorflow_synthetic_benchmark.py --batch-size 256"
# enable AUTO MIXED PRECISION
export TF_ENABLE_AUTO_MIXED_PRECISION=1
# enable NCCL log
export NCCL_DEBUG=INFO
srun --mpi=pmix $SINGULARITY $HOROVOD
```

<br/>

### TensorFlow 2

```bash
#!/bin/bash
#SBATCH --job-name=Hello_twcc    ## job name
#SBATCH --nodes=2                ## request 2 nodes
#SBATCH --ntasks-per-node=8      ## run 8 srun tasks per node
#SBATCH --cpus-per-task=4        ## request 4 CPUs per srun task
#SBATCH --gres=gpu:8             ## request 8 GPUs per node
#SBATCH --time=00:10:00          ## Run for up to 10 minutes (remember to change it after testing, or delete this line directly)
#SBATCH --account="PROJECT_ID"   ## PROJECT_ID(e.g.,  MST108XXX). Billing will also be based on this project ID
#SBATCH --partition=gtest        ## gtest is used for testing queue. After subsequent tests, it can be changed to gp1d (maximum running 1 day), gp2d (maximum running 2 days), gp4d (maximum running 4 days)
module purge
# tf 2
SIF=/work/TWCC_cntr/tensorflow_20.09-tf2-py3.sif
SINGULARITY="singularity run --nv $SIF"
# tf 2 horovod benchmark script from
# wget https://raw.githubusercontent.com/horovod/horovod/v0.19.5/examples/tensorflow2_synthetic_benchmark.py
HOROVOD="python tensorflow2_synthetic_benchmark.py --batch-size 256"
# enable NCCL log
export NCCL_DEBUG=INFO
srun --mpi=pmix $SINGULARITY $HOROVOD
```

<br/>

### PyTorch

```bash
#!/bin/bash
#SBATCH --job-name=Hello_twcc    ## job name
#SBATCH --nodes=2                ## request 2 nodes
#SBATCH --ntasks-per-node=8      ## run 8 srun tasks per node
#SBATCH --cpus-per-task=4        ## request 4 CPUs per srun task
#SBATCH --gres=gpu:8             ## request 8 GPUs per node
#SBATCH --time=00:10:00          ## Run for up to 10 minutes (remember to change it after testing, or delete this line directly)
#SBATCH --account="PROJECT_ID"   ## ROJECT_ID(e.g.,  MST108XXX). Billing will also be based on this project ID
#SBATCH --partition=gtest        ## gtest is used for testing queue. After subsequent tests, it can be changed to gp1d (maximum running 1 day), gp2d (maximum running 2 days), gp4d (maximum running 4 days)
module purge
SIF=/work/TWCC_cntr/pytorch_20.09-py3_horovod.sif
SINGULARITY="singularity run --nv $SIF"
# pytorch horovod benchmark script from
# wget https://raw.githubusercontent.com/horovod/horovod/v0.20.3/examples/pytorch/pytorch_synthetic_benchmark.py
HOROVOD="python pytorch_synthetic_benchmark.py --batch-size 256"
# enable NCCL log
export NCCL_DEBUG=INFO
srun --mpi=pmix $SINGULARITY $HOROVOD
```

:::info
1. Adding the following content to the script file header, you may add an email to get the job state notification:
    ```bash
    #SBATCH --mail-type=ALL
    #SBATCH --mail-user=$Your_email
    ```
2. The ratio of the requested resources will be based on the number of GPUs you assign, and will be allocated based on the ratio of 1 GPU: 4 CPU: 90 GB Memory.
    For example,
    > Request 1 GPU, you will get 4 CPU cores and 90 GB Memory automatically allocated.<br/>
    > Request 8 GPUs, you will get 32 CPU cores and 720 GB Memory automatically allocated.
3. Please do not specify a specific computing node, as the system will automatically allocate computing resources.
4. For more information about queue, please refer to [<ins>Usage instructions of queue and computing resources</ins>](../user-guides/queues/queues-computing-resources.md).
:::

<br/>


## Step 5. Submit jobs

- Run the following command to submit the job. The system will arrange the queue schedule and the required resources for you, then start the computing according to the sequence.


```bash
sbatch <FILE_NAME>.sh
```

:::info
After submitting, it will show the Job ID distributed by the system.
:::

<br/>


## Step 6. View and cancel

- Once the job starts running, you can run the following command to view the log.

```bash
tail -f slurm_<JOB_ID>.out
```

:::info
For more commonly used commands, please refer to [<ins>Slurm command</ins>](/en/docs/category/slurm-指令/): 
1. Use `squeue -u $USER` to view the running job.
2. Use `sacct -X` to check today's running job and state to make sure whether it is still running or has already finished.
:::


- For canceling the running job, run the command:

```bash
scancel <JOB_ID>
```