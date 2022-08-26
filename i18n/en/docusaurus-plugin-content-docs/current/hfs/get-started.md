---
sidebar_label: 'Getting Started with TWCC'
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 【Getting Started with TWCC】

The 【TWCC from Scratch】 series of tutorials will provide novice users with an in-depth explanation of how to use TWCC in a thematic manner, and will be organized here so that you can easily refer to the information you need to take the first step in using TWCC computing resources.

## Topic and Operating procedure

**【Getting Started with TWCC】Adjusting HFS capacity and connecting transport nodes**

In this page, you will learn how to register an account, adjust the HFS capacity, and connect the transport nodes from.


:::info
**HFS？**

HFS is one of the TWCC services, it is a scalable, allows simultaneous access to the same file or different files on different nodes and provides high-speed and secure data storage, providing efficient, safe and flexible data transfer for Container Compute Service, HPC Job, and Taiwania 2 (HPC CLI), please refer to[<ins>Service Overview</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/%2F%40twccdocs%2Fhfs-overview-zh) to learn more.

::: 


![](https://i.imgur.com/4ggibe9.png)




:::info
TWCC services that will be used in this article: Member Center, [<ins>Hyper File System</ins>](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh).
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


1. [Account Registration](https://iservice.nchc.org.tw/nchc_service/index.php?lang_type=)
2. After that, you can [Apply for A New Project](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fapply-project-and-credit-zh), or ask the [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh) to add you to an [Existing Project](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-team-zh).
3. If you are Tenant Admin, please [Purchase Project Credits](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2FS17dwAja4%3Ftype%3Dview) for your project, Projects need credits to create and use TWCC resources.
4. If you are Tenant Admin, Once the credit application is completed, the parent wallet of the project can be divided into multiple sub-wallets to allocate a fixed amount of credit to members, if there is no split, the same credit is used for the parent wallet of the project. Please refer to [Project Wallet Management](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) to learn more.


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


1. [Account Registration](https://tws.twcc.ai/)
2. After that, you can
    - Apply for [Free Experience Program](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0), or
    - Contact us (sales@twsc.io) to learn more about your needs and to help you add new programs and credits, or
    - Ask the [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-zh)  to add you to an [Existing Project](https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-manage-project-team-zh)。


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
- Please refer to the price list for price information：<a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS">
<font style={{backgroundColor:'#FF0000', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>
<font style={{color:'white'}}> 
<b>&nbsp;Academic&nbsp;</b></font></font></a> <a href="https://man.twcc.ai/@twsdocs/pricing-zh#%E9%AB%98%E9%80%9F%E6%AA%94%E6%A1%88%E7%B3%BB%E7%B5%B1-Hyper-File-System-HFS">
<font style={{backgroundColor:'#008ad8', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>
<font style={{color:'white'}}> 
<b>&nbsp;Enterprise&nbsp;</b></font></font></a>
- You can review your quota and resource usage in the Member Center <a href="https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-view-billing-resource-usage-zh"><font style={{backgroundColor:'#FF0000', borderRadius:30+'px', padding:0.3+'em', fontZize:16+'px'}}>
<font style={{color:'white'}}>  <b>&nbsp;Academic&nbsp;</b></font></font></a>
:::

### Step 3. Connected transmission node
    
1. Follow the step-by-step tutorial on [Connecting To A Transport Node](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/%2F%40twccdocs%2Fguide-hfs-connect-to-data-transfer-node-zh) and you will learn how to connect to the transmission node by using the "Key" or "Host Password + OTP Authentication Code" method below. Simply select one for subsequent connections!
2. After connected, you can [Manage The Files](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/%2F%40twccdocs%2Fguide-hfs-manage-files-zh)in your space by uploading, downloading or deleting files according to the file management instructions.


## Related FAQ 
- [Membership, Programs and Billing](https://man.twcc.ai/@twccdocs/faq-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Ffaq-membership-project-billing-zh)
- [Hyper File System (HFS)](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh)