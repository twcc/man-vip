---
sidebar_position: 2
sidebar_label: 'Create an instance image'
slug: '/user-guides/twcc/vcs/instances/create-images'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-instance-image-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an image

:::caution
1. **<ins>Before creating an image, it is strongly recommended that you refer to [Best practices to create a VCS instance images](/concepts-tutorials/twcc/vcs/best-practice-create-images.md) to ensure effective acquisition of the image.</ins>**
2. If the image state is stuck in **`QUEUED`** and does not change to **`ACTIVE`** for a long time, please contact the Technical Support: <a href="mailto:isupport@twcc.ai">isupport@twcc. ai</a> for help.
:::


<br/>


## Create a general image

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* On the **VCS Instance Management** page, select an instance you want to create an image to keep the settings, and then on the **VCS Instance Details** page, click **IMAGE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_449c7b52b1ba61d36cc11e49566bf442.png)

* Read the instructions in the window, and enter a name and description for the image, then click **OK**.
* It takes several minutes to create the image. After the **Processing...** prompt disappears, you can continue with other tasks.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_42f2babff73c99d87f6f87c2e2b3ace7.png)

* You will be directed to **VCS Instance Image Management** page. Wait for the image state to change from **`QUEUED`** > **`SAVING`** > finally to **`ACTIVE`** before using it.

![](https://i.imgur.com/cfPfnDH.png)

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


Use `crontab` to automatically and regularly create an scheduled image .


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal (Not yet supported)">

<br/>

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- Use `crontab -e` to set the schedule of creating images. For more related functions, please refer to [<ins>CronHowTo</ins>](https://help.ubuntu.com/community/CronHowto).
- Specify a time for creating the image. The example here creates an image at 01:01 midnight.
![](https://i.imgur.com/mQp1kUr.png)


</TabItem>

</Tabs>