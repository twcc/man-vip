---
sidebar_position: 2
title: '客製化個體'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-create-custom-instance-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-create-custom-instance-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立客製化個體

建立 TWCC 虛擬運算個體後，您可以進入個體部署您需要的工具、打造您專屬的客製化環境，並建立[**映像檔**](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-zh)保存工作環境，即可重複建立相同客製化的環境，也可以作為備份個體設定之措施，避免個體毀損遺失。

:::info
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-zh#虛擬運算服務)。
:::

## 開始之前

- 若尚未註冊使用帳號，請先[註冊 TWCC](https://www.twcc.ai/)。
- 若選擇使用 TWCC 入口網站操作，請先登入 [TWCC 入口網站](https://www.twcc.ai/)。
- 若選擇使用 TWCC CLI 操作，請先[安裝 TWCC CLI](https://man.twcc.ai/@twccdocs/doc-cli-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-cli-install-linux-zh)、並[登入](https://man.twcc.ai/@twccdocs/doc-cli-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-cli-signin-zh)。


- [建立虛擬運算個體](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh)，部署工作環境，並建立個體[映像檔](https://man.twcc.ai/@twccdocs/vcs-vds-instance-image-zh)；或請來源計畫將映像檔[分享](https://man.twcc.ai/@twccdocs/vcs-vds-manage-instance-image-zh)至您的計畫。



## 建立客製化個體

選用計畫內建立的映像檔、其他計畫分享的映像檔，建立個體步驟不同，請依適用情境參以下操作步驟。

### 選用計畫內建立的映像檔

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

:::tip
<details>

<summary> 快速動畫教學 <i class="fa fa-file-video-o" aria-hidden="true"></i> </summary>

![](https://i.imgur.com/XLTl6xa.gif)

</details>
:::

建立步驟同 [<ins>建立虛擬運算個體</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh)，僅「**映像檔**」改選擇所要回復的映像檔版本 `(private)xxx您自訂的映像檔名稱xxx`，即可完成建立。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_020639a28b42ede29aa4ca4ceb1612a5.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>


### 選用來源計畫分享的映像檔

<Tabs>

<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

建立步驟同 [<ins>建立虛擬運算個體</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh)，僅「**映像檔類型**」需先依映像檔的作業系統，選擇 Custom Image Linux 或 Custom Image Windows，才能接續選擇來源計畫分享的映像檔。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cbe7e981b40b59d824db31876356bddf.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>

<br/>

:::caution
選用映像檔建立虛擬運算個體，當狀態為建立中 (**`Starting`**) 時，為確保個體可完整建立，**請勿刪除映像檔**。
:::

:::info
同一用戶一分鐘內僅能執行各 10 次建立、刪除虛擬運算個體。
:::
