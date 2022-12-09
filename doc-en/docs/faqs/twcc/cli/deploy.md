---
sidebar_position: 1
title: 'Deploy TWCC CLI'
slug: '/faqs/twcc/cli/deploy'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-cli-deploy-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-cli-deploy-zh'
---

# FAQs | TWCC CLI: Deploy the environment

<details>

<summary> Q1. How to install TWCC-CLI?</summary>

1. Use any Python package manager with the `$ pip install -U TWCC-CLI` command. Or, see [<ins>TWCC-CLI v0.5</ins>](https://github.com/TW-NCHC/TWCC-CLI/tree/v0.5) operation manual for installation and usage.
2. If you are using VCS instance created by image Ubuntu 20.04, TWCC-CLI has been installed in it by default, and can be used directly.

</details>


<details>

<summary> Q2. What environment does TWCC-CLI support?</summary>

[<ins>TWCC-CLI v0.5</ins>](https://github.com/TW-NCHC/TWCC-CLI/tree/v0.5) is a Python-based software tool, and has been tested in environments such as v2.7, v3.5, v3.6, v3.7.

</details>

<details>

<summary> Q3. How to fix credential error?</summary>

When credential error occurs, please run the following command to clear credential file, then [<ins>sign into TWCC CLI </ins>](https://man.twcc.ai/@twccdocs/guide-cli-signin-zh) again.

```bash
rm -rf $HOME/.twcc_data
```

</details>

<details>

<summary> Q4. How to deal with Python version error?</summary>

Python version error occurs when Python 3.6 is installed but the environment has been swiched to Python 2.7.
 
Please uninstall TWCC-CLI and reinstall it:

```bash
pip uninstall TWCC-CLI
pip install TWCC-CLI
```

</details>


<details>

<summary> 

Q5. What should I do when it occurs `'ascii' codec can't encode characters in position 610-612: ordinal not in range(128)`?

</summary>

This locale environment variables error might occur when updating CLI or reinstalling CLI. Please run the following command to set language environment:


```bash
export LANG=C.UTF-8
```

</details>


<details>

<summary> 

Q6. What should I do when it occurs `twccli: command not found` after installing?

</summary>

- If the error occurs after the installation is successful (as shown below):

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3bd9eb685a4f792a41dd61b5e067ae5f.png)

- Please check TWCC-CLI installation directory, and set the $PATH environment variable

```bash
sudo find / -name twccli
export PATH=path:$PATH
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_55b9287571e87ba62614291ad432d93c.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47e4050c06b225b87e77c370f89bc7f1.png)

</details>
