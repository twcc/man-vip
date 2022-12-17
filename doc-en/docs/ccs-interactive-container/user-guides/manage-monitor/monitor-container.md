---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-monitor-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-monitor-en' 
---

# Monitor your container

There are two ways to monitor container in TWCC portal. You can monitor the utilization of CPU, GPU, memory and GPU memory:

- **Interactive Container Details** page: Monitor a specified container.
- **Monitoring Interactive Container** page: Quickly switch the monitoring information between multiple containers, and view the total GPU number(pcs) and total GPU hour(s) of personal use.

## Interactive Container Details page

* In **Interactive Container Management** page, choose a specific container.

![](https://i.imgur.com/7DpbJuA.png)

* In **Interactive Container Details** page, click **MONITORING** tab to view container monitoring information.

![](https://i.imgur.com/ZWuqwhr.png)

- Hover to any monitoring block, click <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> to download the monitoring figure (`.png`) .
- You can select the time period in the menu on the right side to observe the changes in the container resource utilization within a certain period of time.

![](https://i.imgur.com/Uudgv0z.png)


:::info
The specific period of time can be chosen from 1 hour, 6 hours, 12 hours, 1 day, 7 days, 30 days.
:::

<br/>

## Monitoring Interactive Container page

* Click **Monitoring** on the left menu, and select the container that you want to monitor in **Interactive Container Name** dropdown list. Here, you can switch between containers quickly.
* After selection, You can view the monitoring information provided by the container service below.

![](https://i.imgur.com/vhzQauI.png)

- Like **Interactive Container Details** page, you can download the monitoring figures and observe the changes in container resource utilization within a certain period of time. In addition, you can also view personal **Total GPU Numbers(pcs) and Total GPU Hour(s)** within a certain period of time.


![](https://i.imgur.com/rNe44oc.png)


<br/>


:::info
**Tenant Users** can only see their own resource utilization information, while **Tenant Admins** can see the resource utilization of all users in the project to control the resource usage and credit of the project .
:::