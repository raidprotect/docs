import React, {type ReactNode, useEffect, useState} from 'react';
import Head from '@docusaurus/Head';
import Hero from '@site/src/components/landing/Hero';
import Servers from '@site/src/components/landing/Servers';
import frame from './frame.module.css';

type Counts = {
  servers: number;
  users: number;
  captcha: number;
  antispam: number;
};

export default function FrameHero(): ReactNode {
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch('https://docs.raidprotect.bot/counts.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Counts | null) => {
        if (!cancelled && data) setCounts(data);
      })
      .catch(() => {
        // Stats are best-effort; failure is non-blocking.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Hero Section</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="designed for iframe" />
      </Head>
      <main className={frame.frame}>
        <Hero serverCount={counts?.servers} />
        <Servers />
      </main>
    </>
  );
}
