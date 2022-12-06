---
sidebar_position: 5
title: 'Create a disk snapshot'
sidebar_label: 'Create a disk snapshot'
slug: '/user-guides/twcc/vcs/vds/create-data-disk-snapshot'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vds-disk-snapshot-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vds-disk-snapshot-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Disk snapshots

To backup data in your data disks, please refer to the following steps to create and manage data disk snapshots.<br/>
(※ *The system disk currently does not support the snapshot function. For backing up system disks, please refer to "Virtual Compute Service (VCS) Instance image"* )


:::info
For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-storage-en#%E8%99%9B%E6%93%AC%E7%A3%81%E7%A2%9F%E6%9C%8D%E5%8B%99).
:::


<br/>


## Create a snapshot

Create a snapshot of your data disk to back up your data.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* On **Data Disk Details** page, click **SNAPSHOT**. When **Create Snapshot** window pops up, enter the name and description for the snapshot, then click **OK** to create the snapshot.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8437022d472a83e69f231125184ab20f.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>


<br/>

