---
tags: Guide, CLI, ZH
title: TWCC CLI 指令集 | zh
GA:
---

# TWCC CLI 指令集

:::warning
:information_source:  關於`twccli`指令與用途

|指令|用於|用途|
|--|--|--|
|`config`||TWCC-CLI環境部屬|
|`cp`|`cos`|上傳、下載檔案至雲端物件|
|`ls`|`ccs`|檢視開發型容器資訊|
||`vcs`|檢視虛擬運算資訊|
||`cos`|檢視雲端儲存體資訊|
|`mk`|`ccs`|建立開發型容器資訊|
||`vcs`|建立虛擬運算資訊|
||`cos`|建立雲端儲存體資訊|
|`net`|`ccs`|設定開發型容器網路服務|
||`vcs`|設定虛擬運算網路服務|
|`rm`|`ccs`|刪除開發型容器資訊|
||`vcs`|刪除虛擬運算資訊|
||`cos`|刪除雲端儲存體資訊|

詳細操作請參考`--help`
:::spoiler --help of config 
- `twccli config --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_2cc5dd9d7e80b9c2813d15f17dac1daa.png =55%x)


:::
:::warning
:information_source:  關於 CCS 指令與用途

|指令|用於|用途|
|--|--|--|
|`ls`|`ccs`|檢視開發型容器資訊|
|`mk`|`ccs`|建立開發型容器資訊|
|`net`|`ccs`|設定開發型容器網路服務|
|`rm`|`ccs`|刪除開發型容器資訊|

詳細操作請參考`--help`

:::spoiler --help of CCS 

- `twccli ls ccs --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_c719e1235da44fb505e4ec19a5950a28.png =85%x)

- `twccli mk ccs --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_905486b872a85a4e4e1ac5c6100faa8a.png =85%x)

- `twccli net ccs --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_07f6aa300b47fa0bdfd91b30678367b9.png =80%x)

- `twccli rm ccs --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_194ae697dfea242e984cb34f48203537.png =80%x)

:::
:::warning
:information_source:  容器複本只能做一次！！
:information_source:  關於 CCS 的容器副本操作指令與用途

|指令|用於| 參數 |用途|
|--|--|--| -- |
|`mk`|`ccs`| `-dup` `-tag` | 建立副本申請 |
|`ls`|`ccs`| `-dup` | 檢視副本申請 |



詳細操作請參考`--help`
:::
:::warning
:information_source:  關於 CCS 設定對外服務埠指令與用途

|指令|用於|用途|
|--|--|--|
|`ls`|`ccs`|檢視對外服務埠資訊|
|`net`|`ccs`|設定對外服務埠服務|


詳細操作請參考`--help`
::: 

:::warning
:information_source:  關於 VCS 指令與用途

|指令|用於|用途|
|--|--|--|
|`ls`|`vcs`|檢視虛擬運算個體資訊|
|`mk`|`vcs`|建立虛擬運算個體資訊|
|`net`|`vcs`|設定虛擬運算網路服務|
|`rm`|`vcs`|刪除虛擬運算個體資訊|

詳細操作請參考`--help`
:::spoiler --help of VCS
- `twccli ls vcs --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3d0a3df2cf92c9c585c004d84a533bad.png =85%x)

- `twccli mk vcs --help`

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4724690c3c3c48cdc14fb26aa58e861b.png =85%x)

- `twccli net vcs --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4789c3681506590fdf1fac7d23c1c25b.png =85%x)

- `twccli rm vcs --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a102f2cec6741d15ecd0270519ded89a.png =85%x)


::: 
:::warning
:information_source:  關於 VCS 的個體快照操作指令與用途

|指令|用於| 參數 |用途|
|--|--|--| -- |
|`mk`|`vcs`| `-snap` | 建立快照申請 |
|`ls`|`vcs`| `-snap` | 檢視快照申請 |
|`rm`|`vcs`| `-snap` | 移除快照 |


詳細操作請參考`--help`
:::    


:::warning
:information_source:  關於 VCS 的安全性群組操作指令與用途

|指令|用於| 參數 |用途|
|--|--|--| -- |
|`ls`|`vcs`| `-secg`*必要 / `-s`*必要 | 查詢安全性群組 |
|`net`|`vcs`|`-secg`*必要 / `-s`*必要 | 設定安全性群組 |
|`rm`|`vcs`|`-secg`*必要 / `-s`*必要 | 移除安全性群組 |


詳細操作請參考`--help`
:::   

:::warning
:information_source:  關於 COS 指令與用途

|指令|用於|用途|
|--|--|--|
|`cp`|`cos`|上傳、下載檔案至雲端儲存體|
|`ls`|`cos`|檢視雲端儲存體資訊|
|`mk`|`cos`|建立雲端儲存體資訊|
|`rm`|`cos`|刪除雲端儲存體資訊|

詳細操作請參考`--help`
:::spoiler --help of COS
- `twccli cp cos --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_00056d6bc7fc821ea3521af8a31473b4.png =85%x)
- `twccli ls cos --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_292db1744ae5314d0acde51f317d1f92.png =85%x)

- `twccli mk cos --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fcac2d87e7dfd56aedbe3173f27698a9.png =55%x)

- `twccli rm cos --help`
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_eb5a70645b2a5db86105618acabc53b6.png =85%x)


:::