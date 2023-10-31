---
slug: prevent-trojanized-super-mario
title: Prevent Trojanized Super Mario
authors: [sysadminkz]
tags: [openbld, prevention, blocking]
---

Trojanized Super Mario Game Installer Spreads SupremeBot Malware

![Prevent Trojanized Super Mario](./figure-super-mario-Infection-chain.jpeg)

According to [Cyble](https://blog.cyble.com/2023/06/23/trojanized-super-mario-game-installer-spreads-supremebot-malware/) blog post, the malware is distributed through `java.exe` is an XMR (Monero) miner which operates stealthily in the background without the user’s knowledge or consent, leading to unauthorized and potentially harmful utilization of computing resources for mining the cryptocurrency Monero (XMR).

When “java.exe” is executed, the malware establishes a connection with a mining server `gulf[.]moneroocean[.]stream` to carry out cryptocurrency mining activities.

Concurrently, the malware gathers valuable data from the victim’s system, including computer name, username, GPU, CPU, and other relevant details. This sensitive information is then transferred to a Command and Control (C&C) server via the following URL API:

```
hxxp://shadowlegion[.]duckdns[.]org/nam/api/endpoint[.]php
```

Be careful and watch what your children play and what applications they install 🧩 on their devices 📲
