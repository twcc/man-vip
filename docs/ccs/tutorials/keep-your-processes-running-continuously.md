---
sidebar_position: 4
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-css-jupyter-add-python3-kernel-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-css-jupyter-add-python3-kernel-zh'
---

# Jupyter Notebook 增加 Python 3 kernel


TWCC 開發型容器預設提供 Jupyter Notebook，為透過網頁與使用者互動的整合型開發環境，能夠撰寫程式、顯示程式輸出內容、視覺化呈現資料...等多種功能，並可依需求安裝多種語言的運算核心 (Kernel)。

部分 TWCC 容器映像檔 (例：`caffe-19.08-py2:latest`)，Jupyter Notebook 僅提供 Python 2 kernel (如下圖)，本文將教學使用者如何新增 Python 3 Kernel，打造便利的運算環境。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0ab2cd237774e371c85e93ff63d1c96a.png)


## Step 1. 連線進入開發型容器

請參考[<ins>連線方式</ins>](https://man.twcc.ai/@twccdocs/SJlZnSOaN?type=view#%E4%BD%BF%E7%94%A8-Jupyter-Notebook)連線進入您的開發型容器。


## Step 2. 安裝 Python 3 Kernel

切換 root 身份，安裝 Python 3 kernel：

```bash
$ sudo su 
$ apt-get update     
$ apt-get install python3-pip
$ python3 -m pip install ipykernel  
$ python3 -m ipykernel install
```

## Step 3. 確認安裝完成

重新整理 Jupyter Notebook 頁面，按下右上角 「**New**」 下拉選單，確認有 Python 2 與 Python 3，即安裝完成！

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6a55e40d8c1f10531935436e3d7f7e63.png)

