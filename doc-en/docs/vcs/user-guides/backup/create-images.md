---
sidebar_position: 1
title: 'Create images'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-instance-image-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VCS instance images

VCS instance images can preserve the state of an instance and the system disk with your operating system. We recommend creating an image for your instance before performing a significant system upgrade or installing special software so that you can roll back to a certain time when needed.


:::info

1. **After deleting a VCS instance, the data in the 100 GB system disk will disappear. To back up the system disk, please refer to the following steps to create an image for the instance before deleting it.**
2. For the difference between Tenant Admin and Tenant User for using VCS instance, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務).

:::


<br/>


## Create an image

:::caution
1. **<ins>Before creating an image, it is recommended that you refer to the [Best practices to create VCS instance images](./best-practice-create-images.md) and verify according to the content of the document to avoid excessive waiting time or failure to obtain a valid image.</ins>**
2. If the image state is stuck in **`QUEUED`** and does not change to **`ACTIVE`** for a long time, please contact the Technical Support: <a href="mailto:isupport@twcc.ai">isupport@twcc. ai</a> for help.
:::


<br/>


### Create a general image

Create the image manually.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Enter **VCS Instance Management** page, click on the instance you want to create an image, then enter **VCS Instance Details** page of the instance, and click **IMAGE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_449c7b52b1ba61d36cc11e49566bf442.png)

* Read the instructions in the window, and enter a name and description for the image, then click **OK**.
* It takes several minutes to create the image. After the **Processing...** prompt disappears, you can continue with other tasks.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_42f2babff73c99d87f6f87c2e2b3ace7.png)

* You will be directed to **VCS Instance Image Management** page. Wait for the image state to change from **`QUEUED`** > **`SAVING`** > finally to **`ACTIVE`** before using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c4a06905f071589d1866542c3a7e6985.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


**Command**


```bash
twccli mk vcs -s        # Instance ID  
              -snap     # Create an image
```

:::info
1. The parameters in the square brackets **[ ]** are optional and the rest are required.
:::


<br/>

**Example**


- Create an image for the VCS instance with ID **`918628`** 
```bash
twccli mk vcs -s 918628 -snap
```

</TabItem>

</Tabs>

<br/>


### Create scheduled images


Use `crontab` to create an scheduled image automatically and regularly.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal (Not yet supported)">

<br/>

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- Use `crontab -e` to set the schedule of creating images. For more related functions, please refer to [<ins>CronHowTo</ins>](https://help.ubuntu.com/community/CronHowto).
- Specify a time for creating the image. The example here is 01:01 midnight.
![](https://i.imgur.com/mQp1kUr.png)


</TabItem>

</Tabs>