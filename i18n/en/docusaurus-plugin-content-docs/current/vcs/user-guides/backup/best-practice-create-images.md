---
sidebar_position: 2
title: 'Best practices to create VCS instance images'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-snapshot-best-practice-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Best practices to create VCS instance images

You can create [TWCC VCS instance image](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-en) in a variety of situations, **but before creating, please perform the following tasks to ensure that the image is effectively obtained**:

- **Create an instance image after [shutting down your instance](#How-to-shut-down-instances?)**. It will take some time to create images for instances in the **`Ready`** state and have I/O. Therefore, create an image after shutting down your instance to ensure a short creation time.
- **If you have configured auto mount data disks to your instance, it is suggested to [add "nofail"](#How-to-add-the-nofail-option?) after the configuration command before creating an image** to ensure that the instance can be started and connected normally.


<br/>



## How to shut down instances?

- After connecting to your instance via SSH, you can use the shutdown command to shut down the instance.

```bash
sudo shutdown
```

- After shutdown, the instance will enter in the **`shutdown`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d0a1329d89f244dfca9d602ef826b0dd.png)

:::info
For the relationship between instance state and billing, see [<ins>VCS instance lifecycle</ins>](https://www.twcc.ai/doc?page=concept-vcs-lifecycle).
:::


<br/>



## How to add the nofail option?


- If you have configured auto mount data disks to your instance in the file /etc/fstab (e.g., `/dev/vdb /mnt ext4 defaults`)<br/>
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_09ddb7ad46cfae66dcb3fa7cb75244c0.png)

- Please add `nofail` after the original settings to avoid errors in mounting the data disk, causing the instance you created with the image to fail to start and connect normally.
(e.g., `,nofail,x-systemd.device-timeout=1m`)<br/>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d82af67186cc021e21a4f4d59630cc4d.png)