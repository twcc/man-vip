---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-guide-detach-data-disk-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-guide-detach-data-disk-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Detach data disks

You need to detach a data disk from a VCS instance before deleting it or attaching it to a different VCS instance. **Before detaching, please unmount the disk from the instance to avoid failed detaching.**


:::caution

After detaching, the data disk will continue to be billed until deletion.

:::


<br/>



## Step 1. Unmount a data disk

There are different ways to unmount a disk between Linux and Windows, please follow the steps according to the operating system (OS) of your instance.



<details>

<summary><b>Linux Instance</b></summary>


- [Connect to your Linux instance](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-en), and use the following command to unmount the `/dev/vdb` disk.

``` 
sudo umount -d /dev/vdb
```


</details>

<div style={{'height':'8px'}}></div>

<details>

<summary><b>Windows Instance</b></summary>


- [Connect to your Windows instance](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-windows-en), and search for <i class="fa fa-search" aria-hidden="true"></i> **Computer Management** then open the applicaiton.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_08e62fd6999de46d9361e5a3bca0a4c7.png)


- (1) Click **Disk Management**  (2) Right-click the disk to be unmounted (3) Click **Offline** to unmount the disk

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bb6045da618be032710b19861a221dc4.png)


</details>

<br/>



## Step 2. Detach a data disk

After unmounting, you are able to detach the data disk .

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- **Method 1**:

    * Enter **VCS Instance Details** page, scroll the page to the bottom, and click **DETACH DISK** to detach the data disk from the attached instance.
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d2569823895e6578850c2feff05846cb.png)

    * Enter Data Disk Management page. When the disk enters in the **`AVAILABLE`** state from the **`IN-USE`** state, you are able to delete the disk or attach it to a different instance.
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_44536696f4a31678f0bdfc293c8a88b1.png)



- **Method 2**:

    * Enter **Data Disk Details** page and click **DETACH** to detach the data disk from the attached instance.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ac87e56ceb2005e598cb95e319d9ebb.png)

    * When the disk enters in the **`AVAILABLE`** state from the **`IN-USE`** state, you are able to delete the disk or attach it to a different instance.
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_44536696f4a31678f0bdfc293c8a88b1.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>