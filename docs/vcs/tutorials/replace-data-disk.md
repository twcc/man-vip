---
sidebar_position: 7
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-bss-replace-data-vol-zh' 
---

# 變更資料磁碟


若您需要更換使用的資料磁碟類型 (例：將 SSD 轉換為 HDD)，或需要變更資料磁碟容量 (例：由小容量擴充至較大容量)，請您參考此份文件，將原磁碟資料同步至新資料磁碟，再將原資料磁碟刪除。

本文將以轉換資料磁碟類型 (SSD 換為 HDD) 為例，說明操作步驟。

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />

<br/>


## Linux 個體

### Step 1. 確認個體資料磁碟類型

* 於使用者介面確認，個體所掛載的資料磁碟為 SSD 類型。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aeb3f0e8b3a1eb20766a08a88438eff2.png)

* 虛擬運算個體內輸入`df -h` 指令查看資料磁碟的資訊（檔案系統(Filesystem)、容量(Size)、掛載路徑(Mounted on)）

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eefbcb3221a84ab64e83b33e6b74f0bb.png)

<br/>

<br/>


### Step 2. 新建相同容量的 HDD 資料磁碟

* 使用者介面新增一個 HDD 資料磁碟，容量同 `Step 1.` 之 SSD 資料磁碟

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_89b884b3a1cffb2f832d84fe30376746.png)


* 將 HDD 資料磁碟連結至 `Step 1.` 的虛擬運算個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_17c6b3ceda5b35e94b4a44981d923e74.png)


* 確認個體已成功連結兩種類型的資料磁碟

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_654c8d6681f4f4da6ea193a320e6e1f3.png)


* 連線進入虛擬運算個體，將 HDD 資料磁碟掛載到 VM 上，並進行初始化，步驟可參考 [HowTo：初始化磁碟- Linux 個體](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh)。

<br/>


### Step 3. SSD資料磁碟資料同步至 HDD 資料磁碟

* 輸入`df -h` 確認兩種類型的資料磁碟的資訊（檔案系統(Filesystem)、容量(Size)、掛載路徑(Mounted on)）

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7563dd8d5bf73e816eead1f350fd0ce5.png)


* 切換成 root 身分。

```
sudo -i
```

* 使用 `rsync` 指令同步兩個資料磁碟的資料。

```
rsync -avh <Disk_A> <Disk_B>
```

:::info
- `<Disk_A>`：輸入 SSD 資料磁碟掛載路徑
- `<Disk_B>`：輸入 HDD 資料磁碟掛載路徑
:::

<br/>


### Step 4. 分離並刪除 SSD 資料磁碟

* 將 SSD 資料磁碟自虛擬運算個體分離。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f9e3237e52ebcf531015cbb2ab4d87c.png)


* 刪除 SSD 資料磁碟，回收儲存資源。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_717dfbe52ccb104d02c972299c0e83ab.png)

<br/>

<br/>


## Windows 個體

Windows 個體與 以上 Linux 個體的操作方式雷同，僅 `Step 2.` 初始化資料磁碟的方式與 `Step 3.` 同步資料的方式有些許差異：

<br/>


### Step 2. 新建相同容量的 HDD 資料磁碟

新建一 HDD 資料磁碟並將磁碟連結至虛擬運算個體後，初始化步驟請改參考 [HowTo：初始化磁碟- Windows 個體](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)。

<br/>


### Step 3. SSD 資料磁碟資料同步至 HDD 資料磁碟

* 初始化完成後，確認兩種類型的資料磁碟都已掛載成功。 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e1f878a79bd6c276509485dd1828f1ff.png)


* 複製 SSD 資料磁碟的資料並貼至 HDD 資料磁碟，即可完成資料同步。