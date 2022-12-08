---
sidebar_position: 2
sidebar_label: '檢視儲存體'
slug: '/user-guides/twcc/cos/view-buckets'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-view-bucket-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-view-bucket-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 檢視儲存體

:::tip
以下操作方式僅限專案之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](/docs/user-guides/twcc/cos/overview) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](/docs/user-guides/twcc/cos/overview) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](/docs/user-guides/twcc/cos/connection-info) 操作。
:::

檢視您計畫內所有的儲存體：

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


- 於登入後首頁，選擇 「**雲端物件儲存**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fedd428471c8c2c1b85ff4481e274905.png)

:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::


- 進入「**雲端物件儲存管理**」頁面後，即可檢視計畫內所有的儲存體


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8472a638afd0fdea3bfdad683e82e712.png)


:::info
TWCC 入口網站最多僅能顯示 1000 筆資料 (儲存體、資料夾、檔案)，若需檢視完整資料，請使用 TWCC CLI 或第三方軟體。
:::


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">


- 檢視計畫內所有的儲存體

```bash
twccli ls cos
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1497483a1367bb6cae188b80298199b.png)


  </TabItem>
</Tabs>