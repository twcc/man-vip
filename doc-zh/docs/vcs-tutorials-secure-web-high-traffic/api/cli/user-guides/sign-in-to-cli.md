---
sidebar_position: 2
title: '登入'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cli-signin-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cli-signin-zh'
---


# 登入 TWCC CLI

安裝完成後，請先準備**計畫的編號**、**API 金鑰 (登入憑證)**，並登入 TWCC CLI，以開始使用 TWCC 服務。

## 準備工作

### 1. 計畫編號

登入 [TWCC 入口網站](https://www.twcc.ai/)，於首頁確認使用計畫的「**計畫編號**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7ebe760b7bed64d7bf908352c9326cb0.png)



### 2. API 金鑰

- 點選右上角的「**使用者名稱**」，再點選「**API 金鑰管理**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1747c9e027ba1963896d7e8e77a373ad.png)


- 取得您的 API 金鑰，點選「<i class="fa fa-clone" aria-hidden="true"></i>」複製按鈕。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_497cc756c9516d0a13cbd2a2098b1fa6.png)


:::caution
 
為確保使用上的安全，請您：
- **避免使用主金鑰使用任何服務，並請勿將主金鑰外流**。
- 請時常更新您的金鑰 (刪除後再新建)。
:::


## 登入 TWCC CLI

- 輸入以下指令，並輸入「**TWCC API 金鑰**」與「**計畫編號**」，登入 TWCC CLI。

```bash
twccli config init
```

- 輸入語言、及其他參數設定
```bash
export LANG=C.UTF-8
export LC_ALL=C.UTF-8
export PYTHONIOENCODING=UTF-8
```

## 檢視用戶資訊

檢視用戶資訊、API 金鑰、使用計畫編號

```bash
twccli config whoami
```
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_357bb8bf5d9208b9e97187cbc56c58c9.png)


:::info

**如何更換使用計畫？**

執行以下指令刪除金鑰，並再次<ins>[登入 TWCC CLI](#登入-TWCC-CLI1)</ins>，便可輸入其他計畫之 API 金鑰，使用其他計畫。

```bash
rm -rf ~/.twcc_data
```
:::