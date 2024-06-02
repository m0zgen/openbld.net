---
sidebar_position: 1
---

# dnscrypt-proxy

## What is [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)?

A flexible DNS proxy, with support for modern encrypted DNS protocols such as DNSCrypt v2, DNS-over-HTTPS, 
Anonymized DNSCrypt and ODoH (Oblivious DoH).

## Setup OpenBLD.net (ADA) on dnscrypt-proxy

Add in to `[static]` section of `dnscrypt-proxy.toml`:

```toml

[static]

    [static.'ada.openbld.net']
    stamp = 'sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk'
```

:::tip
As default `dnscrypt-proxy` uses `[sources]` list for multiple resolvers.
If you want to use only OpenBLD.net, you can remove or comment all other resolvers from `[sources]` section.
:::
