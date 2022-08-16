---
sidebar_position: 8
sync_original_production: 'https://man.twcc.ai/@twccdocs/howo-lb-convert-cert-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/howo-lb-convert-cert-en' 
---

# Convert SSL certificate format

The SSL certificate of the TWCC Load Balancing (HTTPs with SSL) service adopts Base64 encoding format. This article will help users to combine SSL certificate files into PKCS #12 and convert to Base64 encoding format.

<br/>

## Prerequisites

1. Prepare the SSL certificate files provided or purchased by your organization, i.e., `server.key` (Private Key), `server.crt` (certificate file), and `ca-chain.crt` (Intermediate CA).
2. Install [OpenSSL](https://www.openssl.org/) in your local machine. For Windows users, you can download Win64 OpenSSL in [this website](https://slproweb.com/products/Win32OpenSSL.html).

<br/>

## Convert certificate format

### Linux

1. Open the terminal, and enter the following command to combine the 3 obtained certificate files into PKCS #12 format
    ```
    openssl pkcs12 -export -out server.p12 -inkey server.key -in server.crt -certfile ca.crt
    ```
    The following content can be skipped by pressing the <kbd>Enter</kbd> key.

    ```
    Enter Export Password:
    Verifying - Enter Export Password:
    ```
    
2. Then convert the combined `.p12` file into Base64 encoding
    ```
    base64 server.p12 | tr -d \\n 
    ```
3. Copy the Base64 encoded output
![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_d2645cf8c4d128ffb9a4b5938adf56ef.png)

<br/>


### Windows

1. Open **Win64 OpenSSL Command Prompt** and enter the following command to combine the 3 certificate files obtained into PKCS #12 format.

    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_8b10eb699cd14e6c0a54080d74b428d4.png)

    ```
    openssl pkcs12 -export -out server.p12 -inkey server.key -in server.crt -certfile ca.crt
    ```
    The following content can be skipped by pressing the <kbd>Enter</kbd> key.

    ```
    Enter Export Password:
    Verifying - Enter Export Password:
    ```

    
2. Convert the combined `.p12` file into Base64 encoding.
    ```
    openssl base64 -in server.p12 -out server.txt
    ```
  
3. Open the Base64 encoded output file and copy the contents of the `server.txt` file
    
    ![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_63a0eeb1b5ca73dcda4a085afd55581d.png)