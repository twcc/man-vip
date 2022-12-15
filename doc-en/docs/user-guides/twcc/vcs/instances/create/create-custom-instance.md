---
sidebar_position: 2
title: 'Create a custom instance'
sidebar_label: 'Create a custom instance'
slug: '/user-guides/twcc/vcs/create-custom-instance'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-create-custom-instance-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-create-custom-instance-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a custom instance

Once you create a TWCC virtual computing environment, you can access it to deploy the tools you need, create your own custom environment, and create a [**VCS instance image**](/user-guides/twcc/vcs/instances/details/create-image.md) to save your working environment so that you can create the same custom environment over and over again, or as a backup measure to avoid losing your personal settings.

:::info
For the permission differences in VCS instance between Tenant Admins and Tenant Users, please refer to [<ins>Roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en).
:::

<br/>


## Before we get started

- If you haven't sign up for a user account, please [sign up for TWS](/user-guides/tws-member-center/manage-member-accounts/sign-up-for-tws.md) first.
- If you would like to operate with TWCC portal, please first sign in to [TWCC portal](https://tws.twcc.ai/).
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://github.com/twcc/TWCC-CLI) first, and then [sign in](https://github.com/twcc/TWCC-CLI).
- [Create a VCS instance](/docs/user-guides/twcc/vcs/instances/create-instances), deploy your working environment and create an instance [image](/user-guides/twcc/vcs/instances/details/create-image.md), or you have images [shared](/docs/user-guides/twcc/vcs/images/manage-images.md#share-images-and-sharing-management) from other projects.

<br/>

## Create a custom instance

The creation steps are different depending on the image created in the selected project or the image shared by other projects. Please refer to the following steps according to your situation.

<br/>

### Select a created image in the project

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

The creation procedure is the same as in[<ins>Create a VCS instances</ins>](/docs/user-guides/twcc/vcs/instances/create/create-instances), :
- Select the **Image type**, the same as the OS of your image.
- Select an **Image** created in your project`(private)xxxcustome image namexxx`, or the shared image from other project `(private)xxxsource project ID-custome image namexxx`.

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

The creation procedure is the same as in[<ins>Create a VCS instanc</ins>](/docs/user-guides/twcc/vcs/instances/create/create-instances), except that **image type** should select Custom Image Linux or Custom Image Windows depending on the operating system of the image, and then select the image shared by the source project.

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