---
sidebar_position: 1
sync_original_production: 'https://man.twcc.ai/@twccdocs/howto-vcs-lb-build-secure-web-handle-high-traffic-intro-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howto-vcs-lb-build-secure-web-handle-high-traffic-intro-zh'
---


# 架設安全、可負載高流量的網站


本篇將示範教學如何運用 TWCC [**虛擬運算服務**](../vcs/overview.md)建立 2 台相同的 [**NGINX**](https://www.nginx.com/) 網頁伺服器，並設定[**安全性群組**](../vcs/user-guides/security/security-group.md)，搭配[**負載平衡服務**](../vcs/user-guides/networking/load-balancing.md)、**SSL 憑證**，將使用流量請求分散至不同伺服器，使用單一對外 URL，**確保您的網頁伺服器資料安全傳輸，且不會因同時使用人數過多、連線流量過載而中斷您的網頁服務**。

## <i class="fa fa-backward" aria-hidden="true"></i> 點開第一部分，開始操作吧！
