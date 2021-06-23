---
tags: Test, EN
title: TWCC 加密磁碟 (EXPTL) | en
---

{%hackmd /@docsharedstyle/exptl-testing-en %}

# TWCC VDS Encryption (`EXPTL`)

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
- [<ins>HowTo：Initialize a disk- Linux</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-bss-init-vol-linux-zh)
- [<ins>HowTo：Initialize a disk- Windows</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-bss-init-vol-windows-zh)
:::

### Move data in the old disk to the encrypted disk

If you want to upgrade your disk to an encrypted one, you can create a new encrypted disk and attach it to your VCS instances, then move data to the new disk, and delete the old disk. For more information, see [Replace the data disk](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-bss-replace-data-vol-zh).

:::danger

{%hackmd @docsharedstyle/important-en %}

Unlike standard disk types (HDD or SSD), **only the creator can delete encrypted disks**. Deleting encrypted disks by others (e.g., Tenant Administrator) will result in an error.
:::