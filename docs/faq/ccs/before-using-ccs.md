# 使用之前

<details>

<summary> Q1. 怎麼使用超級電腦？ </summary>

TWCC 中有許多超級電腦的運算資源，您可以透過下列方式使用：

1. 開發型容器：您可參考[<ins>此文件</ins>](https://www.twcc.ai/doc?page=container)，建立快速部署的容器環境。
2. 高速運算服務：您可參考[<ins>此文件</ins>](https://www.twcc.ai/doc?page=hpc_cli)，連線進入高速運算節點，以 Command Line 的方式使用超級電腦資源，進行跨節點的高速運算。

</details>



<details> 

<summary> Q2. 如何開始使用容器？ </summary>

 
您可使用容器訓練 AI 模型並生成推論引擎，步驟參考如下：

**Step 1.** 參考[<ins>高速檔案系統文件</ins>](https://www.twcc.ai/doc?page=hfs)，將 AI 模型程式上傳到高速檔案系統，儲存於 `/home/主機帳號` 或 `/work/主機帳號` 目錄之下。
**Step 2.** 參考[<ins>開發型容器文件</ins>](https://www.twcc.ai/doc?page=container)，建立容器，並連線容器進行模型訓練。
**Step 3.** 訓練完成，可參考[<ins>高速檔案系統文件</ins>](https://www.twcc.ai/doc?page=hfs)，下載所需要的資料。
**Step 4.** 若要進行推論，可參考[<ins>HowTo文件</ins>](https://www.twcc.ai/doc?page=howto_ctn2)於容器內進行，或參考[<ins>虛擬運算文件</ins>](https://www.twcc.ai/doc?page=vm)，建立虛擬運算個體進行推論。

</details> 

