---
tags: Guide, VCS, TW
title: 建立虛擬運算個體 | zh
GA: 
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 建立虛擬運算個體

您可以系統預設資訊以簡單步驟完成建立虛擬運算個體，或是依需求選擇適合的個體型號。完整虛擬運算個體型號 (含資源數量與其他資源大小)，請參考[價目表](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#虛擬運算服務-Virtual-Compute-Service-VCS)。

:::info
{%hackmd @docsharedstyle/note-zh %}
TWCC 提供下列映像檔：
- **Linux**：Ubuntu-16.04、18.04、20.04; Centos-7.9、8.2
- **Windows**：Windows 10 Pro、Windows 10 Enterprise LTSC; Windows Server 2016
:::

{%hackmd @twccdocs/chunk-before-you-begin-zh %}


### 建立 <i class="fa fa-linux" aria-hidden="true"></i> Linux 個體

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

{%hackmd @TWSC/vcs-chunk-create-instance-zh %}

- 接著點擊「**下一步：鑰匙對>**」

* 鑰匙對是登入 Linux 虛擬運算個體的憑證，必須透過鑰匙對，才能連線使用虛擬運算個體功能。可選擇已建立的鑰匙對，若第一次使用請按「**＋建立鑰匙對**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b07e58c36056e7bf120a6e35a70bc70c.png)


* 輸入鑰匙對的名稱後點擊確認。

:::info
{%hackmd @docsharedstyle/note-zh %}
公開金鑰為非必填資訊，目的是方便在使用不同的雲端服務時，可以使用同一把金鑰。因此，使用者可以將他們在其他雲端系統內的公開金鑰填入此處，之後就可以使用此金鑰存取本系統。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_57a261c1f9903c2753530ce5e16bfa85.png)


* 鑰匙對建立後，請務必立即按「**下載**」並妥善保存此鑰匙對，若沒有此鑰匙對，將無法連線該虛擬運算個體，下載後即可關閉此對話視窗，接著點擊「**下一步：檢閱 + 建立>**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d64cb97650700d44ec73f9bc5c5ba46.png)


:::danger
<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> **重要**：TWCC 不負責紀錄及管理您的鑰匙對，請務必下載並妥善保存此鑰匙對 `pem` 檔案，若沒有此鑰匙對，您將無法[<ins>連線虛擬運算個體</ins>](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-linux-from-windows-zh)。
:::


* 檢視整個虛擬運算個體的設定和預估使用額度，按下「**建立**」即完成，幾分鐘後 等個體狀態變成 **`Ready`** 後即可開始[<ins>連線</ins>](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-linux-from-windows)使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f062b7368287f59d3a7ffc77cb4140c2.png)

</details>

<!-- Space -->

<div style="height:8px"></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>

<br>


### 指令

**Step 1.** 請先[<ins>建立鑰匙對</ins>](https://man.twcc.ai/@TWSC/guide-vcs-keypair-zh)
**Step 2.** 建立虛擬運算個體個體

```bash
$ twccli mk vcs -key   #鑰匙對名稱
                [-n]   #虛擬運算個體名稱
                
```
:::info
{%hackmd @TWSC/cli-parameter-note-zh %}
2. 若不帶選擇性參數，則以預設資訊建立個體：

| 映像檔類型、映像檔 | 型號 |網路資訊|規格|
| -------- | -------- | -------- | -------- |
| Ubuntu 16.04    | v.2xsuper  | default_network  | 0 GPU + 8 CPU + 064GB memory |
:::

</div>

### 範例

- 使用鑰匙對 **`key1`** 建立名稱為 **`vcscli`** 的虛擬運算個體。

```bash
$ twccli mk vcs -key key1 -n vcscli
```

:::danger
{%hackmd @docsharedstyle/important-zh %}

- 虛擬運算個體名稱命名字元條件：需為**小寫字母或數字**，**首字元需為小寫字母**，**長度 6-16 個字元**。
-  若設定不符合以上條件，將出現以下錯誤訊息：
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095834bd7ee5d99d3a70596a7c462629.png)
:::

:::warning
{%hackmd @docsharedstyle/tip-zh %}

其他相關 TWCC CLI 指令：

```bash
$ twccli ls vcs -img   #檢視所有映像檔規格
$ twccli ls vcs -ptype #檢視所有產品型號與規格
```


:::


</details>


### 建立 <i class="fa fa-windows" aria-hidden="true"></i>  Windows 個體

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC 入口網站</b></summary>

<br>

{%hackmd @TWSC/vcs-chunk-create-instance-zh %}


- 建立 Windows 登入密碼。接著點擊「**下一步：檢閱 + 建立>**」


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f16ac8f01c7141e7f5fd22120e120c2.png)


:::danger
{%hackmd @docsharedstyle/important-zh %}
1. 為保護您的虛擬運算個體安全，密碼設定建議至少包含 **17 個字元**。
2. 此密碼為私人使用，TWCC 將不負責紀錄及管理。請務必妥善保存，若沒有密碼，將無法連線虛擬運算個體。
:::


* 檢視整個虛擬運算個體的設定和預估使用額度，按下「**建立**」即完成，幾分鐘後，等個體狀態變成 **`Ready`** 後，再等候一些時間即可開始[<ins>連線</ins>](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-windows-from-windows-zh)使用。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f062b7368287f59d3a7ffc77cb4140c2.png)

</details>


---

:::info
{%hackmd @docsharedstyle/note-zh %}

虛擬運算個體建立後，外掛**資料磁碟**需經初始化才能使用，步驟請參考：

- [<ins>HowTo：初始化磁碟- Linux 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh)
- [<ins>HowTo：初始化磁碟- Windows 個體</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)
:::

