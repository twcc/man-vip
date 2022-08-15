---
sidebar_position: 3
title: 'Load Balancing'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-lbs-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-lbs-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5eaf2d8a3b112a4b8c49a853eaab60d8.png) Load Balancing

TWCC Load Balancing Service offers Application Load Balancer (HTTP and HTTPs with SSL) and Network Load Balancer (TCP). When network traffic increased, the Load Balancer will automatically distribute traffic to VCS instances to keep high service flexibility, scalability, and availability.


:::info
- For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務) for more information.
- TWCC CLI currently does not support this feature.
:::


## Create load balancers

* On the service list, click **Load Balancing** to go to the **Load Balancer Management** page, and select **＋CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c295ea3083a79e57248132cb5065e00b.png)

* Configure the load balancer, and then click **NEXT: REVIEW & CREATE >**.
    * **Name**: Enter the name of the load balancer.
    * **Description** (optional): Enter the description for the load balancer.
    * **Type**: Select Application Load Balancer or Network Load Balancer.
    * **Listener**
        * **Protocol**:
            * Application Load Balancer can handle HTTP and HTTPs traffic.
            * Network Load Balancer can handle TCP traffic.
        * **Port**: Enter the port number for port forwarding.
        * **SSL certificate**:
        * Click **Add** to configure multiple listerners and ports.
    * **Method**: Select one method of balancing from **ROUND_ROBIN**, **LEAST_CONNECTIONS**, and **SOURCE_IP**.
    * **Virtual Network**: Select a virtual network.

:::info
Before you create **HTTPS with SSL** listener, [<ins>create SSL certificates</ins>](#建立-SSL-憑證).
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4541565017552a6bd50bc8ecb6622ec0.png)


* Review the configuration for the load balancer, and then click **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_60c759e910d3ad26930123d1502be5b3.png)


* After the load balancer has been created, you will be directed back to the list page. The newly created load balancer appears at the top of the list, and you can select the load balancer to enter its detail page. You can edit the settings when it turns to the **ACTIVE** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_56de63a995f2182bb9a6c98583d25069.png)

:::info
After creating, [<ins>attaching VCS instances to the load balancer</ins>](#連結虛擬運算個體) to enable the traffic balancing mechanism for your applications.
:::


## Manage load balancers

* On the **Load Balancer Management** page, click the list of load balancers to enter the load balancer details page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ca9872f04a126b15a5adb9378c6f7b9.png)


* On the load balancer details page, you may view the basic  information and the configuration for network connections, or execute actions including **EDIT**, **DELETE**, **REFRESH**, etc.

* Load balancer is assigned with a VIP (Virtual IP) for services.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_961fa408788406ca6d286cc10687dcee.png)


### Update Load balancer's SSL certificate

SSL certificates have a validity period. You can create a new certificate to replace the certificate about to expire:

* Enter the **Load Balancer Details** page, and then click the **EDIT** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5ab8aeef44cbeeb8d6ad4727fae2f6fe.png)


* Select the newly created certificate name for the existing HTTPS with SSL listener, and then click **OK**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c9b1bc7ab92f0c4a685a66afae087905.png)

* After the update, you will be directed to the **Load Balancer Details** page. You can see the name of the new SSL certificate, and its state turns to the **Active** when it is successfully renewed.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d6437988b429ae87a60da18ef33641c9.png)



## Attach load balancers to VCS instances

* Enter **Load Balancer Management** page. Select **EDIT** under of a load balancer.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ebe1dc0e89cea882ca6b55978a1ae896.png)

:::tip
You can use the search bar with keywords to find your load balancer if too many are on the list.
:::

* You may also find **EDIT** button in **Load Balancer Details** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d1c8b85ab42f67b30b1e9a4474eacb73.png)

* Click **Add Server** in the editing window to attach VCS intances to the load balancer.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2f080c14faa757a34c4dbc625f94b59b.png)


* Enter the **Private IP** and **Port** of the VCS intance, e.g., `192.xxx.xxx.xx:80` . Then select **Add Server** to set up the private IP and port of the second VCS instance.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d82c498ad137428a0d68afcda38f3028.png)


* Select **OK** when all VCS instances are added.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_19f48ccf5820c6ca0843df3620162277.png)


* Back to the **Load Balancer Details** page, the IPs of attached instances is shown in the **Networks & Connection** block. The load balancer starts running when it turns to the **ACTIVE** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3ebbfbd379f6bec7ff4b04fdbfe65228.png)



## SSL Certificates


Deploy SSL certificates on your load balancers can help you build trust with customers by encrypting and securing communications between the web server and the client browser, preventing criminals from reading or modifying information transferred.

:::info
In order to comply with the information security requirements, only the TLS 1.2 transport layer security protocol is provided.
:::

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




### Manage SSL certificates

Follow [Create SSL certificates](#Create-a-SSL-Certificate) and after the certificate is created. You can select it when creating an Application Load Balancer, or you can add/update it to an exsting load balancer.

:::info
TWCC currently supports only PKCS#12 format, see [<ins>HowTo：Convert SSL certificates</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-en) for more information.
:::


### Delete SSL certificates

* Go to the **SSL Certificate Management** page, select the SSL certificate you want to delete, and then click **DELTE** button.


==**Need to update:exclamation:**==
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2fbf0b28ee7acdc4ac63c10fffe58438.png)



:::info
To secure SSL certificates, only the creator can view and use the SSL certificate.
:::