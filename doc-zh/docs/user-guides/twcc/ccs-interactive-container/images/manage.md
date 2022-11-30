---
sidebar_position: 1
sidebar_label: '管理'
slug: '/user-guides/twcc/ccs-interactive-container/create-image'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-duplicate-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-duplicate-zh' 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 容器映像檔

TWCC 開發型容器複本提供您保存自行部署完成的容器映像檔，複本映像檔建立完成後，同計畫內的成員皆可以共享使用，所有軟體僅需安裝一次，提供您快速複製及部署相同工作環境的便利性。

此外，因容器建立後即持續計費，您也可使用複本保存容器設定，刪除原容器，待下回工作時再建立新的容器續用，節省開發成本。或是使用複本作為容器損壞的災難救援方案。


:::caution
1. 容器複本範圍不包含容器預設目錄 /home 與 /work 之資料，製作複本前請您留意套件安裝位置。Python 套件安裝注意事項請參考：[<ins>TWCC 開發型容器 - Python 套件安裝指南</ins>](../../tutorials/python-package-installation.md)。
2. 當您存放超過 10 GB 資料在容器系統目錄 (非[<ins>高速檔案系統 (HFS) 服務</ins>](/docs/hfs/overview.md)之 /home 或 /work 目錄)，進行容器複本時可能會有無法建立的情況。<br/>
您可以輸入 `df -h` 指令檢視容器系統目錄 `/` 已使用容量：
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eeeecf274c536f0c7c8ce65c910ec9a5.png)<br/>
如有任何問題請與我們的技術支援團隊或客服人員連絡，謝謝！
:::

<br/>


