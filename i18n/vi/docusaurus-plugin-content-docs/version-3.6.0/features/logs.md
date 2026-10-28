---
title: Nhật ký máy chủ
description: "Nhật ký của RaidProtect theo dõi mọi thứ diễn ra trên máy chủ Discord của bạn: kênh, vai trò, thành viên, tin nhắn, thoại, emoji và biểu cảm, kèm người thực hiện mỗi hành động."
---

**Nhật ký máy chủ** lưu lại dấu vết những gì diễn ra trên máy chủ của bạn: ai đã tạo một kênh, đổi một vai trò, xóa một tin nhắn hoặc ngắt kết nối một thành viên khỏi kênh thoại. Mỗi nhật ký bắt đầu bằng người thực hiện (“@modo đã tạo kênh #chung.”) và hiển thị trạng thái trước và sau của một thay đổi.

:::info Thử nghiệm: Logging Update
Nhật ký máy chủ thuộc **Logging Update**, dự kiến cho phiên bản 3.8.0. Trong khi chờ phát hành, chúng đang thử nghiệm, ở dạng bản beta công khai cho các máy chủ [Premium](/vi/premium).
:::

## ⚙️ Cấu hình nhật ký {#config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Kiểm duyệt**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Nhật ký**”.
4. Mở “**Nhật ký máy chủ**”, rồi chọn một kênh cho mỗi nhóm.

Trong mỗi nhóm có hai danh sách:

- **Loại được gửi**: bỏ chọn một loại để không gửi nó đi đâu nữa.
- **Loại ở kênh khác**: cho một loại một kênh riêng. Một loại không có kênh riêng sẽ theo kênh của nhóm.

**Giới hạn:** 3 kênh nhật ký khác nhau ở phiên bản miễn phí, 15 với [Premium](/vi/premium). Không có Premium, chỉ 3 kênh đầu tiên nhận nhật ký: các kênh khác bị tạm dừng và thiết lập của chúng được giữ lại.

Các kênh “**Chung**”, “**Kiểm duyệt**” và “**Captcha**” của [nhật ký kiểm duyệt](./moderation.mdx#logs) không thay đổi.

## 📚 Các nhóm nhật ký {#families}

| Nhóm | Những gì được ghi lại |
| --- | --- |
| **Kênh, vai trò và lời mời** | Danh mục, kênh, kênh thoại và chủ đề được tạo, sửa hoặc xóa, kể cả quyền. Vai trò, lời mời, webhook, tích hợp, và bot được thêm hoặc gỡ cùng vai trò của chúng. |
| **Thành viên** | Lượt vào (kèm tuổi tài khoản) và lượt rời (kèm ngày vào và các vai trò), chấp nhận nội quy, vai trò được thêm hoặc gỡ, biệt danh, thành viên không hoạt động bị loại và lượt boost. |
| **Tin nhắn** | Tin nhắn bị xóa, kèm người đã xóa, tin nhắn được sửa, xóa hàng loạt, tin nhắn được ghim hoặc bỏ ghim. |
| **Thoại** <span className="badge-premium">Premium</span> | Lượt vào, lượt rời kèm thời lượng phiên, đổi kênh, micro, âm thanh, camera và chia sẻ màn hình. Các hành động của đội ngũ (tắt tiếng, tắt nghe, di chuyển, ngắt kết nối) được tách riêng, kèm người thực hiện. |
| **Emoji và biểu cảm** | Emoji, sticker và âm thanh soundboard được tạo, sửa hoặc xóa. Các biểu cảm được thêm hoặc gỡ dành riêng cho [Premium](/vi/premium) và bị bỏ chọn theo mặc định. |

Một tin nhắn được sửa hiển thị trạng thái trước và sau. Với một tin nhắn dài, chỉ những dòng thay đổi được hiển thị.

Các tin nhắn do chính RaidProtect xóa (chống spam, HoneyPot, chống lừa đảo, `/clear`) vẫn nằm trong nhật ký của mô-đun liên quan, không bị trùng lặp.

## 🎨 Định dạng nhật ký {#format}

Chọn định dạng trong “**Định dạng nhật ký**”, trên cùng màn hình đó.

| Định dạng | Hiển thị |
| --- | --- |
| **Mặc định** | Giờ, biểu tượng, các lượt nhắc kèm tên, rồi đến chi tiết. |
| **Khung** | Một khung màu cho mỗi nhật ký, với tiêu đề và chi tiết. |
| **Gọn** <span className="badge-premium">Premium</span> | Một dòng cho mỗi nhật ký: giờ, biểu tượng và các lượt nhắc. |

Một máy chủ mất Premium sẽ quay về định dạng Mặc định. Lựa chọn của nó được giữ lại cho lần quay lại.

## 💾 Tin nhắn trong bộ nhớ {#cache}

Để tìm lại nội dung của một tin nhắn bị xóa, RaidProtect giữ các tin nhắn gần đây trong bộ nhớ: **15 phút** ở phiên bản miễn phí, **6 giờ** với [Premium](/vi/premium). Quá thời gian đó, nhật ký cho biết nội dung đã không được lưu giữ.

Với Premium, các tệp đính kèm của tin nhắn bị xóa cũng được sao chép vào nhật ký (10 MB mỗi tệp, 100 MB mỗi máy chủ, các tệp cũ nhất bị thay thế trước).
