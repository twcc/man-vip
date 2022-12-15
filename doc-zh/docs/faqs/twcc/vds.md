---
sidebar_position: 7
title: '虛擬磁碟服務 (VDS)'
sidebar_label: '虛擬磁碟服務'
slug: '/faqs/twcc/vcs/vds'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-bss-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-bss-zh'
---

# FAQs | 虛擬磁碟服務 (VDS)

<details>

<summary> Q1. 為何保留的 HDD 無法成功掛載到新的虛擬運算服務個體上？</summary>

1. 掛載 HDD 至虛擬運算服務個體前，請先確認其狀態為 **`AVAILABLE`**，才可以掛載至新的個體。
2. 如非此狀態請先將 HDD 與原本的個體分離，或是將原先的個體刪除，確認狀態為 **`AVAILABLE`** 後，再進行掛載。

若上述情況確認後，仍無法掛載，請洽技術支援服務：isupport@twcc.ai。

</details>

<details>

<summary> Q2. 無法讀取新掛載的磁碟？</summary>

新掛載的磁碟，需完成初始化才能存取資料，初始化步驟請參考：
[HowTo：初始化磁碟- Linux 個體](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh
) 或 [HowTo：初始化磁碟- Windows](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)。

</details>

<details>

<summary> Q3. 如何上傳及下載檔案？</summary>

將磁碟掛載至虛擬運算個體後，[使用 MobaXterm 連線個體](/docs/user-guides/twcc/vcs/connect-to-linux-instance-from-windows)，並完成磁碟初始化，於 MobaXterm 頁面左側處選取 「**Sftp**」 圖示，即可檢視、上傳與下載檔案。

</details>

<details>

<summary> Q4. 我想要將舊有的資料碟換成新的資料碟，請問要如何操作？</summary>

詳細操作方式請參考[此文件](https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-zh)，可變更磁碟類型、容量，並透過同步方式將舊磁碟資料保存至新磁碟。

</details>

<details>

<summary> Q5. 為何我的資料碟刪不掉？</summary>

1. 刪除前請先檢查該資料碟是否已經與虛擬運算個體分離，並確認狀態為 **`AVAILABLE`**，再進行刪除。
2. 若有對資料碟製作快照，您必須先將資料碟的快照刪除，再對該資料碟進行刪除。

若上述情況確認後，仍無法刪除，請洽技術支援服務： isupport@twcc.ai。

</details>

<details>

<summary> Q6. 為什麼已經將計畫中虛擬磁碟全部刪除卻還是持續出現用量計費？</summary>

虛擬磁碟計費項目除了資料磁碟，亦包含虛擬運算個體映像檔。請檢查您是否有建立虛擬運算個體映像檔，若無需使用建議刪除以停止計費。

</details>

<details>

<summary> Q7. 虛擬磁碟為什麼無法掛載至虛擬運算個體？</summary>

請留意您所要掛載的虛擬運算個體狀態是否是在```Stopped```的情況，虛擬磁碟無法與```Stopped```狀態的虛擬運算個體進行連結。

</details>
