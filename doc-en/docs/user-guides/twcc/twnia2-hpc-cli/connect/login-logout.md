---
sidebar_position: 2
title: 'Log in / log out'
sidebar_label: 'Log in / log out'
slug: '/user-guides/twcc/twnia2-hpc-cli/login-logout'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-login-and-logout-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-login-and-logout-zh'
---

# Log into the HPC system

After you finish all the prerequisites. Please select login tools according to your operation systems.

Windows users may download and install SSH client software (e.g., [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)); macOS user may uses built-in terminal to connect.

## Login from Windows
<!-- 1 start -->

<details class="docspoiler">

<summary><b>Third-party software: MobaXterm</b></summary>

### Step 1. Open MobaXterm

Please download the software from [<ins>MobaXterm Home Edition (Portable edition)</ins>](https://mobaxterm.mobatek.net/download-home-edition.html), unzip it, and run **MobaXterm_Personal_[version]**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1f3324a847dcf480c383ceed1d7c56a4.png)

### Step 2. Create a connection

Click **Session** in the upper left corner.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_14193d66d4e18c0a81402307bd08b841.png)
<br/>

Follow the diagram and steps to complete the settings and establish a connection:


1. Click **SSH**
2. Enter **ln01.twcc.ai** in `Remote host`
3. Enter *system account* in `Specify username`
4. Click **OK** to establish the connection


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_513dfb5381969fff75d9b6f192a0bfd2.png)

5. Enter *system password* and *OTP* seperately

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d3603c9cb64f35b513296bcb0f3100e4.png)

6. Login successful! You may refer to the system provided instruction manual and instruction for submitting jobs.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_22e1a06c5a1547c3a09f4247e3eca50e.png)

</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>Third-party software: PuTTY</b></summary>

<br/>

### Step 1. Open PuTTY

- After opened:
1. Enter **ln01.twcc.ai**
2. Click **Open**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d779ddfc20133ba056e34b80365299df.png)


### Step 2. Enter system account, system password and OTP

- After finished, the PuTTY terminal window pops out and enter the following information to login:
1. Enter system account
2. Enter system password
3. Enter OTP to finish login!


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2d5943b5d0078544b13320d5e304a14d.png)



</details>

## Login from Linux/macOS

<!-- 2. start -->

<details class="docspoiler">

<summary><b>Built-in Terminal</b></summary>

<br/>

### Step 1. Open built-in terminal and enter the login information

1. Enter command `ssh [system account]@ln01.twcc.ai`
2. Enter system password
3. Enter OTP to finish login!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04190c45d49a75d1dac66ee61b2a4855.png)

</details>

<br/>

:::info
See the connection method:
- [<ins>Interactive Container</ins>](/docs/user-guides/twcc/ccs-interactive-container)
- [<ins>Taiwania 2 (HPC CLI)</ins>](/user-guides/twcc/twnia2-hpc-cli/connect/login-logout.md)
:::


:::caution
If you fail to log in 3 times in a row, you will have to wait 15 minutes before you can login again.
:::



## Log out the HPC system

Enter the command below to log out Taiwania 2 (HPC CLI).

```bash
exit
```