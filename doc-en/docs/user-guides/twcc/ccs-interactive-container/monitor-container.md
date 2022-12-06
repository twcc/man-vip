---
sidebar_position: 5
sidebar_label: 'Monitoring'
slug: '/user-guides/twcc/ccs-interactive-container/monitor-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-monitor-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-monitor-zh' 
---

# Monitor a container

There are two ways to monitor container in TWCC portal. You can monitor the utilization of CPU, GPU, memory and GPU memory:

1. **Interactive Container Details** page: Monitor a specified container.
2. **Monitoring Interactive Container** page: Quickly switch the monitoring information between multiple containers, and view the total GPU number(pcs) and total GPU hour(s) of personal use.

Here we will walk you through the second monitoring method. For the first monitoring method, please refer to [monitoring container](/docs/user-guides/twcc/ccs-interactive-container/containers/details/details-monitor-container.md) for more information.

## Monitoring information

* Click **Monitoring** on the left menu, and select the container that you want to monitor in **Interactive Container Name** dropdown list. Here, you can switch between containers quickly.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5037f491c8ac81a6be8362c078ca3879.png)


* After selection, You can view the monitoring information provided by the container service below.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47106f0a7964568d93422cdf31e4d5b3.png)

- Like **Interactive Container Details** page, you can download the monitoring figures and observe the changes in container resource utilization within a certain period of time. In addition, you can also view personal **Total GPU Numbers(pcs) and Total GPU Hour(s)** within a certain period of time.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6411c83470541a125399dab70f789b79.png)


<br/>


:::info
**Tenant Users** can only see their own resource utilization information, while **Tenant Admins** can see the resource utilization of all users in the project to control the resource usage and credit of the project .
:::

