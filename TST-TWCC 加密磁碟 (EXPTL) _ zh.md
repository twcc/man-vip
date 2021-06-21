---
tags: Test, TW
title: TWCC 加密磁碟 (EXPTL) | zh
---

{%hackmd /@docsharedstyle/exptl-testing-zh %}

# TWCC 加密磁碟 (`EXPTL`)

TWCC 加密磁碟可保護用戶資料安全，以符合組織所需的安全性和合規性承諾。使用方式與一般磁碟相同，系統將自動以 AES-256 演算法加密磁碟資料，僅加密過程將可能略為影響資料存取效率。

使用 TWCC 加密磁碟可保護您以下資料的安全：

1. 儲存於磁碟內的資料
2. 磁碟與虛擬運算個體之間傳輸的資料
3. 以磁碟建立的備份快照
4. 以該快照建立的磁碟

## 如何使用？

### 建立加密磁碟

- 您可以在建立虛擬運算個體時，於儲存頁建立加密資料磁碟，可選擇 HDD 加密，或 SSD 加密磁碟，並設定磁碟容量。

:point_right: 截圖
  
- 或是於虛擬磁碟管理頁建立加密磁碟，再將磁碟連結至虛擬運算個體。

:point_right: 截圖

:::info
建立完成，參考下方文件將磁碟初始化後即可使用：
- [<ins>HowTo：初始化磁碟- Linux</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-bss-init-vol-linux-zh)
- [<ins>HowTo：初始化磁碟- Windows</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-bss-init-vol-windows-zh)
:::

### 將舊磁碟資料搬移至加密磁碟

若您想將無加密磁碟升級為安全性較高的加密磁碟，請參考 [變更資料磁碟](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-bss-replace-data-vol-zh) ，在建立並連結加密磁碟後，將您的資料搬移至新磁碟，再刪除舊磁碟即可完成更換。

:::danger

{%hackmd @docsharedstyle/important-zh %}

與一般磁碟不同，**加密磁碟僅能以建立者本人的身份刪除**，非本人刪除 (例：租戶管理者) 將導致刪除錯誤。

:::