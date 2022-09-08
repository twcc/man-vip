---
sidebar_label: 'Getting Started'
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/getstarted-ccs-create-connec-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/getstarted-ccs-create-connec-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# 【Getting Started with TWCC】 Create and connect Interactive Containers

The "Getting Started with TWCC" series of tutorials will provide novice users with an easily understandable explanation of how to use TWCC. We organize related documents here so that you can easily refer to the information you need to take the first step in using TWCC computing resources! <i class="fa fa-hand-peace-o" aria-hidden="true"></i>

<br/>

## Guide of the topic and steps

**【Getting Started with TWCC】 Create and connect Interactive Containers**

In this article, you will learn how to sign up for an account, sign in to TWCC, create a interactive container, and use Jupyter Notebook to quickly connect to the container.

:::info

**Interactive Containers? Jupyter Notebook?**

- Interactive container is one of the TWCC services that uses container technology for operating system level virtualization for fast software delivery. Interactive container offers multiple AI framework options and can build high-performance NVIDIA V100 GPU environments. Please refer to [<ins>Service Overview</ins>](https://man.twcc.vip/en/docs/ccs/intro) for more information.


- TWCC provides the development tool [<ins>Jupyter Notebook</ins>](https://jupyter.org/) as an interface for quickly interacting with container computing resources, and for writing and executing scripts. Operating containers via the web is friendly and easy to use!

::: 

![](https://i.imgur.com/OTa5mVF.png)


:::info
TWCC services to be used in this article: Member Center, [<ins>Interactive Container</ins>](https://man.twcc.vip/en/docs/ccs/intro).
:::

<br/>

## Step by step instructions

### Step 1. Prerequisites: accounts, projects and credits

<details class="docspoiler">

<summary><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Academic&nbsp;</b></font></summary> 

1. [Sign up for an account](https://iservice.nchc.org.tw/nchc_service/index.php?lang_type=#firstPage)
2. Once finished, you can [apply for a new project](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fapply-project-and-credit-zh), or ask [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.vip/en/docs/role_permission/intro) to [add you to an available project](https://man.twcc.vip/en/docs/member/user-guides/project-management/project-member-management).
3. If you are a Tenant Admin, please [purchase credits](https://man.twcc.vip/en/docs/member/user-guides/billing/apply_credits) for your project, TWCC resources can only be created and used when there are credits in the project.
4. If you are a Tenant Admin, after the credit application is completed, you can split the project's parent wallet into multiple sub-wallets to allocate a fixed amount to your members. If there is no split, the project's parent wallet credit will be used directly. Please refer to [Project Wallet Management](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-manage-project-wallet-zh) for more information.


</details>

<!-- Space -->

<div style={{'height':'15px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></summary>

1. [Sign up for an account](https://tws.twcc.ai/)
2. Once finished, you can
    - Apply for a [Free Experience Program](https://member.twcc.ai/module_page.php?module=nchc_service#nchc_service/nchc_service.php?action=trial_prj_apply_step0), or
    - Contact TWS Sales (sales@twsc.io) for an in-depth understanding of your needs and we will assist you in adding new projects and credits, or
    - Ask [Tenant Admin<i class="fa fa-question-circle" aria-hidden="true"></i>](https://man.twcc.vip/en/docs/role_permission/intro) to [add you to an available project](https://man.twcc.vip/en/docs/member/user-guides/project-management/project-member-management).


</details>

<br/>

### Step 2. Sign in to TWCC

1. Once the preparation is done, you can easily [sign in to TWCC](https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-signin-twcc-zh) by entering your username and password!

<br/>


### Step 3. Create and connect to Interactive Containers
    
1. Follow the step-by-step instructions in the tutorial [Create an Interactive Container](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/create-an-interactive-container) and you will learn how to build containers in TWCC Portal.
2. After creation, please follow the [Connect to your container - Jupyter Notebook](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/connect-to-your-container#jupyter-notebook) to quickly connect to your container.

<br/>


:::info

- Try it out! Use the default settings on the website to build your own containers in a few clicks!
- There are multiple fully optimized AI frameworks from NGC for you to choose from, see [<ins>TWCC Container Image overview</ins>](https://man.twcc.vip/en/docs/ccs_framwork_image/intro) for more information.
- [<ins>Delete the container</ins>](https://man.twcc.vip/en/docs/ccs/user-guides/management-and-monitoring/manage-your-container#delete-the-container) to stop further billing.
- Please refer to the price list for rate information: <a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS"><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Academic&nbsp;</b></font></a>, <a href="https://man.twcc.ai/@twsdocs/pricing-zh#%E5%AE%B9%E5%99%A8%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Container-Compute-Service-CCS"><font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Enterprise&nbsp;</b></font></a>
- You may view your credits and resource usage in the Member Center. <a href="https://man.twcc.ai/@twccdocs/doc-service-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-service-view-billing-resource-usage-zh"><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}><b>&nbsp;Academic&nbsp;</b></font></a>

:::

<br/>


## Related FAQ 
- [Membership, Project and Billing](https://man.twcc.vip/en/docs/faq/product_portal/member-project-billing)
- [Container Compute Service (CCS)](https://man.twcc.vip/en/docs/faq/compute/ccs)