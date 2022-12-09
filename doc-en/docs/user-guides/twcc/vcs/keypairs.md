---
sidebar_position: 4
title: 'Key pairs'
sidebar_label: 'Key pairs'
slug: '/user-guides/twcc/vcs/keypairs'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-keypair-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-keypair-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Key pairs

Key pairs are the credentials for connecting to VCS Linux instances. Before creating an instance, a key pair must be obtained or created before accessing the instance after creation.


<br/>


## Create a key pair

:::caution

TWCC is not responsible for recording and managing your key pairs. Please be sure to download and save this key pair `pem` file properly. Without this key pair, you will not be able to connect to the VCS instance.

:::


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">


**1. Create when creating a VCS instance**

- You may create a key pair on the **Key Pair** tab when you [create a VCS instance](/docs/user-guides/twcc/vcs/instances/create-instances).

**2. Create on the Key Pair Management page**


* Click **Key Pair** on the left to enter the **Key Pair Management** page, where the created key pairs are displayed, and then click **+CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_488af7ad29cd26c7bd19de0499e43984.png)

* Enter the name of the key pair and click OK.
* The public key is not a required information. However, you can facilitate the flow by using the same public key you use on other Clouds to access your instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_45447b742db091b5376979f576d31e4f.png)

Once the key pair is created, please be sure to click **Download** immediately and save the key pair. Without this key pair, you will not be able to connect to the VCS instance. After downloading, you can close the dialog window.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ba5d3251f1cb99dac6903a4ccbe1c53.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


- Create a key pair named **`key1`**.

```bash
twccli mk key -n key1
```

:::info
It is recommended to name each key pair to facilitate key pair management.
:::

</TabItem>

</Tabs>


<br/>



## Manage Key pairs


### View key pairs


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **Key Pair Management** page, the newly created key pair will be listed at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6447fe5d46cd0d5cc6d95a2b0821a564.png)

- Select a key pair and to go to the **Key Pair Details** page, you can view the creation time, and copy the fingerprint and public key.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e210734ea72ee9350896a0e4a4b004b5.png)

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View key pair information.

```bash
twccli ls key
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_752e44d40060a214fa67fba1db2a1ead.png)


</TabItem>

</Tabs>


<br/>


### Delete a key pair


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **Key Pair Management** page >  Select a key pair > Click on the **DELETE** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_352768ab728b8a9fe5dd083ed0132555.png)

- Or click &nbsp;<i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i>&nbsp; next to the key pair > click **Delete**.
- Or enter the **Key Pair Details** page >  Click on the **DELETE** at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- Delete the key pair named `key1`.

```bash
twccli rm key -n key1
```

:::caution

After deleting, please delete the key pair on your local machine.

<details>

<summary>Example</summary>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ebc5f5ed8ea2bff1c5e0d8311873eb5.png)

</details>

:::

</TabItem>

</Tabs>