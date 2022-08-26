---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/concept-cfs-hot-and-cold-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/concept-cfs-hot-and-cold-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Description of hot and cold storage

Cloud File Service (CFS) distinguish file access frequency into **Hot storage** and **Cold storage**. 
Please refer to the feature description below to select your storage.


## Introduction to Storage

| Storage | Feature |Pricing |Suggested Usage |
| -------- | -------- | -------- | -------- |
| Hot storage     | Access to files directly  | Higher unit price  | High frequency access file     |
| Cold storage     | Files should copy from Cold Storage to Cold Data Download area, and then download to edit the file.  | Lower unit price  | Low frequency access file or archive file     |


:::info
- **File Storage Management** and **Access Interface Management** on TWCC are only eligible to **Hot Storage** data. Data in **Cold Storage** only provided with Cold Data download feature and no other file management service.
- Files need to be uploaded to **Hot Storage** first, and then ++[transfer file](#File-Transfer)++ to cold storage.
:::


## File Transfer

Users may [transfer file mannually](https://man.twcc.ai/@twccdocs/guide-cfs-move-retrieve-data-en) or [setup a life cycle rules](https://man.twcc.ai/@twccdocs/guide-cfs-lifecycle-mngmnt-en) to move file to Cold storage automatically for long-term storage and also migrate file between storages at any time.