import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Cookie 政策"
      lastUpdated="最後更新：2025 年 2 月 1 日"
      description="了解 RaidProtect 如何透過不使用 Cookie 來保護您的隱私，讓您安全、私密地瀏覽。請參閱我們的政策。">
      <section>
        <p>
          RaidProtect 致力於保護使用者的隱私與資料。基於此承諾，我們在此向您說明本網站關於使用 Cookie 的政策。
        </p>
      </section>
      <section>
        <h2>1. Cookie 的使用</h2>
        <p>
          我們希望對所使用的技術保持透明。為此，我們在此告知您，本網站<strong>不使用 Cookie</strong>。Cookie
          是網站可用來讓使用者體驗更有效率的小型文字檔案。然而，為了最大程度地維護使用者的隱私，我們選擇不在我們的平台上使用 Cookie。
        </p>
      </section>
      <section>
        <h2>2. 這對您代表什麼？</h2>
        <p>
          不使用 Cookie 代表您可以瀏覽我們的網站，而不會有任何關於您造訪的資訊被記錄或分析。此作法旨在為所有使用者確保私密且安全的瀏覽體驗。
        </p>
      </section>
      <section>
        <h2>3. 我們如何保護您的隱私？</h2>
        <p>
          除了不使用 Cookie 的政策外，我們也採取其他措施來保護您的隱私與個人資料。我們嚴格遵守現行的資料保護法律與法規，並實施先進的資訊安全措施，以防止您的個人資訊遭未經授權的存取、修改、揭露或毀損。
        </p>
      </section>
      <section>
        <h2>4. Cookie 使用政策的修改</h2>
        <p>
          我們保留隨時修改本 Cookie 使用政策的權利。任何修改將於公布在本網站後立即生效。我們建議您定期查看本頁面，以掌握我們的 Cookie 政策。
        </p>
      </section>
      <section>
        <h2>5. 聯絡我們</h2>
        <p>
          若您對我們的 Cookie 使用政策或我們保護您個人資料的方式有任何疑問或疑慮，歡迎透過{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a> 與我們聯絡。
        </p>
      </section>
    </LegalLayout>
  );
}
