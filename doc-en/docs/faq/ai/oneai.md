---
title : TWCC FAQs | FAQ-oneai
GA: UA-155999456-1
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-oneai-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-oneai-en'
---


# TWCC FAQs | OneAI 


## Subscription Fee

<details>

<summary> Q1. What are the fees associated with using OneAI and how are they charged?</summary>

Use of the OneAI service will incur subscription fees, as well as costs associated with using tagging tools, hosting notebooks, training models, performing inference, data storage, and data processing resources. Please refer to OneAI Subscription Fee for  more information:

<a href="https://man.twcc.ai/@twsdocs/pricing-zh#%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%EF%BC%9AOneAI"><font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px'}}><font style={{'color':'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font></a> <a href="https://man.twcc.ai/@twccdocs/SJWlN3YDr#%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7"><font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px'}}><font style={{'color':'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font></a> 

</details>


<details>

<summary> Q2. Why can't I subscribe OneAI?</summary>

1. Project Restrictions. If the item expires during the month, or if the wallet balance for the item is less than 100, the item cannot be subscribed.
2. Identity restrictions. Subscriptions can only be made by the tenant admin and will not be available to tenant users.

Please refer to [<ins>OneAI Subscription Policies</ins>](https://man.twcc.ai/@twccdocs/doc-oneai-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Foneai-subscription-policy-zh) for  more information.

</details>


<details>

<summary> Q3. How do I view the itemized costs of OneAI services?</summary>

You can view OneAI's itemized fees in the Member Center. Select the item you want to view from the Member Center, select **Usage** from the top menu, and then select **OneAI** from the drop-down list to view the fees by product item:


<font style={{'background-color':'#008ad8', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px'}}><font style={{'color':'white'}}> <b>&nbsp;Enterprise&nbsp;</b></font></font>


![](https://i.imgur.com/dsFrIcC.png)

<font style={{'background-color':'#FF0000', 'border-radius': '30px', 'padding': '0.3em', 'font-size': '16px'}}><font style={{'color':'white'}}> <b>&nbsp;Academic&nbsp;</b></font></font> is similar to the Enterprise step in that you need to select the <b>TWCC</b> service before selecting <b>OneAI</b>.

</details>


## Service Functions

<details>

<summary> Q1. What is Notebook Service?</summary>

OneAI Notebook Service integrates with leading deep learning frameworks(TensorFlow, PyTorch, MXNet) and suites. It supports pre-built image of data science languages(Julia, R) and data analysis engines(Spark), and it's a flexible, managed JupyterLab interactive collaborative development environment. Please refer to [<ins>OneAI Notebook Service</ins>](https://docs.oneai.twcc.ai/s/Z8LdmjL9M#%E7%AD%86%E8%A8%98%E6%9C%AC%E6%9C%8D%E5%8B%99) for more information.

</details>

<details>

<summary> Q2. What solutions are pre-made by OneAI AI Maker?</summary>

OneAI AI Maker provides 8 public templates for object detection, image classification, medical imaging, classification problems, regression problems, pedestrian attribute recognition, etc: YOLOv3, YOLOv4, Nvidia Clara Train 3.0, Nvidia Clara Train 4.0, Scikit-learn: regression, Scikit-learn: classification, Image-classification, PAR. Please refer to [<ins>Case Study</ins>](https://docs.oneai.twcc.ai/s/xKNcU3O5D#%E6%A1%88%E4%BE%8B%E6%95%99%E5%AD%B8) for more information.

</details>

<details>

<summary> Q3. What is the difference between OneAI AI Maker and AI Maker(Beta)?</summary>

AI Maker(Beta) feature adds MLflow integration to manage the details of model training.
1. [<ins>AI Maker(Beta) > MLflow Tracking</ins>](https://docs.oneai.twcc.ai/s/3uxGFglX0#%E6%A8%A1%E5%9E%8B%E7%AE%A1%E7%90%86) manageable model lifecycle.
2. AI Maker(Beta) > Training Job for a task the built-in template training model automatically applies MLflow to provide a more detailed AI/ML research process: using custom training codes requires manual configuration in the code. [MLflow Logging Function <i class="fa fa-external-link" aria-hidden="true"></i>](https://mlflow.org/docs/latest/tracking.html#logging-functions)feature provides centralized management of models through OneAI user interface.

Please refer to [<ins>OneAI AI Maker(Beta)</ins>](https://docs.oneai.twcc.ai/s/3uxGFglX0#AI-Maker%EF%BC%88%E6%90%B6%E9%AE%AE%E7%89%88%EF%BC%89) for more information.

</details>

<details>

<summary> Q4. Is it possible for non-project members to use the annotation tool?</summary>

[<ins>CVAT annotation tool</ins>](https://docs.oneai.twcc.ai/s/QFn7N5R-H#%E6%A8%99%E8%A8%BB%E5%B7%A5%E5%85%B7) can be used to assign tagging jobs to non-project members. You must provide access for your own non-project members:
1. The entry point for the CVAT annotation tool is shown in the figure below:
![](https://i.imgur.com/f2cEHEV.png)
2. For account and password settings of CVAT annotation tool, please refer to the [<ins>relevant settings</ins>](https://hackmd.io/@6Na-9uAFTYa8-bo874eWrA/S1mZuWyc5) in the operation guide.

</details>


## Container usage

<details>

<summary> Q1. What is the scope of OneAI Container Service Port?</summary>

OneAI Container Services offers a range of static ports from  30000-32767。please refer to [<ins>OneAI Container Services > Network Setting</ins>](https://docs.oneai.twcc.ai/s/yGbG4JJyi#3-%E7%B6%B2%E8%B7%AF%E8%A8%AD%E5%AE%9A) for more information.

</details>

<details>

<summary> Q2. How should the OneAI container image be generated?</summary>

Prepare your container image and use the Docker CLI to push the container image file to OneAI container image. Docker CLI information can be found in the [official Docker documentation<i class="fa fa-external-link" aria-hidden="true"></i>](https://docs.docker.com/get-started/#cli-references).

</details>

<details>

<summary> Q3. Can OneAI Container Service use SSH connection?</summary>

Depending on the image, the source will restrict SSH connections. The system's built-in nvidia-official-images public image is available through an SSH connection. If you want to use SSH connection, it is recommended that you [install the sshd related packages<i class="fa fa-external-link" aria-hidden="true"></i>](https://docs.docker.com/samples/running_ssh_service/) in the image. OneAI Container Service uses SSH connection, please refer to the [<ins>user manual</ins>](https://docs.oneai.twcc.ai/s/yGbG4JJyi#%E4%BD%BF%E7%94%A8-SSH-%E7%99%BB%E5%85%A5%E9%80%A3%E7%B7%9A) for more information.

</details>

<details>

<summary> Q4. Why does the size of the container image get smaller when I upload from my local environment?</summary>

The OneAI container image will compress the container image file you uploaded, resulting in a smaller container image file with no effect on its contents.

</details>

## Data Storage

<details>

<summary> Q1. What kind of data storage services are available for OneAI?</summary>

OneAI uses the [<ins>OneAI Storage Service</ins>](https://docs.oneai.twcc.ai/s/_F4C_EzEa#%E5%84%B2%E5%AD%98%E6%9C%8D%E5%8B%99) as a data storage and management tool, providing secure and reliable storage compatible with Amazon S3 and supporting third-party tools(S3 browser)that enable data sharing between OneAI's services or with other project members.
</details>

<details>

<summary> Q2. How much storage is installed on the OneAI Container Service?</summary>

The storage space for creating containers is based on the size of the storage body mounted by the OneAI Storage Service.
</details>

<details>

<summary> Q3. What kind of data can OneAI Storage Service store?</summary>

Data can be stored in any format and of any type.
</details>

<details>

<summary> Q4. What is the maximum amount of space and files that can be stored in the OneAI storage service?</summary>

There is no usage limit on the total amount of data and objects that can be stored by the OneAI Storage Service.
</details>


## Training Model

<details>

<summary> Q1. Does OneAI support multi-GPU training?</summary>

OneAI AI Maker public templates automatically distribute deep learning models and large training sets across multiple GPUs, while custom training code needs to be manually tuned to invoke GPUs, and the invocation method will vary depending on the deep learning framework.

</details>

<details>

<summary> Q2. Which models can be tuned with the OneAI AI Maker SmartML training task?</summary>

[<ins>SmartML Training Tasks</ins>](https://docs.oneai.twcc.ai/s/QFn7N5R-H#%E8%A8%93%E7%B7%B4%E4%BB%BB%E5%8B%99) has 4 types of algorithms to choose from:Bayesian, TPE, Grid, Random to perform optimization strategies for model training. If you don't use public template, you must use `os.environ` in your training code to [<ins>Manually configure variable settings</ins>](https://docs.oneai.twcc.ai/s/QFn7N5R-H#23-%E8%A8%AD%E5%AE%9A%E8%B6%85%E5%8F%83%E6%95%B8) to set tunable hyperparameters, model types, etc. For more information, please refer to [<ins>Public template image-classification case study</ins>](https://docs.oneai.twcc.ai/s/6FCAc5sdI#AI-Maker-%E6%A1%88%E4%BE%8B%E6%95%99%E5%AD%B8---%E5%BD%B1%E5%83%8F%E5%88%86%E9%A1%9E%E6%A8%A1%E5%9E%8B%E6%87%89%E7%94%A8) setup.

</details>

<details>

<summary> Q3. What model types can be imported into OneAI AI Maker models?</summary>

OneAI models can store unlimited types of models. Before importing, you need to package the model as a ZIP file and upload it to OneAI storage service. Please refer to [<ins>AI Maker models</ins>](https://docs.oneai.twcc.ai/s/QFn7N5R-H#%E6%A8%A1%E5%9E%8B) for more information.

</details>

<details>

<summary> Q4. How can I confirm that GPU resources are being used?</summary>

- The compute resources used by OneAI Notebook Service, Container Service and Inference Service can be monitored through [<ins>OneAI Resources</ins>](https://docs.oneai.twcc.ai/s/gEQO9lvF8).
- For OneAI training assignments, you can check the status of your computing resources within 7 days, please contact customer service and get monitoring data.

</details>