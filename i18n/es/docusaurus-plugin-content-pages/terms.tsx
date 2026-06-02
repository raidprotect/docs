import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Términos de uso"
      lastUpdated="Última actualización: 1 de febrero de 2025"
      description="Consulta nuestros términos de uso para conocer los derechos de propiedad intelectual, los enlaces hipertexto, la gestión de los datos personales y nuestra responsabilidad sobre el sitio y el bot RaidProtect.">
      <section>
        <p>
          Al añadir RaidProtect a tu servidor de Discord, reconoces haber leído y aceptado las
          Condiciones de Uso. Si no aceptas alguna de estas condiciones, deberás dejar de utilizar
          nuestros servicios.
        </p>
      </section>
      <section>
        <h2>1. Propiedad intelectual</h2>
        <p>
          El presente sitio web, su estructura general, la marca comercial RaidProtect, así como
          los textos, imágenes, animaciones, logotipos y cualquier otro elemento que lo compone,
          son propiedad exclusiva de SAS French Community Agency o de sus socios y están protegidos
          por las leyes francesas e internacionales relativas a la propiedad intelectual. Cualquier
          reproducción, representación, uso o adaptación, bajo cualquier forma que sea, de la
          totalidad o parte de estos elementos, incluido el software, sin la autorización escrita
          previa de SAS French Community Agency, está estrictamente prohibida y constituiría una
          falsificación.
        </p>
        <p>
          Las mismas disposiciones se aplican a las funcionalidades y al código fuente de la
          Aplicación, también protegidos por los derechos de propiedad intelectual. Cualquier
          intento de reproducir, modificar o utilizar sin autorización las funcionalidades de la
          Aplicación queda prohibido y podrá ser objeto de acciones legales.
        </p>
      </section>
      <section>
        <h2>2. Enlaces hipertexto</h2>
        <p>
          Cualquier enlace al Sitio deberá contar con una autorización escrita y previa de{' '}
          <strong>SAS French Community Agency</strong>. En cualquier caso,{' '}
          <strong>SAS French Community Agency</strong> se reserva el derecho de poner fin a dicha
          autorización en cualquier momento si considera que el enlace establecido con el Sitio
          puede perjudicar sus intereses.
        </p>
        <p>
          Asimismo, se precisa que los sitios que incluyan un enlace hipertexto al presente Sitio
          (enlaces hipertexto dirigidos al Sitio o establecidos desde él) no se encuentran bajo el
          control de <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> ni
          de sus empresas afiliadas, que declinan cualquier responsabilidad en cuanto a su
          contenido.
        </p>
      </section>
      <section>
        <h2>3. Uso del servicio</h2>
        <p>
          Nuestros servicios, incluida la Aplicación, son de libre uso con fines personales o
          comerciales. Nos reservamos el derecho de prohibir el uso de nuestros servicios en caso
          de un uso que consideremos inadecuado o que pueda perjudicar a otros Usuarios.
        </p>
      </section>
      <section>
        <h2>4. Responsabilidad</h2>
        <h3>4.1. Sitio web</h3>
        <p>
          <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> y sus empresas
          afiliadas no podrán ser consideradas responsables de los daños directos o indirectos que
          se deriven del uso del Sitio web o de la información que contiene.{' '}
          <strong>SAS French Community Agency</strong> no garantiza la exactitud ni la
          exhaustividad de la información presentada en el Sitio y se reserva el derecho de
          modificarla o suprimirla en cualquier momento, sin previo aviso.
        </p>
        <h3>4.2. Aplicación</h3>
        <p>
          La Aplicación <strong>RaidProtect</strong> se proporciona tal cual, sin garantía de
          ningún tipo, expresa o implícita. <strong>SAS French Community Agency</strong> no se
          responsabiliza de las consecuencias de un uso incorrecto o abusivo de la Aplicación, ni
          de los posibles daños derivados de un funcionamiento incorrecto temporal o permanente.
        </p>
        <p>
          Los administradores de servidores de Discord que utilicen <strong>RaidProtect</strong>{' '}
          son los únicos responsables de las configuraciones realizadas y de las decisiones
          adoptadas a raíz de las acciones automatizadas de la Aplicación (por ejemplo, expulsiones
          o eliminación de mensajes). En caso de incumplimiento de las condiciones de uso de
          Discord o de las leyes vigentes, los administradores del servidor afectado asumirán la
          responsabilidad íntegra.
        </p>
      </section>
      <section>
        <h2>5. Modificación de los Términos de Uso</h2>
        <p>
          Los presentes Términos de Uso pueden ser modificados en cualquier momento para reflejar
          cambios en los servicios o en la normativa aplicable. Toda modificación se publicará en
          el sitio web y, en caso necesario, se comunicará a través de la Aplicación. Al seguir
          utilizando los servicios después de la actualización de los Términos de Uso, los
          usuarios aceptan las modificaciones realizadas.
        </p>
      </section>
      <section>
        <h2>6. Ley aplicable y jurisdicción</h2>
        <p>
          Los presentes Términos de Uso se rigen por el derecho francés. En caso de litigio, y tras
          un intento de resolución amistosa, será competente la jurisdicción de los tribunales
          correspondientes de París, salvo disposición legal en contrario.
        </p>
      </section>
    </LegalLayout>
  );
}
