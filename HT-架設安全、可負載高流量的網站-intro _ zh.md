---
title: (Intro) HowTo：架設安全、可負載高流量的網站 | zh
tags: HowTo, VCS, ZH
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# HowTo：架設安全、可負載高流量的網站

:::success
<i class="fa fa-star" aria-hidden="true"></i> **適用情境：我的網頁伺服器同時間太多人存取會導致當機，該如何解決？**
*您是否也有相同的困擾？讓我們手把手帶您組合 TWCC 雲端服務架構，輕鬆解決您的問題！*
:::

本篇將示範教學如何運用 TWCC [**虛擬運算服務**](https://man.twcc.ai/@TWSC/doc-vcs-main-zh)建立 2 台相同的 [**NGINX**](https://www.nginx.com/) 網頁伺服器，並設定[**安全性群組**](https://man.twcc.ai/@TWSC/guide-vcs-sg-zh)，搭配[**負載平衡服務**](https://man.twcc.ai/@TWSC/guide-vcs-lbs-zh)、**SSL 憑證**，將使用流量請求分散至不同伺服器，使用單一對外 URL，**確保您的網頁伺服器資料安全傳輸，且不會因同時使用人數過多、連線流量過載而中斷您的網頁服務**。


## <i class="fa fa-backward" aria-hidden="true"></i> 點開第一部分，開始操作吧！