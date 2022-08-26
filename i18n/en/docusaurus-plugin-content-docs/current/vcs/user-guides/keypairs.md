---
sidebar_position: 6
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-keypair-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-keypair-en'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Key pairs

Key pairs are the credentials for connecting to VCS Linux instances.. Before creating an instance, a key pair must be obtained or created before the instance functions can be used.


<br/>


## Create key pairs

:::caution

TWCC is not responsible for recording and managing your key pair. Please download and properly save the key pair `pem` file. Without this key pair, you will not be able to connect to the VCS instance.

:::


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">


**1. Create when creating a VCS instance**

- You may create a key pair on the **Key Pair** tab when you [create a VCS instance](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh).

**2. create on the Key Pair Management page**


* Click **Key Pairs** on the left to enter the **Key Pair Management** pagewhere the created key pairs will be displayed, and then click **＋CREATE**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_84108381b91d32f82c53a6d7ea28927e.png)

* Enter the name of the key pair and click OK.
* The public key is not a required information. However, you can facilitate the flow by using the same public key you use on other Clouds to access your instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_466e59decf0e8352b8c2a50a382ebf69.png)

Once the key pair is created, please be sure to click **Download** immediately and save the key pair. Without this key pair, you will not be able to connect to the VCS instance. After downloading, you can close the dialog window.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_681f85be42a4c35f35f58801c389b5b1.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">


- Create a key pair named **`key1`**

```bash
twccli mk key -n key1
```

:::info
Name each key pair to facilitate your key management.
:::

</TabItem>

</Tabs>


<br/>



## Key pair management


### View key pairs


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **Key Pair Management** page, the newly created key pair will be listed at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2c5c208189e40729745d1a2d438eadfb.png)


- Select a key pair and to go to the **Key Pair Details** page, you can view the creation time, and copy the fingerprint and public key.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_08d77d911707ea2bb34f230811789a23.png)


</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- View key pair information

```bash
twccli ls key
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_752e44d40060a214fa67fba1db2a1ead.png)


</TabItem>

</Tabs>


<br/>


### Delete key pairs


<Tabs>

<TabItem value="TWCC Portal" label="TWCC Portal">

* Go to the **Key Pair Management** page >  Select a key pair > Click on the **DELETE** at the top.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_343f2e9b8bce0080133b8d1765e6c4bc.png)



- Or click <i class="fa fa-ellipsis-v fa-20" aria-hidden="true"></i> next to the key pair &nbsp; > click **Delete**.
- Or enter the **Key Pair Details** page >  Click on the **DELETE** at the top.

</TabItem>

<TabItem value="TWCC CLI" label="TWCC CLI">

- Delete the key pair named `key1` 
```bash
twccli rm key -n key1
```
:::caution
After deleting, please delete the key pair on your local machine.
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ebc5f5ed8ea2bff1c5e0d8311873eb5.png)
:::

</TabItem>

</Tabs>