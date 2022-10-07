---
sidebar_position: 3
title: 'Instance Management'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-manage-instance-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-manage-instance-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Instance Management: stop/start/shutdown/restart/delete

You may stop, start, shutdown, restart, and delete Virtual Compute Service(VCS) instance according to your needs and scenarios.

:::info
For the difference of permissions in VCS instance between Tenant Admin and Tenant User, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務) for more information.
:::

:::tip
For more information of VCS instances between state transition, billing, and impact, see [<ins>VCS Instance Life Cycle</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-en).
:::


<br/>



## Stop instances

If you will not use the instance for a period of time and want to keep various resources, you can click **STOP** to shutdown and release the instance resources.

:::caution
Please do not delete the instance during the **`Stopping`** state. Otherwise, the process will be affected and cause an **`Error`** in the instance.
:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > select the instance > click **STOP** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c3394008a508e87b15f4f260ee54816.png)

- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance &nbsp; > click **STOP**.
- Or enter the **VCS Instance Details** page > click **STOP** at the top.


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>


<br/>



## Start instances

To start and use the stopped instance, click **START**.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > select the instance > click **START** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_17097615c8df0573a7d9808b59720bce.png)


- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance &nbsp; > click **START**.
- Or enter the **VCS Instance Details** page > click **START** at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>


<br/>



## Shutdown instances

**The TWCC portal and TWCC CLI do not support the shutdown function, please operate it in the instance:**

- Linux instance: You can execute `sudo shutdown`, `sudo poweroff -f` in the instance to shut down the instance
- Windows instance: You can use `shutdown -s`, click the shutdown button at the bottom left of the desktop to shut down.


<br/>



## Restart instances

If you want to restart the shutdown instance, please click **START**, and the instance will enters in **`Starting`**, and ready to enters in the **`Ready`** state again.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instace Management** page > select the instance > click **START** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_87d03bbe71561f2c4c087393fe71c1c2.png)

- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance &nbsp; > click **START**.
- Or enter the **VCS Instance Details** page > click **START** at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>


<br/>



## Delete Instance

If you want to delete the instance permanently and no longer use it, delete the instance.

Other considerations for deletion:
- The data in the operating system (boot) disk will also be permanently deleted. If you need to keep it, you can [Create an instance image](https://man.twcc.ai/@TWSC/vcs-vds-instance-image-zh).
- The data disk will be automatically unmounted and kept.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the **VCS Instance Management** page > click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the instance &nbsp; > Click **DELETE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5d72553b5f80e7d41b981f6314092a27.png)

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


- Delete the instance's ID is **`937651`**, and check if it is deleted.

```
twccli rm vcs -s 937651
twccli ls vcs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_024803eddc7136ec4fa25af5fe2ddc84.png)

</TabItem>

</Tabs>

<br/>


---

:::tip
For more information of VCS instances between state transition, billing, and impact, see [<ins>VCS Instance Life Cycle</ins>](https://man.twcc.ai/@twccdocs/concept-vcs-lifecycle-en).
:::