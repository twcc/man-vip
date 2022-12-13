---
sidebar_position: 2
slug: '/concepts-tutorials/twcc/vcs/tutorials/best-practice-create-images'
title: 'Best practices to create a VCS instance image'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-snapshot-best-practice-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Best practices to create a VCS instance image

You can create [TWCC VCS instance image](/docs/user-guides/twcc/vcs/instances/create-instances) in a variety of situations, **but before creating, please perform the following tasks to ensure that the image will be effectively obtained**:

- **Create an instance image after [shutting down your instance](#how-to-shut-down-instances)**. If the state of the instance is **`Ready`** and I/O is still available, it will take longer to create, so shutting down before creating the image will ensure a reasonable creation time.
- **If you have configured auto mount data disks to your instance, it is suggested to [add "nofail" option](#how-to-add-the-nofail-option) after the configuration command before creating an image** to ensure that the instance restored by the image can be started and connected normally.


<br/>



## How to shut down instances?

- After connecting to your VCS instance via SSH, you can use the shutdown command to shut down the instance.

```bash
sudo shutdown
```

- After shutdown is complete, the instance will be in the **`shutdown`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d0a1329d89f244dfca9d602ef826b0dd.png)

:::info
For the relationship between instance state and billing, please refer to [<ins>VCS instance lifecycle</ins>](https://man.twcc.vip/en/docs/vcs/concepts/instance-lifecycle).
:::


<br/>



## How to add the nofail option?


- If you have configured auto mount data disks to your instance in the file /etc/fstab (e.g., `/dev/vdb /mnt ext4 defaults`)<br/>
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_09ddb7ad46cfae66dcb3fa7cb75244c0.png)

- Please add `nofail` after the original settings to avoid errors in mounting the data disks, causing the instance created with the image to fail to be started and connected normally.
(e.g., `,nofail,x-systemd.device-timeout=1m`)<br/>
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d82af67186cc021e21a4f4d59630cc4d.png)