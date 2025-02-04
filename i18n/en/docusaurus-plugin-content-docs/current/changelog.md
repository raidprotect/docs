---
title: Changelog
---

Discover the detailed list of changes made to RaidProtect.

## 3.1.0 (02/08/2025) {#3-1-0}

- Added Slash Commands.
- [Internationalization](./language.md) (Added English).
- New [`/settings` command](./setup.md#settings) as a Discord panel.
- New [`/setup` command](./setup.md#install) as an Onboarding process.
- Standardization of messages.
- Ability to [ignore users and roles](./features/anti-spam.md#ignore) in [antispam](./features/anti-spam.md).
- Added the [`/report` command](./features/reports.md).
- Option to choose whether the [`/lock` command](./features/channel-lock.md) renames the locked channel with `🔒`.
- Ability to [choose the prefix](./guides/prefix.md) for hybrid commands.
- Improved bot performance and stability.

## 3.0.0 (01/14/2023) {#3-0-0}

- Complete rewrite aimed at preparing for future updates and stabilizing the bot.
- Fixed all known bugs to date.
- The [`?raidmode` command](./features/raid-mode.md) now uses the "Disable Invites" feature.

## 2.2.0 (04/13/2020) {#2-2-0}

- Improved bot performance.
- Significant changes to the project's internal architecture.

## 2.1.3 (10/13/2019) {#2-1-3}

- Removed the blacklist and associated commands.
- Ability to ban any user by their ID, even if they are not in the affected server.
- Display of the ban reason in the response of the [`?ban` command](./features/moderation.md#ban).
- The [`?raidmode` command](./features/raid-mode.md) now requires the permission to kick members.
- Changed the kick duration if the captcha is not completed (5 min).
- Various internal improvements.

## 2.1.2 (04/17/2019) {#2-1-2}

- Added the [`?userinfo` command](./features/utilities.md#userinfo).
- ~~Added the `?lockall` and `?unlockall` commands~~ (Feature removed).
- Added the [`?kick`](./features/moderation.md#kick) and [`?ban`](./features/moderation.md#ban) commands.
- Added [min-age to the captcha](./features/captcha.md#minage) (ability to set a minimum account age to access the server).
- Option to configure automatic deletion of command invocation messages.
- The logs channel is automatically recreated if deleted.
- Overhauled database connection.
- Bug fixes and various improvements.

## 2.1.1 (02/21/2019) {#2-1-1}

- Removed `?settings captcha` (replaced by `?captcha`).
- Added the ability to set a [logs channel](./features/captcha.md#logs) for the captcha.
- Added an [autorole](./features/captcha.md#autorole) compatible with the captcha.
- Simplified the [captcha](./features/captcha.md) (5/6 correct letters required).
- Other minor changes.

## 2.1.0 (02/16/2019) {#2-1-0}

- Added captcha (`?settings captcha`).
- Added anti-spam security level (`?settings spamlevel`).
- Added the `?about` and `?invite` commands.
- Added the [`?clear` command](./features/utilities.md#clear).
- Various changes and bug fixes.

## 2.0.1 (02/04/2019) {#2-0-1}

- Rewrote the help (`?help`).
- Fixed bugs in [`?lock`](./features/channel-lock.md#lock) and [`?unlock`](./features/channel-lock.md#unlock).

## 2.0.0 (01/26/2019) {#2-0-0}

- Added [anti-spam](./features/anti-spam.md).
- Added [automatic raid mode](./features/raid-mode.md#config).
- Added the logs channel.
- Added bot configuration.
- Added [channel locking](./features/channel-lock.md).
- Numerous various changes.