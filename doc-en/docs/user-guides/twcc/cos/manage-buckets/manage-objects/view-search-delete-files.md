---
sidebar_position: 4
sidebar_label: 'View, search, and delete files'
slug: '/user-guides/twcc/cos/view-search-delete-files'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-view-search-delete-files-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-view-search-delete-files-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View, search, and delete files

:::tip
The following operation methods are only applicable to the [<ins>**public COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/user-guides/twcc/cos/overview) of the project. For managing your [<ins>**private COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/user-guides/twcc/cos/overview), please use [<ins>**third-party software**</ins>](/docs/user-guides/twcc/cos/connection-info).
:::

## View file details

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

*  Select a bucket and go to the bucket details page, and select a file to check more.

    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_60bb078885449dafd077a7088b5285ae.png)


:::info
The TWCC portal can only display up to 1000 data items (storages, folders, files). To view the complete data, please use the TWCC CLI or third-party software.
:::

* On the file detail page, you can view some file basic information as follows.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6ed682e3c8ff6c67711ad5193d61e773.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

View all file information in bucket `bk_cli`

```bash
twccli ls cos -bkt bk_cli
```

  </TabItem>
</Tabs>


## Search files


<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

    
Enter a keyword of the file in the **Search bar**, and will automatically filter the matching files for you.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ef11962501081ea103f62a0afca28b3d.png)


  </TabItem>
</Tabs>


## Delete files


Deleting unnecessary files can save storage space. **Once deleted, the lost data cannot be recovered. Please make sure that the files are backed up before deleting**.

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

* After entering Content page of the bucket, click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button of the file list, and click **DELETE** to delete the file. You can also select multiple files, and then click **DELETE** at the top to delete multiple files at a time.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_68f69182d158e71d0eaa1063ae2f0b93.png)


* Double-check the selected files. Once deleted, the lost data cannot be recovered!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7725f6b066021f740b0c5e85c7f1178b.png)



  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

- Delete the file `testfile2` in the bucket `bk_cli`


```bash
twccli rm cos -bkt bk_cli -okey testfile2
```   
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_46d8119fc6debd65bcbe77574209266e.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5c14b3d8059d8ea4ff1efc97df54f006.png)

  </TabItem>
</Tabs>