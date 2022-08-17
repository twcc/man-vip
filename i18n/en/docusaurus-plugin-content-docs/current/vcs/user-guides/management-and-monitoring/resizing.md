---
sidebar_position: 6
title: '調整規格'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resize VCS instances

This tutorial will show you how to resize your VCS instance using the **Image** function to quickly transfer instance data and configuration to a new instance with different size.

The following example resizes a Linux instance created from instance type **v.8xsuper** to **v.super**.

:::info
The comparison of all instance types, configurations and prices, see [<ins>Pricing</ins>](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#虛擬運算服務-Virtual-Compute-Service-VCS) for more information.
:::


### Step 1. Create a VCS instance image

Save the instance data by creating an image for the VCS instance.

:::tip
1. How long does it take to create the image? See [<ins>TWCC FAQ VCS > Instance Image File > Q1</ins>](https://man.twcc.ai/@twccdocs/faq-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-zh#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7) for more information.
2. How to reduce the time for image creation? See [<ins>TWCC FAQ VCS > Instance Image File > Q2</ins>](https://man.twcc.ai/@twccdocs/faq-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-en#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7) for more information.
:::

- Go to the **VCS Instance Details** page to check the instance specification to be resized (type: **v.8xsuper**, configurations:`vCPU 32 cores; Memory 100 GB; system disk 100 GB`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f70ecc39e1e315dafb27488ca863d4c7.png)


- Click **Image**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4c49db0c9127deb94851fdc543a7c4fc.png)

- Enter ***Image File Name*** and click **Confirm**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a0638c048b266eb216503a0e9cb58ec.png)

- Complete the creation of a VCS instance image.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d4238750ab580fb05a318f61526d23a7.png)


### Step 2. Create an instance with a new type from the image

- Select the **Virtual Compute Service (VCS)**. On the **VCS Instance Management** page, select **＋CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3eb7e080a7e50a02e7bfdadd854ef93a.png)

- Enter ***VCS Instance Name***, and select the created image.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b2c2855bbc88db6ae93c7e042b2694f.png)

-  Select **v.super** for the instance type in the Basic Configuration, and click **REVIEW & CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7d623f17e6b1712a9e152ce9506523fc.png)

- The instance resize is complete! Successfully create a VCS instance (type: **v.super**, configurations: `vCPU 02 cores; Memory 16 GB; system disk 100 GB`) from the image, and transfer the original instance data to the new instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_571610d88b23578ba8b95881d8179059.png)


:::info

- If your original VCS instance has been mounted with data disks, please unmount the data disk, and then connect to the new instance.
- If the original VCS instance is no longer in use, it is recommended to delete the instance and release computing resources.

:::