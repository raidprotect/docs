---
title: Bật cộng đồng
description: "Bật cộng đồng Discord cho máy chủ của bạn để mở khóa các thiết lập bảo mật mà RaidProtect cần: Đóng tin nhắn riêng, chế độ raid và nhiều hơn nữa."
---

Việc bật cộng đồng sẽ mở ra nhiều thiết lập bảo mật nâng cao của Discord, mà một số tính năng của RaidProtect cần đến:
- [Đóng tin nhắn riêng](../features/dm-lock.mdx) (**DM Lock**);
- [chế độ raid](../features/raid-mode.md) và [Đóng tham gia](../features/join-lock.mdx), **chỉ** với hành động trong đợt tấn công “**Khoá lời mời**” (thiết lập mặc định).

[Captcha](../features/captcha.md) và các hành động khác của chế độ raid (“**Đuổi những người vào**”, “**Gửi tới captcha**”, “**Captcha bị đóng băng trong đợt tấn công**”) hoạt động mà không cần cộng đồng.

## 🚦 Điều kiện tiên quyết {#requirement}

- Là quản trị viên của máy chủ Discord.

## 🚩 Bật các chức năng cộng đồng {#steps}

1. **Mở cài đặt máy chủ của bạn**
   - Nhấp vào tên máy chủ ở góc trên bên trái > “Cài đặt máy chủ”.

2. **Truy cập mục “Cộng đồng”**
   - Trong thanh bên, vào thẻ **Bật Cộng đồng** rồi nhấp vào **Bắt đầu**.

:::note
Nếu cộng đồng đã được bật trên máy chủ của bạn, mục này sẽ có tên **Tổng quan cộng đồng**.
:::

3. **Làm theo trình hướng dẫn kích hoạt**
   - Bật xác minh qua email cho tất cả thành viên.
   - Bật bộ lọc nội dung phản cảm.
   - Cấu hình một kênh quy tắc và một kênh thông báo.
   - Chấp nhận bộ nguyên tắc dành cho máy chủ cộng đồng.

4. **Hoàn tất cấu hình**
   - Nhấp vào “Hoàn tất thiết lập”. Huy hiệu “Cộng đồng” sẽ hiển thị trên máy chủ của bạn khi quá trình kích hoạt hoàn tất.

![Ảnh chụp màn hình bật cộng đồng Discord](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-enable-community.webp)

## 💡 Dùng các mô-đun DM Lock & Chế độ raid sau khi kích hoạt {#use}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Với [Đóng tin nhắn riêng](../features/dm-lock.mdx), mở thẻ “**Bảo vệ**” và nhấp vào “**Chỉnh sửa**” bên cạnh “**Đóng tin nhắn riêng**”.
3. Với [chế độ raid](../features/raid-mode.md#config), mở thẻ “**Thành viên mới**” và nhấp vào “**Cấu hình**” bên cạnh “**Auto RaidMode**”.

Nếu một khung thông báo yêu cầu bạn bật cộng đồng, hãy nhấp vào “**Làm mới**”: khung đó sẽ biến mất khi cộng đồng đã được bật.
