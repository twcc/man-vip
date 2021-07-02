---
tags: Guide, CLI, ZH
title: twccli mk vcs | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli mk vcs

**`twccli mk vcs`** 指令可建立虛擬運算個體、映像檔。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli mk vcs --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eab6bd08cb35d4fb0bccf1cb0cb648e0.png)

:::


## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli mk vcs`** 將會以系統預設建立資訊建立虛擬運算個體，請參考 [<ins>建立虛擬運算個體</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)。
:::

## 選擇性參數


### 共用指令

**`-n, --name`** (TEXT)
> 設定建立虛擬運算個體 / 映像檔 的名稱

**`-h, --help`** (TEXT)
> 列出詳細資訊

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 

<br>

### 建立虛擬運算個體

- **資源規格 | 映像檔**

**`-ptype, --product-type`** (TEXT)
> 選擇建立個體的資源規格與比例 (**預設：v.super**)

**`-itype, --image-type-name`** (TEXT)
> 指定使用的映像檔類型名稱 (Ubuntu, CentOS...等)

**`-img, --img_name`** (TEXT)
> 指定使用的映像檔版本

<br>

- **鑰匙對 | 密碼**

**`-key, --keypair`** (TEXT)
> 指定連線 Linux 虛擬運算的鑰匙對 (憑證)

**`-pwd, --password`** (TEXT)
> 設定 Windows 個體的登入密碼

<br>

- **網路 | 環境參數**

**`-net, --network`** (TEXT)
> 指定使用的虛擬網路名稱

**`-fip, --need-floating-ip`** (TEXT)
> 指派公用 IP 供連線虛擬運算個體使用

**`-envk, --environment-keys`** (TEXT)
> 帶入 key 以安全傳遞您的環境參數值

**`-envv, --environment-values`** (TEXT)
> 帶入需傳遞的環境參數值

<br>

- **磁碟 | 其他**

**`-sys-vol, --sys-volume-type`** (TEXT)
> 選擇開機磁碟的類型 (**預設：HDD**)

**`-dd-type, --data-disk-type`** (TEXT)
> 選擇資料磁碟的類型 (**預設：HDD**)

**`-dd-size, --data-disk-size`** (INTEGER)
> 設定資料磁碟的容量大小 (GB) (**預設：0**)

**`-wait, --wait-ready`**
> 等待個體建立至 **`Ready`** 狀態

<br>

### 建立映像檔

**`-cus-img, --custome-image`** (TEXT) (<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-s`** 指定容器 ID)
> 建立虛擬運算個體映像檔

**`-s, --site-id`** (INTEGER)
> 建立映像檔時，使用此指令，指定來源個體 ID



## 範例

請參考 [建立虛擬運算個體](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)、[建立個體映像檔](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-vds-instance-image-zh) 其中以 TWCC CLI 操作的部分。