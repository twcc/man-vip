---
tags: Test, Security Scan, ZH
title: 安全性評估 | zh
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}
{%hackmd @docsharedstyle/alpha-testing-zh %}

# 安全性評估<sup>`Beta`</sup>

本文目的在使租戶管理員能夠透過這份文件，在使用者網站上操作安全性評估服務 (Security Scan)。

## 訂閱服務

### Step 1. 進入安全性評估服務


登入 TWCC 後，請點選「**安全性評估**」。  


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_096954ffe228787a0b7d5fd9600f7ec8.png)



### Step 2. 訂閱安全性評估


進入服務後，訂閱方式分為兩種：

- 若您<ins>未曾訂閱</ins>安全性評估，請點選「**訂閱**」：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bcd0d0637746ae4f2f4dabfb26bcafac.png)


- 若您<ins>已訂閱過</ins>安全性評估，但目前狀態為退訂，請點選「**再訂閱**」：


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3328916bca413b6e572c9210dbd0e5a3.png)

再點選「**確認**」，即訂閱成功。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9c66185a0139757b1510784496d58962.png)



## 執行掃描

掃描分為兩種方式：[手動執行掃描](#手動執行掃描)、按排程 [自動執行掃描](#自動執行掃描)。

### 手動執行掃描

- Step 1. 點選「**建立**」按鈕

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a0313760fe5b5ee3dd60e307e81f631b.png)


- Step 2. 填入「**名稱**」、「**描述**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_84dcb06361c45d65d0e4c4a60a666352.png)

- Step 3. 選擇要掃描的單一虛擬網路 (例：`securityscantest`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_87d3fc2548c3a4dbb24a495c43626e3b.png)

- Step 4. 選擇掃描目標
 
可選擇虛擬網路上的單一或多個虛擬運算個體 (例：`test0819`、`test08192`)，設定完成後，點選「**下一步：排程 >**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_234f90482fae7b045c9cda4bd5796c3d.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4c36860fc8f71efaec1d6fa2882ae824.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2cb992eca90c0b8888345cbfa44e50ed.png)

- Step 5. 在排程頁面選擇「**手動執行**」，再點選「**下一步：檢閱+建立**」。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_16d2b5bbdddb2d34fbae51ff4cc8bfd2.png)


- 確認填入的資訊都無誤後，點選「**建立**」來建立掃描任務。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_786434d8cdd5e81a9cb83569f12050fb.png)

- 建立任務成功後，可以在「**安全性評估**」頁面看到新建立的任務。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_829fbe43102eddd9d5edbcd1faf10986.png)

- Step 6. 手動執行任務
 
勾選要執行的任務欄位後，按下「**啟動**」> 「**確認**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3887c393108b34200277148dcff85fa3.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a44f543b1631e4169c2ffc3206037edd.png)


當掃描開始執行後，任務會經過下列狀態：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_82d3fdb6ac2c6f51c0541b7c1c6d2ff6.png)

狀態轉為 **`Running`** 後即開始掃描：

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9eead5125593287c91f5197999fc22b9.png)

當掃描完成後，便可到 「**評估結果**」 頁面，可[檢視掃描報告](#檢視掃描報告)。

### 自動執行掃描

- 建立安全性評估，填寫基本資訊，完成後點選 「**下一步：排程**」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9aa5b7918e97a9550a3508df2fb8dbac.png)


- 進入到排程頁面後，選擇 「**指定排程時間**」 ，之後可以選擇要執行日期與時間，並且可選擇有循環週期 (每天或每周)，設定完成後，點選 「**下一步：檢閱 +建立**」


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b052b9f4825acf71caff410deeb1d309.png)

- 自動執行任務建立成功後，當排程時間一到，便會開始執行掃描。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c1562a3343faa2346ef5c74f49205670.png)

- 若使用者想將自動執行掃描更改為 手動執行掃描 ，點選 「**移除排程**」即可變為手動執行掃描。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f7f2c6dc834f184eea7e758b61516310.png)

- 移除後，循環 將顯示為 「**no**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_65ba9516a5b50ba953f09c9cf4e24a25.png)

## 檢視掃描結果

當掃描完成後，點選 「**評估結果**」 頁面後，可看到建立的評估名稱結果，並且點選該欄位觀看詳細結果。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_00f16fb416c76ad008a0d9077b8583d8.png)

點選後，可看到該報告的詳細內容，包含弱點、嚴重程度、該弱點是發生在哪個 IP 以及 Hostname。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_da0dc5268d40589c42e3f21b70fcdba2.png)

使用者可點選某項弱點資訊來檢視詳細弱點摘要、解法、常見漏洞。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4628e1f7cc92a138def54b80cc69cb69.png)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0682aaa405bfe6115587bbbaf2ef5f5e.png)

## 信件通知

當掃描完畢後，使用者會收到掃描完成的信件

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e6b4e121e9600a24f512f9bc458b19ab.png)


## 取消訂閱

點選「**取消訂閱**」按鈕後，便無法再新建掃描任務，但仍可在「**評估結果**」頁面檢視先前的結果報告。

:::danger

{%hackmd @docsharedstyle/important-zh %}

當取消訂閱後，該計畫下的排程任務將會取消。
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cb9162dc617d8c4dc417960adff25bd9.png)