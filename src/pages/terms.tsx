import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Terms(): ReactNode {
  return (
    <LegalLayout
      title="Conditions générales d'utilisation"
      lastUpdated="Dernière mise à jour : 1 février 2025"
      description="Consultez nos conditions d'utilisation pour comprendre les droits de propriété intellectuelle, liens hypertextes, gestion des données personnelles et notre responsabilité sur le site et le bot RaidProtect.">
      <section>
        <p>
          En ajoutant RaidProtect sur votre serveur Discord, vous reconnaissez avoir lu et accepté
          les Conditions d'Utilisation. Si vous n'acceptez pas l'une de ces conditions, vous devez
          arrêter d'utiliser nos services.
        </p>
      </section>
      <section>
        <h2>1. Propriété intellectuelle</h2>
        <p>
          Le présent site internet, sa structure générale, la marque commerciale RaidProtect, ainsi
          que les textes, images, animations, logos et tout autre élément le composant, sont la
          propriété exclusive de SAS French Community Agency ou de ses partenaires et sont protégés
          par les lois françaises et internationales relatives à la propriété intellectuelle. Toute
          reproduction, représentation, utilisation ou adaptation, sous quelque forme que ce soit,
          de tout ou partie de ces éléments, y compris les logiciels, sans l'autorisation écrite
          préalable de SAS French Community Agency, est strictement interdite et constituerait une
          contrefaçon.
        </p>
        <p>
          Les mêmes dispositions s'appliquent aux fonctionnalités et au code source de
          l'Application, qui sont également protégés par les droits de propriété intellectuelle.
          Toute tentative de reproduction, modification ou utilisation non autorisée des
          fonctionnalités de l'Application est interdite et susceptible de poursuites judiciaires.
        </p>
      </section>
      <section>
        <h2>2. Liens hypertextes</h2>
        <p>
          Tout lien avec le Site doit faire l'objet d'une autorisation écrite et préalable de{' '}
          <strong>SAS French Community Agency</strong>. En tout état de cause,{' '}
          <strong>SAS French Community Agency</strong> se réserve le droit de mettre fin à cette
          autorisation à tout moment s'il lui paraît que le lien établi avec le Site est de nature
          à porter atteinte aux intérêts de ce dernier.
        </p>
        <p>
          Il est par ailleurs précisé que les sites présentant un lien hypertexte avec le présent
          Site (liens hypertextes ciblant le Site ou établis au départ de celui-ci) ne sont pas
          sous le contrôle de <strong>SAS French Community Agency</strong>,{' '}
          <strong>RaidProtect</strong> et ses sociétés affiliées, qui déclinent toute
          responsabilité quant à leur contenu.
        </p>
      </section>
      <section>
        <h2>3. Utilisation du service</h2>
        <p>
          Nos services, incluant l'Application, sont libres d'utilisation dans un but personnel ou
          commercial. Nous nous réservons le droit d'interdire l'utilisation de nos services en cas
          d'usage que nous jugeons inapproprié ou pouvant nuire aux autres Utilisateurs.
        </p>
      </section>
      <section>
        <h2>4. Responsabilité</h2>
        <h3>4.1. Site internet</h3>
        <p>
          <strong>SAS French Community Agency</strong>, <strong>RaidProtect</strong> et ses
          sociétés affiliées ne sauraient être tenues responsables de tout dommage direct ou
          indirect résultant de l'utilisation du Site internet ou des informations qu'il contient.{' '}
          <strong>SAS French Community Agency</strong> ne garantit pas l'exactitude ou
          l'exhaustivité des informations présentées sur le Site et se réserve le droit de les
          modifier ou de les supprimer à tout moment, sans préavis.
        </p>
        <h3>4.2. Application</h3>
        <p>
          L'Application <strong>RaidProtect</strong> est fournie en l'état, sans garantie d'aucune
          sorte, expresse ou implicite. <strong>SAS French Community Agency</strong> ne peut être
          tenue responsable des conséquences d'une utilisation incorrecte ou abusive de
          l'Application, ni des éventuels dommages résultants d'un dysfonctionnement temporaire ou
          permanent.
        </p>
        <p>
          Les administrateurs de serveurs Discord utilisant <strong>RaidProtect</strong> sont seuls
          responsables des configurations effectuées et des décisions prises suite aux actions
          automatisées de l'Application (par exemple, bannissements ou suppressions de messages).
          En cas de violation des conditions d'utilisation de Discord ou des lois en vigueur, les
          administrateurs du serveur concerné en portent l'entière responsabilité.
        </p>
      </section>
      <section>
        <h2>5. Modification des CGU</h2>
        <p>
          Les présentes Conditions Générales d'Utilisation peuvent être modifiées à tout moment
          afin de refléter des changements dans les services ou dans la réglementation applicable.
          Toute modification sera publiée sur le site web et, si nécessaire, communiquée via
          l'Application. En continuant d'utiliser les services après la mise à jour des CGU, les
          utilisateurs acceptent les modifications apportées.
        </p>
      </section>
      <section>
        <h2>6. Loi applicable et juridiction</h2>
        <p>
          Les présentes CGU sont régies par le droit français. En cas de litige, et après une
          tentative de résolution amiable, compétence est attribuée aux tribunaux compétents du
          ressort de Paris, sauf disposition légale contraire.
        </p>
      </section>
    </LegalLayout>
  );
}
