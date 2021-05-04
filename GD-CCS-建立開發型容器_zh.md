---
tags: Guide, CCS, ZH
title: 建立開發型容器 | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}


# 建立開發型容器

您可以系統預設資訊以一個指令完成容器建立，或是依需求選擇適合的容器型號。

完整容器型號 (含 GPU 數量與其他資源大小)，請參考[價目表](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS)。

{%hackmd @preview-twccdocs/chunk-before-you-begin-zh %}


## 建立開發型容器


<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>


- 由服務列表點選「**開發型容器**」，在「**開發型容器管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1c43aab7948fc1f045440c590f458fea.png)


* 選擇映像檔類型：您可依據需求，選擇 NGC 優化之深度學習框架。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_75771217b3c19975348dbc2197fd84b5.png)


* 填寫容器基本資訊與硬體規格配置，接著點擊「**下一步：儲存資訊>**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_328858c1df4e6de8c66d0490500be44c.png)


* 容器建立後系統會自動掛載高速檔案系統 (HFS) 的兩個目錄 (/home 與 /work) 至容器，以利使用者在運行人工智慧運算時擁有更好的性能，亦可使用 TWCC 雲端物件儲存服務。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b11f0c5bbb89d7b5975d1ccd4552cf8d.png)

* 點擊「**下一步：檢閱+建立>**」，檢視整個容器的規格和價格，確定後點選「**建立**」即完成。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7092404d57c8deee086d43b8894fae4f.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

### 指令

```bash
$ twccli mk ccs [-n] #容器名稱
                [-itype] #映像檔類型
                [-img] #映像檔版本
                [-gpu] #GPU 數量
```
:::info
{%hackmd @TWSC/cli-optional-note-zh %}
若不帶任何參數則以預設資訊建立容器：

| 映像檔類型、映像檔 | 容器名稱 |硬體設定|
| -------- | -------- | -------- |
| TensorFlow (latest environment)    | twcc-cli     | 1 GPU + 04 cores + 090GB memory |


</div>

### 範例

- 建立名稱為 **`cusccs`**、映像檔類型 **`Caffe2`**，映像檔規格為 **`caffe2-18.08-py3-v1:latest`**、GPU 數量 **`2`** 的容器。

```bash
$ twccli mk ccs -itype "Caffe2" -img "caffe2-18.08-py3-v1:latest" -gpu 2 -n cusccs
```

:::danger
{%hackmd @docsharedstyle/important-zh %}

- 容器名稱命名字元條件：需為**小寫字母或數字**，**首字元需為小寫字母**，**長度 6-16 個字元**。
-  若設定不符合以上條件，將出現以下錯誤訊息：
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095834bd7ee5d99d3a70596a7c462629.png)


<!-- :::spoiler 操作範例截圖(點我)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_753112dc54b2646270806ad6385277ba.png)

::: -->

</details>

---

:::info
{%hackmd @docsharedstyle/note-zh %}
1. 詳細映像檔介紹與說明請參考 [<ins>TWCC 容器映像檔</ins>](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-zh)。<li>容器型號、資源比例與費率，請參考[<ins>價目表</ins>](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS)。
2. **可用記憶體容量**若以 GiB (1 GiB =  2<sup>30</sup> bytes) 為計算單位，以 c.super 為例，則可用記憶體容量為 84 GiB，請參考[<ins>記憶體容量換算</ins>](https://man.twcc.ai/@twccdocs/concept-ccs-memory-conversion-zh)了解更多。<br></ol>
:::

:::danger
{%hackmd @docsharedstyle/important-zh %}
1. 為使資料完整保存，請將您的重要資料存放於高速檔案系統 (HFS) 中，並避免將資料存放於容器磁碟內。
2. **容器建立後，在您刪除之前將會持續計費**。
:::

:::warning
<i class="fa fa-book fa-20" aria-hidden="true"></i> **相關文件：** 
- <a href="https://man.twcc.ai/@preview-twccdocs/doc-cos-main-zh"><ins>雲端物件儲存服務</ins></a>、<a href="https://man.twcc.ai/@preview-twccdocs/doc-hfs-main-zh"><ins>高速檔案系統</ins></ins></a>
:::