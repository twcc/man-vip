---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-duplicate-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-duplicate-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Container Duplicate

With TWCC Interactive Container Duplicate, you are able to store the self-deployed container setting. After the container duplicate is created, you can share it with your project members. With this service, you only need to install all software once, then you are able to copy and deploy the same environment quickly.

Besides, the billing started when the container is created. When a container is no longer needed, you can duplicate it to store its settings and then delete it to reduce your cost and restore the container from the duplicate when you need it next time. Create a new container via duplicate when needed. It helps to cut costs. In addition, you can use container duplicates as disaster recovery for container damage.


:::caution
1. The scope of the container duplicate does not include the data in the default directories /home and /work of the container. Please note the package installation location before creating a duplicate. For the notice of installing the Python package, please refer to: [<ins>TWCC Interactive Container - Python package installation guide</ins>](https://man.twcc.ai/@twccdocs/ccs-intactv-howto-en).
2. When you store more than 10 GB of data in the container system directory (not /home or /work directory of [<ins>Hyper File System (HFS)</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-en)), the container duplicate might not be created normally.

If you have any problems, please contact our Technical Support or Customer Service, thank you!
:::

<br/>


## Create Interactive Container duplicate

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **CONFIGURATIONS** tab in the Interactive Container Details page, and click **DUPLICATE** button above.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3ed4d30e7290411cbe8fd008a855d698.png)



* Enter the tag of the container duplicate, then click OK.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c75703f1c8d7ecbe8af994b7df8b0e8f.png)




* After the container duplicate is created, it will appear in the list of Duplicate Management page. It takes a few minutes to finish the creation of container duplicate. At this time, the duplicate is in **`requested`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a97e0149d9c831ebc3fa43783d09c2e8.png)



* When the duplicate changes into **`resolved`** state a few minutes later, you can start using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1d29c55fe03349450820aee0fe3ef45.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Create the duplicate of the container with the container ID `934336`, and set the image tag *dup1*
```bash
twccli mk ccs -s 934336 -dup -tag dup1 
```

- View the state of submitted duplicate creation request

```bash
twccli ls ccs -dup
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3b392366c438096c660347681dd81ca7.png)

</TabItem>
</Tabs>

:::info
The container duplicate cannot be deleted after creating.
:::

<br/>


## Create a custom container from a duplicate

After duplicate is created, you can create a new container from a duplicate when needed.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **Interactive Container** from the service list, and click **+CREATE** on the **Interactive Container Management** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e8d9e8931b9a2e8a206be947bc4a6fbb.png)




* When choosing Image Type, click **Custom Image**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_542fc3fc532e4586083411b1f32f87f0.png)




* Fill in the basic information and the configuration of the container, and select the Custom Image you want to use, then click **NEXT: STORAGE>**. The other steps are the same as creating a Interactive container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_df4536c6c8fe2128b12afd136f646d01.png)


:::info
Members in the same project can share and use all duplicates, and you can see all duplicates in the image drop-down list.

:::

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">
- Create a container with the image type `Custom Image`, image configuration and tag `tensorrt-19.08-py3:dup1`, and name the duplicate as `dupcli`.

```bash
twccli ls ccs -img "Custom Image"
twccli mk ccs -itype "Custom Image" -img "tensorrt-19.08-py3:dup1" -n dupcli
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3310c270ae57370c22704b470cccbe60.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b2071ecdbafd5db2f98fbbf11b3e2ea.png)

</TabItem>
</Tabs>