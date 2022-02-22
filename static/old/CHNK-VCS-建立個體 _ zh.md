---
tags: Chunks, ZH
title: 建立個體 | zh
---
 
 * 進入「**虛擬運算**」服務，在「**虛擬運算個體管理**」頁面，點擊「**＋建立**」。
 
{%hackmd @twccdocs/ui-chunk-favorites-zh %}

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d01d3f3ce8149085f0247b35f5775c71.png)


* 選擇映像檔類型，TWCC 提供常用的 Linux、Windows 作業系統映像檔，方便個體建立後可以立即使用。您可瀏覽再選擇，或直接於左上方搜尋欲使用的映像檔名稱 (例：Ubuntu, Windows 10...等)。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_079f27fe174181a0a0b8768f085d7b24.png)



:::warning
{%hackmd @docsharedstyle/tip-zh %}
首次選用後，映像檔會記錄儲存於「**最近使用**」區塊，加快您下次選用的速度。(清除瀏覽器歷史紀錄將會重新記錄)


:::


* 在基本資訊頁面填寫虛擬運算個體的名稱及描述，選擇映像檔的版本及所需的硬體規格，包含 CPU 數量、記憶體容量、儲存容量及額度的不同組合，接著點擊「**下一步：網路>**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a9c38be5845bb4e9dfe9fa7b67f25b40.png)


* 在網路設定頁面選擇網路及開啟自動分配公用 IP 設定，可使用系統預設的 default_network 或自訂的虛擬網路。
* **預設為關閉自動分配公用 IP**。若需從虛擬網路外部連線個體，請您點選「**開啟**」以開啟自動分配公用 IP，並建議使用[<ins>安全性群組</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-sg-zh)保護個體安全與降低資安風險。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5a66054a77ebd706c1e63489871895c8.png)

:::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 
1. 首次使用請先建立預設虛擬網路 (default network)，操作步驟請參考：[<ins>HowTo：建立預設虛擬網路</ins>](https://man.twcc.ai/@twccdocs/howto-vnw-create-default-network-zh)。若有自訂虛擬網路之需求，請參考：[<ins>建立自訂虛擬網路</ins>](https://man.twcc.ai/@twccdocs/guide-vcs-vnw-zh)。
2. 建立虛擬網路僅限由「**租戶管理者**」操作，因此若您身份為「**租戶使用者**」，請您聯繫所屬計畫之「**租戶管理者**」協助操作。
:::


* 在儲存資訊頁面，設定外掛資料磁碟 大小（GB）及類型（提供 4 種磁碟類型：HDD、SSD、HDD 加密、SSD 加密）。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d9dafe55ac87c92b4b0c06678699c836.png)

:::danger
{%hackmd @twccdocs/vcs-asl-chunk-asl-with-disk-zh %}

:::

<!-- :::info
<i class="fa fa-paperclip fa-20" aria-hidden="true"></i> **附註：** 選擇使用附加 SSD 加密磁碟可加強您的資料安全性，但加密過程將可能略微影響存取效率。
::: -->