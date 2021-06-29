---
tags: Guide, CLI, ZH
title: twccli mk vlb | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli mk vlb

**`twccli mk vlb`** 指令可**建立負載平衡**。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli mk vlb --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e8722efd4369b1e614c2a6ea7578f571.png)

:::


## 必要參數

**`-vnn, --virtual_network_name`** (TEXT)
> 設定虛擬網路 (輸入 ID，預設使用 `default_network`)

**`-lt, --listerner_type`** (TEXT)
> 設定負載平衡類型 (APP_LB 或 NETWORK_LB，預設使用`APP_LB`)

**`-lt, --listerner_type`** (TEXT)
> 設定平衡方法 (SOURCE_IP 或 LEASE_CONNECTIONS 或 ROUND_ROBIN)

## 選擇性參數

**`-n, --load_balance_name`** (TEXT)
> 設定建立負載平衡的名稱

**`-d, --load_balance_description`** (TEXT)
> 設定建立負載平衡的描述

**`-lp, --listerner_port`** (TEXT)
> 設定負載平衡監聽埠 (預設使用`80`)

**`-h, --help`** (TEXT)
> 列出詳細資訊

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 (預設以 table 呈現)

**`-wait, --wait-ready`**
> 等待負載平衡建立至 **`Ready`** 狀態