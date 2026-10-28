---
title: Cài đặt
description: "Cài đặt và cấu hình RaidProtect trên máy chủ Discord của bạn chỉ trong vài phút, với trình hướng dẫn /setup rồi đến bảng điều khiển /settings."
---

import Head from '@docusaurus/Head';
import Settings from '@site/src/components/DiscordMessage/mockups/v2';

<Head>
  <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Cấu hình RaidProtect trên một máy chủ Discord","description":"Cài đặt và cấu hình bot bảo vệ RaidProtect bằng các lệnh /setup và /settings.","step":[{"@type":"HowToStep","position":1,"name":"Chạy /setup","text":"Gõ /setup trong một kênh nơi bot đang hoạt động để mở trình hướng dẫn cài đặt."},{"@type":"HowToStep","position":2,"name":"Chọn các mô-đun","text":"Chọn các tính năng cần cài đặt trong menu “Chọn các mô-đun để cài đặt”, rồi nhấp vào “Bật”."},{"@type":"HowToStep","position":3,"name":"Xác nhận bản tóm tắt","text":"Bot hiển thị bản tóm tắt những gì nó sẽ tạo và kích hoạt. Nhấp lại vào “Bật” để áp dụng."},{"@type":"HowToStep","position":4,"name":"Tinh chỉnh bằng /settings","text":"Dùng /settings bất cứ lúc nào: bảng điều khiển gom các thiết lập vào năm thẻ, Chung, Thành viên mới, Bảo vệ, Kiểm duyệt và Tiện ích."}]}).replace(/</g, '\\u003c')}</script>
</Head>

RaidProtect được cấu hình bằng hai lệnh: [`/setup`](#install), một trình hướng dẫn cài đặt các biện pháp bảo vệ thiết yếu cùng một lúc, và [`/settings`](#settings), bảng điều khiển nơi bạn chỉnh mọi thứ còn lại vào bất cứ lúc nào. Hướng dẫn này giải thích cách sử dụng chúng.

## Bắt đầu từ đâu {#etapes}

Với một máy chủ bắt đầu từ con số không, đây là thứ tự được khuyên dùng:

1. **Chạy [`/setup`](#install)** và chọn các mô-đun cần cài đặt. RaidProtect tạo kênh nhật ký, các kênh và vai trò cần thiết, rồi áp dụng thay đổi sau một bản tóm tắt.
2. **Mở thẻ “Thành viên mới” của [`/settings`](#settings)**: chỉnh [captcha](./features/captcha.md), [Auto RaidMode](./features/raid-mode.md) và [việc chào đón thành viên mới](./features/onboarding.md).
3. **Mở thẻ “Kiểm duyệt”**: kiểm tra kênh nhật ký và các [hình phạt](./features/sanctions.mdx) (vai trò jail và mute).
4. **Chỉnh [chống spam](./features/anti-spam.mdx)** trong thẻ “Bảo vệ”: một mẫu có sẵn là đủ để bắt đầu.

:::info Cộng đồng Discord
[Chế độ Cộng đồng](./guides/community.md) của Discord chỉ được yêu cầu bởi một vài thiết lập, như việc chặn lời mời của Auto RaidMode và [đóng tin nhắn riêng](./features/dm-lock.mdx). Captcha hoạt động mà không cần nó.
:::

## Cài đặt có hướng dẫn {#install}

Lệnh `/setup` chỉ dành cho quản trị viên. Nó cài đặt cùng một lúc các mô-đun bạn chọn, với các giá trị mặc định đã được kiểm chứng mà sau đó bạn sẽ tinh chỉnh trong `/settings`.

### 🔧 Chọn các mô-đun {#recommended}

1. Dùng lệnh `/setup`.
2. Trong menu “**Chọn các mô-đun để cài đặt**”, chọn các tính năng mong muốn: Lệnh bằng tin nhắn, Auto RaidMode, Captcha, Tuổi tối thiểu của tài khoản, Chống spam, Báo cáo, Vai trò Tag, Đóng tin nhắn riêng và HoneyPot. Các mô-đun đã bật sẽ được đánh dấu sẵn.
3. Nhấp vào “**Bật**”.
4. Bot tóm tắt những gì nó sẽ tạo hoặc tái sử dụng. Nhấp lại vào “**Bật**” để áp dụng, hoặc vào “**Quay lại**” để sửa lựa chọn.

<Settings start="setup" />

Khi bạn xác nhận, RaidProtect:

- tạo kênh `#raidprotect-logs` nếu chưa có, hiển thị với các quản trị viên và người đã thêm bot;
- gỡ các quyền nguy hiểm khỏi `@everyone` (Quản trị viên, Cấm, Đuổi, Quản lý máy chủ, kênh, vai trò, tin nhắn, webhook và luồng, Nhắc đến @everyone, Loại trừ tạm thời);
- bật từng mô-đun đã chọn với giá trị mặc định: tiền tố `?`, Auto RaidMode ở mức 10 thành viên trong 10 giây, captcha ở chế độ Bảng với kênh `#xác-minh` và vai trò `@Chưa xác minh`, tuổi tối thiểu 6 giờ, bật chống spam và báo cáo, vai trò `@Tag`, đóng tin nhắn riêng, kênh bẫy của [HoneyPot](./features/honeypot.md).

:::tip Tắt một mô-đun
Bỏ chọn một mô-đun trong `/setup` không tắt nó. Để tắt một tính năng, hãy dùng [`/settings`](#settings).
:::

[Vai trò tự động và tin nhắn chào mừng](./features/onboarding.md) không thuộc trình hướng dẫn: hãy chỉnh chúng trong thẻ “**Thành viên mới**” của `/settings`.

### 🧭 Trình hướng dẫn cài đặt mới {#wizard}

Một trình hướng dẫn `/setup` mới thay danh sách mô-đun bằng một lộ trình có hướng dẫn:

- **Từng phần một**: Chung (kèm ngôn ngữ của máy chủ), Người mới vào, Bảo vệ và Kiểm duyệt, mỗi lần một bước. Một **chế độ xem rút gọn** gom tất cả vào một màn hình duy nhất, chỉ cách một cú nhấp.
- **Đề xuất phù hợp**: tùy theo quy mô máy chủ, máy chủ công khai hay cộng đồng, hoặc có tag hay không, trình hướng dẫn đánh dấu sẵn các biện pháp bảo vệ được khuyên dùng và nói rõ lý do.
- **Nhiều mô-đun hơn**: [tin nhắn chào mừng](./features/onboarding.md#welcome-message) (kèm kênh của nó), bộ lọc [Máy chủ khác](./features/automod.md#servers) xóa các lời mời đến máy chủ khác, và [slowmode phòng ngừa](./features/slowmode.md) ([Premium](/vi/premium)) trên kênh bạn chọn. [DISCON](./features/discon.md) cũng được giải thích ở đó: nó luôn hoạt động, không cần cài đặt gì.
- **Một bước kiểm tra trước khi bắt đầu**: trình hướng dẫn báo các quyền RaidProtect còn thiếu và các vai trò nằm trên vai trò của nó, kèm nút “**Kiểm tra lại**”.
- **Một bản tóm tắt** những gì sẽ được tạo, sửa đổi hoặc thiết lập. Không có gì được áp dụng trước khi bạn nhấp “**Cài đặt**”.
- **Máy chủ đã được cấu hình thì được kiểm tra, không làm lại**: bảng captcha hiện có và chức năng đóng tin nhắn riêng đang bật được giữ nguyên.
- **Và sau đó**: bản xem trước của [kiểm tra bảo mật](./features/audit.md) kết thúc quá trình cài đặt, kèm các lối tắt để thử captcha, tùy chỉnh tin nhắn chào mừng hoặc mở tất cả thiết lập. Một bước bị lỗi có thể làm lại bằng cách chạy lại `/setup`.

## Chỉnh sửa cấu hình {#settings}

Lệnh `/settings` mở bảng điều khiển của RaidProtect. Lệnh này chỉ dành cho quản trị viên và hiển thị dưới dạng tin nhắn tạm thời, chỉ mình bạn thấy.

### 🔍 Bảng điều khiển {#menu}

Các thiết lập được sắp xếp trong năm thẻ:

- **Chung**: [ngôn ngữ](./language.md), [lệnh bằng tin nhắn](./guides/prefix.md), [quyền](./guides/prefix.md#permissions) và múi giờ của máy chủ.
- **Thành viên mới**: [Auto RaidMode](./features/raid-mode.md), [captcha](./features/captcha.md), [tuổi tối thiểu của tài khoản](./features/onboarding.md#minage), [vai trò tự động](./features/onboarding.md#autorole) và [tin nhắn chào mừng](./features/onboarding.md#welcome-message).
- **Bảo vệ**: [DISCON](./features/discon.md), [chống spam](./features/anti-spam.mdx), [Automod](./features/automod.md) ([bộ lọc hình ảnh](./features/scam-images.md), [máy chủ khác](./features/automod.md#servers) và [phần mở rộng tệp](./features/automod.md#files)), [HoneyPot](./features/honeypot.md), [slowmode phòng ngừa](./features/slowmode.md), [Authentification Manager](./features/authentication-manager.mdx) và [đóng tin nhắn riêng](./features/dm-lock.mdx).
- **Kiểm duyệt**: [hình phạt](./features/sanctions.mdx), [tài khoản phụ](./features/alt-accounts.md)\*, nhật ký, [báo cáo](./features/reports.md) và [minh bạch](./features/transparency.md).
- **Tiện ích**: [vai trò tag](./features/tag-role.md), [khóa kênh](./features/channel-lock.md), [vai trò đang trực](./features/moderation.mdx#onduty) và lưu đệm tin nhắn.

\* Đang thử nghiệm: dòng này chỉ xuất hiện trên những máy chủ có quyền truy cập Identity Update (tài khoản phụ), trong bản beta công khai [Premium](/vi/premium).

Mỗi dòng hiển thị giá trị hiện tại của thiết lập và một nút: “**Cấu hình**” mở một màn hình riêng, “**Chỉnh sửa**” mở một cửa sổ nhập liệu. Mọi thay đổi được áp dụng ngay lập tức.

Sau một bản cập nhật, một huy hiệu **Mới** báo trong hai tuần các thiết lập vừa xuất hiện, cũng như thẻ của chúng chừng nào bạn chưa mở nó.

Hãy khám phá bảng điều khiển bên dưới, các nút đều có thể nhấp:

<Settings start="home:arrivals" />

:::info Tính năng Premium
Các màn hình dành riêng cho [Premium](/vi/premium) vẫn có thể xem được.
:::

### 🕒 Múi giờ {#timezone}

Múi giờ được dùng cho mọi thứ RaidProtect đăng vào giờ cố định, như [bản tóm tắt minh bạch](./features/transparency.md#recaps).

1. Dùng lệnh `/settings`.
2. Trong thẻ “**Chung**”, nhấp vào “**Chỉnh sửa**” bên cạnh “**Múi giờ**”.
3. Chọn chênh lệch UTC của bạn, hoặc nhập một mã múi giờ như `Europe/Paris` để giờ mùa hè được xử lý tự động.

Nếu không thiết lập, máy chủ dùng UTC.

### 🔄 Đặt lại một tham số {#reset}

1. Đi đến tham số mong muốn.
2. Nhấp vào “**Đặt lại**”.

Việc đặt lại được áp dụng ngay, không cần xác nhận. Chỉ những thao tác có tính phá hủy, như xóa captcha, mới yêu cầu bạn xác nhận.

### 🎨 Tùy chỉnh bot <span className="badge-premium">Premium</span> {#customize}

Nút “**Tùy chỉnh**”, ở cuối bảng điều khiển, thay đổi diện mạo của RaidProtect trên máy chủ của bạn: biệt danh, ảnh đại diện, biểu ngữ, phông chữ, hiệu ứng và màu của biệt danh.

<Settings start="customize" />

Các hình ảnh được chấp nhận ở định dạng PNG, JPEG, GIF hoặc WebP, tối đa 10 MB. Nếu Premium kết thúc, ảnh đại diện, biểu ngữ và kiểu biệt danh sẽ trở về mặc định của RaidProtect; biệt danh được giữ lại.

## Cấu hình nào cho máy chủ của bạn? {#quelle-config}

Trình hướng dẫn `/setup` đã bao quát những điều thiết yếu. Nếu bạn bắt đầu từ con số không, hoặc đang chuẩn bị cài đặt cùng một AI, hãy tìm điều phù hợp với máy chủ của bạn: mỗi nhu cầu dẫn đến tính năng đáp ứng nó.

- **Các [đợt raid](/vi/learn/discord-raid), những đợt tài khoản ùa vào cùng lúc**: [Auto RaidMode](./features/raid-mode.md) chặn hoặc lọc người vào trong suốt cuộc tấn công, và [DISCON](./features/discon.md) cho phép bạn siết chặt toàn bộ máy chủ chỉ với một cú nhấp.
- **[Spam](/vi/learn/spam-discord), quảng cáo, liên kết lừa đảo**: [chống spam](./features/anti-spam.mdx) tự động xử phạt, và [HoneyPot](./features/honeypot.md) bẫy các tài khoản spam.
- **Các [bot](/vi/learn/self-bot) vào hàng loạt**: [captcha](./features/captcha.md) bắt mỗi người mới vào chứng minh mình là con người, và [tuổi tối thiểu của tài khoản](./features/onboarding.md#minage) loại các tài khoản mới tạo hôm qua.
- **Lừa đảo bằng hình ảnh** (giveaway giả, phishing): [bộ lọc hình ảnh](./features/scam-images.md) phát hiện và xóa chúng.
- **Nguy cơ [nuke](/vi/learn/discord-nuke) hoặc tài khoản đội ngũ bị chiếm**: áp dụng [nguyên tắc đặc quyền tối thiểu](/vi/learn/least-privilege) và [Authentification Manager](./features/authentication-manager.mdx).
- **Một cộng đồng có thể giúp bạn kiểm duyệt**: bật [báo cáo](./features/reports.md).

Sau đó hãy điều chỉnh [hình phạt](./features/sanctions.mdx) (đuổi, timeout, cấm, jail) cho phù hợp với máy chủ của bạn.

:::info Gặp vấn đề về cấu hình?
Nếu bạn gặp sự cố, hãy xem mục [Sự cố](./guides/malfunctions.md) hoặc tham gia [máy chủ hỗ trợ](https://raidprotect.bot/discord) của chúng tôi để được giúp đỡ.
:::
