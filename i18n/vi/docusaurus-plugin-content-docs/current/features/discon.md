---
title: DISCON
description: "DISCON của RaidProtect đặt mức nguy hiểm của máy chủ Discord của bạn chỉ với một cú nhấp: 5 cấp siết chặt các biện pháp bảo vệ trong một đợt raid."
---

import Settings from '@site/src/components/DiscordMessage/mockups/v2';

**DISCON** là mức nguy hiểm của máy chủ của bạn, theo mô hình DEFCON. Trong một đợt [raid](/vi/learn/discord-raid), đội ngũ của bạn không còn phải mở `/settings` để đổi mức xác minh của Discord, bật captcha và đóng tin nhắn riêng từng cái một: một cú nhấp trên bảng DISCON, và chúng tôi áp dụng cùng lúc mọi biện pháp bảo vệ của cấp đã chọn. Nhấp lần thứ hai, và chúng tôi hoàn tác những gì đã bật.

## ❓ Cách hoạt động {#working}

- **Năm cấp**: từ cấp 5 (yên ổn) đến cấp 1 (thảm họa). Cấp càng thấp, biện pháp bảo vệ càng nghiêm ngặt.
- **Một bảng cho đội ngũ**: một tin nhắn đăng trong kênh dành riêng cho đội ngũ, với mỗi cấp một nút. Chỉ cần một cú nhấp để đổi cấp.
- **Hiệu lực được tính cho máy chủ của bạn**: những gì một cấp làm phụ thuộc vào cấu hình của bạn (đã cấu hình captcha hay chưa, chế độ Cộng đồng, hành động của Auto RaidMode). Bảng mô tả hiển thị trong phần cấu hình và trên bảng điều khiển nêu chính xác điều sẽ xảy ra trên máy chủ của bạn.
- **Quay về gọn gàng**: khi hạ cấp, chúng tôi chỉ tắt những gì chính DISCON đã bật. Một captcha, một Đóng tin nhắn riêng hay một chế độ raid mà bạn đã tự bật vẫn được giữ nguyên.
- **Đổi thủ công**: cấp không bao giờ tự đổi, chính đội ngũ của bạn quyết định.

:::info Thử nghiệm: Shield Update
DISCON thuộc **Shield Update**, dự kiến trong phiên bản 3.6.0. Trong khi chờ phát hành, nó đang thử nghiệm, ở dạng bản beta công khai cho các máy chủ [Premium](/vi/premium). [Kênh thoại trạng thái](#voice) yêu cầu Premium.
:::

## 🚦 Năm cấp {#levels}

| Cấp | Tên | Những gì chúng tôi áp dụng |
|---|---|---|
| 🔵 **DISCON 5** | Mọi thứ đều ổn | Xác minh Discord ở mức trung bình, không gì khác. Đây là cấp mặc định. |
| 🟢 **DISCON 4** | Cảnh giác | [Captcha](./captcha.md) được bật nếu đã cấu hình (kênh và vai trò). Nếu không có captcha, xác minh Discord được nâng lên mức cao thay thế. |
| 🟡 **DISCON 3** | Cảnh báo | Xác minh Discord ở mức tối đa, captcha được bật nếu đã cấu hình, [Đóng tin nhắn riêng](./dm-lock.mdx). Captcha áp dụng cho **tất cả** người vào. |
| 🔴 **DISCON 2** | Nguy cấp | Toàn bộ cấp 3, cộng thêm **captcha bị đóng băng**: không ai vào được. Nếu không có captcha, chúng tôi bật [chế độ raid](./raid-mode.md) thay thế. |
| ⚪ **DISCON 1** | Thảm họa | Toàn bộ cấp 2, cộng thêm **khóa hoàn toàn**: @everyone không thể viết, thả biểu cảm, nói trong kênh thoại hay dùng lệnh nữa. |

### Xác minh Discord {#verification}

Mỗi cấp đặt mức độ xác minh Discord của máy chủ bạn: trung bình ở cấp 5 và 4 (cao ở cấp 4 nếu captcha chưa được cấu hình), tối đa từ cấp 3 đến cấp 1.

### Captcha khi vào và captcha bị đóng băng {#captcha}

- **Cấp 4**: chúng tôi bật captcha nếu đã cấu hình, kể cả khi bạn đã tắt nó, mà không động đến kênh hay vai trò của nó. Khi đó nó theo thiết lập [kích hoạt](./captcha.md#trigger) của bạn: ở chế độ **Tự động**, nó vẫn chưa áp dụng cho ai ngoài một đợt raid.
- **Cấp 3**: captcha áp dụng cho mọi người vào, bất kể kích hoạt của nó (xem [ưu tiên so với các trình kích hoạt](#priority)).
- **Cấp 2 và 1**: chúng tôi chuyển captcha sang chế độ **Bảng** và **đóng băng** nó. Những người vào nhận vai trò xác minh và chờ sau cánh cửa: họ không thể giải thử thách chừng nào cấp còn giữ. Khi cấp được nâng lên, họ qua captcha bình thường, không cần tham gia lại. Khi hạ cấp, chúng tôi trả lại cho captcha chế độ hiển thị trước đó.

### Đóng tin nhắn riêng {#dm-lock}

Từ cấp 3, chúng tôi bật [Đóng tin nhắn riêng](./dm-lock.mdx): các vụ lừa đảo đi qua tin nhắn riêng khi máy chủ đóng cửa. Nó yêu cầu [chế độ Cộng đồng](../guides/community.md) và quyền “**Quản lý máy chủ**” cho RaidProtect. Nếu thiếu các điều kiện này, cấp vẫn được áp dụng và một cảnh báo cho bạn biết việc chặn tin nhắn riêng không thể bật được.

### Khóa hoàn toàn ở cấp 1 {#lockdown}

Ở cấp 1, chúng tôi gỡ khỏi vai trò **@everyone** các quyền phát biểu: gửi tin nhắn (kể cả trong luồng), thêm biểu cảm, tạo luồng, gửi tin nhắn thoại, đính kèm tệp, nói trong kênh thoại và dùng lệnh ứng dụng. Chúng được khôi phục y nguyên khi hạ cấp.

## 🧩 Điều kiện tiên quyết của cấp 2 và 1 {#requirements}

Để cấp 2 và 1 thực sự giữ người vào lại ở cửa, một trong hai điều kiện sau phải được đáp ứng:

- **Một captcha đã được cấu hình** (kênh và vai trò xác minh): đây là giải pháp được khuyên dùng. Captcha bị đóng băng giữ tất cả mọi người, rồi cho các thành viên hợp lệ vào khi mọi việc đã yên. [Cấu hình captcha](./captcha.md#config).
- **Nếu không, hành động của Auto RaidMode là “Đuổi những người vào”**: khi không có captcha, chúng tôi bật chế độ raid, và hành động của nó quyết định số phận của những người vào. Với hành động “**Khoá lời mời**” (thiết lập mặc định), chế độ raid do DISCON mở không đuổi ai cả. Hãy chỉnh nó trong [cấu hình Auto RaidMode](./raid-mode.md#config).

Việc khóa hoàn toàn ở cấp 1 cũng yêu cầu RaidProtect có thể sửa vai trò @everyone (quyền “**Quản lý vai trò**”). Nếu không làm được, một cảnh báo sẽ báo cho bạn.

## 🔓 Những gì cấp 1 không khóa được {#lockdown-leaks}

Việc khóa chỉ tác động lên vai trò **@everyone**. Vì vậy một thành viên vẫn có tiếng nói nếu một nguồn khác cấp cho họ:

- **Một vai trò nhận được mà không cần người kiểm duyệt** và tự mang các quyền này: các vai trò của những câu hỏi trong Quy trình chào đón của Discord, [vai trò tự động](./onboarding.md#autorole) của RaidProtect.
- **Một quyền cấp theo kênh** đặt cho một trong các vai trò đó.
- **Một quyền @everyone đặt trên một kênh** (ví dụ “Gửi tin nhắn” được cho phép trong `#chung`).

Cấu hình DISCON liệt kê các quyền truy cập này trong một khung màu cam. Để vô hiệu hóa chúng, hãy gỡ các quyền đó khỏi các vai trò liên quan và để chúng cho @everyone ở cấp máy chủ: quyền của máy chủ là đủ, quyền cấp trên kênh trở nên không cần thiết.

:::tip
Các vai trò của đội ngũ bạn có thể giữ các quyền cấp theo kênh của riêng họ: nhờ đó họ tiếp tục kiểm duyệt được trong lúc khóa.
:::

## ⚖️ Ưu tiên so với các trình kích hoạt tự động {#priority}

[Captcha](./captcha.md#trigger) có một thiết lập kích hoạt (Tự động, Thông minh, Luôn luôn). Từ **cấp 3**, DISCON được ưu tiên hơn thiết lập này: captcha áp dụng cho **tất cả** người vào, không đánh giá từng trường hợp. DISCON là quyết định của đội ngũ bạn, một trình kích hoạt tự động không được tranh cãi với nó.

Muốn vậy, captcha phải được [cấu hình](./captcha.md#config), với kênh và vai trò của nó. Nếu nó chỉ bị tắt, chúng tôi bật nó trong suốt thời gian cảnh báo. Nếu nó chưa bao giờ được cấu hình, DISCON không thể áp đặt nó: xác minh Discord được siết chặt và, ở cấp 2 và 1, [chế độ raid](./raid-mode.md) tiếp quản.

## 🛠️ Cấu hình DISCON {#config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**DISCON**”.
4. Chọn kênh của bảng điều khiển trong bộ chọn, hoặc nhấp vào “**Tạo kênh của bảng điều khiển**”.
5. Tùy chọn ([Premium](/vi/premium)), chọn một kênh thoại trạng thái, hoặc nhấp vào “**Tạo kênh trạng thái**”.

Bên dưới phần cấu hình, bạn thấy cấp hiện tại, năm nút cấp và **bảng mô tả các cấp**, mô tả những gì mỗi cấp sẽ làm trên máy chủ của bạn.

<Settings start="discon" />

### Kênh của bảng điều khiển {#panel-channel}

Các nút của bảng điều khiển không yêu cầu quyền nào: **chính quyền truy cập kênh đóng vai trò kiểm soát**. Vì vậy hãy chọn một kênh dành riêng cho đội ngũ của bạn.

- Một kênh mà cả máy chủ đều thấy sẽ bị từ chối: bất kỳ thành viên nào cũng có thể đổi cấp ở đó.
- “**Tạo kênh của bảng điều khiển**” tạo một kênh `#discon` ẩn với @everyone. Sau đó hãy mở nó cho các vai trò của đội ngũ bạn.

### Kênh thoại trạng thái <span className="badge-premium">Premium</span> {#voice}

Một kênh thoại có tên hiển thị cấp hiện tại, nhìn thoáng qua là thấy trong danh sách kênh: `🔵 DISCON 5`, `🟢 DISCON 4`, `🟡 DISCON 3`, `🔴 DISCON 2`, `⚪ DISCON 1`. Không ai có thể kết nối vào đó. “**Tạo kênh trạng thái**” tạo nó bên cạnh kênh của bảng điều khiển, với cùng các quyền.

:::info
Discord giới hạn việc đổi tên một kênh ở khoảng 2 lần mỗi 10 phút. Nếu bạn đổi cấp nhanh hơn, tên kênh thoại có thể bị chậm: bảng điều khiển vẫn là chuẩn tham chiếu.
:::

## 📟 Bảng điều khiển DISCON {#panel}

Bảng điều khiển là một tin nhắn được đăng trong kênh đã chọn. Nó hiển thị cấp hiện tại, chú giải của năm cấp cùng hiệu lực của chúng trên máy chủ bạn, và năm nút cấp. Màu của nó theo cấp hiện tại.

Để đổi cấp, chỉ cần nhấp vào nút tương ứng. Nếu cấp chỉ áp dụng được một phần (captcha chưa cấu hình, thiếu chế độ Cộng đồng, thiếu quyền), một cảnh báo tạm thời sẽ báo cho bạn.

Bảng điều khiển DISCON cũng là [vị trí dành riêng của `/display staff`](./display.mdx#staff): bạn có thể thêm các khối vào đó từ `/display staff`, nhưng kênh của nó chỉ được chỉnh từ cấu hình DISCON.

## 📑 Nhật ký của DISCON {#logs}

Mỗi lần đổi cấp được ghi trong [nhật ký máy chủ](./moderation.mdx#logs) của bạn, kèm thành viên đã thực hiện:

- “@Người kiểm duyệt đã nâng **mức nguy hiểm** từ 5 lên 3.”
- “@Người kiểm duyệt đã hạ **mức nguy hiểm** từ 3 xuống 5.”

## Câu hỏi thường gặp {#faq}

### Ai có thể đổi cấp DISCON?

Bất kỳ ai thấy kênh của bảng điều khiển. Các nút không kiểm tra quyền nào: chính kênh, dành riêng cho đội ngũ, đóng vai trò bộ lọc. Các quản trị viên cũng có thể đổi cấp từ `/settings`.

### Cấp DISCON có tự động đổi trong một đợt raid không?

Không. DISCON luôn do đội ngũ của bạn điều khiển. [Auto RaidMode](./raid-mode.md) vẫn là biện pháp bảo vệ tự động chống lại các đợt người vào ồ ạt.

### Điều gì xảy ra khi hạ về cấp 5?

Chúng tôi đặt lại xác minh ở mức trung bình và hoàn tác những gì DISCON đã bật: captcha, chế độ của captcha, Đóng tin nhắn riêng, chế độ raid và khóa hoàn toàn. Những gì bạn đã tự bật trước khi nâng cấp vẫn được giữ nguyên.

### Cấp 2 có hoạt động mà không có captcha không?

Có, nhưng khi đó nó bật chế độ raid, vốn chỉ đuổi những người vào nếu hành động của Auto RaidMode là “Đuổi những người vào”. Để cấp 2 giữ được mọi người, hãy cấu hình captcha.

### Vì sao một số thành viên vẫn viết được ở cấp 1?

Việc khóa chỉ gỡ quyền phát biểu của vai trò @everyone. Một vai trò nhận khi vào hoặc một quyền cấp theo kênh cho phép viết vẫn khiến họ viết được. Cấu hình DISCON liệt kê các quyền truy cập này để bạn có thể gỡ chúng.

### Kênh thoại trạng thái có bắt buộc không?

Không, nó là tùy chọn và dành riêng cho Premium. Bảng điều khiển là đủ để điều khiển và hiển thị cấp.
