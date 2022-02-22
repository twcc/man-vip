---
tags: Guide, CLI, ZH
title: twccli ls vlb | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli ls vlb

**`twccli ls vlb`** 可檢視 TWCC 負載平衡的多項資訊，包含ID / 名稱 / 建立時間 / 類型...等資訊。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli ls vlb --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ed2d405afacb89d1ec2813e99ec007e.png)
:::


## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli ls vlb`** 可表列出您所有已建立的虛擬磁碟資訊 (ID / 名稱 / 建立時間 / 掛載路徑 / 容量 / 狀態 / 類型)
:::

## 選擇性參數

**`-all, --show-all`**
> 列出計畫裡所有負載平衡的資訊

**`-col, --column`** (TEXT)
> 自訂需檢視的資料

**`-id, --vlb-id`** (INTEGER)
> 輸入欲檢視資訊的負載平衡 ID

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-h, --help`**
> 列出詳細資訊
