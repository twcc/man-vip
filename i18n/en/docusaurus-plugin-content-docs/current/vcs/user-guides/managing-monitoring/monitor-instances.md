---
sidebar_position: 4
title: 'Monitoring instances'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-monitor-instance-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-monitor-instance-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitoring instances

TWCC portal allows you to view the monitoring information of Virtual Compute Service (VCS) instances, including **CPU Utilization**, **Memory Utilization**, **Disk Read/Write rate** and **Network output rate**.

:::info
- For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務).
- TWCC CLI currently does not support this feature.
:::


<br/>


## Basic View

- Go to the **VCS Instance Management** page, and select an instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b9409e6342c46db7233e45ca91f106d3.png)

- Select the **Monitoring** tab on the **VCS Instance Details** page to view the instance monitoring information:
    - **CPU Utilization(%)**: If the CPU Utilization Rate is displayed as 2 (200%), it means that 2 CPU resources are used up.
    - **Memory Utilization(MB)**: Memory usage, in Megabytes (MB).
    - **Disk Reads(B/s)**: View the read/write rate of each disk in Bytes/second (B/s).
    - **Network Out(B)**: The network traffic of the output of the VCS instance, which is a combination of east-west traffic (horizontal transmission between VCS instances) and north-south traffic (traffic between the client and the VCS instance). The unit is Bytes (B).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_97cfe20cb58d1cb95797b4a3a707b1bc.png)

:::info
Network traffic on TWCC portal includes the sum of east-west traffic and north-south traffic, while the quota and resource usage records in the [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.vip/en/docs/member/user-guides/member-key-quota/enter-member-center) only show north-south traffic.
:::


<br/>


## Advanced operation

- Move the cursor to the green dot to get the actual value.
- Move the cursor to any monitoring chart, click the <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> icon to download the monitoring chart file (`.png`) .
- From the menu on the right side, you can select the time to observe the changes of the container resource usage within the specific time period.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2376c9fcdcca8ac5b3e9d1c06c0f6225.png)

:::info
The specific duration can be selected from 1 hour, 6 hours, 12 hours, 1 day, 7 days, and 30 days.
:::