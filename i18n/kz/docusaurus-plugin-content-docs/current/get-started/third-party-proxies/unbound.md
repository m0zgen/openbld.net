---
sidebar_position: 1
---

# unbound

## unbound-да DoT (DNS-over-TLS) баптау

Unbound-ды `unbound.conf` файлында `forward-addr` параметрінің көмегімен жоғары тұрған DoT ретінде пайдалануға болады

### Жақын орналасқан DoT серверді табу

Сіз үшін жақын орналасқан серверді тексеру үшін мысалы `nslookup` немесе `dig` командаларды пайдалануға болады:

```bash
nslookup -port=53 ada.openbld.net 1.1.1.1
```

Қорытынды:

```bash
Server:		1.1.1.1
Address:	1.1.1.1#53

Non-authoritative answer:
Name:	ada.openbld.net
Address: 104.152.xx.xx
Name:	ada.openbld.net
Address: 109.199.xx.xx
```

Сервистің жұмыс істейтініне көз жеткізіңіз, `853` портында кез келген серверге қосылуға талпынып көріңіз:

```shell
telnet 104.152.xx.xx 853 
Trying 104.152.xx.xx...
Connected to 104.152.xx.xx.
```

Келесі қадам – кез келген IP алу және өз серверіңізді баптап көру.

