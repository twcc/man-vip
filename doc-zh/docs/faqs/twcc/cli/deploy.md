---
sidebar_position: 1
title: '部署環境'
slug: '/faqs/twcc/cli/deploy'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-cli-deploy-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-cli-deploy-zh'
---

# FAQs | TWCC CLI：部署環境

<details>

<summary> Q1. 請問 TWCC-CLI 怎麼安裝？</summary>

1. 請透過任何 Python 的套件管理程式進行安裝，指令為 `pip install -U TWCC-CLI`，或請參考 [TWCC-CLI v0.5](https://github.com/TW-NCHC/TWCC-CLI/tree/v0.5) 操作文件進行安裝及使用。
2. 如果是使用映像檔 Ubuntu 20.04 開啟的虛擬運算個體，已經預設將 TWCC-CLI 安裝完成，可以直接進行使用。

</details>


<details>

<summary> Q2. 請問 TWCC-CLI 支援的環境是？</summary>

[TWCC-CLI v0.5](https://github.com/TW-NCHC/TWCC-CLI/tree/v0.5) 是以 Python 語言為主的軟體工具，且經過 v2.7, v3.5, v3.6, v3.7 等環境測試。

</details>

<details>

<summary> Q3. Credential 錯誤該如何處理？</summary>

Credential 檔錯誤，請執行以下指令清除 Credential 檔，並再次「[進入 TWCC CLI 環境](https://man.twcc.ai/@twccdocs/guide-cli-signin-zh)」

```bash
rm -rf $HOME/.twcc_data
```

</details>

<details>

<summary> Q4. Python 版本錯誤該如何處理？</summary>

若出現 Python 版本錯誤：安裝 Python 3.6，但環境已經轉換到 Python 2.7。
 
請移除 TWCC-CLI，並重新安裝 TWCC-CLI：

```bash
pip uninstall TWCC-CLI
pip install TWCC-CLI
```

</details>


<details>

<summary>

 Q5. 出現 `'ascii' codec can't encode characters in position 610-612: ordinal not in range(128)`？

</summary>
此語言環境變數問題在更新 CLI 版本、或重新安裝 CLI 時容易出現，請輸入以下指令設定語言環境：

```bash
export LANG=C.UTF-8
```

</details>


<details>

<summary>

 Q6. 安裝後出現 `twccli: command not found`？

</summary>

- 若安裝成功後，出現此問題 (如下圖)：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3bd9eb685a4f792a41dd61b5e067ae5f.png)

- 請確認 TWCC-CLI 安裝路徑，並設定 $PATH 路徑環境變數

```bash
sudo find / -name twccli
export PATH=路徑:$PATH
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_55b9287571e87ba62614291ad432d93c.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47e4050c06b225b87e77c370f89bc7f1.png)

</details>