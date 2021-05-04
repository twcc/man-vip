---
title: 確認節點狀態 | zh
tags: Guide, TWNIA2, TW
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}

# 確認節點狀態

前面介紹如何查看任務狀態，下面我們介紹如何查看節點狀態。跟查看任務狀態類似，節點狀態我們也可以透過指令來查看，透過指令的使用方式很簡單，但理解系統所顯示出來的結果較複雜，以下分為兩個子節說明。

### 相關指令

#### sinfo

查看節點資訊最簡單的方式就是直接使用「sinfo」指令，該指令會輸出當前系統的所有分區以及節點的基本狀態，如果只是想要快速查看一下可用的節點資訊，查看sinfo 所提供的資訊就足夠了。

可直接使用「sinfo」指令，查看以分區(partition)為主的瀏覽方式，查看每個分區的節點狀況，如下：

<div style="background-color:black;color:white;padding:20px;">

[yiching709@un-ln01 ~]$ sinfo
PARTITION     AVAIL TIMELIMIT  NODES  STATE NODELIST
SlurmDefault*    up  1-00:00:00      2  drain* gn0109.twcc.ai,gn1101.twcc.ai
SlurmDefault*    up  1-00:00:00    240  drain gn0101.twcc.ai,gn0102.twcc.ai,gn0103.twcc.ai,gn0104.twcc.ai,gn0105.twcc.ai,……,gn1221.twcc.ai,gn1222.twcc.ai,gn1223.twcc.ai,gn1224.twcc.ai,gn1225.twcc.ai,gn1226.twcc.ai,gn1227.twcc.ai,gn1228.twcc.ai
SlurmDefault*    up  1-00:00:00      7  idle gn0312.twcc.ai,gn0512.twcc.ai,gn0712.twcc.ai,gn1004.twcc.ai,gn1017.twcc.ai,gn1229.twcc.ai,gn1230.twcc.ai
SlurmDefault*    up  1-00:00:00      3  down gn0705.twcc.ai,gn1012.twcc.ai,gn1111.twcc.ai

</div>



上面的範例中，由於節點太多，故在 240 drain 的部分直接使用「……」省略部分節點名稱，實際上在使用時會顯示所有的節點名稱。除了使用「sinfo」查看以分區為主的資訊外，也可透過「sinfo -N」的方式查看每個節點所在的分區以及節點狀態。同樣也因為節點過多，文件範例以「…..」省略部分結果，但實際上透過指令打出來的結果，會顯示所有節點的資訊。

<div style="background-color:black;color:white;padding:20px;">

$ sinfo -N
NODELIST          NODES   PARTITION     STATE 
gn0101.twcc.ai      1       SlurmDefault*   drain 
gn0102.twcc.ai      1       SlurmDefault*   drain 
gn0103.twcc.ai      1       SlurmDefault*   drain 
gn0104.twcc.ai      1       SlurmDefault*   drain 
gn0105.twcc.ai      1       SlurmDefault*   drain 
……
gn1227.twcc.ai      1       SlurmDefault*   drain 
gn1228.twcc.ai      1       SlurmDefault*   drain 
gn1229.twcc.ai      1       SlurmDefault*   idle  
gn1230.twcc.ai      1       SlurmDefault*   idle

</div>

#### scontrol
如果像要查看更為詳細的節點資訊，則可以使用 scontrol 指令，使用該指令會輸出更詳細的資訊，包含該節點的資源使用狀態以及負載狀態、節點的系統資訊、軟體資訊等，如果想要透過 slurm 了解具體的資訊，建議使用此指令。使用方式為「scontrol show node <node_name>」，如下使用gn0101.twcc.ai 作為查看的節點範例：

<div style="background-color:black;color:white;padding:20px;">

$ scontrol show node gn0101.twcc.ai
NodeName=gn0101.twcc.ai Arch=x86_64 CoresPerSocket=18
   CPUAlloc=0 CPUErr=0 CPUTot=36 CPULoad=0.43
   AvailableFeatures=(null)
   ActiveFeatures=(null)
   Gres=gpu:8
   NodeAddr=gn0101.twcc.ai NodeHostName=gn0101.twcc.ai Version=17.11
   OS=Linux 3.10.0-862.el7.x86_64 #1 SMP Fri Apr 20 16:44:24 UTC 2018 
   RealMemory=772437 AllocMem=0 FreeMem=534061 Sockets=2 Boards=1
   CoreSpecCount=2 CPUSpecList=0-1 MemSpecLimit=1024
   State=IDLE+DRAIN ThreadsPerCore=1 TmpDisk=0 Weight=1 Owner=N/A MCS_label=N/A
   Partitions=SlurmDefault 
   BootTime=2018-10-16T20:45:48 SlurmdStartTime=2018-11-08T21:14:33
   CfgTRES=cpu=36,mem=772437M,billing=36,gres/gpu=8
   AllocTRES=
   CapWatts=n/a
   CurrentWatts=0 LowestJoules=0 ConsumedJoules=0
   ExtSensorsJoules=n/s ExtSensorsWatts=0 ExtSensorsTemp=n/s
   Reason=node-switch [root@2018-11-23T12:49:03]

</div>


### 節點狀態說明

Slurm 中的節點狀態很多，而且節點狀態由狀態和特殊服好兩部分構成。節點狀態中可能會有一個特殊的字符，後面加上該節點的狀態標誌，這樣組合起來的任務狀態就更複雜，新手想要理解會有一點難度，這邊說明如何查看節點狀態。


#### 特殊符號

- a.	「*」：表示節點目前沒有回應，不會將任何任務分配到該節點上。如果節點繼續沒有回應，該節點將可被系統設置為「DOWN」的狀態，但節點狀態為COMPLETING、DRAINED、DRAINING、RAIL、FAILING除外。
- b.	「~」：表示該節點處於節能模式下。
- c.	「#」：表示該節點正在被啟動，或者被控制節點配置中。
- d.	「$」：表示該節點正在被保留預約（maintenance）的狀態。
- e.	「@」：表示節點正在被安排重新啟動中。

#### 節點狀態


- a.	ALLOCATED：該節點已被分配給一個或多個任務。
- b.	ALLOCATED+：該節點已被分配給一個或多個任務，且一部份的任務正在處於完成過程中，表示當中有部分作業處於COMPLETING 的狀態。
- c.	COMPLETEING：與此節點相關的所有任務都處於完成的過程中，Slurm允許用戶指定任務完成後要執行的處理程序，當所有任務以及處理程序都完成且終止後，該狀態會被移除。 
- d.	DOWN：表示該節點不可被使用。例如節點的硬件出現故障時，Slurm 會自動將節點設為此狀態，系統管理員也可以手動將節點配置為此狀態。如果執行了某些恢復的操作，Slurm會自動使節點回歸服務中。
- e.	DRAINED：節點不接受用戶分配資源請求，通常是被系統管理員主動設置。
- f.	DRAINING：節點正在執行任務，但當前最後的任務執行完畢後，狀態將轉為DRAINED，即不再接受用戶資源分配的請求。
- g.	FAIL：節點不接受用戶分配資源請求，但原因是此節點有問題發生，與DRAINED 狀況不同。
- h.	FAILING：節點正在執行任務，但由於節點有問題，即將在特定時間點不再接受資源分配。
- i.	FUTURE：節點尚未完全被配置完成，預期在未來的某個時間點可以被使用，通常是被系統完全配置完成後。
- j.	IDLE：該節點可被使用，但尚未被分配任務。
- k.	MAINT：節點當前處於保留狀態。
- l.	REBOOT：節點正在準備重啟。
- m.	MIXED：該節點的資源有被部分分配。
- n.	PERFCTRS(NPC)：該節點被用於監控網路效能，因此無法配置資源給其他任務。
- o.	POWER_DOWM：該節點目前已被關閉電源，無法運行任何作業，該狀態是由省電模式的程序所設置。
- p.	POWER_UP：節點正在開機中，該狀態是由省電模式程序所設置。
- q.	RESERVED：該節點處於高級預留狀態，通常不可被分配資源。
- r.	UNKNOWN：Slurm 控制器啟動中，節點狀態尚不確定。

#### 狀態分類

以上狀態很多，但我們大概可分為四大項：

- 工作中：ALLOCATED、ALLOCATED+、COMPLETING、DRAINING、FAILING、MIXED
- 空閒：IDLE
- 不可用：DOWN、DRAINED、FAIL、FUTURE、MAINT、REBOOT、PERFCTRS、POWER_DOWM、POWER_UP、RESERVED，以及含 「#」、「$」、「@」任一字符
- 未知：UNKNOWN
