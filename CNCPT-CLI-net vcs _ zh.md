---
tags: Guide, CLI, ZH
title: twccli net vcs | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli net vcs

**`twccli net vcs`** 可管理開發型容器的連接埠。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli net vcs --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f39c1dbbf2dd643c2bae60b03b401a98.png =85%x)
:::



## 必要參數

**`-s, --site-id`** (INTEGER)
> 指定個體 ID


## 選擇性參數

### 共用指令

**`--help`** (INTEGER)
> 取得詳細資訊

<br>

### 安全性群組

**`-p, --port`** (INTEGER)
> 設定連接埠

**`-cidr, --cidr-network`** (TEXT)
> 安全性群組的 CIDR (網段範圍，**預設：192.168.0.1/24**)

**`-in, --ingress`** | **`-out, --egress`**
> 設定安全性群組是 連入個體 或 個體聯外 的規則 

**`-prange, --port-range`** (TEXT)
> 設定規則適用的連結埠範圍 (最小 - 最大)，使用 「**`-`**」連接，例：「3000-3010」

**`-proto, --protocol`** (TEXT)
> 選擇選擇欲管控的協定如 tcp、udp、icmp… 等。(**預設：tcp**)

<br>

### 公用 IP

**`-fip, --floating-ip`** | **`-noip, --no-floating-ip`**
> 指派 或 移除 虛擬運算個體的公用 IP

<br>

## 範例


請參考 [安全性群組](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-sg-zh)、[連線虛擬運算個體：準備工作](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-prerequisite-zh)其中以 TWCC CLI 操作的部分。