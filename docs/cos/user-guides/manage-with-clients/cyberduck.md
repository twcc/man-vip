---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-cyberduck-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-cyberduck-en'
---

# Manage files with third-party software - Cyberduck

In addition to uploading or downloading files using Portal, if you need to transfer large files, we recommend using commonly used third-party software such as [S3 Browser](http://s3browser.com/) or [Cyberduck](https://cyberduck.io/ ) to manage files in COS buckets.

:::info
Cyberduck is a file transfer tool for Mac and Windows. It can also be used to manage the files of Cloud Object Storage and quickly transfer and browse files on the local computer and remote hosts.

:::


## Connect to COS

### Download Cyberduck

* Go to [Cyberduck official website](https://cyberduck.io/) to download and install Cyberduck.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b387f8c18eb6b8e6476431bec8f4229.png)


* Cyberduck user interface for Mac or Windows is similar. Open the application after installation and click **Open Connection**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1a5d91cc7a586bfccc2d4fbe12a7711d.png)



* As shown in the figure below, set the connection information of the TWCC Cloud Object Storage account. The host type of the connection must be **Amazon S3**, and then enter the connection information provided on the Third-party Software page to set the server (cos.twcc.ai), Access Key ID and Secret Access Key.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b9f5f6d28c802a4b02e7cddedf854d7.png)


## Manage buckets and files

After the connection is successful, you can see the files of the bucket on the TWCC COS, and you can also create new folders (buckets) or upload files using Cyberduck.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f02f197ae1b24c36649712cf0999c203.png)