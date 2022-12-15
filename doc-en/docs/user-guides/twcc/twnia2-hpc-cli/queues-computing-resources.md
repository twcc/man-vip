---
sidebar_position: 4
sidebar_label: 'Queues and compute resources'
slug: '/user-guides/twcc/twnia2-hpc-cli/queues'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-queue-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-queue-zh'
---

# Queues and compute resources

Available queues for submitting jobs in Taiwania 2 (HPC CLI):

| Queue name | Maximum walltime (hours) | High priority | Maximum number of jobs per user | Applicable project       | Node type   | Maximum number of GPUs per user |
| ---------- | ------------------ | -------- | ---------------- | -------------- | ------------ | ------------ |
| gp1d       | 24                 |          | 20               | all projects   | GPU compute nodes | 40 |
| gp2d       | 48                 |          | 20               | all projects   | GPU compute nodes| 40 |
| gp4d       | 96                 |          | 20               | all projects   | GPU compute nodes | 40 |
| gtest      | 0.5                |          | 5                | all projects   | GPU compute nodes | 40 |
| express    | 96                 | v        | 20               | Industrial and personal projects | GPU compute nodes | 256 |

:::info
- The compute nodes in Taiwania 2 (HPC CLI) are all GPU nodes. Every single node has 8 GPUs and 36 CPUs. The model names for GPUs is NVIDIA Tesla V100-SXM2-32GB and Intel(R) Xeon(R) Gold 6154 for CPUs.
- Users can submit up to 20 jobs, and all jobs can run with up to 40 GPUs in total. Each queue also has an upper limit for the maximum number of jobs submitted per user.
- Every job needs to assign with at least 1 GPU and the ratio of allocated resource cannot exceed: 1 GPU: 4 CPU: 90 GB Memory.
- gtest is a queue for testing. The maximum number of jobs per user is 5.
- **<ins>All of your processes will be automatically deleted</ins> if you run a GPU process for more than 5 minutes on the login node.**
- **A process will be automatically deleted if it uses more than 400% CPU usage on the login node**.
- Submitting jobs using the `srun` and `salloc` commands when logged into a node may cause computation interruptions or data loss, so it is recommended to use the `sbatch` command to run large computation jobs.
- We will regularly review and adjust the policies of queues and numbers of compute nodes. 
- The system admins will clean up login node and the /tmp directory in data transfer node irregularly to maintain the operation of the system. Please avoid storing important data in /tmp directory.
- Please contact Customer Service if you need to increase a single job's walltime.
:::