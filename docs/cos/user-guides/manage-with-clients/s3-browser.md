---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-s3browser-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-s3browser-zh'
---

# S3 Browser

除使用網頁上傳或下載檔案，若需傳輸大型檔案，建議您透過常用的第三方軟體如 [S3 Browser](http://s3browser.com/) 或 [Cyberduck](https://cyberduck.io/) 來管理雲端物件儲存體的內容。


* S3 Browser 是一款簡單好用的 Amazon S3 Windows 客戶端程式，它提供了一個簡單的 Web 服務接口，可隨時從 Web 上的任何位置儲存和檢索資料。
* S3 Browser 免費版僅供非商業用途使用，詳情請參見 [S3 Browser 官網](http://s3browser.com/)。

## 連線雲端物件儲存

### 下載 S3 browser

進入 [S3 Browser 官網](http://s3browser.com/)，點擊「Download S3 Browser」下載並安裝 S3 Browser。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d02ac87a4e07204c391baf0257d4e85.png)

### 連線儲存空間

- 請參考[此文件](https://man.twcc.ai/@preview-twccdocs/guide-cos-connect-info-zh)取得連線資訊。
- 安裝好後打開 S3 Browser，設定 TWCC 雲端物件儲存體帳號的連線資訊，Account Type 必須選擇「S3 Compatible Storage」，再依照第三方軟體下載頁面提供的連線資訊，設定 REST Endpoint（cos.twcc.ai）、Access Key 及 Secret Key 即可。
　　
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b656bd68c28442741aeaa3b2760c0eeb.png)


## 儲存體、檔案管理

* 連線成功後即可看到 TWCC 雲端物件儲存系統上的儲存體內容，透過 S3 Browser 亦可建立新的儲存體。
* 在 S3 Browser 點選「**New Bucket**」，接著在 Create New Bucket 視窗輸入 欲建立的 TWCC 儲存體名稱，再按下「**Create new Bucket**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_07f90f276605abca62b538a6b76c42f4.png)

* 點選左側之儲存體 (Bucket)，即可上傳或下載檔案。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3efb2b8eefb6fb44125f06ca211de9d0.png)
