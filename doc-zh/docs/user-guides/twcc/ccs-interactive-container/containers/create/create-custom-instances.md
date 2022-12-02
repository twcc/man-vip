---
sidebar_position: 2
sidebar_label: '客製化容器'
slug: '/user-guides/twcc/ccs-interactive-container/create-custom-container'
sync_original_production: '' 
sync_original_preview: '' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 以映像檔建立客製化容器

複本建立完成後，您即可在需要時使用複本建立新的容器。

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 由服務列表點選「**開發型容器**」，在「**開發型容器管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8085ef8c082d3387eb95477be448a38a.png)

* 在選擇映像檔類型頁面，點選「**Custom Image**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_81035131a533a3a71a3df759542725c3.png)

* 填寫容器基本資訊與硬體規格配置，並選擇自訂的映像檔，接著點擊「**下一步：儲存資訊>**」，其他步驟同建立開發型容器。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eb232de503b359b00ddf85467ca46c87.png)

:::info
同計畫內的成員皆可以共享使用複本，在映像檔下拉清單內可見計畫下所有的容器複本。
:::

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- 建立映像檔類型`Custom Image`中，映像檔規格與 tag 為 `tensorrt-19.08-py3:dup1`的容器，並將複本命名為 `dupcli`。

```bash
twccli ls ccs -img "Custom Image"
twccli mk ccs -itype "Custom Image" -img "tensorrt-19.08-py3:dup1" -n dupcli
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3310c270ae57370c22704b470cccbe60.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b2071ecdbafd5db2f98fbbf11b3e2ea.png)

</TabItem>
</Tabs>