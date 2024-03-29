---
sidebar_position: 11
title: 'Basic Virtual Firewall'
sidebar_label: 'Basic Virtual Firewall'
slug: '/user-guides/twcc/vcs/bvf'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vnf-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vnf-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_db2be9ff86eff33624e32feceedf17e7.png) Basic Virtual Firewall

Basic Virtual Firewall (BVF) provides a simple and flexible architecture that builds virtual network firewalls to protect all the VCS instances inside.


:::info
For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twsdocs/role-main-en).
:::


<br/>



## Create a firewall

 * Under **Services**, select **Basic Virtual Firewall (BVF)**, and select **＋CREATE** on the **Basic Virtual Firewall Management** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_36bd577def63d4503c7e96dfaba66aea.png)

* Enter a name for the firewall, and then click **NEXT: RULE**.

:::tip
You can skip this step if you have already created the required rules via Security Group. After selecting the **NETWORK**, select the VCS instance IP in **ADVANCEDRULE** to synchronize the Security Group rules to the firewall automatically.
:::


* Click **CREATERULE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6e69e5f81d8010e46a088c6d8987ce22.png)


*    In **Create Virtual Network Firewall Rule** pop-up window, configure the firewall rules, and click **OK** when finished.
     * Name: Enter a name for the firewall rule
     * Action: Select the required firewall action, such as allow, deny, reject
     * Protocol: Select tcp, icmp or udp
     * Destination IP: Enter the IP address of the destination host
     * Destination port: Enter the destination port
     * Source IP: Enter the source IP address
     * Source port: Enter the source port

    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5602a4ac87886a1aaade283d4b24f82d.png)


:::info
If configured without specifying, the default is **Any** for destination IP, destination port, source IP, and source port.
:::


* Go back to **Create Basic Virtual Firewall** page, you can see the rule you just created, and then click **ADD TO LIST**.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ae6ec03f507390849b997d61598a200.png)

* Once added to the list, the firewall rule will be displayed to the list below.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94d58d0c0e505fd3a3a72c6267f75c7b.png)

* Repeat the above steps to create more firewall rules you need. You can also click the firewall rule list to select other firewall rules in the project.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3db9790f79cc6602d410d566809a893a.png)

* After setting the rules, click the arrow on the right to adjust the priority of the rules. Click **NEXT:NETWORK** when you are ready.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1bebfde14baed80390409cfc43988e81.png)

:::info
Higher priority rules will override lower priority rules.
:::

:::caution
If no firewall rule is selected, the system will default the firewall rule to **deny all traffic**. Therefore, once the firewall is created, it blocks all incoming traffic to any VCS instance within the network.
:::


* After selecting the network, click **NEXT: ADVANCEDRULE**. In this step, you can synchronize Security Group rules of VCS instances to the firewall, where a corresponding rule is also automatically created (SyncRule).
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1341d832e30dcdb6f0c15783aee3b5c1.png)


:::info
The firewall only applies to the instances in the selected Virtual Network. In other words, the instances not created in the selected Virtual Network will not be protected by the firewall.
:::


* In **ADVANCEDRULE** tab, the private IPs of all VCS instances in the Virtual Network are listed.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2929b889ef9643f3cbf14baa526c1b47.png)



* Click the list to see the Security Groups rules of the VCS instance, and select the rules you need. Then, click **NEXT: REVIEW&CREATE**.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40b2c19502f8a2719c255bdca19d4b61.png)



    
* Review the configuration of the firewall, then click **CREATE** to complete the creation.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_996b92643cffcc3d0655ad1a92b551d8.png)


    
* The created firewall will be displayed at the top of the **Basic Virtual Firewall Management** list. Click the list to view firewall details or edit rules.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dc8eb828c5f05b90c84d000af35d9795.png)


- The rule name with **SyncRule** is the rule that synchronized from the Security Groups. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b07975c5d37b3436fc220158f4075db7.png)


<br/>



## Edit firewall rules

* In **Basic Virtual Firewall Details** page, click **EDIT RULES** to change the priority of the rules or delete the rules.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_02a39d79543f1feacc7b9c1eb082501b.png)


* In **Edit Rules** window, you can adjust the order of rules, add or delete rules. Click **OK** when you are ready.  
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_13ba77ac86e1869ef8326ccd4f6f8c5b.png)



* After finishing editing, the firewall will enter the **`PENDING_UPDATE`** state. The new settings take effect when it enters the **`ACITVE`** state after a few minutes.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e51c582e4b77a56e74f2f35b80176bf9.png)