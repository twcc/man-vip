---
sidebar_position: 2
title: 'Custom instances'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-create-custom-instance-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-create-custom-instance-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a custom instance

Once you create a TWCC virtual computing environment, you can access it to deploy the tools you need, create your own custom environment, and create an [**VCS instance image**](https://man.twcc.vip/en/docs/vcs/user-guides/backup/creation) to save your working environment so that you can create the same custom environment over and over again, or as a backup measure to avoid losing your personal settings.

:::info
For the permission differences in VCS instance between Tenant Admins and Tenant Users, please refer to [<ins>User permissions comparison</ins>](https://man.twcc.ai/@twccdocs/role-main-en).
:::

<br/>


## Before we get started

- If you haven't sign up for a user account, please [sign up for TWCC](https://www.twcc.ai/) first.
- If you would like to operate with TWCC portal, please sign in to [TWCC portal](https://www.twcc.ai/) first.
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-2-%E5%AE%89%E8%A3%9DTWCC-CLI) first, and then [sign in](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99).
- [Create a VCS instance](https://man.twcc.ai/@twccdocs/guide-vcs-create-en), deploy working environment and create a instance [image file](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-en).

<br/>

## Create a custom instance

Depending on the image created in the selected project or the image shared by other projects, the creation steps are different, so please refer to the following steps according to the applicable situation.

<br/>

### Select the image created in the project

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

The creation procedure is the same as [<ins>Create VCS instances</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances), only **Image** should be changed to select `(private)xxx, xxx is your custome image file name`, then you can complete the creation.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0dcb4912bb77fb6de9f67c58d74bf47a.png)

:::tip
<details>

<summary> Quick Animation Tutorial <i class="fa fa-file-video-o" aria-hidden="true"></i> </summary>

![](https://i.imgur.com/XLTl6xa.gif)

</details>
:::

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>

<br/>


### Select the image file shared by the source project

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

The creation procedure is the same as [<ins>Create VCS instances</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances), except that "**image type**" needs to be selected from Custom Image Linux or Custom Image Windows depending on the operating system of the image file, and then select the image shared by the source project.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_09dbcd06461d854690a0e0d04136673b.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>

<br/>

:::caution
To ensure an instance can be created from an image completely, please **do not delete the image** when the instance is in the **`Starting`** state.
:::

:::info
A user can only create and delete VCS instances 10 times respectively in one minute.
:::