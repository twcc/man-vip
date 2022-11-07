---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/getstarted-hfs-adjust-connec-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/getstarted-hfs-adjust-connec-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 【從零開始 TWCC】調整 HFS 容量並連線傳輸節點

【從零開始 TWCC】系列教學文件將以主題式方式為新手用戶深入淺出說明 TWCC 使用方式，將相關文件統整於此，讓您方便參考所需的資訊，順利邁開使用 TWCC 運算資源的第一步！<i class="fa fa-hand-peace-o" aria-hidden="true"></i>

## 主題與步驟說明

**【從零開始 TWCC】調整 HFS 容量並連線傳輸節點**

在此篇文章中，您將學會如何從註冊帳號、調整 HFS 容量，並連線傳輸節點。


:::info
**HFS？**

高速檔案系統 (Hyper File System, HFS)為 TWCC 服務之一，為可擴展、高效能的平行檔案系統，允許在不同節點上同時存取同份文件或不同份文件並可提供高速安全的資料儲存，為容器服務及 HPC 高速運算任務、台灣杉二號提供高效、安全及彈性之資料存取與串接，請參考[<ins>服務概觀</ins>](../hfs/overview.md)了解更多。

::: 


![](https://i.imgur.com/4ggibe9.png)




:::info
本篇文章將使用到的 TWCC 服務：會員中心、[<ins>高速檔案系統</ins>](../hfs/overview.md)。
:::


## 操作步驟教學

### Step 1. 準備工作：帳號、計畫(專案)、額度

<!-- 1 start -->
<details class="docspoiler">

<summary>

<font style={{backgroundColor:'#FF0000', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}>

<b>&nbsp;Academic&nbsp;</b>

</font>

</font>

</summary> 


1. [註冊帳號](https://iservice.nchc.org.tw/nchc_service/index.php?lang_type=)
2. 完成後，您可以[新申請計畫](/docs/member/user-guides/billing/apply-credits.md)，或請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](../member/concepts/overview.md) 將您[加入已存在之計畫](/docs/member/user-guides/manage-projects/manage-project-members.md)。
3. 若您為租戶管理員，請為您的計畫[購買計畫額度](/docs/member/user-guides/billing/apply-credits.md)，計畫需有額度才能建立並使用 TWCC 資源。
4. 若您為租戶管理員，額度申請完成後，可將計畫母錢包拆分成多個子錢包分配固定額度給成員使用，若無拆分則統一使用計畫母錢包扣抵額度。請參考 [計畫錢包管理](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) 了解更多。


</details>

<!-- Space -->

<div style={{height:15+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary>

<font style={{backgroundColor:'#008ad8', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}> 

<b>&nbsp;Enterprise&nbsp;</b>

</font>

</font>

</summary>


1. [註冊帳號](https://tws.twcc.ai/)
2. 完成後，您可以
    - 申請[免費體驗專案](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0)，或
    - 聯絡業務 (sales@twsc.io) 我們將深入了解您的使用需求，並協助您新增使用專案與額度，或
    - 請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](../member/concepts/overview.md) 將您[加入已存在之專案](../member/user-guides/manage-projects/manage-project-members.md)。


</details>
<div style={{height:15+'px'}}></div>

### Step 2. 調整 HFS 容量

TWCC 提供您至少 /home、/work 各 100 GB 的免費容量空間，若需調提高或調降容量，請參考以下步驟：

<!-- 1 start -->


<details class="docspoiler">

<summary> 

<font style={{backgroundColor:'#FF0000', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}>

 <b>&nbsp;Academic&nbsp;</b>
 
 </font>
 
 </font>
 
 </summary> 

    
1. 登入[會員中心](https://iservice.nchc.org.tw/nchc_service/index.php) > 選擇「會員中心」> 選擇「申購管理」> 選擇「高速檔案系統 (HFS)」
    
![](https://i.imgur.com/7j9JHPK.png)
    
2. 左半部提供容量、調整說明、個人空間使用現況；
   右半部 (上) 則可選擇變更付費綁定計畫，右半部 (下) 則可以輸入 /work 或 /home 欲購買的額度 > 點選「套用」> 點選「提交」，調整容量。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_958bb3f04232f8928263156f0798b13f.png)

</details>

<!-- Space -->

<div style={{height:15+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary>

<font style={{backgroundColor:'#008ad8', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}> 

<b>&nbsp;Enterprise&nbsp;</b>
 
 </font>
 
 </font>
 
 </summary>

    
1. 登入[會員中心](https://iservice.nchc.org.tw/nchc_service/index.php) > 選擇「會員中心」> 選擇「申購管理」> 選擇「申購高速檔案系統 (HFS)」

![](https://i.imgur.com/IzCTOiD.png)

2. 左半部個人空間使用現況；
   右半部 (上) 提供調整說明、並可選擇變更付費綁定計畫，右半部 (下) 則可以拖曳數字的方式，調整 /work 或 /home 欲購買的額度 > 點選「提交」以調整容量。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_df824be235ea4480028561152af5c57d.png)


</details>
<div style={{height:15+'px'}}></div>

:::info
- 費率資訊請參考價目表：<a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E9%AB%98%E9%80%9F%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-High-performance-Computing-HPC"><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></a> <a href="../pricing"><font style={{backgroundColor:'#008ad8', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></a><div style={{height:15+'px'}}></div>
- 您可於會員中心檢視額度與資源用量 <a href="https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-view-billing-resource-usage-zh"><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.2+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></a>
:::

### Step 3. 連線傳輸節點
    
1. 請按照 [連線傳輸節點](user-guides/connect-data-transfer-node.md) 教學步驟一步步完成，您將了解透過「金鑰」或是「主機密碼 + OTP」的方式連線傳輸節點。後續連線擇一使用即可！
2. 連線後，您即可按照 [檔案管理](user-guides/manage-files.md) 說明，管理您空間的檔案，上傳、下載或刪除。


## 相關 FAQ 
- [會員、計畫與帳務](../faq/member-product-portal/member-project-billing.md)
- [高速檔案系統 (HFS)](../faq/storage/hfs.md)