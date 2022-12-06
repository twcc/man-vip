---
title: '進階安全'
sidebar_label: '進階安全'
slug: '/user-guides/twcc/vcs/ads'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-waf-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-waf-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 進階安全

:::caution
近期將對 ADS 服務進行定期維運及升級，功能或規格將可能因此變動。
造成使用不便請您海涵，非常謝謝您的支持！
若有相關問題請您洽詢isupport@twcc.ai技術服務支援。
:::

TWCC 進階安全提供國際知名商用的新世代防火牆與威脅防護功能，以保護您在 TWCC 上的應用程式與資料安全。

:::info
此功能需租戶管理員權限才可使用。
:::

## 準備工作

建立進階安全防火牆前，請您先建立以下資源：
1. 建立 2 段 [虛擬網路](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-vnw-zh)：信任網路與非信任網路

![](https://i.imgur.com/kboz5iR.png)


2. 建立[虛擬運算個體](https://man.twcc.ai/@twccdocs/doc-vcs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fguide-vcs-create-zh)：跳板機 1 台、受防火牆保護之個體數台 (以下稱 **受保護個體**，請選擇信任網路建立)


![](https://i.imgur.com/0dIX68J.png)


:::info
- 進階安全防火牆跨越 3 網段：
    1. **信任網路**：跳板機、受保護個體所屬網段 
    2. **非信任網路**：防火牆對外服務的網段
    3. **管理網路**：在防火牆建立後，將會自動建立管理網路，可透過此網路管理防火牆
- 跳板機：可作為受保護且無對外 IP 之個體連入之機器 
:::




## 建立進階安全防火牆

完成上方準備工作後，請參考以下步驟建立進階安全防火牆。

 * 進入「**進階安全**」服務，在「**進階安全**」管理頁面，點擊「**＋建立**」。

![](https://i.imgur.com/orqXaV3.png)



* 輸入基本資訊，如名稱、描述、選擇模板（mail、web、ssh、rdp）、映像檔及硬體設定，接著點擊「**下一步：網路>**」。

:::info
映像檔提供 8.1.15 及 9.1.9 版本。
:::


![](https://i.imgur.com/st5DVR1.png)



* 選擇私有網路 (即非信任網路) 及信任網路，接著點擊「**下一步：密碼>**」。


:::caution
私有網路與信任網路請避免選擇相同的網路，否則防火牆將無法正常使用。
:::


![](https://i.imgur.com/EKRogrv.png)




* 設定登入的密碼，接著點擊「**下一步：檢閱 + 建立>**」。

![](https://i.imgur.com/GcVRcax.png)



* 檢視建立進階安全的設定和預估使用額度，按下「**建立**」即完成。幾分鐘後等狀態變成 **`Ready`** 即建立完成。

![](https://i.imgur.com/OTRd0Sw.png)



### 檢視進階安全詳細資料

* 在「**進階安全**」頁面，點擊欲檢視的項目列表，即可檢視詳細資料。點擊上方按鈕，可對此項目進行啟動、停止、刪除及重新整理。


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a0bc304b750b5acc2bf1d17055d18a2b.png)


## 透過跳板機將個體納入防火牆保護範圍

防火牆建立完成後，請設定以下步驟 (以 Ubuntu 為例)，讓虛擬運算個體可受防火牆保護及控管。

1. 請從本機，將已下載的金鑰放入跳板機

```bash
scp -i [Key Pair name].pem  [Key Pair name].pem ubuntu@[jumpserver public ip]:/home/ubuntu/
```

2. 從本機連線進入跳板機，並更改金鑰權限、測試與受保護個體的連線

```bash
ssh -i [Key Pair name].pem ubuntu@[jumpserver public ip]
ls
sudo su -
chmod 400 [Key Pair name].pem
ssh -i [Key Pair name].pem ubuntu@[private ip of instance1 to be secured]  hostname
ssh -i [Key Pair name].pem ubuntu@[private ip of instance2 to be secured]  hostname
```



3. 將受保護個體的預設閘道指向防火牆

為形成保護網，此設定可讓流量先經過防火牆控管，再抵達受保護個體

- 輸入資訊，登入受保護的個體

```
ssh -i [Key Pair name].pem ubuntu@[private ip of instance to be secured]
```


- 安裝 net-tools，確認目前 routing default gateway

```
apt install net-tools
route -n
```

> ![](https://i.imgur.com/0RllNZq.png)


- 編輯 `rc-local.service`

```
echo -e '\n[Install]\nWantedBy=multi-user.target\nAlias=rc-local.service\n' >> /lib/systemd/system/rc-local.service
cat /lib/systemd/system/rc-local.service
```

- 新增 `/etc/rc.local`，並賦予執行權限

```
echo -e '#!/bin/sh -e\nsudo route add default gw [Private IP of firewall trusted network]\nsudo route del default gw [original default gateway]\nexit 0' > /etc/rc.local
chmod +x /etc/rc.local
chown ubuntu:ubuntu /etc/rc.local
```

:::info
您可於 **進階安全詳細資料** 頁取得 `Private IP of firewall trusted network` (IP 順序非固定)：

![](https://i.imgur.com/rvyjbJA.png)
:::


- 啟用並啟動 rc-local service

```
sudo systemctl enable rc-local
sudo systemctl start rc-local
```

- 建立 soft link 並重開機

```
sudo ln -s /lib/systemd/system/rc-local.service /etc/systemd/system/rc-local.service
```
:::info
若顯示 `file exists` 代表已建立過，即可執行重開機。
:::

```
sudo reboot
```


- 再次登入受保護個體並檢查結果

```
ssh -i [Key Pair name].pem ubuntu@[private ip of instance to be secured]
```
```
route -n
```

:::info
修改後的 default gateway 將會指向防火牆。
:::



## 登入 Web 管理介面 

* 在 **進階安全詳細資料** 頁面（如下圖），點擊 WEB 管理介面連結，登入 Web 管理介面，帳號是 `admin`，密碼是在建立進階安全防火牆時所設定的密碼。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0016b497215d208bbe9f0262dc1e06f3.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e81652b76b45dcbdf0928af3516c9af5.png)

:::info
更多進階安全的防火牆使用方法，請參考 [管理員指南](https://docs.paloaltonetworks.com/content/dam/techdocs/zh_TW/pdf/pan-os/8-1/pan-os-81-admin-guide-zh-tw.pdf)。
:::

<!-- 英文版：https://docs.paloaltonetworks.com/content/dam/techdocs/en_US/pdf/pan-os/8-1/pan-os-admin/pan-os-admin.pdf -->

## 案例教學：使用 TWCC ADS 建立 SSL VPN server

- [HowTo: Set up an SSL VPN server with TWCC ADS](https://man.twcc.ai/@twccdocs/howto-vcs-ads-setup-ssl-vpn-en)