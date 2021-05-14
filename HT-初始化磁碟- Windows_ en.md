---
title : HowTo：初始化磁碟- Windows| en
tags: HowTo, BSS, EN
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/eng-working-en %}


# HowTo：初始化磁碟- Windows

建立虛擬運算個體後，如果需要增加存取容量空間，在虛擬磁碟服務建立新的資料磁碟後，連結到目標虛擬運算個體上，接著不論是 Windows 或是 Linux 作業系統，都需要先進行初始化磁碟的步驟，虛擬運算個體才會偵測到您所掛載的儲存空間，才能進一步儲存資料。

以下說明如何將您的新資料磁碟初始化。


### Step 1. 確認磁碟已連結至個體

[將資料磁碟連結至虛擬運算個體](https://www.twcc.ai/doc?page=vm#%E9%80%A3%E7%B5%90-Volume)後，請確認在使用者介面已正確連結。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5498c14ea137d3e6f9b6b058cda6eab1.png)



### Step 2. 開啟電腦管理

請[連線](https://www.twcc.ai/doc?page=vm#%E9%80%A3%E7%B7%9A%E8%87%B3-Windows-%E5%80%8B%E9%AB%94-%E6%9C%AC%E6%A9%9F%E7%82%BA-Windows)進您的虛擬運算個體，並在 <i class="fa fa-search" aria-hidden="true"></i> 搜尋「**電腦管理**」，開啟應用程式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4dcce52be28b3142c19ab11b731c8f37.png)


### Step 3. 檢視磁碟

點選左側選單「**磁碟管理**」，即可檢視您已連結至個體的且狀態為`未初始化`、`未配置`的資料磁碟。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ca94838884b9fd6fbcc2f0d316878fd.png)


### Step 4. 初始化磁碟

- Windows 將自動開啟初始化的作業視窗，選取欲初始化之磁碟 > 選取分割樣式 (可直接使用預設 `MBR (主開機紀錄)`) > 點選「確認」。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3fb63a300d4d111eeacb793d3cad6ae2.png)

- 初始化後，磁碟的狀態將由`未初始化`轉為`連線`。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c4028ec99ca7fd5531ab5c0e8b679395.png)

### Step 5. 新增簡單磁碟區 

- 於磁碟處點右鍵，再點選「**新增簡單磁碟區**」，以開啟「新增簡單磁碟區精靈」。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4f0fa9a6a1017281a4f5af9a68e4f673.png)


- 點選「**下一步**」。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eb34f2da96a9bca61623dec7ea803dce.png)

### Step 5. 指定磁碟大小

- 預設使用整顆磁碟的空間，直接點選「**下一步**」，將整顆磁碟建立為 1 個分割區。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6d23e832d8bbd0a177e428d7a862faae.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 您可以按照需求，將磁碟分割為多個分割區。
:::

### Step 6. 指派磁碟機代號或路徑 

- 指派磁碟機代號或路徑，點選「**下一步**」。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ca71932277a6e1a6849d63e0308dd15.png)

### Step 7. 磁碟分割格式化

- 輸入磁碟區標籤，其餘資訊使用預設值即可，點選「**下一步**」開始格式化。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d3cf924fdc91a359497bd8982ad9cc41.png)


- 最後點選「**完成**」。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a8e94d2caf3ded3281d4400c2c2234b2.png)

- 格式化完成後，磁碟狀況將由`未配置` 轉為 `良好 (主要分割區)`。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_052091f8124b4ce9a0f41825ef923e52.png)

- 在「**裝置和磁碟區**」可看見新磁碟，並可以開始將資料儲存至新的磁碟。
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22c06d162d32e999ebc53697e8769277.png)