---
sidebar_position: 3
title: 'Virtual Disk Service (VDS)'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-bss-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-bss-en'
---

# TWCC FAQs | Virtual Disk Service (VDS)

<details>

<summary> Q1. Why the reserved HDD cannot be successfully attached to the new VCS Instance?</summary>

1. Before you attach a HDD to a VCS Instance, make sure its status is **`AVAILABLE`** before you can attach to a new instance.
2. If this is not the case, separate the HDD from the original instance or delete the original instance to ensure that the status is **`AVAILABLE`** before attaching.

If you are still unable to attach after confirming the above, please contact the Technical Support:isupport@twcc.ai.

</details>

<details>

<summary> Q2. Why can't I read the newly attached disk?</summary>

The newly attached disk needs to be initialized to access the data, for initialization steps, please refer to:
[Initialize Linux disks](https://www.twcc.ai/doc?page=howto-bss-init-vol-linux) or [Initialize Windows disks](https://www.twcc.ai/doc?page=howto-bss-init-vol-windows).

</details>

<details>

<summary> Q3. How to upload and download files?</summary>


After attaching the disk to the VCS Instance, [use MobaXterm to connect to the Instance](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-zh) and complete the disk initialization, and select the **"Sftp"** icon on the left side of the MobaXterm page to view, upload, and download files.

</details>

<details>

<summary> Q4. How do I replace my old data disk with a new one?</summary>

Please refer to [this document](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-bss-replace-data-vol-zh) for detailed operations, you can change the disk type, capacity and save data from the old disk to the new one by synchronization.

</details>

<details>

<summary> Q5. Why can't I delete my data disk?</summary>

1. Before deleting, check that the disk has been detached from the VCS Instance and make sure the status is **`AVAILABLE'**.
2. If you have made a snapshot of the data disk, you must delete the snapshot of the data disk first.

If you are still unable to delete after confirming the above, please contact the Technical Support:isupport@twcc.ai.

</details>

<details>

<summary> Q6. Why does the usage billing continue even though I have deleted all virtual disks from the project?</summary>

In addition to the data disk, the virtual disk billing program also contains a VCS Instance image. Please check if you have created a VCS Instance image, if not, it is recommended to delete it to stop billing.

</details>

<details>

<summary> Q7. Why can't I attach a virtual disk to the VCS Instance?</summary>

Please note that the VCS Instance you want to attach to is in a ```Stopped``` state. Virtual disks cannot be attached to a VCS instance that is in a ```Stopped``` state.

</details>
