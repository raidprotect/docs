import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Termos de uso"
      lastUpdated="Última atualização: 1 de fevereiro de 2025"
      description="Consulte nossos termos de uso para entender os direitos de propriedade intelectual, os links, o gerenciamento dos dados pessoais e nossa responsabilidade sobre o site e o bot RaidProtect.">
      <section>
        <p>
          Ao adicionar o RaidProtect ao seu servidor Discord, você reconhece ter lido e aceitado
          os Termos de Uso. Se você não aceitar alguma destas condições, deverá deixar de usar
          nossos serviços.
        </p>
      </section>
      <section>
        <h2>1. Propriedade intelectual</h2>
        <p>
          O presente site, sua estrutura geral, a marca comercial RaidProtect, bem como os textos,
          imagens, animações, logotipos e qualquer outro elemento que o compõe, são propriedade
          exclusiva da SAS French Community Agency ou de seus parceiros e estão protegidos pelas
          leis francesas e internacionais relativas à propriedade intelectual. Qualquer
          reprodução, representação, uso ou adaptação, sob qualquer forma, da totalidade ou de
          parte desses elementos, incluindo o software, sem a autorização prévia e por escrito da
          SAS French Community Agency, é estritamente proibida e constituiria uma contrafação.
        </p>
        <p>
          As mesmas disposições se aplicam às funcionalidades e ao código-fonte do Aplicativo,
          igualmente protegidos pelos direitos de propriedade intelectual. Qualquer tentativa de
          reproduzir, modificar ou usar sem autorização as funcionalidades do Aplicativo é
          proibida e passível de processo judicial.
        </p>
      </section>
      <section>
        <h2>2. Links</h2>
        <p>
          Qualquer link para o Site está sujeito à autorização prévia e por escrito da{' '}
          <strong>SAS French Community Agency</strong>. Em qualquer caso, a{' '}
          <strong>SAS French Community Agency</strong> se reserva o direito de revogar essa
          autorização a qualquer momento caso considere que o link estabelecido com o Site é
          capaz de prejudicar os interesses deste.
        </p>
        <p>
          Esclarece-se ainda que os sites que apresentem um link para o presente Site (links que
          apontem para o Site ou estabelecidos a partir dele) não estão sob o controle da{' '}
          <strong>SAS French Community Agency</strong>, do <strong>RaidProtect</strong> nem de
          suas empresas afiliadas, que se eximem de toda responsabilidade quanto ao seu conteúdo.
        </p>
      </section>
      <section>
        <h2>3. Uso do serviço</h2>
        <p>
          Nossos serviços, incluindo o Aplicativo, são de uso livre para fins pessoais ou
          comerciais. Reservamos o direito de proibir o uso dos nossos serviços em caso de uso que
          consideremos inadequado ou capaz de prejudicar outros Usuários.
        </p>
      </section>
      <section>
        <h2>4. Responsabilidade</h2>
        <h3>4.1. Site</h3>
        <p>
          A <strong>SAS French Community Agency</strong>, o <strong>RaidProtect</strong> e suas
          empresas afiliadas não poderão ser responsabilizados por quaisquer danos diretos ou
          indiretos resultantes do uso do Site ou das informações nele contidas. A{' '}
          <strong>SAS French Community Agency</strong> não garante a exatidão nem a exaustividade
          das informações apresentadas no Site e se reserva o direito de modificá-las ou
          excluí-las a qualquer momento, sem aviso prévio.
        </p>
        <h3>4.2. Aplicativo</h3>
        <p>
          O Aplicativo <strong>RaidProtect</strong> é fornecido no estado em que se encontra, sem
          qualquer garantia, expressa ou implícita. A <strong>SAS French Community Agency</strong>{' '}
          não pode ser responsabilizada pelas consequências de um uso incorreto ou abusivo do
          Aplicativo, nem pelos eventuais danos resultantes de um mau funcionamento temporário ou
          permanente.
        </p>
        <p>
          Os administradores de servidores Discord que usam o <strong>RaidProtect</strong> são os
          únicos responsáveis pelas configurações realizadas e pelas decisões tomadas em
          decorrência das ações automatizadas do Aplicativo (por exemplo, banimentos ou exclusão
          de mensagens). Em caso de violação dos termos de uso do Discord ou da legislação em
          vigor, os administradores do servidor em questão assumem total responsabilidade.
        </p>
      </section>
      <section>
        <h2>5. Modificação dos Termos de Uso</h2>
        <p>
          Os presentes Termos de Uso podem ser alterados a qualquer momento para refletir
          mudanças nos serviços ou na regulamentação aplicável. Qualquer alteração será publicada
          no site e, se necessário, comunicada pelo Aplicativo. Ao continuarem usando os serviços
          após a atualização dos Termos, os usuários aceitam as alterações realizadas.
        </p>
      </section>
      <section>
        <h2>6. Lei aplicável e foro</h2>
        <p>
          Os presentes Termos de Uso são regidos pelo direito francês. Em caso de litígio, e após
          uma tentativa de resolução amigável, fica eleito o foro da comarca de Paris, salvo
          disposição legal em contrário.
        </p>
      </section>
    </LegalLayout>
  );
}
