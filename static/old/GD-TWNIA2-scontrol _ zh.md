---
title: scontrol | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-zh %}

# scontrol

scontrol是用於查看和/或修改Slurm狀態的管理工具。請注意，許多scontrol命令只能以root用戶身份執行，因此只有管理人員可使用。scontrol使用來檢視和編輯Slurm 的設定，包含任務、任務步驟、節點、分區以及保留資源和系統設定等。大部分的指令只能透過最高權限管理者root來執行，如果有未認證的使用者使用此指令，將會產生錯誤訊息。

如果沒有在命令列上定義執行的指令，將會進入互動模式等待輸入直到退出，所有的指令都不區分大小寫，但節點名稱、分區名稱、以及保留名稱有區分大小寫。修改後的Slurm設定檔可以使用「scontrol write config」指令來寫入檔案，檔名將會是與slurm.conf同目錄下的「slurm.conf.<datetime>」，當中datetime 表示寫入時間，且該目錄必須要事先設定為可寫入的權限。通常一般使用者會使用「show <ENTITY> <ID>」的方式來查看特定項目的狀態，例如下面範例，使用scontrol顯示特定任務的狀態：

<div style="background-color:black;color:white;padding:20px;">

$ sbatch test.sh 
Submitted batch job 3144
$ scontrol show job 3144
JobId=3144 JobName=test.sh
   UserId=yiching709(12504) GroupId=TRI1072327(18712) MCS_label=N/A
   Priority=4294899365 Nice=0 Account=root QOS=normal
   JobState=RUNNING Reason=None Dependency=(null)
   Requeue=1 Restarts=0 BatchFlag=1 Reboot=0 ExitCode=0:0
   RunTime=00:00:03 TimeLimit=1-00:00:00 TimeMin=N/A
   SubmitTime=2018-12-15T18:38:40 EligibleTime=2018-12-15T18:38:40
   StartTime=2018-12-15T18:38:40 EndTime=2018-12-16T18:38:40 Deadline=N/A
   PreemptTime=None SuspendTime=None SecsPreSuspend=0
   LastSchedEval=2018-12-15T18:38:40
   Partition=SlurmDefault AllocNode:Sid=un-ln01:25095
   ReqNodeList=(null) ExcNodeList=(null)
   NodeList=gn0512.twcc.ai
   BatchHost=gn0512.twcc.ai
   NumNodes=1 NumCPUs=1 NumTasks=1 CPUs/Task=1 ReqB:S:C:T=0:0:*:*
   TRES=cpu=1,mem=771413M,node=1,billing=1
   Socks/Node=* NtasksPerN:B :S:C=0:0:*:* CoreSpec=*
   MinCPUsNode=1 MinMemoryNode=771413M MinTmpDiskNode=0
   Features=(null) DelayBoot=00:00:00
   Gres=(null) Reservation=(null)
   OverSubscribe=OK Contiguous=0 Licenses=(null) Network=(null)
   Command=/fs02/yiching709/test.sh
   WorkDir=/fs02/yiching709
   StdErr=/fs02/yiching709/slurm-3144.out
   StdIn=/dev/null
   StdOut=/fs02/yiching709/slurm-3144.out
   Power=

</div>