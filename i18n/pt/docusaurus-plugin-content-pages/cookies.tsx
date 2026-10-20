import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Política de cookies"
      lastUpdated="Última atualização: 1 de fevereiro de 2025"
      description="Descubra como o RaidProtect protege sua privacidade ao não usar cookies, garantindo uma navegação segura e privada. Consulte nossa política.">
      <section>
        <p>
          No RaidProtect, nos comprometemos a proteger a privacidade e os dados dos nossos
          usuários. Como parte desse compromisso, informamos você sobre nossa política relativa ao
          uso de cookies em nosso site.
        </p>
      </section>
      <section>
        <h2>1. Uso de cookies</h2>
        <p>
          Queremos ser transparentes quanto às tecnologias que usamos. Por isso, informamos que
          nosso site <strong>não usa cookies</strong>. Os cookies são pequenos arquivos de texto
          que podem ser usados pelos sites para tornar a experiência do usuário mais eficiente.
          No entanto, com o objetivo de preservar ao máximo a confidencialidade dos nossos
          usuários, optamos por não usá-los em nossa plataforma.
        </p>
      </section>
      <section>
        <h2>2. O que isso significa para você?</h2>
        <p>
          A ausência de cookies significa que você pode navegar em nosso site sem que nenhuma
          informação relativa à sua visita seja registrada ou analisada. Essa abordagem visa
          garantir uma experiência de navegação privada e segura para todos os nossos usuários.
        </p>
      </section>
      <section>
        <h2>3. Como protegemos sua privacidade?</h2>
        <p>
          Além da nossa política de não uso de cookies, adotamos outras medidas para proteger sua
          privacidade e seus dados pessoais. Cumprimos rigorosamente as leis e os regulamentos em
          vigor sobre a proteção de dados e implementamos práticas de segurança da informação de
          última geração para prevenir qualquer acesso não autorizado, modificação, divulgação ou
          destruição das suas informações pessoais.
        </p>
      </section>
      <section>
        <h2>4. Alterações na política de uso de cookies</h2>
        <p>
          Reservamos o direito de modificar esta política de cookies a qualquer momento. Qualquer
          alteração entrará em vigor imediatamente após sua publicação em nosso site.
          Recomendamos que você consulte esta página regularmente para se manter informado sobre
          nossa política de cookies.
        </p>
      </section>
      <section>
        <h2>5. Contato</h2>
        <p>
          Se você tiver dúvidas ou preocupações sobre nossa política de cookies ou sobre a forma
          como protegemos seus dados pessoais, não hesite em entrar em contato conosco pelo
          e-mail <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
