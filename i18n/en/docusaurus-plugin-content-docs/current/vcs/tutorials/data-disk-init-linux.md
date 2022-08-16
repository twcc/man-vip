---
sidebar_position: 5
---

# Initialize Linux disks

To increase the storage space for the existing VCS instances, create and attach data disks of Virtual Disk Service to the target VCS instance. Then the data disks whether in Windows or Linux should be initialized and detected before you can access.

In the following tutorial we will show you how to initialize your new data disks.

### Step 1. Check if the disk is attached to the VCS instance

After [Attaching the data disk to your VCS instance](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-en#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94), make sure that it is correctly attached and assigned a mount path (for example: `/dev/vdb`) on the TWCC Portal.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fa713ed5baa62318cd7ae84f06de285f.png)


[Connect to the VCS instance](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-en), enter the following command to make sure that the disk is attached to the instance, and check the disk details to make sure that the path and size are correct.

```
sudo fdisk -l
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b06740e0fcd40ed80dc82fd3fdbdbb71.png)


### Step 2. Format the disk

Enter the following formatting commands to create a file system that can be used by the VCS instance.


```
sudo mkfs -t ext4 <DISK_DEVICE>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_33548e5fdec75ace065b50e9f5589536.png)


:::info
- `<DISK_DEVICE>`: Disk device such as `/dev/vdb`
:::

### Step 3. Mount the disk

Create a directory where you'll mount the disk.


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

### Step 4. Check if the disk is mounted successfully

Use the following command to check whether the disk has been successfully mounted to the directory. It success when the mount point directory is displayed, and you can store files on the new disk.


```
df -h
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_be2f438e28adc36c6c8952a3384044a0.png)