---
sidebar_position: 2
title: 'TWCC FAQs | Hyper File System (HFS)'
sync_original_production: 'https://man.twcc.ai/@twccdocs/faq-hfs-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/faq-hfs-en'
---

# TWCC FAQs | Hyper File System (HFS)

<details>

<summary> Q1. Hyper File System storage is full, and some data is deleted, why the storage still remains the same?</summary>

- In the container or Taiwania 2 (HPC CLI) environment, execute the following command to view which files occupy the storage:
    ```
    du –sh Folder name
    ```
 
- The temporary files generated during the computing process may also be the cause of your full storage. Temporary files will be stored in the following two hidden directories:
    - /home/supercomputer account/.cache/ 
    - /home/supercomputer account/.local/ 
  
    You can switch to the above two directories and execute the following command to view the files in the directory: 
    ```
    ls -la
    ```  

</details>


<details>

<summary> 

Q2. Why can't I log into the data transfer node (xdata1.twcc.ai) with SFTP protocol?

</summary>

Please make sure that you use the SSH private key as the login credential, not your supercomputer password. If you confirm that the login credentials are correct but you still have problems logging in, please contact Customer Service.

</details>


<details>

<summary> Q3. How to upload files to HFS? </summary>

Please refer to <ins><a href = "https://www.twcc.ai/doc?page=hfs">this document</a></ins> to obtain the key through the container environment, and then use the SFTP client (e.g., FileZilla) to connect to the data transfer node (xdata1.twcc.ai).

</details>

<details>

<summary> Q4. How to purchase additional Hyper File System storage space?</summary>

For the price and purchasing method, please refer to the paragraph **View Details** and **HFS Storage Management Policy** in [<ins>this document</ins>](https://www.twcc.ai/doc?page=hfs).

</details>


<details>

<summary> Q5. What is the IP location of the Hyper File System?</summary>

203.145.219.101

</details>


<details>

<summary> Q6. The Hyper File System page shows that storage is almost full. How do I know which files occupy the storage space?</summary>

- In the container or Taiwania 2 (HPC CLI) environment, execute the following command to view which files occupy the storage:
    ```
    du –sh Folder name
    ```
 
- he temporary files generated during the computing process may also be the cause of your full storage. Temporary files will be stored in the following two hidden directories:
    - /home/supercomputer account/.cache/ 
    - /home/supercomputer account/.local/ 
  
    You can switch to the above two directories and execute the following command to view the files in the directory: 
    ```
    ls -la
    ```  

</details>


<details>

<summary> Q7. How long does it take for the additional purchase of the Hyper File System to take effect?</summary>

- After purchasing additional storage space in  [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh), wait for 15 minutes before you can use it.

</details>
