---
tags: Guide, CLI, ZH
title: twccli rm vcs | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli rm vcs

**`twccli rm vcs`** 指令可刪除 TWCC 虛擬運算個體、安全性群組規則、映像檔、鑰匙對。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli rm vcs --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c474dae2178f1be450bb15e825aa71da.png)

:::

## 必要參數

N/A

## 選擇性參數


**`-f, --force`** 
> 強制刪除資源 (預設：不強制刪除)

**`-n, --name`** (TEXT)
> 指定刪除的資源名稱 (例：虛擬運算個體 ID / 安全性群組 ID / 鑰匙對 ID)

**`-s, --site-id`** (TEXT)
> 指定欲刪除的虛擬運算個體 ID

**`-cus-img, --custom-image`** (TEXT)
> 刪除的映像檔
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-cus-img-id`** 指定映像檔 ID

**`-cus-img-id, --custom-image-id`** (TEXT)
> 指定欲刪除的映像檔 ID

**`-key, --kaypair`**
> 刪除已建立的鑰匙對

**`-secg, --security-group`**
> 刪除已建立的安全性群組規則

**`-all, --show-all`** (僅限租戶管理員使用)
> 刪除全部資源 

**`-h`, `--help`**
> 取得詳細說明



## 範例

請參考 [管理開發型容器](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-create-zh) 其中以 TWCC CLI 操作的部分。