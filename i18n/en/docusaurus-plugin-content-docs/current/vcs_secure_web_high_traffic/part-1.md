---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-lb-build-secure-web-handle-high-traffic-1-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-lb-build-secure-web-handle-high-traffic-1-en'
---

import TOCInline from '@theme/TOCInline';

# Part 1: Build your website architecture

The **load balancer** will be in the front line of the web service architecture. After the user initiates a connection request, the load balancer will direct the user’s traffic to the **rear of the web server** and determine which server provides the service.


<TOCInline toc={toc} />

### Step 1. Create a front-end load balancer

- Click **Load Balancing Service (LBS)** from the service list to go to the **Load Balancer Management** page, and click **＋CREATE**.
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa08fa7fa21b739a1f53a660e0cd4d41.png)



- Fill in the configuration information of the load balancer, and then click **NEXT: REVIEW & CREATE>**. 
    1. Type: Select **Application Load Balancer**
    2. Listener: 
        a. Select **HTTP** for protocol, and set port **80** to provide HTTP service
        b. Select **HTTPS with SSL** for protocol, and set port **443** to provide HTTPS encrypted transmission service.
    3. Method: Select **ROUND_ROBIN**
    4. Virtual network: Select the network on which the load balancer working
 
:::caution
Build the load balancer and the VCS instances in the [Step 2](#Step-2.-Create-a-back-end-web-server-and-set-up-NGINX-web-service) at the same virtual network to bring the load balancing into effect.
:::

:::info
TWCC provides 3 load balancing methods:
1. **ROUND_BIN**: The load balancer will assign users to different servers in turn. Since each server has the same weight, it will provide services to users in turn.
2. **LEAST_CONNECTION**: The load balancer will detect the server group and assign user to the server with few connections.
3. **SOURCE_IP**: The load balancer allocates users to different servers according to the source address (user's IP), and the system will redistribute users when the next request is initiated.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a4e108f9b237d54a468fb760e79cd32.png)


- After the creation, return to the load balancer list, and click on the load balancer.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d9c1cd43f6433ebc1ff809536e5a4490.png)



- Enter **Load Balancer Details** page, wait until the balancer enters in **`ACTIVE`** state to continue editing it.
- **VIP (Virtual IP): You can apply for DNS to provide external service and use your web service through this IP.**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_523f120f39acb01b458332b75acb3a44.png)


### Step 2. Create a back-end web server and set up NGINX web service

- Enter **VCS Instance Management** page and create two VCS instances named *lbssl01* and *lbssl02*.

:::info
- For creating VCS instances, see [<ins>Virtual Compute Service (VCS)</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-en).
- The example selects **Ubuntu** as the image, **same network for virtual network and load balancer**, and **open the public IP** for the follow-up web maintenance. Other configurations are created with default settings.
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_46111d9799687233769d7259227d0689.png)

You can also use the image file to quickly create a *lbssl02* web server after the *lbssl01* individual has finished setting up the web page to save the cost of repeated installation of the application.
:::caution
You can also use the [<ins>image</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-vds-instance-image-en) to quickly create instance *lbssl02* after creating instance *lbssl01* to save the cost of repeated installation.
:::

:::info
We will use the private IP of the VCS instance in the following steps. Please enter **VCS Instance Details** page and record the private IP for subsequent use.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d8ce96828230cc17a5642c9a56f32e26.png)


:::

- Use the public IP to connect to *lbssl01* and *lbssl02* instances, and use the following 3 commands to **set up the NGINX web service** in the instances:

:::info
1. For connecting to the VCS instance, see [<ins> Connect to VCS instance</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fvcs-guide-connect-to-linux-from-windows-en).
2. We use NGINX to build websites in the example. You can install different tools according to your needs.
:::

```bash
sudo su
apt update
apt install -y nginx
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_356eef8571553c734c82ba43d4d33c46.png)
- After installation, you can start to build your web page on *lbssl01* instance, or enter the following command example to edit the content of the static web page:
    
```bash
vim /var/www/html/index.nginx-debian.html
```

- Press <kbd>i</kbd> key to enter insert mode, and change the middle string of `\<h1>\</h1>` to **Hi, this is VCS lbssl01!**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a35c3a18c88ac9d6d8e77915f5060085.png)
- Press <kbd>Esc</kbd> key to exit from insert mode, and insert `:wq!` and press <kbd>Enter</kbd> key to save the file and exit.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)
- Enter the command again, restart NGINX.

```
systemctl restart nginx
```

- Follow the same steps as above to modify the content of *lbssl02*. The string displayed on the webpage can be modified to different content: **Hi, this is VCS lbssl02!** to check the effect of load balancing.


### Step 3. Set up security group of the instance: open port 80

By setting up a security group, port 80 is established so that the load balancer can connect to the back web server (VCS instance), distribute user requests, and send responses back to users.


- Click **Network and Security**> **Security Group** on the left.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b5c7222cabae5bae5303b345cb220d0c.png)


- And click the created *lbssl01* instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecf21175fd6782bbdbe50d1eb076e1d3.png)


- Then click to enter the security group of the instance, and click **＋CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d60852a5d25579b91f9146dafa19f09.png)

 
- Configuration information
    1. **Direction**: Select **Ingress** (Users connect from outside and enter the instance to use the service)
    2. **Port Range (Min), Port Range (Max)**: Set **80** (Open port 80 to provide HTTP service, and the web program will automatically direct the connection to port 443 to provide HTTPS web service.)
    3. **Protocol**: Select **TCP**
    4. **CIDR**: Fill in the CIDR of the virtual network to ensure the load balancer on the same network segment can access this instance<br/>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0554358279d2ac3ee3a81b8bb834d0d0.png)

 
- For instance *lbssl02*, also follow the same steps to add port 80.
    
### Step 4. Connect the VCS instance to the load balancer

- Enter **Load Balancer Details** page > Click **EDIT**
- Add **`<private IP>:<port> (80)`** information of instance *lbssl01* to the load balancer > click **OK** to complete the configuration.
:::caution
**Please do not add** *lbssl02* to the load balancer until the SSL certificate application is completed.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_31787949aa69a374e21bb905e33f0324.png)