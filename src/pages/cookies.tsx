import React, {type ReactNode} from 'react';
import LegalLayout from '@site/src/components/LegalLayout';

export default function Cookies(): ReactNode {
  return (
    <LegalLayout
      title="Politique d'utilisation des cookies"
      lastUpdated="Dernière mise à jour : 1 février 2025"
      description="Découvrez comment RaidProtect protège votre vie privée en n'utilisant pas de cookies pour une navigation sécurisée et privée. Consultez notre politique.">
      <section>
        <p>
          Chez RaidProtect, nous nous engageons à protéger la vie privée et les données de nos
          utilisateurs. Dans le cadre de cet engagement, nous vous informons de notre politique
          concernant l'utilisation des cookies sur notre site web.
        </p>
      </section>
      <section>
        <h2>1. Utilisation des cookies</h2>
        <p>
          Nous tenons à être transparents concernant les technologies que nous utilisons. À cet
          effet, nous vous informons que notre site web <strong>n'utilise pas de cookies</strong>.
          Les cookies sont de petits fichiers texte qui peuvent être utilisés par les sites web
          pour rendre l'expérience utilisateur plus efficace. Cependant, dans le souci de préserver
          au maximum la confidentialité de nos utilisateurs, nous avons choisi de ne pas les
          employer sur notre plateforme.
        </p>
      </section>
      <section>
        <h2>2. Qu'est-ce que cela signifie pour vous ?</h2>
        <p>
          L'absence d'utilisation de cookies signifie que vous pouvez naviguer sur notre site web
          sans qu'aucune information concernant votre visite ne soit enregistrée ou analysée. Cette
          démarche vise à assurer une expérience de navigation privée et sécurisée pour tous nos
          utilisateurs.
        </p>
      </section>
      <section>
        <h2>3. Comment nous protégeons votre vie privée ?</h2>
        <p>
          Outre notre politique de non-utilisation de cookies, nous prenons d'autres mesures pour
          protéger votre vie privée et vos données personnelles. Nous nous conformons strictement
          aux lois et réglementations en vigueur sur la protection des données et mettons en œuvre
          des pratiques de sécurité de l'information de pointe pour prévenir tout accès non
          autorisé, modification, divulgation ou destruction de vos informations personnelles.
        </p>
      </section>
      <section>
        <h2>4. Modifications de la politique d'utilisation des cookies</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique d'utilisation des cookies à tout
          moment. Toute modification entrera en vigueur immédiatement après sa publication sur
          notre site web. Nous vous encourageons à consulter régulièrement cette page pour rester
          informés de notre politique en matière de cookies.
        </p>
      </section>
      <section>
        <h2>5. Contact</h2>
        <p>
          Si vous avez des questions ou des préoccupations concernant notre politique
          d'utilisation des cookies ou la manière dont nous protégeons vos données personnelles,
          n'hésitez pas à nous contacter à{' '}
          <a href="mailto:dpo@raidprotect.bot">dpo@raidprotect.bot</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
