---
sidebar_position: 12
sidebar_label: 'strigger'
slug: '/user-guides/twcc/twnia2-hpc-cli/slurm-strigger'
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-strigger-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-strigger-zh'
---

:::caution Under Construction

The English version of this document is under construction and will be available soon.

:::
    
strigger用於設置，取得或查看事件觸發器。事件觸發器包括節點關閉或任務接近其時間限制等事件。這些事件可能導致觸發執行任意腳本，經常用於提醒系統管理者節點故障，或者一個任務運行接近限制時間時，採用特定方式來安全結束特定程序，通常會使用節點清單(nodelist)或任務ID等參數來傳遞至特定程式內。此指令僅提供系統內具管理權限使用者使用，若要使用請洽本系統管理人員。