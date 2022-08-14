---
sidebar_position: 2
title: 'From macOS'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-macos-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-to-windows-from-macos-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to Windows instances from macOS

Having completed the [prerequisites and obtain connection information](https://man.twcc.ai/@twccdocs/vcs-guide-connect-prerequisite-en), please refer to the following method to connect to Windows instance from macOS.

:::info
The created instance will enter the **`Ready`** state, and it will take some time before you can connect remotely to it.

:::

:::caution
1. Due to frequent security incidents, if your connection comes from the following countries: China, Germany, France, South Korea, the Netherlands, Poland, and Russia, we will disable your remote connection to Windows instances (port: 9833). If you need to connect to TWCC Windows instances, please contact Customer Service.
2. You cannot connect to VCS instance once the settings of the network interface card are modified. Therefore, we strongly recommend that you do not change the network interface card settings. Please beware when operating and deploying.
:::

<br/>

## Connetion method

- **Step 1.** Download **Microsoft Remote Desktop** from Mac App Store, then open it. Click **Add Desktop**, enter the public IP and port of the instance, then click **Add**.
    
:::info
The port number `:9833` must be added after the public IP, e.g., 203.145.123.1`:9833`
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa227034ee0b79c47cfca35ddce2d099.png)

- **Step 2.** Double-click the added connection and enter the username and password to connect to the instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_efdbd4140922207a512b84da8e697024.png)

<br/>

:::info
username: administrator<br/>
password: user-defined instance password
:::