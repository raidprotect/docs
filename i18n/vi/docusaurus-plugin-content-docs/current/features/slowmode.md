---
title: Slowmode phòng ngừa
description: "Slowmode phòng ngừa của RaidProtect tự động điều chỉnh chế độ chậm của các kênh trên máy chủ Discord của bạn để giữ nhịp tin nhắn dễ theo dõi."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

**Slowmode phòng ngừa** của RaidProtect, dành riêng cho các máy chủ [Premium](/vi/premium), tự động điều chỉnh [chế độ chậm](./moderation.mdx#slowmode) của các kênh để giữ một **tốc độ tin nhắn** mỗi phút. Khi một kênh sôi động quá mức (thông báo, livestream, dòng thành viên mới đổ vào, đầu một [đợt raid](/vi/learn/discord-raid)), chúng tôi tăng chế độ chậm; khi nó dịu xuống, chúng tôi hạ xuống. Những người kiểm duyệt của bạn không còn phải theo dõi cuộc trò chuyện để chỉnh thủ công.

## ❓ Cách hoạt động {#working}

- **Một tốc độ tin nhắn**: với mỗi kênh được điều tiết, bạn chọn số tin nhắn mỗi phút mà nó có thể nhận (mặc định 30). Vượt quá mức đó, chế độ chậm tự tăng lên.
- **Các giới hạn**: chế độ chậm luôn nằm giữa **slowmode tối thiểu** và **slowmode tối đa** mà bạn đã đặt cho kênh.
- **Điều chỉnh liên tục**: chúng tôi điều chỉnh chế độ chậm theo tốc độ thực tế, và nó tăng ngay khi một kênh sôi động quá mức.
- **Hạ dần**: khi kênh dịu xuống, chế độ chậm dần dần trở về mức tối thiểu.
- **Nhật ký kiểm tra**: mỗi thay đổi mang lý do “Slowmode tự động”.

## 🛠️ Cấu hình slowmode phòng ngừa {#config}

### Thêm một kênh được điều tiết {#add}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Slowmode phòng ngừa**”.
4. Nhấp vào “**Thêm**” bên cạnh một vị trí trống.
5. Chọn kênh (kênh văn bản, thông báo, thoại hoặc sân khấu: chế độ chậm của một kênh thoại điều tiết kênh văn bản tích hợp của nó).

<Settings start="slowmode" />

**Giới hạn:** 6 kênh được điều tiết mỗi máy chủ.

:::warning Quyền cần thiết
RaidProtect phải có quyền `Quản lý kênh` trong mỗi kênh được điều tiết.
:::

### Chỉnh một kênh {#channel}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Slowmode phòng ngừa**”.
4. Nhấp vào “**Chỉnh sửa**” bên cạnh kênh.
5. Chọn “**Tốc độ tin nhắn**”, “**Slowmode tối thiểu**” và “**Slowmode tối đa**”.

<Settings start="slowmodeChannel" />

| Thiết lập | Giá trị đề xuất | Mặc định |
|---|---|---|
| **Tốc độ tin nhắn** | từ 5 đến 120 tin nhắn mỗi phút | 30 tin nhắn / phút |
| **Slowmode tối thiểu** | từ 0 đến 10 giây | 0 giây (không có mức tối thiểu) |
| **Slowmode tối đa** | từ 5 giây đến 10 phút | 2 phút |

Với một giá trị không có trong danh sách, nhấp vào “**Tùy chỉnh**” và nhập các giá trị của riêng bạn (ví dụ `40` tin nhắn mỗi phút, mức tối thiểu `0s`, mức tối đa `2m 30s`). Chế độ chậm không thể vượt quá 6 giờ, giới hạn của Discord.

<SettingsModal name="slowmodeCustom" />

Từ màn hình của một kênh, bạn cũng có thể:
- tắt hoặc bật lại việc điều tiết bằng công tắc ở phía trên bên phải. Tắt điều tiết đặt chế độ chậm của kênh về 0;
- nhấp vào “**Áp dụng cho mọi kênh được điều tiết**” để sao chép các thiết lập này sang tất cả các kênh được điều tiết của bạn;
- nhấp vào “**Xóa**” để giải phóng vị trí.

## 🕒 Slowmode phòng ngừa và lệnh /slowmode {#manual}

Nếu một người kiểm duyệt dùng [lệnh `/slowmode`](./moderation.mdx#slowmode) trên một kênh được điều tiết, giá trị thủ công của họ được áp dụng và **việc điều tiết tự động bị tắt** cho kênh đó. Một tin nhắn báo điều này. Để bật lại điều tiết, hãy kích hoạt lại từ màn hình của kênh trong `/settings`.

## Câu hỏi thường gặp {#faq}

### Khác biệt giữa slowmode phòng ngừa và chống spam là gì?

[Chống spam](./anti-spam.mdx) xử phạt các thành viên spam. Slowmode phòng ngừa không xử phạt ai: nó làm chậm cả một kênh khi tốc độ chung trở nên quá cao, để giữ cuộc thảo luận dễ theo dõi.

### Có thể điều tiết bao nhiêu kênh?

Tối đa 6 kênh mỗi máy chủ, mỗi kênh có tốc độ tin nhắn và các giới hạn riêng.

### Slowmode phòng ngừa có miễn phí không?

Không, nó dành riêng cho các máy chủ Premium.

### Điều gì xảy ra nếu tôi chỉnh chế độ chậm thủ công?

Lệnh /slowmode áp dụng giá trị của bạn và tắt việc điều tiết tự động của kênh đó. Bạn có thể bật lại trong /settings, thẻ Bảo vệ, Slowmode phòng ngừa.
