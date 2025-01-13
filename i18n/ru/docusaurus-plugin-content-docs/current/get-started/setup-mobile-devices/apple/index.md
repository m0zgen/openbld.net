---
sidebar_position: 2
---

# Apple Устройства

Для блокировки рекламы и отслеживания на устройствах Apple, нужно установить DNS профиль.

Настройка OpenBLD.net на iOS, iPadOS и macOS

1. Откройте `Safari` и **Разрешите** скачать ADA iOS/macOS [профиль](https://raw.githubusercontent.com/m0zgen/openbld.net/master/docs/get-started/setup-mobile-devices/apple/OpenBLD.net-ADA-v5-21.mobileconfig)

![Download OpenBLD Network iOS, iPad, macOS profile](./figure1-download-openbld-profile.jpg)

:::note

В некоторых случаях профиль может быть открыт как **текстовый** файл в формате `xml`:

![Open OpenBLD Network iOS, iPad, macOS profile](./openbld-download-linked-ios-apple-profile-as-text.jpg)

Не волнуйтесь, просто **скачайте** его:

- Нажмите на ссылку загрузки профиля
- Удерживайте палец на экране, чтобы отобразить контекстное меню
- Выберите **Загрузить**:

![Download OpenBLD Network iOS, iPad, macOS profile](./openbld-download-linked-ios-apple-profile.jpg)

и затем **откройте** из приложения _Файлы_ или папки _Загрузки_.

:::

2. После загрузки профиля вы увидите сообщение: 
_**Профиль скачан. Проверьте профиль в приложении «Настройки», если хотите его установить.**_:

![Profile downloaded](./figure2-downloaded-openbld-profile.jpg)

3. Откройте «Настройки» > найдите новый элемент настроек **Профиль загружен**.

![Profile downloaded](./figure3-open-downloaded-openbld-profile.jpeg)

4. **Установить** профиль:

![Install OpenBLD profile](./figure4-install-downloaded-openbld-profile.jpg)

5. **Установить** Настройки DNS:

![Install OpenBLD DNS Settings](figure4-install2-downloaded-openbld-profile.jpg)

6. Готово!

:::tip
### RIC Профиль
Если вы хотите использовать RIC, вам нужно скачать [профиль RIC](https://raw.githubusercontent.com/m0zgen/openbld.net/master/docs/get-started/setup-mobile-devices/apple/OpenBLD.net-RIC-v24-2.mobileconfig) и установить его так же, как и ADA профиль.
:::
