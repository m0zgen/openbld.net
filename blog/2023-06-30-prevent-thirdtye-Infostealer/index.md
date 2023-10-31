---
slug: prevent-thirdtye-Infostealer
title: Prevent ThirdEye Infostealer
authors: [sysadminkz]
tags: [openbld, prevention, blocking]
---

FortiGuard Labs recently came across files that look suspicious, even during a cursory review. Our subsequent investigation confirmed that the files are malicious and revealed there is more to them than meets the eye: they are a previously unseen infostealer we have named “ThirdEye”. While this malware is not considered sophisticated, it’s designed to steal various information from compromised machines that can be used as stepping-stones for future attacks.

![Prevent ThirdEye Infostealer](./figure-thirdtye-Infostealer.png)

The ThirdEye infostealer has relatively simple functionality. It harvests various system information from compromised machines, such as BIOS and hardware data. It also enumerates files and folders, running processes, and network information. Once the malware is executed, it gathers all this data and sends it to its command-and-control (C2) server hosted at (hxxp://shlalala[.]ru/general/ch3ckState). And unlike most other malware, it does nothing else.

One interesting string unique to the ThirdEye infostealer family (from which we derived its name) is "3rd_eye", which it decrypts and uses with another hash value to identify itself to the C2.

See more details on [FortiGuard Labs](https://www.fortinet.com/blog/threat-research/new-fast-developing-thirdeye-infostealer-pries-open-system-information)
