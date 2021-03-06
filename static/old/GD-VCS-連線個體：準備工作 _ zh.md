---
tags: Guide, VCS, TW
title: 連線個體：準備工作 | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}


# 連線虛擬運算個體：準備工作

## Step 1. 建立公用 IP

若需從虛擬網路外部連線登入虛擬運算個體，請先建立公用 IP，並建議使用[安全性群組](https://man.twcc.ai/@TWSC/guide-vcs-sg-zh)保護個體安全與降低資安風險。

<!-- Portal start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

- 進入欲連線的虛擬運算個體詳細資料頁面。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f10c84d9be1fd4db71368249ec2af969.png)

- 至「網路與連線」區域，點選「**建立**」，建立公用 IP。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5799d666346614de5d3f8d7d0cc85770.png)

- 建立完成後，將顯示所使用的虛擬網路名稱、所取得的公用 IP 位址。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_083bac372f665e4b0c712b3e6176d646.png)


</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- CLI start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

### 指令

```bash
$ twccli net vcs -s  #虛擬運算個體 ID
                 -fip
```

:::info
{%hackmd @TWSC/cli-parameter-note-zh %}
:::


### 範例

為 ID **`937648`** 的虛擬運算個體，建立公用 IP，並檢視是否建立成功

```bash
$ twccli net vcs -s 937648 -fip
$ twccli ls vcs
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_565a7f89f09a26306182a00123a02929.png)

</details>

## Step 2. 取得連線資訊

<!-- Portal start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

#### Linux 個體

* 進入欲連線的虛擬運算個體詳細資料頁面

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f10c84d9be1fd4db71368249ec2af969.png)

* 點擊「**連線**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_217682606d5868b5df670f8305ec5d75.png)

* Linux 個體點擊「**連線**」按鈕後，系統會出現使用 SSH 連線到您的虛擬運算個體的資訊及步驟，每台個體的資訊不同。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_10fc84856418521027fc8575ecc61e61.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 此範例以 Ubuntu 為例，不同作業系統的虛擬運算個體，系統提示資訊將有所不同。
:::

#### Windows 個體

* 進入欲連線的虛擬運算個體詳細資料頁面，點擊「**連線**」按鈕後，系統將提供連線提示 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1799d2dee05b2fddda0996c666f813fb.png)

- 登入帳密：

    **帳號：administrator**
    **密碼：使用者自行定義之個體密碼**

</details>

<!-- CLI start -->

<div style="height:8px"></div>

<!-- Space -->

<details class="docspoiler">

<summary><b>TWCC CLI</b> (TBD)</summary>

</details>

<br>

