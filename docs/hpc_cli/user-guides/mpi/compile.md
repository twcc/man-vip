---
sidebar_position: 2
---

# 編譯程式


確認目前載入的編譯器種類

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ which mpicc<br/>
/opt/ohpc/pub/mpi/mvapich2-gnu7/2.2/bin/mpicc

</div>

編譯程式

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ mpicc -o hello /opt/ohpc/pub/examples/mpi/hello.c

</div>

取得Slurm資源

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ salloc -N 4 -n 4 -p gtest<br/>
salloc: Granted job allocation 3718

</div>

編寫執行環境內容（可參考/opt/ohpc/pub/examples/slurm/job.mpi ）

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ cat job.mpi<br/>
#!/bin/bash<br/>

#SBATCH -J test         # Job name<br/>
#SBATCH -o job.%j.out   # Name of stdout output file (%j expands to jobId)<br/>
#SBATCH -N 2			# Total number of nodes requested<br/>
#SBATCH -n 16			# Total number of mpi tasks requested<br/>
#SBATCH -t 01:30:00		# Run time (hh:mm:ss) - 1.5 hours<br/>
#Launch MPI-based executable<br/>
srun ./hello

</div>

執行程式

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ sbatch job.mpi<br/>
Submitted batch job 3718

</div>

查看執行輸出結果

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ cat job.3718.out<br/>
MPIR_Init_thread(514):<br/>
MPID_Init(370).......:<br/>

 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>
 Hello, world (1 procs total)<br/>
    --> Process #   0 of   1 is alive. -> gn0312.twcc.ai<br/>

</div>

GPU測試程式編輯

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

#gpu.sh for GPU Resource Test<br/>
$ cat gpu.sh<br/>
#!/bin/bash<br/>
#SBATCH --ntasks 1          # number of tasks<br/>
#SBATCH -p SlurmDefault		# queue<br/>
#SBATCH --mem 1024          # memory pool per process<br/>
#SBATCH -o slurm.%N.%j.out	# STDOUT<br/>
#SBATCH -t 0:05:00			# time (D-HH:MM)<br/>
#SBATCH --gres=gpu:8<br/>
nvidia-smi<br/>

</div>

執行GPU測試程式

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ sbatch gpu.sh<br/>
Submitted batch job 3732

</div>

查看執行輸出結果

<div style={{'background-color':'black', 'color':'white', 'padding':'20px'}}>

$ cat slurm.gn0103.3732.out<br/>
Thu Dec 27 09:16:52 2018<br/>
+-----------------------------------------------------------------------------+<br/>
| NVIDIA-SMI 410.79       Driver Version: 410.79       CUDA Version: 10.0     |<br/>
|-------------------------------+----------------------+----------------------+<br/>
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |<br/>
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |<br/>
|=============================== + ====================== + ======================|<br/>
|   0  Tesla V100-SXM2...  On   | 00000000:1B:00.0 Off |                    0 |<br/>
| N/A   34C    P0    43W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
|   1  Tesla V100-SXM2...  On   | 00000000:1C:00.0 Off |                    0 |<br/>
| N/A   31C    P0    43W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
|   2  Tesla V100-SXM2...  On   | 00000000:3D:00.0 Off |                    0 |<br/>
| N/A   30C    P0    44W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
|   3  Tesla V100-SXM2...  On   | 00000000:3E:00.0 Off |                    0 |<br/>
| N/A   33C    P0    44W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
|   4  Tesla V100-SXM2...  On   | 00000000:B1:00.0 Off |                    0 |<br/>
| N/A   31C    P0    48W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
|   5  Tesla V100-SXM2...  On   | 00000000:B2:00.0 Off |                    0 |<br/>
| N/A   34C    P0    42W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
|   6  Tesla V100-SXM2...  On   | 00000000:DB:00.0 Off |                    0 |<br/>
| N/A   33C    P0    44W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
|   7  Tesla V100-SXM2...  On   | 00000000:DC:00.0 Off |                    0 |<br/>
| N/A   31C    P0    43W / 300W |      0MiB / 32480MiB |      0%      Default |<br/>
+-------------------------------+----------------------+----------------------+<br/>
                                                                               
+-----------------------------------------------------------------------------+<br/>
| Processes:                                                       GPU Memory |<br/>
|  GPU       PID   Type   Process name                             Usage      |<br/>
|=============================================================================|<br/>
|  No running processes found                                                 |<br/>
+-----------------------------------------------------------------------------+<br/>

</div>