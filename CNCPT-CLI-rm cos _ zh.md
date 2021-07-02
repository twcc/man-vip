---
tags: Guide, CLI, ZH
title: twccli rm cos | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli rm cos

**`twccli rm cos`** 指令可刪除 TWCC 虛擬磁碟。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli rm cos --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_34046e4d44dca091109714ccbc3f9747.png)

:::

## 必要參數

N/A

## 選擇性參數


**`-f, --force`** 
> 強制刪除資源 (預設：不強制刪除)

**`-r, --recursively`** (TEXT)
> 遞迴刪除 (請小心使用，預設：不遞迴刪除)

**`-bkt, --bucket-name`** (TEXT)
> 欲刪除的儲存體名稱

**`-okey, --cos-key`** (TEXT)
> 指定欲刪除的檔案

**`-h`, `--help`**
> 取得詳細說明

## 範例

請參考 [刪除儲存體](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40twccdocs%2Fguide-cos-create-delete-bucket-zh)、[刪除檔案](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40twccdocs%2Fguide-cos-view-search-delete-files-zh) 其中以 TWCC CLI 操作的部分。