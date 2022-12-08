---
title: Scheduled Container
sidebar_position: 2
slug: '/user-guides/twcc/ccs-scheduled-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/doc-ccs-scheduled-main-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/doc-ccs-scheduled-main-en'
---


# <img src="https://i.imgur.com/mHLWfyb.pngg" width="25" height="25"/> Scheduled Container

Scheduled Container allows you to specify the start time of calculations on request and schedule the resource usage for batch tasks to improve productivity. Resources are recycled as soon as they are used, effectively saving development costs.

## Create a scheduled container

* Click **Scheduled Containers** from the list of services, and then click **CREATE** on the **Scheduled Containers** screen.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aef40da5de183bb3542ebdb3720cb661.png)


:::tip
You can click on the asterisk <i class="fa fa-star-o" aria-hidden="true"></i> on the left side of **All Services** to pin your favorite services to **My Favorite Services** to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_24f5077423013ccc325f1a4ccde9fcc6.png)


* Fill in the basic information of the container, select the image, basic configuration, and enter the command; the command will be executed automatically when the task-based container starts, and then click **NEXT: STROAGE>** to enter the STROAGE page.

:::tip
Please use [**Hyper File System**](/docs/user-guides/twcc/hfs) to upload the content of the program you want to run.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a06e1c9e7661e89d4ec3ebd0f732c0f.png)



* After the container is created, the system automatically mounts the Hyper File System to the container for better performance when users run artificial intelligence computing, or use the TWCC Cloud Object Storage service.

* Click **NEXT: SCHEDULE** to set the schedule.

:::info 
* [Cloud Object Storage](/docs/user-guides/twcc/cos)
* [Hyper File System](/docs/user-guides/twcc/hfs)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dbefe7f8061967cb70f90ea6556d91f7.png)


* The schedule can choose to execute the job immediately after startup or at a specific time after startup, and then click **NEXT : REVIEW & CREATE>**.

:::info
Scheduled for a specified time can be run as early as the next full time at the set time, once a scheduled container is created, it needs to be started first and will only be executed when the specified time comes.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d27c7fbead421f6bc61b526d033bd77e.png)


Then, review the specifications and price of the entire container and click "Create" to finish.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_92a3ccac69a3464f578bd5d6e39f502d.png)



## Manage scheduled containers
* Once a container has been created, it will appear in the list of scheduled container management containers. Make sure to **START** the container and it will perform the operation immediately or at the specified time when the status changes from **Inactive** to **Active**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_81e4d0d048b3288794f76dd80e3d9863.png)


* Click on the container list to view container configuration information or monitor container resource usage.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_72d1955c2961577b573b3e1e23a7797a.png)


### Configurations

* Enter the Scheduled Container Details **CONFIGURATIONS** to view basics, storage and connection information, or perform functions such as **start**, **stop**, **delete**, and **refresh**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04512a3a335af3fafb7d34a17d11e05b.png)


### Jobs

* Enter the **JOBS** to view the scheduled execution status, including the Job Started, Job Ended, the State, and the log of the container operation.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ce53d6402345e58eb829e66f8f623ba.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d29c01333ad958dc30c533964e3fd56.png)

:::caution
- The **Scheduled Log** feature does not ensure that all your logs are saved and available at the end of a container run. It is recommended that you dump your logs to [Hyper File System](hfs) or upload them to [Cloud Object Storage](/docs/user-guides/twcc/cos) to ensure their availability.
- If you would like TWCC maintenance staff to assist you in obtaining complete records, please write to Authorization Processing (isupport@twcc.io) and do not store sensitive data.
:::


## Monitoring scheduled containers
* Click **Monitoring** on the left to view the monitoring information service provided by the system for Tenant Admin, including the cumulative usage of the plan, the cumulative usage of specific users (a function of the tenant manager), the number of GPUs used, and the time of use.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f8f18097fe80e28198b6e33c85a847ef.png)


:::info
Tenant User can only see their own resource usage information. Tenant Admin can see the resource usage of all users in the project so that they can control the resource usage of the whole project.
:::
