---
sidebar_position: 2
sync_original_production: 'https://man.twcc.ai/@twccdocs/guide-ccs-dns-en' 
sync_original_preview: 'https://man.twcc.ai/@preview-twccdocs/guide-ccs-dns-en' 
---

# Configure the container DNS server

In order to fully secure your container, TWCC container only provides a default internal DNS server: **10.96.0.10**
The system will direct this server (10.96.0.10) to the following three external upstream DNS servers for resolution:

- 101.101.101.101 (TWNIC)
- 1.1.1.1 (Cloudflare)
- 8.8.8.8 (Google)

<br/>

:::info
If you need to direct to other upstream DNS servers, please contact Technical Support: isupport@twcc.ai
:::