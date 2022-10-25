---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-duplicate-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-duplicate-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Container Duplicate

With TWCC Interactive Container Duplicate, you are able to store the self-deployed container setting. After the container duplicate is created, all project members can share it. With this service, all software requires only one installation, providing you with the convenience of quickly copying and deploying the same environment.

Moreover, since billing starts when a container is created, if a container is no longer needed, you can duplicate it to store its settings, then delete it to reduce your cost and restore the container from the duplicate on the next time you need it. In addition, you can use container duplicates as a disaster recovery for container damage.

:::caution
1. The scope of the container duplicate does not include the data in the default directories /home and /work of the container. Please note the installation location of the packages before creating a duplicate. Python package installation notes can be found at [<ins>Python package installation guide</ins>](https://man.twcc.vip/en/docs/ccs/tutorials/python-package-installation-guide).
2. When you store more than 10 GB of data in the container system directory (not /home or /work directory of [<ins>Hyper File System (HFS)</ins>](https://man.twcc.vip/en/docs/hfs/intro)), the container duplicate might not be created normally.<br/>
You can check used capacity of the container system catalog `/` by entering the command `df -h`.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eeeecf274c536f0c7c8ce65c910ec9a5.png)<br/>
If there are any questions, please contact our Technical Support or Customer Service, thank you!
:::

<br/>


## Create Interactive Container duplicate

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **CONFIGURATIONS** tab in the Interactive Container Details page, and click **DUPLICATE** button above.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9ffc1c5c98c6699cba4035298982d1bf.png)

* Enter the tag of the container duplicate, then click OK.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_68385ca6ce0edbb15e95eca687d23386.png)

* After the container duplicate is created, it will appear in the list of Duplicate Management page. It takes a few minutes to finish the creation of container duplicate. At this time, the duplicate is in **`requested`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_37224305b2932aa939c56b73f3916cc4.png)

* After a few minutes, you can start using it when the copy status becomes **`resolved`**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b54cc67e44d7a70bc8362dbfd54ba5d.png)

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
A container duplicate cannot be deleted after creation.
:::

<br/>


## Create a custom container from a duplicate

After duplicate is created, you can create a new container from a duplicate when needed.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

* Click **Interactive Container** from the service list, and click **+CREATE** on the **Interactive Container Management** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cfc90926e6b53aeb734b33330124c1ed.png)

* When choosing Image Type, click **Custom Image**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51b0dc0c9c2ce78b2188df05447e050f.png)

* Fill in the basic information and hardware configuration of the container, and select the Custom Image you want to use, then click **NEXT: STORAGE>**. The other steps are the same as creating a Interactive container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47b3a134896b78a44dbae3d878dff1c3.png)

:::info
Duplicates can be shared among members of the same project. All duplicates of the project can be found in the image drop-down list.
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