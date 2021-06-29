---
tags: Guide, CLI, ZH
title: twccli mk vnet | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli mk vnet

**`twccli mk vnet`** 指令可建立**虛擬網路**。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli mk vnet --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_90dcd2d94fc11df5591f5f0a829697b6.png)


:::


## 必要參數

N/A


## 選擇性參數

**`-n, --vnet_name`** (TEXT)
> 設定建立虛擬網路的名稱

**`-cidr, --cidr`** (TEXT)
> 設定虛擬網路的 CIDR (網段範圍)

**`-gw, --getway`** (TEXT)
> 設定虛擬網路的閘道

**`-table, --table-view`** | **`-json, --json-view`**
> 資訊以 table 呈現 | 資訊以 json 格式呈現 

**`-wait, --wait-ready`**
> 等待虛擬網路建立至 **`Ready`** 狀態

**`-h, --help`**
> 列出詳細資訊

## 範例

請參考 [建立虛擬網路](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-vnw-zh) 其中以 TWCC CLI 操作的部分。