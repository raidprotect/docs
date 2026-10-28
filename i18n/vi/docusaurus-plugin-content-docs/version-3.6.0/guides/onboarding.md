---
title: Quy trình chào đón và Captcha
description: "Cấu hình quy trình chào đón của Discord để captcha của RaidProtect hoạt động: làm cho kênh xác minh hiển thị với thành viên mới."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

Nếu kênh `#xác-minh` không hiển thị mặc định với thành viên mới, họ không thể vượt qua [captcha](../features/captcha.md) và bị kẹt lại. Hướng dẫn này nói về **Quy trình chào đón (Onboarding) của Discord** (Cài đặt máy chủ > Onboarding). Về tin nhắn chào mừng và vai trò tự động của RaidProtect, hãy xem trang [Thành viên mới và chào đón](../features/onboarding.md).

Trong hầu hết các trường hợp, RaidProtect sẽ sửa vấn đề giúp bạn: hãy bắt đầu từ bước 1.

## 1️⃣ Để RaidProtect sửa {#auto-fix}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Nếu một khung thông báo cho biết kênh xác minh **không hiển thị mặc định**, hãy nhấp vào:
   - “**Chuyển vào** _danh mục_” để đặt kênh vào một danh mục mà thành viên mới đã thấy được;
   - hoặc “**Tạo danh mục mới**” để chúng tôi tạo một danh mục “Chào mừng” được thêm vào các kênh mặc định.

Quyền của kênh được giữ nguyên khi di chuyển.

<Settings start="captcha" />

:::tip
Cùng màn hình đó cũng báo các **lỗ hổng** của vai trò `@Chưa xác minh`: các vai trò do Quy trình chào đón Discord cấp mà qua mặt bước xác minh, các kênh vẫn hiển thị với thành viên đang xác minh. Nút “**Sửa**” sẽ đóng các kênh liên quan. Xem [cảnh báo của màn hình Captcha](../features/captcha.md#alerts).
:::

## 2️⃣ Kiểm tra quyền của kênh {#permissions}

RaidProtect tự đặt quyền cho kênh `#xác-minh` và vai trò `@Chưa xác minh`. Nếu bạn đã sửa chúng, hãy kiểm tra lại:

1. Mở cài đặt của kênh `#xác-minh` (nhấp chuột phải > **Chỉnh sửa kênh**).
2. Trong thẻ **Quyền**:
   - Đảm bảo `@everyone` **không có** quyền xem kênh.
   - Kiểm tra rằng vai trò `@Chưa xác minh` **có** quyền **xem kênh** và **xem lịch sử tin nhắn**.
   - Ở chế độ **Bảng (Tương tác)**, chế độ mặc định, `@Chưa xác minh` **không được** gửi tin nhắn: mã được nhập trong một cửa sổ. Ở chế độ **Thử thách (Cổ điển)**, vai trò này phải có thể **gửi tin nhắn** để gõ mã.

{/* ![Ảnh chụp màn hình kiểm tra quyền của kênh](../assets/rp-verification-channel-permissions.webp) : cho thấy “Gửi tin nhắn” được cho phép, chỉ đúng ở chế độ Thử thách */}

## 3️⃣ Kiểm tra danh mục chào đón {#default-category}

Nếu bạn muốn sửa thủ công:

1. Vào **Cài đặt máy chủ** > **Onboarding**.
2. Trong phần **Kênh mặc định**, kiểm tra rằng danh mục chứa `#xác-minh` đã được đánh dấu là hiển thị với thành viên mới.
3. Nếu cần, chuyển `#xác-minh` vào một danh mục đã được đánh dấu.
4. Lưu các thay đổi.

![Ảnh chụp màn hình kiểm tra danh mục chào đón](../../../../en/docusaurus-plugin-content-docs/current/assets/rp-welcome-category.webp)

## 4️⃣ Làm mới cấu hình trong RaidProtect {#refresh-config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Nếu vẫn còn hiển thị một khung thông báo, hãy nhấp vào “**Làm mới**” để chạy lại việc kiểm tra. Khi khung thông báo biến mất, captcha hoạt động đúng.

## 5️⃣ Thử bằng một tài khoản thử nghiệm {#test-account}

Để xác nhận mọi thứ được cấu hình đúng:

1. Tham gia máy chủ bằng một tài khoản Discord khác.
2. Kiểm tra rằng kênh `#xác-minh` hiển thị khi vừa vào.
3. Nhấp vào “**Xác minh**” và nhập mã (chế độ Bảng), hoặc gõ mã trong kênh (chế độ Thử thách).
4. Sau khi xác minh, tài khoản sẽ có quyền truy cập các kênh còn lại.

## 🛠️ Vấn đề thường gặp và giải pháp {#common-issues}

| Vấn đề | Giải pháp |
|---------|----------|
| 🔴 Kênh `#xác-minh` vẫn không hiển thị | Nhấp vào “**Chuyển vào** _danh mục_” trên màn hình Captcha, hoặc đặt kênh vào một **danh mục đã được đánh dấu** trong phần chào đón của Discord. |
| 🚫 Vai trò `@Chưa xác minh` không viết được | Bình thường ở chế độ Bảng: thành viên nhấp vào “**Xác minh**”. Ở chế độ Thử thách, hãy cấp cho họ **quyền gửi tin nhắn** trong `#xác-minh`. |
| 🔓 Một thành viên chưa xác minh thấy các kênh khác | Nhấp vào “**Sửa**” trong khung cảnh báo lỗ hổng của màn hình Captcha, và gỡ các vai trò mà Quy trình chào đón Discord cấp khi vào. |
| ❌ Captcha không hoạt động sau khi chỉnh sửa | Nhấp vào “**Làm mới**” trên màn hình Captcha (thẻ “**Thành viên mới**” của `/settings`). |

---

✅ Làm theo các bước này, hệ thống xác minh của bạn sẽ hoạt động đầy đủ để chào đón thành viên một cách an toàn và chặn hiệu quả các bot hoặc đợt raid.
