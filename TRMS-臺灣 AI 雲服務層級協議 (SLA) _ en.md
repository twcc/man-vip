---
title: 臺灣 AI 雲服務層級協議 (SLA) | en
tags: Terms, EN
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}


# Taiwan Computing Cloud Service Level Agreement (SLA)

##### Version 2021/09/29 V5.0 |  [<ins>Prior version(s)</ins>](https://man.twcc.ai/@twccdocs/prior-sla-en)

This Taiwan Computing Cloud Service Level Agreement (this “SLA”) is an agreement between National Center for High-performance Computing, National Applied Research Laboratories (hereinafter as “NCHC”) and Customer with respect to the use of Taiwan Computing Cloud (hereinafter as “TWCC”). 

This SLA constitutes an integral part of TWCC Customer Agreement between NCHC and Customer. In the event of any inconsistency between the terms of this SLA and the terms of the TWCC Customer Agreement, the terms and provisions of this SLA shall govern and control, but only to the extent of such inconsistency.

From time to time NCHC will update the terms of this SLA on its official website, and the latest version shall apply to both parties.





## I. Definition


1.	**Downtime**: A period of time when Customer is unable to use Service. Downtime is measured based on server side error rate.
2.	**Service Credit**: a credit based on NTD. If Service applied does not meet SLO (defined as below), Customer may, in accordance with the terms and conditions of this SLA, apply for credit(s) to offset monthly service fee of affected service. 
3.	**Monthly Uptime Percentage**: total number of minutes in operating time minus the number of minutes of Downtime suffered in a calendar month, divided by the total number of minutes in operating time.




## II. Service Level Objective and Service Credit

1.	NCHC’s goal is to provide Service which Monthly Uptime Percentage is greater than or equal to a certain percentage (“Service Level Objective”, hereinafter as “SLO”); each percentage is specified as follows:


    | Service                                   | Percentage |
    | ----------------------------------------- | ---------- |
    | High-performance Computing (高速運算服務) | 99.9％     |
    | Container Compute Service (容器運算服務)  | 99.9％     |
    | Virtual Compute Service  (虛擬運算服務)   | 99.95％    |
    | Cloud Object Storage (雲端物件儲存)       | 99.95％    |
    | Hyper File System (高速檔案系統)          | 99.95％    |
    | Virtual Disk Service (虛擬磁碟服務)       | 99.95％    |
    | Internet Connection (網路連線)            | 99.95%     |

<br>

2. If Service applied does not meet SLO, Customer may apply for Service Credit according to Paragraph 3, Article II of this SLA. The quota of Service Credit is calculated by multiplying monthly service fee of affected service and percentage of Service Credit (as shown in the table below). If granted, such quota will be used to offset service fee for the next month. The percentage of monthly bill for the respective affected Service which does not meet SLO will be credited (“Percentage of Service Credit”) as followed:  

    | Monthly Uptime Percentage                     | Percentage of Service Credit | 
    | ----------------------------------------- | -------- | 
    | Less than 99.9% (but greater than or equal to 99.0%)          | 10%     | 
    | Less than 99.00% (but greater than or equal to 95.0%)         | 25%     | 
    | Less than 95.00%                           | 50%     | 

<br>

3.	Application of Service Credit.
- (1)  To receive Service Credits, Customer must notify NCHC technical support within 30 days from the time Customer becomes eligible to receive Service Credit. NCHC will make a resolution of the request based on all reasonably available information in good faith. If such request is approved, NCHC will calculate and offset monthly service fee within 60 days after receiving Customer’s notice.

- (2)  Given any of the following circumstances, NCHC may not provide Service Credit:
    - A.	Customer is not qualified for Service Credit; 
    - B.	Customer does not notice NCHC in accordance with the terms and regulations of this SLA;
    - C.	Customer is in breach of this SLA or TWCC Service Agreement; or
    - D.	Any other circumstances that Customer is deemed to be disqualified for Service Credit by NCHC. 


- (3)	Customer who orders Service from a reseller of NCHC must notify such reseller according to the same procedure to receive Service Credit. Customer whose application meets requirements of this SLA will receive Service Credit and offset of monthly service fee directly from the reseller; the reseller will receive Service Credit directly from NCHC.


4.	Limitation of Service Credit.
- (1)	Service Credit will be calculated based on service fee of affected service as agreed on the TWCC Service Agreement multiplied by Percentage of Service Credit. The total maximum number of Service Credit that occurs in a single month will not exceed the upper limit of the amount due by Customer for the applicable month. Customer shall not request NCHC to convert Service Credit into cash or any other refund form. 

- (2)	Service Credit is the sole and exclusive remedy for any claims related to SLO under this SLA. Customer shall not request reduction or refund of service fee already paid, nor shall Customer claim any other relief.   
 


## III.	SLA Exclusions

1.	**Excluded Downtime and Monthly Uptime Percentage**: 
    
    Any downtime caused by the following circumstances does not factor into the calculation of Downtime and/or Monthly Uptime Percentage: 
    
    - (1)	**Force Majeure or Factors Outside the Reasonable Control of both Parties**:
    
        Including but not limited to natural disaster, fires, floods, power-off, infectious diseases, changes of policies or laws, acts of terrorism, embargo, blockade, riots, lock outs or disorders, wars, or any other service suspension or termination, partly or in whole, caused by Force Majeure event.
    
    - (2)	**Factors not Attributable to NCHC**: 
    
        Failure caused by services, software or hardware not provided by NCHC, external network or device malfunction, or any other incidents caused by Customer’s equipment and/or third-party equipment that are not attributable to NCHC, including but not limited to abnormal power supply, service interruption or disruption resulting from inadequate bandwidth of internet operators.
    - (3)	**Customer’s Illegal Use, Breach of Contract or Inappropriate Behavior**:
        
        Such as Customer’s illegal or unauthorized behavior, Customer’s breach of TWCC Service Agreement or any other terms of use, or Customer’s use of Service that is inconsistent with NCHC’s suggestion, including but not limited to input wrong command or argument, or Customer’s attempt to perform operations that exceed prescribed quotas.

2.	**Protection and Restriction**: 
    
    If there is any suspected abuse of Service, NCHC may suspend or restrict Customer’s right to access Service. 

3.	**Regular Maintenance**: 
    
    NCHC may arrange facility maintenance, system check, patches update and any other maintenance operation. Shutdown due to maintenance   operation is expected to not exceed 24 hours within a calendar year. All maintenance operation will be announced 7 calendar days in advance. Once an announcement is made, Customer shall arrange its schedule accordingly. NCHC will not be liable to Customer for any claims arising as a consequence of Customer’s failure to comply with the foregoing obligation.




