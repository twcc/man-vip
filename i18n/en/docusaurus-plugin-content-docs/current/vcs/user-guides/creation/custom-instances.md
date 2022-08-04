---
sidebar_position: 2
title: '客製化個體'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create custom instances

[**The VCS instance image**](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-en) enable you to repeatedly build the custom environment you deploy. Moreover, you can back up your instance by creating images to prevent data loss.

:::info
For the permission differences in VCS instance between Tenant Admins and Tenant Users, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務) for more information.
:::


{%hackmd @twccdocs/chunk-before-you-begin-en %}
- [Create a VCS instance](https://man.twcc.ai/@twccdocs/guide-vcs-create-en), deploy working environment and create a instance [image file](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-en).

## Create a custom instance

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

Select an **Image** (`(private)xxx, xxx is your custome image file name`) to restore your VCS instance. For detailed instance creation steps, see [<ins>Create VCS instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en) for more information.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e74b4ded9d10e0d25915f857d6039197.png)



</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>

:::caution
To ensure an instance can be created from an image completely, **do not delete the image** when the instance is in the **`Starting`** state.
:::