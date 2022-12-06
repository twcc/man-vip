---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-prerequisite-for-connection-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-prerequisite-for-connection-en'
---

# Prerequisites
This guide shows you how to connect to Taiwania 2 (HPC CLI) **Login node** and **Data transfer node**.

 
**You can perform the following tasks on the Login node**:
1. Submit or manage jobs
2. Access to files in Hyper File System (HFS) with full control
3. Compile HPC related application
4. Run debugger for code improvement

**You can perform the following tasks on the Data transfer node**:
1. Transfer data in and out of Hyper File System (HFS)
2. Perform data transfer using SCP/SFTP protocol.

---

Before login to Taiwania 2 (HPC CLI) environment, you need to prepare the data and tools below.

## Sign up for an TWCC account
Please go to [TWCC](https://www.twcc.ai/) portal to sign up and set your TWCC user account and password, and also supercomputer account and supercomputer password. Refer to [Sign up for an TWCC account](https://www.twcc.ai/doc?page=register_account) for more information. 

:::info
TWCC portal and TWCC CLI operation will be different according to the users and it's permissions. On the other hand, **Taiwania 2 (HPC CLI) service doesn't have difference between users**. Refer to [<ins>Comparison betwen users' permissions</ins>](https://man.twcc.ai/@twccdocs/role-main-en) for more information.
:::

## Supercomputer account, supercomputer password and OPT authentication code

Login to Taiwania 2 (HPC CLI) environment required supercomputer account, supercomputer password and OPT authentication code.

- Account: **Supercomputer account** when setting during the register
- Password: **Supercomputer password**, **OPT authentication code**


:::info
1. If forgot **Supercomputer account** or **supercomputer password**, refer to [<ins>Inquire supercomputer account, reset password and obtain OTP authentication code</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh) for more information.
2. **OTP (One Time Password) authentication code**
    - OPT authentication code is a one-time password, also known as a dynamic password, which has a high security level. Update every 30 seconds to ensure user access security and reached 2FA (Two-Factor Authentication).
    - Refer to [<ins>Inquire supercomputer account, reset password and obtain OTP authentication code</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E5%8F%96%E5%BE%97-OTP-%E8%AA%8D%E8%AD%89%E7%A2%BC) for method of inquire.
:::

## Connection

SSH connection are required to enter Taiwania 2 (HPC CLI), the recommended tools are belows:

- Windows user may download and install SSH client software (e.g., [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)、[MobaXterm](https://mobaxterm.mobatek.net/download-home-edition.html)、[VScode](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks)... and other).
- macOS user may using built-in terminal to connect.