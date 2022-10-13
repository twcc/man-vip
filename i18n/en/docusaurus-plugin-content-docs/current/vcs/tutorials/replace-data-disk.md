---
sidebar_position: 7
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-bss-replace-data-vol-en' 
---

import TOCInline from '@theme/TOCInline';

# Change data disks

If you need to change the type of data disk (e.g., replace SSD with HDD), or change the capacity of data disks (e.g., replace small capacity with larger capacity), please refer to this document to synchronize the data from the original disk to the new data disk, and then delete the original one.

This article will take the conversion of the data disk type (SSD to HDD) as an example to demonstrate the operation steps.

<TOCInline toc={toc} />

<br/>


## Linux instances

### Step 1. Confirm the disk type of the instance

* Confirm the type of data disk attached to the instance is SSD.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1e3c5a9fdcf43faf5ca5030453acc5dc.png)

* Enter command `df -h` in the VCS instance to view the information of the data disk (file system (Filesystem), capacity (Size), mount path (Mounted on))

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eefbcb3221a84ab64e83b33e6b74f0bb.png)

<br/>


### Step 2. Create a new HDD data disk with the same capacity

* Create an HDD data disk on the portal, with the same capacity as the SSD data disk in `Step 1.`

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2e9ce9eeca1b1f380b954e5c64e63a9c.png)

* Attach the HDD data disk to the VCS instance in `Step 1.`

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6ff48b1fba106f7ab6af7b2a0f2e43c6.png)

* Confirm that the instance has successfully attached with two types of data disks.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_467ab09ecd7318c9a9f2347cf814e5f8.png)

* Connect to the VCS instance, mount the HDD data disk to the instance, and initialize it. Please refer to the steps in [Initialize Linux Disks](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en).

<br/>


### Step 3. Sync data from SSD data disk to HDD data disk

* Enter command `df -h` to confirm the information of the two types of data disks (file system (Filesystem), capacity (Size), mount path (Mounted on))

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7563dd8d5bf73e816eead1f350fd0ce5.png)

* Switch to the root user.

```
sudo -i
```

* Enter command `rsync` to synchronize the data of the two data disks.

```
rsync -avh <Disk_A> <Disk_B>
```

:::info
- `<Disk_A>` : Enter the mounted path of the SSD data disk.
- `<Disk_B>` : Enter the mounted path of the HDD data disk.
:::

<br/>


### Step 4. Detach and delete the SSD data disk

* Detach the SSD data disk from the VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96e61f4c339612669400715d9665c27f.png)

* Delete the SSD data disk to release storage resources.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cee27bbaeb852a76dbfcd3ece69f8d6d.png)

<br/>


## Windows instances

The disk replacing method of Windows instances is the same as Linux instances in `Step 1.`, but the method of initializing data disk in `Step 2.` and synchronizing data in `Step 3.` are slightly different:

<br/>

### Step 2. Create a new HDD data disk with the same capacity

After creating a new HDD data disk and attached to the VCS instance, please follow [Initialize Windows Disks](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en) to initialize the disk.

<br/>

### Step 3. Sync data from SSD data disk to HDD data disk

*  Once the disk has been initialized, confirm that both types of data disks have been mounted successfully.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_25092478493e87b17ce423caec4f536e.png)

* Copy the data of the SSD data disk and paste it to the HDD data disk to complete data synchronization.