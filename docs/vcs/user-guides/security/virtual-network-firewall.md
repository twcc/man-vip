---
sidebar_position: 3
title: '基礎虛擬防火牆'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-vcs-vnf-zh'
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-vcs-vnf-zh'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_db2be9ff86eff33624e32feceedf17e7.png) 基礎虛擬防火牆


基礎虛擬防火牆服務提供簡單靈活的架構，在虛擬網路外創建防火牆，對網路內所有虛擬運算個體提供安全防護。

:::info
租戶管理員、租戶使用者對於虛擬運算個體使用權限之差異，請參考：[<ins>使用者角色與權限</ins>](https://man.twcc.ai/@twccdocs/role-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-netndsec-zh#%E5%9F%BA%E7%A4%8E%E8%99%9B%E6%93%AC%E9%98%B2%E7%81%AB%E7%89%86)。
:::

## 建立基礎虛擬防火牆

 * 進入「**基礎虛擬防火牆**」服務，在「**基礎虛擬防火牆管理**」頁面，點擊「**＋建立**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e953e190a41610e858a396e2f8431f7b.png)

:::tip
您可在「**所有服務**」點選服務左邊的星號 <i class="fa fa-star-o" aria-hidden="true"></i>，將常用的服務釘選至「**我的最愛**」，加速使用流程。
:::

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b31af2d0b12871b50d71bdfbf52646b3.png)


* 輸入名稱及描述，接著點擊「下一步：規則」。

:::tip
若安全性群組規則已有建立所需的規則，您可先跳過此步驟。在選擇網路後，在進階規則選擇虛擬運算個體 IP，即可將安全性群組規則自動同步至防火牆。
:::


* 點擊「**建立規則**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_fe39865423400771cab01818a0fb9f53.png)



* 在建立基礎虛擬防火牆規則視窗輸入防火牆規則設定資訊，完成後點擊「**確認**」。
    * 名稱：輸入防火牆規則名稱
    * 動作：透過下拉選單選取所需的防火牆動作，例如：allow (允許)、deny (拒絕)、reject (拒絕並回應)
    * 協定：可選取 tcp、icmp、udp
    * 終端 IP：輸入終端主機的 IP 位址 (受保護個體的私有 IP)
    * 終端埠：輸入終端埠
    * 來源 IP：輸入來源的 IP 位址
    * 來源埠：輸入來源埠   
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dc5e1fc63669854539bcc942eae82caf.png)

:::info
若不設定終端 IP、終端埠、來源 IP、來源埠，系統將預設為 Any。
:::


* 回到「**基礎虛擬防火牆管理**」頁面，即可看到剛建立的規則，接著點擊「**加入排序**」。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_7b397f60dd7f204b8eeefa073ae5f3de.png)

    
* 加入排序後，防火牆規則會被加入到下方列表中。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3dce3f76176808f6f02972be6c72ae24.png)



* 重複以上的步驟建立更多防火牆規則，亦可點擊防火牆規則列表，選擇加入相同計畫中已建立的防火牆規則。
    

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_47050a73ea93e08575f9ddc4c0c9c65c.png)



* 設定好規則後，可點選右側箭頭調整規則優先順序。完成後點擊「**下一步：網路**」。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_04fb17026ec3bc7af4ac697b76270b74.png)


:::info
排序越前面的規則，將覆寫排序後面的規則。
:::



:::caution
如未選擇任何防火牆規則，系統將預設防火牆規則為 deny all，拒絕所有流量。防火牆建立後，所有網段皆不可連線虛擬網路內已建立的的任一虛擬運算個體。
:::


* 選擇網路後，接著點擊「**下一步：進階規則**」，此步驟可將虛擬運算個體的安全性群組規則同步至防火牆，在防火牆也自動創建相對應的規則 (SyncRule)。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_faaeb1b8ab3bf7de05ae747e9d6f33d3.png)

:::info
防火牆僅對選取的虛擬網路內之個體作用，若不使用此虛擬網路建立之個體，將不受此防火牆防護。
:::


* 在進階規則頁面內，會列出虛擬網路下所有的虛擬運算個體的私有 IP 列表。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e31cd502b22e931ab490d4c334637372.png)


* 點擊列表中的虛擬運算個體可查看此個體建立的安全性群組規則，勾選欲使用之規則的虛擬運算個體私有 IP，接著點擊「**下一步：檢閱+建立**」。      
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4e2cf4c55560f38e5cbab61881ac2939.png)


    
* 檢視欲建立的防火牆資訊，按下「**建立**」即完成。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5f6595ea73799e805dc34beb3244f434.png)

    
* 建立完成的防火牆會出現在虛擬運算防火牆管理列表的最上方，點擊該列表，可查看防火牆詳細資料或編輯規則。
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_00cda3e43d970a8d3553cb7cc6a92bc1.png)

- 規格名稱包含 "SyncRule" 之規則，即是同步自安全性群組的規則。 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f1da708e1126b12047b400b659bf733e.png)



    
## 編輯防火牆規則       

* 在「**基礎虛擬防火牆詳細資料**」頁面，點擊「**編輯規則**」，可改變規則的優先順序或是删除規則。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b2352610c7c8c90a5201169da971d29.png)



   
* 即可在「**編輯規則**」視窗中調整規則的順序或是新增、删除規則，編輯好後點擊「**確認**」。  
    
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0a32c8b3217f41650022c5092fb565c8.png)


* 完成編輯後，防火牆的狀態會變成 **`PENDING_UPDATE`**。數分鐘後等狀態變成 **`ACITVE`**，即代表此防火牆設定已生效。

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_4fd245f3c9d0f43dd6e175dbd2939613.png)