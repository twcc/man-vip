---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-create-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-create-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an Interactive Container

You can create an interactive container with one command with the default setting, or choose a container type according to your needs.

For the detailed information of container types (including the number of GPUs and other resource sizes), see [TWCC Pricing](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS)。

<br/>

## Before we get started

- If you haven't sign up for a user account, please [sign up for TWCC](https://www.twcc.ai/) first.
- If you would like to operate with TWCC portal, please sign in to [TWCC portal ](https://www.twcc.ai/)first.
==**Need to update:exclamation:**==
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-2-%E5%AE%89%E8%A3%9DTWCC-CLI) first, and then [sign in](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99).

<br/>

## How to an create Interactive Container?


<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- Click **Interactive Container** in the service list. Then on the **Interactive Management page**, click **＋CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c40df078ec48ab4db3d060f52d37d092.png)





* Choose Image Type: You can browse and select the deep learning framework optimized by NGC, or directly search for the name of the framework in the serch bar (e.g., PyTorch, TensorFlow...).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_23125243882198a14175e08601869bf1.png)


:::tip
1. For the NGC container image type, version and package provided by TWCC, please refer to [<ins>Container Images</ins>](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-en).
2. After the first using, system would record and display the image in **Recent Used** block to speed up your next using.(It will record again after cleaning the browsing history).
:::



* Fill in the basic information and configuration of the container, then click **NEXT: STORAGE>**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_91c7749e6f67f44a67078c4c750e93a5.png)



* The system will automatically attach the two directories (/home and /work) of the Hyper File System (HFS) to the container after container creation, so that users can have better performance when running AI computing. In addition, TWCC Cloud Object Storage is another storage option.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d96575f28a9915d5dd3ed4645ab9598.png)


* Click **NEXT：REVIEW&CREATE>** to check the configuration and price of the container. Then, click **CREATE** to confirm the creation.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f2f1cdd63021d046ab2b6450dba1ca19.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

<br/>

**Command**

```bash
twccli mk ccs [-n]      # Name of container
              [-itype]  # Image type
              [-img]    # Image version
              [-gpu]    # Number of GPUs(Pcs)
```
:::info
If you do not input any parameters, the container will be created with the default settings:

| Image type, Image | Name of container |Container type|
| -------- | -------- | -------- |
| TensorFlow (latest environment)    | twcc-cli     | c.super (1 GPU + 04 cores + 90 GB memory) |

<br/>

**Example**

- Create a container named **`cusccs`**, with the image type **`Caffe2`**, and image version **`caffe2-18.08-py3-v1:latest`**, and the number of GPUs is **`2`**.

```bash
twccli mk ccs -itype "Caffe2" -img "caffe2-18.08-py3-v1:latest" -gpu 2 -n cusccs
```

:::caution

- Container name requirements: It must be **6-16 characters in length** and must contains **lowercase letters or numbers**, and **the first character must be a lowercase letter.**.
-  If the settings do not meet the above requirements, the following error message will appear:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095834bd7ee5d99d3a70596a7c462629.png)

:::

<!-- :::spoiler 操作範例截圖(點我)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_753112dc54b2646270806ad6385277ba.png)
::: -->

</TabItem>
</Tabs>

---

:::info
1. For more information about the images, see [<ins>TWCC Container Image</ins>](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-en).
2. For more information about the container types, resource ratio and pricing, see [<ins>TWCC Pricing</ins>](https://www.twcc.ai/doc?page=price#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS).
3. If **available memory capacity** of containers is calculated in GiB (1 GiB =  2<sup>30</sup> bytes), take c.super as an example, its available memory capacity will be 84 GiB. For more information, see [<ins>Memory capacity conversion</ins>](https://man.twcc.ai/@twccdocs/concept-ccs-memory-conversion-en) for more details.
:::

:::caution
1. To keep the data intact, please store the important data in the Hyper File System (HFS) rather than container disks.
2. **After the container is created, you will continue to incur charges until you delete it.**。
:::

:::info **Related documents** 
- <a href="https://man.twcc.ai/@twccdocs/doc-cos-main-zh"><ins>Cloud Object Storage (COS)</ins></a>, <a href="https://man.twcc.ai/@twccdocs/doc-hfs-main-zh"><ins>Hyper File System (HFS)</ins></a>
:::