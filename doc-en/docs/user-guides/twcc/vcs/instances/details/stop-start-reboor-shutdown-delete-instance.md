---
sidebar_position: 3
sidebar_label: 'Stop/start/shutdown/restart/delete'
slug: '/user-guides/twcc/vcs/instances/details/stop-start-reboor-shutdown-delete-instance'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-manage-instance-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-manage-instance-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Stop/start/shutdown/restart/delete an instance

You may stop, start, shutdown, restart, and delete Virtual Compute Service (VCS) instances according to your needs and scenarios.

:::info
For the permission differences in VCS instance between Tenant Admins and Tenant Users, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twsdocs/role-main-en).
:::

:::tip
For more information regarding state transitions, **billing**, and the impact of service operations on VCS instances, please refer to [<ins>VCS instance lifecycle</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-en).
:::


<br/>


## Stop an instance

If you will not use the instance for a period of time and want to keep the resources, you can click **STOP** to shutdown and release the instance resources. The VCS instance will show **`Stopping`** state, and prepare to enter the **`Stopped`** state, which means that the resource has been released. In the **`Stopped`** state, **<ins>the instance will no longer be billed</ins>**.

:::caution
Please do not delete the instance during the **`Stopping`** state. Otherwise, the process will be affected and cause an **`Error`** in the instance.
:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > select the instance > click **STOP** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a1dcd53620eb41a4c44f5f1d30e2c306.png)

- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance > click **STOP**.
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



## Start/restart an instance

To resume and use a stopped instance, or to start an instance that has been shutdown, please click **Start**. The state of the instance will be **`Starting`** in the process of reallocating resources, and prepare for entering the **`Ready`** state again.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > select the instance > click **START** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d0090dad4cbc6cc5f441cb63277fefb8.png)

- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance > click **START**.
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



## Reboot an instance

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
Unlike [<ins>stopping instances</ins>](#stop-an-instance), after rebooting the instances, except for erasing the memory data, **resources are not released back to the resource pool (including floating IP)**, and the stored data are retained and can still be used after rebooting.
:::

<br/>



## Shutdown an instance

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
Unlike [<ins>stopping instances</ins>](#stop-an-instance), after shutting down the instances, except for erasing the memory data, **resources are not released back to the resource pool**. The stored data are retained and can still be used after starting again.
:::

<br/>


## Delete an instance

To permanantly delete an instance and no longer use it again, please delete the instance.

Other considerations for deletion:
- The data in the operating system (boot) disk will also be permanently deleted. If you need to keep it, you can [create an instance image](/docs/user-guides/twcc/vcs/instances/details/create-image.md).
- The data disk will be automatically unmounted and kept.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance > Click **DELETE**.

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
- If [Delete Protection](/user-guides/twcc/vcs/instances/details/view-edit-deletion-protection.md#enabledisable-deletion-protection) is enabled, you cannot delete the resource directly, please disable it first and then delete it again.
:::