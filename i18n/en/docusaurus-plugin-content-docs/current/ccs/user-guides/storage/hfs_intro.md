---
displayed_sidebar: hfs
sidebar_label: '高速檔案系統'
sidebar_position: 3
title: 'Hyper File System'
sync_original_production: 'https://man.twcc.ai/@twccdocs/hfs-overview-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/hfs-overview-en'
---

# Service overview <img style={{width:30+'px', heigh:30+'px'}} src='https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a2514dcee06093bda60777e51fd25438.png' />

Hyper File System (Hereinafter referred to as HFS) is a scalable, high-performance parallel file system that allows simultaneous access to the same file or different files on different nodes and provides high-speed and secure data storage, providing efficient, safe and flexible data transfer for Container Compute Service, HPC Job, and Taiwania 2 (HPC CLI)



## Space information

After signing up for TWCC, you can access HFS data transfer node and use the free space (/home and /work mounted on HFS) with the compute services mentioned above.


The HFS data transfer node, mount path and free quota information are as follows:


| Item | Content |
| -------- | -------- |
| HFS data transfer node|xdata1.twcc.ai| 
| HFS port | 22|


|Mount path|Free quota|
 | -------- |-------- |
|/home/(Supercomputer username)|100 GB <sup> [2] </sup>|
|/work/(Supercomputer username)|100 GB <sup> [1][2] </sup>|


:::info
- [1] From September 1, 2021, temporary working directory area for each account of National Science and Technology Council(MST)(former Ministry of Science and Technology)(/work)free quotas, from 100 GB to 1500 GB.
- [2] If the storage space is insufficient, you can go to [<ins>Member Center<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i ></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) to purchase for expansion. Please refer to [<ins>Price List</ins>](https://www.twcc.ai/doc?page=price#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS) for the pricing and adjustment method.
:::

## Compatible computing services

On [TWCC](http://www.twcc.ai), HFS will be mounted to the same directory of all GPU nodes at the same time. Therefore, when users upload files to HFS through data transfer node, they can use [TWCC](http://www.twcc.ai) **Interactive Container**, **Scheduled Container**, **HPC Job and Taiwania 2 (HPC CLI)** provided by [TWCC](http://www.twcc.ai) to access the file contents in the HFS file system.


:::info
HFS is the default storage system for these four services, so HFS data can be used directly after connected, [<ins>Connect to data transfer node</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-en/%2F%40TWSC%2Fguide-hfs-connect-to-data-transfer-node-en) **in advanced is no needed**.
:::