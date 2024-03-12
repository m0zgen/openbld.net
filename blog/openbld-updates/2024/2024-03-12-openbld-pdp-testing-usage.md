---
slug: 2024-03-12-openbld-pdp-testing-usage
title: 👻 OpenBLD.net PDP Testing Usage Manual
authors: [sysadminkz]
tags: [openbld, pdp, testing, beta, privacy]
---

![OpenBLD.net Personal DoH Profile](images/openbld_pdp_testing_usage.jpeg)

## Introduction

What is PDP and how to use it? This article will help you to understand the basics of OpenBLD.net 
**Personal _DoH_ Profiling** (PDP) and how to use it.

:::tip
More details about of PDP you can see [here](./2024-02-19-openbld-pdp-beta-join.md).
:::

## Get Started

After [Joining to PDP Beta](https://docs.google.com/forms/d/e/1FAIpQLSeIEVFueE1XWHPGy2uL-NVv1ID3jIq3O_kp-q7WFmOS2lUTzw/viewform?usp=sf_link), 
you received a welcome message from me to provided contacts.

:::tip
Doesn't receive? [Contacts](/docs/contacts/) to me please
:::

### Initial usage

After receiving a unique PDP DoH link from me, you can start to use the service:

* **Step 1**: Setup your device(s) with OpenBLD.net PDP with provided DNS-over-HTTPS (DoH) links.
* **Step 2**: DoH link should be formatted as `https://<service name>/dns-query/<your_id>` (where `<service name>` 
ADA or RIC platform address, `<your_id>` is your unique identifier).
* **Step 3**: After setup, you can check the service on [DNS Leak Test](https://www.dnsleaktest.com/) and [Dnscheck.tools](https://dnscheck.tools/)

🎉🎉🎉 Now you can relax and use the service in own vacuum with personalized settings.

Enjoy the service and provide [feedback](/docs/contacts/)!

## Customization (Optional)

### Personalized settings

Free available settings for customization are:

* Personal Allow/Block lists (Default: [my-zbld](https://github.com/m0zgen/my-zbld) (you can provide for needed domains to block or allow) 
* Change reload list interval (Default: 24 hours (Minimal allowed 3 hours))
* Disable/Enable troubleshooting logs (Default: Enabled. Storing: 2 days)
* Switch OpenBLD.net mode to Zero Trust (Default: Blackhole mode (more details [here](../2023/2023-12-26-openbld-zdns-blackhole-server.md)))
* Create additional PDP DoH links for your family members or different devices (Default: 2 links)

For applying customization, at the current time, you can fill OpenBLD.net PDP Personal Settings [Form](https://docs.google.com/forms/d/e/1FAIpQLSdkeYLec0THvITXj3foesRU3NnHbJQZ-x8VT91yCXRWx2V4Kg/viewform?usp=sf_link) 
and notify [me](/docs/contacts/) about it.

:::tip
* Allowlists are still **prioritized** over blocklists.
* You can provide static hosts file if needed
:::

## Usage Conditions

* Lists or static hosts file should not be more than 100 records.
* The number of requests should not exceed 100k per day.
* Shall comply with the terms of use of the service (See [Limitations](/docs/overwiew/how-it-works/#limitations) section).


### Profile deletion

* **Scenario 1**: Notify [me](/docs/contacts/) about the need to delete the profile.
* **Scenario 2**: After 30 days of inactivity, the profile will be automatically deleted.

## What's Next?

### Feedback

* You can provide feedback for me in any way possible (directly, via [contacts](/docs/contacts/), etc.)
* After some time I will contact you and ask you to fill out the feedback form

### Automation

In the future, I plan to automate the process of providing personalized settings and the ability to change them on the fly, with:

* Telegram bot
* Web UI

I'm not sure if I can do it quickly, but I hope. 😎

## Additional Links

How to setup OpenBLD.net on your favourite device(s):

* [Mobile Devices](/docs/category/setup-mobile-devices/)
* [Browsers](/docs/category/setup-browsers/)
* Or you can start from here - [Get Started](/docs/category/get-started/)
* [Contacts](/docs/contacts/)
