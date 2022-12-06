---
sidebar_position: 1
sidebar_label: 'Overview'
slug: '/user-guides/twcc/ccs-interactive-container/image-overview'
sync_original_production: 'https://man.twcc.ai/@twccdocs/ccs-concept-image-overview-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/ccs-concept-image-overview-zh' 
---


# Container image overview

The container images can be divided into the TWCC images provided by default and the custom images created based on the TWCC image:

## TWCC images

TWCC provides a variety of [NGC](https://www.nvidia.com/zh-tw/gpu-cloud/containers/) optimized container images for AI computing and AI training frameworks as follows. Integrated with the TWCC GPU resources, container images help containers perform excellent computing performance.

TensorFlow, PyTorch, CUDA, Matlab (BYOL), Caffe, CNTK, MXNet, Caffe2, TensorRT, Triton Inference Server, Theano, Torch, DIGITS, NeMo, Clara Train SDK, RAPIDS, Merlin Training, and Merlin Inference.

Refer to [detailed image concept](xxx) for more information on the AI training framework and package versions for each TWCC image.

- ### Image name description

    - Example：`tensorflow-20.11-tf2-py3:latest`
    - Description：**`AI Training framework`**-**`NGC release date (yy.mm)`**-**`Minor version defined by NGC`**-**`Python version`**:**`The latest adapted version of TWCC`**。

:::info
- Most of the images correspond with the above name description, but a few of them are additionally marked with the applicable package name, e.g. `digits-19.08-tensorflow:latest`; or use the original version name of the image, e.g. `matlab-r2019b:latest`.
- `v1` indicates the optimized version of TWCC.
- You can customize the identification tag for Custom Image instead of `latest` displayed in the image name.
:::


- ### Versions and features
    - Container images: Only supported in versions after 19.08 (inclusive).
    - SSL encryption: Only supported in versions after 20.xx.
    - Jupyter Notebook: Only supported in versions after 20.xx. 
    -  Command log: For versions 21.08 and later, you can use the command history to view the logs

## Custom images

With [custom images](xxx), you are able to keep the self-deployed container settings and packges built based on TWCC images. After the container image is created, all project members can share it. With this service, all software requires only one installation, providing you with the convenience of quickly copying and deploying the same environment.

Moreover, since billing starts when a container is created, if a container is no longer needed, you can image it to store its settings, then delete it to reduce your cost and restore the container from the image on the next time you need it. In addition, you can use container images as a disaster recovery for container damage.

