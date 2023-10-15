---
sidebar_position: 1
---

# Routers

You can use OpenBLD as DNS server for DHCP clients or preferred DNS server in the router DNS settings. 
See actual DNS IP addresses list with `nslookup` command.

If your router support DoH/DoT, you can use OpenBLD as `https` with `dns-query` link:

```shell
https://ada.openbld.net/dns-query
```

Or as `tls` address:

```shell
ada.openbld.net
```

## Additional Instructions

* How to [setup](https://help.keenetic.com/hc/ru/articles/360007687159-%D0%9F%D1%80%D0%BE%D0%BA%D1%81%D0%B8-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D1%8B-DNS-over-TLS-%D0%B8-DNS-over-HTTPS-%D0%B4%D0%BB%D1%8F-%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-DNS-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2) Keenetic
* How [setup](https://jcutrer.com/howto/networking/mikrotik/mikrotik-dns-over-https) on Mikrotik
  * In this article on step 2 specified broken link, possible fix:
  * `/tool fetch url=https://curl.se/ca/cacert.pem`
  * `/certificate import file-name=cacert.pem passphrase="your password"`

## Important Notes

:::tip

Very rarely, but sometimes the IP addresses obtained from `nslookup` can change. 
If any address is planned to be changed or removed from the balance, this will be definitely was noted in through the official telegram channel.

See [Contacts](/docs/contacts.md) for more information.
