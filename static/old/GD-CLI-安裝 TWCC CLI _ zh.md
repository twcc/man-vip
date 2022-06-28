---
tags: Guide, CLI, ZH
title: 安裝 TWCC CLI | zh
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/default %}

# 安裝 TWCC CLI

TWCC CLI 提供安裝於 Linux 環境，因此您可以安裝於**本機端 Linux/macOS**，或安裝於 **TWCC Linux 環境**使用。 

## 開始之前

- 若尚未註冊使用帳號，請先[註冊 TWCC](https://www.twcc.ai/)。
- 若非使用本機，您可以透過 [TWCC 入口網站](https://www.twcc.ai/)，選擇建立任一 TWCC 提供的 Linux 環境：
    - [<ins>TWCC 虛擬運算服務</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)
      > - Linux 個體已為用戶預安裝 TWCC CLI，建立個體後即可連線[登入](https://man.twcc.ai/@twccdocs/guide-cli-signin-zh)使用
      > - 成本較開發型容器低，建議使用

    - [<ins>TWCC 開發型容器</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fguide-ccs-create-zh)
        > - `2021` 版本<ins>以後</ins>之容器已為用戶預安裝 TWCC CLI，建立後可[登入](https://man.twcc.ai/@twccdocs/guide-cli-signin-zh)使用
        > - `2021` 版本<ins>以前</ins>的容器映像檔版本需自行安裝
        > - 成本較高，建議先考慮是否符合成本規劃 

## 安裝步驟

### Step 1. 連線環境

- 選擇本機端環境安裝，請開啟終端機；或
- [連線虛擬運算個體](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-zh)。


### Step 2. 安裝 TWCC CLI

使用以下指令安裝 TWCC CLI，完成後，接著請[登入](https://man.twcc.ai/@twccdocs/guide-cli-signin-zh)。

```bash
$ pip install TWCC-CLI
```

:::info

{%hackmd @docsharedstyle/note-zh %}

以上指令適用 Python 2，若您的環境安裝 Python 3，請將 `pip` 改為 `pip3`。  

:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_74129ca51022a3c664d10fc3f69750f0.png)





