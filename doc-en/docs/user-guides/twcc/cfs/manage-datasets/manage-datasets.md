---
sidebar_position: 1
sidebar_label: 'Manage datasets'
slug: '/user-guides/twcc/cfs/manage-datasets'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-dataset-mngmnt-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-dataset-mngmnt-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage datasets

The level of the Cloud File Service (CFS) can be divided into three categories: (1) Dataset (2) First-level folders (3)Sub-folders.
Please create a [hot storage](https://man.twcc.ai/@twccdocs/concept-cfs-hot-and-cold-en) dataset to upload your file into CFS for first time use.


## Before we get started

- If you haven't sign up for a user account, please [sign up for TWS](https://www.twcc.ai/) first.
- If you would like to operate with TWCC portal, please sign in to [TWCC portal ](https://www.twcc.ai/)first.
- If you would like to operate with TWCC CLI, please <ins><a target="_blank" href = "https://github.com/twcc/TWCC-CLI">install TWCC CLI</a></ins> first, and then <ins><a target="_blank" href = "https://github.com/twcc/TWCC-CLI">sign in</a></ins>.


## Create dataset

* Click the **CREATE DATASET** button on **File Storage Management** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_05fe774c3e494caaf61a4263891b1de4.png)

* After the **Create Dataset** window appears, enter your dataset name and click the **OK** button.

:::info
Please enter lowercase English letters or numbers within 1~16 characters for the dataset name, and the first character must be an English letter.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7a564ae607ff285aef4374be32d5622b.png)

* The dataset will be listed on **File Storage Management** page after it has been created. Click the dataset to enter dataset details page and start using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bb089055fe7ced3cee84dd1c87107847.png)


## Delete a dataset

* Select the dataset you want to delete and click the **DELETE** button. You can also select multiple datasets to delete together.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1d2dffafb467961f5c02c99f90b30c6.png)

* Click the **OK** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_78b91716936bfa3970488e7621147416.png)

:::caution
Once dataset has been deleted, the data can not be recovered and the calculation of fees will stop .
:::