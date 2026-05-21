import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'home.meta.title', message: 'RaidProtect — Bot Discord de protection'})}
      description={translate({
        id: 'home.meta.description',
        message: "Bot Discord qui protège votre serveur contre les utilisateurs malintentionnés grâce à un antispam et un captcha.",
      })}>
      <main style={{padding: '6rem 1rem', textAlign: 'center', maxWidth: '720px', margin: '0 auto'}}>
        <h1>
          <Translate id="home.title">RaidProtect</Translate>
        </h1>
        <p style={{fontSize: '1.2rem', marginTop: '1.5rem'}}>
          <Translate id="home.intro">
            La nouvelle page d'accueil arrive bientôt. En attendant, retrouvez toute la documentation ci-dessous.
          </Translate>
        </p>
        <div style={{marginTop: '2.5rem'}}>
          <Link className="button button--primary button--lg" to="/docs">
            <Translate id="home.cta.docs">Accéder à la documentation</Translate>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
