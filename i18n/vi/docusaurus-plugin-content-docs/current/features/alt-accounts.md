---
title: Tài khoản phụ
description: "Tài khoản phụ của RaidProtect liên kết các tài khoản của cùng một người trên máy chủ Discord của bạn: cấm một tài khoản là cấm các tài khoản còn lại, không thể né tránh."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

**Tài khoản phụ** cho phép đội ngũ của bạn khai báo rằng nhiều tài khoản Discord thuộc về cùng một người. Khi đó [hình phạt](./sanctions.mdx) của tài khoản này được mở rộng sang các tài khoản kia: một thành viên bị cấm sẽ không thể quay lại bằng tài khoản thứ hai để né tránh hình phạt.

:::info Thử nghiệm: Identity Update
Tài khoản phụ thuộc **Identity Update**, dự kiến trong phiên bản 3.7.0. Trong khi chờ phát hành, tính năng này đang thử nghiệm, ở dạng bản beta công khai cho các máy chủ [Premium](/vi/premium).
:::

## ❓ Cách hoạt động {#working}

- **Một nhóm cho mỗi người**: một nhóm tập hợp các tài khoản mà đội ngũ của bạn coi là cùng một người. Các nhóm là riêng của máy chủ bạn: không có gì được chia sẻ với các máy chủ khác.
- **Hình phạt dùng chung** ([Premium](/vi/premium)): cấm, đuổi, mute, jail và timeout được mở rộng sang các tài khoản khác trong nhóm, theo [chế độ](#modes) bạn chọn cho từng hình phạt. Hình phạt vẫn mang tên tài khoản bị nhắm đến, các tài khoản khác nhận trạng thái của nó. Không có Premium, các tài khoản vẫn liên kết và xem được, nhưng không có hình phạt nào được mở rộng: khi đó nhật ký hình phạt nêu các tài khoản khác của thành viên.
- **Gỡ chung**: gỡ hình phạt của một tài khoản bất kỳ sẽ gỡ cho tất cả, dù có hay không có Premium.
- **Tìm kiếm theo nhóm**: [tìm kiếm hình phạt](./sanctions.mdx#search) của một tài khoản cũng hiển thị hình phạt của các tài khoản khác trong nhóm.
- **AutoMod của Discord**: các timeout và mute do AutoMod của Discord áp dụng cũng được mở rộng sang các tài khoản liên kết.
- **Được captcha phát hiện**: [Activity của captcha](./captcha.md#activity-alts) có thể tự liên kết hai tài khoản mà nó chắc chắn là cùng một người, hoặc đề xuất liên kết đó cho đội ngũ của bạn.
- **Nhật ký**: các liên kết, việc gỡ và thay đổi tài khoản chính được ghi lại trong [nhật ký kiểm duyệt](./moderation.mdx#logs).

**Giới hạn:** không có, cả về số tài khoản trong mỗi nhóm lẫn số lượng nhóm.

## 🔗 Liên kết tài khoản với /alt {#alt}

Dùng lệnh: ```/alt [thanhvien] [khac]```

- Không có tùy chọn: hiển thị danh sách các nhóm tài khoản liên kết của máy chủ. Nút “**Liên kết hai tài khoản**” ở đó liên kết hai thành viên của máy chủ, hoặc hai tài khoản vắng mặt bằng ID của họ.
- Với `[thanhvien]`: hiển thị nhóm của tài khoản đó, hoặc riêng tài khoản đó nếu nó chưa liên kết với tài khoản nào khác. Mỗi tài khoản xuất hiện kèm trạng thái (bị cấm khỏi máy chủ, đang trên máy chủ, không trên máy chủ, đang bị cách ly), tài khoản chính ở đầu.
- Với `[thanhvien]` và `[khac]`: liên kết trực tiếp hai tài khoản, được khai báo là cùng một người.

Hãy thay `[thanhvien]` và `[khac]` bằng lượt nhắc đến hoặc [ID](../guides/id.mdx) của các tài khoản mong muốn. Không thể liên kết bot.

Từ bảng điều khiển của một nhóm:

- “**Liên kết thành viên**” thêm một tài khoản vào nhóm: một thành viên của máy chủ, hoặc ID Discord của một tài khoản không có trên máy chủ.
- Bộ chọn “**Chỉnh sửa một tài khoản của nhóm**” mở một cửa sổ để đặt nó làm “**Tài khoản chính của nhóm**” hoặc “**Gỡ tài khoản này khỏi nhóm**”. Một tài khoản bị gỡ không còn được coi là cùng một người, nhưng nếu nó đã bị cấm cùng nhóm thì vẫn bị cấm.

Bạn cũng thấy các tài khoản liên kết của một thành viên trong [chế độ xem kiểm duyệt `/modview`](./moderation.mdx#modview), với nút “**Quản lý**”.

:::info
Lệnh `/alt` và các nút của nó yêu cầu quyền **Cấm thành viên**.
:::

## 🛠️ Cấu hình tài khoản phụ {#config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Tài khoản phụ**”.

<Settings start="alts" />

### Hình phạt cho tài khoản liên kết <span className="badge-premium">Premium</span> {#modes}

Với mỗi hình phạt, hãy chọn cách nó được mở rộng sang nhóm:

1. Trên màn hình Tài khoản phụ, nhấp vào “**Chỉnh sửa**” bên cạnh “**Hình phạt cho tài khoản liên kết**”.
2. Trong cửa sổ, chọn một chế độ cho từng hình phạt.

Bộ chọn “**Đặt tất cả thành…**” của màn hình áp dụng cùng một chế độ cho tất cả hình phạt cùng lúc.

<SettingsModal name="altsModes" />

| Chế độ | Hiệu lực | Hình phạt liên quan |
|---|---|---|
| “**Ngay lập tức**” *(mặc định)* | Cấm: tất cả tài khoản liên kết bị cấm ngay, dù có mặt hay không. Đuổi: các tài khoản liên kết đang có trên máy chủ cũng bị đuổi. Mute, jail và timeout: các tài khoản có mặt bị xử phạt ngay, các tài khoản khác khi họ xuất hiện. | Tất cả |
| “**Có mặt thì ngay, còn lại khi xuất hiện**” | Các tài khoản có mặt bị cấm ngay, các tài khoản vắng mặt bị cấm nếu họ tham gia máy chủ trong thời gian bị cấm. | Cấm |
| “**Bẫy**” | Chỉ tài khoản bị nhắm đến bị xử phạt. Một tài khoản khác trong nhóm xuất hiện hoặc viết tin nhắn trong thời gian có hình phạt sẽ bị coi là né tránh và nhận [hình phạt né tránh](#evasion). | Tất cả trừ đuổi |
| “**Tắt**” | Hình phạt chỉ nhắm vào tài khoản được chọn. | Tất cả |

### Hình phạt nhóm {#group-sanction}

Khi một hình phạt lan sang nhiều tài khoản, nó hiện trong lịch sử ([`/sanctions`](./sanctions.mdx#search), `/modview`) như **một hình phạt nhóm duy nhất** (ví dụ “**Cấm cả nhóm**”), liệt kê các tài khoản liên quan (“**Tài khoản**”) kèm trạng thái của từng tài khoản. Mỗi tài khoản vẫn giữ dòng riêng của mình, được đánh dấu “Thuộc hình phạt nhóm”. Hủy, xóa hoặc sửa (lý do, thời lượng) hình phạt nhóm sẽ tác động lên tất cả tài khoản cùng lúc. Một tài khoản chỉ xem được dòng của chính mình trong `/my-sanctions`.

### Hình phạt né tránh {#evasion}

Hình phạt né tránh áp dụng cho một tài khoản liên kết bị bắt ở chế độ “**Bẫy**”: nó xuất hiện trên máy chủ hoặc viết tin nhắn trong thời gian nhóm của nó đang bị xử phạt.

1. Trên màn hình Tài khoản phụ, nhấp vào “**Chỉnh sửa**” bên cạnh “**Hình phạt né tránh**”.
2. Trong cửa sổ, chọn “**Hình phạt**” và, nếu cần, “**Thời lượng**” của nó.

<SettingsModal name="altsEvasion" />

- “**Phần còn lại của hình phạt**” *(mặc định)*: tài khoản dùng chung hình phạt của nhóm cho đến khi kết thúc, không có hình phạt riêng mang tên nó.
- **Một hình phạt** (Cấm, Đuổi, Mute, Jail hoặc Timeout): hình phạt được áp dụng mang tên tài khoản, với thời lượng riêng, và không được gỡ cùng nhóm. Để trống thời lượng cho hình phạt vĩnh viễn (ví dụ: `1h`, `3d`, `2w`).

:::info
Timeout luôn cần một thời lượng, tối đa 28 ngày. Mute và jail cần [vai trò](./sanctions.mdx#config) của chúng đã được cấu hình.
:::

### Mỗi người một tài khoản {#single-account}

Với thiết lập này, chỉ **tài khoản chính** của mỗi nhóm được hoạt động trên máy chủ. Các tài khoản khác bị **cách ly** bằng [vai trò jail](./sanctions.mdx#jail) (hình phạt “**Cách ly**” trong lịch sử). Chúng tự ra khỏi cách ly nếu trở thành tài khoản chính hoặc bị gỡ khỏi nhóm.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Tài khoản phụ**”.
4. Nhấp vào “**Bật**” bên cạnh “**Mỗi người một tài khoản**”.

:::warning
Thiết lập này yêu cầu một [vai trò Jail](./sanctions.mdx#jail). Không có nó, RaidProtect từ chối bật.
:::

Để đổi tài khoản chính của một nhóm, hãy dùng `/alt` với một trong các tài khoản, rồi bộ chọn “**Chỉnh sửa một tài khoản của nhóm**”.

## Câu hỏi thường gặp {#faq}

### Tài khoản phụ có được chia sẻ giữa các máy chủ không?

Không. Các nhóm là riêng của máy chủ bạn và không có gì được chia sẻ với các máy chủ khác.

### Điều gì xảy ra khi tôi bỏ cấm một trong các tài khoản?

Gỡ hình phạt của một tài khoản sẽ gỡ cho tất cả tài khoản trong nhóm.

### Tôi có thể liên kết một tài khoản không có trên máy chủ của mình không?

Có. Trong bảng điều khiển `/alt`, nhấp vào “**Liên kết thành viên**” và nhập ID Discord của tài khoản đó.

### Ai có thể dùng /alt?

Các thành viên có quyền **Cấm thành viên**, trên một máy chủ [Premium](/vi/premium) chừng nào Identity Update còn đang thử nghiệm.
