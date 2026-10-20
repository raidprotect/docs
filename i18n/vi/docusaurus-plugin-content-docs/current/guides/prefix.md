---
title: Lệnh bằng tin nhắn
description: "Bật các lệnh bằng tin nhắn của RaidProtect bên cạnh lệnh Slash, chọn tiền tố của chúng và áp dụng cho chúng các quyền của Discord."
---

import { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

## Tiền tố bị tắt (mặc định) {#disabled}

Theo mặc định, RaidProtect chỉ dùng các lệnh Slash (`/`). Điều này đảm bảo cách dùng trực quan và nhất quán với các tiêu chuẩn của Discord.

## Lệnh bằng tin nhắn (tùy chọn) {#activated}

Nếu bạn thích gõ một số lệnh trong tin nhắn, hãy chọn một tiền tố, ví dụ `?`. Khi đó các lệnh này có thể dùng được với tiền tố đó:

- [`?raidmode`](../features/raid-mode.md) và [`?joinlock`](../features/join-lock.mdx)
- [`?ban`](../features/moderation.mdx#ban), [`?tempban`](../features/moderation.mdx#tempban), [`?softban`](../features/moderation.mdx#softban) và [`?unban`](../features/moderation.mdx#unban)
- [`?kick`](../features/moderation.mdx#kick)
- [`?mute` | `?timeout` | `?tempmute`](../features/moderation.mdx#timeout) và [`?unmute` | `?untimeout` | `?untempmute`](../features/moderation.mdx#untimeout)
- [`?jail`](../features/moderation.mdx#jail), [`?tempjail`](../features/moderation.mdx#tempjail) và [`?unjail`](../features/moderation.mdx#unjail)
- [`?warn`](../features/moderation.mdx#warn)
- [`?slowmode` | `?slow`](../features/moderation.mdx#slowmode)
- [`?lock`](../features/channel-lock.md#lock) và [`?unlock`](../features/channel-lock.md#unlock)
- [`?clear` | `?clean`](../features/moderation.mdx#clear)
- [`?nick` | `?nickname` | `?rename` | `?setnick`](../features/moderation.mdx#nick)
- [`?userinfo` | `?ui`](../features/utilities.mdx#userinfo), [`?serverinfo` | `?ginfo`](../features/utilities.mdx#serverinfo) và [`?inviteinfo` | `?ii`](../features/utilities.mdx#inviteinfo)

## 💬 Chọn tiền tố {#config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Trong thẻ “**Chung**”, nhấp vào “**Chỉnh sửa**” bên cạnh “**Lệnh bằng tin nhắn**”.
3. Chọn một tiền tố trong danh sách (`?`, `!`, `>` hoặc `$`), hoặc nhập tiền tố của riêng bạn vào “**Tiền tố tùy chỉnh**” (tối đa ba ký tự, được ưu tiên hơn danh sách). Chọn “**Tắt**” để vô hiệu hóa các lệnh bằng tin nhắn.
4. Đánh dấu “**Xóa khi gọi**” nếu bạn muốn RaidProtect xóa tin nhắn chứa lệnh ngay khi đã đọc xong.

<SettingsModal name="prefix" />

:::note
Các lệnh Slash (`/`) vẫn khả dụng ngay cả khi có tiền tố.
Hãy tránh các tiền tố đã được bot khác sử dụng để không xung đột lệnh.
:::

## 🔒 Áp dụng quyền của lệnh {#permissions}

Quyền của các lệnh RaidProtect được chỉnh trong Discord: **Cài đặt máy chủ → Tích hợp → RaidProtect**. Tại đó bạn có thể cho phép hoặc cấm từng lệnh theo vai trò, thành viên hoặc kênh. Discord chỉ áp dụng chúng cho các lệnh Slash.

Để chúng cũng áp dụng cho các lệnh bằng tin nhắn và cho các hình phạt do menu “**Xử phạt**” đề xuất (nhấp chuột phải vào một thành viên):

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Trong thẻ “**Chung**”, nhấp vào “**Chỉnh sửa**” bên cạnh “**Quyền**”.
3. Đánh dấu “**Áp dụng quyền của phần Tích hợp**”.

<SettingsModal name="permissions" />

Khi đó, một thành viên được phép dùng `/ban` sẽ có thể cấm từ menu “**Xử phạt**”, và một thành viên bị cấm dùng `/ban` sẽ không thể dùng `?ban` nữa. Tùy chọn này bị tắt theo mặc định.

:::warning
Menu **Tích hợp** của Discord chỉ khả dụng trên ứng dụng PC và Web, không có trên di động.
:::
