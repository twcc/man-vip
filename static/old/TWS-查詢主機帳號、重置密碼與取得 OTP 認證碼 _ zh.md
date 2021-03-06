---
title: 查詢主機帳號、重置密碼與取得 OTP 認證碼 | zh
tags: Guide, Service, ZH
GA: UA-155999456-1
---


<!-- nchc doc: https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh -->

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 查詢主機帳號、重置密碼與取得 OTP 認證碼

**主機帳號**與**主機密碼**為 SSH 連線登入容器、台灣杉二號 (命令列介面) 環境之必要資訊，若忘記帳號與密碼，請參考以下說明查詢或變更。

**OTP (One Time Password) 認證**碼則為登入台灣杉二號 (命令列介面) 環境之必要資訊，為一次性密碼，又稱為動態密碼，具高度安全性。30 秒更新一次，保障用戶存取安全性。查詢方式請參考以下說明。

## 查詢主機帳號


登入 [TWS 【會員中心】](https://login.twcc.ai/tws_service/index.php?lang_type=)後，請進入「**會員中心**」 > 「**會員資訊**」 > 「**主機帳號資訊**」頁面。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_58a128895fcc3a1b101da8cb0d2d8b75.png)



即可查詢您的主機帳號。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_06188cb991914077678b79f3b1d56653.png)



## 重置主機密碼

若忘記主機密碼，因系統無紀錄用戶之主機密碼，所以不提供查詢的功能，請您直接修改主機密碼，並將密碼妥善保存：
同[查詢主機帳號](#查詢主機帳號)之頁面，請至「**主機帳號資訊**」頁面，並點選「**修改主機密碼**」並按提示完成密碼修改。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2252ad16c81cc49a6c3c393802b70a66.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**
1. 主機帳號長度 8-12 個字元，限定小寫英數混合，首字英文。
2. 主機密碼長度至少需 12 字元，不可過於簡單
3. 主機密碼可為數字、英文字母(大小寫視為 2 種)、其他特殊字元等 4 種型式，至少須包含 3 種。
4. 當您修改並收到簡訊認證碼後，請務必於 10 分鐘內完成認證程序，超過 10分鐘後，確認碼將失效，若未收到簡訊，請按 「**重送簡訊**」若仍無法收到，需確認是否曾經向電信公司申請設定拒收企業簡訊，請再和電信公司申請改變設定。
5. 單一節點連續登入錯誤 5 次，將暫時鎖定主機帳號 3 分鐘，請改其他節點登入或等待三分鐘後再嘗試登入。 
:::


:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：**

TWCC 會員與主機密碼最長有效期限為 180 天。
當密碼即將到期前（期前七天、前三天，當天）會寄發密碼提醒通知，請用戶撥冗登入 [<ins>TWS 會員服務系統</ins>](https://tws.twcc.ai/)進行變更。
:::

## 取得 OTP 認證碼

有多種方式可取得 OTP 認證碼，以下提供 **[TWS 會員服務系統](https://tws.twcc.ai/)**、**電腦其他方式**、**手機和平板電腦**的取得方式。

### 1. 由 [<ins>TWS 會員服務系統</ins>](https://tws.twcc.ai/) 取得

**Step 1.** 同[查詢主機帳號](#查詢主機帳號)之頁面，請至「**主機帳號資訊**」頁面。
**Step 2.** 點擊「**顯示**」即可取得 OTP 認證碼

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3259b104075b152f7464d9e924654e52.png)


### 2. 由電腦其他方式取得 

:::spoiler **A. 瀏覽器擴充功能 (以 Google Chrome 為例)**
:::info
**Step 1.** 至[<ins>連結</ins>](https://github.com/Authenticator-Extension/Authenticator)下方點入 Authenticator 擴充功能頁面，並新增功能至 Chrome

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7079b98f2fed3eca9041aa2f09473f85.png)

**Step 2.** 開啟 「**Authenticator**」，點選右上角的編輯

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6932ad85d2dd16cfe17f5e8847d072e4.png)


**Step 3.** 點選掃描 QR 碼

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecafdb84ebc4f074c8fa91af5cd3b947.png)

**Step 4.** 使用虛線將 TWS 會員服務系統的 OTP QR code 框起來

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38c2b7c98b378f12f1f7dcb522effd62.png)


**Step 5.** 新增成功後，點開擴充程式便可取得 OTP 認證碼

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_839dc680daaaf76d7effa6a178903681.png)
:::

:::spoiler **B. WinAuth (Windows 用戶)**
:::info

**Step 1.** 下載 [WinAuth]( https://github.com/winauth/winauth )
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa4631f70d2ae7f7bc000eed41477c15.png)


**Step 2.** 解壓縮後，開啟、點選 **Add**、點選 Authenticator
  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66a64543d039a16610e73ec3de2b91c3.png)


**Step 3.** 建立帳戶

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_534bb292486158365c9e3308f2bd3480.png)


**Step 4.** 再點右鍵 **Auto Refresh**，讓 OTP 自動刷新即完成！

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b3555bbc286592bcbe1e0ea2cdfeb636.png)
:::

<br>

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 其他作業系統請參考[<ins>此網頁</ins>](https://alternativeto.net/software/winauth/)下載其他軟體。
:::


### 3. 由手機、平板電腦取得

**Step 1.** 至 Google Play 商店/ App Store 搜尋並下載、安裝 「**Microsoft Authenticator**」 應用程式

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4e17126ed97b4b52106e6e65b665acc4.png)


**Step 2.** 安裝完打開應用程式，掃描 [TWS 會員服務系統](https://tws.twcc.ai/) 「**點我複製 OTP 金鑰**」上的 QR code，應用程式即能查詢 OTP 認證碼。
  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_41e14e47dda849f93df3d4af53766d94.png)



:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 除了 Microsoft Authenticator，其他應用程式可參考[<ins>此網頁</ins>](https://alternativeto.net/software/microsoft-authenticator/)。
:::
 
 
{%hackmd @docsharedstyle/contact-tws-zh %}