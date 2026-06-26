import React, { useEffect, useRef, useState } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { localizedRedirectUrl } from '@site/src/utils/links'
import Servers from '@site/src/components/landing/Servers'
import styles from './premium.module.css'

type FeatureCard = {
    icon: string
    title: string
    description: string
}

const HEADLINE_FEATURES: FeatureCard[] = [
    {
        icon: '/img/premium/iconCustomize.png',
        title: 'Personnalisation totale du bot',
        description: 'Avatar, bannière, pseudo et style d\'écriture : RaidProtect prend l\'identité de votre serveur.',
    },
    {
        icon: '/img/premium/iconAuthManagerWhite.png',
        title: 'Authentication Manager étendu',
        description: 'Plus de rôles protégés, plus d\'utilisateurs autorisés et des sessions deux fois plus longues.',
    },
    {
        icon: '/img/premium/iconCustomWhite.png',
        title: 'Noms de sanctions personnalisables',
        description: 'Adaptez chaque sanction au vocabulaire de votre communauté.',
    },
    {
        icon: '/img/premium/iconDisplay.png',
        title: 'Plus de panneaux d\'information',
        description: 'Deux fois plus de panneaux libres avec /display public (2 → 4), slot Jail toujours inclus.',
    },
    {
        icon: '/img/premium/iconHoneypotWhite.png',
        title: 'Sanctions Honeypot avancées',
        description: 'Débloquez Kick, Timeout, Jail et Mute dans le module HoneyPot.',
    },
]

type ExperimentCard = {
    icon: string
    badge: string
    title: string
    description: string
    docsHref?: string
}

const EXPERIMENTS: ExperimentCard[] = [
    {
        icon: '/img/premium/iconSanctionsMUTE.png',
        badge: 'Bêta publique',
        title: 'Conversion AutoMod en mute par rôle',
        description: 'Les timeouts appliqués par l\'AutoMod de Discord sont automatiquement convertis en mute par rôle au-delà du seuil configuré, pour une cohérence totale avec vos sanctions manuelles.',
        docsHref: '/docs/features/sanctions#mute-threshold',
    },
    {
        icon: '/img/premium/iconBeta.png',
        badge: 'Bientôt',
        title: 'D\'autres expérimentations à venir',
        description: 'Les abonnés Premium reçoivent en avant-première les fonctionnalités en bêta publique. Nous publions ici la liste à jour à mesure qu\'elles arrivent.',
    },
]

type Tier = {
    id: string
    name: string
    tagline: string
    price: string
    priceUnit?: string
    cta: { label: string; href: string; primary?: boolean }
    highlight?: boolean
}

const TIERS: Tier[] = [
    {
        id: 'free',
        name: 'Basic',
        tagline: 'La sécurité essentielle, gratuite pour toujours.',
        price: 'Gratuit',
        cta: { label: 'Ajouter à Discord', href: '/invite' },
    },
    {
        id: 'premium',
        name: 'Founder',
        tagline: 'Offre de lancement réservée aux premiers abonnés.',
        price: '2,99 $',
        priceUnit: '/ mois',
        cta: { label: 'S\'abonner via Discord', href: 'https://raidprotect.bot/founder', primary: true },
        highlight: true,
    },
    {
        id: 'enterprise',
        name: 'Business',
        tagline: 'Pour les projets aux exigences de sécurité élevées.',
        price: 'Sur demande',
        cta: { label: 'Prendre rendez-vous', href: '/appointment' },
    },
]

type Row =
    | { type: 'category'; label: string }
    | { type: 'feature'; label: string; values: [React.ReactNode, React.ReactNode, React.ReactNode] }

const yes = <span className={styles.checkYes} aria-label="Inclus">✓</span>
const no  = <span className={styles.checkNo} aria-label="Non inclus">✗</span>

const COMPARE_ROWS: Row[] = [
    { type: 'category', label: 'Protection essentielle' },
    { type: 'feature', label: 'Anti-spam adaptatif', values: [yes, yes, yes] },
    { type: 'feature', label: 'Captcha & vérification', values: [yes, yes, yes] },
    { type: 'feature', label: 'Anti-raid automatique', values: [yes, yes, yes] },
    { type: 'feature', label: 'Anti-Scam & ScamLens', values: [yes, yes, yes] },
    { type: 'feature', label: 'Modération complète (ban, kick, mute, jail…)', values: [yes, yes, yes] },

    { type: 'category', label: 'Authentication Manager' },
    { type: 'feature', label: 'Rôles protégés', values: ['3', '10', 'Custom'] },
    { type: 'feature', label: 'Utilisateurs autorisés', values: ['20', '50', 'Custom'] },
    { type: 'feature', label: 'Durée de session', values: ['8 h', '24 h', 'Custom'] },

    { type: 'category', label: 'Display public' },
    { type: 'feature', label: 'Panneaux d\'information', values: ['2 + 1 Jail', '4 + 1 Jail', 'Custom'] },

    { type: 'category', label: 'HoneyPot' },
    { type: 'feature', label: 'Bannissement & softban', values: [yes, yes, yes] },
    { type: 'feature', label: 'Kick, Timeout, Jail, Mute', values: [no, yes, yes] },

    { type: 'category', label: 'Personnalisation' },
    { type: 'feature', label: 'Pseudo, avatar et bannière du bot', values: [no, yes, yes] },
    { type: 'feature', label: 'Style d\'écriture du nom (8 polices, 4 effets)', values: [no, yes, yes] },
    { type: 'feature', label: 'Noms de sanctions personnalisés', values: [no, yes, yes] },
    { type: 'feature', label: 'Bio personnalisable', values: [no, no, yes] },
    { type: 'feature', label: 'Instance dédiée et isolée', values: [no, no, yes] },

    { type: 'category', label: 'Accompagnement' },
    { type: 'feature', label: 'Support communautaire', values: [yes, yes, yes] },
    { type: 'feature', label: 'Accès aux fonctionnalités en bêta publique', values: [no, yes, yes] },
    { type: 'feature', label: 'Rôle exclusif sur le serveur RaidProtect', values: [no, yes, yes] },
    { type: 'feature', label: 'Support prioritaire', values: [no, no, yes] },
    { type: 'feature', label: 'Audit initial du serveur', values: [no, no, yes] },
    { type: 'feature', label: 'Intégration sur mesure', values: [no, no, yes] },
    { type: 'feature', label: 'Suivi régulier avec un expert', values: [no, no, yes] },
]

type Stats = {
    servers: number
    users: number
    captcha: number
    antispam: number
}

const FALLBACK_STATS: Stats = {
    servers: 300000,
    users: 30000000,
    captcha: 15000000,
    antispam: 1500000,
}

/**
 * Fait suivre la souris sur les cartes pour le radial-gradient.
 * Chaque carte voit ses propriétés CSS --mx / --my mises à jour en temps réel.
 */
function useSpotlight(selector: string) {
    useEffect(() => {
        const cards = Array.from(document.querySelectorAll<HTMLElement>(selector))
        const handlers = cards.map(card => {
            const handler = (event: MouseEvent) => {
                const rect = card.getBoundingClientRect()
                const x = event.clientX - rect.left
                const y = event.clientY - rect.top
                card.style.setProperty('--mx', `${x}px`)
                card.style.setProperty('--my', `${y}px`)
            }
            card.addEventListener('mousemove', handler)
            return { card, handler }
        })
        return () => handlers.forEach(({ card, handler }) => card.removeEventListener('mousemove', handler))
    }, [selector])
}

/**
 * Charge counts.json en runtime : le fichier est écrit dynamiquement à la
 * racine du domaine. On tape /counts.json (chemin absolu, donc indépendant de
 * la locale) pour avoir des chiffres réels. En cas d'échec, on conserve les
 * valeurs de fallback pour ne jamais afficher de zéros.
 */
function useStats(): Stats {
    const [stats, setStats] = useState<Stats>(FALLBACK_STATS)

    useEffect(() => {
        const controller = new AbortController()
        fetch('/counts.json', { signal: controller.signal, cache: 'no-cache' })
            .then(r => (r.ok ? r.json() : null))
            .then((data: Partial<Stats> | null) => {
                if (!data) return
                setStats({
                    servers: typeof data.servers === 'number' ? data.servers : FALLBACK_STATS.servers,
                    users: typeof data.users === 'number' ? data.users : FALLBACK_STATS.users,
                    captcha: typeof data.captcha === 'number' ? data.captcha : FALLBACK_STATS.captcha,
                    antispam: typeof data.antispam === 'number' ? data.antispam : FALLBACK_STATS.antispam,
                })
            })
            .catch(() => {})
        return () => controller.abort()
    }, [])

    return stats
}

/**
 * Format compact : 359 494 → "359 K", 38 747 749 → "38,7 M".
 * On garde une précision à 1 décimale pour les millions, entière pour les milliers.
 */
function formatCompact(n: number): {value: string; unit: string} {
    if (n >= 1_000_000) {
        const v = n / 1_000_000
        return {value: v.toFixed(v >= 10 ? 0 : 1).replace('.', ','), unit: 'M'}
    }
    if (n >= 1_000) {
        return {value: String(Math.round(n / 1_000)), unit: 'K'}
    }
    return {value: String(n), unit: ''}
}

type StatCardProps = { value: number; label: string; suffix?: string }

function StatCard({ value, label, suffix }: StatCardProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [displayed, setDisplayed] = useState(0)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        let raf = 0
        let started = false
        const animate = () => {
            const duration = 1400
            const start = performance.now()
            const tick = (now: number) => {
                const t = Math.min(1, (now - start) / duration)
                const eased = 1 - Math.pow(1 - t, 3)
                setDisplayed(Math.round(value * eased))
                if (t < 1) raf = requestAnimationFrame(tick)
            }
            raf = requestAnimationFrame(tick)
        }
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true
                    animate()
                }
            })
        }, { threshold: 0.4 })
        obs.observe(el)
        return () => { obs.disconnect(); cancelAnimationFrame(raf) }
    }, [value])

    const {value: displayValue, unit} = formatCompact(displayed)

    return (
        <div className={styles.statCard} ref={ref}>
            <div className={styles.statValue}>
                {displayValue}
                {unit && <span className={styles.statUnit}>{unit}</span>}
                {suffix && <span className={styles.statSuffix}>{suffix}</span>}
            </div>
            <div className={styles.statLabel}>{label}</div>
        </div>
    )
}

export default function PremiumPage(): React.ReactNode {
    useSpotlight(`.${styles.featureCard}`)
    const stats = useStats()
    const {
        siteConfig: { url: siteUrl },
        i18n: { currentLocale, defaultLocale },
    } = useDocusaurusContext()

    // Les chemins relatifs (/invite, /appointment) sont des redirections du
    // domaine, localisées comme sur la home ; les URL absolues passent telles
    // quelles.
    const ctaHref = (href: string): string =>
        href.startsWith('/')
            ? localizedRedirectUrl(siteUrl, currentLocale, defaultLocale, href)
            : href

    // Catégories repliées du comparatif (clé = libellé de catégorie).
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})
    const toggleCategory = (label: string) =>
        setCollapsed(c => ({ ...c, [label]: !c[label] }))

    // Navbar : transparente en haut de page, dépolie (blur) dès qu'on scrolle.
    // On bascule une classe sur <body> que custom.css cible.
    useEffect(() => {
        const onScroll = () => {
            document.body.classList.toggle('premium-nav-scrolled', window.scrollY > 8)
        }
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', onScroll)
            document.body.classList.remove('premium-nav-scrolled')
        }
    }, [])

    return (
        <Layout
            title="Premium"
            description="Découvrez RaidProtect Premium : personnalisation du bot, Authentication Manager étendu, sanctions HoneyPot avancées, accès aux fonctionnalités en bêta publique."
        >
            {/* Rend la navbar transparente sur cette page (cf. custom.css). */}
            <Head>
                <body className="premium-page" />
            </Head>
            <div className={styles.page}>
                {/* ============= HERO ============= */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1 className={styles.heroTitle}>
                            Une protection à votre image,
                            <span className={styles.heroTitleAccent}>sans compromis</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Débloquez les fonctionnalités avancées de RaidProtect : personnalisation totale,
                            limites étendues sur les modules clés, sanctions sur-mesure et accès anticipé
                            aux nouveautés.
                        </p>
                        <div className={styles.heroCtas}>
                            <Link to="https://raidprotect.bot/founder" className={`${styles.ctaPrimary} ${styles.ctaGlow}`}>
                                S'abonner pour 2,99 $/mois
                            </Link>
                            <a href="#compare" className={styles.ctaSecondary}>
                                Comparer les offres
                            </a>
                        </div>
                    </div>
                </section>

                {/* ============= SOCIAL PROOF / STATS ============= */}
                <section className={styles.statsSection}>
                    <div className={styles.container}>
                        <div className={styles.statsGrid}>
                            <StatCard value={stats.servers} label="Serveurs protégés" />
                            <StatCard value={stats.users} label="Utilisateurs surveillés" />
                            <StatCard value={stats.captcha} label="Captchas résolus" />
                            <StatCard value={stats.antispam} label="Messages anti-spam filtrés" />
                        </div>
                    </div>
                </section>

                {/* ============= ILS NOUS FONT CONFIANCE ============= */}
                <Servers title="Ils nous font confiance" transparent />

                {/* ============= AVANTAGES PRINCIPAUX ============= */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.sectionHead}>
                            <div>
                                <span className={styles.sectionEyebrow}>Ce que vous débloquez</span>
                                <h2 className={styles.sectionTitle}>Les avantages clés du Premium</h2>
                                <p className={styles.sectionSubtitle}>
                                    Cinq leviers concrets pour aller plus loin avec RaidProtect, sans changer
                                    votre manière de travailler.
                                </p>
                            </div>
                            <Link
                                to="https://raidprotect.bot/founder"
                                className={`${styles.ctaPrimary} ${styles.ctaGlow} ${styles.sectionHeadCta}`}
                            >
                                S'abonner
                            </Link>
                        </div>
                        <div className={styles.grid}>
                            {HEADLINE_FEATURES.map(feature => (
                                <article
                                    key={feature.title}
                                    className={styles.featureCard}
                                >
                                    <div className={styles.featureIcon} aria-hidden>
                                        <img src={feature.icon} alt="" />
                                    </div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDesc}>{feature.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============= EXPERIMENTS ============= */}
                <section className={`${styles.section} ${styles.expSection}`}>
                    <div className={styles.container}>
                        <div className={styles.sectionHead}>
                            <div>
                                <span className={styles.sectionEyebrow}>Programme d'innovation</span>
                                <h2 className={styles.sectionTitle}>
                                    Des fonctionnalités en bêta publique
                                </h2>
                                <p className={styles.sectionSubtitle}>
                                    Les abonnés reçoivent en avant-première les nouveautés en cours de
                                    stabilisation. Ces accès évoluent à chaque mise à jour du bot.
                                </p>
                            </div>
                            <Link
                                to="https://raidprotect.bot/founder"
                                className={`${styles.ctaPrimary} ${styles.ctaGlow} ${styles.sectionHeadCta}`}
                            >
                                S'abonner
                            </Link>
                        </div>
                        <div className={styles.grid}>
                            {EXPERIMENTS.map(exp => (
                                <article key={exp.title} className={styles.expCard}>
                                    <div className={styles.expHeader}>
                                        <div className={styles.expIcon} aria-hidden>
                                            <img src={exp.icon} alt="" />
                                        </div>
                                        <span className={styles.expBadge}>
                                            <span className={styles.expBadgeDot} />
                                            {exp.badge}
                                        </span>
                                    </div>
                                    <h3 className={styles.featureTitle}>{exp.title}</h3>
                                    <p className={styles.featureDesc}>{exp.description}</p>
                                    {exp.docsHref && (
                                        <div className={styles.featureMeta}>
                                            <Link to={exp.docsHref}>En savoir plus →</Link>
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============= COMPARATIF ============= */}
                <section id="compare" className={styles.section}>
                    <div className={styles.container}>
                        <div>
                            <span className={styles.sectionEyebrow}>Comparatif des offres</span>
                            <h2 className={styles.sectionTitle}>Choisissez l'offre qui vous correspond</h2>
                            <p className={styles.sectionSubtitle}>
                                Toutes les protections essentielles restent gratuites. Le Premium ouvre
                                la personnalisation et les limites étendues. Le Business apporte une
                                instance dédiée et un accompagnement humain.
                            </p>
                        </div>

                        {/* ----- Desktop : tableau ----- */}
                        <div className={styles.compareWrap}>
                            <table className={styles.compareTable}>
                                <thead>
                                    <tr>
                                        {TIERS.map((tier, index) => (
                                            <th
                                                key={tier.id}
                                                colSpan={index === 0 ? 2 : 1}
                                                className={styles.tierHeadCell}
                                            >
                                                <div
                                                    className={`${styles.tierCard} ${tier.highlight ? styles.tierCardHighlight : ''}`}
                                                >
                                                    <div className={styles.tierName}>{tier.name}</div>
                                                    <div className={styles.tierTagline}>{tier.tagline}</div>
                                                    <div className={styles.tierPrice}>
                                                        {tier.price}
                                                        {tier.priceUnit && (
                                                            <span className={styles.tierPriceUnit}>{tier.priceUnit}</span>
                                                        )}
                                                    </div>
                                                    <Link
                                                        to={ctaHref(tier.cta.href)}
                                                        className={`${styles.tierCta} ${tier.cta.primary ? styles.tierCtaPrimary : ''}`}
                                                    >
                                                        {tier.cta.label}
                                                    </Link>
                                                </div>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {(() => {
                                        let cat = ''
                                        return COMPARE_ROWS.map((row, i) => {
                                            if (row.type === 'category') {
                                                cat = row.label
                                                const isCollapsed = !!collapsed[row.label]
                                                return (
                                                    <tr key={`cat-${i}`} className={styles.compareCategory}>
                                                        <td colSpan={4}>
                                                            <button
                                                                type="button"
                                                                className={styles.categoryToggle}
                                                                onClick={() => toggleCategory(row.label)}
                                                                aria-expanded={!isCollapsed}
                                                            >
                                                                {row.label}
                                                                <span
                                                                    className={`${styles.categoryChevron} ${isCollapsed ? styles.categoryChevronCollapsed : ''}`}
                                                                    aria-hidden
                                                                >
                                                                    ▾
                                                                </span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            if (collapsed[cat]) return null
                                            return (
                                                <tr key={`row-${i}`}>
                                                    <td>{row.label}</td>
                                                    <td className={styles.compareValue}>{row.values[0]}</td>
                                                    <td className={styles.compareValue}>{row.values[1]}</td>
                                                    <td className={styles.compareValue}>{row.values[2]}</td>
                                                </tr>
                                            )
                                        })
                                    })()}
                                </tbody>
                            </table>
                        </div>

                        {/* ----- Mobile : cards empilées par offre ----- */}
                        <div className={styles.compareStack}>
                            {TIERS.map((tier, tierIndex) => (
                                <div
                                    key={tier.id}
                                    className={`${styles.stackCard} ${tier.highlight ? styles.stackCardHighlight : ''}`}
                                >
                                    <div className={styles.stackHead}>
                                        <div className={styles.tierName}>{tier.name}</div>
                                        <div className={styles.tierTagline}>{tier.tagline}</div>
                                        <div className={styles.tierPrice}>
                                            {tier.price}
                                            {tier.priceUnit && (
                                                <span className={styles.tierPriceUnit}>{tier.priceUnit}</span>
                                            )}
                                        </div>
                                        <Link
                                            to={ctaHref(tier.cta.href)}
                                            className={`${styles.tierCta} ${tier.cta.primary ? styles.tierCtaPrimary : ''}`}
                                        >
                                            {tier.cta.label}
                                        </Link>
                                    </div>

                                    <dl className={styles.stackList}>
                                        {(() => {
                                            let cat = ''
                                            return COMPARE_ROWS.map((row, i) => {
                                                if (row.type === 'category') {
                                                    cat = row.label
                                                    const isCollapsed = !!collapsed[row.label]
                                                    return (
                                                        <button
                                                            type="button"
                                                            key={`mcat-${i}`}
                                                            className={`${styles.stackCategory} ${styles.categoryToggle}`}
                                                            onClick={() => toggleCategory(row.label)}
                                                            aria-expanded={!isCollapsed}
                                                        >
                                                            {row.label}
                                                            <span
                                                                className={`${styles.categoryChevron} ${isCollapsed ? styles.categoryChevronCollapsed : ''}`}
                                                                aria-hidden
                                                            >
                                                                ▾
                                                            </span>
                                                        </button>
                                                    )
                                                }
                                                if (collapsed[cat]) return null
                                                return (
                                                    <div key={`mrow-${i}-${tierIndex}`} className={styles.stackRow}>
                                                        <dt className={styles.stackRowLabel}>{row.label}</dt>
                                                        <dd className={styles.stackRowValue}>{row.values[tierIndex]}</dd>
                                                    </div>
                                                )
                                            })
                                        })()}
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============= FINAL CTA ============= */}
                <section className={styles.container}>
                    <div className={styles.finalCta}>
                        <h2>Prêt à passer en Premium&nbsp;?</h2>
                        <p>L'offre Founder est limitée dans le temps : 2,99 $/mois à vie pour les premiers abonnés.</p>
                        <Link to="https://raidprotect.bot/founder" className={`${styles.ctaPrimary} ${styles.ctaGlow}`}>
                            Activer le Premium maintenant
                        </Link>
                    </div>
                </section>
            </div>
        </Layout>
    )
}
