---
tags: Guide, VCS, TW
title: 檢視資訊、編輯描述 | zh
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 檢視資訊、編輯描述

虛擬運算個體建立後，您可透過以下方式檢視個體資料或編輯個體描述。

:::info
{%hackmd @docsharedstyle/note-zh %}
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#虛擬運算服務)。
:::

## 檢視個體資訊

檢視個體 ID、名稱、公用/私有 IP、狀態、建立時間、建立者、映像檔版本、資源比例、鑰匙對、網路連線、儲存、…等資訊。

<!-- UI start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 進入虛擬運算個體管理頁面，可檢視所有建立個體的列表資訊：**ID**、**名稱**、**對外 IP**、**個體狀態**、**建立時間**及**建立者**。
* 在「**搜尋**」列輸入關鍵字可篩選出列表的欄位中符合該特定條件的結果。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9b0bec73d32cdc3370baf274bf28b8f9.png)


:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 最後創建的個體列在最上方，點選上方的欄位名稱，可改變排列順序。
:::

- 進入詳細資料配置頁面，可檢視更詳細的個體資訊：**基本資訊**、**詳細規格**、**網路與連線**、**儲存資訊**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4b5b513960169c831bdc6ba0d8613e8a.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- CLI start -->

<details class="docspoiler">
<summary><b>TWCC CLI</b></summary>

<br>

- 檢視個體 ID、名稱、建立時間、狀態。

```
$ twccli ls vcs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b59214e6a5aa3939d5e679b2b43761eb.png)

- 檢視計劃下的所有虛擬運算個體 **(僅限租戶管理員使用)**

```bash
$ twccli ls vcs -all
```

</details>

## 編輯描述

<!-- UI start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 進入「**虛擬運算個體詳細資料**」頁，點選「<i class="fa fa-pencil" aria-hidden="true"></i>」即可編輯、加入虛擬運算個體的描述內容，以區辨不同的虛擬運算個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cd49ecf150da5f7e001fd7ed52c46a86.png)


- 進入詳細資料配置頁面，可檢視更詳細的個體資訊：**基本資訊**、**詳細規格**、**網路與連線**、**儲存資訊**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4b5b513960169c831bdc6ba0d8613e8a.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- CLI start -->

<details class="docspoiler">
<summary><b>TWCC CLI</b> (尚未支援) </summary>

<br>

</details>


