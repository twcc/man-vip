---
sidebar_position: 2
---

# 檢視、搜尋、刪除檔案

:::tip
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-zh) 操作。
:::

## 檢視檔案內容

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>


*  選定儲存體，並進入儲存體的內容頁面，請點選欲查看的檔案。

    
![image](https://user-images.githubusercontent.com/109254397/185298541-97aedc7b-8697-477b-b95f-e712780eadfa.png)


* 進入檔案內容頁面後，即可檢視檔案的基本資訊。

![image](https://user-images.githubusercontent.com/109254397/185298596-da0760a1-87e5-446c-bcd0-07f4c5df2d2a.png)

</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>


檢視儲存體 `bk_cli` 中所有檔案資訊

```bash
twccli ls cos -bkt bk_cli
```
</details>

## 搜尋檔案

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>


在「**搜尋**」列輸入欲查找的關鍵字可以自動篩選所有列表欄位內容符合該條件的結果。 

![image](https://user-images.githubusercontent.com/109254397/185299670-3635ac7e-4b2f-455d-82e2-45b663508a47.png)

</details>

## 刪除檔案

删除不必要的檔案可節省儲存空間；**檔案刪除後無法復原，請您在刪除前先確認檔案已備份**。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>


* 進入儲存體內容後，點擊該檔案列表後的 <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>  選單按鈕，再按一下「刪除」即可。亦可點擊勾選欄選擇多個檔案，再點擊上方的「删除」。

![image](https://user-images.githubusercontent.com/109254397/185299909-2500f613-167b-4abd-850a-b6a9cc228687.png)


* 再次確定欲删除的檔案是否正確，一旦檔案被删除後將無法恢復。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_da479342e8c759b6e3d386487432d602.png)


</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>


- 刪除儲存體 `bk_cli` 的 `testfile2` 檔案

```bash
twccli rm cos -bkt bk_cli -okey testfile2
```   
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_46d8119fc6debd65bcbe77574209266e.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5c14b3d8059d8ea4ff1efc97df54f006.png)

</details>
