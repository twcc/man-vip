---
sidebar_label: '運算服務'
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/role-compute-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/role-compute-zh'
---


# TWCC 角色權限比較：運算服務

## 開發型容器

- 一般操作

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|檢視個人容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|檢視專案內所有容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Jupyter 存取個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|Jupyter 存取專案內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|SSH 存取個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|SSH 存取專案內所有容器|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|開啟/關閉 刪除保護機制 - 個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|開啟/關閉 刪除保護機制 - 專案內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|刪除個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|刪除專案內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|監控個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|監控專案內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|

- 容器複本

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|檢視個人容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視專案內所有容器複本|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|使用個人容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|使用專案內所有容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|


:::info
- 其他相關服務權限：
    - 高速檔案系統、雲端物件儲存角色權限請參考[此說明](storage.md)。
    - 容器連線安全角色權限請參考[此說明](networking-security.md)。
- TWCC CLI 可操控之功能之角色權限皆與使用者介面相同。
:::


## 任務型容器


| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視專案內所有容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|啟動/停止/刪除個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|啟動/停止/刪除專案內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|監控個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|監控專案內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|

## 虛擬運算服務

- 一般操作

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立虛擬運算個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人個體資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視專案內所有個體資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|存取個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取專案內所有個體|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|開啟/關閉 刪除保護機制 - 個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|開啟/關閉 刪除保護機制 - 專案內所有個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|啟動/停止/刪除個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|啟動/停止/刪除專案內所有個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|監控個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|監控專案內所有個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|檢視個人鑰匙對資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視專案內所有鑰匙對資訊|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除個人鑰匙對|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除專案內所有鑰匙對|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

- 映像檔

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|檢視個人映像檔資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視專案內所有映像檔資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|檢視來源專案所分享的映像檔資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|使用個人映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|使用專案內所有映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|使用來源專案所分享的映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|跨專案分享個人映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|跨專案分享專案內所有映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除個人映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除專案內所有映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除來源專案所分享的映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

:::info
- 其他相關服務權限：
    - 虛擬磁碟請參考[此說明](storage.md#虛擬磁碟服務)。
    - 虛擬網路、負載平衡、Auto Scaling、進階安全請參考[此說明](storage.md)。
- TWCC CLI 可操控之功能之角色權限皆與使用者介面相同。
:::

## HPC 高速運算任務

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立高速運算任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人任務資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視專案內所有任務資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|啟動/停止/刪除個人任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|啟動/停止/刪除專案內所有任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|監控個人任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|監控專案內所有任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


## 台灣杉二號 (命令列介面)

- 此服務無角色權限之區分。