---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cfs-access-interface-mngmnt-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cfs-access-interface-mngmnt-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Hot Storage Data Access Interface

Besides TWCC portal, S3 and SFTP protocol are provided as ways to access CFS hot storage data to facilitate downloading/uploading large or multiple files.

* Click on **Access Interface Management** in service list, and choose an access interface icon to enter service.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51cf8d9733a226ab4b3b5b8dfe45d771.png)

## S3

Please create a bucket correspond to dataset for S3 protocol access, and download connection software(i.e., S3 browser or Cyberduck), then enter connection information to access dataset.


### Create S3 dataset

* Click the **+Create** button under S3 access settings, enter S3 bucket name select corresponding dataset and click **OK**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a6c88ae4f46653cf74092f2803a3cf7a.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_da86adc5853f568446dcd0c73518191d.png)

### Get S3 service connection information


* After entering **S3 Service** page, you may obtain connection information including service endpoint (using SSL connection): **`cfss3.twcc.ai`**, Signature Version, Access Key and Secret Key.
* Click **CREATE KEY** button to generate Access Key and Secret Key. Key can be regenerate by clicking **RENEW KEY** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9a848865dcb0b1d76ea91e9ea45c029.png)

### Use third-party software to connect

* Similar to TWCC Cloud Object Storage (COS), you can also manage the items stored in Cloud File Service (CFS) through common third-party software such as [S3 Browser](http://s3browser.com/) or [Cyberduck](https://cyberduck.io/).
* Take S3 Browser as an example, the connection information is set as follows:

![](https://i.imgur.com/eZJGnXL.png)

<!-- ![](https://i.imgur.com/1F3CEwE.png) -->

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04937356a53118f5d64fd682b91d85b5.png)



* After successfully connect, you can see the created bucket on CFS.

:::info
If you are using other third-party software, please set the following information to ensure a successful connection.
- Region：us-east-1
- Signature Version：V4
:::

### Delete S3 Dataset

* If S3 dataset is no longer needed, please select the bucket and click the **DELETE** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3246037a6309e6713d244e1f0cc3341d.png)


## SFTP


CFS also provides SFTP access interface, you can use SFTP client software (e.g., FileZilla) to access the items stored in CFS.

* Click **SFTP Service** to obtain SFTP service connection information, including SFTP service host address: **`sftp://cfs.twcc.ai`** and port information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6f9e1ea3e727bebce70ef64318abd24f.png)

* Open third-party SFTP software, such as FileZilla, and enter the connection information to login.
    - Host: cfs.twcc.ai
  	- Username: Host Name 
	- Password: Host Password
    - Port: 22 

:::info
If you forgot your **Supercomputer account** or **supercomputer password**, please refer to [<ins>Inquire supercomputer account, reset password and obtain OTP authentication code</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-en) for more information.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a5e51cd889a7f5d12061441474228eaa.png)

* After successful login, the files in CFS will be displayed and available for file transfer and access (first-level folder name is the project ID by default).
* Files stored in the cold storage area, will be displayed with `.COLDDATA` suffix and cannot be downloaded, moved, copied or deleted directly through the SFTP software. Please manage files through the TWCC portal.