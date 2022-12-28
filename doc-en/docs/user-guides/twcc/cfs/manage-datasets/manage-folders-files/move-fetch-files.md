---
sidebar_position: 3
sidebar_label: 'Migrate and fetch'
slug: '/user-guides/twcc/cfs/move-fetch-data'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-move-retrieve-data-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-move-retrieve-data-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate and fetch

You can migrate infrequently fetched data to cold storage, and mirgrate it to hot storage when needed.

## Migrate files to Cold Storage

* The file storage will be showed in the dataset contents page. Select one of the file in **Hot Storage** and move your cursor to the right panel <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> button, then click the **MOVE TO COLD STORAGE** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c4d6d10bb1ca729066faa83da4ec933.png)

* Click the **OK** button when the prompt window for confirming file migration appears. Return to the file contents page, and the **Hot Storage (moving to the Cold Storage)** will be displayed.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7920644e10d5d366a26b674a3a9f2fe4.png)


:::info
It will takes a while to migrate a file to the cold storage. After the file is migrated successfully, the **Storage Area** of the file will displayed as  **Cold Storage**.

:::

## Migrate data to Hot Storage

* Select one of the file in **Cold Storage** in dataset contents page, and move your cursor to the right panel of <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button, then click  the **MOVE TO HOT STORAGE** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f6b4a56ec6a7a6c2433128e2cbc2d7ae.png)

* Click the **OK** button when the prompt window for confirming file migration appears. Return to the file contents page, and the **Cold Storage (moving to the Hot Storage)** will be displayed.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_805a5f9d00d1a7d959f8ccdf3139a590.png)


:::info
It will takes a while to migrate a file to the hot storage. After the file is migrated successfully, the **Storage Area** of the file will displayed as  **Hot Storage**.

:::

## Fetch cold storage files


* Select one of the file in Cold Storage in the dataset details page, click the **ACCESS** button on right panel to make a copy of the file to Cold Data Downloads.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9ed5f9b00d74fec0a00c8e9379ef58de.png)

* Click the **OK** button after the **Access the cold data** prompt window appears.

:::info
It may take several hours to fetch the cold data. Please go to the **[Download cold data](/user-guides/twcc/cfs/download-cold-data.md)** list page to check the fetching progress.
:::
