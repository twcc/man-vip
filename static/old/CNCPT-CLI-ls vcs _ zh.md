---
tags: Guide, CLI, ZH
title: twccli ls vcs | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli ls vcs

**`twccli ls vcs`** 可檢視 TWCC 虛擬運算個體的多項資訊，包含 ID、名稱、建立時間、狀態、虛擬網路、映像檔、規格、鑰匙對、安全性群組...等資訊。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli ls vcs --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_13cf58003201351f5836faa480f7276b.png)

:::




## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli ls vcs`** 可表列出您所有已建立的虛擬運算個體資訊 (ID / 名稱 / 建立時間 / 公用 IP / 狀態)
:::

## 選擇性參數

### 虛擬運算個體

**`-all, --show-all`**
> 列出計畫裡所有個體的資訊 (僅限租戶管理員使用)

**`-n, --name`** (TEXT)
> 檢視虛擬運算個體名稱

**`-s, --site-id`** (TEXT)
> 檢視虛擬運算個體 ID

<br>

### 資源規格 | 映像檔

**`-ptype, --product-type`**
> 檢視可供建立個體的資源規格與比例

**`-itype, --image-type`**
> 檢視可供建立虛擬運算個體的映像檔類型 (Ubuntu, CentOS...等)

**`-img, --image`**
> 檢視可供建立虛擬運算個體的映像檔版本
> 可使用 **`-itype`** 先指定映像檔類型，以過濾資訊

**`-cus-img, --custom-image`**
> 檢視個體已建立的映像檔
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-s`** 指定個體 ID

<br>

### 鑰匙對 | 網路

**`-key, --keypair`** (可直接使用 `ls key`，結果相同)
> 檢視可用的鑰匙對 

**`-net, --network`** (可直接使用 `ls vnet`，結果相同)
> 檢視可用的虛擬網路 

**`-secg, --security-group`** 
> 檢視個體已設定的安全性群組
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-s`** 指定個體 ID

<br>

### 其他

**`-col, --column`** (TEXT)
> 列出需表列的資訊 (**例：`twccli ls vcs -col desc`**)

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-h`, `--help`**
> 取得詳細說明
