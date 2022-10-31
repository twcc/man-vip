---
sidebar_position: 4
title: '操作 TWCC 服務'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-cli-operate-twcc-service-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-cli-operate-twcc-service-zh'
---


# 使用 TWCC CLI 操作 TWCC 服務

TWCC CLI 可操作 TWCC 計畫資訊、開發型容器、虛擬運算服務、雲端物件儲存、高速檔案系統，相關功能持續優化並開發中。

以下說明如何參考 TWCC CLI 基本操作範例與詳細指令集資訊。


## 基本操作範例

相關 TWCC CLI 對 TWCC 服務的 **基本操作範例**，請於 [TWCC 手冊](https://www.twcc.ai/#doc) 選擇您欲操作的服務「使用指南」 (例：[開發型容器](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh))，並於手冊左側目錄搜尋主題，並選擇 **「TWCC CLI」** 的部分參考。


![](https://i.imgur.com/ioJVF7j.png)


<br/>

## 詳細指令集

TWCC CLI 詳細指令集請參考此文件：https://twcc-cli.readthedocs.io/en/latest/twccli-ch.html

參考步驟說明如下：
1. 選擇所需的動作指令 (見附註 1)
2. 選擇欲操作的服務/資源 (見附註 2)
3. 依輸入方式，搭配下方 Options、Arguments 輸入資訊 (見附註 3)

![](https://i.imgur.com/foKo7A8.png)


:::info

1. **動作指令與說明：**

| 動作指令 | 說明 | 
| -------- | -------- | 
| [ch](https://twcc-cli.readthedocs.io/en/latest/twccli-ch.html)    | 服務/資源變更    |
| [config](https://twcc-cli.readthedocs.io/en/latest/twccli-config.html)   | 設定 TWCC CLI 環境     |
| [cp](https://twcc-cli.readthedocs.io/en/latest/twccli-cp.html)    | 傳輸檔案     |
| [info](https://twcc-cli.readthedocs.io/en/latest/twccli-info.html)    | 取得資訊 (HFS、計畫與額度資訊)    |
| [ls](https://twcc-cli.readthedocs.io/en/latest/twccli-ls.html)    |  取得資訊 (其他服務/資源資訊)    |
| [mk](https://twcc-cli.readthedocs.io/en/latest/twccli-mk.html)    | 建立服務/資源     |
| [net](https://twcc-cli.readthedocs.io/en/latest/twccli-net.html)    | 管理服務/資源網路相關設定     |
| [rm](https://twcc-cli.readthedocs.io/en/latest/twccli-rm.html)    | 刪除服務/資源     |

2. **服務簡寫與全稱：**

| 服務簡寫 | 全稱 | 
| -------- | -------- | 
| ccs    | 開發型容器   |
| cos   | 雲端物件儲存     |
| hfs    | 高速檔案系統     |
| vcs    | 虛擬運算服務   |
| eip   | 彈性 IP `(VCS 相關)`     |
| key    | Key pairs - SSH 連線憑證 `(VCS 相關)`     |
| vlb   | 負載平衡 `(VCS 相關)`      |
| ssl    | SSL 憑證  `(VCS 相關)`     |
| vds   |  虛擬磁碟  `(VCS 相關)`    |
| vnet    | 虛擬網路   `(VCS 相關)`      |

3. Options 指令具「簡短版」與「完整版」 (例：`-s`、`--site-id`)，兩種指令意義相同，您可擇一使用。

:::

