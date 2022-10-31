---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-hfs-connect-to-data-transfer-node-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-hfs-connect-to-data-transfer-node-en'
---

# Connect to the data transfer node

You can use the following method to connect to the data transfer node using **Key** or **Supercomputer Password + OTP Authentication Code**.

After connecting to the data transfer node and entering HFS storage space, you can upload files to the space through SFTP protocol, or download the files from HFS to the your local machine.


:::info
TWCC also provides users with the `rsync` command to transfer large amount files with a good experience. However, since the system does not provide the logs of file transmission using `rsync`, it may not be able to be traced if there are information security concerns. If you agree to undertake the risk of use and authorize TWCC to enable the `rsync` function, please send your request to <ins><a href = "mailto: isupport@twcc.ai">isupport@twcc.ai</a></ins> .

:::


<!-- 1 start -->

<details class="docspoiler">

<summary><b>1. Connect using keys</b></summary>

<br/>

The following example demonstrates with Windows + [<ins>FileZilla</ins>](https://filezilla-project.org) (similar to macOS)

<b>Step 1. Connect to a compute service</b>

- Users of TWCC Interactive Container service can connect to the container through Jupyter Notebook or SSH
- Users of TWCC Scheduled Container, HPC Job, and Taiwania 2 (HPC CLI) can connect to the login node of Taiwania 2 (HPC CLI)

:::info
See the connection method:
- [<ins>Interactive Container</ins>](https://www.twcc.ai/doc?page=container&euqinu=true#%E9%80%A3%E7%B7%9A%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F)
- [<ins>Taiwania 2 (HPC CLI)</ins>](https://man.twcc.ai/s/B15nJXe-B#2-%E7%99%BB%E5%85%A5%E3%80%8C%E7%99%BB%E5%85%A5%E7%AF%80%E9%BB%9E%E3%80%8D)
:::

<b>Step 2. Save the SSH private key to the local machine</b>

- After logging in, enter the following command to read the SSH private key

```bash
cat ~/.ssh/id_dsa
```
- Take TWCC Interactive Container as an example: open Jupyter Notebook > Terminal.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_83c3e4d93f717d501cbfd619708186b2.png)


- Save the SSH private key to your local machine, copy all the red frame part, open notepad and paste it on (the beginning and ending information must be included).

:::info
macOS：TextEdit software is available
:::
   
```bash
-----BEGIN DSA PRIVATE KEY----- (This line also needs to be copied)
...
...
-----END DSA PRIVATE KEY----- (This line also needs to be copied)
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6928c1f27e4b7d521a9382e7bc635473.png)




- Save the notepad: the file location and file name are not limited, the extension name must be **`.ppk`**, and the file type should be changed to **`all files`**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ede7b45b32c02a5519e37ffd2240c5dc.png)


<b>Step 3. Log in to the data transfer node with FileZilla + key</b>


- Click the site manager in the upper left corner, add a new site in the lower left corner, and the menu as shown in the figure below will pop up
- For input and selection, refer to the figure below

```
Protocol: SFTP
Host: xdata1.twcc.ai
Logon Type: Key file
User: supercomputer account
Key file: directory of the key file
```
- Click **Connect** to login successfully

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9d5a58f6e3d4055fbf0526684adb8310.png)



</details>

<!-- Space -->

<div style={{height:8+'px'}}></div>

<!-- 2. start -->

<details class="docspoiler">

<summary><b>2. Connect using supercomputer password + OTP </b></summary>

<br/>

In addition to the above login method using the key, HFS can also login using **password + [OTP <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-zh#%E5%8F%96%E5%BE%97-OTP-%E8%AA%8D%E8%AD%89%E7%A2%BC)**. Please refer to the following instructions:
<div style={{height:8+'px'}}></div>

<b>Step 1. Download software that supports SFTP connection and 2-Step verification</b>


Please download and install software that supports SFTP connection and 2-Step verification (e.g., [Filezilla](https://filezilla-project.org/), [Cyberduck](https://cyberduck.io/download/), [WinSCP](https://winscp.net/eng/download.php), etc).
<div style={{height:8+'px'}}></div>

<b>Step 2. Connect to the data transfer node</b>

The following uses [<ins>Filezilla</ins>](https://filezilla-project.org/) as an example of operation. After opening the software:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b46464ae5d5b17d9b5f07c2cb29c0766.png)


1. Open the **Site Manager** on the upper left
2. Protocol: select **SFTP- SSH File Transfer Protocol**
3. Host: enter **xdata1.twcc.ai**
4. Logon type: select **Interactive**
5. User: enter your supercomputer account


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6af475d537006f37c20a1507621518cf.png)

6. Click **Transfer Settings**
7. To avoid the steps of re-entering the password and OTP every time you transfer files, check **Limit number of simultaneous connections** and set the maximum number of connections to **1**.

:::info
After checking, when multiple files are being transferred, only one file can be transferred at a time. If it is inconvenient for you, it is recommended to connect using the key.

:::

8. Click **Connect**.

<b>Step 3. Enter your supercomputer password and [OTP <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-en#%E5%8F%96%E5%BE%97-OTP-%E8%AA%8D%E8%AD%89%E7%A2%BC) </b>


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3f6b415f290b3987e835b219c3c0d173.png)



9. Enter your supercomputer password
10. Click **Connect**


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_41aa3b2d77c946b5025a66710b6d1ae0.png)


11. Enter **OTP**
12. Click **Connect**


:::info
1. [<ins>Forget supercomputer account?</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-en#%E9%87%8D%E7%BD%AE%E4%B8%BB%E6%A9%9F%E5%AF%86%E7%A2%BC)
2. [<ins>Forget password?</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-en#%E9%87%8D%E7%BD%AE%E4%B8%BB%E6%A9%9F%E5%AF%86%E7%A2%BC)
3. [<ins>How to obtain OTP?</ins>](https://man.twcc.ai/@twccdocs/guide-service-hostname-pwd-otp-en#%E5%8F%96%E5%BE%97-OTP-%E8%AA%8D%E8%AD%89%E7%A2%BC)
:::


</details>

<br/>

- After the connection is successful, the **remote site** on the right is the data in the HFS space, and the **local site** on the left is the data of your local machine.
- The default directory is the user's /home directory, and the data under the /home directory is displayed in the panel below.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a58a52cfa859a15f09f763dc875ecc68.png)

<br/>