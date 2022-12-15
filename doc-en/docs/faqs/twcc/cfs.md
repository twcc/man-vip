---
sidebar_position: 9
title: 'Cloud File Service (CFS)'
sidebar_label: 'Cloud File Service'
slug: '/faqs/twcc/cfs'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-cfs-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-cfs-zh'
---

# FAQs | Cloud File Service (CFS)

<details>

<summary> Q1. When I upload a new version of a file, the file that was in the cold storage is moved to the hot storage?</summary>

File version management function, after uploading a new version, the original file will become the old version and placed in the original storage area without being moved. The latest version of the file is displayed in the folder file list. Older versions can be viewed by clicking on the **version history** in the directory to the right of the file.

</details>

<details>

<summary> Q2. Why can't I check the CFS usage information from the resource usage record in the Member Center?</summary>

CFS usage is only available to the administrator or creator. If your account is a user, you will not be able to view resource usage. You can ask the project's administrator to help you with queries or increase your permissions.

</details>

<details>

<summary> Q3. Can there be two files with the same file name in a folder?</summary>

This happens because the upload of the previous file is not yet complete, i.e. a file with the same file name has already been uploaded. Therefore, files that have not been uploaded have no version information, and files that have been re-uploaded are considered new. We recommend that when uploading a new version of a file from the web, make sure the file is already in the list before uploading. If you use the API, do not continuously upload files with the same file name to the same folder.

</details>
