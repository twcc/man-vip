---
sidebar_position: 5
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-bss-init-vol-linux-en' 
---

# Initialize Linux disks

To increase the storage space for the existing VCS instances, create and attach data disks of Virtual Disk Service to the target VCS instance. Then, for both Windows and Linux operating systems, the initialization of the disk is required so that the VCS instance can detect your mounted storage space and store the data.

In the following tutorial we will show you how to initialize your new data disks.

<br/>


### Step 1. Check if the disk is attached to the instance

After [attaching the data disk to your VCS instance](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-en#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94), make sure that it is correctly attached and assigned a mount path (for example: `/dev/vdb`) on TWCC Portal.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fa713ed5baa62318cd7ae84f06de285f.png)

[Connect to the VCS instance](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-en), enter the following command to make sure that the disk is attached to the instance, and check the disk details to make sure that the path and size are correct.

```
sudo fdisk -l
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7b5f531fee70ec8c47ecedb5d9891798.png)

<br/>


### Step 2. Format the disk

Enter the following formatting commands to create a file system that can be used by the VCS instance.


```
sudo mkfs -t ext4 <DISK_DEVICE>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a9c1acc4676602937a5e9860d24f8e9.png)

:::info
- `<DISK_DEVICE>`: Disk device such as `/dev/vdb`
:::

<br/>


### Step 3. Mount the disk

Create a directory to which the disk is to be mounted.


```
sudo mkdir <DIRECTORY>
```
:::info
- `<DIRECTORY>`: Directory path such as `/home/test`
:::

Mount the disk to the directory.

```
sudo mount <DISK_DEVICE> <DIRECTORY>
```

<br/>


### Step 4. Check if the disk is mounted successfully

Use the following command to check whether the disk has been successfully mounted to the directory. When the mount point directory is displayed, it succeeds and you can store the files on the new disk.

```
df -h
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_be2f438e28adc36c6c8952a3384044a0.png)