---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/ccs-intactv-howto-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/ccs-intactv-howto-zh'
---

# Python 套件安裝指南

本文件主要目的為說明於 TWCC 開發型容器服務上透過 pip 安裝 Python 套件 (package) 的相關操作及應注意事項，以及程式執行失敗的測試及排除方式。

:::info
更多資訊，請參考[TWCC 開發型容器](../user-guides/create-connect/create-container.md) 
:::

## 套件安裝工具

TWCC 開發型容器服務是基於 [NGC Image](https://docs.nvidia.com/deeplearning/frameworks/support-matrix/index.html) 的預載 AI Framework，其中已預安裝 pip 作為 Python 套件管理程式，您可以透過其他的方式安裝 Python 套件，例如下載離線安裝包等，而本文則會以 pip 作為安裝工具。

## 套件安裝位置

使用 pip 安裝套件，可選擇安裝於系統目錄 (需 root 身份) 或使用者的 Home 目錄 (高速檔案系統, HFS)：
- 安裝於系統目錄，開發環境將會隨著容器本身的生命週期存續，您可以選擇製作容器映像檔將這些套件隨著容器映像檔一同保存下來，之後再選擇容器映像檔啟動開發型容器，將可以得到一致的開發環境。但若選擇其他的容器，則必須重新再安裝套件。
　　
- 安裝套件於使用者 Home  目錄，套件將會存放於高速檔案系統 (HFS) 上，原則上是永久存續。TWCC 開發型容器預設會掛載 HFS 作為使用者 Home 目錄，換句話說，不論開啟任何容器，套件都會被帶到新容器中，不需要再重新安裝，**但也因為 TWCC 提供的 AI Framework 眾多，其中 Python 預載的版本不盡相同，而可能產生相關套件衝突問題。**

:::info
1. 為確保資料完整不遺失，請將**重要資料**存放於高速檔案系統 (HFS)，避免存放於系統目錄。
2. 若將套件安裝於 Home 目錄，建議搭配 pipenv 或 Conda 等 Python 套件管理工具，以避免 Python 套件衝突問題。
3. 更多資訊，請參考[高速檔案系統 (HFS)](../..//hfs/overview.md) 
:::

## 套件安裝方式
  　
使用者應考量上述因素，在使用開發型容器的開發過程中，自行選擇適合的套件安裝位置：


- 安裝於系統目錄內，請使用：

```bash=
sudo -s -H pip install {package name}
```
 
- 安裝套件於使用者 Home 目錄，請使用：

```bash=
pip install　{package name} 

//或

pip install {package name} --user
//一般使用者身份預設將會安裝套件於家目錄 .local 下
```


## 檢視套件安裝位置

- 檢視系統目錄安裝的套件

```bash=
pip list
```

- 檢視使用者 Home 目錄 `~/.local` 下的安裝套件

```bash=
pip list --user
```

## 程式執行異常的建議排除方式

以 TensorFlow 程式為例，假設原先使用 TensorFlow  19.02 映像檔建立的容器，程式皆執行正常，但使用 TWCC 新上架的映像檔建立的容器，原程式運行卻出現了異常，通常都是 Python 套件安裝於 Home 目錄，被攜帶到新版的容器，而出現套件衝突問題，可採取下列方式測試及排除障礙：

1. 先檢視目前在 Home 目錄安裝了哪些 Python 套件 (非必要步驟)

```bash=
pip list --user
```
  
2. 手動先將套件暫時搬離安裝路徑，或直接清除套件

```bash=
mv ~/.local ~/local_backup
//把套件路徑先更名為 local_backup

//或

rm -rf ~/.local  
//!!!!將直接清除套件!!!!請小心操作
```
 
3. 再檢視一次套件，若已清除則不會顯示任何套件名稱 (非必要步驟)

```bash=
pip list --user
```

4. 依據上述[套件安裝方式](#套件安裝方式)重新安裝適合此容器之套件，請自行選擇適合的套件安裝位置

5. 再次執行您的程式，確認運行障礙是否已排除

:::info
若仍無法排除，請您聯繫客服人員，並請提供所有可能之錯誤訊息或截圖
- 免付費客服專線：0809-091-365
- 技術支援服務：isupport@narlabs.org.tw
:::


6. 備份的套件目錄您可自行移除或是重新命名，例如重新命名為 `local/tensorflow-19.02-py3`，當使用回原 TensorFlow 19.02 容器時，可手動將套件目錄再更名成`.local`，即可恢復使用原始安裝套件

```bash=
mv ~/.local ~/local/localbackup
//將系統目錄 /.local 的程式移動至 /localbackup

//或

rm -rf ~/.local  
//!!!!將直接清除套件!!!!請小心操作
```

```bash=
mv ~/local/tensorflow-19.02-py3 ~/.local
//把備份的套件目錄搬回 .local 預設套件安裝路徑
```
