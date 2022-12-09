---
title: 'Web Application Firewall'
sidebar_label: 'Web Application Firewall'
slug: '/user-guides/twcc/vcs/waf'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-waf-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-waf-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Web Application Firewall

Web application firewall service, using F5 Networks Web Application Firewall (WAF) firewall software, provides an application-wide security protection mechanism.

:::info
This feature requires tenant administrator privileges to use.
:::

## Build a web application firewall

 * Go to the "Web Application Firewall" service. On the "Web Application Firewall Management" page, click "+Create".


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a5085f80564dc8898f1b216593b0d34.png)



* Enter basic information such as name, description, image file and hardware settings, then click "Next: Network>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_658ede2e5b088a7fa6dae6aef2fa998f.png)



* Select the virtual network you want to use, then click "Next: Password>".
:::info
Refer to: [virtual network](/docs/user-guides/twcc/vcs/vnw.md)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bdcf37fc211e811c242a3523841a1f8e.png)


* Set the login password, then click "Next: Review + Create>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ddd44a3ec184ecefd5b79f1f02fc01f9.png)


* View the settings and estimated usage of the Web application firewall. Click "Create" to complete. After a few minutes, the status becomes Ready and you can start using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6ac5093d9a49d96bbea86059ab60b4e4.png)


## View Web Application Firewall Details

* On the "Web Application Firewall Management" page, click on the list of items you want to view to view the details. Click the button above to start, stop, delete, and refresh this web application firewall.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_453a9fc4722bf891c95f0019892bcf3c.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2bb01173507c5b451258898b158a776c.png)


## Login to the web management interface

* On the Web application firewall details page (above), click the WEB management interface link to log in to the web management interface, the account is admin, and the password is the password you set when you set up the web application firewall.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_12186c7bccf46c59cb894539c0cdf978.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_258d6b6087f04040db83ef5d1bd05634.png)