---
sidebar_position: 8
title: 'Security Group'
sidebar_label: 'Security Group'
slug: '/user-guides/twcc/vcs/security-group'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-sg-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-sg-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Security Group

With TWCC Security Group, users can control the network security of the VCS instance by setting security rules to manage the ingress and egress traffic (network segments, protocols, or ports) of the instance.


:::info
- Security Group is designed to set individual security rules for each VCS instance. Therefore, at least one available VCS instance must be created before setting the security group rules.
- For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twsdocs/role-main-en).
:::


<br/>


## View the Security Group rules of a VCS instance

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **Security Group** from the service list to go to the **Security Group Management (VCS Instances)** page, and click on the available VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1dfbdda8636a9cf517c1ab718d8e3853.png)

* Enter **Security Group Rules Management** page, the current security group rules will be displayed.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

```bash
twccli ls vcs                   # List existing VCS instances
twccli ls vcs -secg -s 937648   # List the security group of the instance with ID 937648
```

</TabItem>

</Tabs>


<details>

<summary>Default Security Group rules of VCS instances</summary>


- The default ingress/egress rules of TWCC Linux instances:

| Direction | Internet protocol | Port (minimum) | Port (maximum)| Protocol|CIDR |
| -------- | -------- | -------- |-------- | -------- | -------- |
| ingress     | IPv4     | 443     |443 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 22     | 22|tcp |0.0.0.0/0 |
| egress     | IPv4     |      | |ANY |0.0.0.0/0 |
| ingress     | IPv4     |      | |icmp | 0.0.0.0/0|
| egress     | IPv6     |      | |ANY |::/0 |

- The default ingress/egress rules of TWCC Windows instances:

| Direction | Internet protocol | Port (minimum) | Port (maximum)| Protocol|CIDR |
| -------- | -------- | -------- |-------- | -------- | -------- |
| ingress     | IPv4     | 9833     |9833 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 443     |443 | tcp|0.0.0.0/0 |
| ingress     | IPv4     | 22     | 22|tcp |0.0.0.0/0 |
| egress     | IPv4     |      | |ANY |0.0.0.0/0 |
| ingress     | IPv4     |      | |icmp | 0.0.0.0/0|
| egress     | IPv6     |      | |ANY |::/0 |


</details>

<br/>

:::caution
Due to frequent security incidents, if your connection comes from the following countries: China, Germany, France, South Korea, the Netherlands, Poland and Russia, we will disable your remote connection to Windows instances (port: 9833).

If you need to connect to TWCC Windows instances, please contact Customer Service.
:::


<br/>



## Create a Security Group rule

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **Security Group** from the service list to go to the **Security Group Management (VCS Instances)** page, and click on the available VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1dfbdda8636a9cf517c1ab718d8e3853.png)
 
* Enter **Security Group Rules Management** page, the current security group rules will be displayed, and click **＋CREATE** to create a new rule.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4a0ee6ab4878d4179f72b88e286a4e1e.png)

* Enter **Create Security Group Rules** page, fill in the setting information of the security group rule, and then click **NEXT: REVIEW & CREATE>**.
    * Direction: Select **ingress** or **egress**.
    * Port Range (Min): Set the **beginning port** to which this rule applies.
    * Port Range (Max): Set the **ending port** to which this rule applies.
    * Protocol: Select the protocol, such as tcp, udp, icm, etc.
    * CIDR: Specify the CIDR range of this rule applies on the VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c4886b50ddc06e6e7739580c751f48d.png)

* Review your Security Group rule settings and the project credit, and then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8c6bf81bc1a6cadde4f29b637638a044.png)

* Once created, the new Security Group rule will be displayed in the list.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7b9e3833e023f503418413c1484e832.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

:::info
You can use `twccli net vcs --help` to check the details of the commands of setting Security Group rules.
:::

- To permit ingress connection from 10.10.10.0/24 on port TCP:81, use the commands as follows:

```
twccli net vcs -secg -s 892486 -cidr 10.10.10.0/24 -in -proto tcp -p 81
twccli ls vcs -secg -s 892486
```

<details>

<summary>Check the screenshot</summary>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c3070ab4f93cd206e3945c68e786abfb.png)

</details>

</TabItem>

</Tabs>


:::caution
- Considering information security risk, please do not set the CIDR to the insecure network segment of `x.x.x.x/0` except for `0.0.0.0/0`.
- Please set the port range carefully and measure the open range carefully. To avoid the risk of intrusions, it is not recommended to set the ingress port range from 0 to 65535.
:::

<br/>



## Delete a Security Group rule

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

Go to the **Security Group Rules Management** page> Select rules> click **DELETE** above.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b9ae7ca9d9f718eb07b29583dc844cb9.png)

- Or click the &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; menu button on the right side of the rule, and click **DELETE**.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

Enter the command :point_right: `twccli rm vcs -secg $SecurityGroupId` to delete Security Group rules.

:::info
Please use the UUID to identify the Security Group rule you want to delete.
You only need to provide at least the first 8 codes of UUID to delete it.
:::
Example:point_down::
```bash
twccli rm vcs -secg ff781775
```

</TabItem>

</Tabs>