---
title: 可用儲存資源 | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# 可用儲存資源

計算節點可透過高速網路存取[高速檔案系統 (HFS)](https://man.twcc.ai/@preview-twccdocs/doc-hfs-main-zh/%2F%40preview-twccdocs%2Fhfs-overview-zh)，為 PB 等級儲存空間，能夠針對大檔案能夠提供高吞吐量的 I/O，並對每筆資料快速存取操作，使用體驗佳。


| 儲存區域 | 掛載點 | 每位使用者免費空間容量 |
| -------- | -------- | -------- |
| 家目錄區域     | /home     |  100 GB :free: |
| 暫存工作區域     | /work     |  100 GB :free:|


## 家目錄區域 /home

家目錄空間可儲存私人檔案。可於此編輯程式、執行與管理計算工作 (job)。每位使用者在註冊 TWCC 帳號後皆有預設 100GB 的免費空間額度可使用。

## 暫存工作區域 /work

此區域提供的可儲存空間，主要是做為儲存用戶計算過程中的暫時資料。
每位使用者在註冊 TWCC 帳號後 /work 磁碟下皆預設有 100 GB 的免費空間額度可使用。

此空間為計算工作儲存設計，而非長期儲存用。為了維持 /work 穩定且高效的狀態，本中心將定期執行自動清除的工作。

:::danger

{%hackmd @docsharedstyle/important-zh %}

使用 HFS 請注意相關 [<ins>空間管理政策</ins>](https://man.twcc.ai/@preview-twccdocs/doc-hfs-main-zh/%2F%40preview-twccdocs%2Fterms-hfs-storage-mngmt-policies-zh)。

:::