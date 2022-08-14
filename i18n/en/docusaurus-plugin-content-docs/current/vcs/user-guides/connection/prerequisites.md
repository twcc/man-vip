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

Please create a public IP to your VCS instance before you connect to it from the Internet. Once a public IP is assigned to the instance, it is recommended to configure the [Security Group](https://man.twcc.ai/@twccdocs/guide-vcs-sg-en) to protect your instance and reduce the information security risk.

<!-- Portal start -->

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

- Go to the detailed information page of the VCS instance to be connected.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4a00551e5a4da9b9ac74f42025abfe01.png)

- Scroll down to the "Network & Connection" section and click **Create** to create a public IP.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_97fc3962237d8319edcd1b1c6f36f91b.png)

- After the creation is complete, the virtual network name and the public IP address will be displayed.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_332db3cd75fba44465151638e9bfcbf6.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

**Commands**

```bash
twccli net vcs -s   # VCS instance ID
               -fip
```

:::info
1. The square brackets **[ ]** indicate optional parameters, and the rest are required parameters.
:::

<br/>

**Examples**

Create a public IP address for a VCS instance with ID **`937648`**, and check if the creation is successful.

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

* Go to the detailed information page of the VCS instance to be connected.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4a00551e5a4da9b9ac74f42025abfe01.png)
* Click **Connect** button.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bc3c006641d1db188650475eadb3764b.png)

* Once you click the **Connect** button, the instance connection steps using SSH will be displayed. The information varies for different instances.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d809e093216e0e503e4596e29cf9ef3c.png)


:::info
In this instruction, we use Ubuntu as an example. The system prompts will be different for VCS instances of different operating systems.
:::

<br/>

**Windows instances**

* Go to the detailed information page of the VCS instance to be connected, and click the **Connect** button to check the connection steps.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66ee6f7ec814ec01ecded36afad044eb.png)

- Login account and password：

    **Account: administrator**
    **Password: User-defined VCS instance password**

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI(TBD)">

<br/>

</TabItem>

</Tabs>