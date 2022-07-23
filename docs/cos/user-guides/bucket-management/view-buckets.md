---
sidebar_position: 2
---

# 檢視儲存體

:::note
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-zh) 操作。
:::

檢視您計畫內所有的儲存體：

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>


- 於登入後首頁，選擇 「**雲端物件儲存**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e953e190a41610e858a396e2f8431f7b.png)


:::CAUTION
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

- 進入「**雲端物件儲存管理**」頁面後，即可檢視計畫內所有的儲存體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5b0987e1364f8101444d8f6ff375212d.png)


</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>


- 檢視計畫內所有的儲存體

```bash
twccli ls cos
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1497483a1367bb6cae188b80298199b.png)


</details>
