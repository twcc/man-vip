---
sidebar_position: 2
sidebar_label: 'Custom container'
slug: '/user-guides/twcc/ccs-interactive-container/create-custom-container'
sync_original_production: '' 
sync_original_preview: '' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a custom container from an image

After image is created, you can create a new container from an image when needed.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to [Interactive Container Management](/user-guides/twcc/ccs-interactive-container/containers/manage-containers.md) page, and click **＋CREATE**.

![](https://i.imgur.com/Cp7Bvz9.png)

* When choosing Image Type, click **Custom Image**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51b0dc0c9c2ce78b2188df05447e050f.png)

* Fill in the basic information and hardware configuration of the container, and select the Custom Image you want to use, then click **NEXT: STORAGE>**. The other steps are the same as creating a Interactive container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47b3a134896b78a44dbae3d878dff1c3.png)

:::info
images can be shared among members of the same project. All images of the project can be found in the image drop-down list.
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