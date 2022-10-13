---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-twnia2-conda-manage-packages-submit-job-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-twnia2-conda-manage-packages-submit-job-en'
---

# Use Conda to manage packages and submit jobs


In this document, we will introduce the package management tool in TWCC TWNIA2 (HPC CLI), [Miniconda](https://docs.conda.io/en/latest/miniconda.html), and demonstrate how to use Conda to create a virtual environment, install packages and submit jobs.

<br/>


## Introduction to Miniconda

Miniconda is a Python environment management system that includes a variety of Python packages and uses Conda as a package manager.

Miniconda is a solution to package compatibility issues that you can run simple Conda commands to install packages and switch to an environment with a specific version of Python.

<br/>


## The update plan

Due to the [frequent bugs fixed](https://docs.conda.io/projects/conda/en/latest/release-notes.html) of the package management tool Conda, the recent fixes have significantly improved the experience.

To boost the releases with new features for TWCC users, we have removed Anaconda and will continue to update Miniconda (minimal installer for Conda).

:::info
You may install Anaconda under your own `/home/$USER`  or `/work/$USER` directory.
:::

<br/>


## Redesign the modulefile

Generally, we use the `conda init` command to set the environment in Anaconda and Miniconda, and Conda will change the user's `~/.bashrc` and add the following content.

```bash
# >>> conda initialize >>>
...
...
# <<< conda initialize <<<
```

For those who are new to Linux or Conda, it is not a friendly design. When Conda is no longer used, the Conda parameters forgotten to be removed in `~/.bashrc` might cause other operational issues.

Therefore, TWCC rewrite the modulefile. When using `module load miniconda2` or `module load miniconda3`, the above parameters will be automatically activated; when `module purge`, these environment variables will be automatically removed. In this way, the mechanism can prevent Conda from changing the `~/.bashrc`, and provide users a simple environment to run Conda properly.

<br/>


## How to use Miniconda?

- Use the `module load miniconda2` / `module load miniconda3` command to load the conda environment.
- Use the `module purge` command to uninstall the conda environment.
- Due to [the reasons mentioned above](#Redesign-modulefile), we recommended you **remove** the conda initialized contents before using (the remove command `conda init --reverse`).


:::info
- miniconda2: Use Python 2 by default
- miniconda3: Use Python 3 by default
:::

Please refer to the following for more operation examples.

<br/>


## Conda operation examples

Here is an example of using Conda to create a virtual environment, install TensorFlow that supports GPU computing, and then use Slurm, a workload manager, to write job scripts to request resources, schedule jobs with queues, and submit jobs.

:::info References
- [<ins>Anaconda: TensorFlow</ins>](https://docs.anaconda.com/anaconda/user-guide/tasks/tensorflow/)
- [<ins>Conda: Managing environments</ins>](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
:::

<br/>


### Step 1. Load Conda and create a virtual environment

```bash
# Clear the module to make sure that the environment is clean
module purge

# Load Conda. Here we use miniconda3 with python3 as an example
module load miniconda3

# Because the miniconda module designed by TWCC will automatically initialize environment variables, there is no need to run conda init.
# We recommended you remove the conda initialized contents 
conda init --reverse

# Create a Conda virtual environment (named mytf_gpu in this example), and install Anaconda tensorflow-gpu.
# The environment is pre-installed with CUDA and cuDNN, you do not need to install them by yourself.
conda create --name mytf_gpu tensorflow-gpu

# Enter the virtual environment
conda activate mytf_gpu
```

:::info
tensorflow-gpu version 2.2 is currently installed by default
- You can choose to install version 1 or 2, for example, use 
 `conda create --name mytf_gpu tensorflow-gpu=1.15.0` to install 1.15.0 version of tensorflow-gpu.
 - For other versions, refer to [<ins>the version list</ins>](https://anaconda.org/anaconda/tensorflow-gpu/files).
:::

<br/>


#### Deactivate and delete the virtual environment

```bash
# deactivate the virtual environment named mytf_gpu
conda deactivate

# delete the virtual environment named mytf_gpu 
conda remove --name mytf_gpu --all
```

<br/>


#### Unload Conda

```bash
# Uninstall all loaded modules
module purge
```

```bash
# Or, only unload miniconda
module unload miniconda3
```

<br/>


#### Delete remaining Conda files

```bash
# When Conda is no longer used, you can delete the remaining Conda installation files/configuration files (Be careful! Make sure the files in the directory are no longer in need before you run this command.)
# Check the contents of this path file first (usually only ~/.conda)
ls ~/.condarc ~/.conda ~/.continuum

# Then, delete the files
rm -rf ~/.condarc ~/.conda ~/.continuum
```

<br/>


### Step 2. Slurm job script with Conda

Once the Conda environment program and are ready, please follow the steps below to write a job script using Slurm to request resources, schedule job with queues, and submit jobs according to your needs.


The `.sh` file is the job script that will be submitted by Slurm, the content is divided into two parts:

1. **Information of Job, project and resources**: job name, number of nodes, number of jobs running per node, number of GPUs per node, maximum job running time, project ID, and queue name.
3. **The tasks to be executed in the job**


Write the following content and use the virtual environment `mytf_gpu` created in the above steps.


Run the following edit command > Press <kbd>i</kbd> key > Copy and paste the example > Press <kbd>ESC</kbd> key > Enter `:wq!` to save and exit. We're done!


```bash
vim <FILE_NAME>.sh
```

:::info
You may write `.sh`  files using the editor you're used to. We use vim in this example.
:::

- TensorFlow 2 with 1 node / 8GPUs

```bash
#!/bin/bash
#SBATCH --job-name=Hello_TWCC    ## job name
#SBATCH --nodes=1                ## request 1 node
#SBATCH --cpus-per-task=32       ## request 32 CPUs for that task
#SBATCH --gres=gpu:8             ## request 8 GPUs per node
#SBATCH --time=00:10:00          ## Run for up to 10 minutes (remember to change it after testing, or delete this line directly)
#SBATCH --account=PROJECT_ID     ## PROJECT_ID (e.g.,  MST108XXX). The billing project
#SBATCH --partition=gtest        ## gtest is a testing queue. After testing, you can change the queue to gp1d (Max. time: 1 day), gp2d (Max. time: 2 days), or gp4d (Max. time: 4 days)

module purge
module load miniconda3
conda activate mytf_gpu

# For most Conda users, the programs do not enable communication trough MPI.
# Therefore, you do not need to add srun/mpirun, just add the commands that need to be run.

python $(your command) 
```

:::info
1. You can add an email to get the job state notification to the script header:
    ```bash
    #SBATCH --mail-type=ALL
    #SBATCH --mail-user=$Your_email
    ```
2. The ratio of the requested resources will be based on the number of GPUs you assign, and will be allocated based on the ratio of 1 GPU: 4 CPU: 90 GB Memory. For examples,
    > Request 1 GPU, you will get 4 CPU cores and 90 GB Memory automatically allocated.<br/>
    > Request 8 GPUs, you will get 32 CPU cores and 720 GB Memory automatically allocated.
3. For more information about queue, please refer to [<ins>Usage instructions of queue and computing resources</ins>](https://www.twcc.ai/doc?page=hpc_cli#4-Queue-%E8%88%87%E8%A8%88%E7%AE%97%E8%B3%87%E6%BA%90%E4%BD%BF%E7%94%A8%E8%AA%AA%E6%98%8E).
:::

<br/>


#### Submit jobs

```bash
sbatch <FILE_NAME>.sh
```

:::info
After submitting, you will see the job ID assigned by the system.
:::

<br/>


#### View and cancel jobs

- You can use the following command to view the log of the running job.

```bash
tail -f slurm_<JOB_ID>.out
```

:::info
For more commonly used commands, please refer to [<ins>Slurm commands</ins>](https://www.twcc.ai/doc?page=hpc_cli#6-Slurm%E6%8C%87%E4%BB%A4):
1. Use `squeue -u $USER` to view the running job.
2. Use `sacct -X`to check today's running job and state to make sure whether it is still running or has already finished.
:::

- For canceling the running job, run the command:

```bash
scancel <JOB_ID>
```