---
sidebar_position: 1
title: 'VDS overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vds-overview-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vds-overview-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a62be3bdf4bc257526e95e16b063a777.png) Virtual Disk Service (VDS) overview


You can expand your Virtual Compute Service (VCS) instance storage with Virtual Disk Service (VDS). It is a pay-as-you-go, flexible and convenient service. It is designed storage space for TWCC VCS service to provide high-availability, consistent, and low-latency services.

<br/>


## Related services

Virtual Disk Service (VDS) plays a significant role in Virtual Compute Service (VCS):

<br/>


### VCS instance storage

- **System disks**: We provide a system disk with a built-in 100 GB hard disk drive (HDD) in a VCS instance.
- **Data disks**: VCS instances can mount multiple data disks to expand the storage. VDS provides the following disk types:
    - **Solid-state drive (SSD)**:
        - Provides low-latency services (less than 10 milliseconds), efficient and stable transfers (from 3 IOPS/GB to 16 IOPS/GB) to enhance the reliability and scalability of applications. SSD is well suited for enterprise applications and computings with big data.
        - Provides a maximum transfer capability of 2,375 MB/sec for each VCS instance.
        - Supports up to 16 TB of storage space.
    - **Hard disk drive (HDD)**:
        - Provides transfer capability of 250 MB/sec per TB. HDD is well suited for mass data that is not frequently accessed and is unaffected by delays.
        - Provides a maximum transfer capability of 2,375 MB/sec for each VCS instance.
        - Supports up to 16 TB of storage space.

<br/>


### Back up the instances and disks

TWCC provides storage for the backup of images and data disks of VCS instances.

<br/>


## Platforms

- [TWCC Portal](https://www.twcc.ai)
- [TWCC CLI](https://github.com/twcc/TWCC-CLI)