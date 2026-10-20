---
title: Báo cáo
description: "Hệ thống báo cáo của RaidProtect cho phép cộng đồng của bạn báo nội dung và thành viên đáng ngờ, với cách quản lý rõ ràng cho những người kiểm duyệt."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import ReportsMockup from '@site/src/components/DiscordMessage/mockups/reports';

<ReportsMockup />

Hệ thống báo cáo của RaidProtect cho phép cộng đồng của bạn chuyển đến những người kiểm duyệt bất kỳ tin nhắn hay thành viên đáng ngờ nào chỉ với vài cú nhấp, qua nhấp chuột phải, một nút chuyên dụng hoặc lệnh `/report`. Hệ thống được cấu hình để tối ưu việc xử lý báo cáo của đội ngũ bạn.

## ❓ Các báo cáo hoạt động thế nào? {#working}
Các thành viên có thể báo cáo một nội dung qua 4 cách chính.

1. **Nhấp chuột phải vào một tin nhắn**
Một thành viên có thể nhấp chuột phải vào một tin nhắn mà họ cho là vi phạm nội quy, chọn **`Ứng dụng`**, rồi nhấp vào **`Báo cáo tin nhắn này`**. Một cửa sổ mở ra, nơi họ nêu lý do báo cáo.

2. **Nhấp chuột phải vào một hồ sơ**
Tương tự, một thành viên có thể nhấp chuột phải vào một hồ sơ mà họ thấy có vấn đề, chọn **`Ứng dụng`**, rồi nhấp vào **`Báo cáo người dùng`**. Một cửa sổ mở ra để họ nêu rõ điều mình báo cáo (ảnh đại diện, tên người dùng, tiểu sử, hoạt động trong kênh thoại, hoạt động trong tin nhắn riêng) và lý do.

3. **Nút trên một bảng thông tin**
Nếu tính năng “Báo cáo” được bật trên một [bảng thông tin (`/display public`)](./display.mdx), một nút “**Báo cáo thành viên**” có sẵn ngay dưới bảng, cho phép các thành viên báo cáo nhanh một người dùng.

4. **Lệnh Slash**
Các thành viên cũng có thể báo cáo một người dùng qua lệnh **`/report`** trong bất kỳ kênh nào của máy chủ.

Dùng lệnh: ```/report (member)```

Hãy thay `(member)` bằng người dùng mong muốn. Sau đó lý do được nhập trong một cửa sổ, giống như khi nhấp chuột phải vào một hồ sơ.

:::info
Bật báo cáo cũng bật [lưu đệm tin nhắn](./moderation.mdx#snipe): RaidProtect giữ tin nhắn trong một giờ trong bộ nhớ để đính nội dung bị báo cáo vào cảnh báo.
:::

## 🚩 Cấu hình báo cáo {#config}

Các báo cáo đến một **kênh báo cáo**. Nếu bạn không chọn kênh nào, chúng được gửi vào kênh nhật ký chung của bạn. Mọi thiết lập nằm trên cùng một màn hình:

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Báo cáo**”.
4. Nhấp vào “**Bật**” ở bên phải tiêu đề màn hình để bật hệ thống báo cáo.

<Settings start="reports" />

### Cấu hình kênh {#config-channel}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Báo cáo**”.
4. Nhấp vào “**Chỉnh sửa**” bên cạnh “**Nhận báo cáo**”.
5. Trong cửa sổ, chọn kênh mong muốn (_ví dụ: #báo-cáo hoặc #reports_), hoặc đánh dấu “**Tạo kênh giúp tôi**” để RaidProtect tạo một kênh riêng tư `báo-cáo`.

Nếu bạn không chọn kênh nào, hoặc chọn kênh nhật ký, các báo cáo theo kênh nhật ký chung của bạn.

<SettingsModal name="reportChannel" />

### Cấu hình vai trò được thông báo {#config-role}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Báo cáo**”.
4. Nhấp vào “**Chỉnh sửa**” bên cạnh “**Vai trò được thông báo**”.
5. Trong cửa sổ, chọn vai trò mong muốn (_ví dụ: @Kiểm duyệt viên hoặc @Thông báo báo cáo_), hoặc đánh dấu một “**Lượt nhắc khác**”: `@everyone`, `@here` hoặc “**Tạo vai trò giúp tôi**” (RaidProtect tạo vai trò `Báo cáo mới`).

Nếu chưa cấu hình vai trò nào, `@here` sẽ được nhắc đến.

<SettingsModal name="reportRole" />

:::warning
Kênh phải dành riêng cho những người kiểm duyệt và quản trị viên để đảm bảo việc xử lý báo cáo đúng cách.
:::

### Gộp các báo cáo {#group}

Công tắc “**Gộp nhóm**” quyết định cách trình bày nhiều báo cáo nhắm vào cùng một thành viên:

- **Bật** *(mặc định)*: các báo cáo nhắm vào cùng một thành viên được gộp trong một cảnh báo duy nhất.
- **Tắt**: mỗi báo cáo tạo một cảnh báo riêng.

Nhấp vào “**Bật**” hoặc “**Tắt**” bên cạnh “**Gộp nhóm**” trong màn hình Báo cáo.

<a id="config-notify"></a>

### Thông báo cho người báo cáo {#notify}

Nút “**Chỉnh sửa**” bên cạnh “**Thông báo cho người báo cáo**” mở một cửa sổ nơi bạn chọn điều mà thành viên gửi báo cáo nhận được qua tin nhắn riêng sau khi báo cáo của họ được xử lý:

| Mức | Hiệu lực |
|---|---|
| **Tắt** | Người báo cáo không nhận thông báo nào. |
| **Chỉ báo đã xử lý** *(mặc định)* | Người báo cáo được cho biết báo cáo của họ đã được xử lý. |
| **Kèm kết quả** | Cho biết báo cáo được chấp nhận hay bị từ chối. |
| **Kèm người kiểm duyệt** | Cho biết thêm người kiểm duyệt nào đã xử lý báo cáo. |

Người báo cáo chỉ nhận một tin nhắn cho mỗi báo cáo, ngay cả khi nó đã được gộp với những báo cáo khác.

<SettingsModal name="reportNotify" />

<a id="config-trusted-role"></a>

### Vai trò tin cậy <span className="badge-premium">Premium</span> {#trusted-role}

“**Vai trò tin cậy**” cho phép các thành viên đáng tin cậy nhất của bạn hành động ngay trong trường hợp khẩn cấp: khi một thành viên có vai trò này gửi báo cáo, họ có thể đánh dấu tùy chọn “**Hành động phòng ngừa**” để áp dụng một **timeout phòng ngừa 24 giờ** cho người dùng bị báo cáo, trong khi chờ một người kiểm duyệt xử lý báo cáo.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Báo cáo**”.
4. Nhấp vào “**Chỉnh sửa**” bên cạnh “**Vai trò tin cậy**”.
5. Trong cửa sổ, chọn vai trò, hoặc đánh dấu “**Tạo vai trò giúp tôi**” (RaidProtect tạo vai trò `Người báo cáo tin cậy`). Để trống trường này để tắt vai trò tin cậy.

Cách timeout phòng ngừa hoạt động:

- Timeout phòng ngừa là **im lặng**: người dùng bị báo cáo không nhận tin nhắn riêng chừng nào người kiểm duyệt chưa xác nhận hình phạt.
- Lý do của nó là “**Xử phạt phòng ngừa:**” theo sau là lý do của báo cáo.
- Nếu báo cáo nhắm vào một tin nhắn, tin nhắn đó bị xóa.
- Cảnh báo được đánh dấu là khẩn cấp: lượt nhắc đến được đặt sau “**🛑 Báo cáo khẩn cấp**”.
- Hình phạt gắn với báo cáo: người kiểm duyệt xử lý nó có thể xác nhận hoặc hủy hình phạt.

:::info
Tính năng này dành riêng cho các máy chủ [**Premium**](/vi/premium).
:::

### Uy tín của người báo cáo {#bad-reporters}

Nút “**Chỉnh sửa**” bên cạnh “**Người báo cáo sai**” mở cửa sổ “**Uy tín của người báo cáo**”, cho phép xử lý các thành viên có báo cáo thường xuyên bị từ chối:

- **Ngưỡng**: số báo cáo bị từ chối trước khi hành động (3, 5, 6, 10 hoặc 15; mặc định “**Tắt**”).
- **Khung thời gian**: khoảng thời gian tính toán (7, 14, 30, 60 hoặc 90 ngày; mặc định 30 ngày).
- **Hành động** khi đạt ngưỡng:
  - “**Thông báo cho người kiểm duyệt**” *(mặc định)*: một cảnh báo được gửi kèm nút “**Chặn báo cáo**” và một nút xử phạt (ví dụ: “**Cảnh cáo người báo cáo**”).
  - “**Chặn tự động**”: thành viên không thể gửi báo cáo nữa.
  - “**Xử phạt tự động**”: hình phạt đã cấu hình được áp dụng.
  - “**Chặn và xử phạt**”: kết hợp cả hai hành động trên.
- **Hình phạt**: hình phạt áp dụng cho người báo cáo sai (mặc định là Cảnh cáo, Timeout, Mute, Đuổi hoặc Cấm).

<SettingsModal name="reportBad" />

:::info
Nếu chưa cấu hình [vai trò Mute](./sanctions.mdx#mute), hình phạt Mute sẽ quay về timeout.
:::

:::tip
Bạn cũng có thể chặn thủ công một thành viên khỏi việc báo cáo bất cứ lúc nào bằng [lệnh `/block`](./utilities.mdx#block).
:::

## Quản lý các báo cáo {#manage}

Mỗi báo cáo đến kênh đã cấu hình dưới dạng một cảnh báo với nhiều hành động:

- **🙋 Tiếp nhận:** Nhấp vào “**Tiếp nhận**” để cho những người kiểm duyệt khác biết bạn đang lo báo cáo này. Khi đó nút trở thành “**Đã tiếp nhận**”.

- **✅ Đã giải quyết:** Nếu báo cáo hợp lệ nhưng không cần hình phạt nào (tình huống đã được giải quyết bằng cách khác: nhắc nhở, tin nhắn bị chính tác giả xóa…), hãy nhấp vào “**Đã giải quyết**”. Báo cáo được đánh dấu là đã chấp nhận, mà không xử phạt người dùng bị báo cáo. Để xử phạt, hãy dùng menu “**Xử phạt thành viên này…**” bên dưới.

- **❌ Từ chối:** Nếu báo cáo không chính đáng, hãy nhấp vào “**Từ chối**”. Các lần từ chối được tính cho [uy tín của người báo cáo](#bad-reporters).

- **⚖️ Xử phạt:** Menu “**Xử phạt thành viên này…**”, có sẵn sau khi báo cáo đã được tiếp nhận, cho phép áp dụng trực tiếp một hình phạt cho người dùng bị báo cáo, mà không rời kênh báo cáo.

Khi [gộp nhóm](#group) được bật, các báo cáo tiếp theo nhắm vào cùng một thành viên được thêm vào cảnh báo hiện có (ví dụ “**3 tin nhắn & 1 hồ sơ được báo cáo bởi 2 người dùng**”) thay vì tạo cảnh báo mới.

:::note
Hãy đảm bảo những người kiểm duyệt của bạn được đào tạo tốt về cách dùng tính năng này và khuyến khích các thành viên tích cực dùng nó một cách có trách nhiệm!
:::

## Câu hỏi thường gặp {#faq}

### Làm sao báo cáo một thành viên hoặc một tin nhắn?

Một thành viên có thể nhấp chuột phải vào một tin nhắn hoặc hồ sơ, chọn “Ứng dụng” rồi “Báo cáo tin nhắn này” hoặc “Báo cáo người dùng”. Họ cũng có thể dùng nút của một bảng thông tin, hoặc lệnh `/report (member)` trong bất kỳ kênh nào: lý do sau đó được nhập trong một cửa sổ.

### Các báo cáo đến đâu?

Chúng được gửi vào kênh báo cáo mà bạn cấu hình, hoặc nếu không thì vào kênh nhật ký chung của bạn. Kênh này phải dành riêng cho những người kiểm duyệt và quản trị viên để đảm bảo xử lý báo cáo đúng cách.

### Vai trò nào được nhắc đến ở mỗi báo cáo?

Vai trò được thông báo mà bạn cấu hình, hoặc `@everyone`. Nếu chưa thiết lập, RaidProtect nhắc đến `@here`.

### Làm sao hạn chế báo cáo sai?

Thiết lập “Người báo cáo sai” tác động lên các thành viên có báo cáo thường xuyên bị từ chối. Bạn xác định một ngưỡng và một khung tính toán, rồi một hành động: thông báo cho người kiểm duyệt, chặn báo cáo, xử phạt, hoặc cả hai. Bạn cũng có thể chặn thủ công một thành viên bằng [lệnh `/block`](./utilities.mdx#block).
