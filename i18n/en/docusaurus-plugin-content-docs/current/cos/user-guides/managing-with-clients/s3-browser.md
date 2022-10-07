---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-s3browser-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-s3browser-en'
---

# Manage files with third-party software - S3 Browser


In addition to uploading or downloading files using Portal, if you need to transfer large files, we recommend using commonly used third-party software such as [S3 Browser](http://s3browser.com/) or [Cyberduck](https://cyberduck.io/ ) to manage files in COS buckets.

* S3 Browser is a simple and easy to use Amazon S3 Windows client that provides a simple web service interface to store and retrieve data from anywhere on the web.
* The S3 Browser Free Edition is for non-commercial use only. For details, see [S3 Browser official website](http://s3browser.com/).

## Connect to COS

### Download S3 browser

Go to [S3 Browser official website](http://s3browser.com/), click **Download S3 Browser** to download and install S3 Browser.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d02ac87a4e07204c391baf0257d4e85.png)

### Connect to COS

- See [this document ](https://man.twcc.ai/@preview-twccdocs/guide-cos-connect-info-en) to get connection information.
- After installation, open S3 Browser, set the connection information of TWCC COS account, Account Type must select **S3 Compatible Storage**, and then set the REST Endpoint according to the connection information provided on the Third-party Software page (cos.twcc .ai), Access Key and Secret Key.
　　
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b656bd68c28442741aeaa3b2760c0eeb.png)


## Manage buckets and files
* After the connection is successful, you can view the files of the TWCC COS bucket, and you can also create new buckets using S3 Browser.
* Click **New bucket** in S3 Browser, then enter a name for the bucket in Create New Bucket pop-up window, and then click **Create new bucket**.



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_07f90f276605abca62b538a6b76c42f4.png)

* Click the bucket on the left then you are able to upload or download files.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3efb2b8eefb6fb44125f06ca211de9d0.png)