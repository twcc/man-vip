---
sidebar_position: 5
sidebar_label: 'Access interfaces'
slug: '/user-guides/twcc/cfs/access-interfaces'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-access-interface-mngmnt-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-access-interface-mngmnt-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Accessing interfaces for hot storage data 

Besides TWCC portal, S3 and SFTP protocol are provided as ways to access CFS hot storage data to facilitate downloading/uploading large or multiple files.

* Click on **Access Interface Management** in service list, and choose an access interface icon to enter service.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51cf8d9733a226ab4b3b5b8dfe45d771.png)

## S3

Please create a bucket correspond to your dataset for S3 protocol accessing, and download connection software (i.e., S3 browser or Cyberduck), then enter connection information to access your dataset via S3 protocol.


### Create a S3 dataset

* Click the **+CREATE** button under S3 access settings, enter S3 bucket name select corresponding dataset and click **OK**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a6c88ae4f46653cf74092f2803a3cf7a.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_da86adc5853f568446dcd0c73518191d.png)

### Get S3 service connection information

* After entering **S3 Service** page, you may obtain connection information including the service endpoint (using SSL connection): **`cfss3.twcc.ai`**, Signature Version, Access Key and Secret Key.
* Click **CREATE KEY** button to generate your Access Key and Secret Key. Key can be regenerate by clicking **RENEW KEY** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9a848865dcb0b1d76ea91e9ea45c029.png)

### Third-party tools for connection

* Similar to TWCC Cloud Object Storage (COS), you can also manage the files stored in Cloud File Service (CFS) through common third-party software, such as [S3 Browser](http://s3browser.com/) or [Cyberduck](https://cyberduck.io/).
* Take S3 Browser as an example, the connection information is set as follows:

![](https://i.imgur.com/eZJGnXL.png)

<!-- ![](https://i.imgur.com/1F3CEwE.png) -->

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04937356a53118f5d64fd682b91d85b5.png)



* After successful connection, you can see the created bucket of CFS.

:::info
If you are using other third-party tools, please set the following information to ensure a successful connection.
- Region：us-east-1
- Signature Version：V4
:::

### Delete a S3 dataset

* If a S3 dataset is no longer needed, you can delete it by selecting the bucket and click the **DELETE** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3246037a6309e6713d244e1f0cc3341d.png)


## SFTP

CFS also provides SFTP accessing service, you can use SFTP client software (e.g., FileZilla) to access the files stored in CFS.

* Click **SFTP Service** to obtain SFTP service connection information, including SFTP service host address: **`sftp://cfs.twcc.ai`** and port information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f9e1ea3e727bebce70ef64318abd24f.png)

* Open third-party SFTP software, such as FileZilla, and enter the connection information to login.
    - Host: cfs.twcc.ai
  	- Username: Host Name 
	- Password: Host Password
    - Port: 22 

:::info
If you forgot your **system account** or **system password**, please refer to [<ins>Find system account, reset password and obtain OTP authentication code</ins>](/user-guides/tws-member-center/manage-member-accounts/system-account-password-otp.md) for more information.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a5e51cd889a7f5d12061441474228eaa.png)

* After successful login, the files in CFS will be displayed and available for file migration and fetch (first-level folder name is the project ID by default).
* Files stored in the cold storage area, will be displayed with `.COLDDATA` suffix and cannot be downloaded, migrated, copied or deleted directly through the SFTP software. Please manage files through the TWCC portal.