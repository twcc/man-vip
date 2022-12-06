---
sidebar_position: 10
title: 'Auto Scaling'
sidebar_label: 'Auto Scaling'
slug: '/user-guides/twcc/vcs/auto-scaling'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-auto-sacling-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Auto Scaling is an automatic and dynamic mechanism for adjusting your resources with flexibility. This service will <ins>dynamically **increase** or **decrease** the number of VCS instances</ins> under the designated conditions to solve the problem of insufficient resources or service interruption caused by increasing workloads to improve the quality and efficiency of your service.

Auto Scaling is an automatic and flexible adjustment monitoring mechanism that <ins>dynamically **increases** or **decreases** the number of VCS instances</ins> under the designated conditions in response to the problem of insufficient resources or service interruptions caused by the increasing workloads to improve the the quality and efficiency of your service.

When the workload reaches the demand value, it increases the number of instances; when the workload falls below the demand value, it immediately decreases the number of instances. Also, with [load balancing](https://man.twcc.vip/en/docs/vcs/user-guides/networking/load-balancing), traffic can be distributed evenly to effectively reduce the cost of idle VCS instances.

:::info
- For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-en#Auto-Scaling).
:::

:::caution
[<ins>Auto Scaling</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-en) scales out new instances whose configuration is identical to the connected instance. Therefore,
- If the scaled out instance <ins>**needs**</ins> to be attached with a new data disk, please create a data disk when **[<ins>Creating an instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)**.
- On the contrary, if the scaled out instance <ins>**doesn't need**</ins> to be automatically attached with a new data disk, please separately **[<ins>Create a instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)** and [<ins>a data disk</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-create-data-disk-en), and then [<ins>attach the disk to the instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-en#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94).

:::


<br/>


## Create Auto Scaling templates

You can create an Auto Scaling template and connect it to multiple VCS instances.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **Auto Scaling** from the service list to go to the **Auto Scaling Management** page, and click **+CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

* Enter the following setting information, and then click **Next: REVIEW & CREATE>**:
    * **Name**: Enter the name of the Auto Scaling.
    * **Description** (Optional): Enter the description for the Auto Scaling.
    * **Meter name**: Select the Meter name, which is a resource indicator for Auto Scaling to determine whether to scale up or down the number of VCS instances. The monitor meter names include four types of indicators, which are <ins>*cpuutil*</ins> `(CPU usage)`, <ins>*memory.usage*</ins> ` (Memory usage)`, <ins>*network.income.bytes.rate*</ins> `(Network incoming rate)`, and <ins>*network.outgoing.usage*</ins> `(Network outgoing rate)`.
    * **Upper Threshold**: Set the maximum threshold of the meter. For example: *cpuutil* for the meter and 80 for the upper threshold represents that the number of VCS instances will increase when the CPU usage exceeds 80%.
    * **Lower Threshold**: Set the minimum threshold of the meter. Below this threshold, the number of VCS instances will be decreased.
    * **Max VCS instance no.**: Set the maximum value of the number of VCS instances, the default value is 2 (Auto scaling requires at least 2 VCS instances).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2468e0c6bb5e1d80fcfae77b33ddb335.png)

* Review the settings of Auto Scaling and project credit information, then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2c81f304e7d0ed9ef2755486f4367831.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

<br/>


## Manage Auto Scaling

View Auto Scaling information and delete the Auto Scaling.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">


* In **Auto Scaling Management** page, the latest created Auto Scaling will be listed at the top. You can click the Auto Scaling list to check detailed information or execute **DELETE** or **REFRESH**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e46aa8208dc29a30821ea4fa7f8f6dbb.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_64ba47a730a26a9ece85b89dd290542c.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>


<br/>



## Attach Auto Scaling to VCS instances

The attached Auto Scaling should be used with [load balancing](https://man.twcc.vip/en/docs/vcs/user-guides/networking/load-balancing) to automatically balance the workloads of VCS instances.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

*  Click **Virtual Compute Service (VCS)** from the service list to go to the **VCS Instance Management** page, click your instance you want to attach to and go to the **VCS Instance Details** page. Then, click the **ATTACH** button next to **Auto Scaling**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d372632414a0a2eae74be0211cf1ea2d.png)

:::info
The state of the VCS instance must be **`Ready`** before you can attach/detach the auto scaling to/from the instance.
:::

* Auto scaling has to be used with **load balancer** to evenly distribute traffic to each VCS instances in the group to achieve high service availability. 
* When **Auto Scaling** setting window pops up, select the name of the auto scaling, the notification link service (optional), the load balancer name, and the port information, then click **OK**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e7e39b4be93690f8cf382fb89b71364c.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>
