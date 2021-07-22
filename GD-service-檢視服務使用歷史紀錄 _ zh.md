---
title: 檢視服務使用歷史紀錄 | zh
tags:
GA:
---


# 檢視服務使用歷史紀錄

您於 TWCC 使用者網站、TWCC CLI 使用的服務功能，皆是透過呼叫 TWCC API 以完成各項作業，而服務操作的歷史紀錄可透過 TWCC 使用者網站檢視。

您可以從歷史記錄判斷：

- 啟動作業的成員^[1]^
- 啟動作業的方法 (`GET`/`PUT`/`PATCH`/`POST`/`DELETE`)^[2]^
- 對哪些服務進行操作
- 作業的狀態
- 作業回應時間
- 作業啟動時間

:::info
{%hackmd docsharedstyle/note-zh %}

[1] **`租戶使用者`** 僅能查詢自己的使用紀錄；**`租戶管理員`** 則可以檢視所有成員的紀錄。
[2] TWCC API 對服務操作的動作分為以下 5 類 ([<ins>深入了解 RESTful API 資訊</ins>](https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2))：
- `GET`：取得服務資訊
- `PUT`：更新服務整體資訊
- `PATCH`：更新服務部份資訊
- `POST`：建立服務
- `DELETE`：刪除服務

:::


## 如何檢視使用紀錄？

### Step 1. 進入「使用紀錄」頁面

登入 TWCC 使用者網站後，點選「**使用者名稱**」> 「**使用紀錄**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_645207cc9ccf3e11a9fe98183549b3a6.png)

### Step 2. 選擇計畫成員 (租戶使用者可略)

若您為租戶管理員，請先選擇本人的名稱，或欲檢視紀錄的成員名稱。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96e7fb16ab8f6b92582ea3f752063e91.png)

### Step 3. 檢視使用紀錄

API 使用歷史紀錄種類與項目繁多，以下舉兩項紀錄範例說明，更多使用紀錄詳細說明，請您查詢：[TWCC API Document](https://man.twcc.ai/@twccdocs/api-main-zh)。




