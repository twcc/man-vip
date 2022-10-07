---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-upload-download-files-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-upload-download-files-en'
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Upload/download files and create folders

:::tip
The following operation methods are only applicable to the [<ins>**public COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-en/%2F%40TWSC%2Fcos-overview-en) of the project. For managing your [<ins>**private COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-en/%2F%40TWSC%2Fcos-overview-en), please use [<ins>**third-party software**</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-en/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-en).
:::


## Upload files

Upload files to Cloud Object Storage (COS) bucket from your local computer:


<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

* Enter Content page of the bucket, click **UPLOAD**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ea3e08fc443b9530cd5d0fd94cb3bcf2.png)



* After Upload File(s) window pops up, you can directly drag the file or folder here, or click **SELECT FILES**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9abc4dd24ac7959df5f5d223b63b3905.png)



* Select the file you want to upload and click **UPLOAD**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_80f5636d43907412f20549aa019bcc09.png)


    
* Click **DONE** when system shows **Upload Successful!**.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e36a65656f8b3f62a63e4b3dfdc4ba33.png)



:::tip

File limit: The maximum file size is 1GB, and the maximum number of files per upload is 1000. If you want to upload larger and more files, you can download and use the **Third-party Software** in the left-hand menu.

:::

  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

:::tip
Files can be retrieved by **relative path** and **absolute path** to upload to buckets.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66f6bc7fd0b69de7274d2a3251a5a817.png)
:::


#### Upload a single file `-sync to-cos`

- Upload a single file from the current path (file name: `testfile1`)
- Use the view command to check whether the file is successfully uploaded to the target bucket `bk_cli`

```bash
twccli cp cos -bkt bk_cli -fn testfile1 -sync to-cos
twccli ls cos -bkt bk_cli
```


- Upload a single file (file name: `test1`) from a relative path to the `testf1/` directory of the bucket.

```bash
twccli cp cos -bkt bk_cli -dir testf1/ -fn test1 -sync to-cos
```

- Upload all files in the relative path folder (folder name: `testf2`) to the target bucket

```bash
twccli cp cos -bkt bk_cli -dir testf2 -sync to-cos
```


  </TabItem>
</Tabs>

## Download files

Download files from COS bucket to your local computer:

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

* On Content page of the bucket, check the file you want to download and click **DOWNLOAD** button at the top of the page.


:::tip
Currently, you can only download one file at a time using Portal. If you want to download multiple files, you can use the **Third-party Software** in the left-hand menu.
:::    
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a571c35936180f731c19c0f044f456f.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

- Download a single file (file name: `testfile1`) from bucket to the current folder


- And check if the download is successful


```bash
twccli cp cos -bkt bk_cli -okey testfile1 -sync from-cos
twccli ls cos -bkt bk_cli
```


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_139476a0ef51c83f649a32e43a8feb3a.png)

<!--
- 自儲存體下載一檔案(檔名:`testfile2`)至指定目錄`download`
```bash=
twccli cp cos -bkt bk_cli -dir ./ -fn testfile2 -sync from-cos
```
-->

    
- Download the entire bucket to the specified directory
- And check if the download is successful

```bash
twccli cp cos -bkt bk_cli -dir download/ -sync from-cos
twccli ls cos -bkt bk_cli
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a7d7d0ece77cba4025908f4c48453de6.png)


  </TabItem>
</Tabs>


## Create folders



You can create folders to manage your files:

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

* On Content page of the bucket, click **CREATE FOLDER**, enter a name for the folder and click **OK**.

    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dacce4d5bd1a1d9e95020154e382575f.png)



  </TabItem>
</Tabs>
