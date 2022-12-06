---
sidebar_position: 2
sidebar_label: 'From macOS'
slug: '/user-guides/twcc/vcs/connect-to-windows-instance-from-macos'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-macos-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-to-windows-from-macos-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to a Windows instance from macOS

Having completed the [prerequisites and obtained connection information](https://man.twcc.vip/en/docs/vcs/user-guides/connection/prerequisites), please refer to the following method to connect to Windows instance from macOS.

:::info
Please note that after the instance has been created and changed to the **`Ready`** state, it will take some time for the remote connection to become available.
:::

:::caution
1. Due to frequent information security incidents, if your connection comes from the following countries, we will disable your remote connection to Windows instances (port: 9833): China, Germany, France, South Korea, Netherlands, Poland and Russia. If you need to connect to TWCC Windows instance, please contact Customer Service.
2. You will not be able to connect to VCS instance once the settings of the network interface card are modified. Therefore, we strongly discourage you from changing the NIC settings. Please beware when operating and deploying.
:::

<br/>

## Connetion method

- **Step 1.** Download **Microsoft Remote Desktop** from Mac App Store, then open it. Click **Add Desktop**, enter the public IP and port of the instance, then click **Add**.
    
:::info
Remember to add the port number `9833` after the public IP. E.g., 203.145.222.23`:9833`.
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa227034ee0b79c47cfca35ddce2d099.png)

- **Step 2.** Double-click the added connection and enter the username and password to connect to the instance.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_efdbd4140922207a512b84da8e697024.png)

<br/>

:::tip
username: administrator<br/>
password: user-defined instance password
:::

:::info
For urgent debugging/system maintenance, it is recommended to [<ins>connect via Console</ins>](https://man.twcc.vip/en/docs/vcs/user-guides/management-and-monitoring/console) to speed up the workflow.
:::