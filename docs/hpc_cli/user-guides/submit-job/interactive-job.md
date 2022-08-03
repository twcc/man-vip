---
sidebar_position: 6
---

# 互動型任務


前面介紹了如何使用「sbatch」進行任務提交，這是最常使用的方式，讓用戶將任務編寫為腳本進行提交。但實際上 Slurm 提供任務提交的方式也很多種，而使用「sbatch」最常見的問題，即是腳本中的某一行出現問題，就必須要反覆修改腳本才能夠順利跑完，這對於測試非常不方便，又或者所執行的內容需要與standout 進行互動才能夠跑的通，這時候使用「srun」與「salloc」是更好的方式，下面將分別介紹。

### salloc

salloc 從字面上就看得出來，就是指「slurm allocate」的縮寫，在解釋salloc之前，我們先回顧一下之前對於任務以及任務步驟的定義：

•	任務（Job）：傳統意義上任務是指運行某個腳本或程式，但以Slurm 來說，任務是指特定時間替用戶進行一次的資源申請與分配，讓用戶運行運算任務。

•	任務步驟（Job Step）：Slrum 有任務步驟的概念，可以理解為子任務，這個概念可以讓使用者在某個任務內拆分運算資源給不同子任務。

無論是sbatch、srun或是salloc，本質上都是向Slurm 控制器申請資源，來運行特定處理程序的一種行為，三者在提交時，對資源的指定參數都是一樣的，例如：

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ salloc -N 2 -n 2 -p SlurmDefault
salloc: Granted job allocation 3002

</div>


如果當下的資源充足的話，會顯示該資源已被分配(如上：salloc: Granted job allocation 3002)，使用者當下所在的環境是已被分配資源環境的shell 模式，這個新環境已經依據分配資源的參數設定了相關環境，詳細資訊可以透過「env」來查看，可以得到類似下的輸出。

```  
SLURM_NODELIST=gn1229.twcc.ai,gn1230.twcc.ai
LMOD_FAMILY_COMPILER_VERSION=7.3.0
SLURM_JOB_NAME=bash
MANPATH=/opt/ohpc/…/usr/share/man
HOSTNAME=un-ln01
_ModuleTable003_=PSJh…9wdWIvbW9kdWxlZmlsZXMiLH0=
SLURM_NODE_ALIASES=(null)
SHELL=/bin/bash
TERM=xterm-256color
SLURM_JOB_QOS=normal
HISTSIZE=1000
SSH_CLIENT=122.146.91.184 10045 22
LMOD_PKG=/opt/ohpc/admin/lmod/lmod
LMOD_VERSION=7.7.14
SSH_TTY=/dev/pts/0
__LMOD_REF_COUNT_LOADEDMODULES=autotools:1;prun/1.2:1;gnu7/7.3.0:1;openmpi3/3.1.0:1;ohpc:1
SLURM_NNODES=2
USER=yiching709
LS_COLORS=rs=0….axa=38;5;45:*.oga=38;5;45:*.spx=38;5;45:*.xspf=38;5;45:
LD_LIBRARY_PATH=/usr/local/cuda-9.0/lib64
SLURM_JOBID=3003
__LMOD_REF_COUNT__LMFILES_=/opt/ohpc/…/modulefiles/ohpc:1
SLURM_NTASKS=2
LMOD_PREPEND_BLOCK=normal
LMOD_FAMILY_MPI_VERSION=3.1.0
SLURM_TASKS_PER_NODE=1(x2)
PATH=/usr/local/cuda-9.0/bin…/usr/sbin:/usr/bin
MAIL=/var/spool/mail/user_account
_ModuleTable001_=X01vZH…udTcvNy4z
SLURM_JOB_ID=3003
LMOD_SETTARG_CMD=:
PWD=/home/user_account
_LMFILES_=/opt/ohpc/…/modulefiles/ohpc
LANG=en_US.UTF-8
MODULEPATH=/opt/ohpc/… /pub/modulefiles
LOADEDMODULES=autotools:prun/1.2:gnu7/7.3.0:openmpi3/3.1.0:ohpc
_ModuleTable_Sz_=3
SLURM_SUBMIT_DIR=/fs02/yiching709
SLURM_NPROCS=2
LMOD_CMD=/opt/ohpc/admin/lmod/lmod/libexec/lmod
HISTCONTROL=ignoredups
SLURM_JOB_NODELIST=gn1229.twcc.ai,gn1230.twcc.ai
HOME=/home/user_account
SHLVL=2
__LMOD_REF_COUNT_PATH=/opt/ohpc/…/ibutils/bin:1
SLURM_CLUSTER_NAME=default
SLURM_JOB_CPUS_PER_NODE=1(x2)
MPI_DIR=/opt/ohpc/pub/mpi/openmpi3-gnu7/3.1.0
_ModuleTable002_=LjAiL…YXR1cyJd
SLURM_SUBMIT_HOST=un-ln01
SHOST=un-ln01
__LMOD_REF_COUNT_INCLUDE=/opt/ohpc/pub/compiler/gcc/7.3.0/include:1
SLURM_JOB_PARTITION=SlurmDefault
BASH_ENV=/opt/ohpc/admin/lmod/lmod/init/bash
LOGNAME=user_name
SLURM_JOB_ACCOUNT=root
LC_CTYPE=UTF-8
SSH_CONNECTION=122.146.91.184 10045 172.28.31.1 22
SLURM_JOB_NUM_NODES=2
MODULESHOME=/opt/ohpc/admin/lmod/lmod
LESSOPEN=||/usr/bin/lesspipe.sh %s
LMOD_SETTARG_FULL_SUPPORT=no
__LMOD_REF_COUNT_LD_LIBRARY_PATH=/opt/ohpc/…/7.3.0/lib64:1
PKG_CONFIG_PATH=/opt/ohpc/pub/mpi/openmpi3-gnu7/3.1.0/lib/pkgconfig
LMOD_FULL_SETTARG_SUPPORT=no
LMOD_FAMILY_COMPILER=gnu7
__LMOD_REF_COUNT_PKG_CONFIG_PATH=/opt/ohpc/pub/mpi/openmpi3-gnu7/3.1.0/lib/pkgconfig:1
LMOD_DIR=/opt/ohpc/admin/lmod/lmod/libexec
__LMOD_REF_COUNT_MANPATH=/opt/ohpc/…/usr/share/man:1
SLURM_MEM_PER_NODE=771413
LMOD_COLORIZE=no
LMOD_FAMILY_MPI=openmpi3
BASH_FUNC_module()=() {  eval $($LMOD_CMD bash "$@") && eval $(${LMOD_SETTARG_CMD:-:} -s sh)
}
BASH_FUNC_ml()=() {  eval $($LMOD_DIR/ml_cmd "$@")
}
_=/usr/bin/env
```


如上，由於我們輸入的內容是「salloc -N 2 -n 2 -p SlurmDefault」，表示我們要兩台實體機器以及2個處理程序，可從「SLURM_NTASKS=2」，以及「SLURM_JOB_NUM_NODES=2」上看到對應的資訊。但使用salloc所使用的shell環境無法手動更改環境變數，因此在使用之前要決定好使用的資源。在shell內，可以直接使用下一小節的「srun」進行任務提交，根據此設置會有2個處理程序，所以會自動執行兩次：

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
    
$ srun date
Mon Dec 10 01:10:17 CST 2018
Mon Dec 10 01:10:17 CST 2018

</div>


若要退出當前環境資源，只要輸入「exit」 之後，就會退出並釋放資源，這就是salloc的使用方式，如下：

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
    
$ exit
exit
salloc: Relinquishing job allocation 3002

</div>


### srun

在上面介紹salloc的過程中，我們使用了 srun的指令，並看到一次輸出兩個date資訊，證明該指令同時執行了兩次。事實上在任務中直接透過srun執行指令才是slurm中使用多點資源的方式。srun不僅可以透過salloc使用，也可以直接在sbatch的腳本中使用srun。運行一個srun即是執行一個程序，完成之後就退出並釋放資源。範例如下：

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>
    
$ srun -N 2 -n 2 date
Mon Dec 10 01:32:00 CST 2018
Mon Dec 10 01:32:00 CST 2018

</div>

上述範例同salloc，不同的是，salloc執行完畢之後，資源還是沒有被釋放，而srun則是執行完畢之後，資源就釋出給其他任務使用。