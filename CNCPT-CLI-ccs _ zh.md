---
tags: Guide, CLI, ZH
title: twccli mk ccs | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli mk ccs

**`twccli mk ccs`** 指令可**建立開發型容器、容器複本**。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli mk ccs --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e3d331bc1e4a729126420dad94142a32.png)


:::


## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli mk ccs`** 將會以系統預設建立資訊建立容器，請參考 [<ins>建立開發型容器</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-create-zh)。
:::

## 選擇性參數


### 共用指令

**`-n, --name`** (TEXT)
> 設定建立容器 / 複本 的名稱

**`-h, --help`** (TEXT)
> 列出詳細資訊

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

<br>

### 建立容器專用

**`-gpu, --gpu-number`** (TEXT)
> 指定容器 GPU 需求數量

**`-itype, --image-type-name`** (TEXT)
> 指定使用的映像檔類型名稱

**`-img, --image-name`** (TEXT)
> 指定使用的映像檔版本

**`-envk, --environment-keys`**  (TEXT)
> 帶入 key 以安全傳遞您的環境參數值

**`-envv, --environment-values`**  (TEXT)
> 帶入需傳遞的環境參數值

**`-wait, --wait-ready`**
> 等待容器建立至 **`Ready`** 狀態

<br>

### 建立複本專用

**`-dup, --request-duplication`** 
> 提出建立容器複本的申請
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-s`** 指定容器 ID

**`-s, --site-id`** (INTEGER)
> 建立容器複本時，使用此指令，指定來源容器 ID

**`-tag, --duplication-tag`** (TEXT)
> 設定複本的說明 tag

<br>

## 範例

請參考 [建立開發型容器](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-create-zh)、[建立容器複本](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-duplicate-zh) 其中以 TWCC CLI 操作的部分。