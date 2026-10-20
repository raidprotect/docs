---
title: Kiểm tra bảo mật
description: "Lệnh /audit của RaidProtect phân tích bảo mật máy chủ Discord của bạn, phát hiện các lỗ hổng cấu hình và đề xuất sửa chúng chỉ với một cú nhấp."
---

import AuditMockup from '@site/src/components/DiscordMessage/mockups/audit';

<AuditMockup />

Lệnh `/audit` phân tích cấu hình máy chủ Discord của bạn và phát hiện các lỗ hổng bảo mật: quyền quá rộng, mức độ xác minh không đủ, [vai trò quản trị viên không được bảo vệ](/vi/learn/least-privilege), v.v. Sau đó nó đề xuất sửa phần lớn các vấn đề chỉ với một cú nhấp.

Dùng lệnh: ```/audit```

:::info
Lệnh này dành riêng cho các thành viên có quyền `Quản trị viên`. Báo cáo chỉ hiển thị với riêng bạn (phản hồi tạm thời).
:::

## ❓ Cách kiểm tra hoạt động {#working}

RaidProtect gán cho máy chủ của bạn một **điểm tổng trên 100**, kèm theo một xếp hạng (từ **S** đến **E**) và một đánh giá: **Xuất sắc** (từ 90), **Tốt** (từ 70), **Cần cải thiện** (từ 40) hoặc **Nghiêm trọng** (dưới 40).

Báo cáo được chia thành ba danh mục, mỗi danh mục có điểm riêng:

- **Cấu hình máy chủ**
- **Vai trò**
- **Kênh**

Nhấp vào nút “**Chi tiết**” của một danh mục để xem kết quả từng mục kiểm tra, rồi nhấp vào “**Quay lại**” để trở về báo cáo. Nút “**Làm mới**” chạy lại phân tích sau khi bạn chỉnh sửa.

### Các mục kiểm tra được thực hiện {#checks}

| Danh mục | Mục kiểm tra |
|---|---|
| Cấu hình máy chủ | **Mức độ xác minh** |
| Cấu hình máy chủ | **Bộ lọc nội dung phản cảm** |
| Cấu hình máy chủ | **Xác thực hai yếu tố (2FA) cho việc kiểm duyệt** |
| Cấu hình máy chủ | **Thông báo mặc định** |
| Cấu hình máy chủ | **Cảnh báo raid** |
| Cấu hình máy chủ | **DM Lock (máy chủ công khai)** * |
| Cấu hình máy chủ | **Số lượng bot** * |
| Vai trò | **Quyền của @everyone** |
| Vai trò | **Vai trò tự động cấp** |
| Vai trò | **Vai trò được cấp bởi lời mời** |
| Vai trò | **Vai trò quản trị viên** |
| Vai trò | **Bot quản trị viên** * |
| Kênh | **Quyền kênh cho @everyone** |
| Kênh | **Quyền kênh dư thừa** |
| Kênh | **Quyền phát biểu của các vai trò đội ngũ** * |
| Kênh | **Webhook cũ** * |

Các mục kiểm tra có dấu `*` chỉ mang tính **tham khảo**: chúng xuất hiện trong báo cáo nhưng không ảnh hưởng đến điểm. **DM Lock (máy chủ công khai)** chỉ xuất hiện trên các máy chủ cộng đồng hoặc công khai.

Một vài chi tiết về các mục kiểm tra này:

- **Vai trò tự động cấp**: gồm các vai trò mà một thành viên nhận được mà không cần người kiểm duyệt, kèm nguồn của chúng: chào đón của Discord, [vai trò tự động](./onboarding.md#autorole) của RaidProtect, boost, đăng ký, tích hợp hoặc vai trò liên kết.
- **Quyền phát biểu của các vai trò đội ngũ**: một vai trò có quyền kiểm duyệt và, trên một số kênh, có các quyền phát biểu (viết, nói…) vốn đã được cấp ở nơi khác. Chúng tôi giữ chúng, vì chúng cho phép đội ngũ vẫn nói được trong lúc [`/lock`](./channel-lock.md) hoặc ở cấp 1 của [DISCON](./discon.md). Chỉ cần kiểm tra rằng mỗi vai trò được liệt kê đúng là một vai trò đội ngũ: nếu không, nó thoát khỏi việc khóa.

Nếu RaidProtect thiếu quyền để hoạt động đúng, một cảnh báo riêng sẽ được hiển thị bên cạnh điểm. Một mục kiểm tra cần một quyền còn thiếu (ví dụ Quản lý webhook) được báo là không được đánh giá.

:::info
Nếu RaidProtect không thấy một số kênh của máy chủ bạn, báo cáo hiển thị khung “**Phân tích chưa đầy đủ**”: các kênh này không được phân tích và điểm chỉ tính trên phần còn lại.
:::

## 🔧 Sửa lỗ hổng chỉ với một cú nhấp {#fix}

Các mục kiểm tra có thể được sửa tự động sẽ hiển thị nút “**Sửa**”:

| Mục kiểm tra | Cách sửa được áp dụng |
|---|---|
| Mức độ xác minh | Đặt mức độ xác minh của máy chủ thành **Trung bình** (“Trung bình” trở lên là đạt, “Thấp” cho một cảnh báo, “Không có” là không đạt) |
| Bộ lọc nội dung phản cảm | Bật bộ lọc cho **tất cả thành viên** |
| Thông báo mặc định | Đặt thông báo mặc định thành **chỉ @mentions** |
| Quyền của @everyone | Gỡ các quyền nhạy cảm khỏi vai trò @everyone |
| Quyền kênh dư thừa | Mở danh sách các kênh cần dọn, rồi “**Sửa tất cả**” |

Với **vai trò quản trị viên**, không có cách sửa tự động: bản kiểm tra đề xuất bảo vệ chúng bằng các nút “**Tích hợp**” hoặc “**Tích hợp tất cả**”, vốn thêm chúng vào [Authentification Manager](./authentication-manager.mdx).

:::warning
Để áp dụng các cách sửa, RaidProtect phải có các quyền `Quản lý máy chủ` và `Quản lý vai trò`.
:::

### Quyền kênh dư thừa {#redundant}

Một quyền kênh là **dư thừa** khi nó không thay đổi gì: nó đã được cấp ở cấp máy chủ, đã được cấp bởi quyền @everyone của kênh, hoặc là một lệnh cấm không có hiệu lực. Khi đó phải chỉnh nó ở nhiều nơi thì mới thực sự có tác dụng, điều này tạo ra các điểm mù.

Danh sách nêu chi tiết, từng kênh một, mỗi quyền và lý do nó dư thừa:

- Nút “**Bỏ qua**” của một kênh gỡ nó khỏi danh sách, khỏi điểm và khỏi “**Sửa tất cả**”. Bạn có thể khôi phục nó từ “**Mục đã bỏ qua**”.
- Sửa một danh mục cũng sửa các kênh được đồng bộ với nó.
- Quyền của một vai trò **Quản trị viên** được liệt kê riêng, trong “**Không có tác dụng với vai trò Administrateur**”: Discord bỏ qua chúng, và chúng tôi không bao giờ gỡ chúng, vì chúng sẽ có hiệu lực nếu vai trò đó mất quyền Quản trị viên.

Phân tích có tính đến các lần khóa đang diễn ra, bằng [`/lock`](./channel-lock.md) hoặc bằng [DISCON](./discon.md).

## ✅ Bỏ qua một cảnh báo có chủ ý {#ignore}

Một số cảnh báo tương ứng với những lựa chọn có chủ đích: một vai trò quản trị viên đáng tin, một quyền được để lại cho `@everyone` một cách có ý thức, v.v. Nút “**Đánh dấu là OK**”, có trong chi tiết của một danh mục, cho phép chọn một mục rồi “**Bỏ qua**” nó.

Một cảnh báo bị bỏ qua biến mất khỏi báo cáo và không còn ảnh hưởng đến điểm của bạn. Bạn có thể xem danh sách các mục bị bỏ qua bất cứ lúc nào (nút “**Mục đã bỏ qua**”) và khôi phục bất kỳ mục nào bằng “**Khôi phục**” hoặc “**Khôi phục tất cả**”.

## Câu hỏi thường gặp {#faq}

### Vì sao mức độ xác minh “Trung bình” là đủ?

Mức “Trung bình” đã loại các tài khoản được tạo cách đây chưa đến 5 phút, điều này chặn phần lớn các tài khoản dùng một lần. Vì vậy đó là mức mà nút “**Sửa**” áp dụng.

### Vì sao bản kiểm tra không gỡ quyền kênh của các vai trò quản trị viên của tôi?

Discord bỏ qua quyền kênh của một vai trò có quyền Quản trị viên. Chúng tôi liệt kê riêng mà không gỡ chúng: chúng sẽ có hiệu lực trở lại nếu vai trò đó mất quyền Quản trị viên.

### Tôi có thể loại một kênh khỏi phân tích quyền dư thừa không?

Có: nhấp vào “**Bỏ qua**” bên cạnh kênh trong danh sách quyền dư thừa. Kênh đó không còn được tính vào điểm và bạn có thể khôi phục nó từ các mục đã bỏ qua.
