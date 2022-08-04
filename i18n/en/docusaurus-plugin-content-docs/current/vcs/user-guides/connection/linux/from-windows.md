---
sidebar_position: 1
title: '本機為 Windows'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to Linux instances from Windows


Having completed the [prerequisites and obtain connection information](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en), you can use one of the following 4 methods to connect to the Linux instance from Windows.


:::info
Please note that the instance must be in the **`Ready`** state before you can connect to it.
:::

<!-- 1 start -->

<details class="docspoiler">

<summary>

## 1. Built-in Command Prompt

</summary>

<br/>


On your local machine, open the Command Prompt and enter `ssh -V` to check if the SSH client is available. If yes, you will see the client's version. If not, for quickly install OpenSSH Client, or refer to other connection methods, see [<ins>Microsoft official document</ins>](https://docs.microsoft.com/zh-tw/windows-server/administration/openssh/openssh_install_firstuse#installing-openssh-from-the-settings-ui-on-windows-server-2019-or-windows-10-1809) for more information.

==**Link Need to update to english:exclamation:** 
Maybe this : https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse#installing-openssh-from-the-settings-ui-on-windows-server-2019-or-windows-10-1809==

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9242485b84ba91f9e8777e4bea275744.png)

<br/>

**Step 2. Change the permissions of key pair**
    
Follow the steps in [<ins>Prerequisites</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en) to obtain the connection information and enter commands in to change the key pair permissions.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_02120b912a3077ba14f49054f320b674.png)

<br/>

**Step 3. Connect to your VCS instance**

Enter the commands obtained by following the [<ins>Preparation</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en) to SSH into your instance.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_112f272ffc1d5fac6b569fd1c501af54.png)

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

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2 start -->

<details class="docspoiler">

<summary>

## 2. Third-party software: MobaXterm

</summary>

<br/>

MobaXterm's graphical user interface is intuitive and easy to use. The key pair can be used directly without conversion.

<br/>

**Step 1. Download MobaXterm**


Please download the [<ins>MobaXterm Home Edition (Portable edition)</ins>](https://mobaxterm.mobatek.net/download-home-edition.html), unzip it, and run **MobaXterm_Personal_[version]**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1f3324a847dcf480c383ceed1d7c56a4.png)

<br/>

**Step 2. Create a connection**

Click **Session** in the upper left corner.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14193d66d4e18c0a81402307bd08b841.png)
<br/>

Follow the diagram and steps to complete the settings and establish a connection:


1. Click **SSH**
2. Enter *public IP* in `Remote host`
3. Enter *ubuntu* or *centos* in `Specify username`
4. Click **Advanced SSH settings**
5. Check `Use private key`
6. Click on the folder and select your key pair `.pem` file
7. Click **OK** to establish the connection

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d4cc9231359e438890e83bb3b3d550e9.png)

Connection established!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6eb2f5ac0a37b94f360b5cc7e72b955d.png)
</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2 start -->

<details class="docspoiler">

<summary>

## 3. Third-party software: PuTTY

</summary>

<br/>
    
PuTTY does not support the key pair format `.pem`  , so please convert the `.pem` file to `.ppk`by using PuTTYgen.

<br/>

**Step 1. Download and install PuTTY**

Please download the [<ins>PuTTY</ins>](https://www.putty.org/) and complete the installation.

<br/>

**Step 2. Convert the key pair (`.pem`> `.ppk`)**

- Open **PuTTYgen**


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a06473c2b182bdc8ff67d09fdb621526.png)

    
- Click **Load** and select the key pair of the `.pem` file you have created and downloaded.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8a34b1c54db4309cad5d575e6974d198.png)




- Click **OK**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a46f9a2162f41c8dc33ffe1aefaebb06.png)


- Click **Save private key**, enter the file name, make sure the format is `.ppk`, and save your settings to complete the conversion.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dee36992482a38800d667001f9e9a3c2.png)


<br/>

**Step 3. Connect to the instance using PuTTY**

- Open **PuTTY**
       

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a0782c28ef264664f3e37c4dcc7f3fa.png)



- Click **Session** on the left, enter the Host Name (can be found by clicking the **Connect** on the configuration page) and Port (22)
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_db3cf7c5fbaec56d160a214ffb007c18.png)

- Then click **SSH** > **Auth** on the left, and click **Browse** to load the `.ppk` key pair.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d43ac73e0937640fe044829098d52cb3.png)


- Last, click **Open**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7b0f282732b28f1ebdd293a4f36c0216.png)


- You successfully connect to your instance when the window opens.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b26159d005ed6963cce089eb47979d6f.png)
</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2 start -->

<details class="docspoiler">

<summary>

## 4. Third-party software: VScode

</summary>

<br/>


If you are already using VScode to develop your program, you may directly using this software to connect to your VCS instance. VScode supports a variety of platforms, and there are many plug-in software packages available, easy to install, and quite suitable for novices. For complete instructions, please refer to [<ins>Official documentation</ins>](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks).

<br/>

**Step 1. Download and install VScode**

Please download [<ins>VScode</ins>](https://code.visualstudio.com/Download) and open the application.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_010a76dabe0d66c94562e776fe3b3a6a.png)

<br/>

**Step 2. Install SSH package**


Click **Extensions** > search for *remote ssh* > select **Remote- SSH** and click **Install**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38c0c0011b900d9a5547a5f4487f4fce.png)

<br/>

**Step 3. Create config file**

- After the installation is complete, click the icon in the lower left corner of the window to open the remote connection.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecaaf1c1f4a790161660b2a45020b607.png)

- Select **Remote-SSH: Open Configuration File**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2efbf5090bc128487b714ffe122ba037.png)

- Select **C:\Users\User\.ssh\config** to create a connection profile

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9e954c2165abc59b5be91f8d314112c.png)

- Please place the key pair pem file under the `~/.ssh/` folder
==**Need to update:exclamation:**==
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_237f5babfff7d1265879f96d3262a60f.png)

- After opening the config file, copy and paste the following format, and fill in the information of a VCS instances; if there are multiple instance, you can copy and paste several for modification. Save the file when you are ready.

```bash
Host <INSTANCE_NAME>            # Enter the name of the VCS instance
    HostName <PUBLIC_IP>        # Enter Public IP
    User <IMAGE_TYPE>           # Enter ubuntu or centos
    IdentityFile ~/.ssh/<.pem>  # Enter .pem key pair name
```


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_871749523146661c11306b59bea27ce0.png)

<br/>

**Step 4. Connect to VCS instance**

- In VScode, click the icon in the lower left corner > select **Remote-SSH: Connect to Host...**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ce4b6b932674950fe3732f35fd2627a3.png)

- It will show the information of the instance that have created, select to start the connection.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab2ee3bcc20dfba930e9666ea38e4911.png)

- Then select **Linux**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_03d9ef5fc7818f3893301eced215414f.png)

- Select **Continue** 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7647f858a45535cdeeb41552fd27d52f.png)

- When the connection is successful, the **`SSH: <Host Name>`** will appear in the lower left corner of the window.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_90ad691923b321838ea46f8e0304719c.png)

- Then open **Terminal** > **New Terminal** to use the VCS instance!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_719594c2f99eeca61a261800d4e0c511.png)

</details>

<br/>

:::caution

After connecting to the Linux instance:

- If you have attached the data disk in the file `/etc/fstab` (e.g., `/dev/vdb /mnt ext4 defaults`), we suggest you add `nofail` after the configuration (for example: ` /dev/vdb /mnt ext4 defaults,nofail,x-systemd.device-timeout=1m`) to make sure that your instances can start and connect normally.
- You cannot connect to VCS instance once the settings of the network interface card are modified. Therefore, we strongly recommend that you do not change the network interface card settings. Please beware when operating and deploying.
:::