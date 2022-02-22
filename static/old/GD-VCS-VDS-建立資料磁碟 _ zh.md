---
tags: Guide, VCS, VDS, TW
title: 建立資料磁碟 | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 建立資料磁碟

若虛擬運算個體儲存空間不足，您可以建立資料磁碟，再連結至個體、將磁碟初始化後即可使用。

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

### 1. 建立虛擬運算個體時建立

- 您可於建立[<ins>虛擬運算個體</ins>](https://man.twcc.ai/@TWSC/guide-vcs-create-zh)時，於「儲存」頁籤指定建立資料磁碟 (僅能建立 1 個磁碟，並僅能選擇類型、容量，無法指定名稱)。

### 2. 於資料磁碟管理頁建立

若需建立更多磁碟，請參考下方說明：

* 由服務列表點選進入「**虛擬磁碟**」服務，在「**資料磁碟管理**」頁面，點擊「**＋建立**」。
* 填寫資料磁碟名稱、描述、此資料磁碟是要重新建立或從還原快照、容量及磁碟類型 (提供 HDD、SSD 磁碟)，接著點擊「**下一步：檢閱+建立>**」。

{%hackmd @twccdocs/ui-chunk-favorites-zh %}

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_45c53d5003d1b66785e556a092b99f0a.png)



<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用 SSD 加密資料磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->


* 檢視資料磁碟的設定，確認後按下「**建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_062d6a00a7b7e9910dee1b34414b223c.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>


### 指令

```bash
$ twccli mk vcs [-n]   #資料磁碟名稱
                [-sz]  #資料磁碟容量
                
```
:::info
{%hackmd @TWSC/cli-parameter-note-zh %}
2. 若不帶選擇性參數，則以預設資訊建立資料磁碟：

| 磁碟類型 | 名稱 |容量大小|
| -------- | -------- | -------- | 
| HDD  | twccli  | 100 GB  | 
:::

</div>

### 範例

- 建立名為 **`clitest`** ，且指定儲存容量為 **`10 GB`** 的虛擬磁碟服務。

```bash
$ twccli mk vds -n clitest -sz 10
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3da7383c28c4700cd8429fbbb282a58d.png)


</details>