---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-manage-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-manage-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage your container

After the container is created, you can view the container information or delete the container by the following ways.

:::info
For the difference in functional privileges between the Tenant admins and Tenant Users using TWCC, please refer to [<ins>User permissions comparison</ins>](https://man.twcc.ai/@twccdocs/role-main-en).
:::

<br/>


## View information

View information such as container ID, name, public IP, state, creation time, creator, image, basic configuration, log, network, storage, etc.

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- In **Interactive Container Management** page, you can view the basic information.
- You can also click on a specific container and enter the **Interactive Container Details** page to view more container information.

![](https://i.imgur.com/7DpbJuA.png)

- Enter the **CONFIGURATIONS** tab of Interactive Container Details, you can view basic information, network, storage and other information of the container, or connect to the container.
- Also, you can perform functions such as **Image**, **Delete**, **Refresh** and view **Container Log**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e4a812d099355186aa618e3fd462c0c8.png)


:::caution
- The "Container Logs" feature cannot ensure that all your logs are saved and available after the container stops running. It is recommended for you to save your logs to [TWCC HFS](https://man.twcc.vip/en/docs/hfs/intro) or upload them to [TWCC COS](https://man.twcc.vip/en/docs/cos/intro) to ensure record availability.
- If you would like TWCC maintenance staff to assist you in obtaining the complete records, please write to us (isupport@twcc.io) to authorize processing and do not store sensitive data.
:::

<br/>

:::info
If "Deletion Protection" is enabled, before deleting a resource, you need to disable the protection mechanism before continuing the deletion process, which can prevent the resource from being deleted by mistake and causing service interruption.
![](https://i.imgur.com/vfuSZhT.gif)
:::

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View container ID, name, creation time, and state.

```bash
twccli ls ccs
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8c56a8a4bafb8fd5ee6b4913dc5d9c86.png)

- View all the containers in the project. **(Tenant Admins only)**
    
```bash
twccli ls ccs -all
```

</TabItem>

</Tabs>

<br/>

## Delete the container

If the container is no longer in use, we suggest you delete it to save costs.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- On the **Interactive Container Management** page, click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>  on the right side of the container, then click **DELETE** to delete the container.
- Or select single or multiple containers at once, and click **DELETE** above to delete the containers.

![](https://i.imgur.com/BXrhRj0.png)


- Also, you can delete the container by clicking **DELETE** in the **Interactive Container Details** page.

![](https://i.imgur.com/t4sXIuZ.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Delete the container with ID `934369`

```bash
twccli rm ccs -s 934369
```

</TabItem>
</Tabs>

<br/>

:::info
If [delete protection](#view-information) is enabled, the resource cannot be deleted directly, please close it first and then delete the resource.
:::