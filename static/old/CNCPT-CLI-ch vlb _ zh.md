---
tags: Guide, CLI, ZH
title: twccli ch vlb | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli ch vlb

**`twccli ch vlb`** 指令可**更新負載平衡設定**。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli ch vlb --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5ab333c63d9d22fb6e0ee8c39186ac56.png)

:::


## 必要參數

N/A


## 選擇性參數

**`-id, --vlb-id`** (TEXT)
> 指定需更新的負載平衡 ID

**`-lm, --lb-method`**
> 設定平衡方式 (SOURCE_IP 或 LEAST_CONNECTIONS 或 ROUN)

**`-m, --member`** (TEXT)
> 設定(更換)平衡的虛擬運算個體成員
> 例：`twccli ch vlb -id {$vlbid} -m 192.168.100.1:80 192.168.100.2:80`

**`-wait, --wait-ready`**
> 等待更新後狀態轉為 **`Ready`** 狀態

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-h, --help`**
> 列出詳細資訊