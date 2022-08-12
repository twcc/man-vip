---
sidebar_position: 12
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-cli-ccs-automate-compute-delete-with-twccli-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-cli-ccs-automate-compute-delete-with-twccli-zh' 
---

# 使用 TWCC CLI 自動完成運算及刪除容器

這篇文章將幫助使用者了解如何運用 [TWCC CLI](https://man.twcc.ai/@twccdocs/doc-cli-main-zh) **自動化執行以下工作**：

```
1. 執行運算程式
2. 刪除容器
```

在入口網站或使用 TWCC CLI 建立[開發型容器](https://www.twcc.ai/doc?page=container)後，您可將手動執行的工作交由 script 自動化完成、刪除容器，降低容器持續開啟所需的成本。而運算程式與資料皆會保留在容器預設儲存空間 - [高速檔案系統 (HFS)](https://www.twcc.ai/doc?page=hfs)，無須擔心資料將隨容器刪除而消失。

<br/>


### Step 1. 將運算程式上傳至容器

參考[<ins>使用 SFTP + Filezilla 傳輸檔案</ins>](https://man.twcc.ai/@twccdocs/rypYCr_TN?type=view#%E4%BD%BF%E7%94%A8-SFTP--Filezilla-%E5%82%B3%E8%BC%B8%E6%AA%94%E6%A1%88)，將訓練程式上傳到容器預設儲存空間 - 高速檔案系統 (HFS) 空間。

<br/>


### Step 2. 安裝並登入 TWCC CLI

- 參考 [<ins>安裝 TWCC CLI</ins>](https://man.twcc.ai/@twccdocs/guide-cli-install-linux-zh)，在開發型容器內部署 TWCC CLI。

:::info
- 2021 版本++以後++之容器已為用戶預安裝 TWCC CLI，建立後可直接登入使用
- 2021 版本++以前++的容器映像檔版本需自行安裝
:::

- 安裝完成後請[登入](https://man.twcc.ai/@twccdocs/guide-cli-signin-zh)。

<br/>


### Step 3. 檢視開發型容器 ID
- 輸入以下指令，檢視現在使用的容器 ID：
```
twccli ls ccs
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9dbab117e8ee86d346497b2296382ed2.png)

<br/>


### Step 4. 撰寫自動化 Script

- 輸入以下指令編輯自動化 script：
```
vi auto.sh
```
- 輸入`i` 進入編輯模式，將以下範例 script 複製貼入 `auto.sh` 中。內容可依據您的運算程式修改。

```bash
TWCC_CLI_CMD=/home/<USERNAME>/.local/bin/twccli
# <USERNAME>：主機帳號

echo "1. 執行運算"
# 輸入運算程式的執行檔

echo "2. 刪除開發型容器"
TWCC_CLI_CMD rm ccs -f -s <CCS_ID>
# <CCS_ID>：Step 3 的容器 ID
```

- 按 <kbd>Esc</kbd> 鍵並輸入 `:wq!` 存檔。

<br/>


### Step 5. 執行自動化 Script

輸入以下指令，即可將程式運算、刪除容器的工作交由 script 處理！

```
bash auto.sh
```

<br/>

### Step 6. 確認容器已自動刪除

您可在程式執行完後，在**開發型容器管理頁**確認容器已從列表上刪除。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f73878fe713665b83fe7160e460ba57.png)