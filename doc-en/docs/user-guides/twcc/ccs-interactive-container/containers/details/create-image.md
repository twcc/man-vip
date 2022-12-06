---
sidebar_position: 2
sidebar_label: 'Create an image'
slug: '/user-guides/twcc/ccs-interactive-container/create-image'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-port-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-port-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an container image


:::caution
1. The scope of the container image does not include the data in the default directories /home and /work of the container. Please note the installation location of the packages before creating a image. Python package installation notes can be found at [<ins>Python package installation guide</ins>](https://man.twcc.vip/en/docs/ccs/tutorials/python-package-installation-guide).
2. When you store more than 10 GB of data in the container system directory (not /home or /work directory of [<ins>Hyper File System (HFS)</ins>](https://man.twcc.vip/en/docs/hfs/intro)), the container image might not be created normally.<br/>
You can check used capacity of the container system catalog `/` by entering the command `df -h`.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eeeecf274c536f0c7c8ce65c910ec9a5.png)<br/>
If there are any questions, please contact our Technical Support or Customer Service, thank you!
:::

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **CONFIGURATIONS** tab in the Interactive Container Details page, and click **image** button above.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9ffc1c5c98c6699cba4035298982d1bf.png)

* Enter the tag of the container image, then click OK.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_68385ca6ce0edbb15e95eca687d23386.png)

* After the container image is created, it will appear in the list of image Management page. It takes a few minutes to finish the creation of container image. At this time, the image is in **`requested`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_37224305b2932aa939c56b73f3916cc4.png)

* After a few minutes, you can start using it when the image state becomes **`resolved`**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b54cc67e44d7a70bc8362dbfd54ba5d.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Request to create the image of the container with the container ID `934336`, and set the image tag to *dup1*.

```bash
twccli mk ccs -s 934336 -dup -tag dup1 
```

- View the state of submitted image creation request.

```bash
twccli ls ccs -dup
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3b392366c438096c660347681dd81ca7.png)

</TabItem>
</Tabs>

:::info
A container image cannot be deleted after creation.
:::

<br/>