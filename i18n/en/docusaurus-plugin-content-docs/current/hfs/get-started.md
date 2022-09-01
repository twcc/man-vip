---
sidebar_label: 'Getting Started with TWCC'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 【Getting Started with TWCC】

The "Getting Started with TWCC" series of tutorials will provide novice users with an easily understandable explanation of how to use TWCC. We organize related documents here so that you can easily refer to the information you need to take the first step in using TWCC computing resources! <i class="fa fa-hand-peace-o" aria-hidden="true"></i>

## Guide of the topic and steps

**【Getting Started with TWCC】 Create and connect Interactive Containers**

In this article, you will learn how to sign up for an account, sign in to TWCC, create a interactive container, and use Jupyter Notebook to quickly connect to the container.


:::info
**HFS？**

HFS is one of the TWCC services, it is a scalable, allows simultaneous access to the same file or different files on different nodes and provides high-speed and secure data storage, providing efficient, safe and flexible data transfer for Container Compute Service, HPC Job, and Taiwania 2 (HPC CLI), please refer to[<ins>Service Overview</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/%2F%40twccdocs%2Fhfs-overview-zh) to learn more.

::: 


![](https://i.imgur.com/4ggibe9.png)




:::info
TWCC services to be used in this article: Member Center, [<ins>Hyper File System</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh).
:::


## Operating procedure description

<details class="docspoiler">

<summary>

<font style={{backgroundColor:'#FF0000', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}>

<b>&nbsp;Academic&nbsp;</b>

</font>

</font>

</summary> 


1. [Sign up for an account](https://iservice.nchc.org.tw/nchc_service/index.php?lang_type=#firstPage)
2. Once finished, you can [apply for a new project](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fapply-project-and-credit-zh), or ask [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.vip/en/docs/role_permission/intro) to [add you to an available project](https://man.twcc.vip/en/docs/member/user-guides/project-management/project-member-management).
3. If you are a Tenant Admin, please [purchase credits](https://man.twcc.vip/en/docs/member/user-guides/billing/apply_credits) for your project, TWCC resources can only be created and used when there are credits in the project.
4. If you are a Tenant Admin, after the credit application is completed, you can split the project's parent wallet into multiple sub-wallets to allocate a fixed amount to your members. If there is no split, the project's parent wallet credit will be used directly. Please refer to [Project Wallet Management](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) for more information.


</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary>

<font style={{backgroundColor:'#008ad8', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}> 

<b>&nbsp;Enterprise&nbsp;</b>

</font>

</font>

</summary>


1. [Sign up for an account](https://tws.twcc.ai/)
2. Once finished, you can
    - Apply for a [Free Experience Program](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0), or
    - Contact TWS Sales (sales@twsc.io) for an in-depth understanding of your needs and we will assist you in adding new projects and credits, or
    - Ask [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.vip/en/docs/role_permission/intro) to [add you to an available project](https://man.twcc.vip/en/docs/member/user-guides/project-management/project-member-management).


</details>


### Step 2. Adjustment HFS Capacity

TWCC provides a minimum of 100GB of free space for your /home and /work. To increase or decrease the capacity, please refer to the following steps:

<!-- 1 start -->


<details class="docspoiler">

<summary> 

<font style={{backgroundColor:'#FF0000', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}>

 <b>&nbsp;Academic&nbsp;</b>
 
 </font>
 
 </font>
 
 </summary> 

    
1. Login [Member Center](https://iservice.nchc.org.tw/nchc_service/index.php) > Select "Member Center" > Select "Purchases" > Select "High Speed File System (HFS)"
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14f95145ab43343e88dbbec779da6ace.png)
    
2. The left half provides capacity, adjustment instructions and personal space usage status,
   and the right half (top) has the option to change the paid bundle items, On the right half (bottom), you can enter the amount you want to purchase by entering /work or /home > click "Apply" > click "Submit" to adjust the capacity.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_23c64c3321fa24ad0d433c0b6b0be3c0.png)

</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary>

<font style={{backgroundColor:'#008ad8', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>

<font style={{color:'white'}}> 

<b>&nbsp;Enterprise&nbsp;</b>
 
 </font>
 
 </font>
 
 </summary>

    
1. Login [Member Center](https://iservice.nchc.org.tw/nchc_service/index.php) > 選擇「會員中心」> 選擇「申購管理」> 選擇「申購高速檔案系統 (HFS)」

![](https://i.imgur.com/IzCTOiD.png)

2. The left half provides capacity, adjustment instructions and personal space usage status,
   and the right half (top) has the option to change the paid bundle items, On the right half (bottom), you can enter the amount you want to purchase by entering /work or /home > click "Apply" > click "Submit" to adjust the capacity.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_df824be235ea4480028561152af5c57d.png)


</details>


:::info
- Please refer to the price list for rate information: <a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS"><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Academic&nbsp;</b></font></a>, <a href="https://man.twcc.ai/@twsdocs/pricing-zh#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS"><font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Enterprise&nbsp;</b></font></a>
- You may view your credits and resource usage in the Member Center. <a href="https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-view-billing-resource-usage-zh"><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Academic&nbsp;</b></font></a>
:::

### Step 3. Connected transmission node
    
1. Follow the step-by-step tutorial on [Connecting To A Transport Node](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/%2F%40twccdocs%2Fguide-hfs-connect-to-data-transfer-node-zh) and you will learn how to connect to the transmission node by using the "Key" or "Host Password + OTP Authentication Code" method below. Simply select one for subsequent connections!
2. After connected, you can [Manage The Files](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/%2F%40twccdocs%2Fguide-hfs-manage-files-zh)in your space by uploading, downloading or deleting files according to the file management instructions.


## Related FAQ 
- [Membership, Project and Billing](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-membership-project-billing-zh)
- [Hyper File System (HFS)](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh)