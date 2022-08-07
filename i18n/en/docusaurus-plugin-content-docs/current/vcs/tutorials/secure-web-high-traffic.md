---
displayed_sidebar: vcs_secure_web_high_traffic
sidebar_position: 9
---

:::success **Scenario: My web server crashes when too many people are accessing it at the same time. What should I do?**
*Do you have the same problem? Let us show you how to integrate TWCC services to solve the problems you are facing with!*
:::


This document will show you how to use [**TWCC Virtual Compute Service (VCS)**](https://man.twcc.ai/@twccdocs/doc-vcs-main-en) to build 2 identical [**NGINX**](https://www.nginx.com/) web servers, and set up the [**security group**](https://man.twcc.ai/@twccdocs/guide-vcs-sg-en). Go with [**load balancing**](https://man.twcc.ai/@twccdocs/guide-vcs-lbs-en) and **SSL certificate** to distribute traffic requests to different servers. Besides, use a single external URL to **make sure the secure transmission of your web server data and your web service will not crash by too many concurrent users and overloaded traffic**.


## <i class="fa fa-backward" aria-hidden="true"></i> Click on the first part, let's get started!