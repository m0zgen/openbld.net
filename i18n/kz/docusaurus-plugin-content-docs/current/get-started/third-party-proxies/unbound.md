---
sidebar_position: 1
---

# unbound

## Настройка DoT (DNS-over-TLS) в unbound

Использовать Unbound в качестве вышестоящего DoT можно с помощью параметра `forward-addr` в файле `unbound.conf`.

### Нахождение ближайшего DoT сервера

Можно использовать например `nslookup` или `dig` команды, чтобы проверить ближайший сервер для вас:

```bash
nslookup -port=53 ada.openbld.net 1.1.1.1
```

Вывод:

```bash
Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
Name:	ada.openbld.net
Address: 104.152.xx.xx
Name:	ada.openbld.net
Address: 109.199.xx.xx
```

Убедитесь, что сервис работает, попробуйте подключиться к любому серверу на `853` порт:


```shell
telnet 104.152.xx.xx 853 
Trying 104.152.xx.xx...
Connected to 104.152.xx.xx.
```

Следующий шаг - взять любой IP и попробовать настроить ваш сервер.
