---
sidebar_position: 6
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vds-encryption-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vds-encryption-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Data disk encryption

TWCC Virtual Disk Encryption secures user data to meet the security and compliance commitments required by organizations. Used in the same way as a regular disk, the system will automatically encrypt the data on the disk using the [Advanced Encryption Standard (AES-256) algorithm](https://en.m.wikipedia.org/wiki/Advanced_Encryption_Standard), except that the encryption process may slightly affect data access efficiency.

Using TWCC virtual disk encryption secures the following data:

1. Data stored on the disk
2. Data transferred between the disk and the VCS instance
3. Backup snapshots created from a disk
4. Disks created with the snapshot

<br/>

## How to use it?

### Create an encrypted disk

- You can create an encrypted data disk on the storage page when you [create VCS instances](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances), you can choose either HDD Encryption or SSD Encryption disk, and set the disk capacity.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9085231c49d531147f799c7ee0c426e1.png)

- Or create an encrypted disk on the Data Disk Management page and [attach it to a VCS instance](https://man.twcc.vip/en/docs/vcs/user-guides/storage/viewInfo-attachToVCS-deleteDataDisks#attach-to-vcs-instances).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a19a7c843850636f64e72e3d41fef720.png)

:::info
Once created, refer to the following documents to initialize the disk and then use it.
- [<ins>Initialize Linux disks</ins>](https://man.twcc.vip/en/docs/vcs/tutorials/data-disk-init-linux)
- [<ins>Initialize Windows disks</ins>](https://man.twcc.vip/en/docs/vcs/tutorials/data-disk-init-windows)
:::

### Moving data from an old disk to an encrypted disk

If you want to upgrade a non-encrypted disk to a more secure encrypted disk, please refer to [Change data disks](https://man.twcc.vip/en/docs/vcs/tutorials/replace-data-disk), after creating and attaching an encrypted disk, move your data to the new disk, and then delete the old disk to complete the replacement.

<br/>

## Disk Snapshots

Sorry, the encrypted [disk snapshots](https://man.twcc.vip/en/docs/vcs/user-guides/storage/snapshot) feature is not available now, but it will be available again when the user experience is fully optimized.

<br/>

:::info
If you need to prevent disk data from being affected by an attack to your VCS instance, please refer to [<ins>Disk Encryption (CentOS as an example)</ins>](https://drive.google.com/file/d/1A6gdyL0lUMauygwM9cLtgU8GwbRpK36s/view) to set disk encryption from the OS level to double protect your data.
:::
