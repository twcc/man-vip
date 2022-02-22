---
title: 臺灣 AI 雲服務層級協議 (SLA)：歷史版本 | en
tags: Terms, EN
GA: UA-155999456-1
---

{%hackmd @docsharedstyle/default %}


# Taiwan AI Cloud Service Level Agreement (SLA)：Prior version(s)

:::spoiler Version 2021/04/01 V4.0

This Taiwan AI Cloud Service Level Agreement (this “SLA”) is an agreement between National Center for High-performance Computing, National Applied Research Laboratories (hereinafter as “NCHC”) and Customer with respect to the use of Taiwan AI Cloud (hereinafter as “TWCC”). 

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

:::

:::spoiler Version 2021/01/27 V3.0
##### Version 2021/01/27 V3.0

This Taiwan Computing Cloud Service Level Agreement (this “SLA”) is an agreement between National Center for High-performance Computing, National Applied Research Laboratories (hereinafter as “NCHC”) and Customer with respect to the use of Taiwan Computing Cloud (hereinafter as “TWCC”).  

This SLA constitutes an integral part of TWCC Customer Agreement between NCHC and Customer. In the event of any inconsistency between the terms of this SLA and the terms of the TWCC Customer Agreement, the terms and provisions of this SLA shall govern and control, but only to the extent of such inconsistency.

From time to time NCHC will update the terms of this SLA on its official website, and the latest version shall apply to both parties.




## I. Definition


1.	**Downtime**: A period of time when Customer is unable to use Service. Downtime is measured based on server side error rate.

2.	**Service Credit**: a credit based on NTD. If Service applied does not meet SLO (defined as below), Customer may, in accordance with the terms and conditions of this SLA, apply for credit(s) to offset monthly service fee of affected service.

3. **Monthly Uptime Percentage**: total number of minutes in operating time minus the number of minutes of Downtime suffered in a calendar month, divided by the total number of minutes in operating time.



## II. Service Level Objective and Service Credit

1.	NCHC’s goal is to provide Service which Monthly Uptime Percentage is greater than or equal to a certain percentage (“Service Level Objective”, hereinafter as “SLO”); each percentage is specified as follows:


    | Service                                  | Percentage |
    | ----------------------------------------- | ---------- |
    | High-performance Computing (高速運算服務) | 99.9％     |
    | Container Compute Service (容器運算服務)  | 99.95％     |
    | Virtual Compute Service  (虛擬運算服務)    | 99.95％    |
    | Cloud Object Storage (雲端物件儲存)      | 99.95％    |
    | Block Storage Service (區塊儲存)          | 99.95％    |
    | Internet Connection (網路連線)                                  | 99.95%     |

<br>

2.	If Service applied does not meet SLO, Customer may apply for Service Credit according to Paragraph 3, Article II of this SLA. The quota of Service Credit is calculated by multiplying monthly service fee of affected service and percentage of Service Credit (as shown in the table below). If granted, such quota will be used to offset service fee for the next month. The percentage of monthly bill for the respective affected Service which does not meet SLO will be credited (“Percentage of Service Credit”) as followed: 

    | Monthly Uptime Percentage                     | Percentage of Service Credit | 
    | ----------------------------------------- | -------- | 
    | Less than 99.9% (but greater than or equal to 99.0%)          | 10%     | 
    | Less than 99.00% (but greater than or equal to 95.0%)         | 25%     | 
    | Less than 95.00%                           | 50%     | 

<br>

3.	Application of Service Credit.
- (1)	To receive Service Credits, Customer must notify NCHC technical support within 30 days from the time Customer becomes eligible to receive Service Credit. NCHC will make a resolution of the request based on all reasonably available information in good faith. If such request is approved, NCHC will calculate and offset monthly service fee within 60 days after receiving Customer’s notice.

- (2)	Given any of the following circumstances, NCHC may not provide Service Credit:
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
:::

:::spoiler Version 2020/11/16 V2.0
##### Version 2020/11/16 V2.0

This Taiwan Computing Cloud Service Level Agreement (this “SLA”) is an agreement between National Center for High-performance Computing, National Applied Research Laboratories (hereinafter as “NCHC”) and Customer with respect to the use of Taiwan Computing Cloud (hereinafter as “TWCC”). 

This SLA constitutes an integral part of TWCC Customer Agreement between NCHC and Customer. In the event of any inconsistency between the terms of this SLA and the terms of the TWCC Customer Agreement, the terms and provisions of this SLA shall govern and control, but only to the extent of such inconsistency.

From time to time NCHC will update the terms of this SLA on its official website, and the latest version shall apply to both parties.


## I. Definition


1.	**Downtime:** A period of time when Customer is unable to use Service. Downtime is measured based on server side error rate.
2.	**Service Credit:** a credit based on NTD. If Service applied does not meet SLO (defined as below), Customer may, in accordance with the terms and conditions of this SLA, apply for credit(s) to offset monthly service fee of affected service. 
3.	**Monthly Uptime Percentage:** total number of minutes in operating time minus the number of minutes of Downtime suffered in a calendar month, divided by the total number of minutes in operating time.


## II. Service Level Objective and Service Credit

1.	NCHC’s goal is to provide Service which Monthly Uptime Percentage is greater than or equal to a certain percentage (“Service Level Objective”, hereinafter as “SLO”); each percentage is specified as follows:


    | Service                                  | Percentage |
    | ----------------------------------------- | ---------- |
    | High-performance Computing (高速運算服務) | 99.9％     |
    | Container Compute Service (容器運算服務)  | 99.9％     |
    | Virtual Compute Service  (虛擬運算服務)    | 99.99％    |
    | Cloud Object Storage (雲端物件儲存)      | 99.99％    |
    | Block Storage Service (區塊儲存)          | 99.99％    |
    | Internet Connection (網路連線)                                  | 99.95%     |

<br>

2.	If Service applied does not meet SLO, Customer may apply for Service Credit according to Paragraph 3, Article II of this SLA. The quota of Service Credit is calculated by multiplying monthly service fee of affected service and percentage of Service Credit (as shown in the table below). If granted, such quota will be used to offset service fee for the next month. The percentage of monthly bill for the respective affected Service which does not meet SLO will be credited (“Percentage of Service Credit”) as followed: 

    | Monthly Uptime Percentage                     | Percentage of Service Credit | 
    | ----------------------------------------- | -------- | 
    | Less than 99.9% (but greater than or equal to 99.0%)          | 10%     | 
    | Less than 99.00% (but greater than or equal to 95.0%)         | 25%     | 
    | Less than 95.00%                           | 50%     | 

<br>

3. Application of Service Credit:
    - (1) To receive Service Credits, Customer must notify NCHC technical support within 30 days from the time Customer becomes eligible to receive Service Credit. NCHC will make a resolution of the request based on all reasonably available information in good faith. If such request is approved, NCHC will calculate and offset monthly service fee within 60 days after receiving Customer’s notice.
       
    - (2) Given any of the following circumstances, NCHC may not provide Service Credit:
        - A. Customer is not qualified for Service Credit; 
        - B. Customer does not notice NCHC in accordance with the terms and regulations of this SLA;
        - C. Customer is in breach of this SLA or TWCC Service Agreement; or
        - D. Any other circumstances that Customer is deemed to be disqualified for Service Credit by NCHC. 
    
    - (3)	Customer who orders Service from a reseller of NCHC must notify such reseller according to the same procedure to receive Service Credit. Customer whose application meets requirements of this SLA will receive Service Credit and offset of monthly service fee directly from the reseller; the reseller will receive Service Credit directly from NCHC.

4.	Limitation of Service Credit:
    - (1) Service Credit will be calculated based on service fee of affected service as agreed on the TWCC Service Agreement multiplied by Percentage of Service Credit. The total maximum number of Service Credit that occurs in a single month will not exceed the upper limit of the amount due by Customer for the applicable month. Customer shall not request NCHC to convert Service Credit into cash or any other refund form. 
    
    - (2)	Service Credit is the sole and exclusive remedy for any claims related to SLO under this SLA. Customer shall not request reduction or refund of service fee already paid, nor shall Customer claim any other relief.  


## III.	SLA Exclusions

1.	Excluded Downtime and Monthly Uptime Percentage**: 
    
    Any downtime caused by the following circumstances does not factor into the calculation of Downtime and/or Monthly Uptime Percentage: 

    - (1)	**Force Majeure or Factors Outside the Reasonable Control of both Parties**:
    
        Including but not limited to natural disaster, fires, floods, power-off, infectious diseases, changes of policies or laws, acts of terrorism, embargo, blockade, riots, lock outs or disorders, wars, or any other service suspension or termination, partly or in whole, caused by Force Majeure event.
    - (2)	**Factors not Attributable to NCHC**: 
    
      Failure caused by services, software or hardware not provided by NCHC, external network or device malfunction, or any other incidents caused by Customer’s equipment and/or third-party equipment that are not attributable to NCHC, including but not limited to abnormal power supply, service interruption or disruption resulting from inadequate bandwidth of internet operators.
    - (3)	**Customer’s Illegal Use, Breach of Contract or Inappropriate Behavior**:
      
      Such as Customer’s illegal or unauthorized behavior, Customer’s breach of TWCC Service Agreement or any other terms of use, or Customer’s use of Service that is inconsistent with NCHC’s suggestion, including but not limited to input wrong command or argument, or Customer’s attempt to perform operations that exceed prescribed quotas.

2.	**Protection and Restriction**: If there is any suspected abuse of Service, NCHC may suspend or restrict Customer’s right to access Service. 

3.	**Regular Maintenance**: NCHC may arrange facility maintenance, system check, patches update and any other maintenance operation. Shutdown due to maintenance   operation is expected to not exceed 24 hours within a calendar year. All maintenance operation will be announced 7 calendar days in advance. Once an announcement is made, Customer shall arrange its schedule accordingly. NCHC will not be liable to Customer for any claims arising as a consequence of Customer’s failure to comply with the foregoing obligation.
:::

:::spoiler Version 2020/09 V1.3
##### Version 2020/09 V1.3

This Service Level Agreement (hereinafter "SLA", including previous versions of the agreement governing the use) for ”Taiwan Computing Cloud" (hereinafter "TWCC") platform services is a part of user and member's (hereinafter "Customer") National Center for High-performance Computing (hereinafter "NCHC") licensing agreement (hereinafter "Agreement"). This SLA does not apply to other branded services that are available with or connected to the services or to any on-premises software that is part of any service. Within the applicable scope of the SLA terms and during an effective period for Customer using TWCC, NCHC will provide Covered Service to TWCC Customer with a Monthly Uptime Percentage equal to or greater than 99.9% as Service Level Objective (hereinafter "SLO") below:

1. If NCHC does not meet the SLO, and if Customer meets the obligations under this SLA, Customer will be eligible for the monthly service fees within the Credit validity period. The Credit in a billing month for a particular service or service resource will not exceed monthly service fees for that service or service resource (as applicable) incurred in every billing month.

2. If NCHC does not meet the SLO, Credit is the only remedy available to Customer.

3. NCHC will not modify the terms of SLA during the initial term of Customer using TWCC, but NCHC reserves the right to change the terms of this SLA on the official website. When a dispute arises between two parties, the latest version of this SLA will be interpreted.

## New Definitions

Terms used but not defined in the SLA have the same meaning defined in the Agreement.

The following definitions apply to the SLA:

- **"Covered Service"** means all TWCC platform services provided by NCHC, including the components used in the cloud services.

- **"Downtime Period"** means a period of downtime that the average latency exceeds five seconds and lasts ten minutes in one day. Downtime that is less than ten minutes will not be counted towards a Downtime Period. Downtime is measured based on server side error rate.

- **"Credit"** means the following for the Covered Services (except as otherwise set forth in SLA terms)

    **Service Availability Standard***
    
    | Service Item               | Availability Standard |
    | -------------------------- | --------------------- |
    | High-performance Computing | 99.9％                |
    | Container Compute Service  | 99.9％                |
    | Virtual Compute Service    | 99.99％               |
    | Cloud Object Storage       | 99.99％               |
    | Block Storage Service      | 99.99％               |
    | Network Connection         | 99.95%                |

    | Monthly Uptime Percentage | Credit Percentage |
    | -------- | -------- |
    | Less than 99.99% (but equal to or greater than 99.0%) | 10% |
    | Less than 99.0% (but equal to or greater than 95.0%) | 25%
    | Less than 95.0% | 50% |
    
    :::info
    *The credits related terms in this SLA are not applied to services that are offered free of charge, and NCHC will ensure uninterrupted services as far as possible. The SLA terms associated with valid contracts are still applied to services provided to paid users.
    If you have any questions or concerns, please contact Customer Service.
    :::


- **"Monthly Uptime Percentage"** means a total number of minutes in a calendar month minus the number of minutes of downtime suffered from all Downtime Periods in a calendar month, divided by the total number of minutes in a calendar month.

- **"Scheduled Downtime"** means downtime that NCHC notifies to Customers for performing aperiodically service maintenance for environment. Scheduled Downtime will not be counted towards any Downtime Periods in this SLA.

## Limitations

- **SLA exclusions**: The SLA terms do not apply to any services that expressly exclude the SLA terms or any issues below causing services unavailability. None will be counted towards any Downtime Periods.

     - **Due to force majeure factors (e.g., natural disasters and deliberate attacks) that are not reasonably controllable**: including but not limited to fires, floods, atmospheric discharges, solar storms, winds, earthquakes, tsunamis, explosions, nuclear disasters, volcano activities, biological hazards, wars, acts of terrorism, government action or other natural and human-caused force majeure factors, and must suspend or interrupt all or part of the services;

    - **Due to incidents that are not attributable to NCHC**: issues resulting from the use of services, hardware, or software not provided by NCHC, including, but not limited to the abnormal power supply (e.g., annual repairs or power outages) by Taiwan Power Company, insufficient bandwidth by networking companies causing interruption and failed to provide connection or services, or performance or supply incidents of equipment related to Customer or third-party.

    - **Due to methods of use that are attributable to Customer**: Customer's unauthorized action or Customer's failure to follow acceptable use policy or terms of use, or methods of use that are not modified as NCHC advised, including, but not limited to faulty input of commands or arguments, and Customer's attempts to perform operations that exceed quota. 

- **Data protection and limitation:** If there is data abusive behavior to Customers' data stored in computing infrastructure, NCHC has the right of throttling.

- **Maintenance**: Aperiodically arranged maintenance, e.g., annual maintenance, system health checks, and patch updates. Announcements will be issued **seven days (excluding weekends and holidays)** before the commencement of all maintenance. Once an announcement is issued, it is Customer's responsibility for scheduling work to avoid being affected by the maintenance. There will be no more than twenty-four hours of Downtime Period for maintenance in a calendar year.

## Credits

1. To receive any of the Credits specified above, Customer must notify NCHC's technical support within thirty days from the time Customer becomes eligible for receiving a Credit or from the time the issue occurs. NCHC will evaluate all information reasonably available to NCHC and make a reasonable determination of whether a Credit is owed. If Customer does not adhere to these notification requirements or does not meet any Credit requirements as determined by NCHC, Customer will not have the right to receive a Credit.

2. NCHC will make commercially reasonable efforts to process claims eligible for the Credit description above, and issue Credits in any billing month within sixty days after receiving a notification. The Credit will be calculated based on the official price for the applicable service.

3. Customers who purchased services from a reseller should notify the reseller through the same notification procedure, and Customers will receive Credit from the reseller. Reseller's Credit will come from NCHC directly.

:::

:::spoiler Version 2020/06 V1.2
##### Version 2020/06 V1.2

This Service Level Agreement (hereinafter "SLA", including previous versions of the agreement governing the use) for ”Taiwan Computing Cloud" (hereinafter "TWCC") platform services is a part of user and member's (hereinafter "Customer") National Center for High-performance Computing (hereinafter "NCHC") licensing agreement (hereinafter "Agreement"). This SLA does not apply to other branded services that are available with or connected to the services or to any on-premises software that is part of any service. Within the applicable scope of the SLA terms and during an effective period for Customer using TWCC, NCHC will provide Covered Service to TWCC Customer with a Monthly Uptime Percentage equal to or greater than 99.9% as Service Level Objective (hereinafter "SLO") below:

1. If NCHC does not meet the SLO, and if Customer meets the obligations under this SLA, Customer will be eligible for the monthly service fees within the Credit validity period. The Credit in a billing month for a particular service or service resource will not exceed monthly service fees for that service or service resource (as applicable) incurred in every billing month.

2. If NCHC does not meet the SLO, Credit is the only remedy available to Customer.

3. NCHC will not modify the terms of SLA during the initial term of Customer using TWCC, but NCHC reserves the right to change the terms of this SLA on the official website. When a dispute arises between two parties, the latest version of this SLA will be interpreted.

## New Definitions

Terms used but not defined in the SLA have the same meaning defined in the Agreement.

The following definitions apply to the SLA:

- **"Covered Service"** means all TWCC platform services provided by NCHC, including the components used in the cloud services.

- **"Downtime Period"** means a period of downtime that the average latency exceeds five seconds and lasts ten minutes in one day. Downtime that is less than ten minutes will not be counted towards a Downtime Period. Downtime is measured based on server side error rate.

- **"Credit"** means the following for the Covered Services (except as otherwise set forth in SLA terms)

    **Service Availability Standard**
    
    | Service Item               | Availability Standard |
    | -------------------------- | --------------------- |
    | High-performance Computing | 99.9％                |
    | Container Compute Service  | 99.9％                |
    | Virtual Compute Service    | 99.99％               |
    | Cloud Object Storage       | 99.99％               |
    | Block Storage Service      | 99.99％               |
    | Network Connection         | 99.95%                |

    | Monthly Uptime Percentage | Credit Percentage |
    | -------- | -------- |
    | Less than 99.99% (but equal to or greater than 99.0%) | 10% |
    | Less than 99.0% (but equal to or greater than 95.0%) | 25%
    | Less than 95.0% | 50% |

- **"Monthly Uptime Percentage"** means a total number of minutes in a calendar month minus the number of minutes of downtime suffered from all Downtime Periods in a calendar month, divided by the total number of minutes in a calendar month.

- **"Scheduled Downtime"** means downtime that NCHC notifies to Customers for performing aperiodically service maintenance for environment. Scheduled Downtime will not be counted towards any Downtime Periods in this SLA.

## Limitations

- **SLA exclusions**: The SLA terms do not apply to any services that expressly exclude the SLA terms or any issues below causing services unavailability. None will be counted towards any Downtime Periods.

     - **Due to force majeure factors (e.g., natural disasters and deliberate attacks) that are not reasonably controllable**: including but not limited to fires, floods, atmospheric discharges, solar storms, winds, earthquakes, tsunamis, explosions, nuclear disasters, volcano activities, biological hazards, wars, acts of terrorism, government action or other natural and human-caused force majeure factors, and must suspend or interrupt all or part of the services;

    - **Due to incidents that are not attributable to NCHC**: issues resulting from the use of services, hardware, or software not provided by NCHC, including, but not limited to the abnormal power supply (e.g., annual repairs or power outages) by Taiwan Power Company, insufficient bandwidth by networking companies causing interruption and failed to provide connection or services, or performance or supply incidents of equipment related to Customer or third-party.

    - **Due to methods of use that are attributable to Customer**: Customer's unauthorized action or Customer's failure to follow acceptable use policy or terms of use, or methods of use that are not modified as NCHC advised, including, but not limited to faulty input of commands or arguments, and Customer's attempts to perform operations that exceed quota. 

- **Data protection and limitation:** If there is data abusive behavior to Customers' data stored in computing infrastructure, NCHC has the right of throttling.

- **Maintenance**: Aperiodically arranged maintenance, e.g., annual maintenance, system health checks, and patch updates. Announcements will be issued **seven days (excluding weekends and holidays)** before the commencement of all maintenance. Once an announcement is issued, it is Customer's responsibility for scheduling work to avoid being affected by the maintenance. There will be no more than twenty-four hours of Downtime Period for maintenance in a calendar year.

## Credits

1. To receive any of the Credits specified above, Customer must notify NCHC's technical support within thirty days from the time Customer becomes eligible for receiving a Credit or from the time the issue occurs. NCHC will evaluate all information reasonably available to NCHC and make a reasonable determination of whether a Credit is owed. If Customer does not adhere to these notification requirements or does not meet any Credit requirements as determined by NCHC, Customer will not have the right to receive a Credit.

2. NCHC will make commercially reasonable efforts to process claims eligible for the Credit description above, and issue Credits in any billing month within sixty days after receiving a notification. The Credit will be calculated based on the official price for the applicable service.

3. Customers who purchased services from a reseller should notify the reseller through the same notification procedure, and Customers will receive Credit from the reseller. Reseller's Credit will come from NCHC directly.

:::

:::spoiler Version 2019/11 V1.1

##### Version 2019/11 V1.1

This Service Level Agreement (hereinafter "SLA", including previous versions of the agreement governing the use) for ”Taiwan Computing Cloud" (hereinafter "TWCC") platform services is a part of user and member's (hereinafter "Customer") National Center for High-performance Computing (hereinafter "NCHC") licensing agreement (hereinafter "Agreement"). This SLA does not apply to other branded services that are available with or connected to the services or to any on-premises software that is part of any service. Within the applicable scope of the SLA terms and during an effective period for Customer using TWCC, NCHC will provide Covered Service to TWCC Customer with a Monthly Uptime Percentage equal to or greater than 99.9% as Service Level Objective (hereinafter "SLO") below:

1. If NCHC does not meet the SLO, and if Customer meets the obligations under this SLA, Customer will be eligible for the monthly service fees within the Credit validity period. The Credit in a billing month for a particular service or service resource will not exceed monthly service fees for that service or service resource (as applicable) incurred in every billing month.

2. If NCHC does not meet the SLO, Credit is the only remedy available to Customer.

3. NCHC will not modify the terms of SLA during the initial term of Customer using TWCC, but NCHC reserves the right to change the terms of this SLA on the official website. When a dispute arises between two parties, the latest version of this SLA will be interpreted.

## New Definitions

Terms used but not defined in the SLA have the same meaning defined in the Agreement.

The following definitions apply to the SLA:

- **"Covered Service"** means all TWCC platform services provided by NCHC, including the components used in the cloud services but excluding the hardware, networking and operation systems.

- **"Downtime Period"** means a period of downtime that the average latency exceeds five seconds and lasts ten minutes in one day. Downtime that is less than ten minutes will not be counted towards a Downtime Period. Downtime is measured based on server side error rate.

- **"Credit"** means the following for the Covered Services (except as otherwise set forth in SLA terms)

    **Service Availability Standard**
    
    | Service Item               | Availability Standard |
    | -------------------------- | --------------------- |
    | High-performance Computing | 99.9％                |
    | Container Compute Service  | 99.9％                |
    | Virtual Compute Service    | 99.99％               |
    | Cloud Object Storage       | 99.99％               |
    | Block Storage Service      | 99.99％               |
    | Network Connection         | 99.95%                |

    | Monthly Uptime Percentage | Credit Percentage |
    | -------- | -------- |
    | Less than 99.99% (but equal to or greater than 99.0%) | 10% |
    | Less than 99.0% (but equal to or greater than 95.0%) | 25%
    | Less than 95.0% | 50% |

- **"Monthly Uptime Percentage"** means a total number of minutes in a calendar month minus the number of minutes of downtime suffered from all Downtime Periods in a calendar month, divided by the total number of minutes in a calendar month.

- **"Scheduled Downtime"** means downtime that NCHC notifies to Customers for performing aperiodically service maintenance for environment. Scheduled Downtime will not be counted towards any Downtime Periods in this SLA.

## Limitations

- **SLA exclusions**: The SLA terms do not apply to any services that expressly exclude the SLA terms or any issues below causing services unavailability. None will be counted towards any Downtime Periods.

     - **Due to force majeure factors (e.g., natural disasters and deliberate attacks) that are not reasonably controllable**: including but not limited to fires, floods, atmospheric discharges, solar storms, winds, earthquakes, tsunamis, explosions, nuclear disasters, volcano activities, biological hazards, wars, acts of terrorism, government action or other natural and human-caused force majeure factors, and must suspend or interrupt all or part of the services;

    - **Due to incidents that are not attributable to NCHC**: issues resulting from the use of services, hardware, or software not provided by NCHC, including, but not limited to the abnormal power supply (e.g., annual repairs or power outages) by Taiwan Power Company, insufficient bandwidth by networking companies causing interruption and failed to provide connection or services, or performance or supply incidents of equipment related to Customer or third-party.

    - **Due to methods of use that are attributable to Customer**: Customer's unauthorized action or Customer's failure to follow acceptable use policy or terms of use, or methods of use that are not modified as NCHC advised, including, but not limited to faulty input of commands or arguments, and Customer's attempts to perform operations that exceed quota. 

- **Data protection and limitation:** If there is data abusive behavior to Customers' data stored in computing infrastructure, NCHC has the right of throttling.

- **Maintenance**: Aperiodically arranged maintenance, e.g., annual maintenance, system health checks, and patch updates. Announcements will be issued **seven days (excluding weekends and holidays)** before the commencement of all maintenance. Once an announcement is issued, it is Customer's responsibility for scheduling work to avoid being affected by the maintenance. There will be no more than twenty-four hours of Downtime Period for maintenance in a calendar year.

## Credits

1. To receive any of the Credits specified above, Customer must notify NCHC's technical support within thirty days from the time Customer becomes eligible for receiving a Credit or from the time the issue occurs. NCHC will evaluate all information reasonably available to NCHC and make a reasonable determination of whether a Credit is owed. If Customer does not adhere to these notification requirements or does not meet any Credit requirements as determined by NCHC, Customer will not have the right to receive a Credit.

2. NCHC will make commercially reasonable efforts to process claims eligible for the Credit description above, and issue Credits in any billing month within sixty days after receiving a notification. The Credit will be calculated based on the official price for the applicable service.

3. Customers who purchased services from a reseller should notify the reseller through the same notification procedure, and Customers will receive Credit from the reseller. Reseller's Credit will come from NCHC directly.

:::


:::spoiler Version 2019/10 V1.0

##### Version 2019/10 V1.0

This Service Level Agreement (hereinafter "SLA", including previous versions of the agreement governing the use) for ”Taiwan Computing Cloud" (hereinafter "TWCC") platform services is a part of user and member's (hereinafter "Customer") National Center for High-performance Computing (hereinafter "NCHC") licensing agreement (hereinafter "Agreement"). This SLA does not apply to other branded services that are available with or connected to the services or to any on-premises software that is part of any service.

Within the applicable scope of the SLA terms and during an effective period for Customer using TWCC, NCHC will provide Covered Service to TWCC Customer with a Monthly Uptime Percentage equal to or greater than 99.9% as Service Level Objective (hereinafter "SLO") below:

1. If NCHC does not meet the SLO, and if Customer meets the obligations under this SLA, Customer will be eligible for the Credits specified below. The Credit in a billing month for a particular service or service resource will not exceed monthly service fees for that service or service resource (as applicable) in every billing month.

2. If NCHC does not meet the SLO, Credit is the only remedy available to Customer.

3. NCHC will not modify the terms of SLA during the initial term of Customer using TWCC, but NCHC reserves the right to change the terms of this SLA on the official website. When a dispute arises between two parties, the latest version of this SLA will be interpreted.

## New Definitions

Terms used in this SLA but not defined in this SLA have the same meaning defined in the Agreement.

The following definitions apply to the SLA:

- **"Covered Service"** means all TWCC platform services provided by NCHC, including the components used in the cloud services.

- **"Downtime"** means average latency exceeds five seconds in one day. Downtime is measured based on server side error rate.

- **"Downtime Period"** means a period of ten consecutive minutes of Downtime. Downtime that is less than ten minutes will not be counted towards a Downtime Period.

- **"Credit"** means the following for the Covered Services (except as otherwise set forth in SLA terms)

    | Monthly Uptime Percentage | Credit Percentage |
    | -------- | -------- |
    | Less than 99.99% (but equal to or greater than 99.0%) | 10% |
    | Less than 99.0% (but equal to or greater than 95.0%) | 25%
    | Less than 95.0% | 50% |

- **"Monthly Uptime Percentage"** means a total number of minutes in a calendar month minus the number of minutes of Downtime suffered from all Downtime Periods in a calendar month, divided by the total number of minutes in a calendar month.

- **"Scheduled Downtime"** means the times that NCHC notifies Customers of periods of Downtime seven days before commencing such Downtime. There will be no more than twenty-four hours of Scheduled Downtime in any calendar year. Scheduled Downtime is not Downtime in this TWCC SLA, and will not be counted towards any Downtime Periods.

    | Covered Service | Availability Standard |
    | -------- | -------- | 
    | High-performance Computing | 99.9％ |
    | Container Compute Service | 99.9％ |
    | Virtual Compute Service | 99.99％ |
    | Cloud Object Storage | 99.99％ |
    | Block Storage Service | 99.99％ | 

## Limitations

- **SLA exclusions**: The SLA terms do not apply to any services that expressly exclude the SLA terms or any issues below causing services unavailability. None will be counted towards any Downtime or Downtime Periods.

     - **Due to force majeure factors (e.g., natural disasters and deliberate attacks) that are not reasonably controllable**: including but not limited to fires, floods, atmospheric discharges, solar storms, winds, earthquakes, tsunamis, explosions, nuclear disasters, volcano activities, biological hazards, wars, acts of terrorism, government action or other natural and human-caused force majeure factors, and must suspend or interrupt all or part of the services;

    - **Due to incidents that are not attributable to NCHC**: issues resulting from the use of services, hardware, or software not provided by NCHC, including, but not limited to the abnormal power supply (e.g., annual repairs or power outages) by Taiwan Power Company, insufficient bandwidth by networking companies causing interruption and failed to provide connection or services, or performance or supply issues of equipment related to Customer or third-party.

    - **Due to methods of use that are attributable to Customer**: Customer's unauthorized action or Customer's failure to follow any policies for acceptable use and modify use as advised, including, but not limited to faulty input of commands or arguments, and Customer's attempts to perform operations that exceed quota. 

- **Data protection and limitation:** If there is data abusive behavior to Customers' data stored in computing infrastructure, NCHC has the right of throttling.

- **Regular maintenance**: regularly arranged maintenance, e.g., annual maintenance, system health checks, and patch updates. Announcements will be issued seven days before the commencement of all regular maintenance. Once an announcement is issued, it is Customer's responsibility for scheduling work to avoid being affected by the maintenance. There will be no more than twenty-four hours of downtime for regular maintenance in a calendar year.

## Credits

1. To receive any of the Credits specified above, Customer must notify NCHC's technical support <u>**within thirty days**</u> from the time Customer becomes eligible for receiving a Credit or from the time the issue occurs. NCHC will evaluate all information reasonably available to NCHC and make a reasonable determination of whether a Credit is owed. If Customer does not adhere to these notification requirements or does not meet any Credit requirements as determined by NCHC, Customer will not have the right to receive a Credit.

2. NCHC will make commercially reasonable efforts to process claims and take the initiative in issuing Credit in any billing month <u>**within sixty days**</u> after receiving a notification. The Credit will be calculated based on the official price for the applicable service.

3. Customers who purchased services from a reseller should notify the reseller through the same notification procedure, and Customers will receive Credit from the reseller. Reseller's Credit will come from NCHC directly.

:::