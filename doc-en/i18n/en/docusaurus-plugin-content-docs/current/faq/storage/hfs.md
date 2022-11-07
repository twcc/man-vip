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

<summary> Q4. How to share files to other users?</summary>

Please refer to <ins><a href = "https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Fhowto-hfs-share-files-between-user-accounts-zh)">this document</a></ins> and share it by uploading it to TWCC COS or by opening HFS file permissions.

</details>

<details>

<summary> Q5. How to purchase additional Hyper File System storage space?</summary>

For the price and purchasing method, please refer to the paragraph **View Details** and **HFS Storage Management Policy** in [<ins>this document</ins>](https://www.twcc.ai/doc?page=hfs).

</details>


<details>

<summary> Q6. What is the IP location of the Hyper File System?</summary>

203.145.219.101

</details>


<details>

<summary> Q7. The Hyper File System page shows that storage is almost full. How do I know which files occupy the storage space?</summary>

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

<summary> Q8. How long does it take for the additional purchase of the Hyper File System to take effect?</summary>

- After purchasing additional storage space in  [<ins>Member Center <i class="fa fa-question-circle fa-question-circle-for-service" aria-hidden="true"></i></ins>](https://man.twcc.ai/@twsdocs/howto-service-access-service-zh), wait for 15 minutes before you can use it.

</details>

<details>

<summary> Q9. Why is the used capacity in the Storage and Resource Usage page not reduced when I delete data from the Hyper File System (HFS)?</summary>

The used capacity shown on the page will take some time to update, please check the page again about 1-2 hours after deleting the file.

</details>

<details>

<summary> Q10. Why doesn't Jupyter Notebook free up space immediately after deleting a file?</summary>

- When you delete a file in the Jupyter notebook UI, the file is not deleted immediately, but is moved to `/home/<host account>/.local/share/Trash`.
- If you need to delete the file and free up space immediately, you need to run `rm -r /home/<host account>/.local/share/Trash` in a Jupyter Terminal, or connect to HFS and delete the file by [other means](https://man.twcc.ai/@twccdocs/doc-hfs-main-zh/%2F%40twccdocs%2Fguide-hfs-connect-to-data-transfer-node-zh) to free up space immediately.

</details>