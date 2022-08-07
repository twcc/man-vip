---
sidebar_position: 4
---

import TOCInline from '@theme/TOCInline';

# Part 3：Test and remove non-essential resources

<TOCInline toc={toc} />

### Step 1. Test load balancing and secure connection

- Wait until the load balancer enters in the `ACTIVE` state, open your loacl browser and type  **`https://<Domain_Name>`** in the address bar.
- It will show the web page information set up by the instance `lbssl01` `(This is VCS lbssl01!)`, also, there will be a <i class="fa fa-lock" aria-hidden="true"></i> displayed as secure and encrypted connection in the upper left corner.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5c0661816414c60fcca056d0b8485e06.png)

- Refresh again, and it will show the web page information set up by the instance `lbssl02`  `(This is VCS lbssl02!)`. This means the load balancing functions normally, and users are redirected to different web servers in a loop to distribute the traffic.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_88ec76c5ee194c7ba50f6060880537d9.png)


### Step 2. Remove non-essential resources: public IP

- After the website architecture and content are built, the non-essential public IP of the VCS instance can be removed, and it can be reopen when website maintenance.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b39781a38df3a448cbe77da9cb043b27.png)


:::caution
You've reached the end of the tutorial! If you have any questions or suggestions, feel free to contact isupport@twcc.ai, thank you!
:::