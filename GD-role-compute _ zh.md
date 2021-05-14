---
title : role-compute | zh
tags: Guide, role, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

<style>
.fa-times{color:#ADADAD; font-size:25px}
.fa-check{color:#27a5bd; font-size:25px}
</style>

# TWCC 角色權限比較：運算服務 

## 開發型容器

- 一般操作

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|Jupyter 存取個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|Jupyter 存取計畫內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|SSH 存取個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|SSH 存取計畫內所有容器|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|刪除個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|監控個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|監控計畫內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|

- 容器複本

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|
|檢視個人容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有容器複本|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|使用個人容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|使用計畫內所有容器複本|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>|


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
- 其他相關服務權限：
    - 高速檔案系統、雲端物件儲存角色權限請參考[<ins>此說明</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-zh)。
    - 容器連線安全角色權限請參考[<ins>此說明</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-zh#%E5%AE%B9%E5%99%A8%E9%80%A3%E7%B7%9A%E5%AE%89%E5%85%A8)。
- TWCC CLI 可操控之功能之角色權限皆與使用者介面相同。
:::


## 任務型容器


| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有容器資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|啟動/停止/刪除個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|啟動/停止/刪除計畫內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|
|監控個人容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|監控計畫內所有容器|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>|

## 虛擬運算服務

- 一般操作

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立虛擬運算個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人個體資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有個體資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|存取個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取計畫內所有個體|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|啟動/停止/刪除個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|啟動/停止/刪除計畫內所有個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|監控個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|監控計畫內所有個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|檢視個人鑰匙對資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有鑰匙對資訊|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除個人鑰匙對|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫內所有鑰匙對|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

- 快照

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|檢視個人快照資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有快照資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|使用個人快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|使用計畫內所有快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除個人快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫內所有快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

- 客製化映像檔

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|上傳客製化映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人客製化映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有客製化映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|使用個人上傳之客製化映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|使用計畫內所有所有客製化映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除個人客製化映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫內所有所有客製化映像檔|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
- 其他相關服務權限：
    - 區塊儲存請參考[<ins>此說明</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-zh#%E5%8D%80%E5%A1%8A%E5%84%B2%E5%AD%98%E6%9C%8D%E5%8B%99)。
    - 虛擬網路、VPN、負載平衡、Auto Scaling、進階安全請參考[<ins>此說明</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-zh)。
- TWCC CLI 可操控之功能之角色權限皆與使用者介面相同。
:::

## HPC 高速運算任務

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立高速運算任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人任務資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有任務資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|啟動/停止/刪除個人任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|啟動/停止/刪除計畫內所有任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|監控個人任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|監控計畫內所有任務|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


## 台灣杉二號 (命令列介面)

- 此服務無角色權限之區分。

