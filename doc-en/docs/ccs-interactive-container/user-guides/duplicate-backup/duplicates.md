---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-image-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-image-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Interactive Container image

TWCC provides a variety of optimized container images for NGC AI computation, and also provides the ability to save custom images you have deployed by yourself. All project members can share them. With this service, all software requires only one installation, providing you with the convenience of quickly copying and deploying the same environment.

Moreover, since billing starts when an interactive container is created, if a container is no longer needed, you can use image to store its settings, then delete it to reduce your cost and restore the container from the image on the next time you need it. In addition, you can use container images as a disaster recovery for container damage.

:::info
About detailed description, please refer to [<ins>TWCC Container Image overview</ins>](/docs/ccs-interactive-container/concepts/container-images.md)。
:::

:::caution
1. The scope of the custom image does not include the data in the default directories /home and /work of the container. Please note the installation location of the packages before creating an image. Python package installation notes can be found at [<ins>Python package installation guide</ins>](https://man.twcc.vip/en/docs/ccs/tutorials/python-package-installation-guide).
2. When you store more than 10 GB of data in the container system directory (not /home or /work directory of [<ins>Hyper File System (HFS)</ins>](https://man.twcc.vip/en/docs/hfs/intro)), the container image might not be created normally.<br/>
You can check used capacity of the container system catalog `/` by entering the command `df -h`.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eeeecf274c536f0c7c8ce65c910ec9a5.png)<br/>
If there are any questions, please contact our Technical Support or Customer Service, thank you!
:::

<br/>


## Create Image

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **CONFIGURATIONS** tab in the Interactive Container Details page, and click **IMAGE** button above.

![](https://i.imgur.com/f3HRAXg.png)

* Enter the tag of the container image, then click OK.

![](https://i.imgur.com/cEGjEsl.png)

:::info
If an image has a duplicate tag name, it will overwrite the original completed image and refresh the last update time on the Image Management page.
:::

* After the container image is created, it will appear in the list of Image Request History. It takes a few minutes to finish the creation of container image. At this time, the request status shows **`requested`**.

![](https://i.imgur.com/0IUEcsd.png)

* After a few minutes, you can start using it when the request status becomes **`resolved`**.

![](https://i.imgur.com/HxvQyQa.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Request to create the duplicate of the container with the container ID `934336`, and set the image tag to *dup1*.

```bash
twccli mk ccs -s 934336 -dup -tag dup1 
```

- View the state of submitted duplicate creation request.

```bash
twccli ls ccs -dup
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3b392366c438096c660347681dd81ca7.png)

</TabItem>
</Tabs>

:::info
You can only view your own history on the Image Request History page.
:::

<br/>

## Container Management

After the custom image is created, you can go to the Image Management page to view image information or delete image you no longer use.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

**View Information**

* Click **Interactive Container** from the Services list, and click **Image** on the left side to enter **Image Management** page.
* You can view image information on this page, including name, tag, size, last updated time, and last retrieved time.

![](https://i.imgur.com/zyIIEFe.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI (TBD)">

</TabItem>
</Tabs>

:::info

- Last Updated time: If an image has a duplicate tag name, it will overwrite the original completed image and refresh this time.
- Last Retrieved time: The time of taking image to create a container.

:::

<br/>

## Create a custom container by image

After image is created, you can create a new container from an image when needed.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **Interactive Container** from the service list, and click **+CREATE** on the **Interactive Container Management** page.

![](https://i.imgur.com/ibeJvnf.png)

* When choosing Image Type, click **Custom Image**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51b0dc0c9c2ce78b2188df05447e050f.png)

* Fill in the basic information and hardware configuration of the container, and select the Custom Image you want to use, then click **NEXT: STORAGE>**. The other steps are the same as creating a Interactive container.

![](https://i.imgur.com/EnU3FJd.png)

:::info
Images can be shared among members of the same project. All container images of the project can be found in the image drop-down list.
:::

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Create a container with the image type `Custom Image`, image configuration and tag `tensorrt-19.08-py3:dup1`, and name the image as `dupcli`.

```bash
twccli ls ccs -img "Custom Image"
twccli mk ccs -itype "Custom Image" -img "tensorrt-19.08-py3:dup1" -n dupcli
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3310c270ae57370c22704b470cccbe60.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b2071ecdbafd5db2f98fbbf11b3e2ea.png)

</TabItem>
</Tabs>