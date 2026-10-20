import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Chính sách sử dụng cookie"
      lastUpdated="Cập nhật lần cuối: ngày 1 tháng 2 năm 2025"
      description="Tìm hiểu cách RaidProtect bảo vệ quyền riêng tư của bạn bằng cách không sử dụng cookie, mang lại trải nghiệm duyệt web an toàn và riêng tư. Xem chính sách của chúng tôi.">
      <section>
        <p>
          Tại RaidProtect, chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu của người dùng.
          Trong khuôn khổ cam kết này, chúng tôi xin thông báo đến bạn chính sách của chúng tôi về
          việc sử dụng cookie trên trang web.
        </p>
      </section>
      <section>
        <h2>1. Sử dụng cookie</h2>
        <p>
          Chúng tôi muốn minh bạch về các công nghệ mà chúng tôi sử dụng. Vì vậy, chúng tôi xin
          thông báo rằng trang web của chúng tôi <strong>không sử dụng cookie</strong>. Cookie là
          các tệp văn bản nhỏ mà trang web có thể sử dụng để giúp trải nghiệm người dùng hiệu quả
          hơn. Tuy nhiên, nhằm bảo vệ tối đa quyền riêng tư của người dùng, chúng tôi đã chọn không
          sử dụng chúng trên nền tảng của mình.
        </p>
      </section>
      <section>
        <h2>2. Điều này có ý nghĩa gì đối với bạn?</h2>
        <p>
          Việc không sử dụng cookie có nghĩa là bạn có thể duyệt trang web của chúng tôi mà không
          có bất kỳ thông tin nào về lượt truy cập của bạn bị ghi lại hoặc phân tích. Cách làm này
          nhằm đảm bảo trải nghiệm duyệt web riêng tư và an toàn cho tất cả người dùng.
        </p>
      </section>
      <section>
        <h2>3. Chúng tôi bảo vệ quyền riêng tư của bạn như thế nào?</h2>
        <p>
          Ngoài chính sách không sử dụng cookie, chúng tôi còn áp dụng các biện pháp khác để bảo vệ
          quyền riêng tư và dữ liệu cá nhân của bạn. Chúng tôi tuân thủ nghiêm ngặt các luật và
          quy định hiện hành về bảo vệ dữ liệu, đồng thời áp dụng các phương pháp bảo mật thông
          tin tiên tiến để ngăn chặn mọi hành vi truy cập, sửa đổi, tiết lộ hoặc phá hủy trái phép
          thông tin cá nhân của bạn.
        </p>
      </section>
      <section>
        <h2>4. Thay đổi chính sách sử dụng cookie</h2>
        <p>
          Chúng tôi có quyền sửa đổi chính sách sử dụng cookie này vào bất kỳ lúc nào. Mọi thay
          đổi sẽ có hiệu lực ngay sau khi được đăng tải trên trang web của chúng tôi. Chúng tôi
          khuyến khích bạn thường xuyên truy cập trang này để nắm được chính sách của chúng tôi về
          cookie.
        </p>
      </section>
      <section>
        <h2>5. Liên hệ</h2>
        <p>
          Nếu bạn có câu hỏi hoặc mối quan tâm nào về chính sách sử dụng cookie của chúng tôi hoặc
          về cách chúng tôi bảo vệ dữ liệu cá nhân của bạn, đừng ngần ngại liên hệ với chúng tôi
          qua{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
