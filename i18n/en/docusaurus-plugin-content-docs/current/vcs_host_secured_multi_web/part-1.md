---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-host-secure-multi-web-one-instance-1-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-host-secure-multi-web-one-instance-1-en'
---

# Part 1: Build websites on the same domain

The following tutorial demonstrates how to set up two website services: create VCS instances, host websites using Nginx, and open port 80 on the instance.


### Step 1. Create a VCS instance

- Go to the **VCS Instance Management** page, and create a VCS instance named `virtualhost`.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c2813abd9dfa3bea9e1a11aeee61def7.png)

:::info
- For detailed steps of creating VCS instance, see [<ins>VCS</ins>](https://www.twcc.ai/doc?page=vm&euqinu=true#%E5%BB%BA%E7%AB%8B%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94) for more information.
- In this tutorial, we select **Ubuntu 20.04** image and use default values to create instances **(this tutorial is not applicable to Ubuntu 16.04)**. Please **enable associating public IPs** for website maintenance.
:::

### Step 2. Host websites using Nginx

Connect to the instance using the public IP, and enter the following 3 commands to install Nginx:

:::info
- For detailed steps of connecting your instance, see [<ins>Connect to VCS instance</ins>](https://www.twcc.ai/doc?page=vm#%E9%80%A3%E7%B7%9A%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94) for more information.
- We use Nginx to set up websites in this tutorial, you may install different tools according to your needs.
:::

```bash
sudo su
apt update
apt install -y nginx
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_356eef8571553c734c82ba43d4d33c46.png)

- Create two root folders for different websites.

```bash
cd /var/www/html
mkdir service1
mkdir service2 
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f4a75bc450074531c8919cfb6e4697af.png)

- Execute the following command to edit the content on the website.
 
```bash
vim /var/www/html/index.nginx-debian.html
```

- Press <kbd>i</kbd> key to enter Edit mode, and replace the strings between `<h1> and </h1>` to **Hi, this is VCS Service 1!**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aecda0f46fd5ebf2ef6f55463cbed710.png)


- Press <kbd>Esc</kbd> key to exit Edit mode, and enter`:wq!` then pressing <kbd>Enter</kbd> key to save the file and exit.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)

- Enter the following command to move the web file under  `service1` folder > Enter the `service1` folder > Copy the web file to `service2` folder > Edit the `service2` web file.

```
mv index.nginx-debian.html service1
cd service1
cp index.nginx-debian.html /var/www/html/service2/
vim /var/www/html/service2/index.nginx-debian.html
```

- Press <kbd>i</kbd> key to enter Edit mode, and replace the strings between `<h1> and </h1>` to **Hi, this is VCS Service 2!**.

![](https://i.imgur.com/vWAiU1N.png)

- Press <kbd>Esc</kbd> key to exit Edit mode, and enter`:wq!` then pressing <kbd>Enter</kbd> key to save the file and exit.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)

- Modify the Nginx config file and append the folder name (`service1`) to the root path (`root /var/www/html`).

```
vim /etc/nginx/sites-available/default
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b3360ec80ec2af839bf8b4c6d0cea62d.PNG)

- Press <kbd>Esc</kbd> key to exit Edit mode, and enter`:wq!` then pressing <kbd>Enter</kbd> key to save the file and exit.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_11d0e73d06fd1c04a98c0ce201aff26f.png)

- Restart Nginx

```
systemctl restart nginx
```

### Step 3. Set up the instance's Security Group and open the port 80

Open the port 80 by setting the Security Group to make the websites accessible.

- Click the **Network & Security** > **Security Group** on the left panel 


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b0e0800cbbfc7c8188865f348642f0ae.png)

- Select **virtualhost** instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dc1198a7ae4c191799d1ae51dcf1a920.png)


- Click to enter **Security Group Rules Management** page and click **+CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_224cbd2cbbbc151e9d5054219a44b464.png)


- Basic Settings 
    1. **Direction**: Select **Ingress** (Allow users from external to access the websites.)
    2. **Port Range(Min), Port Range(Max)**: Setting as **80** (only port 80 is opened to provide HTTP website service, the application will automatically direct the connections to port 443 to provide HTTPS web service).
    3. **Protocol**: Select **TCP**.
    4. **CIDR**: Insert CIDR. Here we take 0.0.0.0/0 as an example. Set a specific network segment range when needed.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4006acf1b9ee6260cbeb4184d220e2ae.png)


### Step 4. Check if port 80 is open


- Copy the Public IP address of the VCS instance

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_343a792a287f7469f23315cdeee38e39.png)


- Enter the Public IP address on the browser address bar to check the port 80 is open.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8bb77232c2a6d01f93eab6fa3ed8ce0e.png)