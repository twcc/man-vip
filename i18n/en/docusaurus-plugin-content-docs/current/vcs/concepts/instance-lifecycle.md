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

- Go to the **VCS Instance Management** page > select the instance > click **STOP** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a1dcd53620eb41a4c44f5f1d30e2c306.png)

- Or click &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; next to the instance > click **STOP**.
- Or enter the **VCS Instance Details** page > click **STOP** at the top.


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

The operating restrictions after stopping are as follows.

- <i class="fa fa-times" aria-hidden="true"></i> Connect and login
- <i class="fa fa-times" aria-hidden="true"></i> Assign/detach public IP
- <i class="fa fa-times" aria-hidden="true"></i> Attach/detach VDS Data Disk
- <i class="fa fa-times" aria-hidden="true"></i> Create instance images
- <i class="fa fa-times" aria-hidden="true"></i> Attach/detach Auto Scaling and Load Balancing Service

:::info
1. Resources that will be **released** after the instance is stopped: GPU, CPU, vCPU, memory, OS disk, Floating IP (New Floating IP will be acquired after the instance is started again).
2. Resources that will be **kept** after the instance is stopped: Data Disk, Auto Scaling, Load Balancing, Static IP. The above resources will be automatically attached back to the instance after the instance is started again.
3. Except for the data in memory, which will be erased, all data stored in the instance will be reserved.
:::

:::caution
Please do not delete a VCS instance when it is in the **`Stopping`** state, otherwise it will affect the system processing and cause and instance **`Error`**.
:::

<br/>



## Start instances (and boot)

To resume and use a stopped instance, or to start an instance that has been shutdown, please click **Start**. The state of the instance will be **`Starting`** in the process of reallocating resources, and prepare for entering the **`Ready`** state again.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > select the instance > click **START** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d0090dad4cbc6cc5f441cb63277fefb8.png)

- Or click &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; next to the instance > click **START**.
- Or enter the **VCS Instance Details** page > click **START** at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

:::info
Most stopped instances will be created on a new physical host when they are started again.
:::

<br/>


## Restart VCS instances

To reboot (turn off and then turn on) an instance in the **`Ready`** state, please click **Reboot**. The state of the instance will be **`Rebooting`** in the process of rebooting, and prepare for entering the **`Ready`** state again.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instace Management** page > select the instance > click **REBOOT** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2fd1b395f3326ae2835a31ec7709f954.png)

- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance > click **REBOOT**.
- Or enter the **VCS Instance Details** page > click **REBOOT** at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

:::info
Unlike [<ins>stopping instances</ins>](#stop-instances), after rebooting the instances, except for erasing the memory data, **resources are not released back to the resource pool (including floating IP)**, and the stored data are retained and can still be used after rebooting.
:::

<br/>


## Shut down VCS instances

After performing a shutdown, the instance will be in the **`Shutdown`** state. In the **`Shutdown`** state, <ins>**the instance will continue to be billed**</ins>.

**TWCC portal and TWCC CLI do not support the shutdown function, please operate it in the instance:**

- Linux instance: You can execute `sudo shutdown` or `sudo poweroff -f` in the instance to shut it down
- Windows instance: You can use `shutdown -s`, or click the shutdown button at the bottom left of the desktop to shut it down.

The operating restrictions after shutdown are as follows.

- <i class="fa fa-times" aria-hidden="true"></i> Connect and login
- <i class="fa fa-times" aria-hidden="true"></i> Assign/detach public IP
- <i class="fa fa-check" aria-hidden="true"></i> Attach/detach VDS Data Disk
- <i class="fa fa-check" aria-hidden="true"></i> Create instance images
- <i class="fa fa-times" aria-hidden="true"></i> Attach/detach Auto Scaling and Load Balancing Service

:::info
Unlike [<ins>stopping instances</ins>](#stop-instances), after shutting down the instances, except for erasing the memory data, **resources are not released back to the resource pool**. The stored data are retained and can still be used after starting again.
:::

<br/>


## Delete VCS instances

To permanantly delete an instance and no longer use it again, please delete the instance.

Other considerations for deletion:
- The data in the operating system (boot) disk will also be permanently deleted. If you need to keep it, you can [create an instance image](https://man.twcc.vip/en/docs/vcs/user-guides/backup/creation).
- The data disk will be automatically unmounted and kept.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > click &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; next to the instance > Click **DELETE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6efa074941cc3858a671898566da0f05.png)

- Or go to the **VCS Instance Details** page > click **DELETE** at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


**Command**


```bash
twccli mk vcs -s    # Instance's ID
twccli ls vcs       # View result
```


<br/>

**Example**


- Delete the VCS instance with ID **`937651`**, and check if it is deleted.

```
twccli rm vcs -s 937651
twccli ls vcs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_024803eddc7136ec4fa25af5fe2ddc84.png)

</TabItem>

</Tabs>

<br/>


:::info
- A user can only create and delete virtual computing entities 10 times in a minute.
- If [Delete Protection](https://man.twcc.vip/en/docs/vcs/user-guides/management-and-monitoring/viewInfo-editDesc-deletionProtection#enabledisable-deletion-protection) is enabled, you cannot delete the resource directly, please disable it first and then delete it again.
:::