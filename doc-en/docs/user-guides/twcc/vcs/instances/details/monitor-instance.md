---
sidebar_position: 4
sidebar_label: 'Monitor an instance'
slug: '/user-guides/twcc/vcs/instances/details-monitor-instance'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-monitor-instance-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-monitor-instance-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitor an instance

TWCC portal allows you to view the monitoring information of Virtual Compute Service (VCS) instances, including **CPU Utilization**, **Memory Utilization**, **Disk Read/Write rate** and **Network output rate**.

:::info
- For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twsdocs/role-main-zh).
- TWCC CLI currently does not support this feature.
:::


<br/>


## Monitoring metrics

- Go to the **VCS Instance Management** page, and select an instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b9409e6342c46db7233e45ca91f106d3.png)

- Select the **Monitoring** tab on the **VCS Instance Details** page to view the instance monitoring metrics:
    - **CPU Utilization(%)**: CPU usage over the time period For example, 2 (200%) means 2 CPUs are used up.
    - **Memory Utilization(MB)**: memory usage, in Megabytes (MB).
    - **Disk Reads(B/s)**: The read/write rate of each disk in Bytes/second (B/s).
    - **Network Out(B)**: The external network traffic of the VCS instance, a combination of east-west traffic (horizontal transmission between VCS instances) and north-south traffic (traffic between the client and the VCS instance). The unit is Bytes (B).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_97cfe20cb58d1cb95797b4a3a707b1bc.png)

:::info
Network traffic on TWCC portal includes the sum of east-west traffic and north-south traffic, while the quota and resource usage records in the [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/member/user-guides/member-key-quota/go-to-member-center.md) only show north-south traffic.
:::


<br/>


## Monitoring settings and chart download

- Move the cursor to the green dot to get the actual value.
- Move the cursor to any monitoring chart, click the <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> icon to download the monitoring chart file (`.png`) .
- From the menu on the right side, you can select the time to observe the changes of the container resource usage within the specific time period.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2376c9fcdcca8ac5b3e9d1c06c0f6225.png)

:::info
The specific duration can be selected from 1 hour, 6 hours, 12 hours, 1 day, 7 days, and 30 days.
:::