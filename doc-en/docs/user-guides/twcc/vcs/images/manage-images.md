---
sidebar_position: 1
sidebar_label: 'Manage images'
slug: '/user-guides/twcc/vcs/manage-images'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-vds-manage-instance-image-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-vds-manage-instance-image-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage images


On the **VCS Instance Image Management** page, you can manage the images created by your project and those shared from other projects.

<br/>


## View image information

View the image information, such as ID, name, description, state, creation time, creator, etc.

:::info
The project number (e.g. `GOVxxxxxx-`) in front of the name indicates that the image is shared from that project.
:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **VCS Instance Image Management** page, you will see all the image information in the list, the latest created image will be listed on the top. After creation, wait for the state to change from **`QUEUED`** to **`ACTIVE`**, then you are able to use the image to create instances.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0e433efbd1c4cc5ad0f2a9116987ac93.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


**Command**


```bash
twccli ls vcs -snap [-all]      # View all images([-all]Tenant Admins only) 
                    [-s]        # View the image with a specific ID
```

:::info
1. The parameters in the square brackets **[ ]** are optional and the rest are required.
:::


<br/>

**Example**


- View the image state created from the VCS image with ID **`2580765 `**

```bash
twccli ls vcs -snap -s 2580765  
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9762c16e87a59a78efc40158b19911ae.png)

</TabItem>

</Tabs>


<br/>


## Share images and sharing management

TWCC provides cross-project sharing of VCS images. By sharing an image to a target project, a copy of an instance that has been customized and deployed can be shared. Thus, the same environment can be built across projects.

Also, you can copy instances from an old project to a new project using this feature.

:::info
- Only Tenant Admins, who are also the admins of the source and target projects, are allowed to share images to other target projects.
- Sharing of VCS instance images is supported, but sharing of Data Disk Snapshot is not.
- Sharing of licensed image files (e.g. Windows Server with license) across projects is not supported.
- The images shared by the source project can be used by all members of the target project to create instances.
> The shared images can only be used to create CPU instances, creating GPU instances is not yet supported.
- The images being shared and the shared images are independent of each other, with their storage usage calculated separately.
:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

**Share images**

* After entering the **Image Management** page, select an image file, click the menu button <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> on the right, and then select **Share**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dc4b70804c2ebccc80ee920eceb5450e.png)

* Select the project to share to (the target project to recieve the share) and the image name, click **OK** to jump to **Image Sharing Management** page for the sharing process.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3075e4d8218b4d1a195ee4fd6ddb0cb2.png)
    
:::info
By default, the image name has your project (source project) number in front of it, followed by the original image file name (editable), so that the members in the target project can easily recognize the source of the shared image.
:::

**Sharing Management**

Go to the **Image Sharing Management** page to view the name, target project, state and creation time of the shared images.

Once shared, the image state changes to **`approved`** (still in the process of sharing), and shows **`finished`** (sharing complete) after the sharing is over. Members in the target project can use the shared image to [Create custom instances](https://man.twcc.vip/en/docs/vcs/user-guides/creation/custom-instances).

![](https://i.imgur.com/vhE9VAy.png)

:::info
Only Tenant Admins can view their own (not project-wide) image file sharing information.
:::

:::tip
<details>

<summary>Quick Animation Tutorial<i class="fa fa-file-video-o" aria-hidden="true"></i></summary>

![](https://i.imgur.com/xWeCtYz.gif)

</details>
:::

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

<br/>

</TabItem>

</Tabs>

<br/>

## Delete images

:::caution

To ensure the instance can be created from the image completely, **please do not delete the image** if the  instance is in the **`Starting`** state.

:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* To delete images that are no longer needed, click the menu button <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> on the right of the image list, and then click **DELETE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3ba00508f220b04065c082fa4650b022.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI (Not yet supported)">

<br/>

</TabItem>

</Tabs>

<br/>



## Create instances from images

Please refer to [Create custom instances](https://man.twcc.vip/en/docs/vcs/user-guides/creation/custom-instances) to create a customized instance from the image created in the project or from an image shared by other projects.