---
sidebar_position: 1
sidebar_label: 'Connect to a container'
slug: '/user-guides/twcc/ccs-interactive-container/connect-to-container'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-connect-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-connect-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to a container

When the container state is **`Ready`**, you can start to use it. You can connect to interactive containers via Jupyter Notebook (browser-based web development environment) or SSH. Please refer to the following instructions for the procedure.

<br/>

## Prerequisites
- Create an [interactive container](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/create-an-interactive-container).
- If you choose to use TWCC portal, after the container is created, please click the container you want to connect to on the **Interactive Container Management** page and enter the **Interactive Container Details** page.
- If you choose to use TWCC CLI operation, please obtain the [Container's ID](https://man.twcc.vip/en/docs/ccs/user-guides/management-and-monitoring/manage-your-container/#view-the-information) first.

<br/>

## Methods for connecting to a container

You can connect to your container using Jupyter Notebook or SSH.

<br/>

### Jupyter Notebook

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- **Step 1.** Click **LAUNCH** on the right side of Jupyter to open the built-in Jupyter Notebook operation webpage.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a61c058a0a3db394855196861227bf63.png)


- **Step 2.** Then click "**New**" > "**Terminal**"  to access the container environment. Then you can start AI computing in the container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- **Step 1.** Get the Jupyter Notebook URL of the container whose container ID is `1249374`.

```bash
twccli ls ccs -s 1249374 -gjpnb
```

- **Step 2.** Click **URL** (CLI) to open Jupyter Notebook.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_619c5fad19ccb469b5368895935ae48b.png)


- **Step 3.** Click "**New**" > "**Terminal**" to access the container environment.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4d710c1fb912cf901ebfae96d73c06d2.png)

</TabItem>
</Tabs>

<br/>

### SSH

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- **Step 1.** Click the **Copy icon** on the right side of SSH to copy the SSH command with system account and IP address.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a64c20b74d97d7a2fdc4c2d2d2f05e2e.png)


- **Step 2.** Open Terminal in the local device, then enter the SSH command. The login account and password are the system account and password set in iService. You can also use other third-party software such as Putty to connect to your container.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_178bd3a081c3e9af4de944d2130d1b7f.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- **Step 1.** Get the SSH command of the container whose container ID is **`1249374`**

```bash
twccli ls ccs -s 1249374 -gssh
```
- **Step 2.** Open Terminal in the local device, copy and paste the command > insert the **superaccount password** to launch the container.

</TabItem>
</Tabs>

- Exit the container
    - Enter **`exit`** to end your container connection and leave SSH session.

---

:::info
[<ins>Forget your supercomputer password?</ins>](https://man.twcc.vip/en/docs/member/user-guides/member-key-quota/hpc-account-password-otp#reset-supercomputer-password)
:::