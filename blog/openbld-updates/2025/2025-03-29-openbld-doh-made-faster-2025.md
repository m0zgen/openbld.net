---
slug: openbld-doh-made-faster-2025
title: 🚀 OpenBLD.net — DNS over HTTPS is now ~10% faster
description: OpenBLD.net now has DNS over HTTPS (DoH) servers - making it ~10% faster than before.
authors: [sysadminkz]
tags: [openbld, updates, 2025]
---

![🚀 OpenBLD.net — DNS over HTTPS is now ~10% faster](images/openbld-doh-made-faster.jpeg)

Sometimes, to get better — you have to risk stability.

I revisited RFC1035 and… rewrote critical parts of the DNS processing logic in OpenBLD DoH.
{/* truncate */}
Why? Because speed matters. Especially when millions of DNS queries are at stake every day.

What’s changed under the hood:

- ⚙️ Updated TLS ciphers and security processes
- ⚡ HTTP/2 support — now enforced everywhere
- 🧠 Reworked the entire request handling pipeline

All changes were battle-tested — no crashes, no chaos. Just a solid ~10% performance boost.

This week, the update rolls out across the entire ADA infrastructure.

If you want to stay ahead — be faster, be agile, and don’t be afraid to break things.

OpenBLD.net - No trackers. No compromises. Just a cleaner internet.

✌️ Latency kills. Speed saves.

### Updates

- Official [OpenBLD.net Telegram Channel](https://t.me/openbld).

