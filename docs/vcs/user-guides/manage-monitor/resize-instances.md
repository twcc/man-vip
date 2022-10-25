---
sidebar_position: 6
title: 'Resize VCS instances'
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-resize-instance-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-resize-instance-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resize VCS instances

This tutorial will show you how to resize your VCS instance using the **Image** function to quickly transfer instance data and configuration to a new instance with different size.

The following example resizes a Linux instance created from instance type **v.8xsuper** to **v.super**.

:::info
The comparison of all instance types, configurations and prices, please refer to [<ins>Pricing</ins>](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#虛擬運算服務-Virtual-Compute-Service-VCS) for more information.
:::


<br/>



### Step 1. Create a VCS instance image

Save the instance data by creating an image for the VCS instance.

:::tip
1. How long does it take to create the image?<br/>
Please refer to [<ins>TWCC FAQ VCS > Instance Image File > Q1</ins>](https://man.twcc.ai/@twccdocs/faq-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-zh#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7).
2. How to reduce the time for image creation?<br/>
Please refer to [<ins>TWCC FAQ VCS > Instance Image File > Q2</ins>](https://man.twcc.ai/@twccdocs/faq-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-en#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7).
:::

- Go to the **VCS Instance Details** page to check the instance specification to be resized (type: **v.8xsuper**, configurations: `v.8xsuper`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fcf77e04045a58e62b5fb56f1093b437.png)


- Click **Image**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_decf1e057354dab8a234c9a7ef37419d.png)

- Enter ***Image File Name*** and click **OK**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3b733ce5cd7d55bfffc16244e38f328f.png)

- Complete the creation of a VCS instance image.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e5ab95872b7a3f15009a7079b452b244.png)


<br/>



### Step 2. Create an instance with a new type from the image

- Select **Virtual Compute Service (VCS)**. On the **VCS Instance Management** page, click **＋CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2be4f164f3529616554c7a2531e511ca.png)

- Enter **VCS Instance Name**, and select the created image.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_41e16f56cb54c69d9f4bbe56f1192b7e.png)

- Select **v.super** for the instance type in the Basic Configuration, and click **REVIEW & CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_936cbfb01132c6d389f63a8013b35df7.png)

- The instance resize is complete! Successfully create a VCS instance (type: **v.super**) from the image, and transfer the original instance data to the new instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d6dda75fb5cc901749febfbd9d71c93.png)

<br/>



:::info

- If your original VCS instance has been mounted with data disks, please unmount the data disks first, and then attach them to the new instance.
- If the original VCS instance is no longer in use, it is recommended to delete the instance and release computing resources.

:::