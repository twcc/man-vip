---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-access-interface-mngmnt-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-access-interface-mngmnt-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 熱儲存區檔案存取介面

雲端檔案服務的熱儲存區資料，除了可透過 TWCC 入口網站存取之外，另外提供了 S3 及 SFTP 存取方式，便於下載或上傳多個或尺存較大的檔案。

* 點選左側「**存取介面管理**」，進入「**存取介面管理**」服務頁面後，點擊存取介面圖示可進入該服務的頁面。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_808aee16a814eae58c5fcc6411993c9b.png)

## S3

請先將資料集建立對應的儲存體名稱，以供 S3 protocol 存取，並下載連線軟 (例：S3 browser 或 Cyberduck) 體輸入連線資訊，即可存取資料集。

### 建立 S3 存取資料集

* 點擊 S3 存取設定下方的「**＋建立**」，輸入 S3 的儲存體名稱並選取對應的資料集，再點選「**確定**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d3bc978b54189c5055d0f88a13a5a266.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_54a80d4d5ad2e44f02a8a3705882cee5.png)

### 取得 S3 服務連線資訊
* 點選「**S3 服務**」，進入「**S3 服務**」頁面後，可取得連線資訊，包括服務端點 (使用 SSL 連線) : **`cfss3.twcc.ai`**、Signature Version、Access Key 及 Secret Key。
* 點擊「**建立金鑰**」可產生一組 Access Key 及 Secret Key。金鑰建立後，點擊「**更新金鑰**」可重新產生金鑰。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cf2eec69af0e5af151afbaad5259faa3.png)

  


### 使用第三方軟體連線

* 如同 TWCC 雲端物件儲存（COS），您亦可透過常用的第三方軟體如 [S3 Browser](http://s3browser.com/) 或 [Cyberduck](https://cyberduck.io/) 來管理雲端檔案服務（CFS）的儲存內容。
* 以 S3 Browser 為例，連線資料設定如下：

![](https://i.imgur.com/eZJGnXL.png)


<!-- ![](https://i.imgur.com/1F3CEwE.png) -->

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04937356a53118f5d64fd682b91d85b5.png)


   
* 連線成功後即可看到 TWCC 雲端檔案服務上的所建立的儲存體。

### 删除 S3 存取資料集

* 若不需使用 S3 存取資料集，請在 S3 存取設定下方的儲存體列表，勾選欲删除的儲存體名稱後點擊列表上方的「**删除**」按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dbcbc1c13c1c1b622fe588585b00c7bb.png)


## SFTP

雲端檔案服務亦提供 SFTP 存取介面，您可以使用 SFTP 客戶端軟體 (如：FileZilla) 存取雲端檔案服務之儲存內容。

* 點選「**SFTP 服務**」，進入「**SFTP 服務**」頁面，可以看到 SFTP 服務的連線資訊，包括 SFTP 服務主機位址：**`sftp://cfs.twcc.ai`**、連接埠等資訊。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a7b1b278f81463e99cf16451fbeb1d23.png)


* 開啟第三方 SFTP 軟體，例如：FileZilla，設定連線資訊即可登入。 
    - 主機：cfs.twcc.ai
  	- 使用者名稱：您的主機帳號 
	- 使用者密碼：您的主機密碼
    - 連接埠：22  

:::info
若忘記**主機帳號**或**主機密碼**，請參考：[<ins>查詢主機帳密與 OTP 認證碼</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh)。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1f63040fedd3e99613ad7da2f3667230.png)

* 成功登入後便會顯示雲端檔案服務上的檔案，即可進行檔案傳輸與存取（預設第一層資料夾名稱為計畫 ID）。
* 若您的檔案儲存於冷儲存區，則檔名尾端會以 `.COLDDATA` 文字呈現，存放於冷儲存區的檔案無法於 SFTP 軟體直接下載、搬移、複製、刪除，請於 TWCC 網站上執行搬移異動。
