---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/ccs-intactv-howto-en'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/ccs-intactv-howto-en'
---
# Python package installation guide of TWCC Interactive Container

This document introduces operations and precautions of installing Python packages via pip on TWCC Interactive Container, also includes solutions when programs fail.


:::info
For more information, please refer to [TWCC Interactive Container](https://www.twcc.ai/doc?page=container) 
:::

## Package installation tool

TWCC Interactive Container service is based on pre-loaded AI framework of [NGC Image](https://docs.nvidia.com/deeplearning/frameworks/support-matrix/index.html), in which pip is pre-installed as a Python package manager. You can install the Python package using other tools, such as downloading the offline installation package. We use pip as the installation tool in this document.


## Package installation path

You can choose to install in the system directory (as root user) or the user's home directory (Hyper File System, HFS) when installing packages using pip:

- Installing in the system directory: The life cycle of the development environment would be consistent with that of your container. You can create a container duplicate to save these packages, and then create an Interactive Container from the duplicate when needed, then you will get a consistent development environment. However, if you choose another container, you have to reinstall the packages.
　　
- Installing in the user's home directory: In principle, the package will be stored permanently in Hyper File System (HFS). By default, the HFS mounted to TWCC Interactive Container is the user's home directory. In other words, the packages will be brought to the new container without reinstallation when you create a new one. **However, TWCC provides multiple AI Frameworks, and the Python version of them may be different, which may cause package conflicts.**

:::info
1. To ensure that the data is complete, please store your **important data** in Hyper File System (HFS) and avoid storing it in the system directory.
2. If you install packages in home directory, we recommend using a Python package manager such as pipenv or Conda to avoid Python package conflicts.
3. For more information, please refer to [Hyper File System (HFS)](https://www.twcc.ai/doc?page=hfs).
:::

## How to install packages?
 
You should consider the above factors and choose the appropriate package installation path when using the Interactive Container:


- Installing in the system directory:

```bash=
sudo -s -H pip install {package name}
```
 
- Installing in the user's home directory:

```bash=
pip install　{package name} 
    
or
    
pip install {package name} --user
//The general user will install the package in the home directory .local by default
```


## Find the installation path of the package

- For the packages installed in the system directory:

```bash=
pip list
```

- For the packages installed in the `~/.local` folder in the user's home directory:

```bash=
pip list --user
```

## Recommended solutions when programs fail

Take TensorFlow as an example. Assume that the container created with the image TensorFlow 19.02 runs normally, but the container created with the newly released image of TWCC runs abnormally. It's usually because the Python package installed in home directory is carried to the new container, and that causes a package conflict. Please refer to the following methods to test and debug:

1. Check which Python packages are currently installed in the home directory (Optional)

```bash=
pip list --user
```
  
2. Manually move the packages away from the installation path temporarily, or remove the packages.

```bash=
mv ~/.local ~/local_backup
//Rename the package installation path to local_backup 
or
rm -rf ~/.local  
//!!!!Remove the packages!!!!Please be careful!!
```
 
3. Check again, if the path is clear, it returns nothing. (Optional)

```bash=
pip list --user
```

4. Refer to [How to install packages](##How-to-install-packages?), reinstall the suitable packages. Please choose an appropriate package installation path by yourself.

5. Run your program again to confirm whether the errors has been resolved.

:::info
If it still cannot be resolved, please contact Customer Service and provide all possible error messages or screenshots.
- Toll free: 0809-091-365
- Technical Support: isupport@narlabs.org.tw
:::


6. You can remove or rename the backed-up package directory by yourself, for example, rename it to `local/tensorflow-19.02-py3`. When using the original TensorFlow 19.02 container, you can manually rename the package directory to `.local` to restore the original installation package.


```bash=
mv ~/.local ~/local/localbackup
//Move programs from system directory /.local to /localbackup
or 
rm -rf ~/.local  
//!!!!Remove the packages!!!!Please be careful!!
```

```bash=
mv ~/local/tensorflow-19.02-py3 ~/.local
//Move the backed-up package directory back to .local (the default package installation path)
```