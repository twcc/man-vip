---
sidebar_position: 3
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-lb-build-secure-web-handle-high-traffic-2-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-lb-build-secure-web-handle-high-traffic-2-en'
---

import TOCInline from '@theme/TOCInline';

# Part2: Install an SSL certificate for the website

To prevent data theft when transmitting data, we recommended you follow the steps to install an SSL certificate for your web service, so that all data will be transformed into encrypted format to transmit securely.


<TOCInline toc={toc} />

### Step 1. Register a domain name

Register a website domain name so that users can enter a memorable domain name (instead of a rigid IP address) in the address bar to quickly start using your web service!

You can choose a paid or free website to apply for a domain name according to your needs. We use [No-IP](https://www.noip.com/) as an example website to register a free domain name:

1. Sign up for [No-IP](https://www.noip.com/)
2. After signing in, click **My Services** on the left menu > **DNS Records** > **Create HostName** above
3. Configure the hostname (domain name):*<span>oliversslwebsite.ddns.net</span>*	
4. Set IP Address: Enter *VIP of the load balancer*

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_96ab3d56d9eaf55adcc742eea7b63a3e.png)



5. Click **Add Hostname** at the bottom right corner of the page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c109bfa8410aa890bb412aeb898c2422.png)

6. Complete the confuguration

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_94bc8c23a9765db542f9e7e6dea9b087.png)





- Use [NsLookup](https://centralops.net/co/NsLookup.aspx) to make sure that the host(load balancer) can be queried
    1. Enter *Domain Name*
    2. Click **go**
    3. Confirm that the host can be queried, the query information will be displayed below: domain name and IP address of the load balancer

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_253e1b6106fca323bee7ec7a8919b8e5.png)




### Step 2. Get an SSL certificate

You can choose a paid or free website to get an SSL certificate according to your needs, we use [Let's Encrypt](https://letsencrypt.org/) as the example to get a free SSL certificate:

- Enter the following commands to use the domain name in instance *lbssl01*, and use [Let's Encrypt](https://letsencrypt.org/) to get an SSL certificate:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d <Domain_Name>
```

:::info
1. Enter e-mail address below to receive urgent renewal or safety notices<div style={{height:5+'px'}}></div>
![image](https://user-images.githubusercontent.com/109254397/184550225-cea21a14-989e-4716-9734-c90be29d3a67.png)
![image](https://user-images.githubusercontent.com/109254397/184550263-c9fb6e98-9c63-4150-9f6d-6accf94e3313.png)


2. Please select `1` for the following content, there is no need to redirect the HTTP connection to HTTPS and delete the HTTP connection:<div style={{height:5+'px'}}></div>
![image](https://user-images.githubusercontent.com/109254397/184550314-80aed63f-ca93-49ea-a0a0-daefd906b1ee.png)

:::

### Step 3. Convert the certificate to Base64 format

Currently TWCC only supports PKCS #12 and Base64 format of SSL certificates. Please enter the following command to convert the certificate to Base64 format.

For more information, see [**Convert SSL certificate format**](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowo-lb-convert-cert-en).

```bash
sudo su
cd /etc/letsencrypt/live/<Domain_Name>/ 
openssl pkcs12 -export -out server.p12 -inkey privkey.pem -in cert.pem -certfile chain.pem
base64 server.p12 | tr -d \\n  > twcc_ssl_base64.txt
cat  twcc_ssl_base64.txt
```

:::info
The following content can be skipped by pressing <kbd>Enter</kbd> key:

```
Enter Export Password:
Verifying - Enter Export Password:
```

:::

- Please **copy** all contents of `twcc_ssl_base64.txt` displayed on the screen

### Step 4. Upload SSL to TWCC

- Click **SSL Certificate** from the service list to enter **SSL Certificate Management** page, then click **＋CREATE**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_035358b1bfa7bbed4e3701e863524015.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ddde45bec62fac72292cc6357356e043.png)
- Paste the copied content of base64 file in [step3](#step-3-convert-the-certificate-to-base64-format)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f9640763369d1d13d95106cc09b37b34.png)





- Then, go to **Load Balancer Details** page:
    1. Click **EDIT** > Select the SSL certificate you just created.
    2. Add instance`lbssl02`  `<private IP>:<port> (80)` to this load balancer.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_059ae0f49869e2f96a24e86e6ea01374.png)