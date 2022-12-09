---
sidebar_position: 6
title: 'Virtual Network'
sidebar_label: 'Virtual Network'
slug: '/user-guides/twcc/vcs/vnw'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vnw-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vnw-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7ecced96f77b12664677d4cef97a3cc.png) Virtual Network

Virtual Network service is designed to provide custom virtual network function for VCS instances. Full access to this feature is provided to the Tenant Admins and the Tenant Users only have viewing and usage permissions.

:::info
For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, please refer to [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en).
:::


<br/>


## Create a default virtual network

If you are first-time user of TWCC VCS, you must create a a **default network** in the Virtual Network service before you can get started. Please refer to [<ins>Create a default network</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-en) for the creation steps. If you need to use other network segments later, please refer to the following section to [<ins>create a custom VNW</ins>](#create-a-custom-virtual-network).


<br/>


## Create a custom virtual network

:::caution
1. CIDR cannot overlap with other virtual network segments.
2. Please use the private network range defined by RFC1918 for CIDR to avoid connection errors:
    - 10.0.0.0/8
    - 172.16.0.0/12
3. Please do not use the system reserved segment: 192.168.1.0/24.
:::


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* From the service list, select **Virtual Network**. On the **Virtual Network Management** page, click **+CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_078ccd80a87a153bf48175a412bf0c16.png)

* Enter the Virtual Network setting information, and click **NEXT: REVIEW & CREATE>** after completion.
    * Name: The name for the VNW, which cannot be repeated and cannot be change after creation.
    * CIDR: Classless Inter-Domain Routing (CIDR), which specifies the address range of the VNW.
    * Gateway: The default gateway.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4eefc4db831430f5e1a3349a89074219.png)

* Check the Virtual Network settings and project credit information. Click **CREATE** once you have confirmed.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6755c7670a9ff7809c1508fea511a383.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


- Create a VNW with network segment `172.16.0.0/24` and gateway `172.16.0.254`
```bash
twccli mk vnet -cidr 172.16.0.0/24 -gw 172.16.0.254
```
</TabItem>

</Tabs>


<br/>



## Manage virtual networks

### View virtual network information


:::caution
1. In order to fully protect the security of VCS instances, the Virtual Network is limited to the following three default domain name servers (DNS). If you need to use other DNS servers, please contact Technical Support(isupport@twcc.ai):
    - 101.101.101.101 (TWNIC)
    - 1.1.1.1 (Cloudflare)
    - 8.8.8.8 (Google)
2. You will not be able to connect to VCS instances once the settings of network interface card are modified. Therefore, we strongly discourage you from changing the NIC settings. Please beware when operating and deploying.
:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* The newly created Virtual Network will appear at the top of the Virtual Network Management page. Wait for the status to change to **ACTIVE** before you can start using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47d279d7929ab66b7d9634c91df2e81c.png)


* Click on the Virtual Network on the list to view its detailed information.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d7b73695e028c76f0c10c59c472d587a.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View all Virtual Networks.

```bash
twccli ls vnet
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22c4fb8cc6f57701ebd4ea204cf24dd3.png)

- View the details of a specific Virtual Network with ID **`261894`**.

```bash
twccli ls vnet -id 261894
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e50cd7936738b7be4055b0212adf4d21.png)

</TabItem>

</Tabs>


<br/>


### Delete a virtual network


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* On the **Virtual Network Management** page > select the Virtual Network > click **DELETE** at the top.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_741928dd481b2f582e7dc3ddc9329fba.png)


- Or click &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; next to the Virtual Network > click **DELETE**.
- Or enter the **Virtual Network Details** page > click **DELETE** at the top.


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


- Delete the Virtual Network with ID **`261894`**.

```bash
twccli rm vnet -id 261894
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c4cfd1922b2c8d9e112138bd119b29d.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f0d90990195ff56580020b195dd744be.png)

</TabItem>

</Tabs>