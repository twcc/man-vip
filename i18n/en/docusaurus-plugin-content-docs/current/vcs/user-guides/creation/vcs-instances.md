---
sidebar_position: 1
title: '虛擬運算個體'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create VCS instances


You can create VCS instances with default configurations in just a few steps or choose a suitable instance type according to your needs. Detailed information regarding to the instance types (e.g., resource numbers and sizes), see [VCS pricing](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#虛擬運算服務-Virtual-Compute-Service-VCS) for more information.


:::info
TWCC provides the following image:
- **Linux**：Ubuntu-16.04、18.04、20.04; Centos-7.9、8.2
- **Windows**：Windows 10 Pro、Windows 10 Enterprise LTSC; Windows Server 2016
:::

## Before we get started

- If you haven't sign up for a user account, please [sign up for TWCC](https://www.twcc.ai/) first.
- If you would like to operate with TWCC portal, please sign in to [TWCC portal ](https://www.twcc.ai/)first.
==**Need to update:exclamation:**==
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-2-%E5%AE%89%E8%A3%9DTWCC-CLI) first, and then [sign in](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99).


### Create <i class="fa fa-linux" aria-hidden="true"></i> Linux instances

<!-- 1 start -->

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">



 * Click **Virtual Compute Service (VCS)** to go to the **VCS Instance Management** page, and select **＋CREATE**.
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_83d344f5aabcc80cd2b33dd43fd16da8.png)

* Select an image type. TWCC provides commonly used OS images of Linux and Windows that you can create instances and use instantly. You may browse and select, or directly search for the name of the OS at the top left (e.g., Ubuntu, Windows 10, etc.).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1b597e6700c8ee4f0c615025fd9ee50.png)




:::tip
The **Recently Used** block displays the images that you have recently selected to boosts your next creation flow.
:::

* Fill in the name and description of the VCS instance on the configuration page. Select the image version and hardware specifications you need, including memory capacity, storage capacity and the cost estimated, then click **NEXT: NETWORK>**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_751ce69a1389893124315588f3b1349f.png)

* On the network setting page, select a network and select open for **Auto-assign Public IP**. You can choose the  **default_network** or a customized virtual network (VNW).

* By default, **Auto-assign Public IP** is disabled. If you need to connect to an instance from the Internet, please click **Open** to enable **Auto-assign Public IP**, and it is recommended to use [<ins>Security Group</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-sg-en) to protect instance safety and reduce information security risks.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c6c909d04f77b2cd6f748230b640b9df.png)


:::info
1. Please create a default VNW if you are a first-time user. Please refer to the operation steps: [<ins>HowTo: Create a default VNW</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-en). If there is a need for custom VNW, please refer to: [<ins>Create a custom VNW</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vnw-en).
2. Only **Tenant Admins** can create VNWs. If you are a **Tenant User**, please contact the **Tenant Admins** of your project for assistance.
:::

* On the storage information page, setup the storage size (GB) and type of the data disk (4 data disk types are provided: HDD, SSD, HDD encryption, and SSD encryption).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1646fe1820d7f195906ca7f642eeca6c.png)

:::caution
- [<ins>Auto Scaling</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-en) scales out new instances whose configuration is identical to the connected instance. Therefore,
    - If the scaled out instance <ins>**needs**</ins> to be attached with a new data disk, please create a data disk when **[<ins>Creating an instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)**.
    - On the contrary, if the scaled out instance <ins>**doesn't need**</ins> to be automatically attached with a new data disk, please separately **[<ins>Create a instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)** and [<ins>a data disk</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-create-data-disk-en), and then [<ins>attach the disk to the instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-en#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94).
:::

<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。Protect individual safety and reduce information security risks.
::: -->

- Then click **Next: Key Pair>**

* The key pair is the certificate for connecting to your Linux instance. You can select an existing key pair or click **+Create Key Pair** to create a new one.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bb3923b8a3b673f9a8bca29e5d4ecac1.png)



* Enter the name for the key pair and click OK.

:::info
With a public key, you can use the same key pair to facilitate your workflow when using different clouds. Therefore, if you have a public key created on other clouds, you can use the key to access your TWCC instances.
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d043ab59e1bc98d1470cb99db876b61.png)



*  Once the key pair is created, click **Download** immediately and save the key pair properly. Without this key pair, you will not be able to connect to the VCS instance. After downloading, you can close the dialog window, and then click **Next step: Review & Create>**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ae07492cf385fefe15ba37057cf9a5c2.png)



:::caution
TWCC is not responsible for recording and managing your key pair. Please download and properly save the key pair `pem` file. Without this key pair, you will not be able to [<ins>Connect to VCS instances</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-en).
:::


* Check the settings and estimated costs for the VCS instance, and click **Create** to  complete the process. After a few minutes, you can [<ins>connect to the instance</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-en) when it enters in the **`Ready`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_069ef79ec5b926c0eefe04f0c00aee65.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


### Command

**Step 1.** Please [<ins>create a key pair</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-keypair-en) first.
**Step 2.** Then, create a VCS instance

```bash
twccli mk vcs -key  # Key pair name
              [-n]  # VCS instance name
                
```
:::info
1. The square brackets **[ ]** indicate optional parameters, and the rest are required parameters.
2. If there is no optional parameter, instance will be created with the default  settings (or configurations):

| Image type and version |  Instance type |Network|Specification|
| -------- | -------- | -------- | -------- |
| Ubuntu 16.04    | v.2xsuper  | default_network  | 0 GPU + 8 CPU + 064GB memory |
:::

### Example

- Use the key pair **`key1`** to create a VCS instance named **`vcscli`**.

```bash
twccli mk vcs -key key1 -n vcscli
```

:::caution
- VCS instance naming conventions: must be **lowercase letters or numbers**, **first character must be lowercase letters**, and **6-16 characters long**.
- If the instance name does not match the rules, the following error message will appear:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095834bd7ee5d99d3a70596a7c462629.png)
:::

:::tip

Other related TWCC CLI commands:

```bash
twccli ls vcs -img      # View all image  specifications
twccli ls vcs -ptype    # View all instance types and specifications
```

:::


</TabItem>

</Tabs>


### Create <i class="fa fa-windows" aria-hidden="true"></i>  Windows instances

<!-- 1 start -->

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">


 * Click **Virtual Compute Service (VCS)** to go to the **VCS Instance Management** page, and select **＋CREATE**.
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_83d344f5aabcc80cd2b33dd43fd16da8.png)

* Select an image type. TWCC provides commonly used OS images of Linux and Windows that you can create instances and use instantly. You may browse and select, or directly search for the name of the OS at the top left (e.g., Ubuntu, Windows 10, etc.).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1b597e6700c8ee4f0c615025fd9ee50.png)




:::tip
The **Recently Used** block displays the images that you have recently selected to boosts your next creation flow.
:::

* Fill in the name and description of the VCS instance on the configuration page. Select the image version and hardware specifications you need, including memory capacity, storage capacity and the cost estimated, then click **NEXT: NETWORK>**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_751ce69a1389893124315588f3b1349f.png)

* On the network setting page, select a network and select open for **Auto-assign Public IP**. You can choose the  **default_network** or a customized virtual network (VNW).

* By default, **Auto-assign Public IP** is disabled. If you need to connect to an instance from the Internet, please click **Open** to enable **Auto-assign Public IP**, and it is recommended to use [<ins>Security Group</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-sg-en) to protect instance safety and reduce information security risks.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c6c909d04f77b2cd6f748230b640b9df.png)


:::info
1. Please create a default VNW if you are a first-time user. Please refer to the operation steps: [<ins>HowTo: Create a default VNW</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-en). If there is a need for custom VNW, please refer to: [<ins>Create a custom VNW</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vnw-en).
2. Only **Tenant Admins** can create VNWs. If you are a **Tenant User**, please contact the **Tenant Admins** of your project for assistance.
:::

* On the storage information page, setup the storage size (GB) and type of the data disk (4 data disk types are provided: HDD, SSD, HDD encryption, and SSD encryption).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1646fe1820d7f195906ca7f642eeca6c.png)

:::caution
- [<ins>Auto Scaling</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-en) scales out new instances whose configuration is identical to the connected instance. Therefore,
    - If the scaled out instance <ins>**needs**</ins> to be attached with a new data disk, please create a data disk when **[<ins>Creating an instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)**.
    - On the contrary, if the scaled out instance <ins>**doesn't need**</ins> to be automatically attached with a new data disk, please separately **[<ins>Create a instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-create-en)** and [<ins>a data disk</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-create-data-disk-en), and then [<ins>attach the disk to the instance</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vds-manage-disk-en#%E9%80%A3%E7%B5%90%E8%87%B3%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94).
:::

<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。Protect individual safety and reduce information security risks.
::: -->



- Create Windows login password. Then click **Next: Review & Create>**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1f7886c8ca360db6a07b4fcfa9255a92.png)

:::caution
1. To protect your instance security, we recommend setting a strong password with at least **17 characters**.
2. TWCC will not be save this private password. Be sure to keep this password properly. Without this password, you will not be able to connect to your VCS instance.
:::

* Double check the settings and estimate the usage quota of the entire VCS instance, and click **Create** to complete. After a few minutes, wait for the instance status to become **`Ready`**, and wait for some time to start
[<ins>connect</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-windows-en) and use.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ad0449c9897ecfaf0a261e525a98203c.png)


</TabItem>

</Tabs>


---

:::info
After the VCS instance is created, the additional **Data Disk** needs to be initialized before it can be used. Please refer to the steps:

- [<ins>HowTo: Initialize disks-Linux instance</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en)
- [<ins>HowTo: Initialize disks-Windows instance</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en)
:::