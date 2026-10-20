import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="通用使用条款"
      lastUpdated="最后更新：2025年2月1日"
      description="查阅我们的使用条款，了解与 RaidProtect 网站及机器人相关的知识产权、超链接、个人数据管理以及我们的责任。">
      <section>
        <p>
          将 RaidProtect 添加到您的 Discord 服务器，即表示您确认已阅读并接受本使用条款。如果您不接受其中任何一项条款，则必须停止使用我们的服务。
        </p>
      </section>
      <section>
        <h2>1. 知识产权</h2>
        <p>
          本网站、其整体结构、RaidProtect 商标，以及构成本网站的文字、图像、动画、标志和任何其他元素，均为 SAS
          French Community Agency 或其合作伙伴的专有财产，受法国及国际知识产权法律保护。未经 SAS French
          Community Agency 事先书面授权，以任何形式复制、展示、使用或改编上述元素的全部或部分（包括软件），均被严格禁止，并构成侵权行为。
        </p>
        <p>
          上述规定同样适用于本应用的功能和源代码，它们同样受知识产权保护。任何未经授权复制、修改或使用本应用功能的企图均被禁止，并可能被追究法律责任。
        </p>
      </section>
      <section>
        <h2>2. 超链接</h2>
        <p>
          任何指向本网站的链接均须事先获得 <strong>SAS French Community Agency</strong>{' '}
          的书面授权。在任何情况下，如 <strong>SAS French Community Agency</strong>{' '}
          认为与本网站建立的链接可能损害本网站的利益，其保留随时终止该授权的权利。
        </p>
        <p>
          此外特此说明，与本网站存在超链接关系的网站（指向本网站或从本网站发出的超链接）不受{' '}
          <strong>SAS French Community Agency</strong>、<strong>RaidProtect</strong>{' '}
          及其关联公司的控制，上述各方对其内容不承担任何责任。
        </p>
      </section>
      <section>
        <h2>3. 服务的使用</h2>
        <p>
          我们的服务（包括本应用）可免费用于个人或商业用途。如出现我们认为不当或可能损害其他用户的使用行为，我们保留禁止其使用我们服务的权利。
        </p>
      </section>
      <section>
        <h2>4. 责任</h2>
        <h3>4.1. 网站</h3>
        <p>
          对于因使用本网站或其所含信息而导致的任何直接或间接损害，<strong>SAS French Community Agency</strong>、
          <strong>RaidProtect</strong> 及其关联公司概不负责。<strong>SAS French Community Agency</strong>{' '}
          不保证本网站所呈现信息的准确性或完整性，并保留随时修改或删除这些信息的权利，恕不另行通知。
        </p>
        <h3>4.2. 应用</h3>
        <p>
          <strong>RaidProtect</strong> 应用按“现状”提供，不附带任何明示或暗示的保证。
          <strong>SAS French Community Agency</strong>{' '}
          不对因不正确或滥用本应用而产生的后果负责，也不对因临时或永久故障可能造成的损害负责。
        </p>
        <p>
          使用 <strong>RaidProtect</strong> 的 Discord
          服务器管理员须对其所做的配置以及根据本应用自动化操作（例如封禁或删除消息）所作出的决定承担全部责任。如违反
          Discord 使用条款或现行法律，相关服务器的管理员须承担全部责任。
        </p>
      </section>
      <section>
        <h2>5. 通用使用条款的修改</h2>
        <p>
          本通用使用条款可随时修改，以反映服务或适用法规的变化。任何修改都将在网站上发布，必要时也会通过本应用进行通知。在通用使用条款更新后继续使用服务，即表示用户接受相关修改。
        </p>
      </section>
      <section>
        <h2>6. 适用法律与管辖</h2>
        <p>
          本通用使用条款受法国法律管辖。如发生争议，在尝试友好解决之后，除法律另有规定外，由巴黎辖区内有管辖权的法院管辖。
        </p>
      </section>
    </LegalLayout>
  );
}
