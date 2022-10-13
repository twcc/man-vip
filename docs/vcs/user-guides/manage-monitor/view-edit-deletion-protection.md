---
sidebar_position: 2
title: '檢視/編輯/刪除保護'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-view-and-edit-instance-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-view-and-edit-instance-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 檢視資訊、編輯描述、開啟/關閉 刪除保護機制

虛擬運算個體建立後，您可透過以下方式檢視個體資料或編輯個體描述。

:::info
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](/docs/member-concepts-roles-permissions/twcc-services/compute.md#虛擬運算服務)。
:::

<br/>

## 檢視個體資訊

檢視個體 ID、名稱、公用/私有 IP、狀態、建立時間、建立者、映像檔版本、資源比例、鑰匙對、網路連線、儲存、…等資訊。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入虛擬運算個體管理頁面，可檢視所有建立個體的列表資訊：**ID**、**名稱**、**對外 IP**、**個體狀態**、**建立時間**及**建立者**。
* 在「**搜尋**」列輸入關鍵字可篩選出列表的欄位中符合該特定條件的結果。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_12b6e0321c1c11ed26e3db23e303afab.png)


:::tip
最後創建的個體列在最上方，點選上方的欄位名稱，可改變排列順序。
:::

- 進入詳細資料配置頁面，可檢視更詳細的個體資訊：**基本資訊**、**詳細規格**、**網路與連線**、**儲存資訊**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4a18fbcd218e90d9f21b051f2ed08122.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- 檢視個體 ID、名稱、建立時間、狀態。

```
twccli ls vcs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b59214e6a5aa3939d5e679b2b43761eb.png)

- 檢視計劃下的所有虛擬運算個體 **(僅限租戶管理員使用)**

```bash
twccli ls vcs -all
```
</TabItem>

</Tabs>

<br/>

## 編輯描述

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入「**虛擬運算個體詳細資料**」頁，點選「<i class="fa fa-pencil" aria-hidden="true"></i>」即可編輯、加入虛擬運算個體的描述內容，以區辨不同的虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_48758c4d73d45972d918eb01cc38e8de.png)


- 進入詳細資料配置頁面，可檢視更詳細的個體資訊：**基本資訊**、**詳細規格**、**網路與連線**、**儲存資訊**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4a18fbcd218e90d9f21b051f2ed08122.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


## 開啟/關閉 刪除保護機制

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入「**虛擬運算個體詳細資料**」頁，點選可「**開啟**」或「**關閉**」資源刪除保護機制。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_408b408eda07f53cfacf8289b5127431.png)


:::info
開啟刪除保護機制，在您刪除資源之前，需先關閉保護機制後才能繼續進行刪除步驟，可防止資源誤刪，導致服務中斷。
:::

:::tip
<details>

<summary>快速動畫教學 <i class="fa fa-file-video-o" aria-hidden="true"></i></summary>

![](https://i.imgur.com/8v36pAf.gif)

</details>
:::

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>