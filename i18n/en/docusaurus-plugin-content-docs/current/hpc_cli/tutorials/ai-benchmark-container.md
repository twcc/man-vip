---
sidebar_position: 2
---

# Run parallel computing with multi-nodes on containers －AI Benchmark


:::tip **Scenario: How to run processes with more than 8 GPUs? How to create TAIWANIA 2 containers? How to submit jobs?**
*Do you have the same problem? Let us show you how to integrate TWCC services to solve the problems you are facing with!*
:::
In this document, we will show you how to **create containers and run multi-node parallel computing using TAIWANIA 2 (HPC CLI)**.

Both TWCC Container Compute Service (Interactive Container and Scheduled Container) and High-performance Computing run [containers from NVIDIA NGC](https://ngc.nvidia.com/catalog/containers), including `TensorFlow` and `PyTorch`. In this document, we will also use the NGC container as an example<sup>[1]</sup>.

Since version `NGC 19.11` <sup>[2]</sup>, the container image has [experimental support for Singularity container](https://developer.nvidia.com/blog/how-to-run-ngc-deep-learning-containers-with-singularity/) which is well suited to the HPC environment. Therefore, users of TAIWANIA 2 (HPC CLI) can directly download the NGC container for use, or use the container from NGC as the base images for building and customizing your environment<sup>[3]</sup>.

We will use the Singularity container to wrap the packages needed for computing jobs, and then write job scripts to request resources, queue schedules, and submit computing jobs using Slurm Workload Manager.



:::info
[1] NVIDIA provides many [<ins>deep learning examples</ins>](https://github.com/NVIDIA/DeepLearningExamples) to improve the accessibility.<br/>
[2] NGC version numbers consist of **year, month**: `NGC 20.09` is the version released in September 2020. Refer to [<ins>NGC Support Matrix</ins>](https://docs.nvidia.com/deeplearning/frameworks/support-matrix/index.html) to know more about differences between NGC's AI frameworks and packages version numbers.<br/>
[3] You may also download containers from Docker Hub or other container registry, for more information, see [<ins>HowTo: Create TAIWANIA2 containers</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-en).
:::


## Step 1. Download NGC containers

TWCC has pre-loaded the following 3 commonly used NGC containers for users and store in the `/work/TWCC_cntr` directory:
- **NGC 20.09 TensorFlow 1** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_20-09.html#rel_20-09) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)
 Path:`/work/TWCC_cntr/tensorflow_20.09-tf1-py3.sif` 
- **NGC 20.09 TensorFlow 2** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/tensorflow-release-notes/rel_20-09.html#rel_20-09) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)
 Path:`/work/TWCC_cntr/tensorflow_20.09-tf2-py3.sif`
- **NGC 20.09 PyTorch** | [Release Note](https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel_20-09.html#rel_20-09) | [Tags](https://ngc.nvidia.com/catalog/containers/nvidia:tensorflow/tags)
 Path1:`/work/TWCC_cntr/pytorch_20.09-py3.sif`
 Path2:`/work/TWCC_cntr/pytorch_20.09-py3_horovod.sif` (Additionally install Horovod)

If you want to use other versions or other containers, TAIWANIA 2 has already installed Singularity, you may run the `singularity pull` command to download Singularity containers <sup>[4]</sup>.

:::info
[4] You may also download containers from Docker Hub or other container registry, for more information, see [<ins>HowTo: Create TAIWANIA2 containers</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-en).
:::


## Step 2. Install packages in the container (Optional)

It requires sudo privileges to install packages in Singularity container, so you may create custom container on your own server (virtual machines are recommended, such as TWCC VCS), then upload to TAIWANIA2 for use<sup>[5]</sup>.


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
[5] For more information about how to customize the container, see [<ins>Customize Singularity Containers</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-en#2-%E5%AE%A2%E8%A3%BD%E5%8C%96-Singularity-%E5%AE%B9%E5%99%A8).<br/>
[6] For the containers from NGC, TensorFlow already installed Horovod, but PyTorch does not. So, additional installation is required for PyTorch.
:::

## Step 3. Enable Mixed Precision (Optional)

TensorFlow, PyTorch, and MXNet provided by NVIDIA may enable Automatic Mixed Precision, which helps improving the computing speed. Please refer to [Automatic Mixed Precision for Deep Learning](https://developer.nvidia.com/automatic-mixed-precision).

:::info
You may also refer to [<ins>Enable TensorFlow Automatic Mixed Precision and run benchmarks</ins>](https://www.twcc.ai/doc?page=howto_ctn6) using TWCC container service.
:::


## Step 4. Write Slurm Job Scripts

When you have prepared the computing environment, please follow the steps to write job scripts using Slurm Workload Manager to request resources, queue schedules, and submit computing jobs.


The `.sh` file is the job script submitted by Slurm, the content is divided into **two parts**:

1. **Information of Job, project and resources**: job name, Number of nodes, Number of jobs running per node, Number of GPUs per node, longest job running time, project ID, and Queue name.
3. **The content of the job**


Here is an example of the benchmark script for editing and testing using Horovod:

Run the following edit command > Press <kbd>i</kbd> key> Select an example to copy and paste > Press <kbd>ESC</kbd> key> Enter`:wq!` to save and exit. We're done!

```bash
vim <FILE_NAME>.sh
```
:::info
You may write `.sh` files using the editor you're used to, the example uses vim to operate.
:::

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
    > Request 1 GPU, 90 GB Memory will be automatically allocated
      Request 8 GPU, 720GB Memory will be automatically allocated
3. For more information about queue, please refer to [<ins>Usage instructions of queue and computing resources</ins>](https://www.twcc.ai/doc?page=hpc_cli#4-Queue-%E8%88%87%E8%A8%88%E7%AE%97%E8%B3%87%E6%BA%90%E4%BD%BF%E7%94%A8%E8%AA%AA%E6%98%8E).
:::

## Step 5. Submit jobs

- Run the following command to submit the job, and the system will arrange the queue schedule, the required resources for you, then start the computing according to the sequence.


```bash
sbatch <FILE_NAME>.sh
```

:::info
After submitting, it will show the Job ID distributed by the system.
:::

## Step 6. View and cancel

- Once the job starts running, you can run the following command to view the log.

```bash
tail -f slurm_<JOB_ID>.out
```

:::info
For more commonly used commands, see [<ins>Slurm command</ins>](https://www.twcc.ai/doc?page=hpc_cli#6-Slurm%E6%8C%87%E4%BB%A4): 
1. Use`squeue -u $USER` to view the running job.
2. Use `sacct -X` to check today's running job and state to make sure whether it is still running or has already finished.
:::


- For canceling the running job, run the command:

```bash
scancel <JOB_ID>
```

##  <i class="fa fa-backward" aria-hidden="true"></i> Pervious tutorial
- How to create TAIWANIA2 containers? :point_right: [HowTo：Create TAIWANIA2 containers](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-en)