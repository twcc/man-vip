---
sidebar_position: 3
title: 'Load Balancing'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-lbs-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-lbs-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5eaf2d8a3b112a4b8c49a853eaab60d8.png) Load Balancing

TWCC Load Balancing Service offers **Application Load Balancer (HTTP and HTTPs with SSL)** and **Network Load Balancer (TCP)**. When network traffic becomes heavy, the Load Balancer automatically distributes traffic to different VCS instances to keep the service flexible, scalable and highly available.


:::info
- For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務).
- TWCC CLI currently does not support this feature.
:::

<br/>


## Create load balancers

* On the service list, click **Load Balancing** to go to the **Load Balancer Management** page, and select **+CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_874be1b43ef4974aaedbc0001bca7a1c.png)

* Configure the load balancer, and then click **NEXT: REVIEW & CREATE >**.
    * **Name**: Enter the name of the load balancer.
    * **Description** (optional): Enter the description for the load balancer.
    * **Type**: Choose the type of load balancer as Application Load Balancer or Network Load Balancer.
    * **Listener**
        * **Protocol**:
            * Application Load Balancer can handle **HTTP** and **HTTPs with SSL** traffic*.
            * Network Load Balancer can handle **TCP** traffic.
        * **Port**: Enter the port number for port forwarding.
        * **SSL certificate**:
        * Click **Add** to configure multiple listerners and ports.
    * **Method**: Select one method of balancing from **ROUND_ROBIN**, **LEAST_CONNECTIONS**, and **SOURCE_IP**.
    * **Virtual Network**: Select a virtual network.
    * **Assign Public IP**: You can choose not to assign it, auto-assign a floating IP, or assign a static IP**. Please refer to [<ins>Elastic IP</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/networking/elastic-ip) for usage details.

:::info
*To use a **HTTPS with SSL** listener, please [<ins>create SSL Certificate</ins>](#create-ssl-certificates) first.<br/>
**After creation, you can adjust the IP selection on the "Load Balancer Details" page. If you have assigned IPs, you need to detach them before you can select other IPs.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_332a015f4c4eea6b4235607942c898dc.png)

* Review the configuration for the load balancer, and then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3555bd4f985a5e6f022a1f8674b5f84b.png)

* After the load balancer has been created, you will be directed back to the list page. The newly created load balancer appears at the top of the list, and you can select the load balancer to enter its detail page. You can edit the settings when it turns to the **ACTIVE** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d094fb59f4c3db5ec2b4ac2ddeca64c9.png)

:::info
After creating, [<ins>attach the load balancer to VCS instances</ins>](#attach-load-balancers-to-vcs-instances) to enable the traffic balancing mechanism for your applications.
:::

<br/>


## Manage load balancers

* On the **Load Balancer Management** page, click the list of load balancers to enter the load balancer details page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_849d210541eb085a1601cd22d7e63aff.png)

* On the load balancer details page, you can view the basic information and the configuration for network connections, or execute actions including **EDIT**, **DELETE**, **REFRESH**, etc.
* Once the load balancer is created, a VIP (Virtual IP) will be generated for external services, and private IP will be provided for maintenance purpose.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a63efa359922aa5902b9843766a79f87.png)

<br/>


### Update Load balancer's SSL certificate

SSL certificates have a validity period. You can create a new certificate to replace the certificate about to expire:

* Enter the **Load Balancer Details** page, and then click the **EDIT** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b6671c73ef98aeed7c5f80d95dbbee8.png)

* Select the newly created certificate name for the existing HTTPS with SSL listener, and then click **OK**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9b1bc7ab92f0c4a685a66afae087905.png)

* After the update, you will be directed to the **Load Balancer Details** page. You can see the name of the new SSL certificate, and its state wll change to the **`ACTIVE`** when it is successfully renewed.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d6437988b429ae87a60da18ef33641c9.png)


<br/>



## Attach load balancers to VCS instances

* Enter **Load Balancer Management** page. Select the load balancer you want to attach, click the menu button &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; and then click on **EDIT**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_370402679f6bc74b477b9f626c2fb227.png)

:::tip
You can use the search bar with keywords to find your load balancer if too many are on the list.
:::

* You may also find **EDIT** button in **Load Balancer Details** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_70349eaee84ff70c3ef37a8637c9aa03.png)

* Click **Add Server** in the editing window to attach VCS intances to the load balancer.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2f080c14faa757a34c4dbc625f94b59b.png)

* Enter the **Private IP** and **Port** of the VCS intance, e.g., `192.xxx.xxx.xx:80` . Then select **Add Server** to set up the private IP and port of the second VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_734b582facb7df0e8e810f2da2b6cc9f.png)

* Select **OK** when all VCS instances are added.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4974a6c96906d3a185251f5a3e054f67.png)

* Back to the **Load Balancer Details** page, the IPs of attached instances is shown in the **Networks & Connection** block. The load balancer starts running when it turns to the **ACTIVE** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d509246e60c1c6291859fa13713c213c.png)

<br/>



## SSL Certificates


Deploy SSL certificates on your load balancers can help you build trust with customers by encrypting and securing communications between the web server and the client browser, preventing criminals from reading or modifying information transferred.

:::info
In order to comply with the information security requirements, only the TLS 1.2 transport layer security protocol is provided.
:::


<br/>


### Create SSL certificates

* Click **SSL Certificate** on the left-side navigation > Click **+CREATE** in the **SSL Certificate Management** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cead669e176864f360ca52ee8b8b009c.png)

* Enter the name, description, and Base64 Encode (PKCS#12 format) of your SSL certificate, and then click **NEXT: REVIEW & CREATE** >


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_efe577b9eebbb33d3fb36fde5dd1890e.png)


:::info
TWCC currently supports only PKCS#12 format, see [<ins>HowTo：Convert SSL certificates</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-en) for more information.
:::

* Review SSL certificate configuration, and then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_26803d2b57bb256c6946827e9f129c21.png)

* The certificate will appear in the list. You can deploy the certificate on a HTTPs with SSL listener when it turns to the **ACTIVE** state.

==**Need to update:exclamation:**==
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f77e7e47a585410d2df100933954846.png)


<br/>



### Manage SSL certificates

Follow [Create SSL certificates](#Create-a-SSL-Certificate) and after the certificate is created. You can select it when creating an Application Load Balancer, or you can add/update it to an exsting load balancer.

:::info
TWCC currently supports only PKCS#12 format, see [<ins>HowTo：Convert SSL certificates</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-en) for more information.
:::


<br/>



### Delete SSL certificates

* Go to the **SSL Certificate Management** page, select the SSL certificate you want to delete, and then click **DELTE** button.


==**Need to update:exclamation:**==
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2fbf0b28ee7acdc4ac63c10fffe58438.png)


<br/>



:::info
To secure SSL certificates, only the creator can view and use the SSL certificate.
:::