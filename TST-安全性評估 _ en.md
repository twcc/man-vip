---
tags: Test, Security Scan, ZH
title: 安全性評估 | en
---


{%hackmd @docsharedstyle/default %}
{%hackmd @docsharedstyle/twccheader-en %}

# Security Scan

This document can help Tenant Admins operate the Security Scan service on TWCC portal.


## Subscribe the service

### Step 1. Enter Security Scan service


After you sign in TWCC, select **Secirity Scan** to enter the service management page.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_20921405901bd2d2c67bc45bdd0f7799.png)


### Step 2. Subscribe Security Scan


When you enter the service page, you can see one of the subscription buttons:

- If you <ins>have never subscribed</ins> to Security Scan, please click **SUBSCRIBE**:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_5152bec2af0674113f7e56127ac7bf6c.png)


- If you <ins>had subscribed </ins> to Security Scan but  unsubscribed it, please click **SUBSCRIBE AGAIN**:


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_771778e4ac298eaa2fb58fe859b6a1ce.png)


Then, click **OK** to confirm the subscription.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1cf5b8eab7c057d274f81a6cdc4f2ad3.png)



## Start to Scan

You can start the scan jobs with [manual execution](#Manual-execution) or [automatic execution at the specified schedule](#Automatic-execution-at-the-specified-schedule).

### Manual execution

- Step 1. Click **+ CREATE** button

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_523e1185d1cc3a15edc59f3b784b0898.png)


- Step 2. Specify a **Name** and **Description** for the job

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_cbf836740eb634d6ac0bbe2d916ae8f6.png)


- Step 3. Select a network to scan (e.g., `default_network`)

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_dc941d325f0b798eadb238135b372d51.png)


- Step 4. Select scan targets

You can select a single or multiple VCS intances (e.g., `test0819` and`test08192`) and click **NEXT: SCHEDULE >**.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_0885db090002b3100f9afb703dea818e.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_044d2d2c908f0d726bdd1bfaebc39ce5.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_f889036627c7ed1844ff23783fee79bf.png)



- Step 5. Select **Manual execute** on the SCHEDULE tab and then click **NEXT: REVIEW & CREATE>**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a113c4575c9ba0e3780a489ced8b8c2a.png)


- Click **CREATE** to confirm the setting and create the scan job.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1255bb0e21a50f641ed2d12f809d9d15.png)

- You can see the newly create jobs on the **Security Cloud** page.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_261beb902d7f8e23f5eba3470f4c09a9.png)



- Step 6. Manually execute
 
Select the desired jobs and click **START** > **OK** to start scanning.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b5fba4ad294aaf3c3bbabefd2754665.png)


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_54cef9ec6af375154050a71bba7a717e.png)



When the job starts, it transitions in the following states:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_84f3d17b01eb5dc53bf388ecf239894f.png)


The job starts to scan instances when it transitions to the **`Running`** state.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_45f3c7626fa5d65b516c2047e19382c4.png)


After the scan job is completed, you can view the [scan report](#View-scan-reports) on the **Evalutation Result** page.


### Automatic execution at the specified schedule

- Create the scan job and fill in the information in the BASICS tab, and click **NEXT: SCHEDULE** 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b84cc5e7738a59c8c0a8e813ea5bae85.png)



- Select **Specify schedule time** to set the start date and time, and you can set the scan cycle (every day or every week). When finished, click **NEXT: REVIEW & CREATE>**


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_3bdc5a29858b50c20f2806fd0124c0ab.png)


- After you create the scan job, the job will automatically start at the scheduled time.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_1edf83f335a9e63e480cce9195c7f6de.png)


- If you want to change the automatic job to a manual job, you can click **REMOVE SCHEDULE**

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_a2e0e392b7de2b1e1f673ab1499364a2.png)

- After you remove the schedule, the Schedule will display **no**.


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e4401d3eb97ad121db6937fd68e60efb.png)


## View scan reports

After the scan job is completed, you can go to **Evaluation Result** page, and elect a job to view the scan results, including vulnerability, severity, the instance IP and hostname.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_6e8a380639572d13062399b89334ec57.png)



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_caf819135ff4ce0d4ef7f0ac45c308d5.png)


You can select a vulnerability to check the summary of the weakness, solutions, and common vulnerabilities. 

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b4359f74eae18ee6fa7efc2fcafbf8ea.png)



![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_735414a482633d5af38f8bfd449068d5.png)



## Email notification

When the scan job is completed, you will receive the email notification.

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_e6b4e121e9600a24f512f9bc458b19ab.png)


## Cancel the subscription

Click the **CANCEL SUBSCRIPTION** button when you no longer need this service. After you cancel, you won't be able to create new scan jobs, but you can still check the previous results on the page.

:::danger

{%hackmd @docsharedstyle/important-en %}

When you cancel the subscription, all scheduled jobs in the project will be canceled.
:::


![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d09b4c6ad9de0db1fe3ad8b901542dc8.png)
