---
sidebar_position: 1
sidebar_label: '服務概觀'
title: '服務概觀'
slug: '/user-guides/twcc/hfs/overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/hfs-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/hfs-overview-zh'
---


# <img style={{width:30+'px', heigh:30+'px'}} src='https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a2514dcee06093bda60777e51fd25438.png' /> 服務概觀 

高速檔案系統（Hyper File System，以下簡稱 HFS） 為可擴展、高效能的平行檔案系統，允許在不同節點上同時存取同份文件或不同份文件並可提供高速安全的資料儲存，為容器服務及 HPC 高速運算任務、台灣杉二號提供高效、安全及彈性之資料存取與串接。


## 空間資訊

註冊 TWCC 會員後，即提供用戶存取 HFS 檔案傳輸節點（data transfer node）的服務，並掛載 /home 與 /work 兩個路徑，提供免費儲存空間，您可以搭配上述運算服務使用。

HFS 檔案傳輸節點、掛載路徑與免費配額等資訊如下：


| 項目 | 內容 |
| -------- | -------- |
| HFS 檔案傳輸節點|xdata1.twcc.ai| 
| HFS 埠號| 22|


|掛載路徑|免費配額容量|
| -------- |-------- |
|/home/<主機帳號名稱>|100 GB <sup> [2] </sup>|
|/work/<主機帳號名稱>|100 GB <sup> [1][2] </sup>|


:::info
- [1] 自2021年9月1日起，國科會(原科技部)計畫每個帳號之的暫存工作目錄區域(/work)免費額度，由原本的 100 GB，提高到 1500 GB。
- [2] 如空間不敷使用時，您可以到[<ins>會員中心 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](../member/user-guides/member-key-quota/go-to-member-center.md) 購買擴充。購買價格與調整方式請參考[<ins>價目表</ins>](../pricing.mdx)。
:::

## 可搭配使用的運算服務

在 [TWCC](http://www.twcc.ai) 上 HFS 會被同時掛載到所有 GPU 節點的相同目錄下，因此，當使用者透過檔案傳輸節點將檔案上傳至 HFS 後，即可透過 [TWCC](http://www.twcc.ai) 提供的**開發型容器服務**、**任務型容器服務**及 **HPC 高速運算任務、台灣杉二號(命令列介面)** 存取 HFS 檔案系統中的內容。


:::info
此四項服務的預設儲存系統為 HFS，因此連線後即可直接使用 HFS 之資料，**無需先**[<ins>連線檔案傳輸節點</ins>](user-guides/connect-data-transfer-node.md)。
:::