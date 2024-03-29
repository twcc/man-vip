---
sidebar_position: 4
sidebar_label: '監控個體'
slug: '/user-guides/twcc/vcs/instances/details-monitor-instance'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-monitor-instance-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-monitor-instance-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 監控個體

TWCC 入口網站可檢視虛擬運算個體監控的資訊，可監控 **CPU 使用量**、**記憶體**、**硬碟讀取/寫入速度**及**網路輸出速率**。

:::info
- 租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](/docs/member-concepts-roles-permissions/twcc-services/compute.md#虛擬運算服務)。
- TWCC CLI 目前不支援此功能。
:::

<br/>

## 監控項目

- 進入「**虛擬運算個體詳細資料**」頁，並選擇一指定的個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c065f020c08007cad3c40a0d17c32444.png)


- 於「**虛擬運算個體詳細資料**」頁內選擇「**監控**」頁籤，即可查看個體監控資訊：
    - **CPU 用量 (%)**：CPU 的使用率，若顯示為 2 (200%)，則表示用滿 2 CPU 的資源。 
    - **記憶體用量 (MB)**：記憶體使用量，單位為 Megabytes (MB)。
    - **硬碟讀取/寫入 (B/s)**：可檢視各個磁碟讀取/寫入之速率，單位為 Bytes/second (B/s)。
    - **網路輸出 (B)**：虛擬運算個體輸出之網路流量，綜合東西流量 (跨虛擬運算個體間的水平傳輸) 與南北流量 (用戶端與個體之間的流量)，單位為 Bytes (B)。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5157e924787360292d12a28b892c447a.png)


:::info
TWCC 入口網站之網路流量包含東西流量與南北流量的總和，而 [<ins>會員中心<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/member/user-guides/member-key-quota/go-to-member-center.md)之額度用量、資源用量紀錄則僅顯示南北流量。
:::

<br/>

## 監控設定與下載

- 游標移至綠色圓點，可取得用量實際數值。
- 游標移至任一監控圖上，可點選 <i class="fa fa-arrow-circle-o-down" aria-hidden="true"></i> 圖示下載監控圖檔 (`.png`) 留存。
- 右側選單則可選擇時間，可觀察特定時長內之容器資源使用變化。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_70386adb0dd68bae1b6a18c63e2f854a.png)

:::info
特定時長可選擇1小時、6小時、12小時、1天、7天、30天。
:::