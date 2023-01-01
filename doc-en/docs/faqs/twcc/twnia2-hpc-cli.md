---
sidebar_position: 4
title: 'TWNIA2 (HPC CLI) (TWNIA2)'
sidebar_label: 'TWNIA2 (HPC CLI)'
slug: '/faqs/twcc/twnia2-hpc-cli'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-twnia2-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-twnia2-zh'
---

# FAQs | Taiwania 2 (HPC CLI)

## Login

<details>

<summary> Q1. How to login to Taiwania 2 (HPC CLI)?</summary>

Login using SSH connection with the login node of ln01.twcc.ai. Enter your system account and system password to complete the login. For detailed steps, refer to <ins><a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/%2F%40twccdocs%2Fguide-twnia2-prerequisite-for-connection-zh">this document</a></ins> for more information.



</details>

<details>

<summary> Q2. What is the available open-source software for the SSH connection to TWCC's CCS, VCS and HPC?</summary>

Available open-source software includes MobaXterm, PuTTY, VSCode, etc.

</details>

<details>

<summary> Q3. Failed to log in recently, but able to log in to Taiwania 2 (HPC CLI) half a year ago?</summary>

The validity period of system password is 180 days. Please reset your system password in [<ins>Member Center<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) before you can re-login successfully.

</details>

<div style={{height:10+'px'}}></div>


## Resources allocation and monitoring


<details>

<summary> Q1. Can I run multi-node parallel jobs on Taiwania 2 (HPC CLI)?</summary>

You can request resources using [<ins>Slurm</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-en/%2F%40twccdocs%2Fguide-twnia2-slurm-intro-en) and run multi-node parallel jobs with equal distribution of high workloads to improve the processing efficiency.

</details>

<details>

<summary> Q2. The node will be given by the system automatically or need to obtain manually when using cross nodes computing?</summary>

You can use Slurm command to obtain nodes, refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-en/%2F%40twccdocs%2Fguide-twnia2-job-parameter-en) for more information.

</details>

<details>

<summary> Q3. Why error occurs when I try to request multiple CPUs?</summary>

Please make sure the ratio of the resources is based on 1 GPU : 4 CPU : 90 GB Memory. For example, the number of GPU should be 8 if you need 32 CPUs.

</details>

<div style={{height:10+'px'}}></div>



## Packages

<details>

<summary> Q1. How to deploy environment and run my program on Taiwania 2 (HPC CLI)?</summary>

1. Conda: Use simple Conda commands to install packages and switch to your specific virtual environment. Also, with different versions of Python, Conda can reduce the compatibility problems of multiple package versions. For more information, please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-twnia2-conda-manage-packages-submit-job-zh).
2. Singularity: By using Singularity to pack the packages and programs you need, you can create a container environment on Taiwania 2 (HPC CLI) and deploy, migrate and share your packages rapidly. For more information, please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-twnia2-create-sglrt-container-zh).


</details>

<details>

<summary> Q2. Can you help me install the packages?</summary>

You have the permission to install the package freely, please install it yourself according to your needs. In addition, we recommend that you use **Conda** or **Singularity** container to manage your packages.

</details>


<details>

<summary> Q3. What is the Slurm scheduling system?</summary>

Please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/%2F%40twccdocs%2Fguide-twnia2-slurm-intro-zh) for the detailed description of Slurm system architecture.

</details>

<details>

<summary> Q4. Is it possible to install Rclone, the synchronization tool, on Taiwania 2 (HPC CLI)?</summary>


Taiwania 2 (HPC CLI) has the latest version of Rclone installed. You can use the `module load rclone` command to obtain the environment of Rclone. Rclone is written in Go language and can be used directly after unzipping in your home directory.

</details>

<details>

<summary> Q5. Does Taiwania 2 (HPC CLI) support Nvidia's CUDA computing architecture?</summary>

Yes, you can use the `module avail` command on Taiwania 2 (HPC CLI) to list available modules and use the `module load` command to select the the CUDA version you need.

</details>

<details>

<summary> Q6. Why can some packages be used in an Interactive container but not in Taiwania 2 (HPC CLI)? Don't the two share Hyper File System (HFS)?</summary>

The storage environment of the two is the same, but the computing environment is different:

- The computing environment of the Interactive container is built using the TWCC container image file.
- Taiwania 2 (HPC CLI) requires users to deploy their own computing environment. <br/><i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> <b>Tip:</b> Taiwania 2 (HPC CLI) may use the `module` command to load the required packages. Refer to 
<ins><a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-en/%2F%40twccdocs%2Fguide-twnia2-module-intro-en">this document</a></ins> for usage.

</details>

<div style={{height:10+'px'}}></div>


## Data storage and transfer

<details>

<summary> Q1. Why is the directory of /home/$USER empty after login?</summary>

The storage space of Taiwania 2 (HPC CLI) is Hyper File System. Only you have full permission, so the storage space will be empty if you never load any data.

</details>

<details>

<summary> Q2. Will the files in Taiwania 2 (HPC CLI) be deleted once the project expires?</summary>

The storage space is bound with your personal account, so the files will not be deleted along with the project after the project expires.

<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> <b>Important:</b> <b>The system will regularly clean up the resources under the TWCC account that have not been used for a long time. Please be sure to back up your data regularly.</b>

</details>

<div style={{height:10+'px'}}></div>


## Networking and security
<details>

<summary> Q1. What is the IP address of Taiwania 2 (HPC CLI)?</summary>

203.145.219.98

</details>

<div style={{height:10+'px'}}></div>


## Execution errors
<details>

<summary> 

Q1. Occurs this error `QOSMaxSubmitJobPerUserLimit Error` when using Taiwania 2 (HPC CLI)?
</summary>

This error message showed that you have submitted over 20 computing job (queue **gtest** is for experimental use, only able to submit 5 jobs).

When the error occurs, you are recommended to use the `squeue` command to check the job state and cancel the pending or running job using the `scancel` command to reduce the quantity of the job. 

For instructions on using Queues and computing resources, please refer to <a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/%2F%40twccdocs%2Fguide-twnia2-queue-zh">this document</a>.


</details>

<details>

<summary>

 Q2. Occurs this error `QOSMaxGRESPerUser` in `NODELIST(REASON)` after job submission? 
</summary> 

This error message showed that you have reached the maximum number of GPUs calculated by Taiwania 2 (HPC CLI) (the base system is set to 40 GPUs).

For instructions on using Queues and computing resources, please refer to <a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-queue-zh">this document</a>. If you reach the limit, you will not be able to submit your work, so please ask for less GPU resources.
    
</details>