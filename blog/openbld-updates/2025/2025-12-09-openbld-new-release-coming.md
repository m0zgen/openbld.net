---
slug: openbld.net-new-rtl-release-coming-2025
title: 🚀 OpenBLD.net is entering a new era of performance
description: OpenBLD.net is launching a new release, codenamed RTL, focused on speed and reliability.
authors: [sysadminkz]
tags: [openbld, updates, 2025]
---

![🚀 OpenBLD.net is entering a new era of performance](images/openbld.net-new-rtl-release-coming.webp)

Over the past months, I’ve been working on a major upgrade of the zBLD core.

The focus is clear — acceleration, resilience, and predictable performance under load.
{/* truncate */}
Key improvements:

- Multi-level Rate Limiter (RTL) to absorb traffic spikes
- Thread separation & sharding — reducing pressure on the main processing path
- ~30% of operations moved to async execution
- Stricter RFC-based DoH traffic validation — less “garbage,” lower latency
- Error sampling for unstable clients — reduced disk I/O load
- Reworked domain-filtering engine
- Improved detection of suspicious / DGA domains
- Optimized Linux networking stack and I/O behavior

Result: overall throughput increased by roughly 2×, and priority domains now resolve even faster thanks to smarter deferred analysis.

The update rollout is planned for mid–late December.

Only forward! 💪 Be yourself, be focused!

### Updates

- Official [OpenBLD.net Telegram](https://t.me/openbld).

