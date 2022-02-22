---
title: TWCC 下載 VCS 映像檔 (測試階段) | zh
tags: Test, VCS
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/alpha-testing-zh %}

# TWCC 下載 VCS 映像檔 (測試階段)

虛擬運算個體映像檔下載功能除了可將 TWCC 製作完成的映像檔下載至本地端，也適用**轉移映像檔至其他的計畫**使用。

將映像檔下載至目標計畫的雲端物件儲存空間 (COS) 內後，如要使用映像檔建立 VCS 個體，請先洽詢客服人員為您開通服務，並再製作映像檔後才可以建立，操作方式請您參考 [TWCC 上傳 VCS 客製化映像檔 (測試階段)](https://man.twcc.ai/@twccdocs/vcs-customimage-entry)。

## 準備工作

請先將欲下載映像檔之虛擬運算個體，建立[映像檔](https://man.twcc.ai/@twccdocs/r1DhqHdpN?type=view#%E6%98%A0%E5%83%8F%E6%AA%94)。

## 下載方式

由於虛擬運算個體映像檔下載功能仍為測試階段，需請您透過 [TWCC VCS 映像檔下載申請表單](https://docs.google.com/forms/d/e/1FAIpQLSdzsAh08RWpfeAQPKrBCBD9GyooLl11YvARpoPSYVyH0zE4Sg/viewform)申請下載，提供相關資料，TWCC 維運團隊將協助您將映像檔下載至指定的雲端物件儲存空間。

- 表單項目說明：
  - **映像檔 ID**：虛擬運算個體映像檔 ID
  ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9fca3599bbd0c8c1c37b27237fb7fa46.png)
  - **個人 API 金鑰**：您的 API 金鑰
      ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1e4d90058e58c3f24c9274dbcf1e90fb.png)
  - **TWCC COS Access Key、TWCC COS Secret Key**：於目標計畫 (如目的僅為下載映像檔，則選擇原計畫即可) 的雲端物件儲存內取得 (選擇公共或私有雲端物件儲存空間皆可)
  ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c6c7195c00ad35da82a9672454df211a.png)
  - **映像檔來源計畫代碼**：原計畫代碼
  ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_778e194d5414db0c5e442bb50102abb0.png)
  - **Bucket 名稱**：指定用來存放映像檔的 COS bucket 名稱
  ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f0ef27fe9e72be5bbfb8bf6ac1696545.png)
  - **存放路徑**：可不填寫，預設存放於 bucket 內的 `images/` 路徑之下
  ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d2a65c3c7ce4b4bee1f55af3e006405.png)