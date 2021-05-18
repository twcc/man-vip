---
title : role-storage | en
tags: Guide, role, EN
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/eng-working-en %}

<style>
.fa-times{color:#ADADAD; font-size:25px}
.fa-check{color:#27a5bd; font-size:25px}
</style>


# TWCC 角色權限比較：儲存服務 

## 高速檔案系統

- 存取方式：透過資料傳輸節點 (xdata1.twcc.ai) 或登入節點 (ln01.twcc.ai) 

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|存取個人空間資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取計畫所有使用者之空間資料|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


- 存取方式：透過開發型容器 (Jupyter Notebook)

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|存取個人空間資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取計畫所有使用者之空間資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **重要：**
同一計畫下租戶管理員可透過 Jupyter Notebook 存取所有租戶使用者的資料，租戶使用者若跨計畫，應自行處理不同計畫下的資料權限。
:::

- 存取方式：透過開發型容器 (SSH)

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|存取個人空間資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取計畫所有使用者之空間資料|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


## 雲端物件儲存

- 公共空間

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立儲存體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人儲存體與資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫所有儲存體與資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取個人儲存體資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取計畫所有使用者之儲存體資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除個人儲存體資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫所有使用者之儲存體資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>

- 私人空間

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立儲存體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人儲存體與資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫所有儲存體與資料|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|存取個人儲存體資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|存取計畫所有使用者之儲存體資料|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除個人儲存體資料|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫所有使用者之儲存體資料|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**
TWCC CLI 可操控之服務 (雲端物件儲存) 角色權限皆與使用者介面相同。
:::

## 虛擬磁碟服務

- 一般操作 

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立資料磁碟|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人資料磁碟資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有資料磁碟資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除個人資料磁碟|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫內所有資料磁碟|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|將個人資料磁碟連結至個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|將個人資料磁碟連結至其它成員個體|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|將其它成員資料磁碟連結至個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|將其它成員資料磁碟連結至其它成員之個體|<i class="fa fa-times" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


- 資料磁碟快照

| 功能 | 租戶管理員 | 租戶使用者 |
| -------- | -------- | -------- |
|建立個人資料磁碟快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|建立非個人資料磁碟快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視個人資料磁碟快照資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|檢視計畫內所有資料磁碟快照資訊|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|刪除個人資料磁碟快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|刪除計畫內所有資料磁碟快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|使用個人資料磁碟快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-check" aria-hidden="true"></i>
|使用計畫內所有資料磁碟快照|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>

