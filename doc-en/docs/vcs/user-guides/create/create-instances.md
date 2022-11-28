---
sidebar_position: 1
title: 'VCS instances'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-create-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-create-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create VCS instances


You can create VCS instances with default configurations in just a few steps or choose a suitable instance type according to your needs. Detailed information regarding to the instance types (e.g., resource numbers and sizes), please refer to [VCS pricing](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#虛擬運算服務-Virtual-Compute-Service-VCS)\.


<details>

<summary>TWCC provides the following image</summary>

<br/>

<font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Academic&nbsp;</b></font>

- **Linux**：
    - Ubuntu：16.04、18.04、20.04、22.04
    - Centos：7.9、8.2、8.5
    - Rocky Linux：8.5、8.6
- **Windows**：
    - Windows 10 (BYOL)：Pro、Enterprise LTSC
    - Windows Server (BYOL)：
        - 2016 (English/Chinese ver.)
        - 2019 (English/Chinese ver.)

- Please refer to [TWCC pricing (NCHC users)](https://man.twcc.ai/@twccdocs/SJWlN3YDr?type=view#%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Virtual-Compute-Service-VCS) for specific instance specifications.

<br/>

<font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px', 'color':'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font>

<br/><br/>

The above images are available except for Windows 10 (BYOL), and Windows Server comes with a license version. In addition, SQL Server Web is also available.

- Please refer to [TWCC pricing (TWS users)](https://man.twcc.ai/@twsdocs/pricing-zh#%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E6%9C%8D%E5%8B%99-Virtual-Compute-Service-VCS) for specific instance specifications.

</details>

<br/>

## Before we get started

- If you haven't sign up for a user account, please [sign up for TWCC](https://www.twcc.ai/) first.
- If you would like to operate with TWCC portal, please sign in to [TWCC portal](https://www.twcc.ai/) first.
- If you would like to operate with TWCC CLI, please [install TWCC CLI](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-2-%E5%AE%89%E8%A3%9DTWCC-CLI) first, and then [sign in](https://man.twcc.ai/XP63CErkQve0tlN0oHxrcA?view#1-3-%E9%80%B2%E5%85%A5-TWCC_CLI-%E7%92%B0%E5%A2%83%E4%B8%A6%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8%E6%9C%8D%E5%8B%99).

<br/>


### Create <i class="fa fa-linux" aria-hidden="true"></i> Linux instances

<!-- 1 start -->

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

 * Click "**Virtual Compute Service (VCS)**" to go to the "**VCS Instance Management**" page, and select "**＋CREATE**".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_54e12ed7a4b5be26649eab62e1b2c2f5.png)

* Select an image type. TWCC provides commonly used OS images of Linux and Windows that you can create instances and use instantly. You may browse and select, or directly search for the name of the image name on the top left (e.g., Ubuntu, Windows 10, etc.).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1e689d8dfc9849f6b785be5782475970.png)


:::tip
After the first selection, system would record and display the image in "**Recent Used**" block to speed up your next selection. (Clearing the browser history will also clear this record.)
:::

* Fill in the name and description of the VCS instance on the configuration page. Select the image version and hardware specifications you need, including different combinations of the number of CPUs, memory capacity, storage capacity the estimated cost, select turn "on" or "off" the deletion protection, then click "**NEXT: NETWORK>**".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_24a1990f0b33d78ae1382191aff61ca7.png)

:::info
If "Deletion Protection" is enabled, before deleting a resource, you need to disable the protection mechanism before continuing the deletion process, which can prevent the resource from being deleted by mistake and causing service interruption.
:::

* On the network setting page, you can use the default_network by system default or a customized virtual network (VNW).
* By default, **Auto-assign Floating IP** is disabled. If you need to connect to an instance from the Internet, please click **Auto-assign Floating IP** or **Assign Static IP**, we suggest you use [security group](https://man.twcc.vip/en/docs/vcs/user-guides/security/security-group/) to ensure the security of instance and reduce information security risks. Please refer to [flexible IP](https://man.twcc.vip/en/docs/vcs/user-guides/networking/elastic-ip) for usage details.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a02c1ad1f9ef715c00af9993343364e.png)


:::info
1. Please create a default VNW (default_network) if you are a first-time user, please refer to the operation steps: [<ins>Create a default network</ins>](https://man.twcc.vip/en/docs/vcs/tutorials/create-default-network). If there is a need for custom VNW, please refer to [<ins>Create custom VNWs</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/networking/virtual-network#create-custom-vnws).
2. The creation of VNWs is restricted to **Tenant Admins**. If you are a **Tenant User**, please contact the **Tenant Admins** of your project for assistance.
:::

* On the storage information page, setup the storage size (GB) and type of the data disk (4 data disk types are provided: HDD, SSD, HDD encryption, and SSD encryption).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_36fee82524d80b8c3ba86320896bb815.png)

:::caution
- [<ins>Auto Scaling</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-en) scales out new instances whose configuration is identical to the connected instance. Therefore,
    - If the scaled out instance <ins>**needs**</ins> to be attached with a new data disk, please create a data disk when **[<ins>creating an instance</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances)**.
    - On the contrary, if the scaled out instance <ins>**doesn't need**</ins> to be automatically attached with a new data disk, please separately **[<ins>create a instance</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances)** and [<ins>a data disk</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/storage/create-data-disks), and then [<ins>attach the disk to the instance</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/storage/viewInfo-attachToVCS-deleteDataDisks#attach-to-vcs-instances).
:::

<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。Protect individual safety and reduce information security risks.
::: -->

- Then click "**Next: Key Pair>**".

* The key pair is the certificate for connecting to your Linux instance. You can select an existing key pair or click "**+Create Key Pair**" to create a new one.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0257748b8ded4e887e96117b346cd75d.png)

* Enter the name of the key pair and click OK.

:::info
The public key is not required and is intended to facilitate your workflow of using the same key in different clouds. Therefore, you may enter your public key in other clouds here and use it to access your TWCC instances.
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d043ab59e1bc98d1470cb99db876b61.png)



*  Once the key pair is created, please be sure to click **Download** immediately and save it properly. Without this key pair, you will not be able to connect to the VCS instance. After downloading, you can close the dialog window.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ae07492cf385fefe15ba37057cf9a5c2.png)



:::caution
TWCC is not responsible for recording and managing your key pair. Please be sure to download and properly save the key pair `pem` file. Without this key pair, you will not be able to [<ins>connect to VCS instances</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/connection/linux/from-windows).
:::


* Check the settings and estimated costs for the VCS instance, and click **Create** to  complete the process. After a few minutes, you can [<ins>connect to the instance</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-en) when it enters in the **`Ready`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_069ef79ec5b926c0eefe04f0c00aee65.png)

* Click "**Next: Environment variables>**" to set the environment variables that meet your needs. For detailed explanation and setting examples, please refer to [Set Environment Variables](https://man.twcc.vip/en/docs/vcs/tutorials/environment-variables).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_31bc9d75a05fd876db1c6361b07e1187.png)

* Then, click "**Next: Review & Create>**" to review the settings and estimated cost of the VCS instance. Click "**Create**" to complete, and wait a few minutes, the connection can be started when the state of the instance becomes **`Ready`**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9e598e7a540443a0396874b127090992.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_20ed16cf36603d91503ca375aba54e92.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


**Command**

**Step 1.** Please [<ins>create a key pair</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/keypairs#create-key-pairs) first.

**Step 2.** Then, create a VCS instance.

```bash
twccli mk vcs -key      # Key pair name
              [-n]      # VCS instance name
```
:::info
1. The parameters in the square brackets **[ ]** are optional and the rest are required.
2. If there are no optional parameters, instance will be created with the default  settings (or configurations):

| Image type and version |  Instance type |Network|Specification|
| -------- | -------- | -------- | -------- |
| Ubuntu 16.04    | v.2xsuper  | default_network  | 0 GPU + 8 CPU + 064GB memory |
:::

<br/>

**Example**

- Use the key pair **`key1`** to create a VCS instance named **`vcscli`**.

```bash
twccli mk vcs -key key1 -n vcscli
```

:::caution
- VCS instance naming conventions: must be **lowercase letters or numbers**, **first character must be lowercase letters**, and **6-16 characters long**.
- If the instance name does not match the above rules, the following error message will appear:
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

<br/>


### Create <i class="fa fa-windows" aria-hidden="true"></i>  Windows instances

<!-- 1 start -->

<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

 * Click "**Virtual Compute Service (VCS)**" to go to the "**VCS Instance Management**" page, and select "**＋CREATE**".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6668cf5d5b790061f3efb1764915cd95.png)

:::tip
You can click on the asterisk to the left of the service in "**All Services**" <i class="fa fa-star-o" aria-hidden="true"></i> and pin your frequently used services to "**My Favorite Services**" to speed up the process.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_54e12ed7a4b5be26649eab62e1b2c2f5.png)

* Select an image type. TWCC provides commonly used OS images of Linux and Windows that you can create instances and use instantly. You may browse and select, or directly search for the name of the image name on the top left (e.g., Ubuntu, Windows 10, etc.).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1e689d8dfc9849f6b785be5782475970.png)


:::tip
After the first selection, system would record and display the image in "**Recent Used**" block to speed up your next selection. (Clearing the browser history will also clear this record.)
:::

* Fill in the name and description of the VCS instance on the configuration page. Select the image version and hardware specifications you need, including different combinations of the number of CPUs, memory capacity, storage capacity the estimated cost, select turn "on" or "off" the deletion protection, then click "**NEXT: NETWORK>**".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_58fd9944d2a55400885b40ad37373205.png)

:::info
If "Deletion Protection" is enabled, before deleting a resource, you need to disable the protection mechanism before continuing the deletion process, which can prevent the resource from being deleted by mistake and causing service interruption.
:::

* On the network setting page, you can use the default_network by system default or a customized virtual network (VNW).
* By default, **Auto-assign Floating IP** is disabled. If you need to connect to an instance from the Internet, please click **Auto-assign Floating IP** or **Assign Static IP**, we suggest you use [security group](https://man.twcc.vip/en/docs/vcs/user-guides/security/security-group/) to ensure the security of instance and reduce information security risks. Please refer to [flexible IP](https://man.twcc.vip/en/docs/vcs/user-guides/networking/elastic-ip) for usage details.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a02c1ad1f9ef715c00af9993343364e.png)


:::info
1. Please create a default VNW (default_network) if you are a first-time user, please refer to the operation steps: [<ins>Create a default network</ins>](https://man.twcc.vip/en/docs/vcs/tutorials/create-default-network). If there is a need for custom VNW, please refer to [<ins>Create custom VNWs</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/networking/virtual-network#create-custom-vnws).
2. The creation of VNWs is restricted to **Tenant Admins**. If you are a **Tenant User**, please contact the **Tenant Admins** of your project for assistance.
:::

* On the storage information page, setup the storage size (GB) and type of the data disk (4 data disk types are provided: HDD, SSD, HDD encryption, and SSD encryption).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_36fee82524d80b8c3ba86320896bb815.png)

:::caution
- [<ins>Auto Scaling</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-auto-sacling-en) scales out new instances whose configuration is identical to the connected instance. Therefore,
    - If the scaled out instance <ins>**needs**</ins> to be attached with a new data disk, please create a data disk when **[<ins>creating an instance</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances)**.
    - On the contrary, if the scaled out instance <ins>**doesn't need**</ins> to be automatically attached with a new data disk, please separately **[<ins>create a instance</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/creation/vcs-instances)** and [<ins>a data disk</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/storage/create-data-disks), and then [<ins>attach the disk to the instance</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/storage/viewInfo-attachToVCS-deleteDataDisks#attach-to-vcs-instances).
:::

<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。Protect individual safety and reduce information security risks.
::: -->

- Create Windows login password. Then click **Next: Review & Create>**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6ee5a4ab3d6ed6b9d8b2dc29c666ed15.png)

:::caution
1. To protect your instance security, we recommend setting a strong password with at least **17 characters**.
2. This password is for private use and will not be recorded or managed by TWCC. Please be sure to keep it properly, without it, you will not be able to connect to your VCS instance.
:::

* Then, click "**Next: Review & Create>**" to review the settings and estimated cost of the VCS instance. Click "**Create**" to complete, and wait a few minutes, the connection can be started when the state of the instance becomes **`Ready`**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9e598e7a540443a0396874b127090992.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_20ed16cf36603d91503ca375aba54e92.png)


</TabItem>

</Tabs>


---

:::info
- After the VCS instance is created, the additional **Data Disk** needs to be initialized before it can be used. Please refer to the steps below:
    - [<ins>Initialize Linux disks</ins>](https://man.twcc.vip/en/docs/vcs/tutorials/data-disk-init-linux)
    - [<ins>Initialize Windows disks</ins>](https://man.twcc.vip/en/docs/vcs/tutorials/data-disk-init-windows)
- A user can only create and delete VCS instances 10 times respectively in one minute.
:::