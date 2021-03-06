---
tags: Guide, VCS, TW
title: 鑰匙對 | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 鑰匙對

鑰匙對是登入 Linux 虛擬運算個體的憑證，建立個體之前，必須先取得或建立鑰匙對才能使用個體功能。

## 建立鑰匙對

:::danger

{%hackmd @docsharedstyle/important-zh %}

TWCC 不負責紀錄及管理您的鑰匙對，建立後請務必下載並妥善保存此鑰匙對 `pem` 檔案，若沒有此鑰匙對，您將無法連線虛擬運算個體。
:::



<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

### 1. 於建立虛擬運算個體時建立

- 您可於[建立虛擬運算個體](https://man.twcc.ai/@TWSC/guide-vcs-create-zh)時，於「鑰匙對」頁籤建立鑰匙對。

### 2. 於鑰匙對管理頁建立

* 點擊左側「**鑰匙對**」進入「鑰匙對管理」頁面，在此會顯示已建立的鑰匙對，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_34ee6ac25d60558644b998ba3497fe56.png)


* 輸入鑰匙對的名稱後點擊確認。
* 公開金鑰為非必填資訊，目的是方便在使用不同的雲端服務時，可以使用同一把金鑰。因此，使用者可以將他們在其他雲端系統內的公開金鑰填入此處，之後就可以使用此金鑰存取本系統。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ad7c3fbb8755a66c3826b8c610d40fc0.png)



鑰匙對建立後，**請務必立即按「下載」並妥善保存此鑰匙對**，若沒有此鑰匙對，將無法連線到該虛擬運算個體，下載後即可關閉此對話視窗。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0cdcfc942c9d1bb34462b038a6d6e5f3.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>


- 建立名為 **`key1`** 的鑰匙對

```bash
$ twccli mk key -n key1
```

:::info
為方便管理，建議為每項鑰匙對命名
:::


</details>



## 鑰匙對管理

- ### 檢視鑰匙對

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 進入「**鑰匙對管理頁**」面，剛建立好的 鑰匙對項目會列在最上方。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4809774e6f1e4b521ef570c7a9a23d02.png)

- 選擇鑰匙對，進入「**鑰匙對詳細資料**」頁，可檢視建立時間，並可複製 Fingerprint 與 公開金鑰。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d1643df05cacbbb686bc10776a671aa.png)



</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 檢視鑰匙對資訊

```bash
$ twccli ls key
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_752e44d40060a214fa67fba1db2a1ead.png)



</details>


- ### 刪除鑰匙對

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

* 進入「**鑰匙對管理**」頁面 > 勾選鑰匙對 > 點選上方「**刪除**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bbfda9c9b2de52067e3d6f1e67687404.png)

- 或點選鑰匙對旁的「<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>」 &nbsp; > 點選「**刪除**」。
- 或進入「**鑰匙對詳細資料**」頁 > 點選上方「**刪除**」。


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>

- 刪除名稱為 `key1` 的鑰匙對 
```bash
$ twccli rm key -n key1
```
:::danger

{%hackmd @docsharedstyle/important-zh %}
刪除後，請自行刪除本機端鑰匙對
:::spoiler
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ebc5f5ed8ea2bff1c5e0d8311873eb5.png)
:::



</details>