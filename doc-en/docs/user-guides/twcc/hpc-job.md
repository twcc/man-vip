---
title: HPC Job
sidebar_label: 'HPC Job'
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/doc-hpc-job-main-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/doc-hpc-job-main-en'
---


# <img src="https://i.imgur.com/HKggEPN.png" width="25" height="25"/> HPC Job

TWCC HPC Job uses the international open source software Slurm as the resource scheduler for HPC, a fault-tolerant, highly scalable cluster management system for large and small Linux clusters, and has become the resource manager used by many supercomputers.Slurm itself does not require tuning of the system kernel and is relatively independent. As a cluster management system, Slurm has three key functions:
* Allocate exclusive or non-exclusive access to a user's computer resources for a period of time.
* Provide a management framework for resource allocation, execution and monitoring of compute nodes.
* arbitrate resource allocation through a predefined Queue.

This HPC Job runs containers with Singularity, and users can use the Docker image files provided by this service to perform related AI operations.

:::info
:book: If you need to use more than 8 GPUs or do cross-node high speed computing, please use [<ins>Taiwania2 (HPC CLI)</ins>](/docs/user-guides/twcc/twnia2-hpc-cli) and refer to the following tutorial examples:
- [<ins>Create TAIWANIA2 containers</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-create-sglrt-container-en)
- [<ins>Run parallel computing with multi-nodes on containers －AI Benchmark</ins>](https://man.twcc.ai/@twccdocs/howto-twnia2-run-parallel-job-container-en)
:::

## Create a HPC Job

* Enter **HPC Job** Service, and on the **HPC Job Management** page click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aef40da5de183bb3542ebdb3720cb661.png)


:::tip
You can click on the star <i class="fa fa-star-o" aria-hidden="true"></i> on the left side of **All Services** to pin your favorite services to **My Favorite Services** to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3eb3fe1718abcddb3ff35a0c89b69349.png)



* Enter the Create HPC Job screen and first set the name of the job.
* Then select the image version/snapshot, hardware specification and input command in the Job 1 block. The content of the command or the program will be executed automatically when the container starts.
 
:::info
:bulb: Tip: Please use the [**Hyper File System (HFS)**](/docs/user-guides/twcc/hfs) to upload the content of the program you want to run first.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7bc4ee16088fec1795883d3d426f5615.png)


* Expand "Storage" to see the two HFS high-speed file storage paths mounted by default on this system.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9efad555551a9b4b7796ea934a826365.png)



:::info 
* [Cloud Object Storage (COS)](/docs/user-guides/twcc/cos)
* [Hyper File System (HFS)](/docs/user-guides/twcc/hfs)
:::

* HPC jobs can be set up with multiple calculation tasks. Click **ADD JOB** to expand the Job 2 setup block and continue setting up other jobs.

:::info
:bulb: Tip. Currently, HPC can set up up to five jobs at a time, and each job can run for up to four days.
:::

* Then repeat Job 1 to set up multiple compute jobs by selecting the image version/snapshot, hardware specifications, input commands, and storage information.Then click "NEXT : SCHEDULE>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_726fc7acecc03d78ce30248a60aec1fc.png)


* The schedule can choose to execute the job immediately after startup or at a specific time after startup, and then click **NEXT : REVIEW & CREATE>**.

:::info
:bulb: Tip: Jobs with a specified time can start as early as the next whole time setting. This job needs to be started manually to initiate the task (including scheduled job).
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19d1fc514f947a02c25df6a853be6ac5.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_18c21896c3caf04edb40f396a54771cd.png)


* Check the HPC Job configuration, commands, schedule and quota used, then click **CREATE** to complete.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_df21837ac09ef411fe016a3c93eaf30d.png)



## Manage HPC Jobs 

* Once job is created, it will appear at the top of the HPC Job Management list. Make sure to **START** the job and it will be executed immediately or at the specified time when the status changes from **Inactive** to **Active**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1d070950bb77b238f2bd7cb22896700.png)

* Click the list to enter the details page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19d760828becb73cf8d5814f4fea9620.png)


* Enter HPC Job Details **CONFIGURATIONS** to view basics, connection information, and job details, or to perform **START**, **STOP**, **DELETE**, and **REFRRESH**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b6da3563324aa2ca41854ff47fa3be7.png)


* Click "JOBS" to view the Job Started, Job ended and state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bb635fbca2d85123f2b4333fe6558a00.png)


* Click "VIEW LOG" to view the detailed LOG information of the job execution.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7a9928ea5db2d6d8d3c82b71f38b0fa4.png)

:::info
You can [connect to the data transfer node](/user-guides/twcc/hfs/connect-data-transfer-node.md) to the path `/work/{{system account}}/slurm_log` to view the computing history of all HPC jobs.
:::

## Monitoring a HPC Job
* Click **Monitor** on the left side to view the monitoring information service provided by the system for monitoring HPC work, including the cumulative usage of projects, cumulative usage of specific users, total number of GPUs and total GPU time, etc.

:::info
:bulb: Tip: Tenant User can only see their own resource usage information. Tenant Admin can see the resource usage of all users in the project so that they can control the resource usage of the whole project.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5c169240a4bb66bd95bb5923c3d4ebd6.png)


## Connection methods

* HPC Job provides data transfer node (xdata1.twcc.ai) and login node (ln01.twcc.ai), using SSH and SFTP connections respectively.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b352b61cf4888660801573ee9be92b9.png)



### Connect to the data transfer node 

:::info
Refer to [Hyper File System](/docs/user-guides/twcc/hfs) for using Filezilla with GUI to connect data transfer node and transfer datacd with SFTP.
:::

### Connect to the login node

:::info
:book: Refer to[Login node](/user-guides/twcc/twnia2-hpc-cli/connect/login-logout.md), connect to the node
:::

* After a successful login, you can directly use Slurm basic command `sinfo -V`, which should return version information for this service and confirm that this account can use Slurm features properly.

```
sinfo -V
```
![image](https://user-images.githubusercontent.com/46370453/184616633-9ed85f25-b638-40c4-9102-a16c0c52db8f.png)


## Introduction to Slurm basic commands

This chapter explains the basic Slurm commands and their usage. Users who are already familiar with Slurm can skip these commands. The following is a list of basic Slurm commands. The full usage and descriptions can be found by following the commands with **--help**.

| Command | Description |
| -------- | -------- |
| sacct     | This command is used to list the status of an account's associated job or job sets, such as running, terminated, or completed, and is the most basic job view command.     |
|salloc|It is used to allocate resources in real time, usually by allocating resources and generating a shell, which is then used to run the srun command to start and execute jobs.|
|sattach|Standard input, output and error messages can be mounted and unmounted multiple times in the currently running job or job set.|
|sbatch|Used to submit a job script for later execution. This script usually contains one or more srun instructions to start a parallel job and is one of the most basic job run instructions.|
|sbcast|It can be used to transfer files from the local hard disk to the hard disk of the node to which the job is assigned, providing better performance on compute nodes with little hard disk space, or compared to shared file systems.|
|scancel|Can be used to cancel a job or job set that is waiting or running, or to send any signal to all processes associated with a running job or job set.|
|scontrol|scontrol is an administrative tool for viewing and/or modifying the status of Slurm. Please note that many scontrol commands can only be run as the root user, so they are only available to TWCC administrators.|
|sinfo|sinfo information contains the status of partitions and nodes managed by Slurm. sinfo has various filtering, sorting and formatting options.|
|smap|smap contains status information about tasks, partitions and nodes managed by Slurm, but graphically reflects network topology information.|
|squeue|Squeue displays the status of a job or job srt. It has various filtering, sorting and formatting options. The default is to show running tasks in priority order and then waiting jobs in priority order, which is a common command for viewing jobs.|
|srun|srun is used to submit tasks, or as individual jobs within a job step. srun has various options for specifying resource requirements, including: minimum and maximum number of nodes, number of CPUs, whether to use specific nodes, and the characteristics of specific nodes (e.g., memory size, hard disk space, certain required features, etc.) A job can contain multi-step tasks that can run continuously or in parallel on independent or shared nodes, depending on the resources of the nodes assigned to them.|
|strigger|The strigger is used to set, get or view event triggers. Event triggers include events such as a node closing or working close to its time limit.|

### View node status with `sinfo`
 
The following example directly uses the `sinfo` command to see four states of the node (STATE field), namely drain*, drain, idle, and down, with the "*" asterisk indicating that the node can accept and execute tasks if it does not return to the following example, while down means that the node information is lost.


```
sinfo
```

    PARTITION       AVAIL TIMELIMIT    NODES     STATE     NODELIST
    SlurmDefault*    up 1-00:00:00            1     drain*   gn1101.twcc.ai
    SlurmDefault*    up 1-00:00:00           98     drain    gn0101.twcc.ai,gn0103.twcc.ai,gn0104.twcc.ai,gn0107.twcc.ai,gn0109.twcc.ai,gn0111.twcc.ai,gn0112.twcc.ai,gn0114.twcc.ai,gn0115.twcc.ai,gn0204.twcc.ai,gn0206.twcc.ai,gn0207.twcc.ai,gn0208.twcc.ai,gn0211.twcc.ai,gn0212.twcc.ai,gn0214.twcc.ai,gn0216.twcc.ai,gn0301.twcc.ai,gn0302.twcc.ai,gn0306.twcc.ai,gn0310.twcc.ai,gn0311.twcc.ai,gn0315.twcc.ai,gn0317.twcc.ai,gn0318.twcc.ai,gn0405.twcc.ai,gn0410.twcc.ai,gn0411.twcc.ai,gn0415.twcc.ai,gn0416.twcc.ai,gn0501.twcc.ai,gn0502.twcc.ai,gn0503.twcc.ai,gn0510.twcc.ai,gn0511.twcc.ai,gn0513.twcc.ai,gn0515.twcc.ai,gn0516.twcc.ai,gn0517.twcc.ai,gn0602.twcc.ai,gn0606.twcc.ai,gn0608.twcc.ai,gn0609.twcc.ai,gn0612.twcc.ai,gn0613.twcc.ai,gn0617.twcc.ai,gn0703.twcc.ai,gn0705.twcc.ai,gn0708.twcc.ai,gn0709.twcc.ai,gn0710.twcc.ai,gn0711.twcc.ai,gn0713.twcc.ai,gn0714.twcc.ai,gn0801.twcc.ai,gn0802.twcc.ai,gn0806.twcc.ai,gn0811.twcc.ai,gn0812.twcc.ai,gn0818.twcc.ai,gn0911.twcc.ai,gn0914.twcc.ai,gn0915.twcc.ai,gn0918.twcc.ai,gn1003.twcc.ai,gn1005.twcc.ai,gn1006.twcc.ai,gn1010.twcc.ai,gn1011.twcc.ai,gn1013.twcc.ai,gn1016.twcc.ai,gn1018.twcc.ai,gn1026.twcc.ai,gn1027.twcc.ai,gn1102.twcc.ai,gn1104.twcc.ai,gn1107.twcc.ai,gn1109.twcc.ai,gn1110.twcc.ai,gn1112.twcc.ai,gn1114.twcc.ai,gn1115.twcc.ai,gn1119.twcc.ai,gn1120.twcc.ai,gn1122.twcc.ai,gn1127.twcc.ai,gn1202.twcc.ai,gn1203.twcc.ai,gn1207.twcc.ai,gn1208.twcc.ai,gn1210.twcc.ai,gn1212.twcc.ai,gn1214.twcc.ai,gn1218.twcc.ai,gn1222.twcc.ai,gn1226.twcc.ai,gn1228.twcc.ai,gn1230.twcc.ai
    SlurmDefault*    up 1-00:00:00          152     idle     gn0102.twcc.ai,gn0105.twcc.ai,gn0106.twcc.ai,gn0108.twcc.ai,gn0110.twcc.ai,gn0113.twcc.ai,gn0116.twcc.ai,gn0117.twcc.ai,gn0118.twcc.ai,gn0201.twcc.ai,gn0202.twcc.ai,gn0203.twcc.ai,gn0205.twcc.ai,gn0209.twcc.ai,gn0210.twcc.ai,gn0213.twcc.ai,gn0215.twcc.ai,gn0217.twcc.ai,gn0218.twcc.ai,gn0303.twcc.ai,gn0304.twcc.ai,gn0305.twcc.ai,gn0307.twcc.ai,gn0308.twcc.ai,gn0309.twcc.ai,gn0312.twcc.ai,gn0313.twcc.ai,gn0314.twcc.ai,gn0316.twcc.ai,gn0401.twcc.ai,gn0402.twcc.ai,gn0403.twcc.ai,gn0404.twcc.ai,gn0406.twcc.ai,gn0407.twcc.ai,gn0408.twcc.ai,gn0409.twcc.ai,gn0412.twcc.ai,gn0413.twcc.ai,gn0414.twcc.ai,gn0417.twcc.ai,gn0418.twcc.ai,gn0504.twcc.ai,gn0505.twcc.ai,gn0506.twcc.ai,gn0507.twcc.ai,gn0508.twcc.ai,gn0509.twcc.ai,gn0512.twcc.ai,gn0514.twcc.ai,gn0518.twcc.ai,gn0601.twcc.ai,gn0603.twcc.ai,gn0604.twcc.ai,gn0605.twcc.ai,gn0607.twcc.ai,gn0610.twcc.ai,gn0611.twcc.ai,gn0614.twcc.ai,gn0615.twcc.ai,gn0616.twcc.ai,gn0618.twcc.ai,gn0701.twcc.ai,gn0702.twcc.ai,gn0704.twcc.ai,gn0706.twcc.ai,gn0707.twcc.ai,gn0712.twcc.ai,gn0715.twcc.ai,gn0716.twcc.ai,gn0717.twcc.ai,gn0718.twcc.ai,gn0803.twcc.ai,gn0804.twcc.ai,gn0805.twcc.ai,gn0807.twcc.ai,gn0808.twcc.ai,gn0809.twcc.ai,gn0810.twcc.ai,gn0813.twcc.ai,gn0814.twcc.ai,gn0815.twcc.ai,gn0816.twcc.ai,gn0817.twcc.ai,gn0901.twcc.ai,gn0902.twcc.ai,gn0903.twcc.ai,gn0904.twcc.ai,gn0905.twcc.ai,gn0906.twcc.ai,gn0907.twcc.ai,gn0908.twcc.ai,gn0909.twcc.ai,gn0910.twcc.ai,gn0912.twcc.ai,gn0913.twcc.ai,gn0916.twcc.ai,gn0917.twcc.ai,gn1001.twcc.ai,gn1002.twcc.ai,gn1004.twcc.ai,gn1007.twcc.ai,gn1008.twcc.ai,gn1009.twcc.ai,gn1012.twcc.ai,gn1014.twcc.ai,gn1015.twcc.ai,gn1017.twcc.ai,gn1019.twcc.ai,gn1020.twcc.ai,gn1021.twcc.ai,gn1022.twcc.ai,gn1023.twcc.ai,gn1024.twcc.ai,gn1025.twcc.ai,gn1028.twcc.ai,gn1029.twcc.ai,gn1030.twcc.ai,gn1103.twcc.ai,gn1105.twcc.ai,gn1106.twcc.ai,gn1108.twcc.ai,gn1113.twcc.ai,gn1116.twcc.ai,gn1117.twcc.ai,gn1118.twcc.ai,gn1121.twcc.ai,gn1123.twcc.ai,gn1124.twcc.ai,gn1125.twcc.ai,gn1126.twcc.ai,gn1128.twcc.ai,gn1129.twcc.ai,gn1130.twcc.ai,gn1201.twcc.ai,gn1204.twcc.ai,gn1205.twcc.ai,gn1206.twcc.ai,gn1209.twcc.ai,gn1211.twcc.ai,gn1213.twcc.ai,gn1215.twcc.ai,gn1216.twcc.ai,gn1217.twcc.ai,gn1219.twcc.ai,gn1220.twcc.ai,gn1221.twcc.ai,gn1223.twcc.ai,gn1224.twcc.ai,gn1225.twcc.ai,gn1227.twcc.ai,gn1229.twcc.ai
    SlurmDefault*    up 1-00:00:00            1     down     gn1111.twcc.ai



### Submit, view and delete a job

* Use the `srun` command to schedule a job named demo, sleep 100.

```
srun -J demo sleep 100 &
```
![image](https://user-images.githubusercontent.com/109254397/184206098-e43782b4-cadc-480c-b959-23e71c886e09.png)


* Use the sacct command to check the status of the latest job and confirm from the bottom that there is a job named demo running with a job ID of 1962.

```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184206909-440fdbbd-6d84-4b01-8612-81c8a8ae6696.png)

* Use the scancel command to delete the job with ID 1962, then enter Confirm Terminate again to terminate the job.　

```
scancel 1962
```
![image](https://user-images.githubusercontent.com/109254397/184207594-2e409d2f-2dfb-4dc4-a5ad-28c01e095654.png)


* If you use sacct again, you can see that the ID 1962 job has been terminated (in bold).

```
sacct
```
![image](https://user-images.githubusercontent.com/109254397/184207841-fb9b8111-f814-48ca-8222-baee3da121ea.png)


### Submit container jobs with `sbatch` and Singularity

Use the sbatch command to submit the job and use the wrap option to wrap the content to be run. The content is a singulatiry command that uses the ``docker://registry.twcc.ai/ngc/nvidia/ubuntu-v1:flatest'' image file to enable the container and runs the ``**date** command inside the container. id is 1963.

```
sbatch --wrap='singularity exec docker://registry.twcc.ai/ngc/nvidia/ubuntu-v1:latest date'
```
![image](https://user-images.githubusercontent.com/109254397/184208055-6f66fc16-83a7-43bf-b9f1-446cee618d80.png)

* Browse the log information in this directory directly via the tail command.The log format is slurm-Job_ID.out, for example "slurm-1963.out" in the above example. You can see that the image is not enabled, and then execute the date command to display the time.

```
tail -f slurm-1963.out 
```
![image](https://user-images.githubusercontent.com/109254397/184208732-9fbc9c5c-6a22-4606-91e4-ec57f861dbd4.png)