---
sidebar_label: '新舊專案轉移'
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-project-data-transfer-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-project-data-transfer-en' 
---

# Transfer data from old project to new project

If you already applied for a new project and hope that the data in old project can be continuously used, please refer to this documentation to transfer your data via **Cloud Object Storage (COS)**.


**Sequence of data transferring：Old project COS** <i class="fa fa-forward" aria-hidden="true"></i> Download to **your local computer** <i class="fa fa-forward" aria-hidden="true"></i> Upload to **New project COS**


According to your operating system, refer to [Windows local computer](#Windows-local-computer) or [Linux local computer](#Linux-local-computer).

:::info
Hyper File System (HFS) is attached to the user account, rather than project. Therefore, the data in HFS storage space does not need to transfer, and could still be accessed in the new project.
:::


## Windows local computer

### Step 1. Back up the old project data to COS

For those who use Virtual Compute Service (VCS), please refer to [this document](https://www.twcc.ai/doc?page=backup) to back up the old project data in VCS instance to COS.

:::info
Users of CCS and Taiwania 2 can skip this step because the default storage of the two services is Hyper File System (HFS).
:::

### Step 2. Connect old and new COSs with S3 Browser in your local computer

After you back up, please download S3 browser to your local computer, and connect with COSs of your old project and new project.
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cc9c3993933db51234e51b0cc5e75e25.png)


### Step 3. Download the old project data to local computer

S3 browser does not support direct data transfer, please select the file you need to transfer and download it to local.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d41a89373a36a2eba08bd874ee1fa6b1.png)



### Step 4. Upload the data to new project

- Switch to new project account in local S3 browser 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe577644e4b84612e23f54dd6c283968.png)


- Then, upload the local data to the COS of new project, the data will be successfully transferred to the new project!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e12c4399174d32bbe619eae62431d9dd.png)


    
## Linux local computer

### Step 1. Back up the old project data to COS

For those who use Virtual Compute Service (VCS), please refer to [this document](https://www.twcc.ai/doc?page=backup) to back up the old project data in VCS instance to COS.

:::info
Users of CCS and Taiwania 2 can skip this step because the default storage of the two services is Hyper File System (HFS), and the data in HFS can be used in multiple projects.
:::

### Step 2. Connect old project COS with local computer

Please refer to [this document ](https://man.twcc.ai/@twccdocs/cosbackup-en#%E5%AE%89%E8%A3%9D%E8%88%87%E8%A8%AD%E5%AE%9A-s3cmd)to install s3cmd, and enter **Old project data (Access Key & Secret Key)** to connect old project COS with local computer via s3cmd.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9dd90a6105018eecaa8f3e6f2d4f0fc.png)

    
### Step 3. Download the old project data to local computer

Enter the following command to download old project data to local.

```bash
s3cmd get --recursive s3://<BUCKET_NAME>/<FOLDER_NAME or FILE_NAME> <LOCAL_DIR>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_753677494251c17c870f9b816d6ec86e.png)


### Step 4. Connect new project COS with local computer

Enter command `s3cmd --configure` again, and enter related information to connect to new project COS.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9dd90a6105018eecaa8f3e6f2d4f0fc.png)

### Step 5. Upload the data to new project

Upload the local data to the COS of new project, the data will be successfully transferred to the new project!

```bash
s3cmd put  --recursive <LOCAL_FILE_NAME> s3://<BUCKET_NAME>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_20989598f5d1c34d52fce285a7c766cc.png)