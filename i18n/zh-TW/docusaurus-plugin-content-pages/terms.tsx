import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="服務條款"
      lastUpdated="最後更新：2025 年 2 月 1 日"
      description="查看我們的服務條款，了解智慧財產權、超連結、個人資料管理，以及我們對 RaidProtect 網站與機器人所負的責任。">
      <section>
        <p>
          將 RaidProtect 加入您的 Discord 伺服器，即表示您確認已閱讀並接受本服務條款。若您不接受其中任何一項條款，您必須停止使用我們的服務。
        </p>
      </section>
      <section>
        <h2>1. 智慧財產權</h2>
        <p>
          本網站、其整體架構、RaidProtect 商標，以及構成本網站的文字、圖片、動畫、標誌與任何其他元素，均為 SAS French
          Community Agency 或其合作夥伴的專有財產，並受法國及國際智慧財產權相關法律保護。未經 SAS French Community Agency
          事先書面授權，以任何形式重製、展示、使用或改編上述元素之全部或部分（包括軟體），均嚴格禁止，並構成侵權行為。
        </p>
        <p>
          相同規定亦適用於本應用程式的功能與原始碼，其同樣受智慧財產權保護。任何未經授權而重製、修改或使用本應用程式功能的企圖均被禁止，並可能遭受法律追訴。
        </p>
      </section>
      <section>
        <h2>2. 超連結</h2>
        <p>
          任何連結至本網站的連結，均須事先取得 <strong>SAS French Community Agency</strong>{' '}
          的書面授權。無論如何，若 <strong>SAS French Community Agency</strong>{' '}
          認為與本網站建立的連結可能損害本網站的利益，保留隨時終止該授權的權利。
        </p>
        <p>
          此外特此說明，與本網站存在超連結的網站（指向本網站或從本網站連出的超連結），並不受{' '}
          <strong>SAS French Community Agency</strong>、<strong>RaidProtect</strong>{' '}
          及其關係企業控制，上述各方對其內容不承擔任何責任。
        </p>
      </section>
      <section>
        <h2>3. 服務的使用</h2>
        <p>
          我們的服務（包括本應用程式）可自由用於個人或商業用途。若我們認為某項使用方式不當或可能損害其他使用者，我們保留禁止其使用我們服務的權利。
        </p>
      </section>
      <section>
        <h2>4. 責任</h2>
        <h3>4.1. 網站</h3>
        <p>
          <strong>SAS French Community Agency</strong>、<strong>RaidProtect</strong>{' '}
          及其關係企業對於因使用本網站或其所含資訊而導致的任何直接或間接損害，概不負責。
          <strong>SAS French Community Agency</strong>{' '}
          不保證本網站所呈現資訊的正確性或完整性，並保留隨時修改或刪除該等資訊的權利，恕不另行通知。
        </p>
        <h3>4.2. 應用程式</h3>
        <p>
          <strong>RaidProtect</strong> 應用程式係依「現狀」提供，不附帶任何明示或默示的保證。
          <strong>SAS French Community Agency</strong>{' '}
          對於本應用程式遭不當或濫用所造成的後果，以及因暫時性或永久性故障可能導致的損害，概不負責。
        </p>
        <p>
          使用 <strong>RaidProtect</strong> 的 Discord
          伺服器管理員，須對其所進行的設定以及因本應用程式自動化動作（例如停權或刪除訊息）而做出的決定自負全責。若違反
          Discord 使用條款或現行法律，相關伺服器的管理員須承擔全部責任。
        </p>
      </section>
      <section>
        <h2>5. 服務條款的修改</h2>
        <p>
          本服務條款可能隨時修改，以反映服務內容或適用法規的變更。任何修改都將公布於網站上，並在必要時透過本應用程式通知。在服務條款更新後繼續使用服務，即表示使用者接受所做的修改。
        </p>
      </section>
      <section>
        <h2>6. 準據法與管轄法院</h2>
        <p>
          本服務條款受法國法律管轄。如發生爭議，經嘗試友好解決未果後，除法律另有規定外，由巴黎轄區內的管轄法院審理。
        </p>
      </section>
    </LegalLayout>
  );
}
