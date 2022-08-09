---
sidebar_position: 2
---

# Monitor your container

There are two ways to monitor container in TWCC portal. You can monitor the utilization of CPU and GPU, memory utilization, GPU memory utilization, disk reads/writes rate and network out/in rate:


- **Interactive Container Details** page: Monitor a specified container.
- **Monitoring Interactive Container** page: Switching the monitoring information between multiple containers quickly, and viewing the total GPU number(pcs) and total GPU hour(s) of personal use. 

## Interactive Container Details page

* In **Interactive Container Management** page, choose a specific container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0cb7e457f14ebc979c9731f19e1ed1a8.png)



* In **Interactive Container Details** page, click **MONITORING** tab to view container monitoring information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ba9484f4152a48c403aa621977291e3b.png)


- Hover to any monitoring block, click <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> to download the monitoring figure (`.png`) .
- You can select the time period in the menu on the right to observe the changes in the container resource utilization within a certain period of time.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9195b9f05876c34d1671ce0048f3b5d0.png)


:::info
You can select 1 hour, 6 hours, 12 hours, 1 day, 7 days, and 30 days for the monitoring period.
:::


## Monitoring Interactive Container page

* Click **Monitoring** on the left menu, and select the container that you want to monitor in **Interactive Container Name** dropdown list. Also, you can switch between containers quickly.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5037f491c8ac81a6be8362c078ca3879.png)


* After selection, You can view the monitoring information provided by the container service below.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab09e7dfb61eba798141f5b2a4fd2490.png)


- Like **Interactive Container Details** page, you can download the monitoring figure files and observe the changes in container resource utilization within a certain period of time. In addition, you can also view personal **Total GPU Numbers(pcs) and Total GPU Hour(s)** within a certain period of time.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6411c83470541a125399dab70f789b79.png)




:::info
**Tenant Users** can only see their own resource utilization information, and **Tenant Admins** can see the resource utilization of all users in the project to control the resource usage and credit of the project .
:::