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
For the difference between Tenant Admin and Tenant User's permission of Interactive Container, please refer to [<ins>Comparison of role permissions of TWCC</ins>](https://man.twcc.ai/@twccdocs/role-main-ㄍen/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#%E9%96%8B%E7%99%BC%E5%9E%8B%E5%AE%B9%E5%99%A8)。
:::



## View the information

View the Container ID, name, public IP, state, creation time, creator, image, basic configuration, log, network, storage,...and other information.



<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- In **Interactive Container Management** page, you can view the basic information.
- You can also click on a specific container and enter the **Interactive Container Details** page to view more container information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_32c67123f253997fe56e8bb537d56601.png)



- Enter the **CONFIGURATIONS** tab of Interactive Container Details, you can view the basic information, network, storage and other information of the container, and connect to the container.
- Also, you can perform functions such as **Duplicate**, **Delete**, **Refresh** and view **Container Log**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_931ee9a65ca77b046972278f6d2c02f0.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View container ID, name, creation time, and state..

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


## Delete the container

If the container is no longer in use, we suggest deleting the container to reduce costs.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- On the **Interactive Container Management** page, click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>  on the right side of the container, then click **DELETE** to delete the container.
- Or select single or multiple containers at once, and click **DELETE** above to delete the containers.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b3abee1329c47dbd92156cecb3d83e95.png)


- In addition, you can also delete the container by clicking **DELETE** in the **Interactive Container Details** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7fe8c7f2b599f604e198780abca4086b.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Delete the container with ID `934369`

```bash
twccli rm ccs -s 934369
```

</TabItem>
</Tabs>