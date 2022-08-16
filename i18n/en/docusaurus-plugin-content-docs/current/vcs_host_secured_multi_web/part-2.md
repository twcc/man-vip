---
sidebar_position: 3
---

# Part 2: Install SSL certificates for websites

Install SSL certificates for websites can encrypt and secure communications between the web server and the client browser, preventing criminals from reading or modifying information transferred.

### Step 1. Register domain names

:::info
Please ignore this steps if you have your own domain name.
:::


With a domain name, users can quickly access to your website by typing an easy and memorable name rather than a rigid IP address!

You may register a free or paid Domain Name according to your needs. In this tutorial, we use [No-IP](https://www.noip.com/) to demonstrate the process of registering a free domain name.

1. Sign up for [No-IP](https://www.noip.com/) account.
2. Click **My Services** on the left panel > **DNS Records** > click **Create HostName** after login.
3. Set the Hostname (Domain Name): <span>twccservice1.ddns.net</span>
4. Set the IP Address: Enter your **VCS Public IP address**.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96ab3d56d9eaf55adcc742eea7b63a3e.png)
5. Click **Add Hostname** to complete the registration.
==**Need to update:exclamation:**==
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_26834d5ad31dcb5ced2506d7b26d047b.png)



- You may use [NsLookup](https://centralops.net/co/NsLookup.aspx) to query the host (load balancer)
    1. Enter *Domain Name*
    2. Click **go**
    3. If the request success, the answer records will be shown as below

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_41a439753547e7ef14f9eba29c34da65.png)



- **Repeat the steps above and setting the Hostname (Domain Name):**<span>```twccservice2.ddns.net```</span>

### Step 2. Create SSL certificates for websites

- Please install [Certbot](https://certbot.eff.org/) as the tool of creating SSL certificates for websites.

```
apt install certbot python3-certbot-nginx
```

- Enter the domain name of service1

```
certbot --nginx -d <Domain_Name>
```

:::info
1. Replace ```<Domain_Name>``` with the domain name you've just registered.
2. Enter e-mail to receive emergency or safety notice.

```
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): 
```

```
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017.pdf. You must
agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: A
```

3. Please choose `2`, to redirect HTTP traffic to HTTPs, and remove HTTP access.

```
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 2
```

:::

- Enter Nginx config file and modify the root folder corresponding of website service2.

```
vim /etc/nginx/sites-available/default 
```

- Press <kbd>i</kbd> key to enter edit mode and replace the ``` root /var/www/html/service1 ``` to ``` root /var/www/html/service2 ```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e3675fd327645441a60917d853f6388f.png)


- When done, press <kbd>Esc</kbd> key to exit edit mode and enter `:wq!` command and press  <kbd>Enter</kbd> key to save and exit.
- Please repeat **Step 2 to create a SSL certificate for website service2..**


:::info
Please ignore installing the certbot and starts from setting the domain name.
:::