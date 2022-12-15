---
sidebar_position: 1
sidebar_label: '開發型容器'
slug: '/user-guides/twcc/ccs-interactive-container/create-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-create-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-create-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 建立開發型容器

您可以系統預設資訊以一個指令完成容器建立，或是依需求選擇適合的容器型號。

完整容器型號 (含 GPU 數量與其他資源大小)，請參考[價目表](/pricing.mdx#容器運算服務-container-compute-service-ccs)。

<br/>


## 開始之前

- 若尚未註冊使用帳號，請先[註冊 TWS](/user-guides/tws-member-center/manage-member-accounts/sign-up-for-tws.md)。
- 若選擇使用 TWCC 入口網站操作，請先登入 [TWCC 入口網站](https://tws.twcc.ai/)，並進入[開發型容器管理](/user-guides/twcc/ccs-interactive-container/containers/manage-containers.md)頁。
- 若選擇使用 TWCC CLI 操作，請先[安裝 TWCC CLI](https://github.com/twcc/TWCC-CLI) 、並[登入](https://github.com/twcc/TWCC-CLI)。

<br/>


## 建立開發型容器

<Tabs>
<TabItem value="TWCC 入口網站" label="TWCC 入口網站">

* 進入[開發型容器管理](/user-guides/twcc/ccs-interactive-container/containers/manage-containers.md)頁，並點擊「**＋建立**」。

![](https://i.imgur.com/lpBLaPf.png)

* 選擇映像檔類型：您可瀏覽並選擇 NGC 優化之深度學習框架，或直接於左上方搜尋欲使用的框架名稱 (例：PyTorch, TensorFlow...等)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f3c003776fbf81f0ebae37ae3dba97e3.png)

:::tip
1. TWCC 提供的 NGC 容器映像檔類型、版本、套件，請參考：[<ins>容器映像檔</ins>](/user-guides/twcc/ccs-interactive-container/images/overview.md)
2. 首次選用後，映像檔會記錄儲存於「**最近使用**」區塊，加快您下次選用的速度（清除瀏覽器歷史紀錄將會重新記錄）。
:::

* 填寫容器基本資訊與硬體規格配置，並選擇「**開啟**」或「**關閉**」刪除保護機制。<br/>
完成後，接著點擊 **「下一步：儲存資訊>」** 。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ba201ac8e196f736b6d0616938766c16.png)

:::info
開啟「刪除保護機制」，在您刪除資源之前，需先關閉保護機制後才能繼續進行刪除步驟，可防止資源誤刪，導致服務中斷。
:::

* 容器建立後系統會自動掛載高速檔案系統 (HFS) 的兩個目錄 (/home 與 /work) 至容器，以利使用者在運行人工智慧運算時擁有更好的性能，亦可使用 TWCC 雲端物件儲存服務。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d801834abe5f168c9fc1d77253e106f4.png)

* 接著點擊「**下一步：環境變數>**」，可設定符合您需求的環境變數，詳細說明與設定範例請參考 [<ins>設定環境變數</ins>](https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-zh)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ebcf6338e3bba3e49f69c4eb3dcefd00.png)

* 點擊「**下一步：檢閱+建立>**」，檢視整個容器的規格和價格，確定後點選「**建立**」即完成。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0eab8ab1660cace6b843aea7cbb1e808.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cb943abf574920c1a1a46b62e4695590.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

**指令**

```bash
twccli mk ccs [-n]      #容器名稱
              [-itype]  #映像檔類型
              [-img]    #映像檔版本
              [-gpu]    #GPU 數量
              [-envk]   #環境變數 Key
              [-envv]   #環境變數 Value
```

:::info
- 若不帶任何參數則以預設資訊建立容器：

| 映像檔類型、映像檔 | 容器名稱 |硬體設定|
| -------- | -------- | -------- |
| TensorFlow (latest environment)    | twcc-cli     | 1 GPU + 04 cores + 090GB memory |

- 環境變數詳細說明與設定範例請參考 [<ins>設定環境變數</ins>](https://man.twcc.ai/@twccdocs/howto-ccs-vcs-setup-env-variable-zh)。
:::

<br/>

**範例**

- 建立名稱為 **`cusccs`**、映像檔類型 **`Caffe2`**，映像檔規格為 **`caffe2-18.08-py3-v1:latest`**、GPU 數量 **`2`** 的容器。

```bash
twccli mk ccs -itype "Caffe2" -img "caffe2-18.08-py3-v1:latest" -gpu 2 -n cusccs
```

:::caution
- 容器名稱命名字元條件：需為**小寫字母或數字**，**首字元需為小寫字母**，**長度 6-16 個字元**。
-  若設定不符合以上條件，將出現以下錯誤訊息：
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095834bd7ee5d99d3a70596a7c462629.png)
:::

</TabItem>
</Tabs>

---

:::info
1. 詳細映像檔介紹與說明請參考 [<ins>TWCC 容器映像檔</ins>](/user-guides/twcc/ccs-interactive-container/images/overview.md)。
2. 容器型號、資源比例與費率，請參考[<ins>價目表</ins>](/pricing.mdx#容器運算服務-container-compute-service-ccs)。
3. **可用記憶體容量**若以 GiB (1 GiB = 2<sup>30</sup> bytes) 為計算單位，以 c.super 為例，則可用記憶體容量為 84 GiB，請參考[<ins>記憶體容量換算</ins>](/concepts-tutorials/twcc/ccs-interactive/concepts/container-memory-capacity-conversion.md)了解更多。
:::

:::caution
1. 為使資料完整保存，請將您的重要資料存放於高速檔案系統 (HFS) 中，並避免將資料存放於容器磁碟內。
2. **容器建立後，在您刪除之前將會持續計費**。
:::

:::info **相關文件**
- <a href="/docs/user-guides/twcc/cos"><ins>雲端物件儲存服務</ins></a>、<a href="/docs/user-guides/twcc/hfs"><ins>高速檔案系統</ins></a>
:::