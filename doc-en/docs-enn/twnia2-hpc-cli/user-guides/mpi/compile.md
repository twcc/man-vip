---
sidebar_position: 2
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

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a3aa89ba639d5ddecb8ca1552d5b72ba.png)