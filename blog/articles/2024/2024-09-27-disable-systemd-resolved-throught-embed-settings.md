---
slug: disable-systemd-resolved-throught-embed-settings
title: ↘  How to disable systemd-resolved through resolved.conf settings
description: How to disable systemd-resolved through resolved.conf settings 
authors: [sysadminkz]
tags: [linux, system, notes, openbld]
---

![OpenBLD.net - How to disable systemd-resolved](images/disable-systemd-resolved-throught-embed-settings.jpeg)

## Intro

In short, the `systemd-resolved` service is a system service that provides network name resolution to local applications. It implements a caching DNS stub resolver and an LLMNR resolver and responder.

See the [official documentation](https://www.freedesktop.org/software/systemd/man/latest/systemd-resolved.service.html#:~:text=systemd%2Dresolved%20is%20a%20system,and%20MulticastDNS%20resolver%20and%20responder.) for more information.

In some cases, you may need to disable this service. For example, if you are using a custom DNS server or if you are using a VPN service that provides its own DNS servers.
You can disable Systemd-resolved using your own settings in the `resolved.conf` file.

## How to disable systemd-resolved

1. Open `/etc/systemd/resolved.conf` in your favorite text editor.
2. Find `DNSStubListener` setting and set it to `no`.

```shell
[Resolve]
...
#Cache=no-negative
DNSStubListener=no
...
```

:::tip
You can create additional config in the `/etc/systemd/resolved.conf.d/` directory. For example, you can create a file `/etc/systemd/resolved.conf.d/00-disable-stub.conf` with the following content:

```shell
[Resolve]
DNSStubListener=no
```
:::

Then you need to set `/etc/resolv.conf` as symlink to `/run/systemd/resolve/resolv.conf`:

```shell
ln -sf /run/systemd/resolve/resolv.conf /etc/resolv.conf
```

After that, restart the `systemd-resolved` service:

```shell
systemctl restart systemd-resolved
```

