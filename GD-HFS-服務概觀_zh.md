---
tags: Guide, HFS, ZH
title: 服務概觀 | zh 
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @TWSC/header-zh %}

# 服務概觀 <img src="https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a2514dcee06093bda60777e51fd25438.png" width="30" heigh="30">

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
|/home/<主機帳號名稱>|100 GB|
|/work/<主機帳號名稱>|100 GB|


:::info

{%hackmd @docsharedstyle/note-zh %}

如空間不敷使用時，您可以到 [<ins>Service 會員服務系統 <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) 購買擴充。購買價格與調整方式請參考[<ins>價目表</ins>](https://www.twcc.ai/doc?page=price#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS)。
:::

## 可搭配使用的運算服務

在 [TWCC](http://www.twcc.ai) 上 HFS 會被同時掛載到所有 GPU 節點的相同目錄下，因此，當使用者透過檔案傳輸節點將檔案上傳至 HFS 後，即可透過 [TWCC](http://www.twcc.ai) 提供的**開發型容器服務**、**任務型容器服務**及 **HPC 高速運算任務、台灣杉二號(命令列介面)** 存取 HFS 檔案系統中的內容。


:::info

{%hackmd @docsharedstyle/note-zh %}
此四項服務的預設儲存系統為 HFS，因此連線後即可直接使用 HFS 之資料，**無需先**[<ins>連線檔案傳輸節點</ins>](https://man.twcc.ai/@TWSC/doc-hfs-main-zh/%2F%40TWSC%2Fguide-hfs-connect-to-data-transfer-node-zh)。
:::

