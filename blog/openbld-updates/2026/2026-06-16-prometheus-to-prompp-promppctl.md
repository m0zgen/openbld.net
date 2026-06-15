---
slug: prometheus-to-prompp-promppctl-tool
title: ⚙️ Deckhouse Prom++ Installer
description: promppctl.sh is a native Linux installer and lifecycle helper for Deckhouse Prom++ and Prometheus analog igrator.
authors: [sysadminkz]
tags: [openbld, tools, 2026]
---

![Installer, Updater, Uninstaller - Deckhouse Prom++](images/prometheus-to-prompp-promppctl.webp)

[promppctl.sh](https://github.com/m0zgen/promppctl) is a native Linux installer and lifecycle helper for [Deckhouse Prom++](https://github.com/deckhouse/prompp).

It installs Prom++ without Docker, creates a systemd service, can safely migrate an existing Prometheus TSDB copy, can perform release updates from GitHub Releases, and can roll back to the original prometheus.service.

{/* truncate */}

## Features

- Native installation (no Docker).
- Automatic latest release detection from the official GitHub repository.
- Optional pinned release or custom release URL.
- `systemd` service generation.
- Safe Prometheus data migration:
  - old `/var/lib/prometheus` remains untouched;
  - data is copied into `/var/lib/prompp`;
  - WAL is converted with `prompptool walvanilla`.
- Clean install mode for machines without Prometheus.
- Automatic config creation:
  - uses existing `/etc/prometheus/prometheus.yml` if present;
  - otherwise tries to use an example config from the release archive;
  - otherwise creates a minimal working config.
- Release update command:
  - downloads the latest release;
  - extracts and validates binaries;
  - stops `prompp.service`;
  - backs up current binaries;
  - installs new binaries;
  - starts `prompp.service`.
- Rollback command:
  - stops Prom++;
  - removes Prom++ service/binaries;
  - starts original `prometheus.service` if it exists.
- Flexible environment overrides for paths, ports, retention, migration behavior and release selection.

## Default paths

| Item | Default |
|---|---|
| Prom++ binary | `/usr/local/bin/prompp` |
| Prom++ tool | `/usr/local/bin/prompptool` |
| Install dir | `/opt/prompp` |
| Config file | `/etc/prometheus/prometheus.yml` |
| Prom++ data dir | `/var/lib/prompp` |
| Old Prometheus data dir | `/var/lib/prometheus` |
| Systemd unit | `/etc/systemd/system/prompp.service` |
| Listen address | `127.0.0.1:9090` |
| Retention | `15d` |
| User/group | `prometheus:prometheus` |

## Requirements

The script expects a Linux host with `systemd`.

Required commands:

```bash
curl tar install find cp date grep sed awk tr chmod chown getent id
```

Optional but recommended:

```bash
rsync
```

If `rsync` is not installed, the script falls back to `cp -a` for TSDB migration.

## Installation

Download or copy the script:

```bash
chmod +x promppctl.sh
```

Install Prom++ using the latest release:

```bash
sudo ./promppctl.sh install
```

By default the installer:

1. detects the latest Prom++ release from GitHub;
2. downloads the matching `amd64` or `arm64` archive;
3. installs `prompp` and `prompptool`;
4. creates or reuses `/etc/prometheus/prometheus.yml`;
5. migrates existing Prometheus data if `/var/lib/prometheus` exists;
6. creates `prompp.service`;
7. starts Prom++ on `127.0.0.1:9090`.

## Migration from Prometheus

Default migration mode is enabled:

```bash
MIGRATE_DATA=1
```

During installation, if `/var/lib/prometheus` exists and contains data, the script performs a safe migration:

```text
/var/lib/prometheus        old Prometheus data, left untouched
/var/lib/prompp            copied data converted for Prom++
/var/lib/prometheus.backup.<date>  backup copy
```

Migration flow:

1. Stops `prometheus.service`, if running.
2. Disables `prometheus.service`, if present.
3. Creates a backup of `/var/lib/prometheus`.
4. Copies `/var/lib/prometheus/` to `/var/lib/prompp/`.
5. Runs:

```bash
prompptool walvanilla --working-dir /var/lib/prompp
```

6. Starts `prompp.service`.

### Important

Prometheus and Prom++ must not use the same `storage.tsdb.path` at the same time.

This script intentionally does **not** modify `/var/lib/prometheus`. It copies data into `/var/lib/prompp` and converts WAL only in the copied directory.

## Environment variables

### Release variables

| Variable | Default | Description |
|---|---:|---|
| `GITHUB_REPO` | `deckhouse/prompp` | GitHub repository |
| `PROMPP_VERSION` | `latest` | Release tag or `latest` |
| `PROMPP_ARCH` | `auto` | `auto`, `amd64`, `arm64` |
| `PROMPP_URL` | empty | Direct asset URL; overrides GitHub API detection |

Examples:

```bash
sudo PROMPP_VERSION="v0.8.0-rc3" ./promppctl.sh install
```

```bash
sudo PROMPP_ARCH="amd64" ./promppctl.sh latest-url
```

```bash
sudo PROMPP_URL="https://github.com/deckhouse/prompp/releases/download/v0.8.0-rc3/prompp-binaries-amd64.tar.gz" ./promppctl.sh install
```

### Service and path variables

| Variable | Default | Description |
|---|---:|---|
| `PROMPP_USER` | `prometheus` | Linux user for service |
| `PROMPP_GROUP` | `prometheus` | Linux group for service |
| `INSTALL_DIR` | `/opt/prompp` | Install and backup directory |
| `BIN_PATH` | `/usr/local/bin/prompp` | Prom++ binary path |
| `TOOL_PATH` | `/usr/local/bin/prompptool` | Prom++ tool path |
| `CONFIG_DIR` | `/etc/prometheus` | Config directory |
| `CONFIG_FILE` | `/etc/prometheus/prometheus.yml` | Prometheus-compatible config |
| `DATA_DIR` | `/var/lib/prompp` | Prom++ data dir |
| `OLD_DATA_DIR` | `/var/lib/prometheus` | Existing Prometheus data dir |
| `BACKUP_ROOT` | `/var/lib` | Backup root for Prometheus data |
| `SERVICE_FILE` | `/etc/systemd/system/prompp.service` | Systemd unit path |
| `LISTEN_ADDRESS` | `127.0.0.1:9090` | Prom++ web listen address |
| `RETENTION_TIME` | `15d` | TSDB retention time |

Examples:

```bash
sudo LISTEN_ADDRESS="0.0.0.0:9090" ./promppctl.sh install
```

```bash
sudo DATA_DIR="/data/prompp" RETENTION_TIME="30d" ./promppctl.sh install
```

```bash
sudo CONFIG_FILE="/etc/prompp/prometheus.yml" ./promppctl.sh install
```

### Migration variables

| Variable | Default | Description |
|---|---:|---|
| `MIGRATE_DATA` | `1` | Migrate existing Prometheus data copy |
| `FORCE_MIGRATE` | `0` | Recreate `DATA_DIR` from `OLD_DATA_DIR` |
| `REPLACE_PROMETHEUS` | `1` | Stop/disable `prometheus.service` during install |

Examples:

Clean install without migration:

```bash
sudo MIGRATE_DATA=0 ./promppctl.sh install
```

Test Prom++ next to Prometheus:

```bash
sudo MIGRATE_DATA=0 REPLACE_PROMETHEUS=0 LISTEN_ADDRESS="127.0.0.1:9091" ./promppctl.sh install
```

Force re-copy and re-convert old Prometheus data:

```bash
sudo FORCE_MIGRATE=1 ./promppctl.sh install
```

Install without stopping vanilla Prometheus:

```bash
sudo REPLACE_PROMETHEUS=0 LISTEN_ADDRESS="127.0.0.1:9091" ./promppctl.sh install
```

## Typical workflows

### Replace existing Prometheus on the same port

```bash
sudo ./promppctl.sh install
curl http://127.0.0.1:9090/-/ready
```

### Run Prom++ side by side for testing

```bash
sudo MIGRATE_DATA=0 REPLACE_PROMETHEUS=0 LISTEN_ADDRESS="127.0.0.1:9091" ./promppctl.sh install
curl http://127.0.0.1:9091/-/ready
```

### Replace Prometheus and expose to remote Grafana

```bash
sudo LISTEN_ADDRESS="0.0.0.0:9090" ./promppctl.sh install
```

Make sure firewall rules allow only trusted hosts.

## Notes

- Prom++ is intended to be Prometheus-compatible for configs, API and PromQL workflows.
- The script keeps vanilla Prometheus data untouched to make rollback simple.
- Never run Prometheus and Prom++ against the same TSDB directory simultaneously.
- For production exposure, prefer `127.0.0.1` plus reverse proxy/VPN/firewall rules over raw public access.

## Repository

- https://github.com/m0zgen/promppctl

## Credits

- https://github.com/m0zgen/prom-health

---

#### Updates

- Official [OpenBLD.net Telegram](https://t.me/openbld)
