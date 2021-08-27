---
tags: Guide, CLI, ZH
title: twccli rm vcs | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# twccli rm vcs

**`twccli rm vcs`** 指令可刪除 TWCC 虛擬運算個體、安全性群組規則、映像檔、鑰匙對。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli rm vcs --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c474dae2178f1be450bb15e825aa71da.png)

:::

## 必要參數

**`-s, --site-id`** (TEXT)
> 指定欲刪除的虛擬運算個體 ID

## 選擇性參數


**`-f, --force`** 
> 強制刪除資源 (預設：不強制刪除)

**`-n, --name`** (TEXT)
> 指定刪除的資源名稱 (例：虛擬運算個體 ID / 安全性群組 ID / 鑰匙對 ID)

**`-cus-img, --custom-image`** (TEXT)
> 刪除的映像檔
> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 需使用 **`-cus-img-id`** 指定映像檔 ID

**`-cus-img-id, --custom-image-id`** (TEXT)
> 指定欲刪除的映像檔 ID

**`-key, --kaypair`**
> 刪除已建立的鑰匙對

**`-secg, --security-group`**
> 刪除已建立的安全性群組規則

**`-all, --show-all`** (僅限租戶管理員使用)
> 刪除全部資源 

**`-h`, `--help`**
> 取得詳細說明



## 範例

請參考 [管理個體](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-manage-instance-zh40twccdocs%2Fguide-ccs-manage-zh)、[管理鑰匙對](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-keypair-zh#%E9%91%B0%E5%8C%99%E5%B0%8D%E7%AE%A1%E7%90%86)、[刪除安全性群組](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-sg-zh#%E5%88%A0%E9%99%A4%E5%AE%89%E5%85%A8%E6%80%A7%E7%BE%A4%E7%B5%84%E8%A6%8F%E5%89%87) 其中以 TWCC CLI 操作的部分。