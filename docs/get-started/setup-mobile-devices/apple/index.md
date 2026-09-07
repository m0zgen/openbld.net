---
sidebar_position: 2
---

# Apple Devices

To block ads and tracking on Apple devices, you need to install a DNS profile.

Setup OpenBLD.net on iOS, iPadOS

1. Open `Safari` and **Allow** download ADA iOS/macOS [profile](pathname:///profiles/OpenBLD-DoH-v15-3.mobileconfig):

![Download OpenBLD Network iOS, iPad, macOS profile](./figure1-download-openbld-profile.webp)

:::note

In some ceases profile can be opened as **plain text** file in `xml` format:

:::

Example:

<img alt="OpenBLD.net DNS iOS xml configuration profile" src={require("./openbld-download-linked-ios-apple-profile-as-text.webp").default} width="591"/>

Don't worry, just **download** it:

- Press on the profile download link
- Hold your finger on the screen to display the context menu
- Select **Download**:

<img alt="OpenBLD.net DNS download iOS configuration profile" src={require("./openbld-download-linked-ios-apple-profile.webp").default} width="591"/>

and then **open** from _Files_ app or _Downloads_ folder.

2. After profile was downloaded you'll see a message: 
_**Profile Downloaded. Review the profile in the Settings app if you want to install it**_:

![Profile downloaded](./figure2-downloaded-openbld-profile.webp)

3. Open Settings > search new **Profile Downloaded** settings item

![Profile downloaded](./figure3-open-downloaded-openbld-profile.webp)

4. **Install** profile:

![Install OpenBLD profile](./figure4-install-downloaded-openbld-profile.webp)

5. **Install** DNS Settings:

![Install OpenBLD DNS Settings](figure4-install2-downloaded-openbld-profile.webp)

6. Done

:::tip
### RIC Profile
If you want to use RIC, you need to download [profile](pathname:///profiles/OpenBLD-RIC-DoH-v15-3.mobileconfig) and install it in the same way as the ADA profile.
:::

## Experiments

DoH, DoT profiles for ADA with new Apple mobile config formats:

- OpenBLD ADA DoH profile - Download [OpenBLD-DoH-v15-3](pathname:///profiles/OpenBLD-DoH-v15-3.mobileconfig)
- OpenBLD KID DoT profile - Download [OpenBLD-KID-DoT-v15-3](pathname:///profiles/OpenBLD-KID-DoT-v15-3.mobileconfig)
