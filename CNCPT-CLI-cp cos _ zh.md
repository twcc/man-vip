---
tags: Guide, CLI, ZH
title: twccli cp cos | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# twccli cp cos

**`twccli cp cos`** 可檢視 TWCC 雲端物件儲存的多項資訊。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
可使用 **`twccli cp cos --help`** 列出參數詳細說明
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_af13c0bde8863b4d73b1e6ab1aee2a1a.png)
:::


## 必要參數

N/A


## 選擇性參數

**`-sync, --synchronized`** [to-cos | from cos]
> 設定同步資料的方向，同步至 COS，或是將 COS 資料同步至本機端
> to-cos 或 from cos，預設為 to-cos

**`-dir, --directory`** TEXT
> 檔案來源路徑

**`-okey, --cos-key`** TEXT
> 儲存體裡的檔案

**`-fn, --file-name`** TEXT
> 上傳至儲存體的本機端檔案名稱

**`-bkt, --bucket-name`** TEXT
> 資料上傳目的地的儲存體名稱

**`-h, --help`**
> 列出詳細資訊
