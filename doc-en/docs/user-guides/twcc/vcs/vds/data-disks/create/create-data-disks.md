---
sidebar_position: 2
sidebar_label: 'Create a data disk'
slug: '/user-guides/twcc/vcs/vds/create-data-disks'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vds-create-data-disk-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vds-create-data-disk-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a data disk

If the storage space of your VCS instance is insufficient, you can create data disks. Then, attach the disks to the instance, and initialize the disks for use.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">


**1. Create a data disk when creating a VCS instance**

- You can create a data disk when creating your [<ins>VCS instance</ins>](/docs/user-guides/twcc/vcs/instances/create-instances) on the **STORAGE** tab. (Only 1 disk can be created and only type and size can be specified, but no name can be assigned.)

**2. Create a data disk on Data Disk Management page**

If you need to create more disks, please follow the instructions below:

* Click **Virtual Disk Service (VDS)** from the service list. On the **Data Disk Management** page, click **＋CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

* Fill in the data disk name, description, whether the data disk is newly created or restored from a snapshot, size (GB), and disk type (HDD or SSD), and then click **NEXT: REVIEW & CREATE>**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_30e5b2632e35e15bda8378a625e74a07.png)




<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用 SSD 加密資料磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->


* Review the configurations of the data disk and then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a7948cfc0763146b7b0e7d170a06a35f.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">



**Command**


```bash
twccli mk vcs [-n]      # Data disk name
              [-sz]     # Data disk size (GB)
```
:::info
1. The parameters in the square brackets **[ ]** are optional and the rest are required.
2. Without optional parameters, the data disk will be created with the default settings.:

| Disk type | Name |Disk size|
| -------- | -------- | -------- | 
| HDD  | twccli  | 100 GB  | 
:::


<br/>

**Example**


- Create a data disk named **`clitest`**, and disk size is **`10 GB`**.

```bash
twccli mk vds -n clitest -sz 10
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3da7383c28c4700cd8429fbbb282a58d.png)


</TabItem>

</Tabs>