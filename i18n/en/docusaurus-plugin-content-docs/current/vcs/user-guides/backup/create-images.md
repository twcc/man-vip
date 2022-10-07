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
2. For the difference between Tenant Admin and Tenant User for using VCS instance, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務).

:::


<br/>


## Create an image

:::caution
1. **<ins>Before creating an image, it is strongly recommended that you refer to [Best practices to create a VCS instance image](https://man.twcc.ai/@twccdocs/guide-vcs-snapshot-best-practice-en) to ensure effective acquisition of the image.</ins>**
2. If the image state stucks in **`QUEUED`** and has not changed to **`ACTIVE`** for a long time, please contact the Technical Support: <a href="mailto:isupport@twcc.ai">isupport@twcc. ai</a> for help.
:::


<br/>

### Create an image manually


You can manually create an image for a VCS instance using TWCC portal or TWCC CLI.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Enter **VCS Instance Management** page, click on the instance you want to create an image, then enter **VCS Instance Details** page of the instance, and click **IMAGE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa7e469fc5ca28b153ae22a313bac609.png)


* Read the instructions in the window, and enter a name and description for the image, then click **OK**.
* It takes several minutes to create the image. After the **Processing...** prompt disappears, you can continue with other tasks.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c0f4f30a623a73a6d79aab23b48b8e8f.png)


* You will be directed to **VCS Instance Image Management** page. Wait for the image state to enter from **`QUEUED`**> **`SAVING`**> to **`ACTIVE`** before you can use it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51de05652cece2cc339d62644cdffa64.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


**Commands**


```bash
twccli mk vcs -s        # Instance ID  
              -snap     # Create an image
```

:::info
1. The square brackets **[ ]** indicate optional parameters, and the rest are required parameters.
:::


<br/>

**Examples**


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

- Use `crontab -e` to set the schedule of creating images. For more related functions, see [<ins>CronHowTo</ins>](https://help.ubuntu.com/community/CronHowto).<br/>
![](https://i.imgur.com/1zRke01.png)

- Indicate the specific time for creating an image. Here is an example: == midnight 01:01==.
![](https://i.imgur.com/WWwg1ZJ.png)


</TabItem>

</Tabs>