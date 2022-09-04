---
sidebar_label: '從零開始'
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/getstarted-twnia2-submit-job-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/getstarted-twnia2-submit-job-zh'
---


# 【從零開始 TWCC】提交跨節點運算工作


【從零開始 TWCC】系列教學文件將以主題式方式為新手用戶深入淺出說明 TWCC 使用方式，將相關文件統整於此，讓您方便參考所需的資訊，順利邁開使用 TWCC 運算資源的第一步！<i class="fa fa-hand-peace-o" aria-hidden="true"></i>


## 主題與步驟說明


**【從零開始 TWCC】提交跨節點運算工作**

在此篇文章中，您將學會如何從註冊帳號、登入台灣杉二號 (命令列介面)，並使用高速運算資源完成提交跨節點平行運算工作。


:::info
**台灣杉二號 (命令列介面)？高速運算？跨節點平行運算？**

- 台灣杉二號 (命令列介面)為 TWCC 服務之一，以 「Slurm」 作為資源調度系統，並支援 MPI 功能，為容錯度高、高可擴展性叢集管理系統，請參考[<ins>服務概觀</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ftwnia2-overview-zh)了解更多。

- TWCC 單一高速運算主機具備 8 張高效能 NVIDIA V100 GPU，台灣杉二號 (命令列介面) 服務可執行跨節點高速平行運算，使用多於 8 張的 GPU 執行您的運算工作，系統提供大量的 GPU 可供您調用，搭配極高的吞吐量和極低延遲網路 InfiniBand、高效儲存系統設計，可以大幅降低數倍研發時間。請參考[<ins>服務簡介</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-compute-capability-zh)了解可用計算、儲存資源等基本資源資訊。

::: 


![](https://i.imgur.com/wryZywk.png)



:::info
本篇文章將使用到的 TWCC 服務：會員中心、[<ins>台灣杉二號 (命令列介面)</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh)。
:::


## 操作步驟教學

### Step 1. 準備工作：帳號、計畫(專案)、額度

<!-- 1 start -->


<details class="docspoiler">

<summary><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></summary> 

<br/>

1. [註冊帳號](https://iservice.nchc.org.tw/nchc_service/index.php?lang_type=)
2. 完成後，您可以[新申請計畫](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fapply-project-and-credit-zh)，或請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh) 將您[加入已存在之計畫](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-team-zh)。
3. 若您為租戶管理員，請為您的計畫[購買計畫額度](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2FS17dwAja4%3Ftype%3Dview)，計畫需有額度才能建立並使用 TWCC 資源。
4. 若您為租戶管理員，額度申請完成後，可將計畫母錢包拆分成多個子錢包分配固定額度給成員使用，若無拆分則統一使用計畫母錢包扣抵額度。請參考 [計畫錢包管理](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) 了解更多。


</details>

<!-- Space -->

<div style={{height:15+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><font style={{backgroundColor:'#008ad8', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></summary>

<br/>

1. [註冊帳號](https://tws.twcc.ai/)
2. 完成後，您可以
    - 申請[免費體驗專案](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0)，或
    - 聯絡業務 (sales@twsc.io) 我們將深入了解您的使用需求，並協助您新增使用專案與額度，或
    - 請 [租戶管理員<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh) 將您[加入已存在之專案](https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-manage-project-team-zh)。


</details>
<div style={{height:15+'px'}}></div>

### Step 2. 登入台灣杉二號 (命令列介面)
    
<!-- 1 start -->


<details class="docspoiler">

<summary><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></summary> 

<br/>
    
1. <ins><a href = "https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-hostname-pwd-otp-zh#%E6%9F%A5%E8%A9%A2%E4%B8%BB%E6%A9%9F%E5%B8%B3%E8%99%9F">準備主機帳號、密碼、OTP 認證碼</a></ins> <br/>
2. <ins><a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-login-and-logout-zh">登入主機</a></ins>


</details>

    

<!-- Space -->

<div style={{height:15+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><font style={{backgroundColor:'#008ad8', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></summary>

<br/>

1. <ins><a href = "https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-hostname-pwd-otp-zh#%E6%9F%A5%E8%A9%A2%E4%B8%BB%E6%A9%9F%E5%B8%B3%E8%99%9F">準備主機帳號、密碼、OTP 認證碼</a></ins>
2. <ins><a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-login-and-logout-zh">登入主機</a></ins>


</details>
<div style={{height:15+'px'}}></div>

### Step 3. 提交跨節點運算工作
    
請按照 [容器跨節點高速運算－AI Benchmark](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-twnia2-run-parallel-job-container-zh) 教學一步步完成，您將了解如何在台灣杉二號 (命令列介面) 中建立容器、撰寫運算工作的設定腳本，並提交工作、查看工作運行狀態或取消工作。
    
    
:::info
- 動手試試看！文章以 Horovod 撰寫的 benchmark script 為腳本範例，您可以直接複製內容建立工作腳本。
- 不同 Queue 針對工作最長運行時間、可提交的工作數量有所不同，您可以參考 [<ins>Queue 與計算資源使用說明</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-queue-zh)，依需求選擇，並修改腳本設定。
- 使用 `sacct -X` 指令可查詢運算工作狀態，若運算工作已完成 (**`COMPLETED`**)、取消 (**`CANCELLED`**)、執行失敗 (**`FAILED`**)，系統將會以使用的 GPU 數量、總時長計算並扣底額度。
- 使用 `scancel <JOB_ID>` 可取消運算工作，停止繼續計費。<div style={{height:15+'px'}}></div>
- 費率資訊請參考價目表：<a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E9%AB%98%E9%80%9F%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-High-performance-Computing-HPC"><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></a> <a href="https://man.twcc.ai/@twsdocs/pricing-zh#%E9%AB%98%E9%80%9F%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-High-performance-Computing-HPC"><font style={{backgroundColor:'#008ad8', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></a><div style={{height:15+'px'}}></div>
- 您可於會員中心檢視額度與資源用量 <a href="https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-view-billing-resource-usage-zh"><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.2+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></a>

:::


## 相關 FAQ 
- [會員、計畫與帳務](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-membership-project-billing-zh)
- [台灣杉二號 (命令列介面) (TWNIA2)](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-twnia2-zh)

