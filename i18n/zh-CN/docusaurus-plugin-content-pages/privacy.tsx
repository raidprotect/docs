import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Privacy(): ReactNode {
  return (
    <LegalLayout
      title="隐私政策"
      lastUpdated="最后更新：2026年10月18日"
      description="了解 RaidProtect 在您使用我们的服务时如何保护您的个人数据并确保您的隐私安全。详细的隐私政策。">
      <section>
        <p>
          本隐私政策说明在 Discord 应用 <strong>RaidProtect</strong>{' '}
          及其相关网站所提供的服务范围内，个人数据的收集、使用和保护方式。
        </p>
        <p>
          使用这些服务，即表示您接受本隐私政策中所述的做法。<strong>SAS French Community Agency</strong>（
          <strong>RaidProtect</strong>）承诺依照现行法律，特别是《通用数据保护条例》（GDPR）和法国
          <strong>《信息技术与自由法》</strong>，尊重并保护您的隐私。
        </p>
      </section>
      <section>
        <h2>1. 收集的数据</h2>
        <p>
          为确保所提供服务的正常运行，Discord 应用 <strong>RaidProtect</strong>{' '}
          及网站会收集并处理以下类别的数据：
        </p>
        <h3>1.1. Discord 应用收集的数据</h3>
        <ul>
          <li>
            <strong>Discord 服务器配置</strong>：使用 <strong>RaidProtect</strong>{' '}
            的服务器的设置信息（例如：身份组、权限、已配置的频道）。
          </li>
          <li>
            <strong>文本消息</strong>：在审核服务范围内，用户发送的任何消息都可能被临时收集。
          </li>
          <li>
            <strong>Discord 事件</strong>：由 Discord 传递的事件，例如新成员的加入或离开、身份组的变更或消息的删除。
          </li>
        </ul>
        <h3>1.2. 网站收集的数据</h3>
        <ul>
          <li>
            <strong>身份识别数据</strong>：用户在注册或使用在线服务时提供的信息（例如：电子邮箱地址、Discord
            标识符）。
          </li>
          <li>
            <strong>浏览数据</strong>：与网站交互相关的信息，例如 IP 地址、浏览器类型或 Cookie。
          </li>
        </ul>
        <h3>1.3. 网页应用收集的数据</h3>
        <ul>
          <li>
            <strong>设备相关数据</strong>：用于访问网页服务的设备信息（例如：操作系统、浏览器）。
          </li>
          <li>
            <strong>用户相关数据</strong>：关于用户的信息，例如语言偏好、所使用的 Discord
            账号以及与网页应用的交互。
          </li>
        </ul>
      </section>
      <section>
        <h2>2. 处理目的</h2>
        <p>收集的数据仅用于：</p>
        <ol>
          <li>确保所提供服务的正常运行（例如：Discord 服务器的审核、社区相关事件的分析）。</li>
          <li>保障最佳且个性化的用户体验。</li>
          <li>通过执行管理员设定的规则来保护 Discord 服务器的安全。</li>
          <li>通过分析使用情况来维护和改进服务。</li>
          <li>保护用户，防止滥用、垃圾信息或恶意行为。</li>
        </ol>
        <p>这些数据不会用于商业或广告目的。</p>
      </section>
      <section>
        <h2>3. 数据保存</h2>
        <p>
          所收集的个人数据仅在实现上述目的所必需的期限内保存。该期限届满后，数据将被删除或匿名化。
        </p>
        <ul>
          <li>
            <strong>文本消息</strong>：为处理目的临时保存，随后永久删除。
          </li>
          <li>
            <strong>服务器配置数据</strong>：在服务器使用 <strong>RaidProtect</strong>{' '}
            服务期间一直保存。
          </li>
          <li>
            <strong>浏览数据</strong>：依照适用的法律规定保存。
          </li>
          <li>
            <strong>设备及用户相关数据</strong>：自最后一次与网页应用交互起保存 365
            天，或保存至用户撤回同意为止。
          </li>
        </ul>
      </section>
      <section>
        <h2>4. 数据共享</h2>
        <p>
          所收集的数据<strong>绝不会与第三方共享</strong>，但以下情况除外：
        </p>
        <ol>
          <li>
            <strong>技术合作伙伴</strong>：提供服务所必需的合作伙伴（例如：托管服务商或云服务提供商）。
          </li>
          <li>
            <strong>法律义务</strong>：法律、司法机关或监管机构要求披露数据的情况。
          </li>
        </ol>
      </section>
      <section>
        <h2>5. 数据安全</h2>
        <p>
          <strong>RaidProtect</strong>{' '}
          采取一切必要的技术和组织措施，保护个人数据免遭未经授权的访问、丢失、毁坏或篡改。主要措施包括：
        </p>
        <ul>
          <li>对敏感数据进行加密。</li>
          <li>严格控制数据访问（身份验证与日志记录）。</li>
          <li>基础设施托管于安全的服务器上。</li>
        </ul>
      </section>
      <section>
        <h2>6. 用户权利</h2>
        <p>根据 GDPR，用户对其个人数据享有以下权利：</p>
        <ul>
          <li>
            <strong>访问权</strong>：获取所处理个人数据的副本。
          </li>
          <li>
            <strong>更正权</strong>：更正不准确或不完整的数据。
          </li>
          <li>
            <strong>删除权</strong>：在特定条件下要求删除数据。
          </li>
          <li>
            <strong>限制处理权</strong>：限制对其数据的处理。
          </li>
          <li>
            <strong>反对权</strong>：基于正当理由拒绝对其数据的处理。
          </li>
          <li>
            <strong>可携带权</strong>：以结构化格式获取其个人数据。
          </li>
        </ul>
        <p>
          如需行使上述权利或咨询数据管理相关问题，用户可通过{' '}
          <a href="mailto:dpo@raidprotect.bot">
            <strong>dpo@raidprotect.bot</strong>
          </a>{' '}
          联系数据保护官（DPO）。
        </p>
      </section>
      <section>
        <h2>7. 隐私政策的修改</h2>
        <p>
          本隐私政策可随时更新，以反映服务或适用法规的变化。任何修改都将在网站上发布，必要时也会通过本应用进行通知。在政策更新后继续使用服务，即表示用户接受相关修改。
        </p>
      </section>
      <section>
        <h2>8. 联系方式</h2>
        <p>
          如您对我们的隐私政策或我们保护您个人数据的方式有任何疑问或顾虑，欢迎通过{' '}
          <a href="mailto:dpo@raidprotect.bot">
            <strong>dpo@raidprotect.bot</strong>
          </a>{' '}
          与我们联系。
        </p>
      </section>
    </LegalLayout>
  );
}
