---
title: Thành viên mới và chào đón
description: "Phần chào đón của RaidProtect chào mừng các thành viên mới của máy chủ Discord của bạn, cấp vai trò cho họ và lọc các tài khoản quá mới."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

Phần **chào đón** của RaidProtect lo cho các thành viên mới của máy chủ Discord của bạn ngay khi họ vào: một **tin nhắn chào mừng** kèm thẻ mang tên họ, các **vai trò tự động**, và một **tuổi tối thiểu của tài khoản** giữ ở ngoài các tài khoản được tạo riêng cho dịp này, vốn thường được dùng trong các [đợt raid](/vi/learn/discord-raid). Ba thiết lập này nằm trong thẻ “**Thành viên mới**” của `/settings`, bên cạnh [captcha](./captcha.md) và [Auto RaidMode](./raid-mode.md).

## ❓ Cách hoạt động {#working}

Khi một người dùng tham gia máy chủ của bạn, [chế độ raid](./raid-mode.md#action), [tuổi tối thiểu của tài khoản](#minage) rồi [captcha](./captcha.md) được áp dụng trước khi họ được chấp nhận. Sau khi được chấp nhận, họ nhận [vai trò tự động](#autorole) và [tin nhắn chào mừng](#welcome-message).

## 👋 Tin nhắn chào mừng {#welcome-message}

Tin nhắn chào mừng được gửi vào kênh bạn chọn khi một thành viên được chấp nhận vào máy chủ. Nó chứa văn bản của bạn và một **thẻ chào mừng** được tạo cho từng thành viên: ảnh đại diện của họ, “Chào mừng đến với” theo sau là tên máy chủ, và số thứ tự thành viên của họ.

<Settings start="welcome" />

### Bật tin nhắn chào mừng {#welcome-config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Tin nhắn chào mừng**”.
4. Trong “**Kênh chào mừng**”, chọn kênh văn bản nơi tin nhắn sẽ được gửi. Chọn một kênh sẽ bật tin nhắn.

Công tắc ở phía trên bên phải màn hình bật hoặc tắt tin nhắn chào mừng. Bản xem trước của tin nhắn hiển thị bên dưới màn hình và được cập nhật sau mỗi lần chỉnh sửa.

:::info
Kênh chào mừng không thể là kênh của captcha, của jail, của HoneyPot hay của DISCON. Nếu kênh bị xóa, thiết lập sẽ bị xóa trống.
:::

### Văn bản và biến {#welcome-text}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Tin nhắn chào mừng**”.
4. Trong “**Nội dung tin nhắn**”, nhấp vào “**Văn bản**”.
5. Viết tin nhắn của bạn (tối đa 1 200 ký tự), rồi xác nhận. Để trống trường này để quay về tin nhắn mặc định.

<SettingsModal name="welcomeText" />

Văn bản mặc định là “Chào mừng `{user.mention}` đến với **`{server.name}`**! 🎉”, bằng ngôn ngữ của máy chủ. Bạn có thể dùng các biến sau:

| Biến | Được thay bằng |
|---|---|
| `{user.mention}` | Lượt nhắc đến thành viên |
| `{user.name}` | Tên người dùng của họ |
| `{user.displayname}` | Tên hiển thị của họ |
| `{user.id}` | [ID](../guides/id.mdx) của họ |
| `{server.name}` | Tên máy chủ |
| `{server.member_count}` | Số thành viên của máy chủ |
| `{server.id}` | ID của máy chủ |

### Nhắc đến thành viên {#welcome-mention}

Tùy chọn “**Nhắc đến thành viên**”, bật theo mặc định, thông báo cho thành viên mới khi tin nhắn chào mừng của họ được đăng. Nó chỉ nhắc đến những người mới vào, không bao giờ nhắc @everyone hay các vai trò.

### Nút {#welcome-buttons}

Bạn có thể thêm bên dưới tin nhắn các nút dẫn đến một kênh của máy chủ, ví dụ “Đọc nội quy”.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Tin nhắn chào mừng**”.
4. Trong “**Quản lý các nút**”, chọn “**Thêm nút**”.
5. Đặt tên cho nút và chọn kênh cần liên kết.

Để sửa hoặc xóa một nút, hãy chọn nó trong cùng danh sách.

**Giới hạn:** 2 nút ở bản miễn phí, 4 nút ở bản [premium](/vi/premium). Nếu Premium hết hạn, chỉ 2 nút đầu tiên còn được hiển thị.

### Màu <span className="badge-premium">Premium</span> {#welcome-color}

Với [Premium](/vi/premium), nhấp vào “**Màu**” trong “**Nội dung tin nhắn**” để chọn màu của thanh bên trái tin nhắn: một màu RaidProtect trong danh sách, hoặc một mã thập lục phân (ví dụ `#D35F5F`). Nếu không chọn, tin nhắn lấy màu biệt danh của bot nếu bạn đã [tùy chỉnh](/vi/premium) nó, nếu không thì dùng màu mặc định. Thẻ chào mừng được nhuộm cùng màu.

### Dòng người đổ vào và raid {#welcome-raid}

- **Gộp nhóm:** khi nhiều thành viên vào cùng lúc, các lượt vào được gộp lại để không làm ngập kênh.
- **Tạm dừng trong một đợt raid:** chừng nào [chế độ raid](./raid-mode.md) của RaidProtect hoặc [Đóng tham gia](./join-lock.mdx) còn hoạt động, không có tin nhắn chào mừng nào được gửi.

## 🏷️ Vai trò tự động {#autorole}

Vai trò tự động được cấp cho mỗi thành viên mới ngay khi họ vào, hoặc sau khi vượt qua [captcha](./captcha.md) nếu captcha đang hoạt động. Chúng thay thế vai trò tự động cũ của captcha, thiết lập của nó đã được lấy sang tự động.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Vai trò tự động**”.
4. Chọn một hoặc nhiều vai trò.

Để gỡ tất cả vai trò tự động, nhấp vào “**Đặt lại**”.

<Settings start="autorole" />

**Giới hạn:** 3 vai trò ở bản miễn phí, 10 vai trò ở bản [premium](/vi/premium).

:::warning
Hãy tránh các vai trò mang quyền: một vai trò được cấp tự động không nên trao bất kỳ quyền lực nào. RaidProtect từ chối các vai trò do tích hợp quản lý, các vai trò cao hơn vai trò của nó hoặc của bạn, và những vai trò mang quyền kiểm duyệt: các vai trò chấp nhận được trong lựa chọn của bạn vẫn được giữ lại, và một tin nhắn khác giải thích vì sao các vai trò khác bị từ chối (nếu tất cả đều bị từ chối, cấu hình hiện có được giữ nguyên). Nó cảnh báo bạn nếu một vai trò đã chọn sau này có thêm quyền.
:::
:::info
Nếu máy chủ của bạn dùng một bot khác cho vai trò tự động, nó có thể cấp vai trò trước captcha. Hãy thay nó bằng các vai trò tự động của RaidProtect.
:::

## 🎂 Tuổi tối thiểu của tài khoản {#minage}

Để tăng cường bảo mật, bạn có thể yêu cầu một tuổi tối thiểu cho các tài khoản Discord của thành viên mới. Các tài khoản được tạo ngay trước một đợt raid sẽ không qua được cửa. Bộ lọc được áp dụng ở mỗi lượt vào.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Tuổi tối thiểu của tài khoản**”.
4. Trong “**Tuổi tối thiểu của tài khoản**”, chọn 2 giờ, 12 giờ, 1 ngày hoặc 2 ngày, hoặc một “**Giá trị tùy chỉnh**” (ví dụ `0y 3d 1h`, tối đa 10 năm).
5. Trong “**Hành động**”, chọn điều xảy ra với các tài khoản quá mới.

Để tắt bộ lọc, nhấp vào “**Đặt lại**”. RaidProtect cần quyền `KICK_MEMBERS`.

<Settings start="minage" />

### Hành động {#minage-action}

| Hành động | Hiệu lực với một tài khoản quá mới |
|---|---|
| “**Đuổi**” (mặc định) | Bị đuổi ở mỗi lần thử chừng nào tài khoản còn quá mới. |
| “**Jail đến khi đủ tuổi**” | Vào được nhưng không thấy gì của máy chủ, và ra khỏi [jail](./sanctions.mdx#jail) ngay khi đủ tuổi yêu cầu. |
| “**Giữ lại ở cửa**” | Bị chặn ở một [captcha](./captcha.md) mà chỉ giải được khi đủ tuổi. |

Tài khoản nhận một tin nhắn riêng kèm ngày họ sẽ được truy cập máy chủ. Các lần đuổi, đưa vào jail và cấm được ghi trong kênh nhật ký.

:::info
- “**Jail đến khi đủ tuổi**” cần một Vai trò Jail, được cấu hình trong thẻ “**Kiểm duyệt**” > “**Hình phạt**”. Nếu không có, RaidProtect đề nghị bạn cấu hình nó hoặc chuyển sang “**Cấm đến khi đủ tuổi**”: tài khoản bị đưa ra khỏi máy chủ và lệnh cấm được gỡ tự động vào đúng ngày.
- “**Giữ lại ở cửa**” cần một captcha đang hoạt động ở chế độ **Bảng (Tương tác)**.
:::

### 🎫 Bypass tuổi tối thiểu {#bypass-minage}

Dùng lệnh: ```/bypass minage [user]```

Hãy thay `[user]` bằng [ID](../guides/id.mdx) mong muốn, người đó sẽ có 10 phút để tham gia máy chủ mà không bị chặn bởi tuổi yêu cầu. Bạn cũng có thể dùng lệnh mà không chỉ định người dùng để biết danh sách người dùng bypass hiện tại.

## Câu hỏi thường gặp {#faq}

### Khi nào tin nhắn chào mừng được gửi?

Khi thành viên được chấp nhận: ngay khi vào nếu captcha không áp dụng, nếu không thì sau khi vượt qua captcha. Nó không được gửi trong một đợt raid hay khi Đóng tham gia đang bật.

### Có thể bỏ thẻ chào mừng không?

Không, thẻ chào mừng được đính kèm vào mỗi tin nhắn chào mừng. Với Premium, bạn có thể đổi màu của nó.

### Có thể cấp bao nhiêu vai trò tự động?

3 vai trò ở bản miễn phí và 10 với Premium. Các vai trò mang quyền kiểm duyệt bị từ chối.

### Vai trò tự động có được cấp trước captcha không?

Không. Khi captcha áp dụng cho thành viên, các vai trò tự động của họ được cấp sau khi vượt qua captcha.

### Nên chọn tuổi tối thiểu bao nhiêu?

Một giá trị từ vài giờ đến 1 ngày là đủ để loại phần lớn các tài khoản được tạo cho một đợt raid, mà không làm phiền các thành viên thật. [Lệnh `/setup`](../setup.md) đặt mặc định 6 giờ.

### Một tài khoản quá mới có bị cấm không?

Không, mặc định thì không: nó bị đuổi ở mỗi lần thử. Bạn cũng có thể đưa nó vào jail đến khi đủ tuổi hoặc giữ nó sau captcha. Cấm tạm thời chỉ là phương án dự phòng khi jail chưa được cấu hình.
