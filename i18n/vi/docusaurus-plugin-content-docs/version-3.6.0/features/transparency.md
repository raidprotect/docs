---
title: Minh bạch
description: "Minh bạch của RaidProtect cho các thành viên thấy máy chủ được kiểm duyệt thế nào: tóm tắt định kỳ, modlog công khai và lệnh /transparency."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import TransparencyMockup from '@site/src/components/DiscordMessage/mockups/transparency';

<TransparencyMockup />

Minh bạch cho phép bạn cho các thành viên thấy máy chủ được kiểm duyệt như thế nào. Nó dựa trên ba thành phần bổ sung cho nhau: các **bản tóm tắt kiểm duyệt định kỳ**, một **modlog công khai** và **lệnh `/transparency`**.

## 🛠️ Cấu hình Minh bạch {#config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Minh bạch**”.

Màn hình cho bạn truy cập “**Tóm tắt định kỳ**”, “**Modlog công khai**” và công tắc “**Lệnh /transparency**”.

<Settings start="transparency" />

## 📊 Tóm tắt định kỳ {#recaps}

Một bản tóm tắt là bản tổng hợp các hành động kiểm duyệt, được đăng tự động trong một kênh theo tần suất đã chọn.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Minh bạch**”.
4. Nhấp vào “**Cấu hình**” bên cạnh “**Tóm tắt định kỳ**”.
5. Nhấp vào “**Thêm**” bên cạnh một vị trí trống.
6. Màn hình của bản tóm tắt mới mở ra: chỉnh **tần suất**, **kênh** đăng, có thể thêm một vai trò để **nhắc đến**, rồi nhấp vào “**Bật**” ở bên phải tiêu đề.

Để quay lại một bản tóm tắt sau này, nhấp vào “**Chỉnh sửa**” bên cạnh nó trong danh sách.

<Settings start="recaps" />

Một bản tóm tắt mới được tạo ở trạng thái tắt, hàng tuần, đăng vào khoảng 08:00, trong kênh của modlog công khai. Các tần suất khả dụng là: **Hàng tuần** (mặc định), **Hai tuần một lần**, **Hàng tháng**, **Hàng quý** và **Hàng năm**. Hai bản tóm tắt cùng tần suất không thể được đăng trong cùng một kênh.

Từ màn hình của một bản tóm tắt, bạn cũng có thể:

- “**Đổi tên**” bản tóm tắt (để trống trường này để lấy tên của tần suất);
- chỉnh “**Giờ**” đăng của nó (xem bên dưới);
- nhấp vào “**Cung cấp dữ liệu cho /transparency**” để biến nó thành nguồn của [lệnh `/transparency`](#command);
- “**Xóa**” nó.

Bản tóm tắt chứa:
- **tổng số hành động kiểm duyệt** trong kỳ;
- chi tiết theo loại hình phạt (cấm, softban, đuổi, timeout, mute, jail, cảnh cáo và các hành động khác);
- số **vụ lừa đảo bị [ScamLens](./scam-images.md) chặn**;
- phân bổ giữa các hành động **tự động** và các hành động **của đội ngũ**.

**Giới hạn:** 1 bản tóm tắt ở bản miễn phí, 5 bản tóm tắt ở bản [Premium](/vi/premium) (ví dụ một bản hàng tuần cho đội ngũ và một bản hàng tháng công khai).

### Giờ đăng {#recap-schedule}

1. Trên màn hình của một bản tóm tắt, nhấp vào “**Giờ**”.
2. Trong cửa sổ, chọn “**Giờ đăng**” (giờ địa phương, từ `00:00` đến `23:00`).

<SettingsModal name="recapSchedule" />

| Phiên bản | Thời điểm đăng |
|---|---|
| Miễn phí | Trong khoảng 12 giờ tính từ giờ đã chọn |
| [Premium](/vi/premium) | Vào khoảng giờ đã chọn, chênh lệch trong vòng 1 giờ |

Giờ đã chọn theo **múi giờ của máy chủ**, được nhắc lại bên dưới dòng “**Giờ**”. Múi giờ được chỉnh một lần cho cả máy chủ, trong thẻ “**Chung**”:

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Chung**”.
3. Nhấp vào “**Chỉnh sửa**” bên cạnh “**Múi giờ**”.
4. Chọn chênh lệch của bạn trong “**Múi giờ (UTC)**”, hoặc nhập một “**Múi giờ tùy chỉnh**” như `Europe/Paris`, được ưu tiên và xử lý giờ mùa hè tự động.

<SettingsModal name="timezone" />

## 📢 Modlog công khai {#modlog}

Modlog công khai đăng **mọi hành động kiểm duyệt** trong một kênh mà các thành viên của bạn thấy được, chỉ với những thông tin bạn chọn hiển thị.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Minh bạch**”.
4. Nhấp vào “**Cấu hình**” bên cạnh “**Modlog công khai**”.
5. Chọn một kênh, hoặc nhấp vào “**Tạo một cái cho tôi**” (RaidProtect tạo kênh `public-modlog`, chỉ đọc đối với @everyone).
6. Trong “**Thông tin hiển thị**”, chọn: “**Lý do**”, “**Người kiểm duyệt**”, “**Thời lượng**”, “**Thành viên bị xử phạt**” (mặc định: Lý do và Thời lượng).
7. Trong “**Hình phạt được công bố**”, chọn: “**Thủ công (đội ngũ)**” và/hoặc “**Tự động (RaidProtect)**” (mặc định: cả hai).
8. Nhấp vào “**Bật**” ở bên phải tiêu đề màn hình.

<Settings start="modlog" />

Khi hành động là tự động và việc hiển thị người kiểm duyệt được bật, modlog ghi “RaidProtect” thay cho tên người kiểm duyệt.

## 📜 Lệnh `/transparency` {#command}

Dùng lệnh: ```/transparency```

Lệnh cho phép bất kỳ thành viên nào xem **báo cáo minh bạch gần nhất** của kỳ đã kết thúc (phản hồi tạm thời, chỉ thành viên đó thấy).

- Lệnh phải được bật bằng công tắc “**Lệnh /transparency**” của màn hình Minh bạch.
- Nếu bạn có nhiều bản tóm tắt, nút “**Cung cấp dữ liệu cho /transparency**” trên một bản tóm tắt chỉ định nó là nguồn mà lệnh sử dụng. Bản tóm tắt này được đánh dấu ⭐ trong danh sách.

## Câu hỏi thường gặp {#faq}

### Tôi có thể lên lịch bao nhiêu bản tóm tắt?

Chỉ một ở bản miễn phí, tối đa năm với [Premium](/vi/premium).

### Bản tóm tắt được đăng lúc mấy giờ?

Vào giờ bạn chọn, theo múi giờ của máy chủ được chỉnh trong thẻ “**Chung**” của `/settings`. Ở bản miễn phí, việc đăng diễn ra trong khoảng 12 giờ tính từ giờ này; với Premium, chênh lệch trong vòng một giờ.

### Các thành viên của tôi có thấy ai đã xử phạt họ không?

Chỉ khi bạn đánh dấu “**Người kiểm duyệt**” trong thông tin hiển thị của modlog công khai. Với một hành động tự động, modlog khi đó ghi RaidProtect.
