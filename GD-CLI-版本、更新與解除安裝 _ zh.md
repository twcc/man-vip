---
tags: Guide, CLI, ZH
title: 版本、更新與解除安裝 | zh
GA:
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# 版本、更新與解除安裝


## 檢視 TWCC CLI 版本

檢視 TWCC CLI 安裝版本 (最新版本資訊：[TWCC-CLI github](https://github.com/TW-NCHC/TWCC-CLI/tree/v0.5))
```bash
$ twccli config version
```


:::info
{%hackmd @docsharedstyle/note-zh %}

安裝完成後，即可參考[<ins>登入 TWCC CLI</ins>](https://man.twcc.ai/@TWSC/Sk8jhvIgd) 進入 TWCC CLI 環境。
:::


## 版本更新

TWCC CLI 將持續更新改善使用體驗，您可參考 [TWCC CLI 版號與版本資訊](https://github.com/twcc/TWCC-CLI/tree/v0.5)，並使用以下指令將您使用的版本更新至最新。

```bash
$ pip install -U TWCC-CLI
```

## 解除安裝

使用以下指令可解除安裝 TWCC CLI。

```bash
$ pip uninstall TWCC-CLI
```