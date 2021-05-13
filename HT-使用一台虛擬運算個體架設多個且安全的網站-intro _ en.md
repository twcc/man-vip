---
title: (intro) HowTo：使用一台虛擬運算個體架設多個且安全的網站 | en
tags: HowTo, VCS, EN
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/eng-working-en %}

# HowTo：使用一台虛擬運算個體架設多個且安全的網站

:::success
<i class="fa fa-star" aria-hidden="true"></i> **案例情境： 如何在同一台虛擬運算個體，同個 IP 的情況下，架設多個有 SSL 加密的網站？** 

*您是否也有相同的困擾？讓我們手把手帶您組合 TWCC 雲端服務架構，輕鬆解決您的問題！*
:::

本文件教學如何使用 TWCC 虛擬運算服務，實作多網域架構，在一台虛擬運算個體與同一個 IP 位址之下，設定不同網域名稱指向不同網站，並結合 SSL 憑證，架設安全且多網域的網站服務。


> **建議環境： ```Ubuntu 20.04```，此文件不支援```Ubuntu 16.04```。**

## <i class="fa fa-backward" aria-hidden="true"></i> 點開第一部分，開始操作吧！