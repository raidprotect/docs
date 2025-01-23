# Changelog

Discover the detailed list of changes made to RaidProtect.

:::note A major new version is in preparation
This explains the low number of recent updates. But don't worry, our technical team is always active in case of malfunctions on current versions! ️

To stay updated on the latest news about the upcoming major version, [join our Discord server](https://discord.com/invite/rWEGrNXXzQ).
:::

## 3.0.0 (01/14/2023)

- Complete rewrite aimed at preparing future updates and stabilizing the bot.
- Fixed all known bugs to date.
- The `?raidmode` command now uses the "Disable invites" feature.

## 2.2.0 (04/13/2020)

- Improved bot performance.
- Major changes in the project's internal architecture.

## 2.1.3 (10/13/2019)

- Removed the blacklist and associated commands.
- Added the ability to ban any user by their ID, even if they are not in the server.
- Displayed the ban reason in the response of the `?ban` command.
- The `?raidmode` command now requires the "kick members" permission.
- Changed the kick timeout if the captcha is not completed (5 minutes).
- Various internal improvements.

## 2.1.2 (04/17/2019)

- Added the `?userinfo` command.
- ~~Added `?lockall` and `?unlockall` commands~~ (Feature removed).
- Added `?kick` and `?ban` commands.
- Introduced minimum account age for captcha (option to set a minimum account age to access the server).
- Added the ability to auto-delete command invocation messages.
- Logs channel now automatically recreates if deleted.
- Reworked database connection.
- Bug fixes and various improvements.

## 2.1.1 (02/21/2019)

- Removed `?settings captcha` (replaced with `?captcha`).
- Added the ability to define a logs channel for captcha.
- Added an autorole compatible with captcha.
- Simplified captcha (5/6 correct letters required).
- Other minor changes.

## 2.1.0 (02/16/2019)

- Introduced captcha (`?settings captcha`).
- Added spam security level (`?settings spamlevel`).
- Added `?about` and `?invite` commands.
- Added `?clear` command.
- Various changes and bug fixes.

## 2.0.1 (02/04/2019)

- Rewrote the help command (`?help`).
- Fixed bugs in `?lock` and `?unlock`.

## 2.0.0 (01/26/2019)

- Introduced anti-spam.
- Added automatic raid mode.
- Added logs channel.
- Added bot configuration.
- Added channel locking.
- Numerous other changes.