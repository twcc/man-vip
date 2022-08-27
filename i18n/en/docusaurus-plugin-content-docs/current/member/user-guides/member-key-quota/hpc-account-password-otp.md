---
sidebar_position: 5
sync_original_production: 'https://man.twcc.ai/@twsdocs/guide-service-hostname-pwd-otp-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twsdocs/guide-service-hostname-pwd-otp-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Inquire supercomputer account, reset password and obtain OTP authentication code

:::caution
If your [<ins>Member Center<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) not applicable for the footage or process below, please refer to this <i class="fa fa-sign-out" aria-hidden="true"></i> [<ins>link</ins>](https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-signup-zh) for manual instructions.
:::

**Supercomputer account** and **supercomputer password** are necessary information for signing in to the container and Taiwania 2 (HPC CLI) environment via SSH.
If you forget your account and password, please refer to the following instructions to inquire or modify them.

**OTP (One Time Password) authentication code** is necessary information for signing in to Taiwania 2 (HPC CLI) environment. It is a one-time password, also known as a dynamic password, which is highly secure and updated every 30 seconds to ensure user access security. Please refer to the following instructions for the query methods.

<br/>


## Inquire supercomputer account

After signing in to [TWS Member Center](https://member.twcc.ai/), please click "**會員中心 (Member Center)**" > "**會員資訊 (Member Profile)**" > "**主機帳號資訊 (System Account)**".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c03feefeff29f646e16ca59240906392.png)


Now you can inquire your supercomputer account.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_06188cb991914077678b79f3b1d56653.png)

<br/>


## Reset supercomputer password

If you forget your supercomputer password, the system does not record the user's supercomputer password, so there is no query function, please change your supercomputer password directly and save it properly.

Please go to "**主機帳號資訊 (System Account)**" page as mentioned in [Inquire supercomputer account](#Inquire-supercomputer-account), then click "**修改主機密碼 (Modify supercomputer password)**" and follow the prompts to complete the password change.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2252ad16c81cc49a6c3c393802b70a66.png)

<br/>


:::info
1. The length of the password must be at least 12 characters, and not too simple.
2. The password can be the combination of the 4 types mentioned below, such as numbers, English letters (upper and lower case are counted as 2 types), and special characters. Password must contain at least 3 types.
3. After you modify and receive the SMS verification code, please complete the verification process within 10 minutes. After 10 minutes, the confirmation code will become invalid. If you do not receive the SMS, please click "**重送簡訊 (Resend SMS)**". If you still cannot receive it, you need to confirm whether you have ever applied to the telecommunications company to set the rejection of corporate newsletters, and then please contact the telecommunications company to change the settings.
4. If there are 5 consecutive login errors on a single node, the supercomputer account will be temporarily locked for 3 minutes. Please log in to another node or wait for 3 minutes before trying again.
:::


:::caution
The maximum validity period of member and supercomputer password is 180 days.<br/>
When the password is about to expire (seven days before the expiration date, three days before the expiration date, and the same day), a password reminder notification will be sent, please take the time to sign in [<ins>Member Center<i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) and modify it.
:::

<br/>


## Obtain OTP authentication code

There are several ways to obtain the OTP authentication code. The following provides OTP obtaining methods via **[TWS Member Center](https://member.twcc.ai/)**, **PCs**, **mobile phones and tablets**.

<br/>


### 1. Obtain via [<ins>TWS Member Center</ins>](https://member.twcc.ai/)

**Step 1.** Please go to "**主機帳號資訊 (System Account)**" page as mentioned in [Inquire supercomputer account]

**Step 2.** Click "**顯示 (Show)**" to obtain OTP authentication code

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3259b104075b152f7464d9e924654e52.png)

<br/>


### 2. Obtain on PCs

<details>

<summary><b>A. Browser extension (take Google Chrome as an example)</b></summary>

**Step 1.** Go to the [<ins>link</ins>](https://github.com/Authenticator-Extension/Authenticator), scroll down,  click on the Authenticator extension page and add the feature to Chrome.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7079b98f2fed3eca9041aa2f09473f85.png)

<br/>

**Step 2.** Open "**Authenticator**", click edit in the upper right corner

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6932ad85d2dd16cfe17f5e8847d072e4.png)

<br/>

**Step 3.** Click "**掃描 QR code (Scan QR code)**"

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

**Step 2.** After unzipping, open, click **Add**, click Authenticator
  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_66a64543d039a16610e73ec3de2b91c3.png)

<br/>

**Step 3.** Create Account
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b7240fae8a132dfad9cec0fe0cdb1ab4.png)

<br/>

**Step 4.** Right Click **Auto Refresh**, let OTP refresh automatically and it's done!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b3555bbc286592bcbe1e0ea2cdfeb636.png)


</details>

<br/>

:::info
For other operating system please refer to [<ins>this page</ins>](https://alternativeto.net/software/winauth/) to download the apps.
:::


### 3. Obtain on mobile phones and tablets


**Step 1.** Go to Google Play Store/App Store, search and download/install "**Microsoft Authenticator**" application
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7915a7936bc890adf958abc05ca1b06f.jpg)

<br/>

**Step 2.** After installation, open the application and scan the QR code in [TWS Member Center](https://member.twcc.ai/) (above "**點我複製 OTP 金鑰 Click to Copy OTP Key**"), the app will show the OTP authentication code.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_41e14e47dda849f93df3d4af53766d94.png)


<br/>

:::info
Other than Microsoft Authenticator, other applications can refer to [<ins>this page</ins>](https://alternativeto.net/software/microsoft-authenticator/).
:::


:::info
**Contact us:**
- Business Contact | <ins><a href = "mailto: sales@twsc.io">sales@twsc.io</a></ins>
- Customer Service and Support | <ins><a href = "mailto: sales@twsc.io">service@twsc.io</a></ins>
:::