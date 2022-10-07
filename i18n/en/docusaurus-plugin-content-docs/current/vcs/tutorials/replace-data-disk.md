---
sidebar_position: 7
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-bss-replace-data-vol-en' 
---

import TOCInline from '@theme/TOCInline';

# Change data disks

If you need to change the type of data disk (e.g., replace HDD with SSD), or change the capacity of data disks (e.g., replace small capacity with larger capacity), please refer to this document to replace the original data disk to a new data disk, and delete the original one.

This article will take the conversion of the data disk type (SSD to HDD) as an example to demonstrate the operation steps.

<TOCInline toc={toc} />

<br/>


## Linux instances

### Step 1. Confirm the disk type of the instance

* Confirm the type of data disk attached to the instance is SSD.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_56fbf74d4cdb053c62c7de4078d94e6c.png)


* Enter command `df -h` in the VCS instance to view the information of the data disk (file system (Filesystem), capacity (Size), mount path (Mounted on))

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d9e1124e63cdcc6c839bdee8fc62b5c.png)

<br/>


### Step 2. Create a new HDD data disk with the same capacity

* Create an HDD data disk on the portal, with the same capacity as the SSD data disk of `Step 1.`

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3be49aa561208a4f884332fa2f3f22c0.png)

* Attach the HDD data disk to the VCS instance of `Step 1.`

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22036a0e1bbc41a8ac754a19d2026509.png)


* Confirm that the instance has successfully attached with two types of data disks

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38d639e2727ad7c85445130035dbd04b.png)

* Connect to the VCS instance, mount the HDD data disk to the instance, and initialize it. Please refer to the steps in [HowTo: Initialize Data Disk-Linux Instance](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en).

<br/>


### Step 3. Sync data from SSD data disk to HDD data disk

* Enter command `df -h` to confirm the information of the two types of data disks (file system (Filesystem), capacity (Size), mount path (Mounted on))

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f9b19ba05c409c20a49b5872c3c7e6f.png)


* Switch to the root user.

```
sudo -i
```

* Enter command `rsync` to synchronize the data of the two data disks.

```
rsync -avh <Disk_A> <Disk_B>
```

:::info
- `<Disk_A>` : Enter the mount path of the SSD data disk.
- `<Disk_B>` : Enter the mounted path of the HDD data disk.
:::

<br/>


### Step 4. Detach and delete the SSD data disk

* Detach the SSD data disk from the VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ce08c3d7ac56e50a39cebfce4968a3f.png)

* Delete the SSD data disk to release storage resources.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b66699de0e7f1e26989d01450c2d813b.png)

<br/>


## Windows instances

The disk replacing method of Windows instances is the same as Linux instances in `Step 1.`, but the method of initializing data disk in `Step 2.` and synchronizing data in `Step 3.` are slightly different:

<br/>

### Step 2. Create a new HDD data disk with the same capacity

After creating a new HDD data disk and attached to the VCS instance, please follow [HowTo: Initialize Data Disk-Windows Instance](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en) to initialize the disk.

<br/>

### Step 3. Synchronize SSD data disk data to HDD data disk

*  Once the disk has been initialized, confirm that both types of data disks have been mounted successfully.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_25092478493e87b17ce423caec4f536e.png)

* Copy the data of the SSD data disk and paste it to the HDD data disk to complete data synchronization.