import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Termos de utilização"
      lastUpdated="Última atualização: 1 de fevereiro de 2025"
      description="Consulte as nossas condições de utilização para compreender os direitos de propriedade intelectual, hiperligações, gestão dos dados pessoais e a nossa responsabilidade sobre o site e o bot RaidProtect.">
      <section>
        <p>
          Ao adicionar o RaidProtect ao seu servidor Discord, reconhece ter lido e aceitado os
          Termos de Utilização. Se não aceitar alguma destas condições, deverá deixar de utilizar
          os nossos serviços.
        </p>
      </section>
      <section>
        <h2>1. Propriedade intelectual</h2>
        <p>
          O presente site, a sua estrutura geral, a marca comercial RaidProtect, bem como os
          textos, imagens, animações, logótipos e qualquer outro elemento que o compõe, são
          propriedade exclusiva da SAS French Community Agency ou dos seus parceiros e estão
          protegidos pelas leis francesas e internacionais relativas à propriedade intelectual.
          Qualquer reprodução, representação, utilização ou adaptação, sob qualquer forma, da
          totalidade ou de parte destes elementos, incluindo o software, sem a autorização escrita
          prévia da SAS French Community Agency, é estritamente proibida e constituiria uma
          contrafação.
        </p>
        <p>
          As mesmas disposições aplicam-se às funcionalidades e ao código-fonte da Aplicação,
          igualmente protegidos pelos direitos de propriedade intelectual. Qualquer tentativa de
          reproduzir, modificar ou utilizar sem autorização as funcionalidades da Aplicação é
          proibida e suscetível de procedimento judicial.
        </p>
      </section>
      <section>
        <h2>2. Hiperligações</h2>
        <p>
          Qualquer ligação ao Site está sujeita a autorização escrita e prévia da{' '}
          <strong>SAS French Community Agency</strong>. Em qualquer caso, a{' '}
          <strong>SAS French Community Agency</strong> reserva-se o direito de pôr termo a esta
          autorização em qualquer momento se considerar que a ligação estabelecida com o Site é
          suscetível de prejudicar os interesses deste último.
        </p>
        <p>
          Esclarece-se ainda que os sites que apresentem uma hiperligação ao presente Site
          (hiperligações que apontem para o Site ou estabelecidas a partir dele) não estão sob o
          controlo da <strong>SAS French Community Agency</strong>, do <strong>RaidProtect</strong>{' '}
          nem das suas sociedades afiliadas, que declinam toda a responsabilidade quanto ao seu
          conteúdo.
        </p>
      </section>
      <section>
        <h2>3. Utilização do serviço</h2>
        <p>
          Os nossos serviços, incluindo a Aplicação, são de utilização livre para fins pessoais ou
          comerciais. Reservamo-nos o direito de proibir a utilização dos nossos serviços em caso
          de utilização que consideremos inadequada ou suscetível de prejudicar outros
          Utilizadores.
        </p>
      </section>
      <section>
        <h2>4. Responsabilidade</h2>
        <h3>4.1. Site</h3>
        <p>
          A <strong>SAS French Community Agency</strong>, o <strong>RaidProtect</strong> e as suas
          sociedades afiliadas não poderão ser responsabilizados por quaisquer danos diretos ou
          indiretos resultantes da utilização do Site ou das informações nele contidas. A{' '}
          <strong>SAS French Community Agency</strong> não garante a exatidão nem a exaustividade
          das informações apresentadas no Site e reserva-se o direito de as modificar ou eliminar
          a qualquer momento, sem aviso prévio.
        </p>
        <h3>4.2. Aplicação</h3>
        <p>
          A Aplicação <strong>RaidProtect</strong> é fornecida tal como está, sem qualquer
          garantia, expressa ou implícita. A <strong>SAS French Community Agency</strong> não pode
          ser responsabilizada pelas consequências de uma utilização incorreta ou abusiva da
          Aplicação, nem pelos eventuais danos resultantes de um funcionamento incorreto temporário
          ou permanente.
        </p>
        <p>
          Os administradores de servidores Discord que utilizam o <strong>RaidProtect</strong> são
          os únicos responsáveis pelas configurações efetuadas e pelas decisões tomadas na
          sequência das ações automatizadas da Aplicação (por exemplo, banimentos ou eliminação de
          mensagens). Em caso de violação das condições de utilização do Discord ou da legislação
          em vigor, os administradores do servidor em causa assumem a inteira responsabilidade.
        </p>
      </section>
      <section>
        <h2>5. Modificação dos Termos de Utilização</h2>
        <p>
          Os presentes Termos de Utilização podem ser alterados a qualquer momento para refletir
          alterações nos serviços ou na regulamentação aplicável. Qualquer alteração será
          publicada no site e, se necessário, comunicada através da Aplicação. Ao continuarem a
          utilizar os serviços após a atualização dos Termos, os utilizadores aceitam as
          alterações introduzidas.
        </p>
      </section>
      <section>
        <h2>6. Lei aplicável e jurisdição</h2>
        <p>
          Os presentes Termos de Utilização regem-se pelo direito francês. Em caso de litígio, e
          após uma tentativa de resolução amigável, é atribuída competência aos tribunais
          competentes do foro de Paris, salvo disposição legal em contrário.
        </p>
      </section>
    </LegalLayout>
  );
}
