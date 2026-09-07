---
sidebar_position: 2
---

# Apple Құрылғылар

Apple құралдарында жарнаманы және бақылауды бұғаттау үшін DNS профильді баптау қажет.

iOS, iPadOS және macOS-та OpenBLD.net баптау

1. `Safari` ашыңыз және ADA iOS/macOS [профиль](pathname:///profiles/OpenBLD-DoH-v15-3.mobileconfig)

![Download OpenBLD Network iOS, iPad, macOS profile](./figure1-download-openbld-profile.jpg)

2. Профильді жүктеп алғаннан кейін сіз мынадай хабарламаны көресіз:
_**Профиль көшірілді. Егер оны орнатуды қалайтын болсаңыз, профильді «Баптаулар» қосымшасында тексеріңіз.**_:

![Profile downloaded](./figure2-downloaded-openbld-profile.jpg)

:::note

Кейбір жағдайларда профиль `xml` форматындағы **мәтіндік** файл ретінде болуы мүмкін:

![Open OpenBLD Network iOS, iPad, macOS profile](./openbld-download-linked-ios-apple-profile-as-text.jpg)

Уайымдамаңыз, жәй ғана оны **жүктеп алыңыз**:

![Download OpenBLD Network iOS, iPad, macOS profile](./openbld-download-linked-ios-apple-profile.jpg)

содан кейін _Файлдар_ немесе папкалар _Жүктеулер_ қосымшасынан **ашыңыз**.

:::

3. «Баптауларды» ашыңыз > **Профиль жүктелді** баптаулардың жаңа элементін табыңыз.

![Profile downloaded](./figure3-open-downloaded-openbld-profile.jpeg)

4. Профильді **орнату**:

![Install OpenBLD profile](./figure4-install-downloaded-openbld-profile.jpg)

5. DNS баптауларын **орнату**:

![Install OpenBLD DNS Settings](figure4-install2-downloaded-openbld-profile.jpg)

6. Дайын!

:::tip
### RIC Профиль
Егер сіз RIC пайдалануды қалайтын болсаңыз, сіз [профиль RIC](pathname:///profiles/OpenBLD-RIC-DoH-v15-3.mobileconfig) жүктеп алуыңыз және оны ADA профиль секілді орнатуыңыз қажет.
:::
