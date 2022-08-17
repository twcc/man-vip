---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-twnia2-compile-program-zh' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-twnia2-compile-program-zh' 
---

# 編譯程式


確認目前載入的編譯器種類

```bash
which mpicc
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0d8b6d7a916b2be09777f7a0bbb48ad8.png)

編譯程式

```bash
mpicc -o hello /opt/ohpc/pub/examples/mpi/hello.c
```

取得Slurm資源

```bash
salloc -N 4 -n 4 -p gtest
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6310501439063cb3b68b5163985ca9e4.png)

編寫執行環境內容（可參考/opt/ohpc/pub/examples/slurm/job.mpi ）

```bash
cat job.mpi
```

```bash
#!/bin/bash

#SBATCH -J test # Job name
#SBATCH -o job.%j.out # Name of stdout output file (%j expands to jobId)
#SBATCH -N 2 # Total number of nodes requested
#SBATCH -n 16 # Total number of mpi tasks requested
#SBATCH -t 01:30:00 # Run time (hh:mm:ss) - 1.5 hours
#Launch MPI-based executable
srun ./hello
```

執行程式

```bash
sbatch job.mpi
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1b644495fc3653d6cb7784cb630f2898.png)

查看執行輸出結果

```bash
cat job.3718.out
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_ea25136d13a86974b01b5dac93e9b6bc.png)

GPU測試程式編輯

```bash
# gpu.sh for GPU Resource Test
cat gpu.sh
```

```bash
#!/bin/bash
#SBATCH --ntasks 1 # number of tasks
#SBATCH -p SlurmDefault # queue
#SBATCH --mem 1024 # memory pool per process
#SBATCH -o slurm.%N.%j.out # STDOUT
#SBATCH -t 0:05:00 # time (D-HH:MM)
#SBATCH --gres=gpu:8
nvidia-smi
```

執行GPU測試程式

```bash
sbatch gpu.sh
```

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f6a739260889c13e50458c05293dc411.png)

查看執行輸出結果

```bash
cat slurm.gn0103.3732.out
```

```
Thu Dec 27 09:16:52 2018
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 410.79       Driver Version: 410.79       CUDA Version: 10.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|============================== + ==================== + =====================|
|   0  Tesla V100-SXM2...  On   | 00000000:1B:00.0 Off |                    0 |
| N/A   34C    P0    43W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   1  Tesla V100-SXM2...  On   | 00000000:1C:00.0 Off |                    0 |
| N/A   31C    P0    43W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   2  Tesla V100-SXM2...  On   | 00000000:3D:00.0 Off |                    0 |
| N/A   30C    P0    44W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   3  Tesla V100-SXM2...  On   | 00000000:3E:00.0 Off |                    0 |
| N/A   33C    P0    44W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   4  Tesla V100-SXM2...  On   | 00000000:B1:00.0 Off |                    0 |
| N/A   31C    P0    48W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   5  Tesla V100-SXM2...  On   | 00000000:B2:00.0 Off |                    0 |
| N/A   34C    P0    42W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   6  Tesla V100-SXM2...  On   | 00000000:DB:00.0 Off |                    0 |
| N/A   33C    P0    44W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
|   7  Tesla V100-SXM2...  On   | 00000000:DC:00.0 Off |                    0 |
| N/A   31C    P0    43W / 300W |      0MiB / 32480MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```