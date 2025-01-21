---
slug: openbld-new-release-dns-v8
title: 🟩 OpenBLD.net v8 is here – Cache Warming, UNIX Sockets, and More! 🚀

description: OpenBLD.net – Now in Poland (Warsaw) - Continuing the great tradition of collaboration with cloud and hosting providers, the cloud provider 3hcloud.kz has provided a server in Poland.
authors: [sysadminkz]
tags: [openbld, updates, 2025]
---

![🔼 openbld-new-release-dns-v8](images/openbld-new-release-dns-v8.jpeg)

🟩 OpenBLD.net v8 is here – Cache Warming, UNIX Sockets, and More! 🚀

Excited to introduce the next milestone in the evolution of the open DNS service OpenBLD.net!
{/* truncate */}
Here’s what’s new:

- **Speed** – UNIX sockets + Caching + Load Balancing
- **Efficiency** – Port reuse allows multiple instances to run on the same port
- **Load Balancing** – Zero logs (except for errors) for maximum performance
- **Memory Optimization** – The core binaries take up just 6MB, with the cache stored in binary form, totaling only 11MB
- **Buffered Disk Writes** – When necessary, writes go through dedicated buffers (tested at 10 million entries in 3.3 seconds)
- 🔥 **Cache Warming** – Thousands of domains are preloaded to keep the cache hot, ensuring ultra-fast DNS responses
- 🔐 **Security** – Supports Prometheus, SIEM, and Syslog exports for advanced monitoring (for business usage needs)

New mechanisms unlock new possibilities—helping you maintain cyber hygiene, save time, and protect your privacy.

•  Easy setup OpenBLD.net - [Get Started](/docs/category/get-started/)

### Feedback and Updates ✌️

- Feedback [here](/docs/contacts).
- Official [OpenBLD.net Telegram Channel](https://t.me/openbld).

