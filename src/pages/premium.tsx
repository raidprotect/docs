import React, { useEffect, useRef, useState } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { localizedRedirectUrl } from '@site/src/utils/links'
import Servers from '@site/src/components/landing/Servers'
import IdentityMockup from '@site/src/components/IdentityMockup'
import styles from './premium.module.css'

/** Type de mise en scène CSS associée à chaque avantage (aucune image). */
type SceneKind = 'kickMode' | 'authLimits' | 'sanctionRename' | 'panels' | 'honeypot'

type Feature = {
    /** Mise en situation CSS ; absente pour les avantages sans illustration. */
    scene?: SceneKind
    /** Pastille optionnelle (ex. "Bêta publique" sur l'accès anticipé). */
    badge?: string
    title: string
    description: string
    docsHref?: string
}

type Tier = {
    id: string
    name: string
    tagline: string
    price: string
    priceUnit?: string
    /* Prix futur (hors offre Founder), affiché barré avant le prix actuel. */
    priceStrike?: string
    cta: { label: string; href: string; primary?: boolean; internal?: boolean }
    highlight?: boolean
}

type Row =
    | { type: 'category'; label: string }
    | { type: 'feature'; label: string; values: [React.ReactNode, React.ReactNode, React.ReactNode]; small?: boolean }

type Stats = {
    servers: number
    users: number
    captcha: number
    antispam: number
    founder?: number
}

const FALLBACK_STATS: Stats = {
    servers: 385786,
    users: 50440378,
    captcha: 14515925,
    antispam: 1435257,
    founder: 36,
}

const FOUNDER_GOAL = 100

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
                    founder: typeof data.founder === 'number' ? data.founder : FALLBACK_STATS.founder,
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

/**
 * Compteur de rareté Founder. Ne s'affiche que si counts.json expose un champ
 * `founder` numérique : jamais de chiffre inventé.
 */
function FounderScarcity({ taken }: { taken: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const [shown, setShown] = useState(false)
    const clamped = Math.max(0, Math.min(taken, FOUNDER_GOAL))
    const pct = Math.round((clamped / FOUNDER_GOAL) * 100)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) setShown(true) })
        }, { threshold: 0.4 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <div className={styles.founder} ref={ref}>
            <div className={styles.founderHead}>
                <span className={styles.founderCount}>
                    <strong>{clamped}</strong>/{FOUNDER_GOAL}
                    <span className={styles.founderCountLabel}>
                        {' '}
                        <Translate id="premium.hero.founder.taken" description="Libellé du compteur Founder (places prises, tarif verrouillé à vie)">places Founder (tarif verrouillé à vie)</Translate>
                    </span>
                </span>
            </div>
            <div className={styles.founderTrack} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={FOUNDER_GOAL}>
                <div className={styles.founderFill} style={{ width: shown ? `${pct}%` : 0 }} />
            </div>
        </div>
    )
}

/**
 * Mise en situation CSS d'un avantage (aucune image) : chaque "scène" illustre
 * concrètement ce que le Premium débloque. Décoratif, donc aria-hidden côté
 * appelant. Les valeurs chiffrées reprennent le comparatif (source: docs).
 */
function FeatureScene({ kind }: { kind: SceneKind }): React.ReactNode {
    if (kind === 'kickMode') {
        return (
            <div className={styles.sceneDm}>
                <div className={styles.dmBubble}>
                    <span className={styles.dmMsg}>
                        {translate({ id: 'premium.scene.kick.dm', message: 'Ce serveur subit un raid, tu pourras rejoindre dans peu de temps.' })}
                    </span>
                    <span className={styles.dmButton}>
                        {translate({ id: 'premium.scene.kick.button', message: 'Rejoindre le serveur' })}
                    </span>
                </div>
            </div>
        )
    }

    if (kind === 'authLimits') {
        const rows: [string, string, string][] = [
            [translate({ id: 'premium.scene.auth.roles', message: 'Rôles protégés' }), '3', '10'],
            [translate({ id: 'premium.scene.auth.users', message: 'Utilisateurs' }), '20', '50'],
            [translate({ id: 'premium.scene.auth.session', message: 'Session' }), '8 h', '24 h'],
        ]
        return (
            <div className={styles.sceneLimits}>
                {rows.map(([label, free, prem]) => (
                    <div key={label} className={styles.limitRow}>
                        <span className={styles.limitLabel}>{label}</span>
                        <span className={styles.limitFree}>{free}</span>
                        <span className={styles.limitArrow}>→</span>
                        <span className={styles.limitPrem}>{prem}</span>
                    </div>
                ))}
            </div>
        )
    }

    if (kind === 'sanctionRename') {
        // Notifications DM de sanction avec des noms personnalisés, qui défilent
        // en boucle (carrousel vertical). Doublé pour un défilement sans couture.
        const notifs = [
            translate({ id: 'premium.scene.sanction.n1', message: 'Vous avez reçu un carton jaune' }),
            translate({ id: 'premium.scene.sanction.n2', message: 'Vous avez été mis au coin' }),
            translate({ id: 'premium.scene.sanction.n3', message: 'Vous êtes banni du royaume' }),
            translate({ id: 'premium.scene.sanction.n4', message: 'Vous partez en isolement' }),
        ]
        return (
            <div className={styles.sceneNotif}>
                <div className={styles.notifTrack}>
                    {[...notifs, ...notifs].map((n, i) => (
                        <div key={i} className={styles.notifItem}>
                            <span className={styles.notifAvatar} />
                            <span className={styles.notifText}>{n}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    if (kind === 'panels') {
        return (
            <div className={styles.scenePanels}>
                <span className={styles.panelTile} />
                <span className={styles.panelTile} />
                <span className={`${styles.panelTile} ${styles.panelTilePrem}`} />
                <span className={`${styles.panelTile} ${styles.panelTilePrem}`} />
                <span className={`${styles.panelTile} ${styles.panelTileJail}`}>
                    <Translate id="premium.scene.panels.jail">Jail</Translate>
                </span>
            </div>
        )
    }

    if (kind === 'honeypot') {
        return (
            <div className={styles.sceneChips}>
                <span className={styles.chipBase}>Ban</span>
                <span className={styles.chipBase}>Softban</span>
                <span className={styles.chipUnlock}>Kick</span>
                <span className={styles.chipUnlock}>Timeout</span>
                <span className={styles.chipUnlock}>Jail</span>
                <span className={styles.chipUnlock}>Mute</span>
            </div>
        )
    }

    return null
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
        // Au rechargement, le navigateur restaure la position de scroll APRÈS le
        // montage, sans forcément émettre d'événement 'scroll'. On re-teste donc
        // au frame suivant et au 'load' pour appliquer le flou si on arrive déjà
        // descendu dans la page.
        const raf = requestAnimationFrame(onScroll)
        window.addEventListener('load', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('load', onScroll)
            window.removeEventListener('scroll', onScroll)
            document.body.classList.remove('premium-nav-scrolled')
        }
    }, [])

    // Les données textuelles sont construites au rendu pour que translate()
    // lise la locale courante (des constantes au niveau module seraient figées).
    // La feature vedette "bot à votre image" a son propre bloc dédié (mise en
    // scène CSS). Les autres avantages, plus une carte "accès bêta", suivent en
    // grille, chacun avec une petite mise en situation.
    const FEATURES: Feature[] = [
        {
            scene: 'authLimits',
            title: translate({ id: 'premium.feature.authManager.title', message: 'Authentication Manager étendu' }),
            description: translate({ id: 'premium.feature.authManager.desc', message: 'Plus de rôles protégés, plus d\'utilisateurs autorisés et des sessions deux fois plus longues.' }),
            docsHref: '/docs/features/authentication-manager',
        },
        {
            scene: 'sanctionRename',
            title: translate({ id: 'premium.feature.sanctionNames.title', message: 'Noms de sanctions personnalisables' }),
            description: translate({ id: 'premium.feature.sanctionNames.desc', message: 'Adaptez chaque sanction au vocabulaire de votre communauté.' }),
            docsHref: '/docs/features/sanctions#custom-names',
        },
        {
            scene: 'kickMode',
            title: translate({ id: 'premium.feature.kickMode.title', message: 'Anti-raid en mode expulsion' }),
            description: translate({ id: 'premium.feature.kickMode.desc', message: 'Expulsion + DM d\'explication au lieu d\'un blocage silencieux des invitations. Laissez entrer qui vous voulez avec /bypass.' }),
            docsHref: '/docs/features/raid-mode',
        },
        {
            scene: 'panels',
            title: translate({ id: 'premium.feature.display.title', message: 'Plus de panneaux d\'information' }),
            description: translate({ id: 'premium.feature.display.desc', message: 'Deux fois plus de panneaux libres avec /display public (2 → 4), slot Jail toujours inclus.' }),
            docsHref: '/docs/features/display',
        },
        {
            scene: 'honeypot',
            title: translate({ id: 'premium.feature.honeypot.title', message: 'Sanctions Honeypot avancées' }),
            description: translate({ id: 'premium.feature.honeypot.desc', message: 'Débloquez Kick, Timeout, Jail et Mute : les messages du spammeur sont effacés dans tous les salons, comme avec un ban.' }),
            docsHref: '/docs/features/honeypot',
        },
        {
            badge: translate({ id: 'premium.feature.beta.badge', message: 'Bêta publique' }),
            title: translate({ id: 'premium.feature.beta.title', message: 'Accès anticipé aux nouveautés' }),
            description: translate({ id: 'premium.feature.beta.desc', message: 'Les abonnés reçoivent en avant-première les fonctionnalités en bêta, comme la conversion des timeouts AutoMod en mute par rôle.' }),
            docsHref: '/docs/features/sanctions#mute-threshold',
        },
    ]

    const TIERS: Tier[] = [
        {
            id: 'free',
            name: translate({ id: 'premium.tier.free.name', message: 'Basic' }),
            tagline: translate({ id: 'premium.tier.free.tagline', message: 'La sécurité essentielle, gratuite pour toujours.' }),
            price: translate({ id: 'premium.tier.free.price', message: 'Gratuit' }),
            cta: { label: translate({ id: 'premium.tier.free.cta', message: 'Ajouter à Discord' }), href: '/invite' },
        },
        {
            id: 'premium',
            name: translate({ id: 'premium.tier.founder.name', message: 'Founder' }),
            tagline: translate({ id: 'premium.tier.founder.tagline', message: 'Offre de lancement réservée aux premiers abonnés.' }),
            price: translate({ id: 'premium.tier.founder.price', message: '2,99 $' }),
            priceStrike: translate({ id: 'premium.tier.founder.priceStrike', message: '5,99 $' }),
            priceUnit: translate({ id: 'premium.tier.founder.priceUnit', message: '/ mois' }),
            cta: { label: translate({ id: 'premium.tier.founder.cta', message: 'S\'abonner via Discord' }), href: 'https://raidprotect.bot/founder', primary: true },
            highlight: true,
        },
        {
            id: 'enterprise',
            name: translate({ id: 'premium.tier.business.name', message: 'Business' }),
            tagline: translate({ id: 'premium.tier.business.tagline', message: 'Pour les projets aux exigences de sécurité élevées.' }),
            price: translate({ id: 'premium.tier.business.price', message: 'Sur demande' }),
            cta: { label: translate({ id: 'premium.tier.business.cta', message: 'En savoir plus' }), href: '/business', internal: true },
        },
    ]

    const yes = <span className={styles.checkYes} aria-label={translate({ id: 'premium.compare.included', message: 'Inclus' })}>✓</span>
    const no  = <span className={styles.checkNo} aria-label={translate({ id: 'premium.compare.notIncluded', message: 'Non inclus' })}>✗</span>
    const custom = translate({ id: 'premium.compare.custom', message: 'Custom' })

    const COMPARE_ROWS: Row[] = [
        { type: 'category', label: translate({ id: 'premium.compare.cat.essential', message: 'Protection & modération' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.antispam', message: 'Anti-spam adaptatif' }), values: [yes, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.captcha', message: 'Captcha & vérification' }), values: [yes, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.antiraid', message: 'Anti-raid automatique' }), values: [yes, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.antiscam', message: 'Anti-Scam & ScamLens' }), values: [yes, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.moderation', message: 'Modération complète (ban, kick, mute, jail…)' }), values: [yes, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.kickMode', message: 'Mode expulsion + DM (Fermeture des Jointures & Mode raid)' }), values: [no, yes, yes], small: true },

        { type: 'category', label: translate({ id: 'premium.compare.cat.reports', message: 'Signalements' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.trustedRole', message: 'Rôle de confiance (timeout préventif)' }), values: [no, yes, yes] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.authManager', message: 'Authentication Manager' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.protectedRoles', message: 'Rôles protégés' }), values: ['3', '10', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.authorizedUsers', message: 'Utilisateurs autorisés' }), values: ['20', '50', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.sessionDuration', message: 'Durée de session' }), values: ['8 h', '24 h', custom] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.display', message: 'Display public' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.panels', message: 'Panneaux d\'information' }), values: [
            translate({ id: 'premium.compare.row.panels.free', message: '2 + 1 Jail' }),
            translate({ id: 'premium.compare.row.panels.founder', message: '4 + 1 Jail' }),
            custom,
        ] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.honeypot', message: 'HoneyPot' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.banSoftban', message: 'Bannissement & softban' }), values: [yes, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.kickTimeout', message: 'Kick, Timeout, Jail, Mute' }), values: [no, yes, yes] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.transparency', message: 'Transparence' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.recapCount', message: 'Récapitulatifs simultanés' }), values: ['1', '5', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.recapWindow', message: 'Fenêtre de publication des récaps' }), values: [
            translate({ id: 'premium.compare.row.recapWindow.free', message: '12 h' }),
            translate({ id: 'premium.compare.row.recapWindow.premium', message: '≈ 2 h' }),
            translate({ id: 'premium.compare.row.recapWindow.business', message: '≈ 1 min' }),
        ] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.customization', message: 'Personnalisation' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.botIdentity', message: 'Pseudo, avatar et bannière du bot' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.publicMessage', message: 'Message public de sanction masquable' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.nameStyle', message: 'Style d\'écriture du nom (8 polices, 4 effets)' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.customSanctions', message: 'Noms de sanctions personnalisés' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.bio', message: 'Bio personnalisable' }), values: [no, no, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.dedicatedInstance', message: 'Instance dédiée et isolée' }), values: [no, no, yes] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.support', message: 'Accompagnement' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.communitySupport', message: 'Support communautaire' }), values: [yes, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.betaAccess', message: 'Accès aux fonctionnalités en bêta publique' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.exclusiveRole', message: 'Rôle exclusif sur le serveur RaidProtect' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.prioritySupport', message: 'Support prioritaire' }), values: [no, no, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.audit', message: 'Audit initial du serveur' }), values: [no, no, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.customIntegration', message: 'Intégration sur mesure' }), values: [no, no, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.expertFollowup', message: 'Suivi régulier avec un expert' }), values: [no, no, yes] },
    ]

    const FAQ_ITEMS: { q: string; a: string }[] = [
        {
            q: translate({ id: 'premium.faq.q.freeChange', message: 'Est-ce que la version gratuite va être réduite ?' }),
            a: translate({ id: 'premium.faq.a.freeChange', message: 'Non. La version gratuite reste complète et continuera d\'évoluer au même rythme. Le Premium s\'adresse aux serveurs qui ont besoin de plus : limites étendues, personnalisation avancée et accès anticipé.' }),
        },
        {
            q: translate({ id: 'premium.faq.q.lifetime', message: 'Que signifie « tarif verrouillé à vie » ?' }),
            a: translate({ id: 'premium.faq.a.lifetime', message: 'L\'offre Founder bloque votre tarif définitivement. Tant que votre abonnement reste actif, votre prix ne change pas, même quand de nouvelles formules seront introduites et que l\'offre Founder sera retirée de la boutique.' }),
        },
        {
            q: translate({ id: 'premium.faq.q.activate', message: 'Comment activer le Premium ?' }),
            a: translate({ id: 'premium.faq.a.activate', message: 'Tapez /settings sur votre serveur Discord et cliquez sur « Premium », ou rendez-vous directement sur la boutique de RaidProtect dans Discord. L\'activation prend quelques secondes.' }),
        },
        {
            q: translate({ id: 'premium.faq.q.cancel', message: 'Puis-je annuler à tout moment ?' }),
            a: translate({ id: 'premium.faq.a.cancel', message: 'Oui. L\'abonnement se gère depuis Discord et reste résiliable quand vous le souhaitez, sans engagement.' }),
        },
        {
            q: translate({ id: 'premium.faq.q.businessDiff', message: 'Quelle différence entre Founder et Business ?' }),
            a: translate({ id: 'premium.faq.a.businessDiff', message: 'Founder ouvre la personnalisation du bot et les limites étendues sur tous les modules. Business ajoute une instance dédiée et isolée ainsi qu\'un accompagnement humain (audit, intégration sur mesure, suivi expert), sur demande.' }),
        },
    ]

    const layoutTitle = translate({ id: 'premium.layout.title', message: 'Premium' })
    const layoutDescription = translate({
        id: 'premium.layout.description',
        message: 'Découvrez RaidProtect Premium : personnalisation du bot, Authentication Manager étendu, sanctions HoneyPot avancées, accès aux fonctionnalités en bêta publique.',
    })

    return (
        <Layout title={layoutTitle} description={layoutDescription}>
            {/* Rend la navbar transparente sur cette page (cf. custom.css). */}
            <Head>
                <body className="premium-page" />
            </Head>
            <main className={styles.page}>
                {/* ============= HERO ============= */}
                <section className={styles.hero}>
                    <div className={styles.container}>
                        {typeof stats.founder === 'number' && <FounderScarcity taken={stats.founder} />}
                        <h1 className={styles.heroTitle}>
                            <Translate id="premium.hero.title.line1" description="Première ligne du titre du hero premium">
                                Une protection à votre image,
                            </Translate>
                            <span className={styles.heroTitleAccent}>
                                <Translate id="premium.hero.title.accent" description="Partie accentuée du titre du hero premium">
                                    sans compromis
                                </Translate>
                            </span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            <Translate id="premium.hero.subtitle">
                                Débloquez les fonctionnalités avancées de RaidProtect : personnalisation totale, limites étendues sur les modules clés, sanctions sur-mesure et accès anticipé aux nouveautés.
                            </Translate>
                        </p>
                        <div className={styles.heroCtas}>
                            <Link to="https://raidprotect.bot/founder" className={`${styles.ctaPrimary} ${styles.ctaGlow}`}>
                                <Translate id="premium.hero.cta.subscribe">S'abonner pour 2,99 $/mois</Translate>
                            </Link>
                            <a href="#compare" className={styles.ctaSecondary}>
                                <Translate id="premium.hero.cta.compare">Comparer les offres</Translate>
                            </a>
                        </div>
                        <p className={styles.heroMicro}>
                            <Translate id="premium.hero.micro" description="Microcopie de réassurance sous les CTA du hero">
                                Annulable à tout moment
                            </Translate>
                        </p>
                    </div>
                </section>

                {/* ============= SOCIAL PROOF / STATS ============= */}
                <section className={styles.statsSection}>
                    <div className={styles.container}>
                        <div className={styles.statsGrid}>
                            <StatCard value={stats.servers} label={translate({ id: 'premium.stats.servers', message: 'Serveurs protégés' })} />
                            <StatCard value={stats.users} label={translate({ id: 'premium.stats.users', message: 'Utilisateurs surveillés' })} />
                            <StatCard value={stats.captcha} label={translate({ id: 'premium.stats.captcha', message: 'Captchas résolus' })} />
                            <StatCard value={stats.antispam} label={translate({ id: 'premium.stats.antispam', message: 'Messages de spam filtrés' })} />
                        </div>
                    </div>
                </section>

                {/* ============= FEATURE VEDETTE : BOT À VOTRE IMAGE ============= */}
                <section className={`${styles.section} ${styles.flagshipSection}`}>
                    <div className={styles.container}>
                        <div className={styles.flagship}>
                            <div className={styles.flagshipCopy}>
                                <span className={styles.sectionEyebrow}>
                                    <Translate id="premium.flagship.eyebrow">La signature du Premium</Translate>
                                </span>
                                <h2 className={styles.sectionTitle}>
                                    <Translate id="premium.flagship.title">Le bot prend l'identité de votre serveur</Translate>
                                </h2>
                                <p className={styles.sectionSubtitle}>
                                    <Translate id="premium.flagship.subtitle">
                                        Avatar, bannière, pseudo et style d'écriture : RaidProtect ne ressemble plus à un bot générique, il porte les couleurs de votre communauté.
                                    </Translate>
                                </p>
                                <ul className={styles.flagshipList}>
                                    <li>
                                        <Translate id="premium.flagship.item.avatar">Avatar &amp; bannière aux couleurs du serveur</Translate>
                                    </li>
                                    <li>
                                        <Translate id="premium.flagship.item.name">Pseudo sur mesure</Translate>
                                    </li>
                                    <li>
                                        <Translate id="premium.flagship.item.style">Style d'écriture du nom (8 polices, 4 effets)</Translate>
                                    </li>
                                </ul>
                                <Link to="https://raidprotect.bot/founder" className={`${styles.ctaPrimary} ${styles.ctaGlow}`}>
                                    <Translate id="premium.flagship.cta">Customiser mon RaidProtect</Translate>
                                </Link>
                            </div>

                            {/* Maquette de profil Discord réutilisable (composant autonome). */}
                            <div className={styles.flagshipVisual}>
                                <IdentityMockup ctaHref="https://raidprotect.bot/founder" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============= ILS NOUS FONT CONFIANCE ============= */}
                <Servers title={translate({ id: 'premium.servers.title', message: 'Ils nous font confiance' })} transparent />

                {/* ============= AVANTAGES PRINCIPAUX ============= */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.sectionHead}>
                            <div>
                                <span className={styles.sectionEyebrow}>
                                    <Translate id="premium.features.eyebrow">Ce que vous débloquez</Translate>
                                </span>
                                <h2 className={styles.sectionTitle}>
                                    <Translate id="premium.features.title">Les autres avantages du Premium</Translate>
                                </h2>
                                <p className={styles.sectionSubtitle}>
                                    <Translate id="premium.features.subtitle">
                                        Des leviers concrets pour aller plus loin avec RaidProtect, sans changer votre manière de travailler.
                                    </Translate>
                                </p>
                            </div>
                        </div>
                        <div className={styles.grid}>
                            {FEATURES.map(feature => (
                                <article key={feature.title} className={styles.featureCard}>
                                    {feature.scene && (
                                        <div className={styles.featureScene} aria-hidden>
                                            <FeatureScene kind={feature.scene} />
                                        </div>
                                    )}
                                    {feature.badge && (
                                        <span className={styles.expBadge}>
                                            {feature.badge}
                                        </span>
                                    )}
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDesc}>{feature.description}</p>
                                    {feature.docsHref && (
                                        <div className={styles.featureMeta}>
                                            <Link to={feature.docsHref}>
                                                <Translate id="premium.feature.learnMore">En savoir plus →</Translate>
                                            </Link>
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
                            <span className={styles.sectionEyebrow}>
                                <Translate id="premium.compare.eyebrow">Comparatif des offres</Translate>
                            </span>
                            <h2 className={styles.sectionTitle}>
                                <Translate id="premium.compare.title">Choisissez l'offre qui vous correspond</Translate>
                            </h2>
                            <p className={styles.sectionSubtitle}>
                                <Translate id="premium.compare.subtitle">
                                    Toutes les protections essentielles restent gratuites. Le Premium ouvre la personnalisation et les limites étendues. Le Business apporte une instance dédiée et un accompagnement humain.
                                </Translate>
                            </p>
                        </div>

                        {/* ----- Desktop : tableau ----- */}
                        <div className={styles.compareWrap}>
                            <table className={styles.compareTable}>
                                {/* Largeurs figées : Basic couvre les colonnes 1+2 (libellés +
                                    valeurs Basic), Founder et Business une colonne chacune. */}
                                <colgroup>
                                    <col style={{ width: '36%' }} />
                                    <col style={{ width: '8%' }} />
                                    <col style={{ width: '28%' }} />
                                    <col style={{ width: '28%' }} />
                                </colgroup>
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
                                                        {tier.priceStrike && (
                                                            <span className={styles.tierPriceStrike}>{tier.priceStrike}</span>
                                                        )}
                                                        {tier.price}
                                                        {tier.priceUnit && (
                                                            <span className={styles.tierPriceUnit}>{tier.priceUnit}</span>
                                                        )}
                                                    </div>
                                                    <Link
                                                        to={tier.cta.internal ? tier.cta.href : ctaHref(tier.cta.href)}
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
                                                    <td className={row.small ? styles.compareLabelSmall : undefined}>{row.label}</td>
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
                                            {tier.priceStrike && (
                                                <span className={styles.tierPriceStrike}>{tier.priceStrike}</span>
                                            )}
                                            {tier.price}
                                            {tier.priceUnit && (
                                                <span className={styles.tierPriceUnit}>{tier.priceUnit}</span>
                                            )}
                                        </div>
                                        <Link
                                            to={tier.cta.internal ? tier.cta.href : ctaHref(tier.cta.href)}
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
                                                        <dt className={`${styles.stackRowLabel} ${row.small ? styles.compareLabelSmall : ''}`}>{row.label}</dt>
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

                {/* ============= FINAL CTA (au-dessus de la FAQ) ============= */}
                <section className={styles.container}>
                    <div className={styles.finalCta}>
                        <h2>
                            <Translate id="premium.finalCta.title">Prêt à passer en Premium&nbsp;?</Translate>
                        </h2>
                        <p>
                            <Translate id="premium.finalCta.subtitle">
                                L'offre Founder est limitée dans le temps : 2,99 $/mois à vie pour les premiers abonnés. Une fois fermée, ce tarif ne reviendra pas.
                            </Translate>
                        </p>
                        <Link to="https://raidprotect.bot/founder" className={`${styles.ctaPrimary} ${styles.ctaGlow}`}>
                            <Translate id="premium.finalCta.cta">Activer le Premium maintenant</Translate>
                        </Link>
                    </div>
                </section>

                {/* ============= FAQ (tout en bas) ============= */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div>
                            <span className={styles.sectionEyebrow}>
                                <Translate id="premium.faq.eyebrow">Questions fréquentes</Translate>
                            </span>
                            <h2 className={styles.sectionTitle}>
                                <Translate id="premium.faq.title">Tout ce qu'il faut savoir avant de vous abonner</Translate>
                            </h2>
                        </div>
                        <div className={styles.faqList}>
                            {FAQ_ITEMS.map((item, i) => (
                                <details key={i} className={styles.faqItem}>
                                    <summary className={styles.faqQuestion}>
                                        {item.q}
                                        <span className={styles.faqChevron} aria-hidden>▾</span>
                                    </summary>
                                    <p className={styles.faqAnswer}>{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
