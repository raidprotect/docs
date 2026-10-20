import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Cookie 使用政策"
      lastUpdated="最后更新：2025年2月1日"
      description="了解 RaidProtect 如何通过不使用 Cookie 来保护您的隐私，为您提供安全、私密的浏览体验。请查阅我们的政策。">
      <section>
        <p>
          RaidProtect 致力于保护用户的隐私与数据。基于这一承诺，我们在此向您说明本网站关于 Cookie
          使用的政策。
        </p>
      </section>
      <section>
        <h2>1. Cookie 的使用</h2>
        <p>
          我们希望对所使用的技术保持透明。为此，我们告知您：本网站<strong>不使用 Cookie</strong>。Cookie
          是网站可用来提升用户体验效率的小型文本文件。然而，为了最大限度地保护用户的隐私，我们选择不在本平台上使用
          Cookie。
        </p>
      </section>
      <section>
        <h2>2. 这对您意味着什么？</h2>
        <p>
          不使用 Cookie 意味着您可以浏览我们的网站，而不会有任何关于您访问的信息被记录或分析。此举旨在为所有用户提供私密、安全的浏览体验。
        </p>
      </section>
      <section>
        <h2>3. 我们如何保护您的隐私？</h2>
        <p>
          除了不使用 Cookie 的政策之外，我们还采取其他措施来保护您的隐私和个人数据。我们严格遵守现行的数据保护法律法规，并采用先进的信息安全实践，以防止对您个人信息的任何未经授权的访问、修改、披露或销毁。
        </p>
      </section>
      <section>
        <h2>4. Cookie 使用政策的变更</h2>
        <p>
          我们保留随时修改本 Cookie 使用政策的权利。任何修改自在本网站发布之时起立即生效。我们建议您定期查看本页面，以了解我们在 Cookie
          方面的政策。
        </p>
      </section>
      <section>
        <h2>5. 联系方式</h2>
        <p>
          如您对我们的 Cookie 使用政策或我们保护您个人数据的方式有任何疑问或顾虑，欢迎通过{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a> 与我们联系。
        </p>
      </section>
    </LegalLayout>
  );
}
