---
title: 'Advanced Security Service'
sidebar_label: 'Advanced Security Service'
slug: '/user-guides/twcc/vcs/ads'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-ads-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-ads-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Advanced Security Service

:::caution
We will perform scheduled maintenance and upgrades to ADS soon. All functions and specifications are subject to change.
We apologize for any inconvenience and thank you for your support!
Please contact isupport@twcc.ai Technical Support if you have any problems.
:::

TWCC Advanced Security Service (ADS) provides the top next-generation firewall with threat protection to ensure your applications and data security on TWCC.

:::info
Only Tenant Admins can create and manage ADS firewalls.
:::

## Prerequisites

Create the following resources before you create an ADS firewall: 
1. Create 2 virtual networks: a **trusted network** and an **untrusted network**

![](https://i.imgur.com/2kAAOvB.png)


2. Create VCS instances: a **jump server** and **instances to be secured** (select the trusted network to create these instances) 

![](https://i.imgur.com/PLoHG2S.png)


:::info
- ADS firewall control access of the 3 networks:
     1. **Trusted network**: the network that the jump server and secured instances created with.
     2. **Untrusted network**: the external network for the firewall.
     3. **Management network**: The management network will be created automatically with the firewall. You can manage the firewall through this network.
- Jump server: an instance used to connect to secured instances without public IPs.
:::



## Create an ADS firewall

When you complete above prerequisites, follow the steps below to create an ADS firewall. 

* Go to the **Advanced Security** service, click **＋CREATE** on the **Advanced Security management** page.

![](https://i.imgur.com/9ildCRA.png)


* Set the basic information of the firewall: name, description, template (mail, web, ssh, rdp), image and the instance type. When you are ready, click **Next: Network >**.

:::info
Available images: version 8.1.15 and 9.1.9.
:::



![](https://i.imgur.com/z7dXqNx.png)



* Select the **private network** (i.e., the untrusted network) and the **trusted network**, and then click **NEXT: PASSWORD>**.


:::caution

Selecting the same network for private and trusted networks will cause the firewall to run abnormally.
:::



![](https://i.imgur.com/qEwuhFi.png)



* Set the login password of the web management interface, then click **NEXT: REVIEW + CREATE>**.



![](https://i.imgur.com/cO28Jfl.png)


* Check the settings and the estimated cost, then click **CREATE** to complete. After a few minutes, the firewall is ready when it turns to the **`Ready`** state.



![](https://i.imgur.com/8xsfmFg.png)



### View firewall details

* On the **Advanced Security** page, select a firewall to view the detailed information. 

![](https://i.imgur.com/990MDvx.png)

![](https://i.imgur.com/6P7ycry.png)



## Add instances to the protected scope via the jump server

When the firewall is ready, follow the steps below (example OS: Ubuntu) to add your VCS instances to be secured and controlled by the firewall.

1. Add the downloaded key pair to the jump server from your local machine

```bash
scp -i [Key Pair name].pem  [Key Pair name].pem ubuntu@[jumpserver public ip]:/home/ubuntu/
```

2. Connect to the jump server from your local machine, change permission of key, test the connection with the secured instances

```bash
ssh -i [Key Pair name].pem ubuntu@[jumpserver public ip]
ls
sudo su -
chmod 400 [Key Pair name].pem
ssh -i [Key Pair name].pem ubuntu@[private ip of instance1 to be secured] hostname
ssh -i [Key Pair name].pem ubuntu@[private ip of instance2 to be secured] hostname
````

3. Set the default gateway of secured instances to point to the firewall

Traffic will pass through the firewall before reaching the secured instance with the setting.

- Enter information to connect to a secured instance

```
ssh -i [Key Pair name].pem ubuntu@[private ip of instance to be secured]
```


- Install net-tools and view the current routing default gateway

```
apt install net-tools
route -n
```

> ![](https://i.imgur.com/0RllNZq.png)


- Edit `rc-local.service`

````
echo -e '\n[Install]\nWantedBy=multi-user.target\nAlias=rc-local.service\n' >> /lib/systemd/system/rc-local.service
cat /lib/systemd/system/rc-local.service
````

- Add `/etc/rc.local`, and allow executable permissions

````
echo -e '#!/bin/sh -e\nsudo route add default gw [Private IP of firewall trusted network]\nsudo route del default gw [original default gateway]\nexit 0' > /etc/rc.local
chmod +x /etc/rc.local
chown ubuntu:ubuntu /etc/rc.local
````

:::info

You can get the`Private IP of firewall trusted network` on **Advaced Security Service details** page：

![](https://i.imgur.com/rvyjbJA.png)
:::


- Enable and start rc-local service

````
sudo systemctl enable rc-local
sudo systemctl start rc-local
````

- Create a soft link and reboot the instance

```
sudo ln -s /lib/systemd/system/rc-local.service /etc/systemd/system/rc-local.service
sudo reboot
```

:::info
Returning `file exists` means the soft link was created. Skip to the next step to reboot your instance.
:::

```
sudo reboot
```

- Connect to the secured instance again and check the results

````
ssh -i [Key Pair name].pem [Key Pair name].pem ubuntu@[private ip of instance to be secured]
````
````
route -n
````

:::info

The changed default gateway points to the firewall.
:::



## Log in to the web management interface

* On the **Advanced Security Service details** page (as shown below), click the WEB management interface link, log in to it with Username `admin` and password set when you create the ADS firewall.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0016b497215d208bbe9f0262dc1e06f3.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e81652b76b45dcbdf0928af3516c9af5.png)

:::info
For more information about using ADS, please refer to the
[Administrator Guide](https://docs.paloaltonetworks.com/pan-os/8-1/pan-os-admin.html).
:::

## Tutorial: Set up an SSL VPN server with TWCC ADS

- [HowTo: Set up an SSL VPN server with TWCC ADS](https://man.twcc.ai/@twccdocs/howto-vcs-ads-setup-ssl-vpn-en)

<!-- English: https://docs.paloaltonetworks.com/content/dam/techdocs/en_US/pdf/pan-os/8-1/pan-os-admin/pan-os-admin.pdf  -->