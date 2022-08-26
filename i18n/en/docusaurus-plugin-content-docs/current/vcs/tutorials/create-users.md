---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-create-usr-linux-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-create-usr-linux-en' 
---

# Connect to Linux instances using SSH with password

In addition to using the **key pair** as a credential for connecting to Linux instances using SSH, this document will show you how to **use the account password to connect to the VCS Linux instance using SSH**. *This method help preventing cannot connect to instances when loss of the key pair or the damage of the key pair, and is suitable for multiple users sharing instances.*

<br/>


### Step 1. Add a user with password

- Use key pair to [connect to your VCS instance](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-en).
- Execute the following command to add a user account (You can also add multiple user accounts as needed), and then enter a password and related personal information.

```bash 
sudo adduser <USER_ID>
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5c07b26965922b473cc5ea6d8adda121.png)

<br/>


### Step 2. Enable password authentication

- Execute the following command to enable password authentication in sshd

```bash
sudo sed -i 's/PasswordAuthentication\ no/PasswordAuthentication\ yes/g' /etc/ssh/sshd_config
```

<br/>


### Step 3. Restart the sshd service

- Execute the following command to restart the sshd service

```bash
sudo systemctl restart sshd
```

<br/>


### Step 4. Check if you can connect to the instance with the account and password

- Use MobaXterm as the connection tool, click **SSH**> enter *Remote host IP*> enter the user account in *Specify username*> click **OK**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6e8b4c94c4b6537e5c57d23062335baa.png)

- And then enter the password in the following screen. Login successful!

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9711b273491092fd4016073a2d89be75.png)