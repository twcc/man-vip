---
sidebar_position: 1
title: 'Prerequisites'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-prerequisite-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to VCS instances: Prerequisites


## Step 1. Create a public IP address

Please create a public IP to your VCS instance before connecting to it from the Internet. Once a public IP is assigned to the instance, it is recommended to configure the [Security Group](https://man.twcc.ai/@twccdocs/guide-vcs-sg-en) to protect your instance and reduce the information security risk.

:::info
For more information about using public IP, please refer to [<ins>Elastic IP</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/networking/elastic-ip).
:::

<!-- Portal start -->

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the detailed information page of the VCS instance you want to connect to.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1d6366ecc19ce1a7ff4c4dd058f50fb.png)

- Scroll down to the "Network & Connection" section and click **Assign**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_db0855da2f03889e497ea83ae4836f68.png)

- Select "Auto-assign Floating IP" or "Assign Static IP".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b9bca425dbd1f4468d0bcd6c73bf11d9.png)

- After the creation is complete, the virtual network name and the public IP address will be displayed.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e2b629cbf5696134f71712677c3aa138.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**Commands**

```bash
twccli net vcs -s   # VCS instance ID
               -fip
```

:::info
1. The parameters in the square brackets **[ ]** are optional and the rest are required.
:::

<br/>

**Example**

Create a public IP address for the VCS instance with ID **`937648`**, and check if it is successfully created.

```bash
twccli net vcs -s 937648 -fip
twccli ls vcs
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_565a7f89f09a26306182a00123a02929.png)

</TabItem>

</Tabs>

<br/>

## Step 2. Obtain connection information

<!-- Portal start -->

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

**Linux instances**

* Go to the detailed information page of the VCS instance you want to connect to.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1d6366ecc19ce1a7ff4c4dd058f50fb.png)

* Click the **Connect** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c09e3f7969882c7733e4163a5ee30182.png)

* Once you click the **Connect** button, the instance connection steps using SSH will be displayed. The information varies for different instances.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d809e093216e0e503e4596e29cf9ef3c.png)


:::info
This example is based on Ubuntu. The system prompts will be different for VCS instances of different operating systems.
:::

<br/>

**Windows instances**

* Go to the detailed information page of the VCS instance to be connected, and click the **Connect** button to check the connection steps.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66ee6f7ec814ec01ecded36afad044eb.png)

- Login account and password：

    **Account: administrator**<br/>
    **Password: User-defined VCS instance password**

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>