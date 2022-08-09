---
sidebar_position: 10
---

# Start TensorBoard in the container - ML experiment visualization tool

:::tip **Case scenario**: **Are there visualization tools for machine learning available for containers?**
*Do you have the same problem? Let us take you hand in hand to assemble the TWCC cloud service architecture to easily solve your problems!*
:::

In order to increase the identification accuracy of machine learning models, observing model training changes and removing errors are all necessary but complicated tasks. TensorBoard visualizes the changes in TensorFlow model data in the form of a web page, and have the ability to draw a variety of graphics, allowing data scientists to easily view and understand the structure of the neural network and experimental results, also quickly find solutions to optimize the model.

TensorBoard has been installed for users in the container environment of TWCC. This article will show you how to start the TensorBoard tool. For more introduction and usage of Tensorboard, please refer to[ TensorFlow Official website](https://www.tensorflow.org/tensorboard).

:::tip
It is recommended to start in the TensorFlow container, which can better utilize the functions of TensorBoard, and the functions on other containers will be limited.
:::

## Step 1. Connect to your Interactive Container

Please refer to the [<ins>Connection method</ins>](https://man.twcc.ai/@twccdocs/SJlZnSOaN?type=view#%E4%BD%BF%E7%94%A8-Jupyter-Notebook) to connect to your Interactive Container.


## Step 2. Activate TensorBoard

Enter the following command to activate the TensorBoard service.

```bash
tensorboard --logdir=~/logdir --port 5000
```

:::info
1. You need to specify a port for TensorBoard web services. <br/>In the container environment of TWCC, there are three ports available, namely `5000`, `5001`, and `5002`. Here we take port `5000` as an example. <br/>For more information, please refer to [<ins>HowTo: Setting the service port of Interactive Container</ins>](https://www.twcc.ai/doc?page=howto-ccs-config-service-port). 
3. The `--logdir` in the above command is the storage location of the log file, you can set it by yourself. In this article, we use `~/logdir` as an example.
:::

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
$ wei1803106@cwfs6actr1611034753151-lkffh:~$ tensorboard --logdir=~/logdir --port 5000<div></div>
2021-01-19 13:39:58.453097: I tensorflow/stream_executor/platform/default/dso_loader.cc:49] Successfully opened dynamic librarylibcudart.so.11.0<div></div>
TensorBoard 2.3.0+nv at http://cwfs6actr1611034753151-lkffh:5000/ (Press CTRL+C to quit)
</div>



## Step 3. Associate container service ports

Please associate the port used by TensorBoard with the container port, and you can use TensorBoard service in the web page from your local.

- On the TWCC container information page, click **Associate**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_89aeaf9804fa985f97c53a9079df84a1.png)

- In the Association Service Port selection window, select **5000** and click OK.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_68fc744ec4a0630942f6a1c3e0b32544.png)


- After confirmation, the **Port** on the container information page will have an additional piece of information about the target port 5000 and the public port. Take the following figure as an example, the public port of target port 5000 is 56674.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99e217be234e88b2d6bfa1652d157d1b.png)


## Step 4. Connect to Tensorboard
- Get the container's **Public IP** on the container information page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a972e0bb5cd199a1fb3d38ea2cfc7d4b.png)

- Open the web browser and enter **`Container IP: Public Port`** in the address bar, such as `203.xxx.xxx.xxx:56674` in this example, then you can connect to Tensorboard.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1981c171cbb4ecec90e38ace7b6d47a1.png)


:::info
For more Tensorboard introduction and instructions, please refer to [<ins> TensorFlow official website</ins>](https://www.tensorflow.org/tensorboard).
:::