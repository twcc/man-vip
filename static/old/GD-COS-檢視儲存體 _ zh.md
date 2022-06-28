---
tags: Guide, COS
title: 檢視儲存體 | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 檢視儲存體

:::warning
{%hackmd @docsharedstyle/tip-zh %}
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-zh) 操作。
:::

檢視您計畫內所有的儲存體：

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 於登入後首頁，選擇 「**雲端物件儲存**」

{%hackmd @twccdocs/ui-chunk-favorites-zh %}

- 進入「**雲端物件儲存管理**」頁面後，即可檢視計畫內所有的儲存體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5b0987e1364f8101444d8f6ff375212d.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 檢視計畫內所有的儲存體

```bash
$ twccli ls cos
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1497483a1367bb6cae188b80298199b.png)


</details>

