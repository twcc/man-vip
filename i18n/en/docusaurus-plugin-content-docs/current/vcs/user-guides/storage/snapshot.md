---
sidebar_position: 5
title: 'Disk snapshots'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vds-disk-snapshot-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vds-disk-snapshot-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Disk snapshots

To backup data in your data disks, please follow the steps to create and manage data disk snapshots.
(※ *The system disk currently does not support the snapshot function. For backing up system disks, please refer to "Virtual Compute Service (VCS) Instance image"* )


:::info
For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-en#%E8%99%9B%E6%93%AC%E7%A3%81%E7%A2%9F%E6%9C%8D%E5%8B%99).
:::

<br/>

## Create a snapshot

Create a snapshot of your data disk to back up your data.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* On **Data Disk Details** page, click **SNAPSHOT**. When **Create Snapshot** window pops up, enter a name and description for the snapshot, then click **OK** to create the snapshot.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8437022d472a83e69f231125184ab20f.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

<br/>


## View a snapshot

View ID, name, created time, creator and other information of the snapshot.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Enter **Data Disk Snapshot Management** page, you will see all the snapshot information in the list, including **ID**, **snapshot name**, **source disk name**, **snapshot state**, **created time** and **creator**. The last created snapshot will be listed at the top. Click the column name to sort or change the sort by the column value.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_34b936c59f84cfc3e8c1670e9800db45.png)



* Enter keywords in the **search bar** to filter out the results that meet the filter criteria of the list.


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

<br/>


## Delete a snapshot

:::caution

Once the snapshot is deleted, the data cannot be restored!

:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Enter **Data Disk Snapshot Management** page> select the snapshot> click **DELETE** at the top to delete the snapshot.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0e5ccd941ef7943645d088a96e734f98.png)


* Or click the <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button then click **DELETE** to delete the snapshot.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>