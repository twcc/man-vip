---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cos-view-bucket-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cos-view-bucket-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 檢視儲存體

:::tip
以下操作方式僅限計畫之 [「<ins>**公共空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 適用， [「<ins>**私有空間<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>**」</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/%2F%40TWSC%2Fcos-overview-zh) 之檔案管理請透過 [<ins>**第三方軟體**</ins>](https://man.twcc.ai/@twccdocs/doc-cos-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40TWSC%2Fguide-cos-connect-info-zh) 操作。
:::

檢視您計畫內所有的儲存體：

<!-- 1 start -->

<Tabs>
  <TabItem value="TWCC 入口網站" label="TWCC 入口網站" default>


- 於登入後首頁，選擇 「**雲端物件儲存**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_757364a59378a0dc8cf901334662df78.png)

:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::


- 進入「**雲端物件儲存管理**」頁面後，即可檢視計畫內所有的儲存體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8472a638afd0fdea3bfdad683e82e712.png)


  </TabItem>
  <TabItem value="TWCC CLI" label="TWCC CLI">


- 檢視計畫內所有的儲存體

```bash
twccli ls cos
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1497483a1367bb6cae188b80298199b.png)


  </TabItem>
</Tabs>
