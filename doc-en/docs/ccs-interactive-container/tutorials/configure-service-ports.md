---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-config-service-port-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-config-service-port-en'
---

# Configure the service port of Interactive Containers

TWCC Container service adopts Port-Forwarding to forward external network connections to different containers under the same domain, so that users can use specified container services from external network.

SSH runs on port 22; Jupyter Notebook runs on port 8888. Besides, the container service opens external port: 5000, 5001 and 5002. You can set the daemon of the container service to one of the external ports, and associate the external port with the target port in Interactive Container Details page. After that, you can use the service from your local using the public IP and the external port.

The following demonstrates how to set up a web service with Flask in a container, set the daemon of the service on the external port 5002, and associate the service port to use the web service through a local browser:

## Create a container

- After the container is created, open Jupyter Notebook :arrow_right: Terminal

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_42fac0b7acc6b4a74b8ba792c022bb5d.png)


## Configure a web service and a service port

- Enter the following command, download and run the script (script commands: install [Flask](https://flask.palletsprojects.com/en/1.1.x/) to set up the website, make it display `Hello World`, and set the port number to `5002`) to configure the web service using the container.
```bash=
wget -O - https://bit.ly/TWCC_TestServicePort_5002 | bash
```
![](https://i.imgur.com/TCStO51.png)
        
- Make sure that the web service has been set up and the daemon is running on port `5002`
        
![](https://i.imgur.com/XKvEMYX.png)

## Associate service ports
        
- Back to Interactive Container Details page, click ASSOCIATE:arrow_right: select the port number of the service daemon `5002` :arrow_right: click OK
        
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_384f2febec1ccdaf1c98a3e8b693efb3.png)

        
- After that, the system will allocate a **target port** (53055) corresponding to the external port (5002)
        
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d916b86e079a007d7b2e51a925db2ad5.png)


## Use the web service
        
- Open your local browser and enter `http://public IP:target port number`, then you can see the web page and start using the web service.

![](https://i.imgur.com/Za4GoFg.png)