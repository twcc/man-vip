---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-connect-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-connect-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to your container

When the container state is in **`Ready`**, you can start using it. You can connect to interactive containers via Jupyter Notebook (browser-based web development environment) or SSH. Please refer to the following instructions for the process steps.

<br/>

## Prerequisites
- Create [Interactive Containers](https://man.twcc.ai/@twccdocs/guide-ccs-create-en).
- To operate using the TWCC portal: once the container is created, click on the container you want to connect to on the **Interactive Container Management** page and enter the **Interactive Container Details** page.
- To operate using the TWCC CLI: please obtain the [Container's ID](https://man.twcc.ai/@twccdocs/guide-ccs-manage-zh#%E6%AA%A2%E8%A6%96%E8%B3%87%E8%A8%8A) first.

<br/>

## Connect to your container

You can connect to your container using Jupyter Notebook or SSH.

<br/>

### Jupyter Notebook

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- **Step 1.** Click **LAUNCH** on the right of Jupyter to open the built-in Jupyter Notebook operation webpage.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a61c058a0a3db394855196861227bf63.png)


- **Step 2.** Then click **New** > **Terminal**  to access the container environment. Then you can start AI computing in the container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- **Step 1.** Get the Jupyter Notebook URL of the container whose container ID is `1249374`.


```bash
twccli ls ccs -s 1249374 -gjpnb
```


- **Step 2.** Click **URL** (CLI) to open Jupyter Notebook..

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_619c5fad19ccb469b5368895935ae48b.png)


- **Step 3.** Click **New** > **Terminal** to access the container environment.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)

</TabItem>
</Tabs>

<br/>

### SSH

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- **Step 1.** Click the **Copy icon** on the right of SSH to copy the SSH command with supercomputer account and IP address included.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a64c20b74d97d7a2fdc4c2d2d2f05e2e.png)


- **Step 2.** Open Terminal in the local device, then enter the SSH command. The login account and password are the supercomputer account and password set in iService. You can also use other third-party software such as Putty to connect to your container.

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

C:\Users\Janice_Chiang><span style={{'background-color':'#fcf8e3', 'color': '#000', 'padding':'3.2px'}}>ssh twcctest1234@203.145.219.134 -p 58794</span><br/>
The authenticity of host '[203.145.219.134]:58794 ([203.145.219.134]:58794)' can't be established.<br/>
ECDSA key fingerprint is SHA256:ynH3b3yiP74bI6OD54FyA34OfiPT/7bAS07V/9gsceY.<br/>
Are you sure you want to continue connecting (yes/no)? <span style={{'background-color':'#fcf8e3', 'color': '#000', 'padding':'3.2px'}}>yes</span><br/>
Warning: Permanently added ‘[203.145.219.129]:51606’ (ED25519) to the list of known hosts.<br/>
janice2019@203.145.219.129’s password:<br/>
Welcome to Ubuntu 16.04.5 LTS (GNU/Linux 3.10.0-862.el7.x86_64 x86_64)<br/>

Documentation: https://help.ubuntu.com

Management: https://landscape.canonical.com

Support: https://ubuntu.com/advantage

Note: Read and write permission with superuser access in '/home/'<br/>
and ‘/work’ directories has been disabled in this environment.<br/>
Please avoid running such commands using ‘sudo’ under those directories directly.<br/>
If possible, use ‘sudo -s -H [command]’ instead of ‘sudo’ to avoid them.<br/>
init: Setting environment variables<br/>
twcctest1234@t36g6ptest03-ndg8f:~$

</div>

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- **Step 1.** Get the SSH command of the container whose container ID is **`1249374`**

```bash
twccli ls ccs -s 1249374 -gssh
```
- **Step 2.** Open Terminal in the local device, copy and paste the command > insert the **superaccount password** to launch the container.

</TabItem>
</Tabs>

- Exit the container
    - You can end your container connection by entering **`exit`** command to exit the SSH session.

---

:::info
[<ins>Forget your supercomputer password?</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-en#%E9%87%8D%E7%BD%AE%E4%B8%BB%E6%A9%9F%E5%AF%86%E7%A2%BC)
:::