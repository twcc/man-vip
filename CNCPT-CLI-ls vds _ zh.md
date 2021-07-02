---
tags: Guide, CLI, ZH
title: twccli ls vds | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli ls vds

**`twccli ls vds`** 可檢視 TWCC 虛擬磁碟的多項資訊，包含ID / 名稱 / 建立時間 / 掛載路徑 / 容量 / 狀態 / 類型...等資訊。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli ls vds --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_09a6551d918cdf2adf9b2ae665c9347d.png)

:::



## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli ls vds`** 可表列出您所有已建立的虛擬磁碟資訊 (ID / 名稱 / 建立時間 / 掛載路徑 / 容量 / 狀態 / 類型)
:::

## 選擇性參數

**`-all, --show-all`**
> 列出計畫裡所有虛擬網路的資訊

**`id, --disk-id`** (INTEGER)
> 輸入虛擬磁碟 ID 以取得該磁碟更多資訊

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-h, --help`**
> 列出詳細資訊
