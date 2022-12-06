---
sidebar_position: 6
sidebar_label: 'Monitor a container'
slug: '/user-guides/twcc/ccs-interactive-container/details-monitor-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-monitor-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-monitor-zh' 
---

# Monitor a container

There are two ways to monitor container in TWCC portal. You can monitor the utilization of CPU, GPU, memory and GPU memory:

1. **Interactive Container Details** page: Monitor a specified container.
2. **Monitoring Interactive Container** page: Quickly switch the monitoring information between multiple containers, and view the total GPU number(pcs) and total GPU hour(s) of personal use.

Here we will walk you through the first monitoring method. For the first monitoring method, please refer to [monitoring container](/docs/user-guides/twcc/ccs-interactive-container/containers/details/details-monitor-container.md) for more information.

## Monitoring information

* In **Interactive Container Management** page, choose a specific container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ae7be7274e4ae575a119f7bf456fca6d.png)

* In **Interactive Container Details** page, click **MONITORING** tab to view container monitoring information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c97047bbb8176ced48bef6c1383e273e.png)

- Hover to any monitoring block, click <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> to download the monitoring figure (`.png`) .
- You can select the time period in the menu on the right side to observe the changes in the container resource utilization within a certain period of time.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9195b9f05876c34d1671ce0048f3b5d0.png)


:::info
The specific period of time can be chosen from 1 hour, 6 hours, 12 hours, 1 day, 7 days, 30 days.
:::

<br/>


:::info
**Tenant Users** can only see their own resource utilization information, while **Tenant Admins** can see the resource utilization of all users in the project to control the resource usage and credit of the project .
:::