---
sidebar_position: 6
sidebar_label: '建立加密資料磁碟'
slug: '/user-guides/twcc/vcs/vds/create-encrypted-data-disks'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vds-encryption-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vds-encryption-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 資料磁碟加密

TWCC 虛擬磁碟加密可保護用戶資料安全，以符合組織所需的安全性和合規性承諾。使用方式與一般磁碟相同，系統將自動以[進階加密標準 (AES-256) 演算法](https://zh.wikipedia.org/wiki/%E9%AB%98%E7%BA%A7%E5%8A%A0%E5%AF%86%E6%A0%87%E5%87%86)加密磁碟的資料，僅加密過程將可能略為影響資料存取效率。

使用 TWCC 虛擬磁碟加密可保護您以下資料的安全：

1. 儲存於磁碟內的資料
2. 磁碟與虛擬運算個體之間傳輸的資料
3. 以磁碟建立的備份快照
4. 以該快照建立的磁碟

<br/>

## 如何使用？

### 建立加密磁碟

- 您可以在[建立虛擬運算個體](../create/create-instances.md)時，於儲存頁建立加密資料磁碟，可選擇 HDD 加密，或 SSD 加密磁碟，並設定磁碟容量。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cf9fc17017c6637a459907a36a787297.png)
  
- 或是於虛擬磁碟管理頁建立加密磁碟，再將磁碟[連結至虛擬運算個體](./view-attach-delete-disks.md#連結至虛擬運算個體)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_71e884dbfb16fc5c694c477d0847b305.png)


:::info
建立完成，參考下方文件將磁碟初始化後即可使用：
- [<ins>初始化磁碟- Linux</ins>](../../tutorials/data-disk-init-linux.md)
- [<ins>初始化磁碟- Windows</ins>](../../tutorials/data-disk-init-windows.md)
:::

<br/>

### 將舊磁碟資料搬移至加密磁碟

若您想將無加密磁碟升級為安全性較高的加密磁碟，請參考[變更資料磁碟](../../tutorials/replace-data-disk.md)，在建立並連結加密磁碟後，將您的資料搬移至新磁碟，再刪除舊磁碟即可完成更換。

<br/>

### 磁碟快照

很抱歉，加密磁碟[快照](./disk-snapshots.md)功能目前不開放使用，待用戶體驗完整優化後將再行開放。

<br/>


:::info
若需防止虛擬運算個體受攻擊時影響磁碟資料，請參考[<ins>磁碟加密 (以 CentOS 為例)</ins>](https://drive.google.com/file/d/1A6gdyL0lUMauygwM9cLtgU8GwbRpK36s/view)，從 OS 層設定磁碟加密，雙重保護您的檔案安全。
:::