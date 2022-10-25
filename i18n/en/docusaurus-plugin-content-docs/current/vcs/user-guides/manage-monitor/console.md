---
sidebar_position: 5
title: 'Console - Debug and maintenance tool'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-debug-tool-console-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-debug-tool-console-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quick Debug and Maintenance Tool: TWCC VCS Console

TWCC Virtual Compute Service (VCS) provides a Console that allows you to quickly connect to your VCS instance through your browser for debugging, setting and maintenance without having to install Client software locally and set up a public IP in advance. The connection is encrypted with TLS 1.2 to ensure a secure connection and protect your sensitive information.

<br/>

## Open Console and connect to VCS instance

### Step 1. Enter Details page

After creating VCS instance, click the instance and enter "**VCS Instance Details**" page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b971dc1af91154b8a8492411b5fe6d7.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_db9d8f9e2f69436f3cfc1d1de1b38f4f.png)

:::info
For the first time using Console, please use the key to [**connect to instance via SSH**](https://man.twcc.vip/en/docs/vcs/user-guides/connection/linux/from-windows) and use the following command to set the login password so that you can use the account password to connect to the instance via the Console later.

```bash
sudo passwd ubuntu             # Use Ubuntu as an example to set the login password
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a8dc2923f95519849ab536fc51f9a3e7.png)

After the account is created, if there is no need for connecting to the Internet, you can detach the public IP to reduce the cost of resources.
:::

:::caution
To protect the security of your virtual computing, please set the login password for Ubuntu and CentOS to consist of at least 12 characters with a mix of upper and lower case letters, numbers, and special characters.
:::

<br/>

## Step 2. Open Console

- Scroll down the page to the "**Networks and Connection**" section and click on "**Connect**" to open the Console.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab961195932f688d806b1f86c871ebaa.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f6eb6c85931b67d7df3cc9b4f33cd494.png)

:::caution
- Please make sure to log out of the operating system after the work session or before closing the Console to ensure the security of the instance.
- To avoid security concerns, the connection validity is set to 10 minutes (Console already opened is not subject to this limit), and after the connection expires, please click on "**Update Link**" to get a new connection.
:::

<br/>

## Step 3. Enter the connection information and complete the connection

- **Linux instance**: Enter your account (ubuntu or centos) and password to connect to the instance.

:::info
If the console window does not accept keyboard input, click on the title bar of the window first, then click on the command bar to type.<br/>
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ad36eed070250abf714112818f6bcea0.gif)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8522546062af0abbc44e3a9aa49caf90.png)

- **Windows instance**: Enter the login password to connect to the instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d89ac98795067d2f8228480c0f689a21.png)

By completing Step 1 ~ Step 3, you will be able to connect to your VCS instance in a short period of time, solve problems quickly, and speed up the workflow of system maintenance!

<br/>

:::caution
Once again, please make sure to log out of the operating system after the work session or before closing the Console to ensure the security of the instance.
:::