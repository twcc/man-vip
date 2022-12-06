---
sidebar_position: 3
title: 'Virtual Compute Service (VCS)'
sidebar_label: 'Virtual Compute Service'
slug: '/faqs/twcc/vcs'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-vcs-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-vcs-zh'
---

# TWCC FAQs | Virtual Compute Service (VCS)

## Connect to the VCS instance
<details>

<summary> Q1. What open source clients are available for connecting to TWCC resources, like CCS, VCS and HPC?</summary>

Third-party open source software such as MobaXterm, PuTTY and VSCode can be used.

</details>

<details>

<summary> Q2. I want to set up web services using VCS instance, but why can't I connect to the instance?</summary>

Please check whether the instance's security group or firewall rules block the connection. For related documents, refer to:

- [Security Group](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-sg-en)
- [Basic Virtual Firewall](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-vnf-en)

</details>

<details>

<summary> Q3. The VCS instance created from the image cannot be connected, what should I do? </summary>

Please check the following two configurations of the VCS instance before creating the image:
1. If you set /etc/fstab to automatically mount the disk, please comment out this setting or add the `nofail` option, otherwise you will be unable to connect to the instance created by the image if cannot find the device.
2. If you are using Ubuntu 18.04 instance, and you have changed the network configurations of /etc/network/interfaces, it will also cause the connection failure.

After checking the above two settings, create an image for the VCS instance again, and use the newly created image to create the VCS instance. If it still failed to connect, please describe the situation in detail and send an e-mail to isupport@twcc.ai, the Technical Support team will assist you to solve the problem.

</details>

<details>

<summary> Q4. What should I do if I can't connect to the instance after changing the network card settings?</summary>

After the network card settings are changed, it might cause a failure to connect to the VCS instance. Therefore, we strongly recommend you not to change the network card settings. Please be careful when operating and deploying.

If you can't connect to the instance, please describe the situation and VCS instance information in detail, and send an e-mail to isupport@twcc.ai, the Technical Support team will assist you to solve the problem.

</details>

<details>

<summary> Q5. How to speed up the SSH connection?</summary>

Please adjust the DNS settings of the VCS instance to make the SSH connection speed faster. The setting method and steps are as follows:

**Step 1.** Enter the command

```
sudo vi /etc/ssh/sshd_config
```

**Step 2.** Press `i` key to enter insert mode<br/>
**Step 3.** Add a line of command

```
Use DNS no
```

**Step 4.** Press `esc` key to exit insert mode, then enter `:wq!`  to save the file.
<br/>

If you still have a slow connection after the modification, please contact the Technical Support: isupport@twcc.ai, and provide your local IP and the result of the traceroute to the instance.


</details>


<details>

<summary> Q6. How to connect to the Linux instance using account and password?</summary>

Refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-vcs-create-usr-linux-en) to connect to the Linux instance using the account and password, which is a solution to losing key pairs or damaging files.

</details>

<details>

<summary> 

Q7. When connecting to the VCS instance using SSH, the error ```WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!``` occurs, what should I do?

</summary>

The reason for this error is that the certificate stored on the local computer is different from the VCS instance. Therefore, you can avoid this error by deleting the certificate information of the local computer and regenerating it when connecting to the instance. Refer to the following command:


```
ssh-keygen  -f  "/Your_Path/.ssh/known_hosts"  -R  "Public IP"
```

<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> <b>Note：</b>

`Your_Path` is the path of your local computer, and the following message will appear when you connect again:


```Are you sure you want to continue connecting (yes/no)? ```
Enter ```Yes``` to connect and generate a new certificate.

</details>

<details>

<summary> Q8. How to deal with macOS computers that can't connect to Linux devices?</summary>

Please go to the **VCS Instance Details** page , click the "**Connect**" button, and follow the instructions provided in the window to set the key pair access rights and SSH connection instance.

</details>

<details>

<summary> Q9. Is there a default password when I use Console to connect to a VCS instance?</summary>

There is no default password, you need to create a separate password before using Console to connect to the Linux instance, for Windows instances just enter the password you set when you created the instance, refer to [Quick debugging and maintenance tools:TWCC VCS console](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-debug-tool-console-zh#Step-3-%E8%BC%B8%E5%85%A5%E9%80%A3%E7%B7%9A%E8%B3%87%E8%A8%8A%EF%BC%8C%E5%AE%8C%E6%88%90%E9%80%A3%E7%B7%9A)。

</details>

<div style={{height:10+'px'}}></div>


## VCS instance management

<details>

<summary> Q1. What should I do if I fail to create the VCS instance?</summary>

Go to the **VCS Instance Details** page, hover to the **`Unsuccessful`** state, and it will display the creation failure message.
Please take a screenshot of this page (and the creation failure message), together with the project ID and the VCS instance information (ID, image, hardware configuration, etc.) and send an e-mail to isupport@twcc.ai. Technical Support team will assist you to solve the problem.

</details>

<details>

<summary> Q2. What should I do if I forget the login password of the Windows VCS instance?</summary>

When creating a VCS instance, please be sure to save your password properly. If you forget the password, you can delete the instance and re-create it; if you need to save the data and configuration of the original instance, you can create an image of the instance first, and then create a new instance from the image and reset the password.

</details>

<details>

<summary> Q3. What should I do if I lose the key pair of the Linux VCS instance?</summary>

When creating a VCS instance, please be sure to keep your key pair properly. If you lose the key pair, you can delete the instance and re-create it; if you need to save the data and configuration of the original instance, you can create an image of the instance first, and then create a new instance from the image and use the new key pair.

</details>

<details>

<summary> Q4. What are the relationship between VCS instance states and the usage billing?</summary>

| VCS instance state | Instance usage billing| 
| -------- | -------- | 
| ```Starting```   | Not billed    | 
| ```Ready```      | Billed     |
| ```Stopping```   | Billed     |
| ```Shutdown```   | Billed     |
| ```Queueing```   | Not billed     |
| ```Deleting```   | Billed until the instance is successfully deleted   |
| ```Stopped```    | Not billed   |
| ```Error```      | Not billed   |

The instance will be billed in the ```Starting``` state if it is started from the ```Shutdown``` state.

</details>

<details>

<summary> Q5. In what state will the VCS instance not be billed?</summary>

The VCS instance will not be billed in the ```Queueing```, ```Stopped``` and ```Error``` states, and it will be billed in other states.
Whether the VCS instance in the ```Starting``` state be billed or not depends on the usage scenario. For detailed explanation, please refer to Q4.

</details>

<details>

<summary>

Q6. How to solve the error message ```440301: The request exceeded the quotas of ['floating_ip']``` when creating a VCS instance?

</summary>

The reason for this error message is that the number of floating ip's has reached the limit of the project, you can refer to the following practices.
1. After deleting the floating IPs that the VCS instance does not need to use for now(the status of the instance is `ready` before it can be deleted), then select Create again.
2. Floating IPs are released back into the pool after you stop or delete the instance and cannot be reclaimed. If you are using a fixed IP, we recommend that you subscribe and use a static IP.
3. If you have special needs, please contact our customer service.
     
</details>

<div style={{height:10+'px'}}></div>


## Resource allocation and monitoring

<details>

<summary> Q1. How to adjust the configurations of the created VCS instance?</summary>

If the configurations do not meet your requirements after creation and need to be adjusted to a smaller or larger instance, refer to [<ins>HowTo: Resize VCS instances</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-vcs-resize-instance-en).

</details>

<details>

<summary> 

Q2. I have enough credit, but why I got `The project is ran out of the resources and cannot create anymore.` error when I was creating a VCS instance?

</summary>

This message shows that your CPU usage has reached the project quota. We recommend you release CPU by creating images of the unused or less used VCS instances for future use, and delete the VCS instances.

</details>

<details>

<summary> Q3. How do I monitor the network traffic of my VCS instance?</summary>

On TWCC Portal, you can monitor the usage of CPU, disk, memory and network traffic with simple charts. You may install the monitoring program by yourself to get more detailed information.

</details>

<details>

<summary> Q4. How can I get GPU resources?</summary>

To efficiently allocate the frequently requested GPU resources, please email us your request at isupport@twcc.ai. We will have someone at your service.

</details>

<div style={{height:10+'px'}}></div>


## Packages

<details>

<summary> Q1. Does Virtual Compute Service support SMTP? </summary>

In a VCS instance, you can install any software or applications for your needs, so you can set up and configure a SMTP server on a VCS instance to send e-mail.

</details>

<details>

<summary> 

Q2. When installing packages or updating the VCS instance, it shows `E: Could not get lock /var/lib/apt/lists/lock`. What should I do?

</summary>

1. When installing or updating the packages, there might be some error messages about the lock file. Please delete the lock file and try again.
2. It is recommended to use Ubuntu 20.04 image to avoid this problem.

</details>

<div style={{height:10+'px'}}></div>


## Storage and data transfer

<details>

<summary> Q1. Can Cloud Object Storage (COS) be mounted on VCS instances?</summary>

Yes, COS can be mounted on VCS instances. You have the full permission of the instance, so you can perform any operations on the instance. To mount COS using s3fs or related packages, refer to [<ins>s3fs-fuse</ins>](https://github.com/s3fs-fuse/s3fs-fuse).

</details>

<details>

<summary> Q2. How to regularly back up VCS instance data to Cloud Object Storage (COS)?</summary>

Use TWCC-CLI and `crontab -e` to set up scheduled regular image creation.
- For details on using TWCC-CLI, refer to [<ins>4-3. Upload files to bucket</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05#4-3-%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88%E8%87%B3%E5%84%B2%E5%AD%98%E9%AB%94).
- For details on using `crontab -e`, refer to [<ins>crontab guru</ins>](https://crontab.guru/) or [<ins>crontab(5) - Linux man page</ins>](https://linux.die.net/man/5/crontab).

</details>

<details>

<summary> Q3. What happens if an image over 100 GB is imported into a VCS instance?</summary>

The size of the system disk is 100GB. Though you won't be charged for the extra storage, the VCS instance won't be able to start if the system disk is used over 100GB.

</details>

<details>

<summary> Q4. How to download the VCS instance data to the local computer?</summary>

There are 2 methods you can use to download the instance data to your local machine:
1. Using the Cloud Object Storage (COS). This method can not only achieve the purpose of data transmission, but also back up your instance:
    - **Step 1.** [<ins> Back up the data to COS</ins>](https://www.twcc.ai/doc?page=backup).<br/>
    - **Step 2.** From your local machine, go to the **Cloud Object Storage Management** page on TWCC Portal to [<ins>download files</ins>](https://www.twcc.ai/doc?page=object#%E4%B8%8B%E8%BC%89%E6%AA%94%E6%A1%88) or use [<ins> third-party software</ins>](https://www.twcc.ai/doc?page=object#%E4%BD%BF%E7%94%A8%E7%AC%AC%E4%B8%89%E6%96%B9%E8%BB%9F%E9%AB%94%E7%AE%A1%E7%90%86%E6%AA%94%E6%A1%88) to download multiple files at once.
2. From your local machine, [<ins>Use MobaXterm to connect to the VCS instance</ins>](https://www.twcc.ai/doc?page=vm#%E9%80%A3%E7%B7%9A%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94), and select "**Sftp**" icon on the left side to view, upload and download files. 

</details>

<details>

<summary> Q5. How to upload the local data to the VCS instance?</summary>

There are 2 methods you can use to upload your local data to the VCS instance:
1. Using Cloud Object Service (COS):
    - **Step 1.** [<ins>Upload local files to Cloud Object Storage Service (COS)</ins>](https://www.twcc.ai/doc?page=object#%E4%B8%8A%E5%82%B3%E6%AA%94%E6%A1%88)<br/>
    - **Step 2.** [<ins>Connect to the VCS instance</ins>](https://www.twcc.ai/doc?page=vm#%E9%80%A3%E7%B7%9A%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94)<br/>
    - **Step 3.** Use the built-in TWCC-CLI to [<ins>Download the files in COS to the designated directory</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05#4-%E9%9B%B2%E7%AB%AF%E7%89%A9%E4%BB%B6%E5%84%B2%E5%AD%98%E6%9C%8D%E5%8B%99COS-Cloud-Object-Storage).
2. From your local machine, [<ins>Use MobaXterm to connect to the VCS instance</ins>](https://www.twcc.ai/doc?page=vm#%E9%80%A3%E7%B7%9A%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94), and select "**Sftp**" icon on the left side to view, upload and download files.

</details>

<div style={{height:10+'px'}}></div>


## Network & Security

### Elastic IP

<details>

<summary>

Q1. Can I retrieve the public IP used by the VCS instance before it was `stopped` ?
 
</summary>

After you stop the VCS instance, the floating IP will be released back to the resource pool and a new floating IP will be available after the individual starts.

If your usage scenario applies to fixed IPs, it is recommended that you subscribe and use static IPs. Please refer to [Elastic IP](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-eip-zh) to learn more.

</details>

<details>

<summary> Q2. Is it impossible to create a VCS instance after the number of default IPs available to the project has been exhausted?</summary>

You can continue to create VCS instances after the floating IP quota is used up, but you cannot configure floating IPs.If you need additional IPs, please subscribe for static IP. If you have special needs, please contact our customer service.

Please refer to [Elastic IP Subscription Policy](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-eip-zh#%E5%BD%88%E6%80%A7-IP-%E8%A8%82%E9%96%B1%E6%94%BF%E7%AD%96) to learn more.

</details>

<details>

<summary> Q3. Why can't I subscribe to a static IP?</summary>

Please check your user status first. Only the **Tenant Administrator** can subscribe to static IPs and stop subscriptions in the project.
If you have confirmed your administrator status and are still unable to subscribe, please contact Customer Service.

</details>

<details>

<summary> Q4. If I want to convert a floating IP bound to DNS to a static IP, is there a transition period for the conversion?</summary>

If the server (VCS instance) is hosting only one external service, you can first hook up a scheduled static IP to the load balancer and then forward the traffic from the load balancer to the back-end service server. After the DNS IP conversion is complete, then the static IP is hooked up to the server.

</details>

<div style={{height:10+'px'}}></div>

### Virtual network

<details>

<summary> Q1. Why can't the VCS instance connect to the Internet after creating?</summary>

Please check the virtual network configurations.
If you have enabled the Basic Virtual Firewall (BVF), and you're not sure whether the rules are set correctly, we suggest you disable the firewall first and try to connect again.
For Basic Virtual Firewall (BVF) configurations, refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-vnf-en), or contact the Technical Support: [isupport@twcc.ai](isupport@twcc.ai).

</details>

<details>

<summary> Q2. How to open non-default open ports of the VCS instance to run services?</summary>

- The default open ports of Linux instance: 22、443
- The default open ports of Wondows instance: 22、443、9833
- You may open an additional port by setting the security group, please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-vcs-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-sg-en).

</details>

<details>

<summary>

 Q3. How to solve the error message ```440301: The request exceeded the quotas of ['floating_ip']``` when creating a VCS instance?
 
</summary>


The reason for this error message is that the number of floating ip's has reached the limit of the project, you can refer to the following practices.
1. After deleting the floating IPs that the VCS instance does not need to use for now(the status of the instance is `ready` before it can be deleted), then select Create again.
2. If you have special needs, please contact our customer service.

</details>

<details>

<summary> Q4. Is there a limit to the speed of the network?</summary>

TWCC does not limit the speed of the network within the virtual computing entity. If you find that your transfer speeds are slow, we recommend that you take the following steps:
1. Using the Network Speed Tool (e.g. [Speedtest](https://www.speedtest.net/)), then send the test results to the technical support email (isupport@twcc.ai) and we will determine if the speed is abnormal based on the information you provide.
2. Confirm that the network speed of the source is not limited.

</details>

<div style={{height:10+'px'}}></div>

### Auto scaling

<details>

<summary> Q1. How do I change the instance template that the auto scaling uses to scale out instances to meet my needs?</summary>

Please follow the steps:
* Create a template image
1. Create a VCS instance, deploy the environment and files, and create an instance image (or use your existing instance to create an image).
2. Create a VCS instance from the image created in the Step 1.
* Set up auto scaling
3. Create an auto scaling.
4. Attach the auto scaling to the instance created in Step 2.
Follow the steps above, the auto scaling will use the template to scale out instances that meet your needs.

</details>

<div style={{height:10+'px'}}></div>


## Image

<details>

<summary> Q1. How long does it take to create an image?</summary>

The image creation takes about 10-15 minutes.

</details>

<details>

<summary> Q2. How to shorten the image creation time?</summary>

If data transmitting while creating the image, the backup might be inconsistent, and the data might be saved incompletely; moreover, the backup process is longer than usual. Therefore, we suggest you shut down the instance manually (`sudo shutdown`) and make sure the data has been written into the virtual disks before creating an image.

</details>

<details>

<summary> Q3. How to automate the VCS image creation?</summary>

Use TWCC-CLI and `crontab -e` to set up scheduled regular image creation.
- For details on using TWCC-CLI, refer to [<ins>3-6. VCS instance image</ins>](https://man.twcc.ai/@twccdocs/twcc-cli-v05#3-6-%E8%99%9B%E6%93%AC%E9%81%8B%E7%AE%97%E5%80%8B%E9%AB%94%E5%BF%AB%E7%85%A7-TBD%E2%80%A6).
- For details on using `crontab -e`, refer to [<ins>crontab guru</ins>](https://crontab.guru/) or [<ins>crontab(5) - Linux man page</ins>](https://linux.die.net/man/5/crontab).

</details>

<details>

<summary> Q4. Why can't I share an image to another project?</summary>

1. Only tenant administrators can share image to other target projects, and they must be tenant administrators of both the source and target projects.
2. Cross-project sharing of licensed images is not supported (e.g. Windows servers with licenses).

</details>

<details>

<summary> Q5. Why can't I select the GPU specification in the target project to create a VCS instance after the image of the GPU VM uses image sharing?

</summary>

The image sharing function only supports the creation of CPU VCS instances in the target project, and does not support creating GPU VCS instances yet.

</details>

<details>

<summary> Q6. Why does the image status after sharing give an error? </summary>

If you share images generated from VCS instances created before 2021/3/27, such images will take too long to share and will fail due to unoptimized performance.
For sharing requests, please contact technical support:[isupport@twcc.ai](isupport@twcc.ai)。

</details>