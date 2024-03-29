---
sidebar_position: 9
title: '雲端檔案服務 (CFS)'
sidebar_label: '雲端檔案服務'
slug: '/faqs/twcc/cfs'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-cfs-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-cfs-zh'
---

# FAQs | 雲端檔案服務 (CFS)

<details>

<summary> Q1. 上傳新版本的檔案，原先置放於冷儲存區的檔案卻轉移到熱儲存區？</summary>

檔案版本管理功能，於上傳新版本後，原檔案會成為舊版本並置於原儲存區不會被搬移。在資料夾檔案列表所顯示為最新版本的檔案，舊版本可於該檔案右側目錄點擊「版本紀錄」查看。

</details>

<details>

<summary> Q2. 為何無法從會員中心的資源用量紀錄中查詢CFS的用量資訊？</summary>

CFS 用量只有專案管理員或建立者才有權限查看用量紀錄，若您的帳號權限為使用者，將無法查閱資源用量，可請該專案的管理員協助查詢或是提升您的權限。

</details>

<details>

<summary> Q3. 資料夾內會有兩個相同檔名的檔案？</summary>

出現此情況的原因為前一次檔案上傳尚未完成，即上傳相同檔名的檔案。因此未完成上傳的檔案無版本資訊，而再次上傳的檔案會被視作新檔案。建議利用網頁上傳新版本檔案時，先確認清單內已有該檔案再上傳。如果是使用 API，請勿連續上傳相同檔名的檔案到同一個資料夾內。

</details>
