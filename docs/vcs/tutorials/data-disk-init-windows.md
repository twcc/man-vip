---
sidebar_position: 6
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-bss-init-vol-windows-zh' 
---

# 初始化磁碟- Windows


建立虛擬運算個體後，如果需要增加存取容量空間，在虛擬磁碟服務建立新的資料磁碟後，連結到目標虛擬運算個體上，接著不論是 Windows 或是 Linux 作業系統，都需要先進行初始化磁碟的步驟，虛擬運算個體才會偵測到您所掛載的儲存空間，才能進一步儲存資料。

以下說明如何將您的新資料磁碟初始化。

<br/>


### Step 1. 確認磁碟已連結至個體

[將資料磁碟連結至虛擬運算個體](../user-guides/storage/view-attach-delete-disks.md#連結至虛擬運算個體)後，請確認在使用者介面已正確連結。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fa75bdb78bc52059698a1e40d540a0da.png)

<br/>


### Step 2. 開啟電腦管理

請[連線](../user-guides/connecting/windows/from-windows.md)進您的虛擬運算個體，並在 <i class="fa fa-search" aria-hidden="true"></i> 搜尋「**電腦管理**」，開啟應用程式。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4dcce52be28b3142c19ab11b731c8f37.png)

<br/>


### Step 3. 檢視磁碟

點選左側選單「**磁碟管理**」，即可檢視您已連結至個體的且狀態為`未初始化`、`未配置`的資料磁碟。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_81324e3d89eacb74843a7c8e5e562fca.png)

<br/>

<br/>


### Step 4. 初始化磁碟

- Windows 將自動開啟初始化的作業視窗，選取欲初始化之磁碟 > 選取分割樣式 (可直接使用預設 `MBR (主開機紀錄)`) > 點選「確認」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3fb63a300d4d111eeacb793d3cad6ae2.png)

- 初始化後，磁碟的狀態將由`未初始化`轉為`連線`。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8fe46977dd19a878a79e0b194dbab15b.png)

<br/>


<br/>


### Step 5. 新增簡單磁碟區 

- 於磁碟處點右鍵，再點選「**新增簡單磁碟區**」，以開啟「新增簡單磁碟區精靈」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ad7cb0806429206a9661616da42468b4.png)


- 點選「**下一步**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eb34f2da96a9bca61623dec7ea803dce.png)

<br/>


### Step 6. 指定磁碟大小

- 預設使用整顆磁碟的空間，直接點選「**下一步**」，將整顆磁碟建立為 1 個分割區。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7dcf7396cc1b317a89d08ada2e44e95a.png)


:::info
您可以按照需求，將磁碟分割為多個分割區。
:::

<br/>


### Step 7. 指派磁碟機代號或路徑 

- 指派磁碟機代號或路徑，點選「**下一步**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ca71932277a6e1a6849d63e0308dd15.png)

<br/>


### Step 8. 磁碟分割格式化

- 輸入磁碟區標籤，其餘資訊使用預設值即可，點選「**下一步**」開始格式化。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d3cf924fdc91a359497bd8982ad9cc41.png)


- 最後點選「**完成**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6c324d7492c70c8344912b9138c391fd.png)

- 格式化完成後，磁碟狀況將由`未配置` 轉為 `良好 (主要分割區)`。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_03957f926598785ddc21db6cfc31a4ea.png)

- 在「**裝置和磁碟區**」可看見新磁碟，並可以開始將資料儲存至新的磁碟。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c87c7e9d8e2fd1c6381345de1285d8bf.png)