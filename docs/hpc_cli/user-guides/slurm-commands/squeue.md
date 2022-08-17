---
sidebar_position: 10
---

# squeue
    
squeue顯示任務或任務集的狀態。它具有各種過濾，排序和格式選項。預設是按優先順序顯示正在運行的任務，然後按優先順序顯示正在等待的任務，是常用檢視任務的指令。範例如下：

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
    
$ squeue
JOBID  PARTITION  NAME  USER     ST   TIME  NODES NODELIST(REASON)
2980  SlurmDefa   test.sh  u9833157  PD  0:00    3   (ReqNodeNotAvail, UnavailableNodes:gn0101.twcc.ai,gn0102.twcc.ai,gn0103.twcc.ai)

</div>