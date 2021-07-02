---
tags: Guide, CLI, ZH
title: TWCC CLI 指令概觀 | zh
GA:
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# TWCC CLI 指令概觀

## `twccli` 指令與用途

除 `config` 與 `cp` 外，

**`ls`** (檢視)、**`mk`** (建立)、**`net`** (設定網路)、**`rm`** (刪除) 為 4 大項 TWCC 資源操作指令，可與多項服務搭配使用： 


|指令|用於|用途|
|--|--|--|
|`config`||TWCC-CLI環境部屬|
|`cp`|`cos`|上傳、下載檔案至雲端物件|
|`ls`|`ccs`|檢視 開發型容器資訊|
||`vcs`|檢視 虛擬運算資訊|
||`cos`|檢視 雲端儲存體資訊|
|`mk`|`ccs`|建立 開發型容器資訊|
||`vcs`|建立 虛擬運算資訊|
||`cos`|建立 雲端儲存體資訊|
|`net`|`ccs`|設定 開發型容器 網路服務|
||`vcs`|設定 虛擬運算 網路服務|
|`rm`|`ccs`|刪除 開發型容器資訊|
||`vcs`|刪除 虛擬運算資訊|
||`cos`|刪除 雲端儲存體資訊|

詳細操作請參考`--help`
:::spoiler --help of config 
- `twccli config --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2cc5dd9d7e80b9c2813d15f17dac1daa.png =55%x)
:::