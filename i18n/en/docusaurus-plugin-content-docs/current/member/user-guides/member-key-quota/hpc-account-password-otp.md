---
sidebar_position: 5
sync_original_production: 'https://man.twcc.ai/@twsdocs/guide-service-hostname-pwd-otp-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twsdocs/guide-service-hostname-pwd-otp-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Inquire supercomputer account, reset password and obtain OTP authentication code

:::caution
==**Need to update:exclamation:**==<br/>
If your [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) not applicable for the footage or process below, please refer to this <i class="fa fa-sign-out" aria-hidden="true"></i> [<ins>link</ins>](https://man.twcc.ai/@twsdocs/doc-mber-pjct-blng-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twsdocs%2Fguide-service-signup-zh) for manual instructions.
:::

**Supercomputer account** and **supercomputer password** is the necessary information for logging in to the container and Taiwania 2 (HPC CLI) environment via SSH.
If you forget your account and password, please refer to the following instructions for inquiries or changes.

**OTP (One Time Password) authentication code** is the necessary information for logging into the Taiwania 2 (HPC CLI) environment. It is a one-time password, also known as a dynamic password, which has a high security level. Update every 30 seconds to ensure user access security. Please refer to the following instructions for query methods.

<br/>

## Inquire supercomputer account
Please sign in to TWCC and click "**Account & Project**" under your username.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ce4eea0460269243de8d62dba99100e.png)

After being guided to the Member Center, please click "**Member Center**" > "**Member Profile**" > "**System Account**" 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b5dfe6d78538eda8a2ccd6af0e494bde.png)



to inquire your supercomputer account
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2c92efe98c0f8f3e12adb2148c455aa7.png)

<br/>


## Reset supercomputer password
If you forget your supercomputer password, the system does not record the user's supercomputer password, so the query function is not provided. Please modify your supercomputer password directly and save the password properly:
As per mentiond at [Inquire supercomputer account](#Inquire-supercomputer-account), please go to "**System Account**" page and click "**Modify supercomputer password**" and follow the prompts to complete the password change.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b69b64d65a84168e330853ca62f7c6b6.png)

<br/>

:::info
1. The supercomputer password must be at least 12 characters long, and it should not be too simple.
2. The password can be the combination of the 4 types mentioned below, such as numbers, English letters (upper and lower case are counted as 2 types), and special characters. Password must contain at least 3 types.
3. After you modify and receive the SMS verification code, please complete the verification process within 10 minutes. After 10 minutes, the confirmation code will become invalid. If you do not receive the SMS, please click "**Resend SMS**". If you still cannot receive it, you need to confirm whether you have ever applied to the telecommunications company to set the rejection of corporate newsletters, and then please contact the telecommunications company to change the settings.
4. If there are 5 consecutive login errors for a single node, the supercomputer account will be temporarily locked for 3 minutes. Please change the login to another node or wait three minutes before trying to sign in again.
:::


:::caution
The maximum validity period of TWCC member and supercomputer password is 180 days.
When the password is about to expire (seven days before the date, three days before the date, the same day), a password reminder notification will be sent, please take the time to sign in [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) and modify it.==**Need to update:exclamation:**==
:::

<br/>


## Obtain OTP authentication code
There are many ways to obtain an OTP authentication code, such as **Member Center**, **PC**, **mobile phones and tablets**.

### 1.  Obtain via [Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh) ==**Need to update:exclamation:**==

**Step 1.** As per mentiond at [Inquire supercomputer account](#Inquire-supercomputer-account), please go to "**System Account**" page.

**Step 2.** Click "**Show**" to obtain OTP authentication code
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_29d8156ac34aba89eca4b6d2e4b45921.png)


### 2. Obtain on PC

<details>

<summary><b>A. Browser extension (take Google Chrome as an example)</b></summary>

**Step 1.** Go to the [<ins>link</ins>](https://github.com/Authenticator-Extension/Authenticator)  and click on the Authenticator extension page below and add the feature to Chrome.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7079b98f2fed3eca9041aa2f09473f85.png)

<br/>

**Step 2.** Open "**Authenticator**", click edit in the upper right corner

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6932ad85d2dd16cfe17f5e8847d072e4.png)

<br/>

**Step 3.** Click Scan QR ode
==**Need to update:exclamation:**==
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ecafdb84ebc4f074c8fa91af5cd3b947.png)

<br/>

**Step 4.** Use the dotted line to frame the OTP QR code of iService
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8cb35de57dfbeb66156aa0b3e2999ad6.png)

<br/>

**Step 5.** After the addition is successful, click on the extension to obtain the OTP authentication code

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e54be46dfbffdde94df2c4a10b7ed775.png)


</details>


<details>

<summary><b>B. WinAuth (Windows user)</b></summary>

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


**Step 1.** Go to Google Play Store/App Store search and download, install "**Microsoft Authenticator**" application
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7915a7936bc890adf958abc05ca1b06f.jpg)

<br/>

**Step 2.** After installation, open the application and scan the bottom QR code of the"**Copy OTP key**" on [Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh), the app will shown the OTP authentication code.
==**Need to update:exclamation:**==  
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_41e14e47dda849f93df3d4af53766d94.png)


<br/>

:::info
Other than Microsoft Authenticator, other applications can refer to [<ins>this page</ins>](https://alternativeto.net/software/microsoft-authenticator/).
:::