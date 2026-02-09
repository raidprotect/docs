---
title: Modo Raid
---

El Modo Raid es una función de emergencia diseñada para bloquear a todos los nuevos usuarios que intenten unirse a tu servidor. Es una forma radical pero efectiva de prevenir intentos de raid. 💣

## ❓ Cómo funciona el Modo Raid

Una vez activado el Modo Raid, todos los nuevos usuarios serán **expulsados al instante**, y RaidProtect les notificará que el servidor está en Modo Raid.

**Para activar el Modo Raid,** un usuario con permiso para expulsar miembros debe ejecutar el comando `?raidmode`. Se publicará un mensaje en los logs para indicar su activación. Ten en cuenta que **el Modo Raid no se desactiva automáticamente**, así que recuerda desactivarlo usando el mismo comando. 😇

![Captura de pantalla del Modo Raid activado](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/raidmode-active-raidprotect.png)

## 📡 Modo Raid automático

Si una gran cantidad de usuarios se unen a tu servidor en un período muy corto, RaidProtect puede **activar automáticamente el Modo Raid**.

### ⛽ Configuración

Por defecto, el Modo Raid se activa si **más de 10 usuarios se unen a tu servidor en 10 segundos.** Si tu servidor recibe frecuentemente una gran afluencia de miembros simultáneamente, sería prudente ajustar esta configuración para evitar falsos positivos.

![Captura de pantalla del Modo Raid automático](../../../../en/docusaurus-plugin-content-docs/version-3.0.0/assets/raidmode-auto-raidprotect.png)

El parámetro ajustable es **el número de usuarios permitidos para unirse** en un intervalo de 10 segundos antes de activar el Modo Raid. Por ejemplo, al ejecutar el comando:
`?settings autoraidmode 20`, el Modo Raid se activará si más de 20 usuarios se unen a tu servidor en 10 segundos. 🍃

:::warning
No olvides **desactivar el Modo Raid** si se activa automáticamente. Recuerda que no se desactiva por sí solo. 😖
:::
