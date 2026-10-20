---
title: Chống raid
description: "Chế độ raid của RaidProtect chặn tức thì các đợt người vào ồ ạt trên máy chủ Discord của bạn, tự động ngay khi phát hiện một đợt sóng đáng ngờ."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

import RaidModeMockup from '@site/src/components/DiscordMessage/mockups/raid-mode';

{/* <RaidModeMockup /> : obsolète en 3.5.0 (montre l'expulsion comme seule action du mode raid) */}

## Chế độ raid {#raid-mode}

**Chế độ raid** của RaidProtect là một tính năng khẩn cấp xử lý những người dùng mới cố tham gia máy chủ của bạn trong một [đợt người vào đáng ngờ](/vi/learn/discord-raid), trong tối đa 24 giờ. Bot bảo vệ của chúng tôi tự bật nó ngay khi phát hiện một đợt sóng, và bạn cũng có thể kích hoạt nó thủ công. Bạn chọn chúng tôi làm gì với những người vào: chặn lời mời, đuổi họ hoặc gửi họ tới [captcha](./captcha.md). Để đóng máy chủ lâu dài với thành viên mới, hãy dùng [lệnh `/joinlock`](./join-lock.mdx).

### ❓ Chế độ raid hoạt động thế nào? {#working}

- **Phát hiện:** **Auto RaidMode** bật chế độ raid khi có quá nhiều người dùng tham gia máy chủ của bạn cùng lúc. Theo mặc định, nó kích hoạt ở 10 lượt vào trong 10 giây.
- **Phản ứng:** trong chế độ raid, những người vào được xử lý theo [hành động trong đợt tấn công](#action) mà bạn đã chọn. Các tài khoản của đợt sóng đã kích hoạt chế độ cũng được xử lý: bị đuổi, hoặc bị đưa lại sau captcha với các hành động captcha.
- **Kết thúc:** chế độ raid tự tắt sau [thời lượng đã cấu hình](#duration), mặc định 5 phút.
- **Nhật ký:** một tin nhắn được đăng trong kênh nhật ký mỗi lần bật và tắt.
- **Chào đón:** [tin nhắn chào mừng](./onboarding.md#welcome-message) im lặng trong đợt sóng, để không làm ngập kênh chào mừng.

:::warning
Với hành động “**Khoá lời mời**” (mặc định), các chức năng cộng đồng của Discord là không thể thiếu cho chế độ raid. [Hãy làm theo hướng dẫn của chúng tôi để kiểm tra việc bật cộng đồng trên máy chủ của bạn.](../guides/community.md) Các hành động khác hoạt động mà không cần cộng đồng.
:::

#### Kích hoạt {#enable}

Một người dùng có quyền đuổi có thể bật chế độ raid thủ công.

Dùng lệnh: ```/raidmode [status] [duration]```

- Không có tùy chọn, lệnh hiển thị trạng thái của chế độ raid kèm một nút để bật hoặc tắt nó.
- Hãy thay `[status]` bằng **True** để bật, **False** để tắt.
- Hãy thay `[duration]` bằng thời lượng mong muốn (ví dụ `30m` hoặc `2h`, tối đa 24 giờ). Không có thời lượng, chúng tôi lấy thời lượng của Auto RaidMode.

Một tin nhắn được tự động đăng trong kênh nhật ký để báo việc kích hoạt. Chế độ raid thủ công áp dụng cùng [hành động](#action) như Auto RaidMode.

#### Tắt {#disable}

Chế độ raid tự tắt khi hết thời lượng. Bạn cũng có thể dừng nó sớm hơn bằng lệnh `/raidmode`, khi mối đe dọa đã qua. 😇

:::info
Lệnh `raidmode` có thể [dùng qua tiền tố](../guides/prefix.md).
:::

### 🚨 Cấu hình chế độ raid tự động {#config}

Nếu máy chủ của bạn thường đón nhiều thành viên mới cùng lúc, bạn nên chỉnh ngưỡng để tránh báo động giả. Mọi thiết lập đều nằm trên cùng một màn hình.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Auto RaidMode**”.

Công tắc ở phía trên bên phải màn hình bật hoặc tắt Auto RaidMode. RaidProtect cần quyền `MANAGE_GUILD`.

<Settings start="antiraid" />

#### Ngưỡng thành viên {#threshold}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Auto RaidMode**”.
4. Trong “**Số thành viên / 10 giây**”, chọn 10, 15, 20 hoặc 30 thành viên, hoặc một “**Giá trị tùy chỉnh**”.

Ngưỡng được tính trên một khung 10 giây. Giá trị mặc định là 10 thành viên.

:::note
Chúng tôi khuyên dùng một giá trị từ 10 đến 20 thành viên trong 10 giây để hệ thống hoạt động hiệu quả.
:::

#### Thời lượng của raidmode {#duration}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Auto RaidMode**”.
4. Trong “**Thời lượng trước khi tắt**”, chọn 1, 2, 5 hoặc 10 phút, hoặc một “**Giá trị tùy chỉnh**” từ 10 giây đến 24 giờ (ví dụ `5m 30s`).

Thời lượng mặc định là 5 phút.

#### Hành động trong đợt tấn công {#action}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Auto RaidMode**”.
4. Trong “**Hành động trong đợt tấn công**”, chọn hành động cần áp dụng cho những người vào.

| Hành động | Hiệu lực với những người vào | Khả dụng |
|---|---|---|
| “**Khoá lời mời**” (mặc định) | Discord đóng các lời mời của máy chủ, không ai vào được nữa. | Miễn phí, cần cộng đồng |
| “**Đuổi những người vào**” | Mỗi người vào bị đuổi và nhận một tin nhắn riêng mời họ quay lại khi chế độ raid đã tắt. | [Premium](/vi/premium) |
| “**Gửi tới captcha**” | Những người vào qua captcha thay vì bị đuổi. | Miễn phí, cần captcha đang hoạt động |
| “**Captcha bị đóng băng trong đợt tấn công**” | Những người vào chờ sau captcha và qua nó sau đợt sóng. | Miễn phí, cần captcha đang hoạt động ở chế độ Bảng |

:::tip
Với các hành động captcha, hãy đặt [kích hoạt của captcha](./captcha.md#trigger) ở **Tự động**: khi đó captcha chỉ được áp dụng trong các đợt raid, và những người vào của bạn vào thẳng phần thời gian còn lại.
:::

#### Chế độ đuổi <span className="badge-premium">Premium</span> {#kick-mode}

Công tắc “**Chế độ đuổi**” cũ đã trở thành hành động “**Đuổi những người vào**” của [hành động trong đợt tấn công](#action). Nó vẫn dành riêng cho các máy chủ [**Premium**](/vi/premium) và hoạt động mà không cần cộng đồng Discord.

#### Tự động đóng tin nhắn riêng {#close-dm}

Bạn có thể cấu hình **Auto RaidMode** để nó **tự động đóng tin nhắn riêng của máy chủ** ngay khi kích hoạt. Điều này thêm một lớp bảo vệ trong một đợt raid: các tài khoản mới không thể liên hệ riêng với các thành viên của bạn để [phish](/vi/learn/token-grabber) hoặc lừa đảo họ.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Auto RaidMode**”.
4. Nhấp vào “**Bật**” bên cạnh “**Đóng tin nhắn riêng**”.

Khi chế độ raid kết thúc, tin nhắn riêng trở về cấu hình trước đó.

:::info
Tùy chọn này chỉ áp dụng với hành động “**Khoá lời mời**”, vốn đi qua các hành động an ninh của Discord. Nó bổ sung cho [Đóng tin nhắn riêng vĩnh viễn](./dm-lock.mdx): nếu không có việc đóng vĩnh viễn, tin nhắn riêng chỉ bị đóng trong một đợt raid đang hoạt động.
:::

### 🎫 Bypass chế độ raid {#bypass-raid}

Bạn đang chờ một thành viên hợp lệ trong khi một đợt raid đang diễn ra? Hãy cho phép họ tham gia bất chấp chế độ raid:

Dùng lệnh: ```/bypass raid [user]```

Hãy thay `[user]` bằng [ID](../guides/id.mdx) mong muốn, người đó sẽ có 10 phút để tham gia máy chủ mà không bị chế độ raid đuổi. Bạn cũng có thể dùng lệnh mà không chỉ định người dùng để biết danh sách người dùng bypass hiện tại (tối đa 7 người dùng cùng lúc).

:::warning
Bypass chế độ raid chỉ áp dụng với hành động “**Đuổi những người vào**”: một người dùng bị chặn ở mức lời mời không thể được bypass. Với các hành động captcha, hãy dùng [bypass captcha](./captcha.md#bypass).
:::

## Tuổi tối thiểu {#minage}

Tuổi tối thiểu của tài khoản có phần riêng trong trang [Thành viên mới và chào đón](./onboarding.md#minage): chỉnh độ lâu đời, chọn hành động (đuổi, jail đến khi đủ tuổi, giữ lại ở cửa) và bypass.

### 🎂 Bypass tuổi tài khoản tối thiểu {#bypass-minage}

Dùng lệnh ```/bypass minage [user]```, được nêu chi tiết trong [bypass tuổi tối thiểu](./onboarding.md#bypass-minage).

## Câu hỏi thường gặp {#faq}

### Chế độ raid có tự động bật không?

Có. Theo mặc định, chúng tôi bật chế độ raid ngay khi 10 người dùng tham gia máy chủ của bạn trong 10 giây. Ngưỡng này có thể cấu hình trong các thiết lập của Auto RaidMode.

### Chế độ raid làm gì với những người mới vào?

Tùy hành động đã chọn: chặn lời mời (mặc định), đuổi những người vào ([Premium](/vi/premium)), gửi họ tới captcha, hoặc bắt họ chờ sau một captcha bị đóng băng cho đến khi đợt sóng kết thúc.

### Làm sao bật chế độ raid thủ công?

Một người dùng có quyền đuổi chạy lệnh `/raidmode`. Khi đó một tin nhắn được đăng trong kênh nhật ký để báo việc kích hoạt, và hành động đã chọn được áp dụng cho những người vào.

### Chế độ raid có tự tắt không?

Có. Nó tự tắt sau thời lượng chọn trong `/raidmode`, hoặc nếu không thì sau thời lượng của Auto RaidMode (mặc định 5 phút, tối đa 24 giờ). Bạn có thể dừng nó sớm hơn bằng cùng lệnh đó.

### Có cần bật cộng đồng Discord không?

Chỉ với hành động “**Khoá lời mời**”, vốn dùng việc đóng lời mời của Discord. Các hành động “**Đuổi những người vào**”, “**Gửi tới captcha**” và “**Captcha bị đóng băng trong đợt tấn công**” hoạt động mà không cần.

### Có thể cho một thành viên hợp lệ tham gia trong một đợt raid không?

Có, bằng lệnh `/bypass raid [user]` khi hành động là “**Đuổi những người vào**”: thành viên khi đó có 10 phút để tham gia mà không bị đuổi (tối đa 7 người dùng bypass cùng lúc). Với các hành động captcha, hãy dùng `/bypass captcha [user]`.
