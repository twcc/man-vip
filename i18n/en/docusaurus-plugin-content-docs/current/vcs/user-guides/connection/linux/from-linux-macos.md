---
sidebar_position: 2
title: 'From Linux / macOS'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-linux-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-to-linux-from-linux-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linux instances from Linux / macOS

Having completed the [prerequisites and obtained connection information](https://man.twcc.vip/en/docs/vcs/user-guides/connection/prerequisites), you can use one of the following two methods to connect to the Linux instance from Linux/macOS.

:::info
Please note that you can connect to the instance only when its state is **`Ready`**.
:::

<!-- 1 start -->

<details class="docspoiler">

<summary><b>1. Built-in command line (Terminal)</b></summary>

Open terminal on your local computer, enter the commands sequentially according to [<ins>obtaining connection information</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/connection/prerequisites/#step-2-obtain-connection-information) to change the permission of the key pair and connect to the VCS instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab7f8e76a452f95ea2f1e004e10f4e89.png)

</details>

<!-- Space -->

<div style={{'height':'8px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>2. Third-party software: VScode</b></summary>

If you are already using VScode to develop your program, you may directly using it to connect to your VCS instance. VScode supports a variety of platforms and has many plug-in software packages that are easy to install and suitable for novices. For complete instructions, please refer to the [<ins>Official documentation</ins>](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks).

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

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_237f5babfff7d1265879f96d3262a60f.png)

- After opening the config file, copy and paste the following format, and fill in the information of a VCS instance; if there are multiple instances, you can copy and paste several for modification. Save the file when finished.

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

- It will show the instance information that have been created, click on it to start the connection.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ab2ee3bcc20dfba930e9666ea38e4911.png)

- Then select **Linux**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_03d9ef5fc7818f3893301eced215414f.png)

- Select **Continue**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7647f858a45535cdeeb41552fd27d52f.png)

- When the connection is successful, the **`SSH: <Host Name>`** will appear in the lower left corner of the window.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_90ad691923b321838ea46f8e0304719c.png)

- Then open **Terminal** > **New Terminal** to use the VCS instance!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_719594c2f99eeca61a261800d4e0c511.png)

</details>

<br/>

:::info
For urgent debugging/system maintenance, it is recommended to [<ins>connect via Console</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/management-and-monitoring/console) to speed up the workflow.
:::

:::caution
After connecting to the Linux instance:
- If you have attached the data disk in the file `/etc/fstab` (e.g., `/dev/vdb /mnt ext4 defaults`), we suggest you add `nofail` after the configuration (for example: ` /dev/vdb /mnt ext4 defaults,nofail,x-systemd.device-timeout=1m`) to make sure that your instances can start and connect normally.
- You will not be able to connect to VCS instance once the settings of the network interface card are modified. Therefore, we strongly discourage you from changing the NIC settings. Please beware when operating and deploying.
:::