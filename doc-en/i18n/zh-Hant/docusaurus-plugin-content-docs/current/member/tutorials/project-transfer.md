---
sidebar_label: '新舊專案轉移'
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-project-data-transfer-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-project-data-transfer-zh' 
---


# 新舊專案轉移

若您申請了新專案並希望可沿用舊專案之資料，可參考本文的說明，透過**雲端物件儲存服務 (Cloud Object Storage, COS)** 轉移您的資料。


**資料轉移順序：舊專案 COS** <i class="fa fa-forward" aria-hidden="true"></i> 下載至**本機端** <i class="fa fa-forward" aria-hidden="true"></i> 上傳至**新專案 COS**


請依您的本地端作業系統參考[本地端為 Windows 環境](#本地端為-Windows-環境) 或 [本地端為 Linux 環境](#本地端為-Linux-環境)。

:::info
因高速檔案系統 (HFS) 是依附於個人帳號，非依附於專案，因此此儲存空間之資料無需轉移，於新專案仍可存取使用。
:::


## 本地端為 Windows 環境

### Step 1. 將舊專案之資料備份至 COS

虛擬運算服務用戶可參考[此文件](../../cos/tutorials/backup-synchronize-restore)，先將舊專案虛擬運算個體的資料備份至 COS。

:::info
因容器運算服務、台灣杉二號之計算資源使用的預設儲存系統為高速檔案系統 (HFS)，個人資料可跨專案使用，因此可略過此步驟。
:::

### Step 2. 將新舊專案 COS 連結至本機 S3 Browser

備份完成後，請在本地端下載 S3 browser，並連結您的新、舊專案的 COS。
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cc9c3993933db51234e51b0cc5e75e25.png)


### Step 3. 將舊專案資料下載至本機端

S3 browser 不支援直接移轉資料，因此請選取您需轉移的檔案，並下載至本地端

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d41a89373a36a2eba08bd874ee1fa6b1.png)



### Step 4. 資料上傳至新專案

- 將本地端 S3 browser 切換至新專案帳戶

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe577644e4b84612e23f54dd6c283968.png)


- 再將本地端檔案上傳至新專案 COS 後，就成功將資料轉移至新專案囉！

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e12c4399174d32bbe619eae62431d9dd.png)


    
## 本地端為 Linux 環境

### Step 1. 將舊專案之資料備份至 COS

虛擬運算服務用戶可參考[此文件](../../cos/tutorials/backup-synchronize-restore)，先將舊專案虛擬運算個體的資料備份至 COS。

:::info
因容器運算服務、台灣杉二號之計算資源使用的預設儲存系統為高速檔案系統 (HFS)，個人資料可跨專案使用，因此可略過此步驟。
:::

### Step 2. 將舊專案 COS 連結至本機端

請參考[此文件](../../cos/tutorials/backup-synchronize-restore.md#安裝與設定-s3cmd)安裝 s3cmd，輸入**舊專案資料 (Access Key、Secret Key)**，透過 s3cmd 將本機端連結舊專案 COS。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9dd90a6105018eecaa8f3e6f2d4f0fc.png)

    
### Step 3. 將舊專案資料下載至本機端

輸入以下指令，將舊專案 COS 檔案下載至本機端

```bash
s3cmd get --recursive s3://<BUCKET_NAME>/<FOLDER_NAME or FILE_NAME> <LOCAL_DIR>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_753677494251c17c870f9b816d6ec86e.png)


### Step 4. 將新專案 COS 連結至本機端

重新輸入 `s3cmd --configure` 指令，輸入資訊，連結新專案的 COS

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9dd90a6105018eecaa8f3e6f2d4f0fc.png)

### Step 5. 資料上傳至新專案

再將本地端檔案上傳至新專案 COS 後，就成功將資料轉移至新專案囉！

```bash
s3cmd put  --recursive <LOCAL_FILE_NAME> s3://<BUCKET_NAME>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_20989598f5d1c34d52fce285a7c766cc.png)