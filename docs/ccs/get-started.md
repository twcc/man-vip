---
sidebar_label: '從零開始'
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/getstarted-ccs-create-connec-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/getstarted-ccs-create-connec-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 【從零開始 TWCC】建立並連線開發型容器

【從零開始 TWCC】系列教學文件將以主題式方式為新手用戶深入淺出說明 TWCC 使用方式，將相關文件統整於此，讓您方便參考所需的資訊，順利邁開使用 TWCC 運算資源的第一步！<i class="fa fa-hand-peace-o" aria-hidden="true"></i>


## 主題與步驟說明

**【從零開始 TWCC】建立並連線開發型容器**

在此篇文章中，您將學會如何從註冊帳號、登入 TWCC 使用者網站，並建立開發型容器、使用 Jupyter Notebook 快速連線進入容器。


:::info
**開發型容器？Jupyter Notebook？**

- 開發型容器為 TWCC 服務之一，採用將作業系統層虛擬化的容器技術，可快速交付軟體。開發型容器提供多種 AI framework 選擇，並可建立高效能的 NVIDIA V100 GPU 環境，請參考[<ins>服務概觀</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/%2F%40twccdocs%2Fccs-overview-zh)了解更多。

- TWCC 提供開發工具 [<ins>Jupyter Notebook</ins>](https://jupyter.org/)，可作為快速與容器運算資源互動的介面，可編寫並執行程式。透過網頁操作容器，友善又好上手！

::: 

![](https://i.imgur.com/OTa5mVF.png)


:::info
本篇文章將使用到的 TWCC 服務：會員中心、[<ins>開發型容器</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh)。
:::

## 操作步驟教學

### Step 1. 準備工作：帳號、計畫(專案)、額度

<details class="docspoiler">

<summary><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Academic&nbsp;</b></font></summary> 

1. [註冊帳號](https://iservice.nchc.org.tw/nchc_service/index.php?lang_type=)
2. 完成後，您可以[新申請計畫](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fapply-project-and-credit-zh)，或請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh) 將您[加入已存在之計畫](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-team-zh)。
3. 若您為租戶管理員，請為您的計畫[購買計畫額度](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2FS17dwAja4%3Ftype%3Dview)，計畫需有額度才能建立並使用 TWCC 資源。
4. 若您為租戶管理員，額度申請完成後，可將計畫母錢包拆分成多個子錢包分配固定額度給成員使用，若無拆分則統一使用計畫母錢包扣抵額度。請參考 [計畫錢包管理](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) 了解更多。


</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></summary>

1. [註冊帳號](https://tws.twcc.ai/)
2. 完成後，您可以
    - 申請[免費體驗專案](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0)，或
    - 聯絡業務 (sales@twsc.io) 我們將深入了解您的使用需求，並協助您新增使用專案與額度，或
    - 請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh) 將您[加入已存在之專案](https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-manage-project-team-zh)。


</details>


### Step 2. 登入 TWCC 使用者網站
    
Step 1. 準備工作完成後，您就可以輸入帳號、密碼輕鬆[登入 TWCC](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-signin-twcc-zh)！ 
    


### Step 3. 建立並連線開發型容器
    
1. 請按照 [建立開發型容器](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-ccs-create-zh#%E5%BB%BA%E7%AB%8B%E9%96%8B%E7%99%BC%E5%9E%8B%E5%AE%B9%E5%99%A81) 教學步驟一步步完成，您將了解如何在 TWCC 使用者網站中建立容器。
2. 建立完成後，請按照 [連線容器 - Jupyter Notebook](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-ccs-connect-zh#Jupyter-Notebook) 步驟，即可快速連線進入您的容器。



:::info

- 動手試試看！使用網站預設設定，點擊幾步就能建立您專屬的容器！
- 有多樣來自 NGC 的完整優化 AI framework 提供您選擇，請參考 [<ins>TWCC 容器映像檔</ins>](https://man.twcc.ai/@twccdocs/ccs-concept-image-main-zh) 了解更多。
- [<ins>刪除容器</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-ccs-manage-zh#%E5%88%AA%E9%99%A4%E5%AE%B9%E5%99%A8)，可停止繼續計費。
- 費率資訊請參考價目表：<a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS"><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Academic&nbsp;</b></font></a>、<a href="https://man.twcc.ai/@twsdocs/pricing-zh#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS"><font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Enterprise&nbsp;</b></font></a>
- 您可於會員中心檢視額度與資源用量 <a href="https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-view-billing-resource-usage-zh"><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Academic&nbsp;</b></font></a>

:::



## 相關 FAQ 
- [會員、計畫與帳務](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-membership-project-billing-zh)
- [容器運算服務 (CCS)](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-ccs-zh)