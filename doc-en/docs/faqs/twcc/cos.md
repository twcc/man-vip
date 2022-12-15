---
sidebar_position: 6
title: 'Cloud Object Storage (COS)'
sidebar_label: 'Cloud Object Storage'
slug: '/faqs/twcc/cos'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-cos-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-cos-zh'
---

# FAQs |  Cloud Object Storage (COS)

<details>

<summary> Q1. Can the data stored in the Cloud Object Storage in the old project be directly used in the new project?</summary>

Terribly sorry! Currently TWCC does not provide a service for directly transferring data stored in Cloud Object Storage to another project. You can use third-party software to download the old project data to the local machine, and then upload the data from the local machine to the Cloud Object Storage of the new project. Please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/howto-project-data-transfer-zh) for detailed operation methods.

</details>

<details>

<summary> Q2. Why did I fail to download files on the TWCC portal?</summary>

The TWCC portal has set a traffic limit for downloads and uploads, and a single file cannot exceed 1 GB.
Please confirm your file size. If you need to download a large file, we recommend that you download it through a third-party software (e.g., S3 Browser).

</details>