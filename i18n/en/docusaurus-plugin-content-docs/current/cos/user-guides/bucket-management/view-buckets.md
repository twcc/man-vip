---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-view-bucket-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-view-bucket-en'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View buckets

:::tip
The following operation methods are only applicable to the [<ins>**public space**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-en/%2F%40TWSC%2Fcos-overview-en) of the project. For managing your [<ins>**private space**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-en/%2F%40TWSC%2Fcos-overview-en), please use [<ins>**third-party software**</ins>](https://man.twcc.ai/@preview-twccdocs/doc-cos-main-en/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-en).
:::

View all buckets in your project:

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
   

- After signing in for TWCC, select <b>Cloud Object Storage (COS)</b>.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_44509030fbb4885dfa5539fe745386ad.png)

:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

- After entering <b>Cloud Object Storage Management</b> page, you can view all the buckets in the project.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ed5a1dd57edd31b8a1d55d1741c45f1.png)



  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

- View all buckets in the project


```bash
twccli ls cos
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1497483a1367bb6cae188b80298199b.png)


  </TabItem>
</Tabs>
