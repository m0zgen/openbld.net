---
sidebar_position: 1
---

# dnscrypt-proxy

## [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy) дегеніміз не?

DNSCrypt v2, DNS-over-HTTPS және т.б. секілді заманауи шифрланған DNS хаттамаларын қолданатын икемді DNS-прокси.

## dnscrypt-proxy-де OpenBLD.net (ADA)  баптау

`[static]` секциясына `dnscrypt-proxy.toml` конфигін қосыңыз:

```toml

[static]

    [static.'ada.openbld.net']
    stamp = 'sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk'
```

:::tip
Әдепкі қалпы бойынша `dnscrypt-proxy` көптеген серверлермен `[sources]` парақты пайдаланады.
Егер Сіз тек OpenBLD.net пайдалануды қалайтын болсаңыз, онда `[sources]` секциясының параметрлерін алып тастауға немесе пікірге айналдыруға болады.
:::
