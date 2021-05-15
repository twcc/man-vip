---
title: Virtual Compute Service
tags: Guide, VCS, EN
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# Virtual Compute Service (VCS)


A VCS instance, is a computer file, usually called an image, that behaves like a computer. In other words, it is a computer built within a computer. Like all other programs, a VCS instance executes in a window. An end user’s experience in a VCS instance is just like that in the operating system (OS) of the host.


## Creating a VCS instance

 * Enter Virtual Compute Service. On the VCS instance management page, click "＋CREATE".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_affea3273b1939f5326e34cf225d12f8.png)


* Select a Image Type. TWCC offers OS image templates that are frequently used so that they may be used once a VCS instnace has been created.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d716d504f239bd539d2d28c36474e83.png)



* On the basic information page, fill in the name and description of the instance, select the version of the image, and the specifications of the needed hardware, including different combinations of number of CPUs, memory size, storage disk, and credit limit. Click "NEXT: KEY PAIR>"

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bc503fc7bc523848e591c037189a1cbb.png)



* A key pair is a certificate with which to connect to a VCS instance. Before creating a VCS instance, you must first obtain or create a key pair in order to use the functions of an instance. If this is the first use, please click "＋CREATE KEY PAIR".

:::info
:bulb: Hint: 100 GB OS disk space (built-in dsk) is provided.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_72e73c2abb8c4a7c6cef29772fb9c75a.png)


* Enter the name of the key pair. Click OK. 
* Public key is optional. It is to be used as a single key to access various cloud services. Therefore, a user may enter here the public key that they use for other cloud systems and use it to access this system.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f3cf615cef7391319b842d7daaec77fa.png)

* After the key pair has been created, you must click “Download” and keep this key pair in a safe place. Without this key pair, you will be unable to connect to that VCS instance. After the download is complete, close this window.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d327c837b8a35e1a904aa4162d6e1c7.png)


* Select your key pair, click "NEXT: NETWORK>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dd2fc38557d74436a5fe256d9ec31e87.png)


On the network setup page, choose the network and enable automatic distribution of public IP. You may use the system default, named "default_network" or create your own virtual network. Click "NEXT: STORAGE>".


:::info
:book: Refer to [Virtual Network](https://www.twcc.ai/doc?page=virtual_network)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9dc86baa98abd15a1df17a5ffb3aebb3.png)



* On the storage information page, specify the size of disk in GB and choose disk type. Click “NEXT: REVIEW & CREATE>”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_05fcdec6144be4096e0eee27d4b69637.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** The data disks need to be initialized before they can be used. See 

- [<ins>HowTo：Initialize Disks- Linux instances</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en)
- [<ins>HowTo：Initialize Disks- Windows instances</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en)
:::

* Review the entire VCS instance setup and estimated usage credits, click “CREATE” to finish the process. Wait a few minutes. When the instance status is changed to “Ready”, the instance is ready to be connected and used.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_28b612347109e04b9680d62125b636b3.png)


## Managing the VCS instance 
* The VCS instance management page lists information on all the instances, including ID, name, public IP, state, creation time, and who created it. The instance created most recently is listed on top. Click a column name sorts the list by the values in that column or toggle between ascending and descending order.

* In Search key in keywords to show all records with values matching those keywords.

* Clicking![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bb1e48fb968ad3fdeed9122a20b63805.png) <span> menu button allows you to execute such functions as start, stop, and delete. Check the checkboxes on the left to apply the start, stop, or delete action to all the checked instances.

* Click an instance in the list to enter the detailed information page of the instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a6dffb05d1b6e68b5ebbe1db1eebf8ca.png)


* The detailed information page shows basic information of the instance, detailed specifications, and network and storage information. Click “Connect” to see the way to connect to the instance or carry out start, stop, snapshot, delete, and refresh. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_970b4234bd43e83b34a2b547ee0a4421.png)

    
:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **Important：**
- When you **stop** an instance, the following happens:
    - We remove the instance from the host, and deallocate the resources.
    - The RAM is erased. The data in boot disk (100 GB) and data disk is kept.
    - Instance state transitions: `Ready` >`Stopping` >`Stopped`

- When you **start** an instance, the following happens:
    - In most cases, we move the instance to another host.
    - Instance state transitions: `Stopped` > `Queueing`>`Starting` >`Ready`.
    
- When you **delete** an instance, the following happens:
    - The boot disk (100 GB) is also erased, and please refer to [Snapshot](#Snapshot) for preserving your data.
    - Data disks are preserved and detached from the instance.
    - Instance state transitions: `Deleting` > Disappear from the list on the management page.
:::

## Connecting to the VCS instance

* On the detailed information page, click the “Connect” button. Please note that the instance only can be connected in the "Ready" state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b22daaf4f725024b457f08031760089.png)


* After clicking the “CONNECT” button, the system shows the instructions of steps connecting to your instance using SSH.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cc650f4a1bd420af0453fa7d625291ba.png)


:::info
Note: This example shows the CentOS. The system displays different instructions for the instance with different OS.
:::

### Connecting to your instance from Windows

#### 1. Command Prompt (applicable to Windows 10 or Windows Server 2019 users)

* Open the Command Prompt window in your local computer, and check the installation of an SSH client by entering `ssh -V` command. If your local computer does not recognize the command, you can install OpenSSH client (see [Windows official document](https://docs.microsoft.com/zh-tw/windows-server/administration/openssh/openssh_install_firstuse#installing-openssh-from-the-settings-ui-on-windows-server-2019-or-windows-10-1809)), or use a third-party tool mentioned below.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99e6ca5f12f08976f1f4b500ec0f7a52.png)


- According to the prompt displayed by clicking "CONNECT", enter commands to change the permission of your key pair.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fc378933ece90f405f6dc77f75e2605a.png)


<!--
<div style="background-color:black;color:white;padding:20px;">

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">icacls d:\key\janicekey01.pem /reset</span>
已處理的檔案: d:\key\janicekey01.pem
已順利處理 1 個檔案; 0 個檔案處理失敗

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">icacls d:\key\janicekey01.pem /GRANT:R "%USERNAME%:`(`R`)`"</span>
已處理的檔案: d:\key\janicekey01.pem
已順利處理 1 個檔案; 0 個檔案處理失敗

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">icacls d:\key\janicekey01.pem /inheritance:r</span>
已處理的檔案: d:\key\janicekey01.pem
已順利處理 1 個檔案; 0 個檔案處理失敗

C:\Users\Janice_Chiang><span style="background-color:#fcf8e3; color: #000; padding:3.2px">ssh -i d:\key\janicekey01.pem centos@203.145.220.231</span>
The authenticity of host '203.145.220.231 (203.145.220.231)' can't be established.
ECDSA key fingerprint is SHA256:vZ5EWM1ZbnYWkF52T6fxQROphd2PqiaGYvpBAuSahFQ.
Are you sure you want to continue connecting (yes/no)? <span style="background-color:#fcf8e3; color: #000; padding:3.2px">yes</span>
Warning: Permanently added '203.145.220.231' (ECDSA) to the list of known hosts.
Last login: Tue May 14 14:14:37 2019 from 220-141-25-168.dynamic-ip.hinet.net
[centos@vm01-252546-iaas ~]$ 
</div> 
-->


#### 2. Third-party tools (applicable to all Windows users)

Except for built-in Command Prompt, third-party tools (e.g., [PuTTY](https://www.putty.org/) and [MobaXterm](https://mobaxterm.mobatek.net/)) are alternatives for accessing your instances. If you use PuTTY, the key pair should be converted from `.pem` file to `.ppk` file before connecting to your instance. The procedure is as follows:

- **Convert your key pair from `.pem` to `.ppk` using PuTTYgen**

    - Open "PuTTYgen".

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b5ae5549743ef0dd1c671aef35693b4e.png)

    
    - Click "Load" to load your `.pem` key pair you have created and downloaded.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_52985894e303a07cbb2e157470f0be89.png)


    - Click "OK" 

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e02e0baf7bb17cf765ef55413538ab57.png)


    - Click "Save private key", input the file name and ensure the type is `.ppk`.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51de6a2b075c889fa6b4e7a13c735eb0.png)


- **Connecting to your instance using PuTTY**

    - Open "PuTTY".
        
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7421359707529e68f13ec1c15db8fb03.png)


    - Choose "Session" in the menu on the left, and input Host Name (you can find the information by clicking "CONNECT" on instance details page) and Port (22). 
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9603bde037e6d225d59d5d46c9a9a110.png)

    
    - Then, click "SSH" > "Auth" on the lefr, and click "Browse" to load `.ppk` key pair file.
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d1d08d262cd8f893cb4a727b06a70115.png)


    - Last, click "Open".

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b5b6e7654e53aa75f3c9e94d9cf6df05.png)


    - A window opens and you are connected to your instance.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c2f96044e7b5f02f10c248f5e0c80323.png)


### Connecting to your instance from Linux or macOS

* Open terminal in Linux or macOS. Follow the below example to enter the path where your key is stored, name, and your instance connection information.

 <div style="background-color:black;color:white;padding:20px;">
 jc@jc-VirtualBox:~$ <span style="background-color:#fcf8e3; color: #000; padding:3.2px">chmod 400 janicekey01.pem</span><br><br>
 
 jc@jc-VirtualBox:~$ <span style="background-color:#fcf8e3; color: #000; padding:3.2px">ssh -i janicekey01.pem centos@203.145.220.231 </span><br>
The authenticity of host '203.145.220.231 (203.145.220.231)' can't be established.
ECDSA key fingerprint is SHA256:vZ5EWM1ZbnYWkF52T6fxQROphd2PqiaGYvpBAuSahFQ.
Are you sure you want to continue connecting (yes/no)? <span style="background-color:#fcf8e3; color: #000 ; padding:3.2px">yes</span><br>
Warning: Permanently added '203.145.220.231' (ECDSA) to the list of known hosts.
Last login: Wed May 15 01:02:37 2019 from 59-124-220-27.hinet-ip.hinet.net <br>
[centos@vm01-252546-iaas ~]$
</div> 


# Snapshot

VCS snapshot can preserve the state and data in the OS disk of a VCS instance at a specific time. Usually, a snapshot is taken before an important system update or special software installation to enable returning the VCS instance to an earlier state when necessary.

:::danger
<i class="fa fa-exclamation-triangle fa-20" aria-hidden="true"></i> **Important:** Once a VCS instance is deleted, the 100 GB OS disk space (built-in disk) will disappear. Please refer to the following instance snapshot procedure to preserve your data before deleting the instance.
:::

## Creating a VCS instance snapshot

* On the **VCS Instance Management** page, select the instance on the list to enter **VCS Instance Details** page. 
* Select **SNAPSHOT**.

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** 
1. The instance must be in **`Ready`** or **`Shutdown`** state for a snapshot to be taken.
2. For more information about instance states, operation, and billing, see [ <ins>VCS Instance Lifecycle</ins>](https://man.twcc.ai/@twccdocs/vcs-concept-lifecycle-en).
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_43da98a788cd1376b7c3ae552176b986.png)

* Enter the name and description for the snapshot, then select **OK**.
* It takes several minutes to build a snapshot. When “**Processing**” window disappears, you may continue with other tasks.

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** 

- It takes longer for instances in the **`Ready`** state and with I/O traffic. We suggest **shutting down** instances to create a snapshot.
- We suggest adding **nofail** option to the automount entry for disks to ensure starting and connecting to the instance properly.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_278f64441c29590f7045e911d2b748ed.png)

- After redirecting to **VCS Instance Snapshot Management** page, you can use the snapshot when it changes to **`ACTIVE`** state (**`QUEUED`** > **`SAVING`**  > **`ACTIVE`**).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_82759487d56be062ee1aefafe19762d6.png)


## Managing snapshots

* On the **VCS Instance Snapshot Management** page, you can see a list of snapshots. The latest creat snapshot will be shown at the top of the list. 
* For the unneeded snapshots, you can hover your mouse over <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> button, and the select **DELETE**.


:::info 
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** For the VCS instance restoring from a snapshot, you need to delete the snapshot before you can delete the instance.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8cef531dcccc3b8d57c16a59b6d55f59.png)


## Restoring an instance from a snapshot

The taken snapshot is stored as an image. When creating a new VCS instance, you can restore the instance from the snapshot by selecting the snapshot image (private) and then just follow the normal instance creation procedure.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3842c6080a26f4f86792aca62169ff0e.png)


# key pair 
A key pair is the certificate to sign in to an VCS instance. You must obtain or create the key pair before you can use the instance.

## Creating a key pair 
* Click "key pair" on the left to enter the key pair management page. Key pairs that have already been created are displayed here. Click " + Create”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8ceb35450e18348626878b3582390aac.png)


* Enter the name of the key pair and click "OK".
* Public key is optional. It is to be used as a single key to access various cloud services. Therefore, a user may enter here the public key that they use for other cloud systems and use it to access this system.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_84214391681716e0cd26332439c5d691.png)


After the key pair has been created, you must click “Download” and keep this key pair in a safe place. Without this key pair, you will be unable to connect to that virtual machine. After the download is complete, close this window.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b4f7d434b04507fdc007abcd1b51793f.png)


## Managing key pairs

* On the managing key pairs page, the key pair that was created most recently is listed on top. Click a key pair in the list to view its detailed information or execute “Deletion” or “Refresh”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_161badc515e9c65c2504180d17b5fbfe.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2ccba4d1306d4e3e539f34630465165a.png)

# Storage

## Virtual Disk Service

Virtual Disk Service can expand the disk of storage. Pay and use, flexible and convenient.

### Creating a disk

* Click “Virtual Disk Service” on the service list to enter the “Virtual Disk Service”. On the Data Disk management page, click " ＋CREATE”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a2f264e953ae9fa6808d8ee4d547f984.png)

* Fill in the name, description, whether this disk is a new creation or a restoration from a snapshot, size, and disk type. Click “NEXT: REVIEW & CREATE>”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7f25d31a70033b7751d2c3849d01ca8a.png)

* Review the setup of the disk, confirm, and click “CREATE”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3a170626fe3be36bf40fddce130b9080.png)

### Connecting a disk to a VCS instance

* After a disk has been created, you need to attach it to the VCS instance and connect to the instance to use it.

* After the disk has been created, it will be listed on the top of the list . It can be used once its status becomes "AVAILABLE". 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ede745d31d9f8b7e5325b9c44b306aaf.png)

* Click a disk in the list to enter the its detailed information page. Click “Attach”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_98bc6952d15db5d27a42aff6a1291255.png)


* After the “Attach Disk” window appears, select the VCS instance that you wish to attach and click "OK".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7991611e74f389d9a99fcd730d04ca63.png)


* Once the disk is attached to the instance, click “Refresh”. Attached instance will show in the bottom part of the page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ee81cc5b7a29b6b2ea514445093fc925.png)


* Continuing from the above diagram, click “Detach” and detach from the attached instance.

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** After attaching to a VCS instance, the data disks need to be initialized before they can be used. See 

- [<ins>HowTo：Initialize Disks- Linux instances</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-linux-en)
- [<ins>HowTo：Initialize Disks- Windows instances</ins>](https://man.twcc.ai/@twccdocs/howto-bss-init-vol-windows-en)
:::

### Deleting a disk
* Please note that a deleted disk is forever gone. If a disk is is "IN-USE" state, you need to detach the disk. When the state of a disk becomes "AVAILABLE", click “Delete” to delete this disk.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2e4f6dd85867d9fdc1b2dd08ae2e1038.png)

### Data Disk Snapshot
    
:::info
:bulb: Note：If you want to backup data in data disks, please refer to the following disk snapshot steps.
:::

* Data Disk Snapshot can preserve a snapshot for a disk. On the detailed information page of disk, click “Snapshot” to show the “Take a snapshot” window. Enter the name and description of the snapshot and click "OK".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0cb54ad37fd5fce3b6326e27860e9e0b.png)


## Snapshot
### Managing Data Disk Snapshot

* The snapshot management page shows a list of information on all disks, including the ID and name of the snapshot, disk name, the state of the snapshot, creation time, and the user name who took it. The snapshot that was taken last is listed on top. Click a column name sorts the list by the values in that column or toggle between ascending and descending order.

* In Search key in keywords to show all records with values matching those keywords.

* Clicking![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fcb9cb1089eda6ce5a84a8f8787cad14.png)<span> menu button and click “Delete” to remove that snapshot.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_501af8a439374fac49a75e3c15a355ef.png)

# Networking & Security
## Virtual Network

The Virtual Network service is primarily to provide a VCS instance with user-definable virtual network functionality. This functionality gives the user complete read and write rights to Tenant Admins while Tenant Users have read-only rights.

### Creating a virtual network
* On the service list, click “Virtual Netwotk” service to enter. On the Virtual Network Management page, click " +CREATE”.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2425a7c5a5d6bd45757e3d22e19eaecb.png)


* Enter the information to set up the virtual network. Click “NEXT: REVIEW & CREATE”.
    * Name: That is the network name, which cannot be duplicated. Once established, the name cannot be changed.
    * CIDR: Classless Inter-Domain Routing, CIDR, means the range of IP addresses. Please enter it in the format suggested, such as 192.168.1.0/24, which allocates this Class C 192.168.1.0 to the VPN. Please note that IP address range cannot be duplicated with those of other virtual networks.
    * Gateway: Assign a default gateway.
    * Server name: Give the server a name (DNS).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6251684d96f37082f39bbb559719acc2.png)


* Review the setup and project credits for this virtual network. If correct, click “CREATE”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_731382b595654ff5c834edd35dbb097b.png)


* The most recently created network shows up on the top of the virtual network management page. When its stage becomes "ACTIVE", it is available for use.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8538fd70e922a9e04c40db733c13bfbb.png)

 
### Deleting a virtual network
On the management page, select the virtual network from the list, click![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9763fee28770471d347e8470df19e829.png)<span> menu and click “Delete”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_742543e91c740b65598e2b7eeb28e61a.png)


### Using self-defined virtual private network

* Once the virtual network has been created, when you create a VCS instance, select the network name that you defined yourself.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ea4b05a8153443dc4d46a3e9942ddb04.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_97961cf4c8c8c78d67fc5ba0356831c2.png)

    
## Virtual Private Network (VPN)

TWCC VPN supports IPsec/IKE security protocols. You can create site-to-site VPN connections to ensure safe and secure connection.

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note：** Only Tenant administrators can create VPN connections. Before creating VPN connections, please create IKE and IPSec policies.
:::
### Create IKE Policy

* Select **IKE policy** on the left side. On the **IKE Policy management** page, select **+CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_49beea6215b62b670020d2e983c76a34.png)


* On the **Create IKE Policy** page, we provide default values. You can select or enter values that meet your needs. Then select **NEXT: REVIEW + CREATE**. 

    * Name：Name of the IKE policy
    * Authentication Algorithm：Select an authentication algorithm, SHA-1, SHA-256, SHA-384, or SHA-512.
    * Encryption Algorithm：Select an encryption algorithm, 3DES, AES-128, AES-192, or AES-256.
    * IKE Version：Select IKE version, v1 or v2.
    * Key Lifetime (sec)：Enter the key lifetime in seconds.
    * Perfect Forward Secrecy (PFS)：Select PFS (Perfect Forward Secrecy, PFS）, Group 2, Group 5, or Group 14.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_87218c679df786f17fb544c25026517b.png)



* Then you can review the IKE policy configuration. When you are ready, select **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8e226ad44e8b06cfed8c2a2b3ec3a367.png)


* The newest create IKE policy lists on the top 新建立的 IKE 規則 會出現在列表的最上方。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e0f3c5fefe5a2f8be0674318b09837b0.png)



### Create IPSec Policy 

* Select IPSec Policy on the left side. On the **IPSec Policy management** page, select **+CREATE**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_289ff36e8a62372bfae82530e56bab07.png)



* On the **Create IPsec Policy** page, we provide default values. You can select or enter values that meet your needs. Then select **NEXT: REVIEW + CREATE**. 
    * Name：Name of the IPsec Policy.
    * Authentication Algorithm：Select an authentication algorithm,SHA-1, SHA-256, SHA-384, or SHA-512.
    * Encryption Algorithm：Select an encryption algorithm, 3DES, AES-128, AES-192, or AES-256.
    * IPSec Protocol：Select an IP security protocol, ESP, AH, or AH-ESP.
    * Encapsulation Mode：Select an encapsulation mode, Tunnel mode or Transport mode.  
    * Key Lifetime (sec)：Enter the key lifetime in seconds.
    * Perfect Forward Secrecy (PFS)：Select PFS (Perfect Forward Secrecy, PFS）, Group 2, Group 5, or Group 14.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1c8176e0bddd3378f63884a4941fc091.png)



* Then you can review the IPsec policy configuration. When you are ready, select **CREATE**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9b46dc8a67f0239a1f7762de0d06276e.png)




* The new IPSec rule will appear at the top of the list.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e18e187aade3082363ec3bd218f8f9f0.png)




* After IKE policy and IPsec policy have been created, please go to **VPN management page** to create a VPN connection.


### Create VPN connection

* Choose **VPN** service, and then select **+Create** on the **VPN management** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_864405eab39bff888bde33f9bf067d34.png)



* On the **Create VPN** page, you can name the VPN connection, select a virtual private network, IKE policy and IPsec policy. When you are ready, select **NEXT: REVIEW + CREATE** button.

:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **Tip：** An IKE policy and an IPsec policy must be created before a VPN connection.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_29cc33bb4f49e9cb26ffadbd7feb69aa.png)


* Then you can review the VPN connection configuration. When you are ready, select **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ac519d77b9c30a79163276380f57dcaa.png)



* The new VPN connection will appear at the top of the list, and its state is **PENDDING_CREATE**. Select the connection to enter **VPN Details** page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3e99b7bffd7214823b7773ceed6df7ad.png)



### Create connection

* On the **VPN Details** page, select **CONNECT** at the upper left.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_63e45123e5f648571d30db6ada9a7a94.png)



* In the **Create Connect** window, enter Peer Address (IP), Peer CIDR and the Pre-Shared Key, and then select **CONNECT**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_89a2be5b3c9dfc05da3aa456d8f50227.png)


* The VPN connection state changes to **ACTIVE** when it has been established, and then you can start to connect to the remote server with  safe and secure transmission of sensitive data.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1869aef694f201151e914144b9102285.png)
    
## Load Balancing Service

TWCC Load Balancing Service offers **Application Load Balancer (HTTP and HTTPs with SSL)** and **Network Load Balancer (TCP)**. When network traffic increased, the Load Balancer will automatically distribute traffic to VCS instances to keep high service flexibility, scalability, and availability.

### Creating Load Balancers

* On the service list, select **Load balancing Service**. On the **Load Balancer Management** page, select **+ CREATE**. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7c898410c6b5177afc2baf19923e4061.png)

* Enter the load balancer configuration information, and then select **NEXT: REVIEW & CREATE>**.
    * **Name**: Enter the name of the load balancer.
    * **Description (optional)**: Enter the description for the load balancer.
    * **Type**: Select Application Load Balancer or Network Load Balancer.
    * **Listener** 
        * **Protocol**: Select HTTP, HTTPs, or TCP protocol
            * Application Load Balancer can handle **HTTP** and **HTTPs** traffic. 
            * Network Load Balancer can handle **TCP** traffic.
        * **Port**: Enter the protocol port to which the load balancer will accept traffic.
        * **SSL certificate**: Select a SSL certificate for the listener.
        * Select **Add** to configure multiple listerners and ports.
    * **Method**: Select one method of balancing from **ROUND_ROBIN**, **LEAST_CONNECTIONS**, and **SOURCE_IP**.
    * **Virtual Network**: Select a virtual network.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_153123bec3cde360759faf6dc256323d.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** Before you create **HTTPS with SSL** listener, [<ins>create SSL certificates</ins>](#Creating-SSL-Certificates).
:::

* Review the configuration for the load balancer, and then select **CREATE**. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_26eccc808a0a097fb951884efe7109b5.png)

* After the load balancer has been created, you will be directed back to the list page. The newly created load balancer appears on the top of the list, and you can select the load balancer to enter its detail page. You can edit the information when it turns to the **ACTIVE** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b44377ba1895ba6568e8261fe45a11b8.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** After creation, [<ins>attaching VCS instances to the load balancer</ins>](#連結負載平衡器) enables the load balancer to play a role in balancing network traffic for your service.
:::


### Managing Load Balancers

* On the Load Balancer Management page, click the list of load balancers to enter the load balancer details page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b44377ba1895ba6568e8261fe45a11b8.png)

* On the load balancer details page, you may review the basic information and the configuration for network connections, or execute actions like **EDIT**, **DELETE**, **REFRESH**, etc.

* Load balancer is assigned with a VIP (Virtual IP) for services.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c33a55f84ad4a8854824c58075878d81.png)


### Attaching VCS instances to a Load Balancer


* Enter Load Balancer Management page > Select a load balancer > Click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> menu button > Select **EDIT**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_986b6373782a4517062b31a85b8f0e31.png)


:::warning
<i class="fa fa-lightbulb-o fa-20" aria-hidden="true"></i> **Tip:** Entering keywords in the search bar helps you find your load balancer quickly.
:::

* You can also find **EDIT** button in Load Balancer Details page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dff9d4cfa4cbb5dac33c8ed0c1d470fd.png)


* Click **ADD SERVER** in the editing window to attach VCS intances to the load balancer.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d0d2e98d14584259d01af5b25fe8674.png)


* Enter the private IP of the VCS intance and port, e.g., `192.xxx.xxx.xx:80`
  Then Click **ADD SERVER** to set up the private IP and port of the second VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b21e635a2375295dbf7fbc610c35912c.png)


* Select **OK** when all VCS instances are added.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_778f247c3de55dace298be1e10b02b4f.png)


* Back to the details page, the IPs of attached instances shows in the Networks & Connection block. The load balancer starts working when it turns to the **ACTIVE** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_78e6364f3a8bcfac7c21a35d5b2bd409.png)



### Creating SSL Certificates

* Select **SSL Certificate** on the left-side navigation > Select **+ CREATE** in the SSL Certificate Management page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_af28a16f03102f9dd7c0adfcbc77dbc0.png)

* Enter the name, description, and Base64 Encode (PKCS#12 format) of your SSL certificate, and then select **NEXT: REVIEW + CREATE>**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_28503f445325732a4a173fdedc235e3c.png)



:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** TWCC currently supports only PKCS#12 format, see [<ins>HowTo：Convert SSL certificates</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-en).
:::

* Review SSL certificate configuration, and then select **CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_40b550ee8df297dbc378c900ddc88f58.png)


* The certificate will appear in the list. You can select the certificate for a HTTPs with SSL listener when it turns to the **ACTIVE** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8d95dd1ad30becd8acf5f994ae02a5aa.png)

### Managing SSL Certificates

Follow [Creating SSL Certificates](#Creating-SSL-Certificates) and after the certificate is created, it can be selected when creating an Application Load Balancer, or it can be added or updated to an existing load balancer.

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:** TWCC currently supports only PKCS#12 format, see [<ins>HowTo：Convert SSL certificates</ins>](https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-en).
:::

#### Creating Application Load Balancers (HTTPS with SSL)

Creating steps are the same as [Creating Load Balancers](#Creating-Load-Balancers).

- Type：Select **Application Load Balancer**.
- Listener：Select **HTTPS with SSL** for protocol. Select an existing certificate for SSL Certificate. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab57b9297aa8a64315b4b4414df58a7c.png)


#### Renew SSL Certificates of a Load Balancer

SSL certificates have a validity period. You can create a new certificate to replace the certificate about to expire:

* Enter the Load Balancer Details page, and then select the **EDIT** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_65e2f132853365c34c77f978c1da7890.png)


* Select the newly created certificate name for the existing HTTPS with SSL listener, and then select **OK**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3ecff39bccbd880ecf8cc546c84a7bb8.png)


After the update, you will be directed to the load balancer details page.
You can see the SSL certificate name. The certificate turns to the **ACTIVE** state after it is valid, which means that the SSL certificate has been successfully renewed.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5023a4ab96e89db1bb451de9c13a0ba0.png)



#### Deleting SSL Certificates

* Enter the SSL Certificate Management page，select the SSL certificate you want to delete, and then select above **DELETE** button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dfad20e46b3934bdc6ffccb48914f312.png)


:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **Note:**  To ensure the security for the SSL certificate, only the creator can view and use the SSL certificate.
:::


## Auto Scaling

Auto scaling is an automatic, flexible adjustment mechanism. This service will, under the designated conditions, dynamically increase or decrease the number of VCS instances in order to address the situation of insufficient resources when the load is increased, to elevate service efficiency, and to lower costs. 

### Creating an auto scaling template
* On the service list, select "Auto Scaling" to enter "Auto Scaling management" page. Click  "＋CREATE"

* On the Create Auto Scaling page, enter the following setup information. When you have completed those, click “NEXT: REVIEW & CREATE”.
    * Name: Enter the name of the Auto Scaling.
    * Description: Enter the description of the Auto Scaling. Optional.
    * Meter name: Select a Meter name. This is the criteria by which Auto Scaling judges. Choose from cpu_util, memory.usage, disk.read.usage, disk.write.usage, network.income.bytes.rate, and network.outgoing.usage.
　
    * Upper Threshold: Assign the upper limit of the absolute threshold for the Meter. For example, when the Meter is set to cpu_util, a value of 80 in this threshold means that when CPU utilization exceeds 80%, new instances will be added.
    * Lower Threshold: Assign the lower limit of the absolute threshold for the Meter. When it is lower than this threshold, the number of instances will be reduced.
    * The maximum upper limit for instances: Assign the maximum number of instances. The default value is 2. (Auto Scaling needs at least two VCS instances).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3789c44867c6ea8b2a3bcaa2d34c73c7.png)


* Review the setup values for Auto Scaling and credits. If correct, click “CREATE”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bbeaeb088de4a03b4f548739a4835e87.png)

   
### Managing Auto Scaling
* On the Auto Scaling management page, the Auto Scaling that was created most recently is listed on top. Click Auto Scaling list to review the setup information for Auto Scaling or execute “Delete” or “Refresh”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_234d35fc1019e6ab52a8fcf13a714865.png)



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_888e3a2184f015086f4a3cc5cb6e75c4.png)



### Attaching an VCS instance to Auto Scaling

* Enter "Virtual Compute Service". On the "VCS instance management" page, click the instance on which you wish to attach to auto scaling. Enter the instance details page. Click the "ATTACH" button behind Auto Scaling.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ba4878c6c76591e962025a3a7f8c9366.png)


* Auto Scaling must integrate with a Load Balancer to distribute traffic to different VCS instances to achieve high availability of service. In the Auto Scaling setup window, select the name of the Auto Scaling, connected service to be notified, name of the load balancer, and port. After setup is complete, click "OK".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3b0c424d291de86a599a1471fd843388.png)


## Basic Virtual Firewall


The  Basic Virtual Firewall service provides a simple and flexible architecture that provides network security protection by creating firewalls and management rules.

:::info
Note: This feature is only available for Tenant Admins.
:::

### Creating a Basic Virtual Firewall

* Enter the "Basic Virtual Firewall" service. On the "Basic Virtual Firewall Management" page, click "+CREATE".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3724b3b32b51c7888dc5f4a749a27cf8.png)



* Enter a name and description, then click "REVIEW & CREATE".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_62dc767685502113ce13a8b7dc4c3b40.png)



* Review the firewall setup information and click "CREATE".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e41650c49acf7f880fe91496ec748ff9.png)




* On the “Basic Virtual Firewall Management” page,  you will see the list of firewalls that you just created. The state of the newly created firewall is "INACTIVE".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2023dadb649e9c43875568971df34b1b.png)




### Creating firewall rules

* Enter "Rules Management" page and click "+CREATE".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_776a2ba69a93db2a2ca70b489d3cc92c.png)


* On the Create Rule page, enter the firewall rule setup information. Click "NEXT: REVIEW & CREATE>".
    * Name: Enter the name of the firewall rule.
    * Action: Through drop-down list, select the action that you need for the firewall, such as allow, deny, or reject.
    * Protocol: Choose from tcp, icmp, and udp.
    * Terminal IP: Enter the IP address of the terminal host computer.
    * Terminal port: Enter the terminal port.
    * Source IP: Enter the IP address of the source.
    * Source port: Enter the source port.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c3416c665f7dc45cde2f3af2bbe5838b.png)


* Review the firewall rule information and click "CREATE" to complete.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_348d5813833a5cafab4d033455572717.png)



* The firewall rule you just built will show in the list on the "Rules Management" page. You may click the "CREATE" button to continue creating other filtering rules.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_828105df0c834e56d2cc17fa65a3bd76.png)


#### Managing Basic Virtual Firewall rules

* Click "Rules Management" on the left to enter the "Basic Virtual Firewall Rule Management" page. Click the item list to review the firewall rule details.
* Click "Edit" to enter the "rule edit " page where you may edit firewall rules.
* Click "Delete" to delete this rule.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_85608760c8e9993e5efc89a7d5ab5aae.png)



#### Editing rules

* Continue from the diagram above. Enter the "rule edit" page to edit firewall rules setup. Click "NEXT: REVIEW & CREATE".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a32e7bf8f01a002c2579e766461e533d.png)



* Review the firewall rules setup. Click "CREATE" to complete.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3a06435bd4830c1e4b4260ab6649d186.png)


### Select firewall rules and associated networks

* Click “Virtual Host Firewall” to return to the “Virtual Host Firewall Management” page.
* Click the list item to setup the rules and associated network for this firewall.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eac402fe47110a34feb91fe5527e540d.png)


* Enter the "Basic Virtual Firewall Details" page and click the "Edit Rule" button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e02ee9f9be161da91251c62fd7b77f1e.png)

* In the "Edit Rules" window, click "select firewall rule" to select the firewall rule from the values in the drop-down list.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e7d456738a7dee44b8f1f8b85598ece3.png)


* After selecting the firewall rule you wish to add, click the "＋" button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4365f9b8e1619580247697f9477503b2.png)


* After the firewall rule you selected has been added, it will be moved to the list below.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fdd40067a85b4ab43d987e1cb661397a.png)


* After multiple firewall rules have been added, you may adjust the order in which they are presented in the list or you may delete any rule. when you are finished, click "OK".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d47dfda21488ebf6c1ca8d2077843258.png)


* The newly added item will show up on the right side of the firewall rule, then click "Edit Association Network".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2ecb64dd2b4d65ce5f59b03b1e91f81d.png)


* In the "Edit Association Network" window, click the name of the virtual networ in the "Associated Network" drop-down menu and click the "+" button.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d44f32ea48503e72c23e5c735b3f26a7.png)



* After selecting the association network, click "OK".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b96051798c95841d492844cbbc4ea5f9.png)



* At this time the state of the firewall becomes "PENDING_UPDATE". When it becomes "ACTIVE" after a few minutes, it means that the firewall has taken effect.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e53cbf152c82483ce42142ca2bd01bbf.png)



## Security Group

This function provides the capabilities of network security. A user may control network security through rules of network security.

:::info
Note: Network security management function is designed to setup security rules for each VM. Therefore, you must have built at least one VM to setup security rules.
:::

### Building Security Group rules

* On the service list, select “Security Group” to enter the “Security Group management (VCS instance list)” page. Select an instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6aeba04f9f3078c1c5fc266b0f583336.png)

 
* The Security Group rule management page shows current Security Group rules. Click " + Build” to begin establishing new rules.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_39c807e18284e6a6c73ed825aac098f2.png)


* Enter the “Building network security rules” page, fill out the security rules, and click “Next: Review+Build”.
Direction: Select "ingress" import or"egress" export.
Port range (minimum): Establish the beginning port to which this rule applies.
Port range (maximum): Establish the ending port to which this rule applies.
Protocol: Select the desired protocol, such as tcp, udp, icm, etc.
CIDR: the CIRD segment to which this VM security rule applies.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fd459b37f042c9f1c7bc8e18f828f555.png)



* Review network security rule setup and project credits. When correct, click “Build”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d7933df4743d9635d41325c2afdab177.png)



* When built, the new network security rule can be added to the network security rule list.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6a1ff0626d8316054d4acf3692bbe498.png)


### Deleting network security rules
Enter the network security rule management page. On the list of network security rules select the rule that you wish to delete. Click!![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a3dd4a5c6cbb4ddad2e37b20996f08d8.png)<span> menu button and click “Delete”.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3bc7fb757b8937e432df4f371d8358a0.png)


## Advanced Security Service

TWCC Network Basic and Advanced Protection provides the new generation of firewall and threat protection features of the Palo Alto Networks VM Series to protect your application and data security on TWCC.

:::info
Note: This feature requires tenant administrator privileges to use.
:::


### Establishing basic and advanced protection

 * Go to the "Basic and Advanced Protection" service. On the "Basic and Advanced Protection Management" page, click "+Create".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_095d1e79a497aa585f130c0b59dc7c1d.png)

 
* Click on the type of protection you want to create

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2f9fb2788f1ba4bd8957d0b4efc2162f.png)


* Enter basic information such as name, description, selection template (mail, web, ssh, rdp), image file and hardware settings, then click "Next: Network>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_538fa41cd04c169d4ec59bac9176dd4d.png)



* Select the private network and trust network, then click "Next: Password>".

:::info
:book: See: [virtual network] (https://www.twcc.ai/doc?page=virtual_network)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_65cb8a5e4c915eeaf8b13eb065415bc3.png)



* Set the login password, then click "Next: Review + Create>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1e051b3d52c498285091aa4c234282ca.png)



* View the basic and advanced protection settings and estimated usage limits of the network. Click "Create" to complete. After a few minutes, the status becomes Ready and you can start using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_32ad57f6bdcc45723ddf0924690c66a7.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2bad2d58cd59dcaf9370c538935c9e42.png)




### Viewing basic and advanced protection details

* On the "Basic and Advanced Protection Management" page, click on the list of items you want to view to view the details. Click the button above to start, stop, delete, and rearrange the project.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_df5a619d395293b4468d154771a202e1.png)




### Login to the web management interface

* On the Basic and Advanced Protection details page (above), click the WEB management interface link to log in to the web management interface. The account number is admin. The password is the password set when establishing basic and advanced protection for the network.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_89be1c00327863129b8ecbe51508a19e.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6b94f3ff94425e994e486cfa17cb8068.png)


## Web Application Firewall

Web application firewall service, using F5 Networks Web Application Firewall (WAF) firewall software, provides an application-wide security protection mechanism.

:::info
Note: This feature requires tenant administrator privileges to use.
:::

### Build a web application firewall

 * Go to the "Web Application Firewall" service. On the "Web Application Firewall Management" page, click "+Create".


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a5085f80564dc8898f1b216593b0d34.png)



* Enter basic information such as name, description, image file and hardware settings, then click "Next: Network>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_658ede2e5b088a7fa6dae6aef2fa998f.png)



* Select the virtual network you want to use, then click "Next: Password>".
:::info
:book: Refer to: [virtual network](https://www.twcc.ai/doc?page=virtual_network)
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bdcf37fc211e811c242a3523841a1f8e.png)


* Set the login password, then click "Next: Review + Create>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ddd44a3ec184ecefd5b79f1f02fc01f9.png)


* View the settings and estimated usage of the Web application firewall. Click "Create" to complete. After a few minutes, the status becomes Ready and you can start using it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6ac5093d9a49d96bbea86059ab60b4e4.png)


### View Web Application Firewall Details

* On the "Web Application Firewall Management" page, click on the list of items you want to view to view the details. Click the button above to start, stop, delete, and refresh this web application firewall.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_453a9fc4722bf891c95f0019892bcf3c.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2bb01173507c5b451258898b158a776c.png)


### Login to the web management interface

* On the Web application firewall details page (above), click the WEB management interface link to log in to the web management interface, the account is admin, and the password is the password you set when you set up the web application firewall.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_12186c7bccf46c59cb894539c0cdf978.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_258d6b6087f04040db83ef5d1bd05634.png)