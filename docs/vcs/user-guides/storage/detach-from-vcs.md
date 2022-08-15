---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-guide-detach-data-disk-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-guide-detach-data-disk-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 分離資料磁碟

若需刪除資料磁碟，或需與其他虛擬運算個體連結，需先將磁碟與已連結的虛擬運算個體分離才能進行。**分離前，請先將磁碟於個體中完成卸載，以避免分離失敗。**

:::caution
分離後，資料磁碟將會持續計費，刪除後才會停止計費。
:::

<br/>


## Step 1. 卸載磁碟

Linux、Windows 卸載磁碟方式不同，請依據 OS 選擇操作步驟。


<Tabs>

<TabItem value="Linux 個體" label="Linux 個體">

- [連結進入 Linux 虛擬運算個體](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-zh)，並使用以下指令來卸載 `/dev/vdb` 磁碟裝置。

``` 
sudo umount -d /dev/vdb
```

</TabItem>

<TabItem value="Windows 個體" label="Windows 個體">

- [連線進入 Windows 虛擬運算個體](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-windows-zh)，並在 <i class="fa fa-search" aria-hidden="true"></i> 搜尋「**電腦管理**」，開啟應用程式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4dcce52be28b3142c19ab11b731c8f37.png)

- (1) 點選「**磁碟管理**」 (2) 對需卸載的磁碟按滑鼠右鍵 (3) 點選「**離線**」即可卸載磁碟。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_663e1d9437c5e7622d644b46a4824761.png)

</TabItem>

</Tabs>

<br/>


## Step 2. 分離磁碟

卸載完成後，您可以透過以下方式分離磁碟。

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

- **方法一**：

    * 進入「**虛擬個體詳細資料**」頁，將頁面拉至最下方，按下「**分離磁碟**」，即可將此資料磁碟與所連接的個體分離。
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_01c132346ceae317a3e8030f7988e51f.png)

    * 進入資料磁碟管理頁，磁碟狀態由 **`IN-USE`** 轉為 **`AVAILABLE`** 後，即可執行刪除或連結至其他虛擬運算個體。
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_42fa93fc331006627f6111c6ff66addf.png)


- **方法二**：

    * 進入「**資料磁碟詳細資料**」頁，按下「**分離**」，即可將此資料磁碟與所連接的個體分離。

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96812d1834246d8aec869b5bd37baa8c.png)

    * 磁碟狀態由 **`IN-USE`** 轉為 **`AVAILABLE`** 後，即可執行刪除或連結至其他虛擬運算個體。
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_42fa93fc331006627f6111c6ff66addf.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (尚未支援)">

<br/>

</TabItem>

</Tabs>