---
sidebar_position: 5
title: '備份資料磁碟'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 資料磁碟快照

若需備份資料磁碟的資料，請參考以下建立、管理資料磁碟快照之步驟。
(※ *系統磁碟目前不支援快照功能，若需備份請參考「虛擬運算個體映像檔」*)

:::info
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-zh#%E8%99%9B%E6%93%AC%E7%A3%81%E7%A2%9F%E6%9C%8D%E5%8B%99)。
:::

## 建立磁碟快照

為您的資料磁碟建立快照，備份資料。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br/>

* 在「**資料磁碟詳細資料**」頁面，點擊「**快照**」，出現「**建立快照**」視窗，輸入快照的名稱及描述後，按下「**確定**」，即可建立成功。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6e6c2e6d70b981764777ac47c80b47ee.png)


</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚無支援) </summary>

<br/>

</details>



## 檢視磁碟快照

檢視快照 ID、名稱、建立時間、建立者等資訊。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br/>

* 進入「**資料磁碟快照管理**」頁面，會看到所有的資料磁碟快照列表資訊，包括 **ID**、**快照名稱**、**資料磁碟名稱**、**快照狀態**、**建立時間**及**建立者**。最後創建的快照會列在最上面，點選欄位名稱可依該欄位值排列或改變排列順序。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a5cff41d5613654cdaa2de772aa9925.png)


* 在「搜尋」列輸入關鍵字可篩選出列表的欄位中符合該特定條件的結果。


</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚無支援) </summary>

<br/>

</details>

## 刪除磁碟快照

:::caution
快照一旦刪除，資料將無法恢復！
:::

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br/>

* 進入「**資料磁碟快照管理**」頁面 > 勾選快照 > 按下上方「**刪除**」即可刪除快照。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_28a89d5943a4c619ddf3f17518d5c839.png)

* 或點擊 「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 選單按鈕，點選「**刪除**」即可將該快照刪除。

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (尚無支援) </summary>

<br/>

</details>
