---
sidebar_position: 11
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-ccs-gpu-burn-testing-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-ccs-gpu-burn-testing-zh' 
---

# 檢視運算資源概況－GPU Burn Testing


提供使用 GPU 壓力測試工具的教學，讓 GPU 在滿載的情況下，檢查 GPU 是否運作正常
最後的結果若為 `OK` 則代表 GPU 工作執行正常；`FAULTY` 則表示 GPU 出現問題

<br/>

## Step 1. 登入 TWCC

- 若尚無帳號，請參考 [註冊 TWCC 帳號](https://www.twcc.ai/doc?page=register_account)

<br/>

## Step 2. 建立開發型容器

- 請參考 [開發型容器](https://www.twcc.ai/doc?page=container#建立開發型容器) 建立開發型容器
- 映像檔類型請選擇 TensorFlow、映像檔選擇支援 Python 3 的版本、硬體選擇支援 1 顆 GPU 的設定即可

<br/>

## Step 3. 連線容器、下載訓練程式

- 使用 Jupyter Notebook 連線容器，開啟 Terminal

:::info
:book: [使用 Jupyter Notebook](https://www.twcc.ai/doc?page=container#使用-Jupyter-Notebook)
:::

- 輸入以下指令，將 [NCHC_GitHub](https://github.com/TW-NCHC/AI-Services/tree/V3Training) training 程式下載到容器

```bash
git clone https://github.com/TW-NCHC/AI-Services.git
```

<br/>

 
## Step 4. 進行 GPU Burn Testing

- 輸入以下指令，進入 **Tutorial_Two** 目錄

```bash
cd AI-Services/Tutorial_Two
```
 
- 輸入以下指令，下載 GPU_Burn 程式並開始執行

```bash
bash gpu_testing.sh
```

<br/>


## Step 5. 取得基礎運算資訊

- **檢視計算能力**<br/>
GPU 容器服務所使用之 GPU 皆為 NVIDIA V100 32GB，具有強大之計算能力。使用 gpu-burn 所測試之結果是具有 13198 Gflop/s能力

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cefd6041539673437d78918f9f444ed6.png)

- **監控資源運行狀況**

a. 容器使用者界面監控：GPU用量、記憶體使用量

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4e2d1540341ff81fef49dad87774f4c3.png)

b. 容器 Jupyter Notebook 之 Terminal 內：執行以下程式，可監控 GPU 溫度及電量

```bash
nvidia-smi
```

`GPU數量` 以編號 0 遞增顯示，下圖範例為 1 顆 GPU<br/>
`GPU溫度` 以攝氏溫度呈現，下圖範例為 31 度 C<br/>
`GPU電量` 以瓦數呈現，下圖範例為 43W<br/>

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_412e74892656a239328ed35fea78c191.png)