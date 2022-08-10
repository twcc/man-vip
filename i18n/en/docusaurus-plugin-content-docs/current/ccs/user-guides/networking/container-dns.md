---
sidebar_position: 2
---

# Configure the container DNS server

In order to fully secure your container, TWCC container only provides a default internal DNS server: **10.96.0.10**
The system will direct this server (10.96.0.10) to the following three external upstream DNS servers for resolution:

- 101.101.101.101 (TWNIC)
- 1.1.1.1 (Cloudflare)
- 8.8.8.8 (Google)

:::info
If you need to direct to other upstream DNS servers, please contact Technical Support: isupport@twcc.ai
:::