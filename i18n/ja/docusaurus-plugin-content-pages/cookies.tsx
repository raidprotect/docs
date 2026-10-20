import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Cookie ポリシー"
      lastUpdated="最終更新日：2025年2月1日"
      description="RaidProtect が Cookie を使用しないことで、安全でプライベートな閲覧を実現し、あなたのプライバシーを守っている仕組みをご紹介します。当社のポリシーをご確認ください。">
      <section>
        <p>
          RaidProtect は、ユーザーのプライバシーとデータの保護に取り組んでいます。この取り組みの一環として、当社ウェブサイトにおける
          Cookie の使用に関する方針をお知らせします。
        </p>
      </section>
      <section>
        <h2>1. Cookie の使用</h2>
        <p>
          当社は、使用している技術について透明性を保つことを大切にしています。そのため、当社のウェブサイトは{' '}
          <strong>Cookie を使用していない</strong>
          ことをお知らせします。Cookie とは、ウェブサイトがユーザー体験をより効率的にするために使用することがある小さなテキストファイルです。しかし当社は、ユーザーのプライバシーを最大限に守るため、当社のプラットフォームでは
          Cookie を使用しないことを選択しました。
        </p>
      </section>
      <section>
        <h2>2. これはあなたにとって何を意味しますか？</h2>
        <p>
          Cookie を使用していないため、あなたの訪問に関する情報が記録・分析されることなく、当社のウェブサイトを閲覧できます。この取り組みは、すべてのユーザーにプライベートで安全な閲覧体験を提供することを目的としています。
        </p>
      </section>
      <section>
        <h2>3. 当社はどのようにあなたのプライバシーを守っていますか？</h2>
        <p>
          Cookie を使用しない方針に加え、当社はあなたのプライバシーと個人データを守るための措置を講じています。当社はデータ保護に関する現行の法令を厳格に遵守し、個人情報への不正なアクセス、改変、開示、破壊を防ぐため、最先端の情報セキュリティ対策を実施しています。
        </p>
      </section>
      <section>
        <h2>4. Cookie ポリシーの変更</h2>
        <p>
          当社は、本 Cookie
          ポリシーをいつでも変更する権利を留保します。変更は、当社のウェブサイトに掲載された時点で直ちに効力を生じます。Cookie
          に関する当社の方針を把握していただくため、このページを定期的にご確認いただくことをおすすめします。
        </p>
      </section>
      <section>
        <h2>5. お問い合わせ</h2>
        <p>
          当社の Cookie
          ポリシー、または当社による個人データの保護方法についてご質問やご懸念がある場合は、お気軽に{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a> までお問い合わせください。
        </p>
      </section>
    </LegalLayout>
  );
}
