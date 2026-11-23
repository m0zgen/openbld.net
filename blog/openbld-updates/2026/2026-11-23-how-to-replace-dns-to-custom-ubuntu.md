---
slug: how-to-replace-dns-to-custom-ubuntu
title: ↗ How to Replace Local DNS in Ubuntu
description: Step-by-step guide on disabling router DHCP DNS and configuring Cloudflare DNS (1.1.1.1) in modern Ubuntu/Debian distributions.
authors: [sysadminkz]
keywords: [openbld, linux, 2026]
tags: [linux, ubuntu, networking, dns, netplan]
---

![How to Replace Local DNS in Ubuntu](images/how-to-replace-dns-to-custom-ubuntu.webp)

In modern Ubuntu distributions (20.04, 22.04, 24.04), domain name resolution is handled by `systemd-resolved`. A common issue occurs when you configure a public DNS (such as Cloudflare's `1.1.1.1`), yet the system continues to use the local router's DNS (`192.168.x.x`) obtained via DHCP.

{/* truncate */}

## What is the issue?

You can check your current DNS servers using the following command:

```bash
resolvectl status
```

If the output looks similar to the example below, the specific network interface settings (`Link 2`) are overriding your global settings due to the `+DefaultRoute` flag:

```text
Global
         DNS Servers: 8.8.8.8

Link 2 (enp1s0)
         Protocols: +DefaultRoute -LLMNR -mDNS -DNSOverTLS
       DNS Servers: 192.168.1.1
```

Simply editing `/etc/systemd/resolved.conf` only updates the `Global` section, which does not stop the DHCP client from assigning the router's IP address directly to the network interface.

## Solution via Netplan

To prevent the interface from accepting DNS settings from your router and enforce Cloudflare servers, you need to configure **Netplan**.

### 1. Locate the configuration file

Check the contents of the `/etc/netplan/` directory:

```bash
ls -la /etc/netplan/
```

Typically, you will find a file named `00-installer-config.yaml` or `50-cloud-init.yaml`.

:::caution Attention
If there are multiple `.yaml` files in the directory, edit the last one alphabetically, as it holds the highest priority and overrides the previous ones.
:::

### 2. Edit the configuration

Open the file in a text editor (replace with your actual filename):

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

Add the `use-dns: false` directive under `dhcp4-overrides` and specify Cloudflare's addresses in `nameservers` (make sure to use spaces for indentation, as tabs are invalid in YAML):

```yaml
network:
  version: 2
  ethernets:
    enp1s0: # Replace with your interface name from resolvectl status
      dhcp4: true
      dhcp4-overrides:
        use-dns: false
      nameservers:
        addresses: [1.1.1.1, 1.0.0.1]
```

### 3. Apply the changes

Validate the syntax and apply the new configuration:

```bash
sudo netplan apply
```

## If Using NetworkManager

On Ubuntu Desktop or certain cloud images, Netplan might delegate network management to `NetworkManager` (`renderer: NetworkManager`). If the local DNS persists after running `netplan apply`, configure the interface directly via `nmcli`:

1. Find the name of your active connection:

   ```bash
   nmcli con show
   ```

2. Disable automatic DNS and set Cloudflare (replace `"Wired connection 1"` with your connection name):

   ```bash
   sudo nmcli con mod "Wired connection 1" ipv4.ignore-auto-dns yes
   sudo nmcli con mod "Wired connection 1" ipv4.dns "1.1.1.1 1.0.0.1"
   sudo nmcli con up "Wired connection 1"
   ```

## Verify the Result

Confirm that the local router's IP is gone and Cloudflare's servers are active on the interface:

```bash
resolvectl status enp1s0
```

Expected output:

```text
Link 2 (enp1s0)
    Current Scopes: DNS
         Protocols: +DefaultRoute -LLMNR -mDNS -DNSOverTLS DNSSEC=no/unsupported
Current DNS Server: 1.1.1.1
       DNS Servers: 1.1.1.1 1.0.0.1
```

:::tip Tip
If you previously added other DNS servers to `/etc/systemd/resolved.conf` (e.g., `8.8.8.8`), comment them out and run `sudo systemctl restart systemd-resolved` to keep the `Global` section clean.
:::
