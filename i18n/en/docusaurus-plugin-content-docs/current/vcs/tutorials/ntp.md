---
sidebar_position: 13
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-configure-ntp-server-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-configure-ntp-server-en'
---

# Set NTP to sync time automatically


The following instructions describe how to set up a specific time zone for a VCS instance so that it can be automatically calibrated: CentOS instances use native commands to set up the time zone, while Ubuntu instances use an external time server to set up the time zone.

<br/>


### CentOS VCS instances

- Step 1. Connect to the VCS instance.

- Step 2. Enter the following command to set the time zone to Taiwan.

```bash
sudo timedatectl set-timezone Asia/Taipei
```

- Step 3. Enter the following command to query the time zone of the VCS instance.

```bash
date
``` 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2bf337c33ce4d5cbb947a978ff1c7888.png)

<br/>


### Ubuntu VCS instances (18.04 version)

- Step 1. Connect to the VCS instance.

- Step 2. Enter the following command to update the package.

```bash
sudo apt-get update
```

- Step 3. Enter the following command to install the NTP package.

```bash
sudo apt-get install -y ntp
```

- Step 4. Enter the following command to modify the configuration file :arrow_right: and then type "i" to enter edit mode, you will see the following screen:

```bash
sudo vim /etc/ntp.conf
```

 :arrow_right: Type "#" in front of the content in the red box below to hide a default data.
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bbd7b65b56cc9fdc0bca4e3a283f9bb2.png)

 :arrow_right: Enter the external NTP server in the same format as below :arrow_right: press the "esc" key to exit edit mode when finished :arrow_right: enter ":wq!" to save the file and leave
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f6b3ee2a0904f453523459aca376aede.png)

- Step 5. Enter the following command to restart NTP to update the settings.

```bash
sudo systemctl restart ntp
```

<br/>


### Ubuntu VCS instances (16.04 version)


- Step 1. Connect to the VCS instance.

- Step 2. Enter the following command to install the NTP package.

```bash
sudo apt-cache policy ntp
sudo apt install -y ntp=1:4.2.8p4+dfsg-3ubuntu5
```

- Step 3. Enter the following command to modify the configuration file :arrow_right: and then type "i" to enter edit mode, you will see the following screen:

```bash
sudo vim /etc/ntp.conf
```

 :arrow_right: Type "#" in front of the content in the red box below to hide four default data.
 
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f521d88e5faa59dc9e3f0a481e55ef57.png)

 :arrow_right: Enter the external NTP server in the same format as below :arrow_right: press the "esc" key to exit edit mode when finished :arrow_right: enter ":wq!" to save the file and leave

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_51eaafec0f88328c5688019a3eeecf0c.png)

- Step 4. Enter the following command to restart NTP to update the settings.

```bash
sudo systemctl restart ntp
```