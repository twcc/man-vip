---
sidebar_position: 2
title: 'Custom instances'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-create-custom-instance-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-create-custom-instance-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create custom instances

[**The VCS instance image**](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-en) enable you to repeatedly build the custom environment you deploy. Moreover, you can back up your instance by creating images to prevent data loss.

:::info
For the permission differences in VCS instance between Tenant Admins and Tenant Users, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務) for more information.
:::

<br/>


## Before we get started

- If you haven't sign up for a user account, please [sign up for TWCC](https://www.twcc.ai/) first.
- If you would like to operate with TWCC portal, please sign in to [TWCC portal ](https://www.twcc.ai/)first.
==**Need to update:exclamation:**==
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-2-%E5%AE%89%E8%A3%9DTWCC-CLI) first, and then [sign in](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99).


- [Create a VCS instance](https://man.twcc.ai/@twccdocs/guide-vcs-create-en), deploy working environment and create a instance [image file](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-en).

<br/>

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