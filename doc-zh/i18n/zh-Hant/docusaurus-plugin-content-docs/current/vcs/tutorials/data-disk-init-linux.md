---
sidebar_position: 5
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-bss-init-vol-linux-zh' 
---

# 初始化磁碟- Linux


建立虛擬運算個體後，如果需要增加存取容量空間，在虛擬磁碟服務建立新的資料磁碟後，連結到目標虛擬運算個體上，接著不論是 Windows 或是 Linux 作業系統，都需要先進行初始化磁碟的步驟，虛擬運算個體才會偵測到您所掛載的儲存空間，才能進一步儲存資料。

以下說明如何將您的新資料磁碟初始化。

<br/>


### Step 1. 確認磁碟已連結至個體

[將資料磁碟連結至虛擬運算個體](../user-guides/storage/view-attach-delete-disks.md#連結至虛擬運算個體)後，請確認在使用者介面已正確連結，並取得掛載路徑 (例：`/dev/vdb`)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fa75bdb78bc52059698a1e40d540a0da.png)

[連線](../user-guides/connecting/linux/from-windows.md)進入您的虛擬運算個體，輸入以下指令再次確認磁碟已連結至個體，並查看磁碟詳細資料，確認路徑和容量大小正確。

```
sudo fdisk -l
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7b5f531fee70ec8c47ecedb5d9891798.png)

<br/>

<br/>


### Step 2. 將磁碟格式化

輸入以下格式化指令，建立虛擬運算個體可使用的檔案系統。

```
sudo mkfs -t ext4 <DISK_DEVICE>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a9c1acc4676602937a5e9860d24f8e9.png)


:::info
- `<DISK_DEVICE>`：磁碟裝置 (例：`/dev/vdb`)
:::

<br/>


### Step 3. 掛載磁碟

創建磁碟所需掛載的資料夾。

```
sudo mkdir <DIRECTORY>
```

:::info
- `<DIRECTORY>`：資料夾路徑 (例：`/home/test`)
:::

將磁碟掛載至資料夾。

```
sudo mount <DISK_DEVICE> <DIRECTORY>
```

<br/>


### Step 4. 確認掛載狀況

接著使用以下指令查看磁碟是否已經成功掛載至資料夾，確認沒問題就可以開始將資料儲存至新的磁碟。

```
df -h
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_be2f438e28adc36c6c8952a3384044a0.png)