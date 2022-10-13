---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-create-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-create-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an Interactive Container

You can create an interactive container with the default setting using a single command, or choose a container type according to your needs.

For the detailed information of container types (including the number of GPUs and other resource sizes), please refer to [TWCC Pricing](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS)。

<br/>

## Before we get started

- If you haven't sign up for a user account, please [sign up for TWCC](https://www.twcc.ai/) first.
- If you would like to operate with TWCC portal, please sign in to [TWCC portal](https://www.twcc.ai/) first.
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-2-%E5%AE%89%E8%A3%9DTWCC-CLI) first, and then [sign in](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99).

<br/>

## Create Interactive Container


<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- Click **Interactive Container** from the service list, and then click "**＋CREATE**" on the "**Interactive Management page**" page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c40df078ec48ab4db3d060f52d37d092.png)

* Choose Image Type: You can browse and select the deep learning framework optimized by NGC, or directly search for the name of the framework in the search bar (e.g. PyTorch, TensorFlow...).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8a53c677b248ea69b8d219cbc5f34464.png)

:::tip
1. For the NGC container image type, version and packages provided by TWCC, please refer to [<ins>Container Images</ins>](https://man.twcc.vip/en/docs/ccs_framwork_image/intro).
2. After the first selection, system would record and display the image in **Recent Used** block to speed up your next selection. (Clearing the browser history will also clear this record.)
:::

* Fill in the basic information and configuration of the container, then click "**NEXT : STORAGE>**".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a0576b404533e0480a3f35fafe23e18.png)

:::info
If "Deletion Protection" is enabled, before deleting a resource, you need to disable the protection mechanism before continuing the deletion process, which can prevent the resource from being deleted by mistake and causing service interruption.
:::

* The system will automatically attach the two directories (/home and /work) of the Hyper File System (HFS) to the container after creation for better performance when running AI computing. In addition, TWCC Cloud Object Storage is another storage option.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_71287b579154f911fb08860a9746be0e.png)

* Then click "**NEXT : ENVIRONMENT VARIABLES>**" to set the environment variables that meet your needs. For detailed explanation and setting examples, please refer to [<ins>Setting Environment Variables</ins>](https://man.twcc.vip/en/docs/ccs/tutorials/add-python3-kernel-to-jupyter-notebook).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_78faad93eaa1e43c081cfd1200daf530.png)

* Click "**NEXT : REVIEW&CREATE>**" to check the configuration and price of the container. Then, click "**CREATE**" to confirm the creation.

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

For detailed explanation and setting examples, please refer to [<ins>Setting Environment Variables</ins>](https://man.twcc.vip/en/docs/ccs/tutorials/add-python3-kernel-to-jupyter-notebook).
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
1. For more information about the images, please refer to [<ins>TWCC Container Image</ins>](https://man.twcc.vip/en/docs/ccs_framwork_image/intro).
2. For more information about the container types, resource ratio and pricing, please refer to [<ins>TWCC Pricing</ins>](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS).
3. If **available memory capacity** of containers is calculated in GiB (1 GiB =  2<sup>30</sup> bytes), take c.super as an example, its available memory capacity will be 84 GiB. For more information, please refer to [<ins>Memory capacity conversion</ins>](https://man.twcc.ai/@twccdocs/concept-ccs-memory-conversion-en) for more details.
:::

:::caution
1. To keep the data intact, please store the important data in the Hyper File System (HFS) rather than container disks.
2. **After the container is created, it will continue to be billed until you delete it.**
:::

:::info **Related documents** 
- <a href="https://man.twcc.vip/en/docs/cos/intro/"><ins>Cloud Object Storage (COS)</ins></a>, <a href="https://man.twcc.vip/en/docs/hfs/intro/"><ins>Hyper File System (HFS)</ins></a>
:::