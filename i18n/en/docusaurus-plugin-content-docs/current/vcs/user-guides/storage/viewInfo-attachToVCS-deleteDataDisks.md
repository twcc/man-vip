---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage data disks

After your **data disk** is created, you can view the disk information, attach the disk to (or detach from) the VCS instance, and delete the disk. <br/>(*※ System disk currently does not support the following management functions*.)

:::info
For the differences between Tenant Admins and Tenant Users using VCS instance, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-en#%E8%99%9B%E6%93%AC%E7%A3%81%E7%A2%9F%E6%9C%8D%E5%8B%99) for more information.
:::

## View data disks

View the ID, created time, name, size, type, state, description, attached VCS instance, and mount path of your data disk.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Enter **Data Disk Management** page, then you can view the summary information of the disk. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bd8f238dd56b9bd437f4b3c2dbbbccbf.png)


- Click on one of your data disks and enter the **Data Disk Details** page, then you can view the detailed disk information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a56cfee1ff28f578bff894daed2d5a62.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View the ID, name, created time, mount path, size, state and type of your disk.

```bash
twccli ls vds
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c976443120fa105196269359143aeb3a.png)

</TabItem>

</Tabs>

## Attach to VCS instances

You need to attach your disk to a VCS instance and initialize it before you can use it.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* The newly created data disk will appear at the top of the Data Disk Management list. When it enters the **`AVAILABLE`** state, you can attach it to an instance for use.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6da326c54d62392da23c299de1f3ed25.png)




* Click the list to enter Data Disk Details page, and click **ATTACH**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f025c6f70f0b5daa88ec8ea0dd3ee0dc.png)




* When **Attach Disk** window pops up, select the VCS instance to be attached and click **OK**.

:::info
The drop-down list only displays VCS instances that can be attached with data disks (in a state other than **`Stopped`**).
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1ed0015b5ca27424909117bac12777e6.png)


* After the data disk is attached to the VCS instance, you can click **REFRESH**. The attached instance will be displayed in the lower section, the disk will be in the **`IN-USE`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d79c9ac00e3961f1b1f23c7ed57883b5.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

<br/>


:::info
1. For more information about changing disk types or disk sizes, see [<ins>HowTo: Change data disk</ins>](https://man.twcc.ai/@twccdocs/howto-bss-replace-data-vol-en).
2. After the data disk is attached to the VCS instance, you need to initialize it before using it. For the steps, see: 
- [<ins>HowTo: Initialize data disk- Linux instance</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en)
- [<ins>HowTo: Initialize data disk- Windows instance</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en)
:::

## Detach from VCS instances

To delete a data disk or attach it to another VCS instance, please detach it from the original VCS instance before performing other operations.


For detailed steps of unmounting and detaching data disks, see [Detach data disks](https://man.twcc.ai/@twccdocs/vcs-vds-guide-detach-data-disk-en).



## Delete data disks

You can delete disks that you no longer use. Once deleted, <ins>**it is not billed anymore**</ins>.


:::caution
1. Be careful before deleting the data disk. Once the disk is deleted, it cannot be recovered.
2. If the state of the data disk is **`IN-USE`**, the disk must be detached from the VCS instance to enter in **`AVAILABLE`** state first, then it can be deleted.
3. When a snapshot of the data disk exists, the disk cannot be deleted. Please delete the disk snapshot before deleting the data disk.
:::


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Enter **Data Disk Management** page > select the data disk(s) you want to delete > click **DELETE** at the top to delete the disk.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6d9947298979e85c4062f988994e51e4.png)


- Or click "<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>" next to the data disk &nbsp;> click **DELETE**. 
- Or enter **Data Disk Details** page> click "**DELETE**" at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

### Commands

```bash
twccli rm vds -id       # Data disk ID 
              [-f]      # Whether a force deletion
```

:::info
1. The square brackets **[ ]** indicate optional parameters, and the rest are required parameters.
:::

### Examples

- Delete the data disk with ID `376749`
```bash
twccli rm vds -id 376749
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e2a0873513f1cc8f60be01a78ae3b456.png)

- Force delete (without warning) the data disk with ID `376716`

```bash
twccli rm vds -id 376749 -f
```

</TabItem>

</Tabs>