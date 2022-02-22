---
tags: Guide, CLI, ZH
title: twccli ls cos | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli ls cos

**`twccli ls cos`** 可檢視 TWCC 雲端物件儲存的多項資訊。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli ls cos --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4737ee46fda89e926d83ed32f4f8c633.png)
:::


## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli ls cos`** 可表列出您所有已建立的儲存體 (名稱 / 建立時間)
:::

## 選擇性參數

**`-bkt, --bucket-name`** (TEXT)
> 輸入欲檢視資訊的儲存體名稱

**`-okey, --object-key-name`** (TEXT)
> 輸入特定物件檔案的金鑰 (支援 regular expression)

**`-pub, --show-public-status` / `-nopub, --no-show-public-status`** (TEXT)
> 是否可公開檢視 (預設不能公開檢視)

**`-ver, --check-versioning-name`** (TEXT)
> 是否有版本記錄

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-h, --help`**
> 列出詳細資訊
