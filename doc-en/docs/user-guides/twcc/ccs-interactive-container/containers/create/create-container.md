---
sidebar_position: 1
sidebar_label: 'Interactive container'
slug: '/user-guides/twcc/ccs-interactive-container/create-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-create-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-create-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an interactive container

You can create an interactive container with the default setting using a single command, or choose a container type according to your needs.

For the detailed information of container types (including the number of GPUs and other resource sizes), please refer to [TWCC Pricing](/pricing.mdx/#container-compute-service-ccs)。

<br/>

## Before we get started

- If you haven't sign up for a user account, please [sign up for TWS](/user-guides/tws-member-center/manage-member-accounts/sign-up-for-tws.md) first.
- If you would like to operate with TWCC portal, please first sign in to [TWCC portal](https://tws.twcc.ai/), and go to [Interactive Container Management](/user-guides/twcc/ccs-interactive-container/containers/manage-containers.md) page.
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://github.com/twcc/TWCC-CLI) first, and then [sign in](https://github.com/twcc/TWCC-CLI).

<br/>

## Create an interactive container


<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to [Interactive Container Management](/user-guides/twcc/ccs-interactive-container/containers/manage-containers.md) page, and click **＋CREATE**.

![](https://i.imgur.com/Cp7Bvz9.png)

* Choose Image Type: You can browse and select the deep learning framework optimized by NGC, or directly search for the name of the framework in the search bar (e.g. PyTorch, TensorFlow...).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8a53c677b248ea69b8d219cbc5f34464.png)

:::tip
1. For the NGC container image type, version and packages provided by TWCC, please refer to [<ins>Container Images</ins>](/user-guides/twcc/ccs-interactive-container/images/overview.md).
2. After the first selection, system would record and display the image in **Recent Used** block to speed up your next selection. (Clearing the browser history will also clear this record.)
:::

* Fill in the basic information and configuration of the container, then click **NEXT : STORAGE>**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a0576b404533e0480a3f35fafe23e18.png)

:::info
If "Deletion Protection" is enabled, before deleting a resource, you need to disable the protection mechanism before continuing the deletion process, which can prevent the resource from being deleted by mistake and causing service interruption.
:::

* The system will automatically attach the two directories (/home and /work) of the Hyper File System (HFS) to the container after creation for better performance when running AI computing. In addition, TWCC Cloud Object Storage is another storage option.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_71287b579154f911fb08860a9746be0e.png)

* Then click **NEXT : ENVIRONMENT VARIABLES>** to set the environment variables that meet your needs. For detailed explanation and setting examples, please refer to [<ins>Setting Environment Variables</ins>](https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-en).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_78faad93eaa1e43c081cfd1200daf530.png)

* Click **NEXT : REVIEW&CREATE>** to check the configuration and price of the container. Then, click **CREATE** to confirm the creation.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_37022fcab3b07a9daacc61f124e1d850.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c6ee8a809e952616c123a93f50670333.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

**Command**

```bash
twccli mk ccs [-n]      # Name of the container
              [-itype]  # Image type
              [-img]    # Image version
              [-gpu]    # Number of GPUs(Pcs)
              [-envk]   # Environment variables key
              [-envv]   # Environment variables value
```
:::info
If you do not input any parameters, the container will be created with the default settings:

| Image type, Image | Name of container |Container type|
| -------- | -------- | -------- |
| TensorFlow (latest environment)    | twcc-cli     | c.super (1 GPU + 04 cores + 90 GB memory) |

For detailed explanation and setting examples, please refer to [<ins>Setting Environment Variables</ins>](https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-en).
:::

<br/>

**Example**

- Create a container with the name **`cusccs`**, image type **`Caffe2`**, image version **`caffe2-18.08-py3-v1:latest`**, and GPU quantity **`2`**.

```bash
twccli mk ccs -itype "Caffe2" -img "caffe2-18.08-py3-v1:latest" -gpu 2 -n cusccs
```

:::caution
- Container name requirements: It must be **consist of lowercase letters or numbers, the first character must be a lowercase letter, and be 6-16 characters long.**
- If the setting does not meet the above requirements, the following error message will appear:
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095834bd7ee5d99d3a70596a7c462629.png)
:::

<!-- :::spoiler 操作範例截圖(點我)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_753112dc54b2646270806ad6385277ba.png)
::: -->

</TabItem>
</Tabs>

---

:::info
1. For more information about the images, please refer to [<ins>TWCC Container Image</ins>]/user-guides/twcc/ccs-interactive-container/images/overview.md).
2. For more information about the container types, resource ratio and pricing, please refer to [<ins>TWCC Pricing</ins>](/pricing.mdx/#container-compute-service-ccs).
3. If **available memory capacity** of containers is calculated in GiB (1 GiB =  2<sup>30</sup> bytes), take c.super as an example, its available memory capacity will be 84 GiB. For more information, please refer to [<ins>Memory capacity conversion</ins>](/concepts-tutorials/twcc/ccs-interactive/concepts/container-memory-capacity-conversion.md) for more details.
:::

:::caution
1. To keep the data intact, please store the important data in the Hyper File System (HFS) rather than container disks.
2. **After the container is created, it will continue to be billed until you delete it.**
:::

:::info **Related documents** 
- <a href="/docs/user-guides/twcc/cos"><ins>Cloud Object Storage (COS)</ins></a>, <a href="/docs/user-guides/twcc/hfs"><ins>Hyper File System (HFS)</ins></a>
:::