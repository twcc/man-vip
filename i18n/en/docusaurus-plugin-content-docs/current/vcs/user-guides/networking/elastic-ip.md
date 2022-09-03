---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-eip-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-eip-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Elastic IP

TWCC Elastic IP supports IPv4 public IP, which allows you to attach public IP for VCS instances or load balancing, and allow resources to communicate with the Internet.

<br/>

## Elastic IP Specifications

You can attach static IP or floating IP to the resources:
- **Static IP**: Once subscribed, the resource becomes exclusive to the project until you stop subscribing, and can be freely attached to different resources of the project.
- **Floating IP**: Once the floating IP is detached from the resource, it is released back to the TWCC resource pool.

:::info
There is no guarantee that you will get the same IP when the resource is attached to a floating IP again.
:::

<br/>

## Elastic IP Subscription Policy

| Specifications | Subscription | Per Plan Quota Cap | Billing and Pricing |
| -------- | -------- | -------- | -------- |
| Static IP | Subscription required before attaching it to the resource | Up to 5 subscriptions | [TWS User](https://man.twcc.ai/@twsdocs/pricing-zh#%E5%BD%88%E6%80%A7-IP-Elastic-IP-EIP) |
| Floating IP | No subscription required, can be attached directly to the resource | Adjusted to a maximum of 10 from 2022/1/14 | N/A |

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



於首頁點選「**虛擬運算服務**」> 左側點選「**彈性 IP**」>「**彈性 IP 管理**」頁面點選上方「**+ 訂閱靜態 IP**」。


![](https://i.imgur.com/5y5Nidn.png)

選擇訂閱的數量後，按下「**確定**」即可完成訂閱。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6823622c85310fbafc123c12841b5177.png)


若靜態 IP 無需再使用，游標移至「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」，點選「**停止訂閱**」，完成後便不再計費。


![](https://i.imgur.com/XsPPQKO.png)

:::info
一日之內僅能訂閱 10 次。
:::

<br/>


### 為資源配置彈性 IP

您可以透過以下方式將彈性 IP 配置至虛擬運算個體或負載平衡器：

<br/>

#### 虛擬運算個體

1. [建立虛擬運算個體時](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh)：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9d407b8548c8f2e810d8f8f7a6ef3ea.png)



2. 虛擬運算個體建立後，進入個體詳細資料頁，配置公用 IP：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d0974fbe8afa4c91e2bb17b531928e5.png)

:::caution
**停止** 虛擬運算個體後，浮動 IP 將會釋放回資源池，個體啟動後，將取得新的浮動 IP。
更多虛擬運算個體動作對彈性 IP之影響，請參考 <ins>[管理個體：停止/啟動 (與開機)/重開機/關機/刪除](https://man.twcc.ai/@twccdocs/vcs-guide-manage-instance-zh)</ins>。
:::

<br/>

#### 負載平衡器

1. [建立負載平衡器時](https://man.twcc.ai/@twccdocs/guide-vcs-lbs-zh#建立負載平衡器)：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ca4c2cc4f7fdb6ab0586489b97b3c62.png)

2. 負載平衡建立後，點選「**移除**」，再點選「**配置**」可更換 IP：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_43c0ac03a6f857fe742165fe78b073ba.png)

<br/>

### 移除資源的彈性 IP

- 靜態 IP：您可以隨時於「**虛擬運算個體詳細資料**」頁、「**負載平衡詳細資料**」頁，將已配置至的 IP 移除。

  移除後，靜態 IP 將呈現 **`AVAILABLE`** 狀態，並可再配置至其他資源。

![](https://i.imgur.com/5Y78Qme.png)


- 浮動 IP：移除後，浮動 IP 將釋放回 TWCC 資源池。將無法保證您下次可取得相同的浮動 IP。

<br/>

### 關聯之資源、IP 狀態

管理頁面將顯示 IP 已關聯的虛擬運算個體或是負載平衡器，點選資源即可進入詳細資料頁，進行 IP 的移除或更換 IP。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e70c949cfb824e12e969257d8d8189f5.png)


彈性 IP 狀態說明：

- **`AVAILABLE`**：尚未被使用，可自由配置至資源。
- **`IN-USE`**：已配置至資源使用中，需先自資源移除才可配置至其他資源。