---
sidebar_position: 2
title: 'Instance lifecycle'
sync_original_production: 'https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/concept-vcs-lifecycle-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VCS instance lifecycle


Actions performed on the VCS instances via portal or in the instance, such as create, stop, start, shut down, restart and delete, are closely related to instance states as well as instance resources, data, and billing. Actions also affects connection, image, load balancing, Auto Scaling, disk and other related services. In this document, we explain in detail the relationship between instance lifecycle, meanings, and billing of a VCS instance from its creation to its deletion.

- Actions and the transitions between VCS instance states:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ddbf0fb265fdc81e6d0ba2e28bb4f75.png)

- The relationship between instance state, state description and usage billing is shown in the following table:

| Instance state | State description |Usage billing | 
| -------- | -------- | -------- |
| **`Starting`**     | Prepare to enter the **`Ready`** state.<br/> (1) When creating an instance: resources are allocated for instance initialization<br/> (2) When starting the instance in the **`Stopped`** state: the stopped instance is starting. <br/> (3) When starting the instance in the **`Shutdown`** state: the shutdown instance is starting.| Except (3) will be billed, (1) and (2) are not billed     | 
| **`Ready`**     | The initialization has been completed, and the instance can be connected and ready for use.|Billed     | 
| **`Stopping`**   |Instance resources are being released, preparing to enter in the **`Stopped`** state | Billed    | 
| **`Stopped`**    |Select STOP on the portal, and the instance enters the **`Stopped`** state (instance shutdown and computing resources have been released), and you can click start on portal again to re-allocate resources. | Not billed|
| **`Shutdown`**    |After executing the shutdown command in the instance, the instance enters the **`Shutdown`** state, and it can be restarted by selecting START on the portal. | Billed |
| **`Queueing`**     | The system is allocating resources . After obtaining the resources, the instance will enter **`Starting`** state.| Not billed |
| **`Rebooting`**    | The instance is in the process of rebooting and preparing to enter the **`Ready`** state. | Billed |
| **`Deleting`**     | The instance is in the process of being deleted and will be permanently deleted.|Billed until the instance is successfully deleted     | 

<br/>


## Create VCS instances
When you create a VCS instance, resources are allocated for the instance initialization. The instance enters the **`Starting`** state, which is not ready for use.

When it enters **`Ready`** state, you can perform the following actions:


- <i class="fa fa-check" aria-hidden="true"></i> Connect to the instance
- <i class="fa fa-check" aria-hidden="true"></i> Attach/detach the VDS data disks
- <i class="fa fa-check" aria-hidden="true"></i> Create the instance image
- <i class="fa fa-check" aria-hidden="true"></i> Assign/detach public IP
- <i class="fa fa-check" aria-hidden="true"></i> Attach/detach the auto scaling and the load balancing

<br/>


## Stop VCS instances

If you plan not to use the instance for a period of time and want to keep the resources, you can click **STOP** to shut down the instance and release resources. The instance will be in the **`Stopping`** state and ready to  change to the **`Stopped`** state which the resources have been released. Under the **`Stopped`** state, <ins>**instance will no longer be billed**</ins>.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- 進入「**虛擬運算個體管理**」頁 > 勾選個體 > 點選上方「**停止**」。
- Enter ****

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_65a8bd007a7145bc66057988f0f0b8c8.png)

- 或點選個體旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**停止**」。
- 或進入「**虛擬運算個體詳細資料**」頁 > 點選上方「**停止**」。

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>

The operating restrictions are as follows:


- <i class="fa fa-times" aria-hidden="true"></i> Connect to the instance
- <i class="fa fa-times" aria-hidden="true"></i> Create/remove public IP
- <i class="fa fa-times" aria-hidden="true"></i> Attach/detach the VDS data disks
- <i class="fa fa-times" aria-hidden="true"></i> Create the instance image
- <i class="fa fa-times" aria-hidden="true"></i> Attach/detach the auto scaling and the load balancing

:::info
1. Once being stopped, the resources of the instance are released, including GPU, CPU, vCPU, memory and system disk.
2. Once being stopped, the following resources of the instance will be **preserved** and will be configured for the instance when restarting: public IP, data disk, Auto Scaling, and Load Balancing.
3. All data stored in the instance will be retained except for the data in the memory.
4. For stopping the instance, see [<ins>Stop VCS instance</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-manage-instance-en#%E5%81%9C%E6%AD%A2%E5%80%8B%E9%AB%94).
:::

<br/>


## Restart VCS instances

Click start to restore and use the stopped instance, then the instance will enter in **`Starting`** state. The system is re-allocating the resources, then the instance is ready to enter **`Ready`** state again.
:::info
1. Most of the instances that stop and restart will be created on the new physical host.
2. For starting the instance, see [<ins>Restart VCS instance</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-manage-instance-en#%E9%87%8D%E5%95%9F%E5%80%8B%E9%AB%94).
:::

<br/>


## Shut down VCS instances

After the shutdown command is executed, the instance will enter in **`Shutdown`** state. In the **`Shutdown`** state, <ins>**the instance will continue to be billed**</ins>.

The operating restrictions are as follows:

- <i class="fa fa-times" aria-hidden="true"></i> Connect to the instance
- <i class="fa fa-times" aria-hidden="true"></i> Create/remove public IP
- <i class="fa fa-check" aria-hidden="true"></i> Attach/detach the VDS data disks
- <i class="fa fa-check" aria-hidden="true"></i> Create the instance image
- <i class="fa fa-times" aria-hidden="true"></i> Attach/detach the auto scaling and the load balancing

:::info
- Unlike [<ins>Stop VCS instance</ins>](#Stop-VCS-instance), after shutting down, the memory data of the instance will be cleared, and **the resources are not released back to the resource pool**. All stored data are retained and can be used after restarting.
- For shutdown steps, see [<ins>Shut down VCS instance</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-manage-instance-en#%E5%88%AA%E9%99%A4%E5%80%8B%E9%AB%94).
:::

<br/>


## Start VCS instances

If you want to start instance that has been shut down, select START then the instance will enter **`Starting`** state, which means that it is booting, and preparing enter **`Ready`** state again.

:::info
For starting the instance, see [<ins>Restart VCS instance</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-en#%E5%80%8B%E9%AB%94%E9%87%8D%E9%96%8B%E6%A9%9F).
:::

<br/>


## Delete VCS instances

If you want to delete the instance permanently and no longer use it, select DELETE then the instance will enter **`Deleting`** state. <ins>**After the instance is successfully deleted, it will no longer be billed**</ins>, and disappeared from the instance list. Other notices for deletion:

- The data in the operating system disk (system disk) will also be deleted permanently. You can create an image to keep the data.
- The data disk will be automatically detached and kept.

:::info
For deleting the instance, see [<ins>Delete VCS instance</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-manage-instance-en#%E5%88%AA%E9%99%A4%E5%80%8B%E9%AB%94).
:::