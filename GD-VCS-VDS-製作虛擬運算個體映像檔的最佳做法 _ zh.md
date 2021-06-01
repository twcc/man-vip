---
title: 製作虛擬運算個體快照的最佳做法 | zh
tags: Guide, VCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# 建立虛擬運算個體映像檔的最佳做法

您可於多種情況下建立 [TWCC 虛擬運算個體映像檔](https://man.twcc.ai/@twccdocs/r1DhqHdpN?type=view#%E6%98%A0%E5%83%8F%E6%AA%94)，**但在建立前，請您執行以下工作以確保有效取得映像檔**：

- **[關機 (Shutdown)](#如何關機-shutdown？) 後再建立映像檔**，若個體狀態為 Ready 且仍有 I/O，建立所需時間較長，關機後再執行可確保製作時間不會過長。
- **若個體已設定自動掛載資料磁碟，建議指令[加上 "nofail" 選項](#如何加上-nofail-選項？)後再建立映像檔**，以確保使用映像檔回復之個體，可以正常啟動與連線。


## 如何關機 (shutdown)？

- SSH 連線進入虛擬運算個體後，執行關機指令即可將個體關機。 

```bash
$ sudo shutdown
```

- 關機完成後，個體狀態將顯示為 **`shutdown`**

:::warning
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d0a1329d89f244dfca9d602ef826b0dd.png)
:::

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
個體狀態與計費關係之說明，請參考[<ins>虛擬運算個體生命週期</ins>](https://www.twcc.ai/doc?page=concept-vcs-lifecycle)。
:::



## 如何加上 nofail 選項？

- 若您曾在 /etc/fstab 檔案內有設定自動掛載資料磁碟指令
(例：`/dev/vdb /mnt ext4 defaults`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_856cd2fa7cd4c6d40fe452e2502aafa9.png)

- 請您在原設定後方加上 `nofail` 選項，避免掛載資料磁碟作業錯誤，造成您以映像檔建立的個體無法正常啟動與連線，
(例：`,nofail,x-systemd.device-timeout=1m`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_95662b57c57e1a5e8a61ea55502359a8.png)