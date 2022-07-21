---
sidebar_label: '儲存服務'
sidebar_position: 2
---


# TWCC 角色權限比較：儲存服務

## 高速檔案系統

- 存取方式：透過資料傳輸節點 (<ins><a href = "xdata1.twcc.ai">xdata1.twcc.ai</a></ins>) 或登入節點 (<ins><a href = "ln01.twcc.ai">ln01.twcc.ai</a></ins>)

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
**重要：**
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
**附註：**
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
|將個人資料磁碟連結至其它成員個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|將其它成員資料磁碟連結至個人個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>
|將其它成員資料磁碟連結至其它成員之個體|<i class="fa fa-check" aria-hidden="true"></i>|<i class="fa fa-times" aria-hidden="true"></i>


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

## 雲端檔案服務

儲存權限類別：

- <i class="fa fa-eye" aria-hidden="true"></i> 檢視：僅能瀏覽、下載、搜尋檔案。
- <i class="fa fa-pencil-square-o" aria-hidden="true"></i> 編輯：除檢視權限，還可刪除、上傳檔案、新增資料夾、冷熱儲存搬移。
- <i class="fa fa-share-square-o" aria-hidden="true"></i> 分享：設定資料夾的分享對象與權限。


儲存階層與權限說明：

| 資料集 | 第一層資料夾 | 子資料夾 |
| -------- | -------- | -------- |
| 檔案若直接上傳至資料集，**計畫內所有成員** 皆可檢視與編輯檔案   | (1) 建立後僅 **計畫建立者**、**資料夾建立者** 擁有檢視、編輯、分享的權限 (2) 被分享檢視或編輯權限之成員，不具分享權限| 繼承第一層資料夾的權限設定     |