---
sidebar_position: 3
title: 'Manage images'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-manage-instance-image-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-manage-instance-image-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage images

## View image information

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **VCS Instance Image Management** page, you will see all the image information in the list, the latest created image will be listed on the top. After creation, wait until the image enters in **`ACTIVE`** state, then you are able to use the image to create instances.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_24e83fb4b857b5d94278312fd409bb13.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**Commands**

```bash
twccli ls vcs -snap [-all]      # View all images([-all]Tenant Admins only) 
                    [-s]        # View the image with a specific ID
```

:::info
1. The square brackets **[ ]** indicate optional parameters, and the rest are required parameters.
:::

<br/>

**Examples**

- View the image state created from the VCS image with ID **`918628`**
```bash
twccli ls vcs -snap -s 918628  
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19ffc79130c118e2642598005944ffa5.png)

</TabItem>

</Tabs>

<br/>


## Delete images

:::caution

To ensure an instance can be created from an image completely, **please do not delete the image** if the  instance is in the **`Starting`** state.

:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* To delete images that are no longer needed, click the <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button on the right of the image list, and then click **DELETE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3ba00508f220b04065c082fa4650b022.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

<br/>


## Create instances from images

For more information about creating instances from images, see [Create custom instance](https://man.twcc.ai/@twccdocs/guide-vcs-create-custom-instance-en).