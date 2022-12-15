---
sidebar_position: 2
sidebar_label: 'Available storage resources'
slug: '/user-guides/twcc/twnia2-hpc-cli/storage-resources'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-storage-capability-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-storage-capability-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Available storage resources

Compute nodes access [Hyper File System (HFS)](/docs/user-guides/twcc/hfs) via high-speed network. HFS is a petabyte (PB)-level storage space with a great user experience that provides high-throughput I/O for large files and quickly access and operates each data.


| Storage directory | Mount point | Free space capacity per user |
| -------- | -------- | -------- |
| Home directory    | /home     |  100 GB :free: |
| Temporary work directory     | /work     |  100 GB :free:|


## Home directory - /home

In home directory, you can store private files, edit scripts, execute and manage computing jobs. After signing up for a TWCC account, each user gets a default quota of 100 GB of free space available under /home directory.


## Temporary work directory - /work

Temporary work directory is mainly used to store temporary data during the your computing process. After signing up for a TWCC account, each user gets a default quota of 100 GB of free space available under /work directory.

This space is designed for computing jobs, not for long-term storage. To maintain the stability and high performance of /work directory, TWCC will regularly and automatically clean the space.


:::caution
When using HFS, please note related [<ins>Space management policy</ins>](https://man.twcc.ai/@twsdocs/guide-hfs-zh?type=view#HFS-%E7%A9%BA%E9%96%93%E7%AE%A1%E7%90%86%E6%94%BF%E7%AD%96).
:::