---
sidebar_position: 2
title: 'View info, edit description'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-view-and-edit-instance-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-view-and-edit-instance-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View information, edit description

Once VCS instances are created, you can view the instance information or edit the description in the following ways.


:::info
For the differences of permissions in VCS instance between Tenant Admins and Tenant Users, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務) for more information.
:::

<br/>


## View instance information

View instance's ID, name, public/private IP address, state, creation time, creator, image version, resource ratio, key pair, network connection, storage,... and other information.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **VCS Instance Management** page, you can view the list information of all created instances: **ID**, **Name**, **Public IP**, **State**, **Created at** and **Created by**.
* Enter keywords in the **Search** column to filter out the results that meet the specific criteria in the column of the list.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2e0c048d62bfeb71574d268dd42ddb03.png)


:::tip
The last created instance is listed at the top. Click the column name at the top to change the order.
:::

- Select an instance and access the **VCS Instance Details** page to view more detailed information: **Basics**, **Details**, **Networks & Connection**, **Storage (Data Disk)**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cfcab413d832e81aa8729be0de6083f7.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View instance's ID, name, creation time, and state.

```
twccli ls vcs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b59214e6a5aa3939d5e679b2b43761eb.png)

- View all VCS instances under the project **(Tenant Admins only)**

```bash
twccli ls vcs -all
```

</TabItem>

</Tabs>

<br/>


## Edit description

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **VCS Instance Details** page, click "<i class="fa fa-pencil" aria-hidden="true"></i>" to edit or add a description for the VCS instance so that you can distinguish it from other instances.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_45e2bcecf48c8eb635f475cbc2689a4c.png)


- Select an instance and access the **VCS Instance Details** page to view more detailed information: **Basics**, **Details**, **Networks & Connection**, **Storage (Data Disk)**.



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cfcab413d832e81aa8729be0de6083f7.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>