---
sidebar_position: 1
sidebar_label: 'From Windows'
slug: '/user-guides/twcc/vcs/connect-to-windows-instance-from-windows'
sync_original_production: 'https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-windows-from-windows-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/vcs-guide-connect-to-windows-from-windows-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Connect to a Windows instance from Windows

Having completed the [prerequisites and obtained connection information](/user-guides/twcc/vcs/instances/details/console.md), please refer to the following method to connect to the Windows instance from Windows.

:::info
Please note that after the instance has been created and changed to the **`Ready`** state, it will take some time for the remote connection to become available.
:::

:::caution
1. Due to frequent information security incidents, if your connection comes from the following countries, we will disable your remote connection to Windows instances (port: 9833): China, Germany, France, South Korea, Netherlands, Poland and Russia. If you need to connect to TWCC Windows instance, please contact Customer Service.
2. You will not be able to connect to VCS instance once the settings of the network interface card are modified. Therefore, we strongly discourage you from changing the NIC settings. Please beware when operating and deploying.
:::

<br/>

## Connection method

- **Step 1.** Open the **Remote Desktop Connection** program (Windows built-in tool, or you can download it from the official Microsoft website).

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_684a5e256e0fa4a4941d16eec10433e6.png)

- **Step 2.** Enter the public IP address, port number and user name of the instance, and then click **Connect**.
    
:::info
Remember to add the port number `9833` after the public IP. E.g., 203.145.222.23`:9833`.
:::
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b1373c3c43427837667e57a967250fc0.png)

- **Step 3.** Enter the password to connect successfully.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_85a08f020c91828bcd92f5d2800af23a.png)

<br/>

:::tip
Account: administrator<br/>
Password: User-defined VCS instance password
:::

:::info
For urgent debugging/system maintenance, it is recommended to [<ins>connect via Console</ins>](/user-guides/twcc/vcs/instances/details/console.md) to speed up the workflow.
:::