---
title: Sự cố
description: "Gặp vấn đề với RaidProtect? Tại đây bạn sẽ tìm thấy giải pháp cho các sự cố thường gặp nhất để đưa bot của bạn hoạt động trở lại."
---

Gặp vấn đề với RaidProtect? Giải pháp có lẽ nằm ở đây.

Đôi khi không phải mọi thứ đều hoạt động như dự kiến. Dưới đây là **những vấn đề thường gặp nhất** mà bạn có thể gặp phải, và cách giải quyết. 🤗 

Nếu trang này không trả lời được vấn đề bạn đang gặp, [**đừng ngần ngại liên hệ đội ngũ hỗ trợ của chúng tôi**](https://raidprotect.bot/discord), họ sẽ rất sẵn lòng giúp bạn!

## Bot hiển thị lỗi khi tôi dùng một lệnh {#commands}

Nếu lệnh không chạy thành công, **RaidProtect có thể hiển thị một lỗi** thay cho kết quả mong đợi. Trong hầu hết các trường hợp, tin nhắn có đưa ra chỉ dẫn, nhưng cũng có thể đó là một thông báo chung chung hơn. Đây là cách giải quyết vấn đề này trong đa số trường hợp. 🧐 

- **Làm theo những gì được chỉ dẫn.** Một số lỗi giải thích rõ vấn đề. Nếu bot yêu cầu bạn làm điều gì đó, hãy làm theo.

- **Kiểm tra các tham số của lệnh.** Có thể lệnh chỉ đơn giản là bị gõ sai, hãy xem phần trợ giúp để biết cách dùng. Đừng quên rằng dấu ngoặc vuông ([]) không phải gõ vào.

- **Kiểm tra quyền của bot.** Bot phải có quyền **Quản trị viên** và nằm ngang với các quản trị viên trong thứ tự vai trò.

- **Thử lại lệnh.** Đôi khi vấn đề tự khỏi mà không rõ vì sao.

Nếu bạn vẫn gặp lỗi dù đã làm theo những lời khuyên này, [hãy liên hệ đội ngũ hỗ trợ của chúng tôi](https://raidprotect.bot/discord) để chúng tôi giúp bạn. 🤝 

## Kênh nhật ký của bot không tự tạo {#logs}

Để thông báo cho bạn về các hành động nó thực hiện, RaidProtect cần một kênh nhật ký. Kênh này được tạo tự động khi bot tham gia lần đầu, nhưng đôi khi không có kênh nào được tạo. Đây là cách khắc phục. ⚙️ 

- **Đảm bảo bot đúng là Quản trị viên.** Để bot hoạt động tốt, cần cấp cho nó quyền Quản trị viên. Nếu chưa làm vậy, hãy vào cài đặt vai trò và cấp quyền này cho vai trò RaidProtect. Sau đó chỉ còn việc khởi tạo bot thủ công để mọi thứ hoạt động (xem ngay bên dưới)!

- **Kiểm tra bot đã được khởi tạo đúng cách.** Việc này thường được thực hiện tự động, nhưng bạn có thể buộc khởi tạo bằng [lệnh `/setup`](../setup.md#install). Kênh nhật ký sẽ được tạo tự động.

- **Tự đặt một kênh.** Nếu không có gì hiệu quả, đừng hoảng sợ, bạn có thể tự chọn kênh nhật ký! Dùng [lệnh `/settings`](../setup.md#settings), mở thẻ “**Kiểm duyệt**” rồi nhấp vào “**Cấu hình**” bên cạnh “**Nhật ký**”. Tại đó bạn có thể chọn một kênh chung, và nếu muốn, một kênh dành riêng cho kiểm duyệt và một kênh cho captcha: nếu để trống, hai kênh đó sẽ quay về kênh chung.

## Một người dùng đã spam nhưng bot không xử phạt {#anti-spam}

[Chống spam](../features/anti-spam.mdx) là một trong những tính năng chính của RaidProtect, và sẽ thật phiền nếu nó không hoạt động. Nhưng yên tâm, phần lớn thời gian đó không phải chuyện gì nghiêm trọng. 😇 

- **Nếu chống spam yêu cầu dừng spam** nhưng không xử phạt, nhiều khả năng là do thiếu quyền. Hãy nhớ rằng bot phải có quyền Quản trị viên và nằm ngang với các quản trị viên trong thứ tự vai trò.

- **Kiểm tra cấu hình chống spam.** Nghe thì ngớ ngẩn, nhưng có người quên rằng mình đã bỏ qua một kênh. Một kênh có tên chứa “spam” cũng luôn bị bỏ qua.

- **Chạy một lần mô phỏng.** Trong màn hình chống spam, nút “**Mô phỏng**” cho bạn biết, với một thành viên, một kênh và một loại spam nhất định, chống spam có kích hoạt hay không và nếu không thì vì sao (mô-đun bị tắt, kênh hoặc vai trò bị bỏ qua, thành viên ở trên bot…). [Lệnh `/feedback`](../features/utilities.mdx#feedback) cũng đề xuất chẩn đoán này khi bạn báo lỗi chống spam.

- **Kiểm tra quyền của người spam.** Các thành viên đội ngũ (Quản trị viên, Quản lý máy chủ, Quản lý tin nhắn) bị bỏ qua chừng nào bạn chưa tự bỏ qua vai trò hay thành viên nào. Nếu bạn thử chống spam trên chính máy chủ của mình, nó có thể sẽ không phát hiện bạn.

- **Spam có đủ dài không?** Chống spam phản ứng với một lượng tin nhắn, không phải một tin nhắn đơn lẻ. Đừng nóng vội, và hãy kiểm tra rằng hình phạt của [trình kích hoạt](../features/anti-spam.mdx#triggers) liên quan không bị tắt.

Nếu dù vậy một vụ spam vẫn không bị phát hiện, [hãy liên hệ chúng tôi trên máy chủ hỗ trợ](https://raidprotect.bot/discord) kèm theo một **ảnh chụp màn hình của vấn đề**.

## Người dùng vào được máy chủ mà không qua captcha {#captcha}

Vấn đề này khá phổ biến, nhưng phụ thuộc vào **cấu hình máy chủ của bạn**. Hãy xem cách khắc phục. 🏥 

- **Bạn có vai trò tự động không?** Nếu bạn đã cấu hình một bot (không phải RaidProtect) để cấp vai trò cho người mới vào máy chủ, điều đó có thể gây nhiễu captcha. Hãy thay nó bằng [vai trò tự động của RaidProtect](../features/onboarding.md#autorole), được cấp sau khi vượt qua captcha.

- **Bạn đã bật captcha chưa?** Đây là một tính năng tùy chọn: hãy bật nó trong thẻ “**Thành viên mới**” của [`/settings`](../setup.md#settings). Xem [trang dành riêng cho captcha](../features/captcha.md#config) để biết thêm.

- **Kích hoạt của nó là gì?** Ở chế độ “**Tự động**”, captcha chỉ áp dụng trong một đợt raid hoặc khi mức [DISCON](../features/discon.md) cao (Shield Update, đang thử nghiệm): thời gian còn lại, người mới vào thẳng luôn. Chọn “**Luôn luôn**” để mỗi người mới vào đều phải qua captcha.

- **Có vai trò hay kênh nào qua mặt nó không?** Màn hình captcha báo các kênh vẫn hiển thị với vai trò xác minh và các vai trò cho phép vào máy chủ mà không qua captcha, kèm một nút để sửa.

## Lệnh /snipe không tìm thấy tin nhắn nào {#snipe}

[Lệnh `/snipe`](../features/moderation.mdx#snipe) đọc các tin nhắn mà RaidProtect giữ trong bộ nhớ một giờ. Khi không có chống spam hay báo cáo nào đang hoạt động, việc lưu đệm này bị tắt theo mặc định: hãy bật “**Lưu đệm tin nhắn**” trong thẻ “**Tiện ích**” của [`/settings`](../setup.md#settings). Chỉ những tin nhắn bị xóa sau khi bật mới có thể được tìm lại.

## Người dùng vẫn nói chuyện được khi tôi khóa một kênh {#lock}

Lệnh khóa có vẻ thần kỳ, nhưng cũng có điểm yếu. Như [đã lưu ý trong tài liệu này](../features/channel-lock.md#lock), lệnh **chỉ tác động lên vai trò @everyone**. Nghĩa là nếu trong kênh bạn muốn khóa có một vai trò được cấp rõ ràng quyền nói chuyện, thì vai trò đó vẫn có thể nói. Một hình ảnh đáng giá ngàn lời nói, đây là kết quả cụ thể. 🔍 

![Ảnh chụp màn hình cấu hình khóa kênh](../../../../en/docusaurus-plugin-content-docs/current/assets/lock-channel-messages-raidprotect.png)
