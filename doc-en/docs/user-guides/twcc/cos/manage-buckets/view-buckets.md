---
sidebar_position: 2
sidebar_label: 'View buckets'
slug: '/user-guides/twcc/cos/view-buckets'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-view-bucket-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-view-bucket-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View, search, and delete

## View buckets

:::tip
The following operation methods are only applicable to the [<ins>**public COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/user-guides/twcc/cos/overview) of the project. For managing your [<ins>**private COS**<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](/docs/user-guides/twcc/cos/overview), please use [<ins>**third-party software**</ins>](/docs/user-guides/twcc/cos/connection-info).
:::

View all buckets in your project:

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC Portal" label="TWCC Portal" default>
   

- After signing in for TWCC, select <b>Cloud Object Storage (COS)</b>.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_44509030fbb4885dfa5539fe745386ad.png)

:::tip
You can click on the star <i class="fa fa-star-o" aria-hidden="true"></i> on the left side of **All Services** to pin your favorite services to **My Favorite Services** to speed up the process.
:::

- After entering <b>Cloud Object Storage Management</b> page, you can view all the buckets in the project.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f74c2852f3828639d7ba6f7381fd053a.png)



  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">
    

- View all buckets in the project


```bash
twccli ls cos
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1497483a1367bb6cae188b80298199b.png)


  </TabItem>
</Tabs>
