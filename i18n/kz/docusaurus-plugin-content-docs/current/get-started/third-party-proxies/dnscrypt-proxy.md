---
sidebar_position: 1
---

# dnscrypt-proxy

## Что такое [dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy)?

Гибкий DNS-прокси с поддержкой современных зашифрованных протоколов DNS, таких как DNSCrypt v2, DNS-over-HTTPS и т.д.

## Нвстройка OpenBLD.net (ADA) в dnscrypt-proxy

Добавьте в секцию `[static]` конфига `dnscrypt-proxy.toml`:

```toml

[static]

    [static.'ada.openbld.net']
    stamp = 'sdns://AgAAAAAAAAAAAAAPYWRhLm9wZW5ibGQubmV0Ci9kbnMtcXVlcnk'
```

:::tip
По умолчанию `dnscrypt-proxy` использует `[sources]` лист со множеством серверов.
Если Вы хотите использовать только OpenBLD.net, то можно удалить или закомментировать параметры секции `[sources]`.
:::
