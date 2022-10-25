---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-encryption-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-encryption-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# File Encryption

When uploading files to TWCC Cloud Object Storage, you can choose the file encryption feature. TWCC provides the system default SSE-KMS key to encrypt your uploaded files and protect your important data.

:::info
- The key is shared by the project and all members have access to the encryption feature.
- Keys are centrally managed by TWCC and currently do not support the deletion, change or use BYOK.
:::

## Encryption Key ID

When uploading files using third-party software, the files need to be encrypted using the Encryption Key ID (user sites are automatically encrypted by the system).：

Login to TWCC > enter the service list and select **Cloud Object Storage** > enter **Cloud Object Storage Management** and get the Encryption Key ID of the projects on the top right of the page.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_62098fd1deba37313fa0ea7677fc7588.png)



## How To Encrypt The Files?

TWCC encrypts your files when you upload them to cloud object storage, as described below.
When you download the file, the system will automatically get the decryption key and you don't need to perform additional operations.


<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>



### Encrypted Uploads

Same steps as [<ins>uploading a file</ins>](https://man.twcc.ai/@twccdocs/guide-cos-upload-download-files-zh#%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88), please check **Encrypt** and then click **UPLOAD** to encrypt the file.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_af965af915450fa5d94de1fae5b0bbbb.png)


### Verify That The File Is Encrypted


After a file has been encrypted and uploaded, the encrypted properties of the file will be displayed when you go to the file details page.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0b749c20a05ddd9d6e036f8bee56e26f.png)



 </TabItem>
  <TabItem value="Third-party Software：S3 browser" label="Third-party Software：S3 browser">


### Preparation

Please [<ins>download S3 Browser, complete the connection to TWCC Cloud Object Storage, create the storage</ins>](https://man.twcc.ai/@twccdocs/guide-cos-s3browser-zh), and obtain the <a href="#加密金鑰-ID"><ins>Encryption Key ID</ins></a>.


### Set encryption function


**Step 1. Enter the settings page**

Click **Tools** > **Server-Side-Encryption** > **+Add**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4828b14743452f78d82e199429e0eb94.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ceacfeaf972f12ddfb327fef7e180e65.png)


**Step 2. Set the encryption content**

- Bucket name or mask：Enter the "**Bucket**" name of the file to be encrypted.
- Encryption type：Select **Server-Side-Encrption with Customer Keys Stored in AWS KMS (SSE-KMS)**
- KMS key type：Select **Enter KMS master key ARN**, and enter the **Encryption Key ID** provided by TWCC.
- Click **Save changes** to confirm settings.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e0c48a902bdf32348014b2b2fac25efc.png)

- Click **Save changes** again

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ccb461736610db73e310b16c5e5fb5d.png)



### Verify that the file is encrypted

After uploading the file, right-click on File > Properties > View File Encryption Properties.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e38b3b62d64c3a5fdecdd2ae7b476b09.png)


:::info
- In this document, we use S3 Browser as an example of client software, you can choose other software
- For more tutorials on using S3 Browser's Cloud Object Storage, refer to [<ins>Manage files with third-party software - S3 Browser</ins>](https://man.twcc.ai/@twccdocs/guide-cos-s3browser-zh)
:::

  </TabItem>
</Tabs>
