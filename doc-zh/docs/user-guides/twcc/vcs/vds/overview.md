---
sidebar_position: 1
title: '服務概觀'
sidebar_label: '服務概觀'
slug: '/user-guides/twcc/vcs/vds/overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vds-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vds-overview-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a62be3bdf4bc257526e95e16b063a777.png) 服務概觀
虛擬磁碟服務可為虛擬運算個體擴充儲存空間，隨用隨付，可自行設定容量大小，彈性方便，為專為 TWCC 虛擬運算服務設計之儲存空間，提供高可用性、一致性、低延遲的服務。

<br/>

## 相關服務

虛擬磁碟服務應用於多項虛擬運算服務相關的功能：

<br/>

### 虛擬運算個體儲存空間

- **系統磁碟**：提供虛擬運算個體內建 100 GB 標準硬碟 (HDD) 的系統磁碟。
- **資料磁碟**：虛擬運算個體可外掛多個資料磁碟以擴充儲存空間。提供固態硬碟 (SSD) 與標準硬碟 (HDD) 兩種儲存選擇：
    - **固態硬碟 (SSD)**：
        - 提供低延遲的服務 (少於 10 毫秒) 與高效穩定的傳輸量 (from 3 IOPS/GB to 16 IOPS/GB)，增強應用程式的可靠性與延展性，適合需高效能處理的企業應用程式與高吞吐量的巨量資料工作。
        - 提供每個虛擬運算個體最大傳輸量為 2,375 MB/秒。
        - 最多可支援 16 TB 的儲存空間。
    - **標準硬碟 (HDD)**
        - 提供傳輸效能每 TB 250 MB/秒，適用於不頻繁存取與不易受延遲時間影響的大型資料。
        - 提供每個虛擬運算個體最大傳輸量為 2,375 MB/秒。
        - 最多可支援 16 TB 的儲存空間。

<br/>

### 個體、磁碟備份服務

提供儲存備份虛擬運算個體的映像檔、資料磁碟之快照。

<br/>