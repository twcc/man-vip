---
sidebar_label: 'Getting Started'
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/getstarted-twnia2-submit-job-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/getstarted-twnia2-submit-job-en'
---


# 【Getting Started with TWCC】Submitting cross-node computing jobs


The "Getting Started with TWCC" series of tutorials will provide novice users with an easily understandable explanation of how to use TWCC. We organize related documents here so that you can easily refer to the information you need to take the first step in using TWCC computing resources! <i class="fa fa-hand-peace-o" aria-hidden="true"></i>


## Guide of the topic and steps


**【Getting Started with TWCC】Submitting cross-node computing jobs**

In this article, you will learn how to register an account, log into Taiwania2 (HPC CLI), create an interactive container, and finish submitting cross-node parallel computing jobs using HPC Job.


:::info
**Taiwania2 (HPC CLI)？HPC Job？Cross-node parallel computing？**

- Taiwania2 (HPC CLI) uses **Slurm** which is well-suited for different sizes of Linux clusters, supports MPI, and is a fault-tolerant, and highly scalable cluster management and job scheduling system. Please refer to [<ins>Service overview</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ftwnia2-overview-zh) for more information.

- TWCC single HPC job host with 8 high-performance NVIDIA V100 GPU, Taiwania2 (HPC CLI) allows for high-speed parallel computing across nodes, using more than 8 GPUs for your computational work. The system provides a large number of GPUs for you to call on, and with the extremely high throughput and low latency network InfiniBand, the efficient storage system design can greatly reduce the development time by several times. Please refer to [<ins>Available computing resources</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-compute-capability-zh) to learn about available computing and storage resources and other basic resource information.
::: 


![](https://i.imgur.com/wryZywk.png)



:::info
TWCC services to be used in this article: Member Center and [<ins>Taiwania2 (HPC CLI)</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh).
:::


## Step by step instructions

### Step 1. Prerequisites: accounts, projects and credits

<!-- 1 start -->


<details class="docspoiler">

<summary><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></summary> 

<br/>

1. [Sign up for an account](https://iservice.nchc.org.tw/nchc_service/index.php?lang_type=#firstPage)
2. Once finished, you can [apply for a new project](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fapply-project-and-credit-zh), or ask [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.vip/en/docs/role_permission/intro) to [add you to an available project](https://man.twcc.vip/en/docs/member/user-guides/project-management/project-member-management).
3. If you are a Tenant Admin, please [purchase credits](https://man.twcc.vip/en/docs/member/user-guides/billing/apply_credits) for your project, TWCC resources can only be created and used when there are credits in the project.
4. If you are a Tenant Admin, after the credit application is completed, you can split the project's parent wallet into multiple sub-wallets to allocate a fixed amount to your members. If there is no split, the project's parent wallet credit will be used directly. Please refer to [Project Wallet Management](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) for more information.


</details>

<!-- Space -->

<div style={{height:15+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><font style={{backgroundColor:'#008ad8', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></summary>

<br/>

1. [Sign up for an account](https://tws.twcc.ai/)
2. Once finished, you can
    - Apply for a [Free Experience Program](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0), or
    - Contact TWS Sales (sales@twsc.io) for an in-depth understanding of your needs and we will assist you in adding new projects and credits, or
    - Ask [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.vip/en/docs/role_permission/intro) to [add you to an available project](https://man.twcc.vip/en/docs/member/user-guides/project-management/project-member-management).


</details>

<div style={{height:15+'px'}}></div>

### Step 2. Sign in to Taiwania2 (HPC CLI)
    
<!-- 1 start -->


<details class="docspoiler">

<summary><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></summary> 

<br/>
    
1. <ins><a href = "https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-hostname-pwd-otp-zh#%E6%9F%A5%E8%A9%A2%E4%B8%BB%E6%A9%9F%E5%B8%B3%E8%99%9F">Inquire supercomputer account, reset password and obtain OTP authentication code</a></ins> <br/>
2. <ins><a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-login-and-logout-zh">Log in Taiwania 2 (HPC CLI)</a></ins>


</details>

    

<!-- Space -->

<div style={{height:15+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><font style={{backgroundColor:'#008ad8', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></summary>

<br/>

1. <ins><a href = "https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-hostname-pwd-otp-zh#%E6%9F%A5%E8%A9%A2%E4%B8%BB%E6%A9%9F%E5%B8%B3%E8%99%9F">Inquire supercomputer account, reset password and obtain OTP authentication code</a></ins>
2. <ins><a href = "https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-login-and-logout-zh">Log in Taiwania 2 (HPC CLI)</a></ins>


</details>
<div style={{height:15+'px'}}></div>

### Step 3. Submitting cross-node computing jobs
    
Please follow the [Run parallel computing with multi-nodes on containers －AI Benchmark](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-twnia2-run-parallel-job-container-zh)to complete the step, you will learn how to create containers in Taiwania2 (HPC CLI), write setup scripts for compute jobs, and submit jobs, view job status, or cancel jobs.
    
    
:::info
- Try it out! This article uses a benchmark script written by Horovod as an example script, so you can copy the content directly to create a working script.
- Different queues have different maximum job run times and can submit different numbers of jobs, please refer to [<ins>Queues and computing resources</ins>](https://man.twcc.ai/@twccdocs/doc-twnia2-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-twnia2-queue-zh), choose according to your needs, and modify the script settings.
- Use the `sacct -X` command to check the status of the operation if it is completed (**`COMPLETED`**), canceled (**`CANCELLED`**), or failed (**`FAILED`**), The system will use the number of GPUs used, the total number of hours, and deduct the credit.
- Use `scancel <JOB_ID>` to cancel the job and stop further billing.<div style={{height:15+'px'}}></div>
- Please refer to the price list for rate information: <a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E9%AB%98%E9%80%9F%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-High-performance-Computing-HPC"><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></a> <a href="https://man.twcc.ai/@twsdocs/pricing-zh#%E9%AB%98%E9%80%9F%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-High-performance-Computing-HPC"><font style={{backgroundColor:'#008ad8', borderRadius: 30+'px', padding: 0.3+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></a><div style={{height:15+'px'}}></div>
- You may view your credits and resource usage in the Member Center. <a href="https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-view-billing-resource-usage-zh"><font style={{backgroundColor:'#FF0000', borderRadius: 30+'px', padding: 0.2+'em', fontSize: 16+'px'}}><font style={{color:'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></a>

:::


## Related FAQ 
- [Membership, Project and Billing](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-membership-project-billing-zh)
- [Taiwania2 (HPC CLI)](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-twnia2-zh)
