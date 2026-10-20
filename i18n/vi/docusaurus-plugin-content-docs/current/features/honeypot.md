---
title: HoneyPot
description: "HoneyPot của RaidProtect là một kênh bẫy chống spam, tự động phát hiện và xử phạt các tài khoản bị chiếm và bot spam trên máy chủ Discord của bạn."
---

import HoneypotMockup from '@site/src/components/DiscordMessage/mockups/honeypot';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<HoneypotMockup />

**HoneyPot** (hay kênh bẫy) của RaidProtect là một tính năng chống spam: một kênh nơi **[không ai được viết gì](/vi/learn/honeypot-warming)**. Vì các thành viên thật biết phải tránh kênh này, những người duy nhất đăng bài ở đó là các **[tài khoản bị chiếm](/vi/learn/token-grabber)** hoặc bot spam: RaidProtect tự động xử phạt họ.

:::info
**Bạn đã có ScamLens theo mặc định.** Công cụ chống lừa đảo [ScamLens](./scam-images.md) đang hoạt động trên máy chủ của bạn mà không cần cấu hình gì: chuyên về các **hình ảnh lừa đảo**, nó phát hiện, xóa chúng và xử phạt tài khoản bị xâm phạm với độ tin cậy rất cao. Vì vậy, với các vụ lừa đảo bằng hình ảnh, ScamLens là quá đủ. HoneyPot chủ yếu hữu ích nếu bạn muốn an ninh tối đa và chặn **các loại spam khác**: spam liên kết, raid bằng văn bản, bot.
:::

## ❓ Cách hoạt động {#working}

Khi bạn bật HoneyPot, RaidProtect tạo một kênh văn bản **ở ngay đầu máy chủ của bạn**, với một cái tên rõ ràng được chọn ngẫu nhiên. Kênh này có ba đặc điểm:
- **Ai cũng có thể viết ở đó**, kể cả các thành viên chưa qua captcha và những người có [vai trò Jail](./sanctions.mdx#jail). Đây là cố ý: một tài khoản bị chiếm hoặc một bot không được phép tránh cái bẫy.
- **Một tin nhắn cảnh báo** (“ĐỪNG GỬI BẤT KỲ TIN NHẮN NÀO Ở ĐÂY”) được đăng khi tạo kênh, kèm một nút “**Translate**” để ai cũng đọc được bằng ngôn ngữ của mình.
- **Một bộ đếm tài khoản bị báo** xuất hiện dưới dạng nút bên cạnh “**Translate**” ngay từ tài khoản đầu tiên bị bắt.

Ngay khi một thành viên đăng bài trong kênh này:
- RaidProtect áp dụng **hình phạt bạn đã chọn** (cấm, softban, kick, timeout, jail hoặc mute), mà không gửi tin nhắn riêng cho họ.
- Các **tin nhắn do thành viên này gửi trong 10 phút gần nhất** bị xóa trên toàn máy chủ, để chặn spam nếu nó đã lan sang các kênh khác.
- Hành động được thêm vào nhật ký kiểm duyệt tự động (lý do: *Spam qua tài khoản người dùng bị xâm phạm*).

Nếu bạn đã chọn một [thời gian chờ trước khi xử phạt](#grace), thành viên trước hết có cơ hội nói rằng đó là nhầm lẫn.

## 🛠️ Thiết lập HoneyPot {#config}

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**HoneyPot**”.
4. Nhấp vào “**Bật**” ở phía trên bên phải: RaidProtect tạo kênh, chỉnh quyền và đăng tin nhắn cảnh báo.

<Settings start="honeypot" />

Khi kênh đã được tạo, bạn có thể:
- **Tạo lại kênh** (nút bên cạnh “**Kênh HoneyPot**”): xóa kênh cũ và tạo kênh mới, với tên mới. Hữu ích nếu bạn nghĩ có thành viên đã chia sẻ tên kênh bẫy để giúp các tài khoản khác tránh nó.
- **Tắt** (công tắc ở phía trên bên phải): xóa kênh và dừng tính năng.

:::warning Quyền cần thiết
RaidProtect cần các quyền `Quản lý kênh` và `Cấm thành viên`. Nếu thiếu, một khung báo lỗi hiển thị và các nút bị làm xám.
:::

### Chọn hình phạt {#sanction}

Theo mặc định, HoneyPot áp dụng một **Softban**. Nhiều [hình phạt](/vi/learn/discord-sanctions) khả dụng trong bộ chọn “**Hình phạt áp dụng**”:

| Hình phạt | Hiệu lực | Khả dụng |
|---|---|---|
| **Cấm** | Loại thành viên khỏi máy chủ và xóa các tin nhắn gần đây của họ. Tạm thời (mặc định 1 ngày). | Miễn phí |
| **Softban** | Cấm rồi bỏ cấm: xóa tin nhắn, nhưng thành viên có thể quay lại | Miễn phí |
| **Đuổi (Kick)** | Loại thành viên, người đó có thể tự do quay lại | Premium |
| **Timeout** | Ngăn thành viên nói trong một thời gian đã chọn (tối đa 28 ngày) | Premium |
| **Jail** | Cấp [vai trò Jail](./sanctions.mdx#jail) đã được cấu hình trên máy chủ của bạn | Premium |
| **Mute** | Cấp [vai trò Mute](./sanctions.mdx#mute) đã được cấu hình trên máy chủ của bạn | Premium |

Với các hình phạt có thời lượng (Cấm, Timeout, Jail, Mute), hãy chọn một thời lượng trong bộ chọn “**Thời lượng**”: 5 phút, 1 giờ, **1 ngày** (mặc định) hoặc 28 ngày, hoặc “**Giá trị tùy chỉnh**” để nhập thời lượng của riêng bạn (ví dụ `5m`, `1h`, `2d`; tối thiểu 1 phút). Bộ chọn bị làm xám với Softban và Đuổi, vốn không có thời lượng.

:::tip
**Softban** là một sự dung hòa tốt: nó dọn sạch tin nhắn và loại tài khoản bị chiếm, nhưng chủ sở hữu hợp pháp có thể quay lại khi tài khoản đã được bảo mật.
:::

:::info
Chỉ **Cấm** và **Softban** cho phép Discord tự xóa gốc các tin nhắn của tài khoản bị chiếm **ở khắp máy chủ** chỉ trong một lần.  
Với các hình phạt khác (Kick, Timeout, Jail, Mute), chính RaidProtect xóa tin nhắn: chúng dành riêng cho các máy chủ [Premium](/vi/premium).
:::

:::info
- Một **Jail** hoặc **Mute** chưa có vai trò được cấu hình sẽ trở thành **Timeout**. Bộ chọn cho biết điều này bên dưới hình phạt.
- Nếu máy chủ của bạn mất Premium, một hình phạt Premium tự động trở về **Softban** ở lần kích hoạt tiếp theo.
:::

### Thời gian chờ trước khi xử phạt <span className="badge-experiment">Thử nghiệm</span> {#grace}

Một thành viên thiện chí có thể viết vào HoneyPot do nhầm. **Thời gian chờ trước khi xử phạt** cho họ thời gian để báo điều đó trước khi bị xử phạt.

:::info Thử nghiệm: Shield Update
Thời gian chờ trước khi xử phạt thuộc **Shield Update**, dự kiến trong phiên bản 3.6.0. Trong khi chờ phát hành, nó đang thử nghiệm, ở dạng bản beta công khai cho các máy chủ [Premium](/vi/premium).
:::

1. Dùng [lệnh `/settings`](../setup.md#settings).
2. Mở thẻ “**Bảo vệ**”.
3. Nhấp vào “**Cấu hình**” bên cạnh “**HoneyPot**”.
4. Trong “**Thời gian chờ trước khi xử phạt**”, chọn “**Xử phạt ngay lập tức**” (mặc định) hoặc “**Hỏi trước, xử phạt sau**” 30 giây, 1 phút, 2 phút hoặc 5 phút.

Với một thời gian chờ:
- tin nhắn bị **gỡ** và thành viên được **nhắc đến** trong kênh bẫy, kèm nút “**Đây là nhầm lẫn**”;
- chỉ thành viên này mới nhấp được vào nút. Nếu họ nhấp kịp lúc, không có hình phạt nào được áp dụng;
- nếu không nhấp trước khi hết thời gian chờ, hình phạt sẽ được áp dụng.

:::info
Một bot spam thường đăng cùng một nội dung ở khắp nơi. Một tài khoản đăng **cùng một tin nhắn** ở nơi khác sẽ bị xử phạt **ngay lập tức**, không chờ đợi.
:::

### Thành viên được bỏ qua {#ignore}

Bạn có thể chọn **ai không bị xử phạt** khi có tin nhắn trong HoneyPot, trong bộ chọn “**Thành viên được bỏ qua**”:
- “**Không ai (trừ các thành viên không thể kiểm duyệt)**” *(mặc định)*: mọi người đều bị xử phạt, kể cả đội ngũ. Chỉ những thành viên mà bot không thể kiểm duyệt (vai trò cao hơn vai trò của RaidProtect) mới tự động được miễn.
- “**Đội ngũ (Quản trị / Quản lý máy chủ / Quản lý kênh)**”: các thành viên có quyền `Quản trị viên`, `Quản lý máy chủ` hoặc `Quản lý kênh` không bị xử phạt.
- “**Thành viên được Chống spam bỏ qua**”: RaidProtect dùng lại các vai trò và thành viên được bỏ qua của [Chống spam](./anti-spam.mdx#ignore). Nếu danh sách này trống, các thành viên có quyền `Quản trị viên`, `Quản lý máy chủ` hoặc `Quản lý tin nhắn` sẽ được bỏ qua.

:::info
Trong mọi trường hợp, RaidProtect **không bao giờ xử phạt chính nó hay các bot khác**. Các bot không kích hoạt HoneyPot.
:::

## ℹ️ Lệnh /honeypot {#command}

Lệnh `/honeypot` mở thẳng màn hình cấu hình HoneyPot, không cần qua `/settings`. Lệnh yêu cầu quyền `Quản lý máy chủ`.

Dùng lệnh: ```/honeypot```

## 🤝 HoneyPot và ScamLens, kết hợp thì tốt hơn {#scamlens-combo}

RaidProtect đã tích hợp sẵn **[ScamLens](./scam-images.md)**, công cụ phân tích hình ảnh và xóa những hình là các vụ lừa đảo đã biết (crypto, giveaway giả, khuyến mãi sòng bạc giả).

Cả hai phối hợp chặt chẽ với nhau:
- **ScamLens đi trước.** Nếu hình ảnh đăng trong HoneyPot đã được biết, chính ScamLens xóa tin nhắn và xử phạt tài khoản bị xâm phạm; hình phạt của HoneyPot không được áp dụng thêm.
- **HoneyPot tiếp quản** mọi thứ còn lại: hình ảnh mới chưa được biết, spam liên kết, nhắc đến hàng loạt, raid bằng văn bản, bot.
- **Mỗi hình ảnh mới bị một HoneyPot bắt được sẽ làm giàu thêm cho ScamLens**, và sau đó ScamLens có thể chặn nó trên mọi máy chủ được bảo vệ.
- **ScamLens theo HoneyPot của bạn**: chừng nào bạn chưa đặt cho nó thiết lập riêng, nó áp dụng [hình phạt và thời lượng](./scam-images.md#config) của HoneyPot của bạn.

ScamLens đã hoạt động mặc định trên máy chủ của bạn. **Bật HoneyPot không làm hỏng gì cả**: nó chỉ bổ sung cho những gì đã có, và giúp RaidProtect bảo vệ toàn bộ cộng đồng tốt hơn.

## Câu hỏi thường gặp {#faq}

### HoneyPot có hữu ích nếu tôi đã có ScamLens không?

Với các vụ lừa đảo bằng hình ảnh, ScamLens là quá đủ: nó hoạt động mặc định và tự phát hiện, xóa và xử phạt. HoneyPot chủ yếu hữu ích để chặn các loại spam khác, như spam liên kết, raid bằng văn bản và bot.

### HoneyPot áp dụng hình phạt nào?

Mặc định là Softban. Bạn có thể chọn hình phạt khác: Cấm và Softban là miễn phí, còn Kick, Timeout, Jail và Mute dành riêng cho các máy chủ Premium. Hình phạt Cấm của HoneyPot kéo dài mặc định 1 ngày, bạn có thể đổi thời lượng này.

### Một thành viên đã viết vào HoneyPot do nhầm, phải làm sao?

Hãy bật thời gian chờ trước khi xử phạt: tin nhắn bị gỡ, thành viên được nhắc đến và có từ 30 giây đến 5 phút để nhấp vào “Đây là nhầm lẫn”. Nếu họ nhấp kịp lúc, họ không bị xử phạt. Ngược lại, một tài khoản đã đăng cùng một tin nhắn ở nơi khác sẽ bị xử phạt ngay lập tức.

### Các thành viên đội ngũ có bị xử phạt nếu họ viết vào HoneyPot không?

Điều đó phụ thuộc vào tùy chọn “Thành viên được bỏ qua”. Mặc định, mọi người đều bị xử phạt, kể cả đội ngũ. RaidProtect không bao giờ tự xử phạt chính nó, và các bot không bao giờ kích hoạt cái bẫy.

### Điều gì xảy ra với tin nhắn của một tài khoản bị HoneyPot bắt?

Ngoài hình phạt, các tin nhắn do thành viên này gửi trong 10 phút gần nhất bị xóa trên toàn máy chủ, để chặn spam nếu nó đã lan sang các kênh khác.
