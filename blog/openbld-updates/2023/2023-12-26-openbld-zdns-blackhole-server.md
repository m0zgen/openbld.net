---
slug: openbld-zdns-blackhole-server
title: ↘ OpenBLD.net and zDNS Blackhole Server
authors: [sysadminkz]
tags: [openbld, zdns, blackhole]
---

![OpenBLD.net and zDNS Blackhole Server](images/zDNS_as_blackhole.gif)

**Abstract**: I'm happy to announce 🎉 that [zDNS](https://github.com/m0zgen/zdns/tree/dev) is now a part of the 
[OpenBLD.net](https://openbld.net/) project. It is a DNS server that can be used as a blackhole for 
malicious domains. It is a great addition to the [OpenBLD.net](https://openbld.net/) project, 
and I'm excited to see how it will evolve in the future 🚀

## Befor begin

Following Zero Trust [model](https://en.wikipedia.org/wiki/Zero_trust_security_model) practices, 
I recently wrote and am slowly beginning to introduce new “blackhole” functionality into the 
OpenBLD.net DNS ecosystem.

zDNS is a DNS server that puts security and control over DNS queries at the center. 
With new functionality, zDNS now supports regular expressions in hosts.txt files, allowing more 
flexibility in configuring allowed queries. Now you can use the power of regular expressions to 
precisely control permissions, including subdomains and patterns.

## Main zDNS features

- Denies all DNS queries by default
- Allows you to configure allowed requests through the hosts.txt file
- Uses balancing strategies to ensure reliable operation with DNS servers
- 🛠 Easily customizable via YAML configuration
- 🔜 Prometheus metrics coming soon..

Additional protection of your infrastructure or testing requests with zDNS is possible and may be useful to you! Download the latest version here and start using a DNS server with powerful customization options:

* https://github.com/m0zgen/zdns/tree/dev
