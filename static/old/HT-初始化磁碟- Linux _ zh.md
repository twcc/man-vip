---
title: HowTo：初始化磁碟- Linux | zh
tags: HowTo, VCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# HowTo：初始化磁碟- Linux

建立虛擬運算個體後，如果需要增加存取容量空間，在虛擬磁碟服務建立新的資料磁碟後，連結到目標虛擬運算個體上，接著不論是 Windows 或是 Linux 作業系統，都需要先進行初始化磁碟的步驟，虛擬運算個體才會偵測到您所掛載的儲存空間，才能進一步儲存資料。

以下說明如何將您的新資料磁碟初始化。

### Step 1. 確認磁碟已連結至個體

[將資料磁碟連結至虛擬運算個體](https://man.twcc.ai/@TWSC/guide-vcs-vds-manage-disk-zh#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94)後，請確認在使用者介面已正確連結，並取得掛載路徑 (例：`/dev/vdb`)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fa75bdb78bc52059698a1e40d540a0da.png)

[連線](https://man.twcc.ai/@TWSC/vcs-guide-connect-to-linux-from-windows-zh)進入您的虛擬運算個體，輸入以下指令再次確認磁碟已連結至個體，並查看磁碟詳細資料，確認路徑和容量大小正確。

```
$ sudo fdisk -l
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b06740e0fcd40ed80dc82fd3fdbdbb71.png)


### Step 2. 將磁碟格式化

輸入以下格式化指令，建立虛擬運算個體可使用的檔案系統。

```
$ sudo mkfs -t ext4 <DISK_DEVICE>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_33548e5fdec75ace065b50e9f5589536.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
- `<DISK_DEVICE>`：磁碟裝置 (例：`/dev/vdb`)
:::

### Step 3. 掛載磁碟

創建磁碟所需掛載的資料夾。

```
$ sudo mkdir <DIRECTORY>
```
:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
- `<DIRECTORY>`：資料夾路徑 (例：`/home/test`)
:::

將磁碟掛載至資料夾。

```
$ sudo mount <DISK_DEVICE> <DIRECTORY>
```

### Step 4. 確認掛載狀況

接著使用以下指令查看磁碟是否已經成功掛載至資料夾，確認沒問題就可以開始將資料儲存至新的磁碟。

```
$ df -h
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_be2f438e28adc36c6c8952a3384044a0.png)
