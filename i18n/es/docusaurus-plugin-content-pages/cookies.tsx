import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Política de cookies"
      lastUpdated="Última actualización: 1 de febrero de 2025"
      description="Descubre cómo RaidProtect protege tu privacidad al no utilizar cookies, garantizando una navegación segura y privada. Consulta nuestra política.">
      <section>
        <p>
          En RaidProtect, nos comprometemos a proteger la privacidad y los datos de nuestros
          usuarios. En el marco de este compromiso, te informamos sobre nuestra política relativa
          al uso de cookies en nuestro sitio web.
        </p>
      </section>
      <section>
        <h2>1. Uso de cookies</h2>
        <p>
          Queremos ser transparentes sobre las tecnologías que utilizamos. A tal efecto, te
          informamos de que nuestro sitio web <strong>no utiliza cookies</strong>. Las cookies son
          pequeños archivos de texto que los sitios web pueden utilizar para hacer más eficiente
          la experiencia del usuario. Sin embargo, con el fin de preservar al máximo la
          confidencialidad de nuestros usuarios, hemos optado por no emplearlas en nuestra
          plataforma.
        </p>
      </section>
      <section>
        <h2>2. ¿Qué significa esto para ti?</h2>
        <p>
          La ausencia de cookies significa que puedes navegar por nuestro sitio web sin que se
          registre ni analice ninguna información sobre tu visita. Esta práctica busca garantizar
          una experiencia de navegación privada y segura para todos nuestros usuarios.
        </p>
      </section>
      <section>
        <h2>3. ¿Cómo protegemos tu privacidad?</h2>
        <p>
          Además de nuestra política de no utilizar cookies, adoptamos otras medidas para proteger
          tu privacidad y tus datos personales. Cumplimos estrictamente las leyes y reglamentos
          vigentes sobre protección de datos y aplicamos prácticas de seguridad de la información
          de última generación para impedir cualquier acceso no autorizado, modificación,
          divulgación o destrucción de tu información personal.
        </p>
      </section>
      <section>
        <h2>4. Modificaciones de la política de cookies</h2>
        <p>
          Nos reservamos el derecho de modificar esta política de cookies en cualquier momento.
          Toda modificación entrará en vigor inmediatamente después de su publicación en nuestro
          sitio web. Te animamos a consultar esta página con regularidad para estar al tanto de
          nuestra política en materia de cookies.
        </p>
      </section>
      <section>
        <h2>5. Contacto</h2>
        <p>
          Si tienes preguntas o preocupaciones sobre nuestra política de cookies o sobre la forma
          en que protegemos tus datos personales, no dudes en contactarnos en{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
