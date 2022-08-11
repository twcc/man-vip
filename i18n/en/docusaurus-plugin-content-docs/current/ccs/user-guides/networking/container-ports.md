---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-port-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-port-en' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Container ports (service ports)

TWCC interactive containers open port 22, 8888, 5000, 5001, 5002. A total of 5 **target ports** are provided for external services running on containers.

With the automatic association of container ports by default, the SSH server runs on port 22, and Jupyter Notebook runs on port 8888. Also, automatically complete the association. Therefore, you are able to use these two methods to connect and operate containers immediately after the container creation.

==**Need to update AI inference link:exclamation:**==<br/>
The custom **target ports** are: 5000, 5001, and 5002. You can set the daemon of the service running on a container to one of the target ports, and associate it with the public port. After that, the system will configure a corresponding **public port (50000 ~ 60000)**. You can expose your service with use the public IP and the public port. (e.g., [AI inference ](https://man.twcc.ai/@twccdocs/rkOTAaoa4?type=view)or[ Website service](https://man.twcc.ai/@twccdocs/howto-ccs-config-service-port-en)).

## Prerequisites
- Create [Interactive Containers](https://man.twcc.ai/@twccdocs/guide-ccs-create-en).
- To operate using the TWCC portal: once the container is created, click on the container you want to connect to on the **Interactive Container Management** page and enter the **Interactive Container Details** page.
- To operate using the TWCC CLI: please obtain the [Container's ID](https://man.twcc.ai/@twccdocs/guide-ccs-manage-zh#%E6%AA%A2%E8%A6%96%E8%B3%87%E8%A8%8A) first.

## View service port information 

By default, SSH runs on target port 22; Jupyter Notebook runs on target port 8888. (Public ports are all allocated by the system).

The following methods indicates how to view the external service port information associated with the container.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

Scroll down the page to the **Networks & Connection** section> **Port**. The associated service port information is displayed at the bottom left.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_756ba71d03c136e12baaabdc0a517855.png)


</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

View the service port information associated with the container with ID **`886330`**.

```bash
twccli ls ccs -p -s 886330
```

</TabItem>
</Tabs>



## Associate the service port

==**Need to update AI inference link:exclamation:**==<br/>
You can associate the container with **target port** 5000, 5001, 5002, and the system will configure a corresponding **public port (50000 ~ 60000)**. You can provide the external services through this mechanism.  (e.g., [AI inference](https://man.twcc.ai/@twccdocs/rkOTAaoa4?type=view) or [Website service](https://man.twcc.ai/@twccdocs/howto-ccs-config-service-port-en)).

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

- Click "**ASSOCIATE**" service port :arrow_right: Select the target port of the service daemon `5002` :arrow_right: Click  "**OK**"
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a5ae43d8cae3b31066fb4364ef9409bd.png)

        
- After that, the system will configure a **Public Port** (`54708`) corresponding to the target port  (`5002`).
        
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3e1c6887b4f75f4d0de4b9270856b723.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

- Associate the container (ID `886330`) with the target port `5000`.
```bash
twccli net ccs -p 5000 -open -s 886330
```

- After association, enter the [view command](#View-service-port-information) to view the public port allocated by the system.

</TabItem>
</Tabs>



## Dissociate the service port

If the container no longer provides external services, you can dissociate the service port.

<Tabs>
<TabItem value="TWCC Portal" label="TWCC Portal">

In the Interactive Container Details page, click "<b>DISSOCIATE</b>".

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_102119b28dadb948ba5c9a9096169b73.png)

Then check the port number to be dissociated, and click **OK** to successfully dissociate.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_60d9a8d43ca282904c175f37cb94af93.png)

</TabItem>
<TabItem value="TWCC CLI" label="TWCC CLI">

Dissociate the container (ID `886330`) with the target port `5000`.
```bash
twccli net ccs -p 5000 -close -s 886330
```

</TabItem>
</Tabs>