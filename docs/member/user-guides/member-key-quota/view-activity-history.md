---
sidebar_position: 8
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-service-user-activity-history-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-service-user-activity-history-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 檢視服務使用歷史紀錄

您於 TWCC 使用者網站、TWCC CLI 使用的服務功能，皆是透過呼叫 TWCC API 以完成各項作業，而服務操作的歷史紀錄可透過 [TWCC 使用者網站檢視](#如何檢視使用紀錄)，並[下載紀錄檔案](#下載使用紀錄)。

您可以從歷史記錄判斷：

- 啟動作業的成員<sup>[1]</sup>
- 啟動作業的方法 (`GET`/`PUT`/`PATCH`/`POST`/`DELETE`)<sup>[2]</sup>
- 對哪些服務進行操作
- 作業的狀態
- 作業回應時間
- 作業啟動時間

:::info

[1] **`租戶使用者`** 僅能查詢自己的使用紀錄；**`租戶管理員`** 則可以檢視所有成員的紀錄。

[2] TWCC API 對服務操作的動作分為以下 5 類 ([<ins>深入了解 RESTful API </ins>](https://zh.wikipedia.org/wiki/%E8%A1%A8%E7%8E%B0%E5%B1%82%E7%8A%B6%E6%80%81%E8%BD%AC%E6%8D%A2))：
- `GET`：取得服務資訊
- `PUT`：更新服務整體資訊
- `PATCH`：更新服務部份資訊
- `POST`：建立服務
- `DELETE`：刪除服務

:::

<br/>


## 如何檢視使用紀錄？

### Step 1. 進入「使用紀錄」頁面

登入 TWCC 使用者網站後，點選「**使用者名稱**」> 「**使用紀錄**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_645207cc9ccf3e11a9fe98183549b3a6.png)

<br/>

### Step 2. 選擇計畫成員 (租戶使用者可略)

若您為租戶管理員，請先選擇本人的名稱，或欲檢視紀錄的成員名稱。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96e7fb16ab8f6b92582ea3f752063e91.png)

<br/>

### Step 3. 檢視使用紀錄

API 使用歷史紀錄除 TWCC 服務使用活動，亦包含計畫、額度等紀錄，種類與項目繁多，以下舉 2 項紀錄範例說明，更多使用紀錄說明，請您查詢：**[TWCC API Document](/docs/api/CCS)**。

<details>

<summary><b>範例1 - 容器運算服務</b></summary>

- 使用紀錄：如下表
- 紀錄說明：使用者於 `2021/07/21 14:45` 提出 **建立** (`POST`) **容器** (`k8s-taichung-default/sites`) 的請求，API 回應接收作業時間為 `0.746` 秒，請求成功 (`201`)，系統即將開始建立容器作業。

| 方法 | 路徑 | 狀態碼 |回應時間 (秒) |請求時間 |
| -------- | -------- | -------- |-------- |-------- |
| POST    | http://apigateway.twcc.ai:8000/api/v2/k8s-taichung-default/sites/     | 201     |0.746     |2021-07-21 14:45    |

</details>

<div style={{'height':'8px'}}></div>

<details>

<summary><b>範例2 - 虛擬運算服務</b></summary>

- 使用紀錄：如下表
- 紀錄說明：使用者於 `2021/07/21 22:20` 提出 **刪除** (`DELETE`) **虛擬運算個體 (ID: 1986546)** (`openstack-taichung-default-2/sites/1986546`) 的請求，API 回應接收作業時間為 `0.263` 秒，請求成功 (`200`)，系統即將開始刪除個體作業。

| 方法 | 路徑 | 狀態碼 |回應時間 (秒) |請求時間 |
| -------- | -------- | -------- |-------- |-------- |
| DELETE    | 	http://apigateway.twcc.ai:8000/api/v3/openstack-taichung-default-2/sites/1986546/     | 200     |0.263     |2021-07-21 22:20    |

</details>

<br/>


## 下載使用紀錄

TWCC 使用者網站一次最多可呈現最新的 1000 筆資料，舊資料將無法再檢視。您可以點選「**輸出報表**」即時留存紀錄。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5b367455ed76e27b9349159ab21f8f2e.png)

<br/>

:::tip

因編碼問題，報表下載後，直接點選檔案以 Excel 開啟將會呈現亂碼。

請先開啟 `Excel` 軟體> 點選「**資料**」 >「**從文字/CSV**」 匯入使用紀錄檔案 > 檔案原點選擇 「**65001:Unicode (UTF-8)**」> 載入後即可正常檢視。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_53e0296e819d45e4da8b39c60d17c44c.png)

:::
