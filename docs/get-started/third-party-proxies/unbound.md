---
sidebar_position: 1
---

# unbound

## Setup DoT (DNS-over-TLS) on unbound

Use Unbound as an upstream DNS-over-TLS forwarder you can with the `forward-addr` parameter in the `unbound.conf` file.

### Find the nearest DoT server

You can try to check the nearest server for you, as example with `nslookup` or `dig` commands:

```bash
nslookup -port=53 ada.openbld.net 1.1.1.1
```

Output:

```bash
Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
Name:	ada.openbld.net
Address: 104.152.xx.xx
Name:	ada.openbld.net
Address: 109.199.xx.xx
```

Make sure, the service is working, try to connect any server to 853 port:

```shell
telnet 104.152.xx.xx 853 
Trying 104.152.xx.xx...
Connected to 104.152.xx.xx.
```

Next step — take any IP and try to setup your server.
