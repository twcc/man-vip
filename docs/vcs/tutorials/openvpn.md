---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-setup-oepnvpn-client-to-site-vpn-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-setup-oepnvpn-client-to-site-vpn-zh' 
---

# 架設 OpenVPN 個體建立 Client-to-Site VPN 連線

此篇文章將教學如何於 TWCC 虛擬運算個體安裝 OpenVPN，由本地端電腦建立連線至跳板機的安全連線通道，再由跳板機連線至同虛擬網路內的其他個體。

:::info
以下虛擬運算個體以 Linux (Ubuntu) 為範例，本地端電腦則以 Windows 為操作範例。
:::

<br/>

## Step 1. 建立虛擬運算個體 (Linux)

:::info
以下步驟僅適用 Ubuntu18.04 以上版本之個體。
:::


請參考[建立虛擬運算個體](https://man.twcc.ai/@twccdocs/guide-vcs-create-zh)建立一台 Linux 虛擬運算個體，並設置公用 IP，作為架設 OpenVPN、連入其他無對外 IP 個體的跳板機。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_033ddd3ab83dd2de73d4667e9ab0eacd.png)

<br/>


## Step 2. 設定跳板機安全性群組
因 OpenVPN 預設採用 UDP 1194 埠做為通訊，請參考[安全性群組](https://man.twcc.ai/@twccdocs/guide-vcs-sg-zh)，將跳板機加入 Ingress UPD 1194 的安全性群組規則。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ed4e22e5d80b604ee707fc22eb00df90.png)

<br/>


## Step 3. 連線並安裝 OpenVPN

- [連線進入 Linux 個體](https://man.twcc.ai/@twccdocs/vcs-guide-connect-to-linux-from-windows-zh)，使用 `wget` 指令進行下載 OpenVPN 安裝腳本

```
wget https://git.io/vpn -O openvpn-ubuntu-install.sh
```

- 使用 chmod 命令設定權限，讓安裝腳本可順利執行

```
chmod -v +x openvpn-ubuntu-install.sh
```


- 執行腳本安裝 OpenVPN

```
sudo ./openvpn-ubuntu-install.sh
```

- 安裝過程中詢問對話皆可按 `Enter` 繼續

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_bcc0348c5c83b00ae5a67cb3b46c2bd9.png)


- 安裝完成後會產生 `clinet.ovpn` 檔，儲存在 /root 底下

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_35093692a150b6b37b2b59ddf9082503.png)


- 更改 `clinet.ovpn` 檔案路徑

```
sudo mv /root/client.ovpn /home/ubuntu
```


- 將 `clinet.ovpn` 下載至本地端電腦

![](https://i.imgur.com/8OqGSOr.png)

<br/>


## Step 4. 本地端安裝 OpenVPN Client

請在您的本地端電腦，下載並安裝完成 [OpenVPN Client](https://openvpn.net/vpn-client/)，以進行 VPN 連線。

<br/>


## Step 5. 啟動 VPN 連線

- 打開 OpenVPN 程式，將 Step 3. 下載的 `clinet.ovpn` 檔案，直接拖曳並匯入 FILE

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0052af78144363408630ea8ee7dd96f8.png)

- 拖曳完成後，點選「**CONNECT**」進行連線

![](https://i.imgur.com/uZD9gD1.png)


- 連線成功！

![](https://i.imgur.com/eec3eJT.png)

<br/>


## Step 6. 確認 VPN 加密連線已啟用

確認在 Step 5. 啟動 VPN 連線之下，本地端電腦可與跳板機、其他同虛擬網路內的個體私有 IP 連線，即 VPN 連線成功：

- 取得跳板機之「私有 IP」

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_9516eae28be233d2a2e32f4b9a11c0cc.png)


- 本地端電腦開啟 CMD，使用 ping 指令，確認可與跳板機私有 IP 連線

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1ac71acfda06dcfd2ab139742284e280.png)

- 也可以同時 ping 到同虛擬網路內的其他虛擬運算個體

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_309e93a516dbce476590ff44dd9568cb.png)
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_aa4f7abd06e48bbcf008b1e06c648eac.png)