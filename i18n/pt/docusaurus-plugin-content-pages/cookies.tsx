import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Política de cookies"
      lastUpdated="Última atualização: 1 de fevereiro de 2025"
      description="Descubra como o RaidProtect protege a sua privacidade ao não utilizar cookies, garantindo uma navegação segura e privada. Consulte a nossa política.">
      <section>
        <p>
          Na RaidProtect, comprometemo-nos a proteger a privacidade e os dados dos nossos
          utilizadores. No âmbito deste compromisso, informamo-lo da nossa política relativa à
          utilização de cookies no nosso site.
        </p>
      </section>
      <section>
        <h2>1. Utilização de cookies</h2>
        <p>
          Pretendemos ser transparentes quanto às tecnologias que utilizamos. Para o efeito,
          informamo-lo de que o nosso site <strong>não utiliza cookies</strong>. Os cookies são
          pequenos ficheiros de texto que podem ser utilizados pelos sites para tornar a
          experiência do utilizador mais eficiente. Contudo, com o objetivo de preservar ao máximo
          a confidencialidade dos nossos utilizadores, optámos por não os utilizar na nossa
          plataforma.
        </p>
      </section>
      <section>
        <h2>2. O que significa isto para si?</h2>
        <p>
          A ausência de cookies significa que pode navegar no nosso site sem que qualquer
          informação relativa à sua visita seja registada ou analisada. Esta abordagem visa
          garantir uma experiência de navegação privada e segura para todos os nossos
          utilizadores.
        </p>
      </section>
      <section>
        <h2>3. Como protegemos a sua privacidade?</h2>
        <p>
          Para além da nossa política de não utilização de cookies, tomamos outras medidas para
          proteger a sua privacidade e os seus dados pessoais. Cumprimos rigorosamente as leis e
          regulamentos em vigor sobre a proteção dos dados e implementamos práticas de segurança
          da informação de última geração para prevenir qualquer acesso não autorizado,
          modificação, divulgação ou destruição das suas informações pessoais.
        </p>
      </section>
      <section>
        <h2>4. Alterações à política de utilização de cookies</h2>
        <p>
          Reservamo-nos o direito de modificar esta política de cookies a qualquer momento.
          Qualquer alteração entrará em vigor imediatamente após a sua publicação no nosso site.
          Recomendamos que consulte esta página regularmente para se manter informado sobre a
          nossa política em matéria de cookies.
        </p>
      </section>
      <section>
        <h2>5. Contacto</h2>
        <p>
          Se tiver questões ou preocupações relativamente à nossa política de cookies ou à forma
          como protegemos os seus dados pessoais, não hesite em contactar-nos em{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
