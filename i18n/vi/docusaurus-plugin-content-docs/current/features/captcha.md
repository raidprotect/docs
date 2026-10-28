---
title: Captcha (Xác minh)
description: "Captcha của RaidProtect chặn selfbot và raid: mỗi thành viên mới phải chứng minh mình là con người trước khi vào máy chủ Discord của bạn."
---

import Settings, { SettingsModal } from '@site/src/components/DiscordMessage/mockups/v2';

import CaptchaMockup from '@site/src/components/DiscordMessage/mockups/captcha';

{/* <CaptchaMockup /> : obsolète en 3.5.0 (montre le mode Challenge avec expulsion automatique) */}

**Captcha** của RaidProtect yêu cầu mỗi thành viên mới nhập lại một mã trước khi vào máy chủ Discord của bạn, qua đó chặn [selfbot](/vi/learn/self-bot) và [raid](/vi/learn/discord-raid) bằng cách lọc các tài khoản không phải con người.

Đây là một trong những tính năng phổ biến nhất của RaidProtect, và nó hoàn toàn là tùy chọn. Bạn chọn thời điểm áp dụng: mỗi lần có người vào, chỉ trong một đợt raid, hoặc cả với các tài khoản đáng ngờ.

## ❓ Captcha hoạt động thế nào {#working}

Captcha dựa trên một vai trò **@Chưa xác minh** và một kênh **#xác-minh**. Khi một người dùng tham gia máy chủ của bạn:
- **Chờ xác minh:** chúng tôi cấp cho họ vai trò **@Chưa xác minh**, giới hạn quyền truy cập của họ ở kênh **#xác-minh** duy nhất.
- **Thử thách:** ở chế độ Bảng, họ giải một câu đố trong [Activity RaidProtect](#activity). Ở chế độ Thử thách, họ nhập lại một mã hiển thị trên hình ảnh. Xem [các chế độ hiển thị](#display-mode).
- **Thành công:** vai trò **@Chưa xác minh** bị gỡ và thành viên vào được máy chủ. [Vai trò tự động](./onboarding.md#autorole) và [tin nhắn chào mừng](./onboarding.md#welcome-message) của họ được gửi vào đúng lúc này.
- **Thất bại:** khi hết lượt thử, họ bị đuổi, bị đưa vào jail hoặc bị chặn vài phút trước khi được thử lại, tùy thiết lập của bạn. Họ có thể quay lại và thử lại captcha sau khi bị đuổi.
- **Nhật ký:** mỗi lượt vào được ghi trong kênh nhật ký kèm ngày tạo tài khoản, cũng như các lần thành công, thất bại và hết thời gian.
- **Chẩn đoán:** RaidProtect tự phát hiện các vấn đề về quyền, về khả năng hiển thị của kênh trong [Quy trình chào đón](../guides/onboarding.md) của Discord và các lỗ hổng của vai trò **@Chưa xác minh**, và đề xuất sửa chúng.

:::info
**Mặc định không đuổi.** Một captcha mới không còn đuổi các thành viên không giải được nó: họ ở lại máy chủ, không có quyền truy cập, cho đến khi được xác minh. Bạn có thể đặt một [thời gian chờ trước khi đuổi](#timeout).
:::
:::warning
**Quản lý quyền:** các quyền của vai trò **@Chưa xác minh** được RaidProtect cấu hình tự động. Bạn có thể đổi tên vai trò và kênh, nhưng đừng xóa chúng. RaidProtect cần các quyền `KICK_MEMBERS` và `MANAGE_ROLES`, và phải được xếp phía trên vai trò **@Chưa xác minh**.
:::

### Các chế độ hiển thị {#display-mode}

| Chế độ | Điều thành viên mới thấy |
|---|---|
| **Bảng (Tương tác)**, mặc định | Một tin nhắn cố định “**Hệ thống xác minh**” với một nút “**Xác minh**”, mở [Activity RaidProtect](#activity). Thành viên không thể viết trong **#xác-minh**. |
| **Thử thách (Cổ điển)** | Một hình ảnh được đăng trong **#xác-minh** khi họ vào, và họ gõ mã bằng tin nhắn trong kênh. |

Bảng có một nút “**Translate**” để đọc nó bằng ngôn ngữ của họ, và mỗi người mới vào đều được nhắc đến trong kênh xác minh, rồi tin nhắn bị xóa: nhờ đó họ tìm lại được kênh.

Chế độ Bảng giữ kênh gọn gàng và cho phép thêm các thiết lập: chọn hình phạt khi hết lượt thử, [captcha bị đóng băng trong đợt raid](./raid-mode.md#action), [giữ lại ở cửa các tài khoản quá mới](./onboarding.md#minage). Chế độ Thử thách luôn đuổi thành viên khi hết thời gian quy định hoặc khi hết lượt thử.

### Kích hoạt {#trigger}

| Kích hoạt | Khi nào captcha được áp dụng |
|---|---|
| **Luôn luôn**, mặc định | Mỗi lần có người vào, không điều kiện. |
| **Tự động** | Chỉ trong một đợt raid hoặc ở mức DISCON cao. Những người vào khác vào thẳng. |
| **Thông minh** | Như Tự động, cộng thêm các tài khoản có vẻ đáng ngờ. |

Với **Tự động**, captcha chỉ được áp dụng trong một đợt raid nếu [Auto RaidMode](./raid-mode.md#action) được đặt ở “**Gửi tới captcha**” hoặc “**Captcha bị đóng băng trong đợt tấn công**”, và trong một cảnh báo [DISCON](./discon.md) từ cấp 3.

Kích hoạt **Thông minh** đánh giá hồ sơ của từng người vào. Một thành viên được đội ngũ của bạn duyệt thủ công không bao giờ bị coi là đáng ngờ.

## 🚪 Cách cấu hình captcha? {#config}

Việc thiết lập captcha đơn giản và nhanh chóng.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Chọn kênh nơi các captcha sẽ được thực hiện, hoặc dùng nút “**Tạo một cái cho tôi**”.
5. Nhấp vào “**Bật**”. Vai trò **@Chưa xác minh** được tạo và các quyền của nó được đặt trong tất cả các kênh.

Captcha khởi động ở chế độ **Bảng (Tương tác)**, kích hoạt **Luôn luôn**, với 3 lượt thử và không có thời gian chờ trước khi đuổi. Sau đó bạn có thể chỉnh từng thiết lập từ cùng màn hình.

<Settings start="captcha" />

### Chế độ hiển thị và kích hoạt {#mode}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Trong “**Chế độ hiển thị**”, chọn “**Bảng (Tương tác)**” hoặc “**Thử thách (Cổ điển)**”.
5. Trong “**Kích hoạt**”, chọn “**Luôn luôn**”, “**Tự động**” hoặc “**Thông minh**”.

### Xác minh trong Activity {#activity}

Ở chế độ **Bảng**, nút “**Xác minh**” mở **Activity RaidProtect**: thành viên giải một câu đố nhỏ ngay trong Discord, mang màu sắc của máy chủ bạn và kèm các liên kết kênh từ [Quy trình chào đón](../guides/onboarding.md) của bạn. Sau khi xác minh, họ khám phá ở đó [thẻ chào mừng](./onboarding.md#welcome-message) của mình.

- **Giải câu đố sai:** giống như một mã sai, nó tiêu tốn một lượt thử, và hình phạt dự kiến được áp dụng khi hết lượt thử. Activity thông báo kết quả cho thành viên trước, rồi hình phạt mới được áp dụng.
- **Thành công:** thành viên được xác minh khi họ rời màn hình thành công. Nếu họ nhấp vào “**Xác minh**” trong lúc đó, việc xác nhận của họ được áp dụng ngay thay vì mở lại Activity.
- **Robot:** một captcha do chương trình tự động giải sẽ bị xử phạt ngay, như khi hết lượt thử: đuổi, jail hoặc chặn tùy thiết lập của bạn.
- **Đội ngũ của bạn xem xét:** khi có nghi ngờ, thành viên bị giữ lại ở cửa, không có thời gian chờ nào chạy, và đội ngũ của bạn nhận một báo cáo captcha tự động. Báo cáo đến [nhật ký của captcha](#logs), nếu không có thì đến kênh [báo cáo](./reports.md), nếu không nữa thì đến nhật ký máy chủ. Khi báo cáo đã được tiếp nhận, nó đề xuất “**Cho vào**”, “**Liên kết với thành viên khác**” (cùng [Identity Update](#activity-alts)) và “**Từ chối**”, áp dụng hành động thất bại của captcha mà bạn đã chọn (đuổi, jail hoặc chặn): menu hình phạt không có ở đó.
- **Jail sau khi hết lượt thử:** jail này không có thời hạn và cũng mở một báo cáo xem xét. “**Cho vào**” gỡ jail và xác minh thành viên; nếu không, hãy xử phạt họ.
- **Từ chối kiểm tra thiết bị:** Activity xin sự đồng ý của thành viên trước khi kiểm tra thiết bị của họ. Nếu họ từ chối, họ chịu hành động thất bại như khi hết lượt thử (đuổi, jail hoặc chặn).
- **Activity không mở được:** thành viên có thể nhấp vào “**Nhập mã**”. Khi đó, một mã đúng sẽ được đội ngũ của bạn xem xét.
- **Xóa dữ liệu:** một thành viên có thể yêu cầu xóa dữ liệu xác minh của mình tại [privacy@raidprotect.bot](mailto:privacy@raidprotect.bot). Họ sẽ làm lại captcha, và các hình phạt của họ vẫn còn.

#### Tài khoản phụ được captcha phát hiện <span className="badge-experiment">Thử nghiệm</span> {#activity-alts}

Với [Identity Update](./alt-accounts.md), Activity cũng phát hiện những người vào có khả năng do cùng một người sử dụng với một thành viên trong máy chủ của bạn:

- **Liên kết chắc chắn:** các tài khoản được liên kết tự động trong [`/alt`](./alt-accounts.md#alt). Nhật ký của captcha báo điều đó, kèm một nút “**Hủy liên kết**”.
- **Liên kết có thể:** nếu [Mỗi người một tài khoản](./alt-accounts.md#single-account) đang bật, thành viên được đưa vào diện xem xét. “**Liên kết với thành viên khác**” liên kết họ trong `/alt` và cho họ vào; nếu không phát hiện được tài khoản nào, một cửa sổ sẽ yêu cầu bạn chọn thành viên (“**Tài khoản đã có trên máy chủ**”). Nếu không, thành viên được vào, và nhật ký của captcha báo liên kết có thể này kèm một nút “**Liên kết tài khoản**”.
- **Liên kết chắc chắn không được áp dụng:** không có gì được liên kết tự động nếu một tài khoản trong nhóm thuộc đội ngũ máy chủ, nếu người mới vào được liên kết với nhiều nhóm `/alt`, hoặc nếu cả hai tài khoản đều đã có nhóm riêng (hai nhóm không bao giờ được gộp tự động). Khi đó, liên kết được đề xuất cho bạn theo cùng cách.

Chỉ các tài khoản của máy chủ bạn được hiển thị cho bạn: không có gì được nói về các máy chủ khác.

:::info Thử nghiệm: Identity Update
Việc phát hiện tài khoản phụ thuộc **Identity Update**, dự kiến trong phiên bản 3.7.0. Trong khi chờ phát hành, nó đang thử nghiệm, ở dạng bản beta công khai cho các máy chủ [Premium](/vi/premium).
:::

### Chế độ thử {#test-mode}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Nhấp vào “**Bật**” bên cạnh “**Chế độ thử**”.

Ở chế độ Bảng, một thành viên đội ngũ đã được xác minh (quyền **Quản lý máy chủ**, hoặc chủ sở hữu) khi đó có thể nhấp vào “**Xác minh**” để làm lại captcha. Số lần thử và thời gian giải được áp dụng như với một người mới vào: nhật ký của captcha cho biết điều lẽ ra đã được làm, không có gì được áp dụng.

### Độ khó {#difficulty}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Nhấp vào “**Chỉnh sửa**” bên cạnh “**Độ khó**”.
5. Chỉnh các trường của cửa sổ, rồi xác nhận.

<SettingsModal name="captchaDifficulty" />

| Thiết lập | Giá trị | Mặc định |
|---|---|---|
| “**Lần thử**” | từ 1 đến 10 lần thử | 3 lần thử |
| “**Chọn hành động khi hết lượt thử**” (Bảng) | “**Hết lượt thử: Đuổi**”, “**Hết lượt thử: Jail**” hoặc “**Hết lượt thử: Chặn 10 phút**” | Đuổi |
| “**Thời gian giải**” (Bảng) | Tắt, 15, 30 hoặc 45 giây, 1, 2, 3 hoặc 5 phút: thời gian để giải câu đố, tính từ thử thách đầu tiên (sau khi thành viên đồng ý). Mã dạng ảnh được giữ tối thiểu 2 phút | 30 giây |
| “**Thời gian giải (trước khi bị đuổi)**” (Thử thách) | 3, 5, 10 hoặc 15 phút, hoặc một giá trị từ 30 giây đến 15 phút: quá thời gian này, thành viên bị đuổi | 5 phút |

:::info
Lựa chọn “**Hết lượt thử: Jail**” đưa thành viên vào [jail](./sanctions.mdx#jail) thay vì đuổi họ. Muốn vậy cần có một Vai trò Jail được cấu hình trong thẻ “**Kiểm duyệt**” > “**Hình phạt**”. Lựa chọn “**Hết lượt thử: Chặn 10 phút**” giữ thành viên ở lại máy chủ: họ chờ 10 phút rồi làm lại với số lần thử mới.
:::

### Thời gian chờ trước khi đuổi {#timeout}

Ở chế độ Bảng, thời gian chờ này được tính ngay từ khi thành viên vào: nếu họ không được xác minh kịp thời, họ chịu hành động thất bại của bạn (đuổi, jail hoặc chặn).

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Trong “**Thời gian chờ trước khi đuổi**”, chọn “**Tắt**”, 5, 15 hoặc 30 phút, hoặc một “**Giá trị tùy chỉnh**” từ 30 giây đến 30 phút.

:::warning
Khi thời gian chờ bị tắt, các tài khoản chưa xác minh ở lại máy chủ và có thể nhắn tin riêng cho các thành viên của bạn. Hãy đặt một thời gian chờ, hoặc đóng tin nhắn riêng bằng [Đóng tin nhắn riêng](./dm-lock.mdx).
:::

### Cảnh báo của màn hình Captcha {#alerts}

Màn hình captcha hiển thị các khung thông báo khi có điều gì đó cản trở việc xác minh hoạt động tốt:
- **Kênh không hiển thị khi vừa vào:** kênh xác minh không nằm trong kênh mặc định nào của Quy trình chào đón Discord. Nhấp vào “**Chuyển vào** _danh mục_” hoặc “**Tạo danh mục mới**” để chúng tôi sửa, hoặc làm theo [hướng dẫn về Quy trình chào đón](../guides/onboarding.md).
- **Lỗ hổng của vai trò @Chưa xác minh:** các vai trò được Quy trình chào đón Discord cấp cùng lúc với **@Chưa xác minh** qua mặt bước xác minh, vai trò **@Chưa xác minh** mang các quyền, **@everyone** có quyền `ADMINISTRATOR`, hoặc các kênh vẫn hiển thị với thành viên đang xác minh (hoặc đang ở jail). Nút “**Sửa**” đóng các kênh liên quan.
- **Mức độ xác minh Cao:** mức Discord này bắt phải chờ 10 phút trước khi có thể viết. Captcha đã lọc ngay từ lối vào: mức được khuyên dùng khi có captcha là **Trung bình**.
- **Thiếu quyền:** RaidProtect cần `KICK_MEMBERS` và `MANAGE_ROLES`.

Khi vấn đề đã được giải quyết, hãy nhấp vào “**Làm mới**”.

### Tắt hoặc xóa captcha {#disable}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Trong “**Chế độ hiển thị**”, chọn:
   - “**Tắt**” để tạm dừng việc xác minh mà không mất gì trong cấu hình của bạn;
   - “**Xóa**” để xóa cấu hình và vai trò xác minh. RaidProtect sẽ yêu cầu bạn xác nhận.

:::tip
Để captcha kín đáo ngoài các đợt raid, hãy đặt [kích hoạt](#trigger) của nó ở **Tự động** thay vì tắt nó.
:::

## ✨ Tính năng bổ sung {#additional-features}

### Nhật ký riêng {#logs}

Nếu máy chủ của bạn đông người, các nhật ký liên quan đến captcha có thể làm rối kênh nhật ký chính của bạn. Bạn có thể chuyển chúng sang một kênh khác.

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Thành viên mới**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**Captcha**”.
4. Nhấp vào “**Chỉnh sửa**” bên cạnh “**Nhật ký**”.
5. Chọn kênh sẽ nhận nhật ký của captcha.

Bạn cũng thấy thiết lập này trong thẻ “**Kiểm duyệt**” > “**Nhật ký**”, ở dòng “**Captcha**”.

### Vai trò tự động {#autorole}

Vai trò tự động không còn được chỉnh trong captcha: nó đã chuyển sang [Vai trò tự động](./onboarding.md#autorole) của thẻ “**Thành viên mới**”, nơi chấp nhận nhiều vai trò. Thiết lập cũ của bạn đã được lấy sang đó tự động. Khi captcha đang hoạt động, các vai trò này được cấp sau khi vượt qua captcha.

### Bypass captcha {#bypass}

Dùng lệnh: ```/bypass captcha [user]```

Hãy thay `[user]` bằng [ID](../guides/id.mdx) mong muốn, người đó sẽ có 10 phút để tham gia máy chủ mà không cần giải captcha. Nếu người dùng đã có mặt, captcha sẽ được giải tự động. Bạn cũng có thể dùng lệnh mà không chỉ định người dùng để biết danh sách người dùng bypass hiện tại.

## 🤝 Captcha và chống raid, kết hợp thì tốt hơn {#raid}

Captcha hoạt động cùng các biện pháp bảo vệ khác dành cho người mới vào:
- **[Auto RaidMode](./raid-mode.md#action):** với hành động “**Gửi tới captcha**”, những người vào trong một đợt sóng phải qua captcha thay vì bị đuổi. Với “**Captcha bị đóng băng trong đợt tấn công**”, họ chờ phía sau captcha và qua nó sau đợt sóng.
- **[Tuổi tối thiểu của tài khoản](./onboarding.md#minage):** hành động “**Giữ lại ở cửa**” chặn một tài khoản quá mới ở một captcha mà họ chỉ giải được khi đủ tuổi.
- **[DISCON](./discon.md#captcha):** từ cấp 4, captcha được bật nếu đã cấu hình, ngay cả khi bạn đã tắt nó. Từ cấp 3, nó được áp dụng cho mọi người vào, bất kể kích hoạt của nó.

## Câu hỏi thường gặp {#faq}

### Có bao lâu để giải captcha?

Ở chế độ Bảng, thành viên có mặc định 3 lượt thử (1 đến 10) và 30 giây để giải câu đố (có thể tắt, tối đa 5 phút), tính từ thử thách đầu tiên. Mặc định không áp dụng thời gian chờ đuổi nào, nhưng bạn có thể đặt một khoảng lên đến 30 phút. Ở chế độ Thử thách, họ có mặc định 5 phút (từ 30 giây đến 15 phút) trước khi bị đuổi.

### Điều gì xảy ra nếu một thành viên thất bại ở captcha?

Khi hết lượt thử, họ bị đuổi khỏi máy chủ hoặc, ở chế độ Bảng, bị đưa vào jail hoặc bị chặn 10 phút trước khi được thử lại nếu bạn đã chọn như vậy. Sau khi bị đuổi, họ có thể quay lại và thử lại captcha.

### Các thành viên chưa xác minh có bị đuổi tự động không?

Không với một captcha mới: ở chế độ Bảng, thời gian chờ trước khi đuổi bị tắt theo mặc định. Các thành viên chưa xác minh ở lại máy chủ mà không có quyền truy cập các kênh. Hãy đặt một thời gian chờ trước khi đuổi, hoặc đóng tin nhắn riêng của máy chủ, để họ không nhắn riêng cho các thành viên của bạn.

### Có thể chỉ bật captcha trong một đợt raid không?

Có. Đặt kích hoạt của nó ở **Tự động** và hành động của Auto RaidMode ở “**Gửi tới captcha**” hoặc “**Captcha bị đóng băng trong đợt tấn công**”. Phần thời gian còn lại, người vào đi thẳng vào.

### Có cần bật cộng đồng Discord để dùng captcha không?

Không, captcha hoạt động mà không cần cộng đồng. Nếu cộng đồng đã được bật, hãy kiểm tra rằng kênh xác minh nằm trong các kênh mặc định của [Quy trình chào đón](../guides/onboarding.md).

### Có thể miễn captcha cho một thành viên không?

Có, bằng lệnh `/bypass captcha [user]`. Thành viên có 10 phút để tham gia mà không giải captcha, và nếu họ đã có mặt, captcha được giải tự động.

### Có thể đổi tên vai trò @Chưa xác minh và kênh #xác-minh không?

Có, bạn có thể đổi tên chúng tùy ý. Đừng xóa chúng, vì RaidProtect cần chúng để captcha hoạt động và tự cấu hình quyền của chúng.
