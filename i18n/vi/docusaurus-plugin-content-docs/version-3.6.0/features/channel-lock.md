---
title: Khóa kênh
description: "Lệnh /lock của RaidProtect khóa một kênh trong tích tắc để ngăn gửi tin nhắn, tạm thời hoặc cho đến khi mở khóa."
---

import ChannelLockMockup from '@site/src/components/DiscordMessage/mockups/channel-lock';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

{/* <ChannelLockMockup /> : masquée pour le moment */}

Đôi khi cần khóa tạm thời một kênh để ngăn người dùng gửi tin nhắn vào đó. Nhờ lệnh khóa, việc này trở nên dễ như trở bàn tay!

## 🔒 Khóa một kênh {#lock}

Dùng lệnh: ```/lock [#channel] [duration] [reason] [--silent]```

Lệnh này gỡ khỏi vai trò **@everyone** các quyền gửi tin nhắn và gửi tin nhắn trong luồng, tại kênh được nhắm đến, từ đó ngăn mọi người dùng đăng bài ở đó.

- Hãy thay `[#channel]` bằng lượt nhắc đến hoặc [ID](../guides/id.mdx) của kênh cần khóa. Nếu không có kênh, chúng tôi khóa kênh nơi bạn dùng lệnh. Các kênh văn bản, thông báo, thoại, diễn đàn, media, sân khấu và các danh mục đều được chấp nhận; luồng thì không.
- Hãy thay `[reason]` để nêu lý do kênh bị khóa (ví dụ: *dọn dẹp cuộc trò chuyện*, *thông báo quan trọng*, v.v.).
- Thêm `--silent` để không thông báo gì trong kênh: chỉ mình bạn nhận được xác nhận.

:::info
Một kênh chỉ có thể bị khóa một lần mỗi 10 phút.
:::

### Khóa một danh mục {#lock-category}

Khóa một danh mục cũng khóa luôn tất cả các kênh hiển thị của nó (trừ luồng) trong một lần, và `/unlock` trên danh mục mở khóa chúng cùng lúc. Một kênh vốn đã đóng quyền viết (quy tắc, thông báo) được giữ nguyên, cả khi khóa lẫn khi mở khóa. Khi một lần khóa tạm thời danh mục hết hạn, chỉ một dòng nhật ký nêu tên danh mục và số kênh được mở khóa.

### Khóa tạm thời {#lock-duration}

Tham số `[duration]` cho phép **tự động mở khóa kênh** sau khoảng thời gian đã nêu (ví dụ `15m`, `1h`, `2d`). Hữu ích để nhanh chóng lập lại trật tự mà không phải nhớ mở khóa kênh thủ công. Thời lượng bị giới hạn ở thời lượng tối đa của một hình phạt.

## 🔓 Mở khóa một kênh {#unlock}

Dùng lệnh: ```/unlock [#channel] [reason] [--silent]```

Lệnh này khôi phục cho vai trò **@everyone** các quyền gửi tin nhắn như trước khi khóa, cho phép người dùng đăng bài trở lại. Hãy thay `[reason]` để nêu lý do kênh được mở khóa (ví dụ: *thảo luận mở lại*, *thông báo đã xong*, v.v.). Với `--silent`, không có gì được thông báo trong kênh.

:::warning
Để việc khóa hoạt động đúng, không vai trò nào mở cho mọi người được có quyền viết rõ ràng trong kênh này. Nếu không, các thành viên có những vai trò đó vẫn có thể trò chuyện. Ngược lại, các quyền được đặt cho vai trò đội ngũ của bạn thì hữu ích: chúng giữ quyền phát biểu cho đội ngũ trong lúc `/lock`, và [kiểm tra bảo mật](./audit.md) không còn báo chúng là dư thừa nữa.
:::
:::info
Các lệnh `lock` và `unlock` có thể [dùng qua tiền tố](../guides/prefix.md). Chúng yêu cầu quyền “**Quản lý tin nhắn**”. RaidProtect cần các quyền “**Quản lý kênh**” và “**Quản lý vai trò**” để sửa quyền của kênh.
:::

## ✏️ Cấu hình ổ khóa {#config}

Bạn có thể chọn xem các kênh bị khóa có được đổi tên kèm ổ khóa hay không: khi đó `/lock` đổi tên kênh thành `🔒-tên-kênh`, và `/unlock` gỡ tiền tố. Nhờ vậy trạng thái của kênh hiện ngay trong danh sách kênh. Tùy chọn này **bị tắt theo mặc định**.

Để bật hoặc tắt ổ khóa:
1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Tiện ích**”.
3. Nhấp vào “**Bật**” (hoặc “**Tắt**”) bên cạnh “**Khóa kênh**”. Nút này hoạt động như một công tắc, chỉ cần một cú nhấp.

<Settings start="home:utilities" />

:::info
Việc đổi tên yêu cầu quyền “**Quản lý kênh**”.
:::

## Câu hỏi thường gặp {#faq}

### Có thể khóa một kênh khác với kênh mình đang ở không?

Có, hãy nêu kênh ở đối số đầu tiên: `/lock #chung 30m Đang bị raid`.

### Vì sao một số thành viên vẫn viết được trong kênh bị khóa?

Việc khóa chỉ gỡ quyền phát biểu của vai trò @everyone. Một vai trò có quyền viết rõ ràng trong kênh này vẫn giữ quyền đó.

### Làm sao để thêm ổ khóa vào tên các kênh bị khóa?

Trong `/settings`, thẻ Tiện ích, bật “Khóa kênh”. Tùy chọn này bị tắt theo mặc định.
