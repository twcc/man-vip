---
sidebar_position: 1
sidebar_label: 'Create and delete buckets'
slug: '/user-guides/twcc/cos/create-delete-buckets'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-create-delete-bucket-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-create-delete-bucket-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create and delete buckets

:::tip
The following operation methods are only applicable to the [<ins>**public COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/user-guides/twcc/cos/overview) of the project. For managing your [<ins>**private COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/user-guides/twcc/cos/overview), please use [<ins>**third-party software**</ins>](/docs/user-guides/twcc/cos/connection-info).
:::



## Before we get started

- If you haven't sign up for a user account, please [sign up for TWS](/user-guides/tws-member-center/manage-member-accounts/sign-up-for-tws.md) first.
- If you would like to operate with TWCC portal, please first sign in to [TWCC portal](https://tws.twcc.ai/).
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://github.com/twcc/TWCC-CLI) first, and then [sign in]((https://github.com/twcc/TWCC-CLI).



## Create buckets

Follow the steps below to create a bucket. Once the bucket is created, you can upload your files to the bucket and create folders to manage files.

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    


* Select **Cloud Object Storage (COS)** from the service list, enter the Cloud Object Storage Management page, and click **＋CREATE**.



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7276085361277d851d4d1b6122b938e2.png)




* Enter a name for the bucket and click **OK**. Please note that the name of the bucket must be unique. It must be between 1 and 16 characters of lowercase English letter or digits. The first character must be a letter.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_242ab6c2f636e6c895c262889cbff173.png)



* When the bucket is created, it will show on the top of the list. Click the list to enter the Bucket Details page and begin to use it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_816d9e09bb9d062f7908162f02386fef.png)



  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

- Create a bucket named `bk_cli`


```bash
twccli mk cos -bkt bk_cli
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fc30b6409e2372886223660e2aefd2da.png)

  </TabItem>
</Tabs>

## Delete buckets

:::caution
Before deleting the bucket, please check whether the bucket has been emptied or backed up; once the bucket is deleted, all the data in the bucket will be deleted and cannot be restored.

:::

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
    

* To delete an unnecessary bucket, click the <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button on the right of the bucket list, and then click **DELETE**.


* To avoid accidental deletion, please enter the name of the bucket to confirm the deletion.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_91a38c8366856a7f2fb7504cb896ebeb.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

- Delete the **empty** bucket `bk_cli1`


```bash
twccli ls cos -bkt bk_cli1
twccli rm cos -bkt bk_cli1
```  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_192906ce0505e7303b8e391624b6df25.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_511e9bda39e94399aa5c414b8a6cccc8.png)


- Delete the **non-empty** bucket `bk_cli2`

```bash
twccli ls cos -bkt bk_cli2
twccli rm cos -bkt bk_cli2 -r
```  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ddbded358f57f02685f4bd887545a60.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22bf710e843dce06cb3468f4ecc8824d.png)

  </TabItem>
</Tabs>
