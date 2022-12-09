---
sidebar_position: 2
sidebar_label: 'View, edit, and deletion protection'
slug: '/user-guides/twcc/vcs/instances/details/view-edit-instance'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-view-and-edit-instance-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-view-and-edit-instance-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View information, edit description, enable/disable deletion protection

Once VCS instances are created, you can view the instance information or edit the description in the following ways.


:::info
For the permission differences in VCS instance between Tenant Admins and Tenant Users, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twsdocs/role-main-en).
:::


<br/>



## View instance information

View instance information, such as ID, name, public/private IP address, state, creation time, creator, image version, resource ratio, key pair, network connection, storage, etc.


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **VCS Instance Management** page, you can view the list information of all created instances: **ID**, **Name**, **Public IP**, **State**, **Created at** and **Created by**.
* Enter keywords in the **Search** bar to filter out the results that meet the specific criteria in the column of the list.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0bdf6736998dd9ff224af6446b701b6f.png)

:::tip
The last created instance is listed at the top. Click the column name at the top to change the order.
:::

- Select the instance to access the **VCS Instance Details** page and view more detailed information: **Basics**, **Details**, **Networks & Connection**, **Storage (Data Disk)**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6512eb2ff1407821e0441d1a8b18ff33.png)


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

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6cf5ae0cbe3310d2062955f27f01b489.png)

- Enter the **VCS Instance Details** page to view more detailed information: **Basics**, **Details**, **Networks & Connection**, **Storage (Data Disk)**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6512eb2ff1407821e0441d1a8b18ff33.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

<br/>


## Enable/disable deletion protection


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Enter the **VCS Instance Details** page and click to **Enable** or **Disable** Deletion Protection mechanism.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ddb0c0c2fc3498fc2d88ee4ddd751a7.png)

:::info
If "Deletion Protection" is enabled, before deleting a resource, you need to disable the protection mechanism before continuing the deletion process, which can prevent the resource from being deleted by mistake and causing service interruption.
:::

:::tip
<details>

<summary>Quick Animation Tutorial<i class="fa fa-file-video-o" aria-hidden="true"></i></summary>

![](https://i.imgur.com/8v36pAf.gif)

</details>
:::

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>