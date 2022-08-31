---
sidebar_position: 10
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-launch-tensorboard-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-launch-tensorboard-en' 
---

# Start TensorBoard in the container - ML experiment visualization tool

In order to increase the recognition accuracy of machine learning models, observing model training changes and removing errors are all necessary but complicated tasks. TensorBoard visualizes the changes of TensorFlow model data in the form of a web page, and have the ability to draw a variety of graphics, allowing data scientists to easily examine and understand the structure of the neural network and experimental results, also quickly find solutions to optimize the model.

TensorBoard has been installed in the TWCC container environment for users. This article will show you how to start the TensorBoard tool. For more introduction and usage of Tensorboard, please refer to [TensorFlow Official website](https://www.tensorflow.org/tensorboard).

:::tip
It is recommended to start in the TensorFlow container to better utilize the functionality of TensorBoard, which will be limited in other containers.
:::

<br/>

## Step 1. Connect to your Interactive Container

Please refer to the [<ins>Connection method</ins>](https://man.twcc.vip/en/docs/ccs/user-guides/creation-and-connection/connect-to-your-container) to connect to your Interactive Container.

<br/>


## Step 2. Activate TensorBoard

Enter the following command to activate the TensorBoard service.

```bash
tensorboard --logdir=~/logdir --port 5000
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_33abbf06c6561af711929eee558586c5.png)

:::info
1. You need to specify a port for TensorBoard web services. <br/>In the container environment of TWCC, there are three ports available, namely `5000`, `5001`, and `5002`. Here we take port `5000` as an example. <br/>For more information, please refer to [<ins>Configure the service port of Interactive Containers</ins>](https://man.twcc.vip/en/docs/ccs/tutorials/configure-service-ports/#associate-service-ports). 
3. The `--logdir` in the above command is the storage location of the log file, you can set it by yourself. In this article, we use `~/logdir` as an example.
:::

<br/>


## Step 3. Associate container service ports

Please associate the port used by TensorBoard with the container port, and then you can use the TensorBoard service from your local web page.

- On the TWCC container information page, click **Associate**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_89aeaf9804fa985f97c53a9079df84a1.png)

- In the Association Service Port selection window, select **5000** and click OK.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_68fc744ec4a0630942f6a1c3e0b32544.png)


- After confirmation, the **Port** on the container information page will show one more piece of information about the target port 5000 and the public port. Take the following figure as an example, the public port of target port 5000 is 56674.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_99e217be234e88b2d6bfa1652d157d1b.png)

<br/>


## Step 4. Connect to Tensorboard
- Get the container's **Public IP** on the container information page.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a972e0bb5cd199a1fb3d38ea2cfc7d4b.png)

- Open the web browser and enter **`Container IP: Public Port`** in the address bar, such as `xxx.xxx.xxx.xxx:56674` in this example, then you can connect to Tensorboard.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_efab9cdf24eb0d8abbc3b75bd60e3eac.png)

<br/>


:::info
For more Tensorboard introduction and usages, please refer to [<ins>TensorFlow official website</ins>](https://www.tensorflow.org/tensorboard).
:::