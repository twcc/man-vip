---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-setup-oepnvpn-client-to-site-vpn-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-setup-oepnvpn-client-to-site-vpn-en'
---

# Set up an OpenVPN instance to establish a Client-to-Site VPN connection


In this tutorial, we will teach you how to install OpenVPN on TWCC VCS instances to establish a secure connection from the local computer to the jump server, and then from the jump server to other instances in the same virtual network.

:::info
Below we use the combination of a Linux (Ubuntu) VCS instance and a local Windows computer as an example.
:::

<br/>

## Step 1. Create VCS instances (Linux)

:::info
The following steps are only applicable to instances with Ubuntu 18.04 or above.
:::

Please refer to [Create VCS instances](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh) to create a Linux VCS instance with a public IP as a jump server to set up OpenVPN and connect to other unattached IP appliances.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a5beadf106baf7e64ce997391c27ab2a.png)

<br/>



## Step 2. Set up the security group of the jump server

Since OpenVPN uses UDP 1194 port for communication by default, please refer to [Security Group](https://man.twcc.ai/@twccdocs/guide-vcs-sg-zh) to add Ingress UPD 1194 security group rule to the jump server.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e4bfa535e2f1419f3644785ff8301fa8.png)

<br/>


## Step 3. Connect and install OpenVPN

- [Connect to Linux instances](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-zh) and use `wget` command to download the OpenVPN installation script.

```
wget https://git.io/vpn -O openvpn-ubuntu-install.sh
```

- Use the chmod command to set permissions so that the installation script can be run successfully.

```
chmod -v +x openvpn-ubuntu-install.sh
```

- Run the script to install OpenVPN.

```
sudo ./openvpn-ubuntu-install.sh
```

- You can press `Enter` to continue the dialog during installation.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bcc0348c5c83b00ae5a67cb3b46c2bd9.png)


- After installation, the `client.ovpn` file will be created and stored under /root .

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_35093692a150b6b37b2b59ddf9082503.png)


- Change the directory of the `client.ovpn` file.

```
sudo mv /root/client.ovpn /home/ubuntu
```

- Download `client.ovpn` to the local computer.

![](https://i.imgur.com/8OqGSOr.png)

<br/>


## Step 4. Install OpenVPN Client locally

Please download and install [OpenVPN Client](https://openvpn.net/vpn-client/) on your local computer for VPN connection.

<br/>


## Step 5. Activate VPN connection

- Open the OpenVPN program, drag and import the `client.ovpn` file downloaded in Step 3. directly into FILE.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0052af78144363408630ea8ee7dd96f8.png)

- After dragging is complete, click **CONNECT** to connect.

![](https://i.imgur.com/uZD9gD1.png)

- Connected successfully!

![](https://i.imgur.com/eec3eJT.png)

<br/>


## Step 6. Make sure VPN encrypted connection is enabled

Confirm that with the VPN connection activated in step 5. the local computer can connect to the jump server and other instances in the same virtual network with private IP, which means the VPN connection is successful.

- Obtain the **private IP** of the jump server.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9516eae28be233d2a2e32f4b9a11c0cc.png)

- Open CMD on the local computer and use the ping command to confirm that it can connect to the private IP of the jump server.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1ac71acfda06dcfd2ab139742284e280.png)

- You can also ping other VCS instances in the same virtual network at the same time.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_309e93a516dbce476590ff44dd9568cb.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa4f7abd06e48bbcf008b1e06c648eac.png)