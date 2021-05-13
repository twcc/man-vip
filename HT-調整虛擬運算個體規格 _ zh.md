---
title: HowTo：調整虛擬運算個體規格 | zh
tags: HowTo, VCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# HowTo：調整虛擬運算個體規格

若您需調整虛擬運算個體的規格，本文將提供教學步驟，幫助您使用「**快照功能**」將個體資料與內部配置，快速轉移至新規格個體。

以下內容以 **v.12xsuper** 型號建立之個體，調整至 **v.super** 型號為操作範例，映像檔選用 Ubuntu。
:::info 
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 完整型號、規格與價格之比較，請參考[<ins>價目表</ins>](https://www.twcc.ai/doc?page=price#%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Virtual-Compute-Service-VCS-%E2%80%BB-%E5%8D%B3%E5%B0%87%E7%99%BC%E5%94%AE%EF%BC%8C%E8%AB%8B%E6%B4%BD%E5%AE%A2%E6%9C%8D%E4%BA%BA%E5%93%A1%E4%BA%86%E8%A7%A3%E6%9B%B4%E5%A4%9A%E3%80%82)。
:::


### Step 1. 製作虛擬運算個體快照

透過對虛擬運算個體製作快照，保存個體資料。

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **提示：** 
1. 請問快照建立的時間需要多久？請參考[<ins>TWCC FAQ 虛擬運算服務 > 個體快照 > Q1</ins>](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-zh#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7)。
2. 如何縮減快照建立的時間？ 請參考[<ins>TWCC FAQ 虛擬運算服務 > 個體快照 > Q2</ins>](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-zh#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7)。
:::

- 進入「**虛擬個體詳細資料頁**」，確認需調整的個體規格 (型號：**v.12xsuper**，規格：`vCPU 48 cores; Memory 100 GB; system volume 100 GB`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_83644a60028400826f375fda8fe245ad.png)


- 點選「**快照**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6fdddd20fa9bb758aace988f14c4d1de.png)


- 輸入***快照名稱*** 並且點選「**確認**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_89e2db0503bf4f4a683d4a9e44123a6e.png)


- 完成建立虛擬運算個體快照

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4044bf6448cab9399afd805554639cfe.png)



### Step 2. 利用快照建立新規格的虛擬運算個體

- 進入「**虛擬運算**」服務，在「**虛擬運算個體管理**」頁面，點擊「**＋建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_afea0cc128aaa2fd92668d8647f130ea.png)


- 輸入 ***虛擬運算個體名稱***，並且選取已建立好的快照映像檔

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d70d8853ea0b56fab98555a0d056d459.png)


- 於基本設定處選取型號 **v.super**，並且點選「**檢閱 + 建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_34b2f990876cda17c878bc38f82fc079.png)


- 規格調整完成！成功利快照建立虛擬運算個體 (型號：**v.super**，規格：`vCPU 02 cores; Memory 16 GB; system volume 100 GB`)，將原個體資料轉移至新規格個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_199b4f0bd0ee1ced0db17ee0e9631fcc.png)


:::info 
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：**
- 若您原虛擬運算個體有連結 Volume，請先將 Volume 分離，再連結至新個體。
- 若原虛擬運算個體不再繼續使用，建議您刪除該個體，回收計算資源。
:::


