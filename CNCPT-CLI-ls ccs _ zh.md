---
tags: Guide, CLI, ZH
title: twccli ls ccs | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli ls ccs

**`twccli ls ccs`** 可**檢視 TWCC 容器運算服務的多項資訊**，包含容器 (ID/名稱/建立時間/ Site ID/狀態)、服務埠、ID、複本、映像檔、規格...等資訊。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli ls ccs --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7cc508295a60ca49d6949adccb25209b.png)

:::


## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli ls ccs`** 可表列出您所有已建立的容器資訊 (ID / 名稱 / 建立時間 / 狀態)
:::

## 選擇性參數

### 容器 | 網路 | 複本

**`-s, --site-id`** (TEXT)
> 輸入容器 ID 以檢視詳細資訊

**`-all, --show-all`** (僅限租戶管理員使用)
> 列出計畫裡所有容器的資訊

**`-p, --port`** 
> 檢視容器的服務埠資訊
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-s`** 指定容器 ID

**`-dup, --show-duplication-status`**
> 檢視已提交建立容器複本的申請狀態

<br>

### 資源規格 | 映像檔

**`-gpu, --gpus-flavor`**
> 檢視可供建立容器的資源規格與比例

**`-img, --img`**
> 取得可供建立容器的映像檔版本

**`-itype, --image-type-name`**
> 取得可供建立容器的映像檔類型 (TensorFlow, PyTorch...等)

<br>

### 連線資訊

**`-gjpnb, --get-jupyter-notebook`** 
> 取得以 Jupyter Notebook 連線容器的路徑
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-s`** 指定容器 ID

**`-gssh, --get-ssh-info`**
> 取得以 SSH 連線容器的資訊
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-s`** 指定容器 ID

<br>

### 其它指令

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-h`, `--help`**
> 取得詳細說明
