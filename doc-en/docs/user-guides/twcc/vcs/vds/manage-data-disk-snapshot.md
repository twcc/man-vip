---
sidebar_position: 5
sidebar_label: 'Snapshots'
slug: '/user-guides/twcc/vcs/vds/manage-data-disk-snapshot'
sync_original_production: '' 
sync_original_preview: '' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage data disk snapshots

Once you finish [creating a data disk](/docs/user-guides/twcc/vcs/vds/create-disks) you can perform following actions on the **Data Disk Snapshot Management** page.

## View a snapshot

View snapshot information such as ID, name, created time, and creator, etc.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to **Data Disk Snapshot Management** page, you will see all the snapshot information in the list, including **ID**, **snapshot name**, **source disk name**, **snapshot state**, **created time** and **creator**. The last created snapshot will be listed at the top. Click the column name to sort or change the sort by the column value.


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


* Or click the menu button &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; then click **DELETE** to delete the snapshot.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>