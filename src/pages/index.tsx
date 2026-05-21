import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/landing/Hero';
import Servers from '@site/src/components/landing/Servers';
import About from '@site/src/components/landing/About';
import Features from '@site/src/components/landing/Features';
import Pricing from '@site/src/components/landing/Pricing';

export default function Home(): ReactNode {
  return (
    <Layout
      title="RaidProtect • Sécurisez votre serveur Discord"
      description="RaidProtect est un bot Discord français ayant pour mission de protéger simplement votre serveur des utilisateurs malintentionnés.">
      <main>
        <Hero />
        <Servers />
        <About />
        <Features />
        <Pricing />
      </main>
    </Layout>
  );
}
