---
title: Vai trò Tag
description: "Vai trò Tag của RaidProtect tự động cấp một vai trò cho các thành viên đeo tag của máy chủ Discord của bạn, và ghi nhận sự gắn bó của họ."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';
import TagRoleConceptMockup from '@site/src/components/DiscordMessage/mockups/tag-role-concept';

<TagRoleConceptMockup />

Vai trò Tag cho phép tự động cấp một vai trò cho các thành viên thêm [tag của máy chủ bạn](https://support.discord.com/hc/vi/articles/31444248479639-S%E1%BB%91-Nh%E1%BA%ADn-Di%E1%BB%87n-M%C3%A1y-Ch%E1%BB%A7) vào hồ sơ Discord của họ. Khi cấp một vai trò cho các thành viên này, bạn ghi nhận sự gắn bó của họ và khuyến khích họ tích cực đại diện cho máy chủ của bạn. Đây là một cách đơn giản nhưng hiệu quả để củng cố bản sắc chung, đồng thời thưởng cho những đại sứ trung thành nhất của cộng đồng bạn.

## ❓ Cách Vai trò Tag hoạt động {#working}

Cách hoạt động rất đơn giản. Ngay khi một thành viên thêm tag của máy chủ vào hồ sơ Discord của họ, RaidProtect tự động cấp cho họ một vai trò cụ thể.
Nếu thành viên gỡ tag, vai trò cũng bị gỡ.

Chúng tôi phát hiện thay đổi ở lần cập nhật hồ sơ tiếp theo của thành viên (biệt danh, ảnh đại diện, biểu ngữ, vai trò, tag…).

:::info
Nếu Tag chưa được bật hoặc máy chủ của bạn chưa có tính năng này, Vai trò Tag sẽ không có tác dụng.
:::

## 🎖️ Cấu hình Vai trò Tag {#config}

Việc cấu hình chỉ mất vài cú nhấp:
1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Tiện ích**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Vai trò Tag**”.
4. Chọn một vai trò có sẵn qua bộ chọn hoặc nhấp vào “**Tạo một cái cho tôi**”: chúng tôi tạo một vai trò `Tag` không có quyền nào.
5. Bạn có thể tắt Vai trò Tag bất cứ lúc nào bằng cách nhấp vào nút “**Đặt lại**”.

Mỗi thay đổi cấu hình của Vai trò Tag được ghi vào nhật ký máy chủ của bạn.

<Settings start="tagrole" />

:::tip
Các thành viên của bạn sẽ có vai trò ở lần chỉnh sửa hồ sơ tiếp theo (Biệt danh, Ảnh đại diện, Biểu ngữ, Vai trò, Tag…).
:::

### Lệnh /tagrole {#command}

Dùng lệnh: ```/tagrole```

Lệnh mở thẳng màn hình cấu hình Vai trò Tag, không cần qua `/settings`. Lệnh này dành riêng cho các thành viên có quyền “**Quản lý vai trò**”.

### Các vai trò bị từ chối {#refused-roles}

Vai trò Tag được cấp tự động cho bất kỳ thành viên nào: vì vậy chúng tôi từ chối những vai trò có thể gây vấn đề.

- **Một vai trò đã được RaidProtect sử dụng**: vai trò jail, vai trò mute, vai trò xác minh của captcha hoặc vai trò tự động.
- **Một vai trò được quản lý** bởi một ứng dụng hoặc bởi boost máy chủ: Discord cấm cấp nó thủ công. Hãy tạo một vai trò thông thường thay vào đó.
- **Một vai trò nằm trên vai trò của RaidProtect**: hãy kéo vai trò của RaidProtect lên trên trong **Cài đặt máy chủ > Vai trò**.
- **Một vai trò nằm trên vai trò cao nhất của bạn** (trừ với chủ sở hữu máy chủ).
- **Một vai trò có quyền nhạy cảm**: Quản trị viên, Cấm, Đuổi, Quản lý máy chủ, kênh, tin nhắn, vai trò, webhook, biểu cảm, sự kiện hoặc luồng.

### Khung cảnh báo {#warnings}

Màn hình cấu hình cảnh báo bạn khi Vai trò Tag không thể hoạt động:

- **Thiếu quyền**: RaidProtect cần quyền “**Quản lý vai trò**”. Một cảnh báo ⚠️ cũng hiển thị bên cạnh “**Vai trò Tag**” trong thẻ Tiện ích của `/settings`.
- **Tag máy chủ chưa được bật**: máy chủ của bạn chưa bật tính năng [Tag máy chủ](https://support.discord.com/hc/vi/articles/31444248479639-S%E1%BB%91-Nh%E1%BA%ADn-Di%E1%BB%87n-M%C3%A1y-Ch%E1%BB%A7), nên Vai trò Tag hiện chưa có tác dụng.

Sau khi sửa, nhấp vào “**Làm mới**” để kiểm tra lại.

## Câu hỏi thường gặp {#faq}

### Vì sao một thành viên có tag mà chưa có vai trò?

Chúng tôi phát hiện tag ở lần cập nhật hồ sơ tiếp theo của thành viên. Chừng nào họ chưa sửa gì (biệt danh, ảnh đại diện, vai trò, tag…), vai trò chưa được cấp. Bộ phận hỗ trợ có thể chạy một lần đồng bộ hoàn chỉnh nếu cần.

### Vì sao vai trò của tôi bị từ chối?

Vai trò Tag không thể là một vai trò đã được RaidProtect sử dụng, một vai trò do ứng dụng quản lý, một vai trò nằm trên RaidProtect hoặc trên bạn, cũng không thể là vai trò có quyền nhạy cảm.

### Ai có thể cấu hình Vai trò Tag?

Các quản trị viên từ `/settings`, và các thành viên có quyền “Quản lý vai trò” bằng lệnh `/tagrole`.
