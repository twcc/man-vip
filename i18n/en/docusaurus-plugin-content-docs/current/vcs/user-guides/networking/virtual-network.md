---
sidebar_position: 2
title: '虛擬網路'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c7ecced96f77b12664677d4cef97a3cc.png) Virtual Network (VNW)

Virtual Network service is primarily to provide custom virtual network function for VCS instances. Tenant Admins have full permission to manage VNWs, and Tenant Users can only view and use the networks.

:::info
For the permission differences between a Tenant Admin and a Tenant User when using VCS instances, see [<ins>User roles and permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-compute-en#虛擬運算服務) for more information.
:::

## Create a default virtual network

If you are first-time user of TWCC VCS, you must create a a **default network** in the Virtual Network service before you can get started. Refer to [<ins>HowTo: Create a default virtual network</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-en) for the creation steps. If you need other VNW segments, refer to [<ins>Create custom VNWs</ins>](#建立自訂虛擬網路) in this user guide.

## Create custom VNWs

:::caution
1. CIDR cannot overlap with other virtual network segments.
2. Please use the private network range defined by RFC1918 for CIDR to avoid connection errors:
    - 10.0.0.0/8
    - 172.16.0.0/12
3. Please do not use the system reserved segment: 192.168.1.0/24..
:::


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* From the service list, select **Virtual Network**. On the **Virtual Network Management** page, click **＋CREATE**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b81c1fed1db661d9721d6c9725e447bb.png)


* Enter the Virtual Network setting information, and click **NEXT: REVIEW & CREATE>** after completion.
    * Name: The name for the VNW, which cannot be repeated and cannot be change after creation.
    * CIDR: Classless Inter-Domain Routing (CIDR), which specifies the address range of the VNW.
    * Gateway: The default gateway.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f994e06a33baac5cbfa0a62497495d96.png)


* Check the Virtual Network settings and planned estimated cost, and click **CREATE** once you have confirmed.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6755c7670a9ff7809c1508fea511a383.png)



</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


- Create a VNW with network segment `172.16.0.0/24` and gateway `172.16.0.254`
```bash
twccli mk vnet -cidr 172.16.0.0/24 -gw 172.16.0.254
```
</TabItem>

</Tabs>



## Manage VNWs

- ### View VNW

:::caution
1. In order to fully protect the security of VCS instances, the Virtual Network is limited to the following three default domain name servers (DNS). If you need to use other DNS servers, please contact Technical Support(isupport@twcc.ai):
    - 101.101.101.101 (TWNIC)
    - 1.1.1.1 (Cloudflare)
    - 8.8.8.8 (Google)
2. You won't be able to connect to VCS instances once the settings of network interface card are modified. Therefore, we strongly recommend you to not change the network interface card settings. Please pay more attention during your operation and deployment.
:::

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* The newly created Virtual Network will appear at the top of the Virtual Network Management page. Wait for the status to change to **ACTIVE** before you can start using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47d279d7929ab66b7d9634c91df2e81c.png)


* Click on the Virtual Network on the list to view its detailed information

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d7b73695e028c76f0c10c59c472d587a.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View all Virtual Networks
```bash
twccli ls vnet
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22c4fb8cc6f57701ebd4ea204cf24dd3.png)

- View the details of the specific Virtual Network with ID **`261894`**
```bash
twccli ls vnet -id 261894
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e50cd7936738b7be4055b0212adf4d21.png)

</TabItem>

</Tabs>



- ### Delete VNWs

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* On the **Virtual Network Management** page > select the Virtual Network > click **DELETE** at the top.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_741928dd481b2f582e7dc3ddc9329fba.png)


- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the Virtual Network &nbsp;> click **DELETE**.
- Or enter the **Virtual Network Details** page > click **DELETE** at the top.


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


- Delete the Virtual Network with ID **`261894`**
```bash
twccli rm vnet -id 261894
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0c4cfd1922b2c8d9e112138bd119b29d.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f0d90990195ff56580020b195dd744be.png)

</TabItem>

</Tabs>