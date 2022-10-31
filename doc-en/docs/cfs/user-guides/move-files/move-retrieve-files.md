---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-move-retrieve-data-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-move-retrieve-data-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Move and Access

You can move in-frequent access data to cold storage, and move data to hot storage when needed.

## Move file to Cold Storage

* The file storage will be showed in the dataset contents page. Select one of the file in **Hot Storage** and move your cursor to the right panel <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> button, then click the **MOVE TO COLD STORAGE** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c4d6d10bb1ca729066faa83da4ec933.png)

* Click the **OK** button when the prompt window for confirming file transfer appears. Return to the file contents page, and the **Hot Storage (moving to the Cold Storage)** will be displayed.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7920644e10d5d366a26b674a3a9f2fe4.png)


:::info
It will takes a while to transfer a file to the cold storage. After the file is moved successfully, the **Storage Area** of the file will displayed as  **Cold Storage**.

:::

## Move data to Hot Storage

* Select one of the file in **Cold Storage** in dataset contents page, and move your cursor to the right panel of <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button, then click  the **MOVE TO HOT STORAGE** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f6b4a56ec6a7a6c2433128e2cbc2d7ae.png)

* Click the **OK** button when the prompt window for confirming file transfer appears. Return to the file contents page, and the **Cold Storage (moving to the Hot Storage)** will be displayed.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_805a5f9d00d1a7d959f8ccdf3139a590.png)


:::info
It will takes a while to transfer a file to the hot storage. After the file is moved successfully, the **Storage Area** of the file will displayed as  **Hot Storage**.

:::

## Access to cold storage file


* Select one of the file in Cold Storage in the dataset contents page, click the **ACCESS** button on right panel to make a copy of the file to Cold Data Downloads.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9ed5f9b00d74fec0a00c8e9379ef58de.png)

* Click the **OK** button after the **Access the cold data** prompt window appears.

:::info
It may take several hours to access the cold data. Please go to the **Download Cold Data** list page to check the progress of the access.
:::

## Download cold data


* Enter the **Download Cold Data** page, and the accessable file from Cold Storage will be temporarily stored in here. Select the **Available** file and move your cursor to the right panel of <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> button, then click the **DOWNLOAD** button to download file to your localhost. 

:::info
The files will be temporarily stored in the cold data download area and deleted after 3 days, please download within the time limit.

:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c555780995cd5cea1a386ffddfd26d23.png)
