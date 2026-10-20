---
title: Automod
description: "Automod của RaidProtect tự động gỡ các hình ảnh lừa đảo và các tham chiếu đến máy chủ Discord khác: lời mời, tin nhắn được chuyển tiếp, liên kết kênh và tag máy chủ."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

**Automod** của RaidProtect gom các bộ lọc tự động gỡ nội dung không mong muốn ngay khi nó được đăng. Mỗi bộ lọc có hình phạt riêng cho tác giả tin nhắn.

Để mở nó:

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Automod**”.

<Settings start="automod" />

## 🖼️ Hình ảnh lừa đảo {#images}

Bộ lọc **Hình ảnh** xóa các hình ảnh lừa đảo đã biết (lừa đảo crypto, giveaway giả, khuyến mãi sòng bạc giả) và xử phạt tác giả của chúng. Bộ lọc này **được bật mặc định**, không cần cấu hình gì.

Toàn bộ chi tiết, hình phạt và danh mục hình ảnh nằm ở trang [Hình ảnh lừa đảo](./scam-images.md).

## 🔗 Máy chủ khác <span className="badge-experiment">Thử nghiệm</span> {#servers}

Bộ lọc **Máy chủ khác** kiểm soát những gì dẫn đến các máy chủ Discord khác: **lời mời**, **tin nhắn được chuyển tiếp** và **liên kết kênh**, cũng như **tag máy chủ** mà các thành viên của bạn hiển thị. Nó chặn quảng cáo bừa bãi và các máy chủ đối thủ hoặc độc hại, mà không động đến các đối tác của bạn.

:::info Thử nghiệm: Shield Update
Bộ lọc Máy chủ khác thuộc **Shield Update**, dự kiến trong phiên bản 3.6.0. Trong khi chờ phát hành, nó đang thử nghiệm, ở dạng bản beta công khai cho các máy chủ [Premium](/vi/premium).
:::

### Cách hoạt động {#servers-working}

Ba hành vi được chỉnh riêng, mỗi hành vi ở một trong các chế độ sau:

- “**Tắt**”: không lọc gì.
- “**Danh sách chặn**”: các máy chủ trong danh sách bị từ chối, các máy chủ khác được qua.
- “**Danh sách cho phép**”: chỉ các máy chủ trong danh sách được qua, tất cả các máy chủ khác bị từ chối.

| Hành vi | Điều xảy ra nếu bị từ chối |
|---|---|
| **Lời mời** | Tin nhắn chứa lời mời bị xóa. Các liên kết `ptb.` và `canary.` cũng được tính, và những lời mời ẩn trong embed, thành phần hoặc tin nhắn chuyển tiếp đều được đọc, cũng như các tin nhắn bị sửa sau đó. |
| **Tin chuyển tiếp hoặc liên kết kênh** | Tin nhắn được chuyển tiếp từ máy chủ đó, hoặc chứa liên kết đến một trong các kênh của nó, bị xóa. |
| **Tag máy chủ được hiển thị** | Thành viên bị **cách ly** bằng [vai trò Jail](./sanctions.mdx#jail). Việc cách ly được gỡ ngay khi họ bỏ tag. |

Máy chủ của chính bạn luôn được qua, bằng bất kỳ lời mời nào của nó, và đội ngũ của bạn (quyền **Quản lý máy chủ** hoặc **Quản lý tin nhắn**) không bao giờ bị nhắm đến.

### Cấu hình {#servers-config}

1. Trong Automod, nhấp vào “**Cấu hình**” bên cạnh “**Máy chủ khác**”.
2. Bật bộ lọc bằng công tắc ở phía trên bên phải, rồi chọn một chế độ cho từng hành vi.

<Settings start="serverRefs" />

#### Lời mời kết bạn và nhóm <span className="badge-premium">Premium</span> {#servers-private}

Một lời mời kết bạn hoặc nhóm riêng không dẫn đến máy chủ nào. Ở chế độ “**Lời mời**” (miễn là không để ở “**Tắt**”), bộ chọn “**Lời mời kết bạn và nhóm**” quy định riêng cách xử lý chúng:

- “**Theo danh sách**” *(mặc định)*: được phép với danh sách chặn, bị xóa với danh sách cho phép.
- “**Luôn cho phép**”: được chấp nhận, bất kể danh sách.
- “**Luôn xóa**”: bị xóa, bất kể danh sách.

Không có Premium, chúng luôn theo danh sách.

### Hình phạt {#servers-sanction}

Mỗi tin nhắn bị từ chối đều bị xóa. Trong “**Hình phạt cho tin nhắn bị xóa**”, hãy chọn thêm một hình phạt cho tác giả, hoặc “**Chỉ xóa tin nhắn**”. Với timeout, mute, jail hoặc cấm, hãy chọn cả thời lượng của nó.

Hình phạt được áp dụng tối đa một lần mỗi phút cho mỗi thành viên: một thành viên dán nhiều lời mời liên tiếp chỉ bị xử phạt một lần.

### Danh sách máy chủ {#servers-lists}

1. Nhấp vào “**Thêm máy chủ**”.
2. Dán một lời mời còn hiệu lực của máy chủ (ví dụ `discord.gg/vidu`): tên và ID của máy chủ sẽ được đọc từ đó. ID đơn lẻ không còn được chấp nhận.
3. Chọn danh sách: chặn hoặc cho phép.

Một máy chủ đã có sẽ đơn giản chuyển sang danh sách khác. “**Gỡ**” loại một hoặc nhiều máy chủ khỏi các danh sách.

**Giới hạn:** tổng cộng 25 máy chủ trong cả hai danh sách.

:::tip
Để chỉ cho phép lời mời của các đối tác, hãy đặt “**Lời mời**” ở “**Danh sách cho phép**” và thêm các đối tác của bạn vào danh sách cho phép. Một danh sách cho phép trống sẽ từ chối mọi lời mời đến các máy chủ khác.
:::

### Nhật ký {#servers-logs}

Mỗi hình phạt và mỗi lần cách ly đều được ghi trong [nhật ký kiểm duyệt](./moderation.mdx#logs) của bạn, kèm máy chủ và kênh liên quan. Một tin nhắn bị xóa mà không có hình phạt (“**Chỉ xóa tin nhắn**”) cũng được ghi lại. Các hình phạt xuất hiện trong [lịch sử hình phạt](./sanctions.mdx), với các lý do “Lời mời đến một máy chủ bị từ chối”, “Lời mời kết bạn hoặc nhóm bị từ chối” (Premium), “Tin nhắn chuyển tiếp hoặc liên kết kênh của một máy chủ bị từ chối” hoặc “Tag của một máy chủ bị từ chối”.

## Câu hỏi thường gặp {#faq}

### Các đối tác của tôi có còn chia sẻ được lời mời của họ không?

Có. Hãy thêm họ vào danh sách cho phép của bộ lọc Máy chủ khác, hoặc để họ ngoài danh sách chặn.

### Điều gì xảy ra khi một thành viên bỏ tag bị từ chối?

Việc cách ly của họ được gỡ tự động.

### Người kiểm duyệt có bị lọc không?

Không. Các thành viên có quyền Quản lý máy chủ hoặc Quản lý tin nhắn không bao giờ bị bộ lọc Máy chủ khác nhắm đến.
