---
sidebar_label: '服務概觀'
sidebar_position: 1
title: '服務概觀'
sync_original_production: 'https://man.twcc.ai/@twccdocs/cos-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/cos-overview-zh'
---


# 服務概觀 <img style={{width:35+'px', height:35+'px'}} src='https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a798c7edb1b5032ecf92265a3150a7ec.png' />

TWCC 雲端物件儲存服務提供與 Amazon S3 相容之物件儲存 (Object Storage) 系統。使用者可從本機將檔案上傳至 TWCC 雲端物件儲存系統內，支援加密上傳與下載，並可於容器服務內使用<sup>[1]</sup>，以利後續進行人工智慧運算使用。


雲端物件儲存空間區分兩種使用空間，符合多元的使用情境：
- **計畫公共空間**：資料為計畫間所有成員共用。
- **個人私有空間<sup>[2]</sup>**：資料為個別用戶專用。

除了可獨立做為穩定安全的資料儲存空間，您也可以利用此儲存服務做為 TWCC 虛擬運算服務、容器運算服務的資料備份系統，請參考[資料備份](https://man.twcc.ai/@twccdocs/cosbackup-zh)了解操作方式。


:::info
[1] TWCC 開發型容器存取雲端物件儲存體之資料，需透過 TWCC CLI 來操作。<div></div>
[2] 個人私有空間目前無法透過入口網站使用，僅能透過第三方軟體存取檔案。

<!-- - 一般檔案管理 (上傳/下載/Metadata搜尋/設定通知)，可直接透過 TWCC 入口網站操作，參見以下說明。 -->

:::