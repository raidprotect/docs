import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Privacy(): ReactNode {
  return (
    <LegalLayout
      title="プライバシーポリシー"
      lastUpdated="最終更新日：2026年10月18日"
      description="RaidProtect がサービスのご利用にあたって、あなたの個人データをどのように保護し、プライバシーの安全を確保しているかをご紹介します。詳細なプライバシーポリシーです。">
      <section>
        <p>
          本プライバシーポリシーは、Discord アプリケーション <strong>RaidProtect</strong>{' '}
          および関連ウェブサイトが提供するサービスにおける、個人データの収集、利用、保護の方法について説明するものです。
        </p>
        <p>
          これらのサービスを利用することにより、あなたは本プライバシーポリシーに記載された取り扱いに同意したものとみなされます。<strong>SAS
          French Community Agency</strong>（<strong>RaidProtect</strong>
          ）は、適用法令、特に一般データ保護規則（GDPR）およびフランスの
          <strong>情報処理・ファイル・自由に関する法律（loi informatique et libertés）</strong>
          に従い、あなたのプライバシーを尊重し保護することを約束します。
        </p>
      </section>
      <section>
        <h2>1. 収集するデータ</h2>
        <p>
          提供するサービスを運営するため、Discord アプリケーション <strong>RaidProtect</strong>{' '}
          およびウェブサイトは、以下のカテゴリーのデータを収集・処理します。
        </p>
        <h3>1.1. Discord アプリケーションが収集するデータ</h3>
        <ul>
          <li>
            <strong>Discord サーバーの設定</strong>：<strong>RaidProtect</strong>{' '}
            を利用するサーバーの設定に関する情報（例：ロール、権限、設定済みのチャンネル）。
          </li>
          <li>
            <strong>テキストメッセージ</strong>：ユーザーが送信したあらゆるメッセージは、モデレーションサービスの一環として一時的に収集される場合があります。
          </li>
          <li>
            <strong>Discord イベント</strong>：新しいメンバーの参加や退出、ロールの変更、メッセージの削除など、Discord
            から送信されるイベント。
          </li>
        </ul>
        <h3>1.2. ウェブサイトが収集するデータ</h3>
        <ul>
          <li>
            <strong>識別データ</strong>：オンラインサービスへの登録時または利用時にユーザーが提供する情報（例：メールアドレス、Discord
            の識別子）。
          </li>
          <li>
            <strong>閲覧データ</strong>：IP
            アドレス、ブラウザの種類、Cookie など、ウェブサイトとのやり取りに関する情報。
          </li>
        </ul>
        <h3>1.3. ウェブアプリケーションが収集するデータ</h3>
        <ul>
          <li>
            <strong>デバイスに関するデータ</strong>：ウェブサービスへのアクセスに使用されたデバイスに関する情報（例：オペレーティングシステム、ブラウザ）。
          </li>
          <li>
            <strong>ユーザーに関するデータ</strong>：言語設定、使用している Discord
            アカウント、ウェブアプリケーションでの操作など、ユーザーに関する情報。
          </li>
        </ul>
      </section>
      <section>
        <h2>2. 処理の目的</h2>
        <p>収集したデータは、以下の目的にのみ使用されます。</p>
        <ol>
          <li>
            提供するサービスを正常に運営するため（例：Discord
            サーバーのモデレーション、コミュニティに関するイベントの分析）。
          </li>
          <li>最適でパーソナライズされたユーザー体験を保証するため。</li>
          <li>管理者が定めたルールを適用し、Discord サーバーを保護するため。</li>
          <li>利用状況を分析し、サービスを維持・改善するため。</li>
          <li>ユーザーを保護し、不正利用、スパム、悪意ある行為を防止するため。</li>
        </ol>
        <p>データが商業目的または広告目的で使用されることはありません。</p>
      </section>
      <section>
        <h2>3. データの保存</h2>
        <p>
          収集した個人データは、上記の目的の達成に必要な期間に限り保存されます。この期間が経過すると、データは削除または匿名化されます。
        </p>
        <ul>
          <li>
            <strong>テキストメッセージ</strong>：処理のために一時的に保存され、その後完全に削除されます。
          </li>
          <li>
            <strong>サーバーの設定データ</strong>：サーバーが <strong>RaidProtect</strong>{' '}
            のサービスを利用している間、保存されます。
          </li>
          <li>
            <strong>閲覧データ</strong>：適用される法令の規定に従って保存されます。
          </li>
          <li>
            <strong>デバイスおよびユーザーに関するデータ</strong>：ウェブアプリケーションでの最後の操作から
            365 日間、またはユーザーが同意を撤回するまで保存されます。
          </li>
        </ul>
      </section>
      <section>
        <h2>4. データの共有</h2>
        <p>
          収集したデータが<strong>第三者と共有されることは一切ありません</strong>。ただし、以下の場合を除きます。
        </p>
        <ol>
          <li>
            <strong>技術パートナー</strong>：サービスの提供に必要なパートナー（例：ホスティング事業者やクラウドサービス事業者）。
          </li>
          <li>
            <strong>法的義務</strong>：法律、司法当局または規制当局によってデータの開示が求められた場合。
          </li>
        </ol>
      </section>
      <section>
        <h2>5. データのセキュリティ</h2>
        <p>
          <strong>RaidProtect</strong>{' '}
          は、不正アクセス、紛失、破壊、改ざんから個人データを保護するために必要なあらゆる技術的・組織的措置を講じています。主な措置は以下のとおりです。
        </p>
        <ul>
          <li>機密データの暗号化。</li>
          <li>データへのアクセスの厳格な管理（認証およびログ記録）。</li>
          <li>安全なサーバー上でホストされたインフラストラクチャ。</li>
        </ul>
      </section>
      <section>
        <h2>6. ユーザーの権利</h2>
        <p>GDPR に基づき、ユーザーは自身の個人データについて以下の権利を有します。</p>
        <ul>
          <li>
            <strong>アクセス権</strong>：処理されている個人データの写しを取得する権利。
          </li>
          <li>
            <strong>訂正権</strong>：不正確または不完全なデータを訂正する権利。
          </li>
          <li>
            <strong>消去権</strong>：一定の条件のもとでデータの削除を求める権利。
          </li>
          <li>
            <strong>処理制限権</strong>：自身のデータの処理を制限する権利。
          </li>
          <li>
            <strong>異議申立権</strong>：正当な理由に基づき、自身のデータの処理を拒否する権利。
          </li>
          <li>
            <strong>データポータビリティ権</strong>：構造化された形式で個人データを受け取る権利。
          </li>
        </ul>
        <p>
          これらの権利を行使する場合、またはデータの取り扱いについてご質問がある場合は、データ保護責任者（DPO）（
          <a href="mailto:dpo@raidprotect.bot">
            <strong>dpo@raidprotect.bot</strong>
          </a>
          ）までご連絡ください。
        </p>
      </section>
      <section>
        <h2>7. プライバシーポリシーの変更</h2>
        <p>
          本プライバシーポリシーは、サービスまたは適用される規制の変更を反映するため、いつでも更新されることがあります。変更はウェブサイト上で公開され、必要に応じて本アプリケーションを通じて通知されます。ポリシーの更新後もサービスを引き続き利用することにより、ユーザーは変更内容に同意したものとみなされます。
        </p>
      </section>
      <section>
        <h2>8. お問い合わせ</h2>
        <p>
          当社のプライバシーポリシー、または当社による個人データの保護方法についてご質問やご懸念がある場合は、お気軽に
          <a href="mailto:dpo@raidprotect.bot">
            <strong>dpo@raidprotect.bot</strong>
          </a>
          までお問い合わせください。
        </p>
      </section>
    </LegalLayout>
  );
}
