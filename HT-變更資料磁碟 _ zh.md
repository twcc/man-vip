---
title: HowTo：變更資料磁碟 | zh
tags: HowTo, BSS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# HowTo：變更資料磁碟

若您需要更換使用的資料磁碟 Volume 類型 (例：將 SSD 轉換為 HDD)，或需要變更 Volume 容量 (例：由小容量擴充至較大容量)，請您參考此份文件，將原 Volume 資料同步至新 Volume，再將原 Volume 刪除。

本文將以轉換 Volume 類型 (SSD 換為 HDD) 為例，說明操作步驟。

[TOC]

## Linux 個體


### Step 1. 確認個體 Volume 類型

* 於使用者介面確認，個體所掛載的 Volume 為 SSD 類型。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40aed28ba656c1e5b5bffc652c50152f.png)


* 虛擬運算個體內輸入`df -h` 指令查看 Volume 的資訊 (檔案系統<Filesystem>、容量<Size>、掛載路徑<Mounted on>)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d9e1124e63cdcc6c839bdee8fc62b5c.png)


### Step 2. 新建相同容量的 HDD Volume

* 使用者介面新增一個 HDD Volume，容量同 `Step 1.` 之 SSD Volume

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d413319c5c0f22b4229dc279a75f7948.png)


* 將 HDD Volume 連結至 `Step 1.` 的虛擬運算個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_80099b288eb6de960c755d10b4634d4a.png)


* 確認個體已成功連結兩種類型的 Volume

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2ac671a10b049e027d2c41e4de7a118e.png)


* 連線進入虛擬運算個體，將 HDD Volume 掛載到 VM 上，並進行初始化，步驟可參考 [HowTo：初始化磁碟- Linux 個體](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-zh)。

### Step 3. SSD Volume 資料同步至 HDD Volume

* 輸入`df -h` 確認兩種類型的 Volume 的資訊 (檔案系統<Filesystem>、容量<Size>、掛載路徑<Mounted on>)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f9b19ba05c409c20a49b5872c3c7e6f.png)


* 切換成 root 身分。

```
$ sudo -i
```

* 使用 `rsync` 指令同步兩個 Volume 的資料。

```
$ rsync -avh <Volume_A> <Volume_B>
```

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
- `<Volume_A>`：輸入 SSD Volume 掛載路徑
- `<Volume_B>`：輸入 HDD Volume 掛載路徑
:::

### Step 4. 分離並刪除 SSD Volume

* 將 SSD Volume 自虛擬運算個體分離。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ffa97a90741b509f9b3ec9f6103cde66.png)


* 刪除 SSD Volume，回收儲存資源。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0257c20ca1519e080030dd201eb337af.png)


## Windows 個體

Windows 個體與 以上 Linux 個體的操作方式雷同，僅 `Step 2.` 初始化 Volume 的方式與 `Step 3.` 同步資料的方式有些許差異：

### Step 2. 新建相同容量的 HDD Volume

新建一 HDD Volume 並將 Volume 連結至虛擬運算個體後，初始化步驟請改參考 [HowTo：初始化磁碟- Windows 個體](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh)。

### Step 3. SSD Volume 資料同步至 HDD Volume

* 初始化完成後，確認兩種類型的 Volume 都已掛載成功。 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e1f878a79bd6c276509485dd1828f1ff.png)


* 複製 SSD Volume 的資料並貼至 HDD Volume，即可完成資料同步。