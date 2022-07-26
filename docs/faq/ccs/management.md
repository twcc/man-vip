# 管理容器

<details>

<summary> Q1. 如何暫停容器？ </summary>

目前系統不支援容器暫停的功能，您可依需求選擇任一節省計算成本的方案：
1. 您可製作容器複本保留工作環境，並刪除容器，待需要使用容器時再以複本建立新容器。
2. 您可參考[<ins>此文件</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-cli-ccs-automate-compute-delete-with-twccli-zh)，編寫腳本自動執行運算、刪除容器。

</details>


<details>

<summary> Q2. 我要如何將容器還原至初始狀態？ </summary>

進行以下操作即可將容器還原至初始狀態：

**Step 1.** 參考[<ins>程式執行異常的建議排除方式</ins>](https://man.twcc.ai/@twccdocs/doc-ccs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fccs-intactv-howto-zh#%E7%A8%8B%E5%BC%8F%E5%9F%B7%E8%A1%8C%E7%95%B0%E5%B8%B8%E7%9A%84%E5%BB%BA%E8%AD%B0%E6%8E%92%E9%99%A4%E6%96%B9%E5%BC%8F) 清空或搬移`/home/主機帳號/.local/` 目錄下之套件。  
**Step 2.** 進入 `/home/主機帳號/.cache/` 目錄，清除計算過程產生的暫存檔。  
**Step 3.** 若有安裝 Anaconda 或 Miniconda，也請移除或重新命名。  
**Step 4.** 重新建立一個新的容器，選擇映像檔類型時，請將滑鼠移至 <i class="fa fa-info-circle" aria-hidden="true"></i> ，提示內容將顯示 NGC 的網址，進入後即可找到每個映像檔的環境設定，選擇適合的映像檔。

</details>


<details>

<summary> Q3. 不同容器中的環境是否也不同？ </summary>

容器的儲存環境是[<ins>高速檔案系統 (HFS) </ins>](https://www.twcc.ai/doc?page=hfs)，用戶建立不同的容器，系統皆會自動將用戶的 HFS 掛載作為容器環境。

而 HFS 空間的生命週期是隨著用戶的主機帳號，因此只要是同一用戶建立的容器，環境都是相同的 HFS 空間。

</details>