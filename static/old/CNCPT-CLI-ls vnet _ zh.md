---
tags: Guide, CLI, ZH
title: twccli ls vnet | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli ls vnet

**`twccli ls vnet`** 可檢視 TWCC 虛擬運算個體的多項資訊，包含 ID、名稱、建立時間、狀態、虛擬網路、映像檔、規格、鑰匙對、安全性群組...等資訊。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli ls vnet --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4a91b814324ecb2a8bdca50b450e2930.png)


:::



## 必要參數

N/A

:::warning
{%hackmd @docsharedstyle/tip-zh %}
完全不帶參數時，使用 **`twccli ls vnet`** 可表列出您所有已建立的虛擬網路資訊 (ID / 名稱 / CIDR /建立時間 / 狀態)
:::

## 選擇性參數

**`-all, --show-all`**
> 列出計畫裡所有虛擬網路的資訊

**`id, --virtual_network_id`** (INTEGER)
> 輸入虛擬網路 ID 以取得更多資訊

**`-h`, `--help`**
> 取得詳細說明
