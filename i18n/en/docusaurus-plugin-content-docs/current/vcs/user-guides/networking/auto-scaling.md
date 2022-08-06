---
sidebar_position: 4
title: 'Auto Scaling'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe3143064a67e3d04615d38683938427.png) Auto Scaling

Auto Scaling is an automatic and dynamic mechanism for adjusting your resources with flexibility. This service will <ins>dynamically **increase** or **decrease** the number of VCS instances</ins> under the designated conditions to solve the problem of insufficient resources or service interruption caused by increasing workloads to improve the quality and efficiency of your service.

When the workload reaches the demand value, increase the number of instances; When the workload is lower than the demand value, decrease the number of instances. With [load balancing](https://man.twcc.ai/@twccdocs/guide-vcs-lbs-en), the traffic can be evenly distributed to effectively reduce the cost of idle VCS instance.



:::info
- For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-en#Auto-Scaling).
- [<ins>Auto Scaling</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-en) scales out new instances whose configuration is identical to the connected instance. Therefore,
    - If the scaled out instance <ins>**needs**</ins> to be attached with a new data disk, please create a data disk when **[<ins>Creating an instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)**.
    - On the contrary, if the scaled out instance <ins>**doesn't need**</ins> to be automatically attached with a new data disk, please separately **[<ins>Create a instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)** and [<ins>a data disk</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-create-data-disk-en), and then [<ins>attach the disk to the instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-en#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94).

:::

## Create Auto Scaling templates

You can create an Auto Scaling template and connect it to multiple VCS instances.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **Auto Scaling** from the service list to go to the **Auto Scaling Management** page, and click **＋CREATE**.
* Enter the following setting information, and then click **Next: REVIEW & CREATE>**:
    * **Name**: enter a name of the Auto Scaling.
    * **Description**: enter the description for the Auto Scaling (Optional).
    * **Meter name**: Select a monitor meter name, the resource indicator of the Auto Scaling policy. to determine whether to increase or decrease the number of the instances. The monitor meter names include <ins>*cpuutil*</ins> `(CPU usage)`, <ins>*memory.usage*</ins> ` (Memory usage)`, <ins>*network.income.bytes.rate*</ins> `(Network incoming rate)`, and <ins>*network.outgoing.usage*</ins> `(Network outgoing rate)`.
　
    * **Upper Threshold**: Set the highest threshold of the meter. For example: cpuutil for the meter and 80 for the upper threshold represents that the number of VCS instances will increase when the CPU usage exceeds 80%.
    * **Lower Threshold**: Set the minimum threshold of the meter. Below this threshold, the number of VCS instances will decrease.
    * **Max VCS instance no.**：Set the maximum value of the number of VCS instances, the default value is 2 (Auto scaling requires at least 2 VCS instances).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7be82db163d8270de60a4c1ce4fe86f4.png)


* Review the settings of auto scaling and project credit information, then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f17dfd01bc19df05beda61762d728a12.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

## Manage Auto Scaling

View Auto Scaling information and delete the Auto Scaling.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">


* In **Auto Scaling Management** page, the latest created auto scaling will be listed at the top. You can click Auto Scaling to check detailed information or execute **DELETE** or **REFRESH**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_784684345530ff7d728c9f2c37b629ea.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8401d370680f2f63f744352090e16a52.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>



## Connect/mount Auto Scaling to VCS VCS instances

The attached Auto Scaling should be used with [load balancing](https://man.twcc.ai/@twccdocs/guide-vcs-lbs-en) to automatically balance the workloads of VCS instances.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

*  Click **Virtual Compute Service (VCS)** from the service list to go to the **VCS Instance Management** page, and click your instance to go to the **VCS Instance Details** page. Then, click the **ATTACH** button next to **Auto Scaling**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a8032a2324394293f8960a0f4ffc8394.png)


:::info
The state of the VCS instance must be **`Ready`** before you can attach/detach the auto scaling to/from the instance.
:::

* Auto scaling has to be used with **load balancer** to evenly distribute traffic to each VCS instances in the group to achieve high service availability. 
* When **Auto Scaling** setting window pops up, select the name of the auto scaling, the notification link service (Optional), the load balancer name, and the port information, then click **OK**.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7a487763035e7d9553b675d54e29cb03.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>
