---
sidebar_position: 5
sidebar_label: 'System account and password/OTP code'
slug: '/user-guides/tws-member-center/system-account-password-otp'
sync_original_production: 'https://man.twcc.ai/@twsdocs/guide-service-hostname-pwd-otp-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twsdocs/guide-service-hostname-pwd-otp-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find system account, reset password and obtain OTP code

TWCC **System account** and **system password** are necessary for connecting to containers and Taiwania 2 (HPC CLI) environment via SSH.
If you forget your account and password, please follow the instructions to find or reset them.

**OTP (One Time Password) authentication code** is necessary for signing in to Taiwania 2 (HPC CLI) environment. It is a one-time password, also known as a dynamic password, which is highly secure and updated every 30 seconds to ensure user access security. Please refer to the following instructions for receiving OTP code.

<br/>


## System account

If you forget your system account, follow the steps below to find it:

Sign into [TWS Member Center](https://tws.twcc.ai/), click **Member Center**, **Member Information**, and click **Unix Account Information**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9b57ca5175c24a5b249daa46c6e4f421.png)


Then you can find your system account.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ee2f13997eef235b0cabaee923de554.png)


<br/>


## Reset system password

We do not keep users' system password. If you forget your system password, please reset it and save it properly.

Please go to **Unix Account Information** page as mentioned in [System account](#Supercomputer-account), then click **Modify system password** and follow the prompts to complete the password reset.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_15f528563980870c43418023672d55f3.png)


<br/>

:::info
1. The length of the password must be at least 12 characters, and not too simple.
2. The password can be the combination of the 4 types mentioned below, such as numbers, English letters (upper and lower case are counted as 2 types), and special characters. Password must contain at least 3 types.
3. After you modify and receive the SMS verification code, please complete the verification process within 10 minutes. After 10 minutes, the confirmation code will become invalid. If you do not receive the SMS, please click **Resend SMS**. If you still cannot receive it, you need to confirm whether you have ever applied to the telecommunications company to set the rejection of corporate newsletters, and then please contact the telecommunications company to change the settings.
4. After 3 failed login attempts, your account will be temporarily locked for 3 minutes. Please login to other nodes or try again in 3 minutes.
:::


:::caution
The maximum validity period for member center and system passwords is 180 days.<br/>
When the password is about to expire (seven days before the expiration date, three days before the expiration date, and the expiration day), a password reminder notification will be sent. Please sign in to [<ins>TWS Member Center</ins>](https://tws.twcc.ai/) and modify it.
:::

<br/>


## Obtain OTP authentication code

There are several ways to obtain the OTP authentication code. The following provides OTP obtaining methods via **[TWS Member Center](https://tws.twcc.ai/)**, **PCs**, **mobile phones and tablets**.

<br/>


### 1. Obtain via [<ins>TWS Member Center</ins>](https://tws.twcc.ai/)

**Step 1.** Please go to **Unix Account Information** page as mentioned in [System account](#Supercomputer-account).

**Step 2.** Click **Show**, then you can see the OTP authentication code.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_042103d73e5da8edf0b0ef15ea8a00a1.png)

<br/>


### 2. Obtain on PCs

<details>

<summary><b>A. Browser extension (take Google Chrome as an example)</b></summary>

**Step 1.** Go to the [<ins>link</ins>](https://github.com/Authenticator-Extension/Authenticator), scroll down, click on the Authenticator extension page and add the feature to Chrome.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7079b98f2fed3eca9041aa2f09473f85.png)

<br/>

**Step 2.** Open **Authenticator**, click edit in the upper right corner

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6932ad85d2dd16cfe17f5e8847d072e4.png)

<br/>

**Step 3.** Click **QR code**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecafdb84ebc4f074c8fa91af5cd3b947.png)

<br/>

**Step 4.** Use the dotted line to frame the OTP QR code of iService

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_38c2b7c98b378f12f1f7dcb522effd62.png)

<br/>

**Step 5.** After adding successfully, click on the extension to obtain the OTP authentication code

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e54be46dfbffdde94df2c4a10b7ed775.png)


</details>


<details>

<summary><b>B. WinAuth (Windows users)</b></summary>

**Step 1.** Download [WinAuth]( https://github.com/winauth/winauth )
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aff24c0f6f427c7c8e4c0cf3c9ccfaaa.png)

<br/>

**Step 2.** After unzipping, open the tool, click **Add**, and click **Authenticator**.
  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66a64543d039a16610e73ec3de2b91c3.png)

<br/>

**Step 3.** Create Account
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3ac7675b5f68eda41a3513e9481039a9.png)


<br/>

**Step 4.** Right Click **Auto Refresh**, let OTP refresh automatically and it's done!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b3555bbc286592bcbe1e0ea2cdfeb636.png)


</details>

<br/>

:::info
For other operating system please refer to [<ins>this page</ins>](https://alternativeto.net/software/winauth/) to download the apps.
:::


### 3. Obtain on mobiles and tablets


**Step 1.** Go to Google Play Store/App Store, search and download/install **Microsoft Authenticator**.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7915a7936bc890adf958abc05ca1b06f.jpg)

:::info
Refer to [<ins>this page</ins>](https://alternativeto.net/software/microsoft-authenticator/) for other tool options.
:::

<br/>

**Step 2.** After installation, open **Microsoft Authenticator** and scan the QR code in [TWS Member Center](https://tws.twcc.ai/), and then the app will show you the OTP authentication code.

<br/>