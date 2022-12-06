---
sidebar_position: 7
title: '彈性 IP'
sidebar_label: '彈性 IP'
slug: '/user-guides/twcc/vcs/eip'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-eip-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-eip-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 彈性 IP

TWCC 彈性 IP 支援提供 IPv4 公用 IP。在 TWCC 中，您可以將虛擬運算個體、負載平衡配置公用 IP，讓資源可與網際網路進行通訊。

<br/>

## 彈性 IP 規格

您可為資源配置 靜態 IP (static IP) 或 浮動 IP (floating IP)：
- **靜態 IP**：訂閱後即為計畫專屬資源，直到您停止訂閱為止，可自由配置至計畫下的不同資源。
- **浮動 IP**：浮動 IP 與資源解除關聯後，即釋放回 TWCC 資源池。


:::info
資源再次配置浮動 IP 時，無法保證您可以取得相同 IP。
:::

<br/>


## 彈性 IP 訂閱政策


| 規格 | 訂閱 | 每計畫配額上限 |計費機制與定價
| -------- | -------- | -------- | -------- |
| 靜態 IP    | 需先訂閱才可配置至資源使用     | 最多可訂閱 5 個     | [TWS 用戶](/docs/pricing#彈性-ip-elastic-ip-eip)   |
| 浮動 IP    | 無需訂閱，可直接配置至資源使用    | 2022/1/14 調整為最多 10 個     |  N/A   |



:::info
- 僅「**租戶管理員**」可執行訂閱靜態 IP、停止訂閱；所有成員皆可使用已訂閱之靜態 IP。
- 計畫若在 2022/1/14 功能調整前已使用超過 10 個浮動 IP，系統不會追溯並移除已建立的虛擬算個體或負載平衡器所關聯的浮動 IP。
- 若有特殊需求，請您洽詢客服人員：<ins><a href = "mailto: isupport@twcc.ai">isupport@twcc.ai</a></ins>
:::

<br/>


## 管理彈性 IP

### 訂閱、停止訂閱靜態 IP

在開始使用靜態 IP 之前，請您先訂閱靜態 IP：

:::info
- 訂閱靜態 IP 之前，請先確認您的計畫/專案已[<ins>建立預設的虛擬網路</ins>](../../tutorials/create-default-network.md)，否則將會訂閱失敗。
- 浮動 IP 由 TWCC 統一管理，您僅能於管理頁面檢視其狀態與已關聯之資源。
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

1. [建立虛擬運算個體](../create/create-instances.md)時：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9d407b8548c8f2e810d8f8f7a6ef3ea.png)



2. 虛擬運算個體建立後，進入個體詳細資料頁，配置公用 IP：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d0974fbe8afa4c91e2bb17b531928e5.png)

:::caution
**停止** 虛擬運算個體後，浮動 IP 將會釋放回資源池，個體啟動後，將取得新的浮動 IP。
更多虛擬運算個體動作對彈性 IP之影響，請參考 <ins>[<ins>管理個體：停止/啟動 (與開機)/重開機/關機/刪除</ins>](../manage-monitor/manage-instances.md)</ins>。
:::

<br/>

#### 負載平衡器

1. [建立負載平衡器](./load-balancing.md)時：

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