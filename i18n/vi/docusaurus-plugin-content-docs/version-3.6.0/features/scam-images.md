---
title: Hình ảnh lừa đảo
description: "ScamLens, công cụ chống lừa đảo của RaidProtect, tự động phát hiện và xóa các hình ảnh lừa đảo trên máy chủ Discord của bạn. Bật mặc định, không cần cấu hình."
---

import AntiScamMockup from '@site/src/components/DiscordMessage/mockups/anti-scam';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

RaidProtect tự động bảo vệ máy chủ của bạn khỏi các **hình ảnh lừa đảo** (lừa đảo crypto, giveaway giả, khuyến mãi sòng bạc giả). Biện pháp bảo vệ này có tên **ScamLens**: nó phân tích các hình ảnh được đăng, xóa những hình là lừa đảo đã biết và xử phạt tài khoản đứng sau tin nhắn (thường là một [tài khoản bị chiếm](/vi/learn/token-grabber)).

<AntiScamMockup />

:::tip Không cần cấu hình
ScamLens được **bật mặc định ngay khi RaidProtect vào máy chủ của bạn**. Bạn được bảo vệ ngay lập tức, không cần cấu hình gì.
:::

## ❓ Cách hoạt động {#working}

ScamLens so sánh mọi hình ảnh được đăng với các vụ lừa đảo đã biết. Không có phần văn bản nào của tin nhắn được đọc.

Tùy theo kết quả khớp tìm được:

- **Khớp chắc chắn**: tin nhắn bị **xóa** ngay lập tức và tác giả bị **xử phạt**. Nhật ký hình phạt nêu rõ kênh bị ảnh hưởng.
- **Khớp không chắc chắn**: tin nhắn bị xóa **để phòng ngừa**, không có hình phạt. Nếu sau đó hình ảnh được xác nhận là lừa đảo, hình phạt có thể đến muộn hơn.

Lý do hình phạt là “Phát hiện lừa đảo (Hình ảnh Crypto)”. Trên một máy chủ [Premium](/vi/premium), thành viên bị xử phạt cũng nhận một tin nhắn riêng.

ScamLens chỉ lo các **hình ảnh**. Các loại spam khác do [Chống spam](./anti-spam.mdx) và [HoneyPot](./honeypot.md) xử lý.

## 🔧 Cấu hình ScamLens {#config}

ScamLens được chỉnh trong mô-đun **Automod** của thẻ “**Bảo vệ**”, trên màn hình “**Bộ lọc hình ảnh**”.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Automod**”.
4. Nhấp vào “**Cấu hình**” bên cạnh “**Hình ảnh**”.

<Settings start="imageFilter" />

### Bật hoặc tắt ScamLens {#toggle}

Trên màn hình “**Bộ lọc hình ảnh**”, nhấp vào “**Tắt**” (hoặc “**Bật**”) ở phía trên bên phải. Mỗi thay đổi được ghi vào nhật ký của bạn.

### Chọn hình phạt và thời lượng {#sanction}

Trong bộ chọn “**Hình phạt áp dụng**”, hãy chọn:
- “**Mặc định**”: hình phạt của [HoneyPot](./honeypot.md#sanction) nếu nó đang hoạt động, nếu không thì loại trừ tạm thời (Timeout);
- hoặc một hình phạt cụ thể: Cấm, Softban, Jail, Đuổi, Mute, Timeout hoặc Cảnh cáo.

Trong bộ chọn “**Thời lượng hình phạt**”, chọn 5 phút, 1 giờ, 1 ngày hoặc “**Giá trị tùy chỉnh**” (ví dụ `30m`, `2h`, `7d`). Tùy chọn “**Mặc định**” theo thời lượng của HoneyPot nếu nó đang hoạt động, nếu không là **1 ngày**. Thời lượng chọn ở đây là riêng của ScamLens, độc lập với Chống spam và HoneyPot. Nó cũng áp dụng cho các hình phạt đến muộn hơn.

:::info
- Một **Jail** hoặc **Mute** chưa có vai trò được cấu hình sẽ trở thành **Timeout**.
- Tin nhắn công khai thông báo hình phạt theo thiết lập “**Tin nhắn công khai về hình phạt**” của [Chống spam](./anti-spam.mdx#public-message), có thể tắt với Premium.
:::

## 🗂️ Danh mục hình ảnh <span className="badge-premium">Premium</span> {#catalog}

Ngoài danh mục toàn cục “Crypto Scam”, do chúng tôi quản lý và áp dụng trên mọi máy chủ, các máy chủ [Premium](/vi/premium) có thể chặn **hình ảnh của riêng họ**, bất kể nội dung: ảnh chụp Nitro giả, hình ảnh của một vụ lừa đảo nhắm vào cộng đồng của bạn, hình ảnh bị cấm trên máy chủ của bạn…

**Giới hạn:** 2 danh sách mỗi máy chủ, 10 hình ảnh mỗi lần gửi.

### Tạo một danh sách {#lists}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Automod**”.
4. Nhấp vào “**Cấu hình**” bên cạnh “**Hình ảnh**”.
5. Trong “**Danh mục hình ảnh**”, nhấp vào “**Tạo danh sách**” và đặt tên cho nó.
6. Chọn “**Kênh xác minh**” của danh sách.
7. Nhấp vào “**Thêm hình ảnh**” và gửi tối đa 10 hình ảnh. Kết quả cho biết các hình ảnh đã thêm, các biến thể được gắn vào, các bản trùng bị bỏ qua và các hình ảnh bị từ chối.

Các hình ảnh của một danh sách bị xóa ngay khi chúng xuất hiện lại trên máy chủ của bạn, và tác giả nhận hình phạt đã chọn ở trên. Lý do của hình phạt nêu tên danh sách (“Hình ảnh trong danh sách ‘_tên_’”). Nếu không có hình phạt, việc xóa được ghi vào nhật ký kiểm duyệt của bạn, kèm kênh và danh sách.

:::warning Một danh sách = một sổ đăng ký hình ảnh duy nhất
Hãy xếp vào một danh sách chỉ một loại nội dung. Trộn các hình ảnh không liên quan trong cùng một danh sách làm hỏng việc phát hiện: hãy tạo một danh sách thứ hai thay vào đó.
:::

### Kênh xác minh {#review}

Khi một hình ảnh giống với một hình ảnh trong danh sách của bạn nhưng không khớp chắc chắn, chúng tôi báo nó trong **kênh xác minh** của danh sách (“Cần xác minh: danh sách …”), kèm hai nút:
- “**Xác nhận, đây là nội dung bị cấm**”: hình ảnh được thêm vào danh mục, tin nhắn bị xóa và tác giả bị xử phạt;
- “**Bỏ qua, đây là nội dung an toàn**”: hình ảnh này sẽ không kích hoạt xác minh nữa.

Cần quyền `Quản lý máy chủ` để quyết định. Nếu không có kênh xác minh, các kết quả khớp không chắc chắn vẫn im lặng.

## 📊 Minh bạch {#reports}

Mỗi vụ lừa đảo bị ScamLens chặn:

- xuất hiện trong [bản tóm tắt Minh bạch](./transparency.md#recaps) của máy chủ bạn (“X vụ lừa đảo bị ScamLens chặn”);
- được tính vào bộ đếm tài khoản bị báo của [HoneyPot](./honeypot.md);
- góp phần tăng cường bảo vệ cho **tất cả các máy chủ** dùng RaidProtect.

### Các báo cáo hàng tháng của chúng tôi {#recaps}

Mỗi tháng, chúng tôi công bố **[Thời tiết mối đe dọa](/blog/tags/threats)**, một bản tổng kết công khai về hoạt động của ScamLens. Số liệu cộng dồn kể từ [lúc ra mắt ngày 14 tháng 2 năm 2026](/blog/scamlens-early-activation), trên toàn bộ các máy chủ được RaidProtect bảo vệ:

| Báo cáo | Hình ảnh lừa đảo đã xóa | Tài khoản bị chiếm được phát hiện |
|---|---|---|
| [Tổng kết 1 tháng](/blog/scamlens-1-month-recap) *(tháng 3 năm 2026)* | 260 000 | 15 000 |
| [Tháng 4 năm 2026](/blog/threat-weather-april-2026) | 1 400 000 | 40 000 |
| [Tháng 5 năm 2026](/blog/threat-weather-may-2026) | 2 300 000 | 80 000 |
| [Tháng 6 năm 2026](/blog/threat-weather-june-2026) | 4 000 000 | 160 000 |

## Câu hỏi thường gặp {#faq}

### Có cần cấu hình ScamLens không?

Không. ScamLens được bật mặc định ngay khi RaidProtect vào máy chủ của bạn. Bạn được bảo vệ ngay lập tức, không cần cấu hình gì.

### ScamLens có chặn thứ gì khác ngoài hình ảnh không?

Không, ScamLens chỉ lo hình ảnh. Mặc định, nó chặn các hình ảnh lừa đảo đã biết. Các máy chủ Premium cũng có thể thêm hình ảnh của riêng họ nhờ danh mục hình ảnh. Các loại spam khác do [Chống spam](./anti-spam.mdx) và [HoneyPot](./honeypot.md) xử lý.

### Hình phạt nào được áp dụng cho một hình ảnh lừa đảo?

Mặc định, ScamLens áp dụng hình phạt và thời lượng của [HoneyPot](./honeypot.md#sanction) của bạn, hoặc một Timeout một ngày nếu HoneyPot chưa được bật. Bạn có thể chọn hình phạt và thời lượng khác trong /settings, thẻ Bảo vệ, mô-đun Automod, màn hình Bộ lọc hình ảnh.

### Làm sao tắt ScamLens?

Trong /settings, thẻ Bảo vệ, nhấp vào “Cấu hình” bên cạnh Automod, rồi bên cạnh Hình ảnh, và dùng công tắc ở phía trên bên phải của màn hình Bộ lọc hình ảnh.
