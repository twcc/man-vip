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


### Create <i class="fa fa-linux" aria-hidden="true"></i> Linux instances

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC Portal</b></summary>

<br/>


{%hackmd @twccdocs/vcs-chunk-create-instance-en %}

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


</details>


<!-- Space -->

<div style={{"height":"8px"}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>TWCC CLI</b></summary>


### Command

**Step 1.** Please [<ins>create a key pair</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-keypair-en) first.
**Step 2.** Then, create a VCS instance

```bash
twccli mk vcs -key  # Key pair name
              [-n]  # VCS instance name
                
```
:::info
{%hackmd @twccdocs/cli-parameter-note-en %}
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


</details>


### Create <i class="fa fa-windows" aria-hidden="true"></i>  Windows instances

<!-- 1 start -->

<details class="docspoiler">

<summary><b>TWCC Portal</b></summary>

<br/>

{%hackmd @twccdocs/vcs-chunk-create-instance-en %}


- Create Windows login password. Then click **Next: Review & Create>**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1f7886c8ca360db6a07b4fcfa9255a92.png)

:::caution
1. To protect your instance security, we recommend setting a strong password with at least **17 characters**.
2. TWCC will not be save this private password. Be sure to keep this password properly. Without this password, you will not be able to connect to your VCS instance.
:::

* Double check the settings and estimate the usage quota of the entire VCS instance, and click **Create** to complete. After a few minutes, wait for the instance status to become **`Ready`**, and wait for some time to start
[<ins>connect</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-windows-en) and use.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ad0449c9897ecfaf0a261e525a98203c.png)


</details>


---

:::info
After the VCS instance is created, the additional **Data Disk** needs to be initialized before it can be used. Please refer to the steps:

- [<ins>HowTo: Initialize disks-Linux instance</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en)
- [<ins>HowTo: Initialize disks-Windows instance</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en)
:::