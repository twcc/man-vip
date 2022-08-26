---
sidebar_position: 2
title: 'From Linux / macOS'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-linux-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-to-linux-from-linux-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linux instances from Linux / macOS

Having completed the [prerequisites and obtain connection information](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en), you can use one of the following two methods to connect to the Linux instance from Linux/macOS.

:::info
Please note that you can connect to the instance only if its state is **`Ready`**.
:::


<!-- 1 start -->

<details class="docspoiler">

<summary><b>1. Built-in command line (Terminal)</b></summary>

Open terminal on your local computer, enter the commands sequentially according to the [<ins>obtained connection information</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en) to change the permission of the key pair and connect to the VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab7f8e76a452f95ea2f1e004e10f4e89.png)

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>2. Third-party software: VScode</b></summary>

If you already use VScode for application development, you can also directly use this software to connect to your VCS instance. VScode supports a variety of platforms, and provides many extensions that are easy to install and use. The following steps are performed in Windows, and the steps are similar in Linux or macOS. For more detailed instructions, see [<ins>VScode instructions</ins>](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks).

<br/>

**Step 1. Download and install VScode**

Go to [VScode](https://code.visualstudio.com/Download) to download and install VScode, and then open it.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_010a76dabe0d66c94562e776fe3b3a6a.png)

<br/>

**Step 2. Install SSH extension**

Click **Extensions** > enter *remote ssh* in the search bar > select **Remote- SSH** and click **Install**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38c0c0011b900d9a5547a5f4487f4fce.png)

<br/>

**Step 3. Build configuration file**

- After the installation, click the icon in the lower left corner of VScode to open the remote connection list.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecaaf1c1f4a790161660b2a45020b607.png)

- Click **Remote-SSH: Open Configuration File**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2efbf5090bc128487b714ffe122ba037.png)

- Click **C:\Users\User\.ssh\config** to build connection configuration file.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9e954c2165abc59b5be91f8d314112c.png)

- Move the key pair pem file to `~/.ssh/` directory.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_237f5babfff7d1265879f96d3262a60f.png)

- Open the configuration file, then copy and paste several formats to change at once, and fill in [<ins>VCS instance information</ins>](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en); If you have multiple instances, you can also copy and paste several changes at once. Remember to save the file after modifying.

```bash
Host <INSTANCE_NAME>           #enter the name of VCS instance
    HostName <PUBLIC_IP>       #enter public IP
    User <IMAGE_TYPE>          #enter ubuntu or centos
    IdentityFile ~/.ssh/<.pem> #enter the name of the key pair .pem file
```


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_871749523146661c11306b59bea27ce0.png)



<br/>

**Step 4. Connect to the VCS instance**

- Click the icon in the lower left corner of VScode again > select **Remote-SSH: Connect to Host...** 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ce4b6b932674950fe3732f35fd2627a3.png)

- Select one of the configured instances to start the connection.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab2ee3bcc20dfba930e9666ea38e4911.png)

- Then click **Linux**.  

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_03d9ef5fc7818f3893301eced215414f.png)

- Click **Continue**. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7647f858a45535cdeeb41552fd27d52f.png)

- After the connection is created, **`SSH: <Host Name>`** will be shown in the lower left corner of the VScode.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_90ad691923b321838ea46f8e0304719c.png)

- Next, open **Terminal** > **New Terminal** then you are able to start operating your VCS instance!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_719594c2f99eeca61a261800d4e0c511.png)
</details>

<br/>

:::caution

After connecting to the Linux instance:

- If you have configured auto mount data disks to your instance in the file `/etc/fstab` (e.g., `/dev/vdb /mnt ext4 defaults`), we suggest you add `nofail` after the configuration (e.g., `/dev/vdb /mnt ext4 defaults,nofail,x-systemd.device-timeout=1m`) to make sure that your instances can start and connect normally.

- You cannot connect to VCS instance once the settings of the network interface card are modified. Therefore, we strongly recommend that you do not change the network interface card settings. Please beware when operating and deploying.
:::