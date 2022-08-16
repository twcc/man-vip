---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create data disk

If the storage space of your VCS instance is insufficient, you can create data disks. Then, attach the disks to the instance, and initialize the disks for use.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

### 1. Create a data disk when creating a VCS instance

- You can create a data disk when creating your [<ins>VCS instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en) on **STORAGE** tab (can only create 1 disk and specify only the disk type and size).

### 2. Create a data disk on Data Disk Management page

If you need to create more disks, please follow the instructions below:

* Click **Virtual Disk Service (VDS)** from the service list. On the **Data Disk Management** page, click **＋CREATE**.


* Fill in the data disk name, description, whether the data disk newly created or restored from a snapshot, size (GB), and disk type (HDD or SSD), and then click **NEXT: REVIEW & CREATE>**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_30e5b2632e35e15bda8378a625e74a07.png)




<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用 SSD 加密資料磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->


* Review the configurations of the data disk and then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f58724e9c6d407f059cfcedb52165d3.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


### Commands

```bash
twccli mk vcs [-n]      # Data disk name
              [-sz]     # Data disk size (GB)
```
:::info
2. If you do not specify the optional parameters, the disk will be created with default settings:

| Disk type | Name |Disk size|
| -------- | -------- | -------- | 
| HDD  | twccli  | 100 GB  | 
:::

### Examples

- Create a data disk named **`clitest`**, and disk size is **`10 GB`**.

```bash
twccli mk vds -n clitest -sz 10
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3da7383c28c4700cd8429fbbb282a58d.png)


</TabItem>

</Tabs>