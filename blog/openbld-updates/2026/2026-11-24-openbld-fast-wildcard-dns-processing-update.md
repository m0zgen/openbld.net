---
slug: accelerating-the-dns-path
title: "⚡ OpenBLD.net: Accelerating the DNS Path"
date: 2026-11-24
authors: [sysadminkz]
tags: [openbld, dns, performance, golang, engineering, cybersecurity]
description: "Reworking the core routing and filtering engine of OpenBLD for zero-allocation domain wildcard matching, multi-fold faster AWS Route 53 detection, and lower CPU overhead."
---

![OpenBLD.net: Accelerating the DNS Path ⚡️](images/openbld-fast-wildcard-dns-processing-update.webp)

Over the past few months, I have significantly reworked the core routing and filtering engine of **OpenBLD.net**. My primary focus is minimizing processing latency for every single DNS query.

{/* truncate */}

## What's New

* ⚡️ **New domain wildcard matching engine** - fast domain hierarchy matching without unnecessary memory allocations. A unified mechanism now powers three key components: **Lua routing**, **allowlists**, and **blocklists**.
* ⚡️ **Multi-fold faster AWS Route 53 matching** - a dedicated mechanism optimized for recognizing AWS DNS infrastructure domains several times faster.
* ⚡️ **Reduced CPU utilization** - resource-intensive regular expressions have been replaced with efficient algorithms wherever direct domain structure matching is sufficient.

Less computation. Lower latency. Better performance.

## What's Next

These optimizations lay the foundation for a **major OpenBLD upgrade** scheduled to roll out over the coming weeks.

Stay up to speed with [OpenBLD.net](https://openbld.net)! 🚀
