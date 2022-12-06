---
sidebar_position: 7
title: 'Elastic IP'
sidebar_label: 'Elastic IP'
slug: '/user-guides/twcc/vcs/eip'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-eip-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-eip-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Elastic IP

TWCC Elastic IP supports IPv4 public IP, which allows you to assign public IP to VCS instances or load balancing, and allow resources to communicate with the Internet.

<br/>

## Elastic IP Specifications

You can assign static IP or floating IP to the resources:
- **Static IP**: Once subscribed, the resource becomes exclusive to the project until you stop subscribing, and can be freely assigned to different resources of the project.
- **Floating IP**: Once the floating IP is detached from the resource, it is released back to the TWCC resource pool.

:::info
There is no guarantee that you will get the same IP when the resource is assigned with a floating IP again.
:::

<br/>

## Elastic IP Subscription Policy

| Specifications | Subscription | Per Plan Quota Cap | Billing and Pricing |
| -------- | -------- | -------- | -------- |
| Static IP | Subscription required before assigning it to the resource | Up to 5 subscriptions | [TWS User](https://man.twcc.ai/@twsdocs/pricing-zh#%E5%BD%88%E6%80%A7-IP-Elastic-IP-EIP) |
| Floating IP | No subscription required, can be assigned directly to the resource | Adjusted to a maximum of 10 from 2022/1/14 | N/A |

:::info
- Only **Tenant Admins** can subscribe to static IPs and stop subscriptions; all members can use the subscribed static IPs.
- If the project has used more than 10 floating IPs before the 2022/1/14 feature adjustment, the system will not trace back and remove the floating IPs associated with the created VCS instances or load balancers.
- If you have any special requirements, please contact our customer service: <ins><a href = "mailto: isupport@twsc.ai">isupport@twcc.ai</a></ins>.
:::

<br/>

## Manage Elastic IP

### Subscribe, unsubscribe to static IP

Before starting to use Static IP, please subscribe to the Static IP.

:::info
- Before subscribing to a static IP, please make sure your project has a default virtual network in place, otherwise the subscription will fail.
- Floating IPs are managed centrally by TWCC and you can only view their status and associated resources on the management page.
:::

Click **Virtual Compute Services (VCS)** on the home page > click **Elastic IP** on the left > On the **Elastic IP Management** page, click **+Subscribe static IP** on the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c4371cc64d77ed6e04596ec4f3d7b279.png)

After selecting the number of subscriptions, click **OK** to complete the subscription.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b0aeca1d6e025821fb42d7532c3e5de0.png)

If the static IP is no longer needed, move the cursor to &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; and click **Unsubscribe**. No further charges will be made after completion.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7971acdf72700f178236775c2836358c.png)

:::info
You can only subscribe 10 times a day.
:::

<br/>


### Assign elastic IP to resources

You can assign elastic IP to a VCS instance or Load Balancer in the following ways.

<br/>

#### VCS instances

1. [While creating VCS instances](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances):

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8c896c79f9bea20564576502d637833a.png)

2. After creating the VCS instance, enter the VCS instance details page and assign public IP.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_677478ed507a27f03a9ab277b6d391dd.png)

:::caution
After a VCS instance is **stopped**, the floating IP will be released back to the resource pool and a new floating IP will be acquired after the instance is started again.<br/>
For more information about the impact of VCS instance actions on floating IP, please refer to [<ins>Instance Management: stop/start/shutdown/restart/delete</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/management-and-monitoring/management).
:::

<br/>


#### Load Balancer

1. [While creating Load Balancers](https://man.twcc.vip/en/docs/vcs/user-guides/networking/load-balancing#create-load-balancers):

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecc993fd71e9657b662501aefdc8958b.png)

2. After the Load Balancer is created, you can change the IP by clicking **DETACH** and then **ASSIGN** again.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bca0889a72fcd8ce2b19986108610cd7.png)

<br/>


### Detach elastic IP from resources

- Static IP: You can detach the assigned IPs from the **VCS Instance Details** page or **Load Balancer Details** page.

  After detaching, the static IP will become **`AVAILABLE`** and can be reassigned to other resources.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d94d938b6b287c0daa046050a73a453c.png)

- Flaoting IP: After detaching, the floating IP will be released back to TWCC resource pool. There is no guarantee that you will get the same floating IP next time.

<br/>


### Associated resources and IP state

The management page will show the VCS instances or load balancers that the IPs are associated with. Click the resource to go to the details page to detach or replace IPs.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b17154f8e9486b50f3218e4724930808.png)

Explanation of Elastic IP state:

- **`AVAILABLE`**: Not used yet and can be freely assigned to resources.
- **`IN-USE`**: Already attached to a resource in use, it must be detached from the resource before it can be atached to another resource.