---
sidebar_position: 1
sidebar_label: 'Service overview'
title: 'Service overview'
slug: '/user-guides/twcc/hfs/overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/hfs-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/hfs-overview-zh'
---


# <img style={{width:30+'px', heigh:30+'px'}} src='https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a2514dcee06093bda60777e51fd25438.png' /> Service overview 

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
|/home/(system account)|100 GB <sup> [1] </sup>|
|/work/(system account)|100 GB <sup> [1] </sup>|


:::info
- [1] If the storage space is insufficient, you can go to [<ins>Member Center<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i ></ins>](/docs/user-guides/tws-member-center/access-tws-member-center) to purchase for expansion. Please refer to [<ins>Price List</ins>](/pricing.mdx#hyper-file-system-hfs) for the pricing and adjustment method.
:::

## Compatible computing services

On [TWCC](http://www.twcc.ai), HFS will be mounted to the same directory of all GPU nodes at the same time. Therefore, when users upload files to HFS through data transfer node, they can use [TWCC](http://www.twcc.ai) **Interactive Container**, **Scheduled Container**, **HPC Job and Taiwania 2 (HPC CLI)** provided by [TWCC](http://www.twcc.ai) to access the file contents in the HFS file system.


:::info
HFS is the default storage system for these four services, so HFS data can be used directly after connected, [<ins>Connect to data transfer node</ins>](h/docs/user-guides/twcc/hfs/connect-data-transfer-node) **in advanced is no needed**.
:::