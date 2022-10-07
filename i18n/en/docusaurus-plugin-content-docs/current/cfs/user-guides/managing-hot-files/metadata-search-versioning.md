---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-metadata-search-versioning-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-metadata-search-versioning-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Metadata, Search and Version History

## Metadata Management

You can add descriptive metadata to the file for precise searches or to facilitate context-specific processing of the program.

### Edit Metadata

* Move cursor to the file's right panel <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button and click **EDIT METADATA** button on dataset page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b8bd38bda6a3b96236159e7b488bd925.png)


* User can add or edit the metadata of the file for more precise search.

:::info
The limit metadata for a single file is 10.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19a013325edacae18d029c831e167be2.png)

* Please follow the **Key;Value** format to enter or edit metadata. Click **ADD** button to add metadata and **UPDATE** button after finishing update.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_24af374f8fe53752d99927d8dc84f882.png)

## File Search

File Management Service provides two types of file search method, including **Search** (All dataset or specify dataset keyword) and **Advanced Search** (In specify dataset).

### Search

Enter keyword in **Search Bar** to filter out the criteria matching results in all dataset automatically.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fada13b19b1d6b5dbda94f8290033ec0.png)

### Advanced Search

* Click the **ADVANCED SEARCH** button on the right upper corner of dataset page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_719563e22e2462dcf6a05c1861d77356.png)

- **Advanced File Search**

    * Advanced file search can perform a global search on keyword of the dataset. After entering the **Advanced Search** page, enter the keyword in the search box to search for all files containing this keyword.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f2d0336b5b76c0646ce9879fdd2c438.png)


- **Custom Metadata Search**

    * Custom metadata search can search by the key or value of custom metadata, click **Advanced File Search** to bring up the drop-down menu, and select **Custom metadata search**.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a2950823159c2be1ffd63c5069e8a0b5.png)

    * Enter the conditions to be searched according to the metadata format : key; value.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cc0bf302116d8b7d080dfbc6913dad55.png)

## Version History


* After entering file list page, move your cursor to the right panel of <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button, and click **VERSION HISTORY** to view the file's version.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a1dc9ad7bd76faf00e6ee754a5ef3d5.png)


* The system will automatically keep the old version and record version numbers, storage areas, creation time and other information if there is a duplicate upon uploading file. You can click the DOWNLOAD button to download specific version file to local machine.

:::info
- Archives of older versions can only be kept for 30 days.
- If you need to restore the file from an old version, please download the old version and re-upload it.
- Upload a file with the same name as the cold storage:New files will be stored in the hot storage and displayed on the file storage management;the original file is still stored in cold storage and can be viewed/accessed by clicking on the version record on the right.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2a989dd79afff11bcfc096b1d6ff677b.png)