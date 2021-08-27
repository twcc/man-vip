---
tags: Guide, VCS, VDS, EN
title: 虛擬磁碟加密 | en
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-en %}

# VDS Encryption

TWCC VDS Encryption can protect your data security and help you comply with your organization security standards and regulations. The usage of encrypted disks is identical to standard disks but will automatically encrypt your disks with [Advanced Encryption Standard (AES-256)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) (which might only slightly impact I/O performance).

TWCC VDS Encrpytion can protect your data below:

1. Data stored in the data disks
2. Data transferring between VCS instances and disks
3. Snapshots created from the disk
4. Disks restored from those snapshots

## How to use VDS encryption?

### Create an encrypted disk

- You can create an encrypted disk on the **Storage** tab when you create a VCS instance. Select **HDD encryption** or **SDD encryption**, and specify the size of the disk.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cdd50dbebbd4b2a49bcb9c22f954fedc.png)

  
- Alternatively, create an encrypted disk on the VDS management page, and attach it to your VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f591d3f5f217883c38c8f73be44741d.png)


:::info
After create the disk and attach it to your instance, initialize the disk before you can use it:
- [<ins>HowTo：Initialize a disk- Linux</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en)
- [<ins>HowTo：Initialize a disk- Windows</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en)
:::

### Move data in the old disk to the encrypted disk

If you want to upgrade your disk to an encrypted one, you can create a new encrypted disk and attach it to your VCS instances, then move data to the new disk, and delete the old disk. For more information, see [Replace the data disk](https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-en).


### Disk sapshots

Sorry! Snapshot is not enabled for encrypted disks and will be available to you with an optimized user experience.