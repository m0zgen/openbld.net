---
slug: prometheus-health-check-script
title: ⚙️ Prometheus Health Check
description: prom-health.sh - Small CLI health checker for a local Prometheus instance
authors: [sysadminkz]
tags: [openbld, updates, 2026]
---

![Prometheus Health Check - prom-health.sh](images/prometheus-health-check-script.webp)

[prom-health.sh](https://github.com/m0zgen/prom-health) - Small CLI health checker for a local Prometheus / Prom++ instance.

The script checks Prometheus readiness, health, active scrape targets, unhealthy hosts, process memory usage, Go runtime memory metrics, and basic TSDB status.

It is useful for quick local diagnostics, cron checks, systemd timers, or integration into [promppctl.sh](https://github.com/m0zgen/promppctl) status.

{/* truncate */}

## Features

- Checks Prometheus readiness endpoint: `/-/ready`
- Checks Prometheus health endpoint: `/-/healthy`
- Reads active scrape targets from `/api/v1/targets`
- Shows target summary:
    - total active targets
    - `up`
    - `down`
    - `unknown / other`
- Prints unhealthy targets with:
    - job
    - instance
    - health
    - last error
    - last scrape time
    - scrape URL
- Shows local process memory:
    - PID
    - RSS memory
    - virtual memory
    - threads
- Reads Prometheus self-metrics:
    - `process_resident_memory_bytes`
    - `go_memstats_alloc_bytes`
    - `go_memstats_sys_bytes`
- Shows basic TSDB status:
    - number of series
    - label pairs
    - chunks
    - min/max time
- Returns non-zero exit code if unhealthy targets are found.

---

## Requirements

The script requires:

```
curl
jq
awk
```

Optional, but recommended:

```
systemctl
pgrep
```

On Debian / Ubuntu:

```
apt update
apt install -y curl jq procps
```

## Usage

Usage
```
./prom-health.sh [options]
```

Options:

```
-u, --url URL          Prometheus URL. Default: http://127.0.0.1:9090
-s, --service NAME     systemd service name. Default: prometheus
-a, --all              Show all targets, not only unhealthy
-h, --help             Show help
```

## Examples

Check local Prometheus:
```
./prom-health.sh
```

Check local Prom++ / custom service:
```
./prom-health.sh -s prompp
```

Use a custom Prometheus URL:
```
./prom-health.sh -u http://127.0.0.1:9090
```

Show all targets:
```
./prom-health.sh --all
```

Use custom URL and service name:
```
./prom-health.sh -u http://127.0.0.1:9090 -s prometheus
```

## Example Output

```
=== Prometheus Health Check ===
URL:     http://127.0.0.1:9090
Service: prometheus

READY:   ✅ ready
HEALTHY: ✅ healthy

=== Runtime ===
Start time:     2026-05-29T10:12:01.000Z
CWD:            /var/lib/prometheus
Goroutines:     123
GOMAXPROCS:     4
GOGC:           75
GODEBUG:

=== Process Memory ===
PID:            12345
RSS memory:     742.18 MiB
Virtual memory: 2.13 GiB
Threads:        18

=== Self Metrics ===
process RSS metric:     742.18 MiB
Go alloc:               512.44 MiB
Go sys:                 980.12 MiB

=== TSDB ===
Series:          238412
Label pairs:     18523
Chunks:          991203
Min time:        1760000000000
Max time:        1760003600000

=== Targets Summary ===
Total active targets: 12
UP:                   11
DOWN:                 1
UNKNOWN/OTHER:        0

=== Unhealthy Targets ===
JOB                      INSTANCE                         HEALTH     LAST_ERROR                               LAST_SCRAPE               SCRAPE_URL
---                      --------                         ------     ----------                               -----------               ----------
node                     10.10.10.5:9100                  down       context deadline exceeded                2026-05-29T10:20:00Z      http://10.10.10.5:9100/metrics
```

## Repository

- https://github.com/m0zgen/prom-health

## Credits

- https://github.com/m0zgen/promppctl
- https://github.com/m0zgen/prometheus-stack-installer

---

#### Updates

- Official [OpenBLD.net Telegram](https://t.me/openbld)
