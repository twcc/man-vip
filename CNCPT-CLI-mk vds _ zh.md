---
tags: Guide, CLI, ZH
title: twccli mk vds | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli mk vds

**`twccli mk vds`** 指令可建立**虛擬磁碟 (資料碟)**。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli mk vds --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_be8c4ad2bef4d62421c610dd1083837b.png)

:::


## 必要參數

N/A


## 選擇性參數

**`-t, --disk-type`** (TEXT)
> 設定虛擬磁碟的類型 (HDD 或 SSD, 預設為 HDD)

**`-n, --disk-name`** (TEXT)
> 設定虛擬磁碟的名稱

**`-sz, --disk-size`** (TEXT)
> 設定虛擬磁碟的容量 (預設為 100 GB)

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-h, --help`**
> 列出詳細資訊

## 範例

請參考 [建立虛擬磁碟](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-vds-create-data-disk-zh) 其中以 TWCC CLI 操作的部分。