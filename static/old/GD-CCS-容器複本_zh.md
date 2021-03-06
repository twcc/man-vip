---
title: 容器複本 | zh
tags: Guide, CCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 容器複本

TWCC 開發型容器複本提供您保存自行部署完成的容器映像檔，複本映像檔建立完成後，同計畫內的成員皆可以共享使用，所有軟體僅需安裝一次，提供您快速複製及部署相同工作環境的便利性。

此外，因容器建立後即持續計費，您也可使用複本保存容器設定，刪除原容器，待下回工作時再建立新的容器續用，節省開發成本。或是使用複本作為容器損壞的災難救援方案。


:::danger

{%hackmd @docsharedstyle/important-zh %}

1. 容器複本範圍不包含容器預設目錄 /home 與 /work 之資料，製作複本前請您留意套件安裝位置。Python 套件安裝注意事項請參考：[<ins>TWCC 開發型容器-Python 套件安裝指南</ins>](https://man.twcc.ai/@twccdocs/ccs-intactv-howto-zh)。 
2. 當您存放超過 10 GB 資料在容器系統目錄 (非[<ins>高速檔案系統 (HFS) 服務</ins>](https://man.twcc.ai/@preview-twccdocs/doc-hfs-main-zh)之 /home 或 /work 目錄)，進行容器複本時可能會有無法建立的情況。

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 如有任何問題請與我們的技術支援團隊或客服人員連絡，謝謝！
:::

## 建立開發型容器複本

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 進入開發型容器詳細資料「**配置**」頁面，點擊上方「**複本**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_796e7a60a805efb02daad9392ec4f376.png)


* 輸入容器複本的標籤後按下確認。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3c61142cd535ad3ae8c6261ba6e24446.png)



* 容器複本建立後，會出現在開發型容器複本管理的列表中，建立容器複本需要幾分鐘的時間，此時複本狀態顯示為 **`Requested`**。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7610e5a815484451e2b5301fcbee47c.png)


* 數分鐘後，當複本狀態變成 **`Resolved`** 即可開始使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f95a3d01322b8d65e0a38d1bb0f135b8.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 提出申請保留容器 ID 為 `934336` 的容器，image tag 自訂為 *dup1*
```bash
$ twccli mk ccs -s 934336 -dup -tag dup1 
```

- 檢視已提出的申請狀態

```bash
$ twccli ls ccs -dup
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3b392366c438096c660347681dd81ca7.png)

</details>

<br>

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 容器複本建立後不可刪除。
:::



## 以複本建立客製化容器

複本建立完成後，您即可在需要時使用複本建立新的容器。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 由服務列表點選「**開發型容器**」，在「**開發型容器管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8085ef8c082d3387eb95477be448a38a.png)



* 在選擇映像檔類型頁面，點選「**Custom Image**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_81035131a533a3a71a3df759542725c3.png)



* 填寫容器基本資訊與硬體規格配置，並選擇自訂的映像檔，接著點擊「**下一步：儲存資訊>**」，其他步驟同建立開發型容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eb232de503b359b00ddf85467ca46c87.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 同計畫內的成員皆可以共享使用複本，在映像檔下拉清單內可見計畫下所有的容器複本。

:::

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 建立映像檔類型`Custom Image`中，映像檔規格與 tag 為 `tensorrt-19.08-py3:dup1`的容器，並將複本命名為 `dupcli`。

```bash
$ twccli ls ccs -img "Custom Image"
$ twccli mk ccs -itype "Custom Image" -img "tensorrt-19.08-py3:dup1" -n dupcli
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3310c270ae57370c22704b470cccbe60.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b2071ecdbafd5db2f98fbbf11b3e2ea.png)

</details>

