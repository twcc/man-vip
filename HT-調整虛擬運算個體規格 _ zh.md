---
title: HowTo：調整虛擬運算個體規格 | zh
tags: HowTo, VCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# HowTo：調整虛擬運算個體規格

若您需調整虛擬運算個體的規格，本文將提供教學步驟，幫助您使用「**映像檔功能**」將個體資料與內部配置，快速轉移至新規格個體。

以下內容以 **v.8xsuper** 型號建立之個體，調整至 **v.super** 型號為操作範例，映像檔選用 Ubuntu。
:::info 
{%hackmd @docsharedstyle/note-zh %}
完整型號、規格與價格之比較，請參考[<ins>價目表</ins>](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#虛擬運算服務-Virtual-Compute-Service-VCS)。
:::


### Step 1. 建立虛擬運算個體映像檔

透過對虛擬運算個體建立映像檔，保存個體資料。

:::warning
{%hackmd @docsharedstyle/tip-zh %}
1. 請問映像檔建立的時間需要多久？請參考[<ins>TWCC FAQ 虛擬運算服務 > 個體映像檔 > Q1</ins>](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-zh#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7)。
2. 如何縮減映像檔建立的時間？ 請參考[<ins>TWCC FAQ 虛擬運算服務 > 個體映像檔 > Q2</ins>](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-vcs-zh#%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7)。
:::

- 進入「**虛擬個體詳細資料頁**」，確認需調整的個體規格 (型號：**v.8xsuper**，規格：`vCPU 32 cores; Memory 100 GB; system disk 100 GB`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d41f8466835e7d66d0d3a519873300ac.png)


- 點選「**映像檔**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_31f44da7141378259da41efc7120ff32.png)


- 輸入***映像檔名稱*** 並且點選「**確認**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ed2e50a4cd9980029e9dd4d291761ede.png)


- 完成建立虛擬運算個體映像檔

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e1a78aa185d26f10ab476109712e155a.png)




### Step 2. 利用映像檔建立新規格的虛擬運算個體

- 進入「**虛擬運算**」服務，在「**虛擬運算個體管理**」頁面，點擊「**＋建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4ce8a8f327be7650953856f715b4acfe.png)


- 輸入 ***虛擬運算個體名稱***，並且選取已建立好的映像檔

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c1229c876a621019ad27022eca1534f.png)


- 於基本設定處選取型號 **v.super**，並且點選「**檢閱 + 建立**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9364431f90d4111f4c96595365430e01.png)


- 規格調整完成！成功以映像檔建立虛擬運算個體 (型號：**v.super**，規格：`vCPU 02 cores; Memory 16 GB; system disk 100 GB`)，將原個體資料轉移至新規格個體。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_56fef6bb965ea6c5be0a82f4a9f0c3eb.png)


:::info 
{%hackmd @docsharedstyle/note-zh %}
- 若您原虛擬運算個體有連結資料磁碟，請先將資料磁碟分離，再連結至新個體。
- 若原虛擬運算個體不再繼續使用，建議您刪除該個體，回收計算資源。
:::


