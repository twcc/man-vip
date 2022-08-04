---
sidebar_position: 4
---

# Add Python 3 kernel to Jupyter Notebook 

:::success **Scenario：I'm used to program with Python 2, but the Jupyter Notebook only supports Python 2...**
*Do you have the same problem? Let us show you how to integrate TWCC services to solve the problems you are facing with!*
:::

TWCC Interactive Container provides Jupyter Notebook by default. It is a web-based integrated development environment to write scripts, display output, visualize data... and many other functions. In addition, it can install multiple computing kernels of programming languages according to needs. 

In some of TWCC container images (such as `caffe-19.08-py2:latest`), the Jupyter Notebook only supports Python 2 kernel (as shown in the figure below). We will show you how to add Python 3 Kernel to create a convenient computing environment!


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ab2cd237774e371c85e93ff63d1c96a.png)


## Step 1. Connect to your Interactive Container

Please refer to [<ins>Launch the container</ins>](https://man.twcc.ai/@twccdocs/SJlZnSOaN?type=view#%E4%BD%BF%E7%94%A8-Jupyter-Notebook) to connect to your Interactive Container.


## Step 2. Install Python 3 Kernel

Switch to the root user and install Python 3 kernel: 

```bash
sudo su 
apt-get update     
apt-get install python3-pip
python3 -m pip install ipykernel  
python3 -m ipykernel install
```

## Step 3. Make sure that the installation is complete

Refresh the Jupyter Notebook page, click **New** in the upper right corner to make sure that Python 2 and Python 3 are available. We're done!


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6a55e40d8c1f10531935436e3d7f7e63.png)
