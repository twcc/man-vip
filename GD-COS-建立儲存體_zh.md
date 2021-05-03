---
tags: COS-book
title: 建立儲存體 | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @TWSC/header-zh %}

# 建立、刪除儲存體

:::warning
{%hackmd @docsharedstyle/tip-zh %}
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-zh) 操作。
:::

{%hackmd @TWSC/Hkx-ZdAld %}


## 建立儲存體

儲存體建立後，即可將您的檔案上傳至儲存體，並可建立資料夾管理檔案。

<details class="docspoiler">

<summary><b> TWCC 入口網站 </b></summary>

<br>

* 從服務列表選擇「**雲端物件儲存**」，進入雲端物件儲存管理頁面後，點擊「**建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e9ca6e3c85e37663547603538277a02a.png)



* 輸入儲存體名稱後按「**確定**」。 請注意：儲存體名稱必須是唯一的；請填入 1~16 個字元以內的小寫英文字母或數字，且第一個字須為英文字母。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9da2d38617092c0c406899729122f328.png)


* 儲存體建立完成後會出現在列表的最上方，點擊該列表進入儲存體內容頁面即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d99b93fc09d2fe29f6e81f4e2f2af92.png)


</details>


<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->


<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 建立名為 `bk_cli` 的儲存體

```bash
$ twccli mk cos -bkt bk_cli
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fc30b6409e2372886223660e2aefd2da.png)

</details>

## 删除儲存體

:::danger

{%hackmd @docsharedstyle/important-zh %}

刪除儲存體前，請先檢視目標儲存體是否已清空資料或備份；儲存體一旦删除，儲存體內所有的資料將會被全數删除，無法復原，
:::


<details class="docspoiler">

<summary><b> TWCC 入口網站 </b></summary>

<br>

* 删除不必要的儲存體，只要點擊該儲存體列表後的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>  選單按鈕，再按一下「**刪除**」。
* 為避免誤删，請輸入欲删除的儲存體名稱再次確認。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_551737bbf1b9cedfbfe0bbb9948bbf05.png)

</details>


<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->


<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 刪除「**已清空**」的儲存體 `bk_cli1` 
```bash
$ twccli ls cos -bkt bk_cli1
$ twccli rm cos -bkt bk_cli1
```  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_192906ce0505e7303b8e391624b6df25.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_511e9bda39e94399aa5c414b8a6cccc8.png)


- 刪除「**未清空**」的儲存體 `bk_cli2`
```bash
$ twccli ls cos -bkt bk_cli2
$ twccli rm cos -bkt bk_cli2 -r
```  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ddbded358f57f02685f4bd887545a60.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22bf710e843dce06cb3468f4ecc8824d.png)

</details>