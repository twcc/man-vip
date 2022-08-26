---
sidebar_label: '服務概觀'
sidebar_position: 1
title: 'Service overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/cos-overview-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/cos-overview-en'
---

# Service overview <img style={{width:35+'px', height:35+'px'}} src='https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a798c7edb1b5032ecf92265a3150a7ec.png' />

TWCC Cloud Object Storage service provides an object storage system that is compatible with Amazon S3. Users may upload files from local computers to TWCC Cloud Object Storage system and connect them to container service<sup>[1]</sup> for AI computing.



Cloud Object Storage is divided into two types of storage spaces to meet user needs:
- **Public COS**: The data is shared by all members in the project.
- **Private COS<sup>[2]</sup>**: The data is exclusively for individual users.

In addition to being independently used as a stable and secure data storage space, you can also use COS as a data backup system for TWCC Virtual Compute Service (VCS) and Container Compute Service (CCS). For the data backup methods, see [data backup](https://man.twcc.ai/@twccdocs/cosbackup-en).





:::info
[1] You need to use TWCC CLI to access the data in Cloud Object Storage from TWCC Interactive Container.
[2] Private COS is currently not available through TWCC portal, and files can only be accessed using third-party software.


<!-- - 一般檔案管理 (上傳/下載/Metadata搜尋/設定通知)，可直接透過 TWCC 入口網站操作，參見以下說明。 -->

:::