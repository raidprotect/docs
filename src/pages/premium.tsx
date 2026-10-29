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
type SceneKind = 'kickMode' | 'authLimits' | 'sanctionRename' | 'panels' | 'honeypot' | 'slowmode' | 'limits' | 'captcha'

type Feature = {
    /** Mise en situation CSS ; absente pour les avantages sans illustration. */
    scene?: SceneKind
    /** Pastille optionnelle (ex. "Bêta publique" sur l'accès anticipé). */
    badge?: string
    /** Place de la carte dans la mosaïque (grid-area). */
    area: string
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
    servers: 415000,
    users: 63000000,
    captcha: 14515925,
    antispam: 1435257,
    founder: 46,
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
 * Pass Founder du hero : la carte de membre que reçoit l'abonné, numérotée
 * à la prochaine place libre. Elle entre une fois au chargement ; le reflet
 * suit ensuite la souris.
 */
function FounderPass({ taken }: { taken?: number }): React.ReactNode {
    const ref = useRef<HTMLDivElement>(null)
    const seat = Math.min((taken ?? 0) + 1, FOUNDER_GOAL)
    const left = Math.max(FOUNDER_GOAL - (taken ?? 0), 0)

    const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height
        el.style.setProperty('--px', `${x * 100}%`)
        el.style.setProperty('--py', `${y * 100}%`)
        el.style.setProperty('--rx', `${(0.5 - y) * 8}deg`)
        el.style.setProperty('--ry', `${(x - 0.5) * 10}deg`)
    }
    const onLeave = () => {
        const el = ref.current
        if (!el) return
        el.style.removeProperty('--rx')
        el.style.removeProperty('--ry')
    }

    return (
        <Link
            to="https://raidprotect.bot/founder"
            className={styles.passWrap}
            aria-label={translate({ id: 'premium.hero.cta.subscribe', message: "S'abonner pour 2,99 $/mois" })}>
            <div className={styles.pass} ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
                <div className={styles.passMain}>
                    <div className={styles.passTop}>
                        <img src="/img/rp-mark.svg" alt="" width={34} height={34} />
                        <span className={styles.passSeat}>
                            {translate({ id: 'premium.pass.seat', message: 'n° {seat}' }, { seat: String(seat).padStart(3, '0') })}
                        </span>
                    </div>
                    <div className={styles.passName}>Founder</div>
                    <div className={styles.passPrice}>
                        <s>{translate({ id: 'premium.tier.founder.priceStrike', message: '5,99 $' })}</s>
                        <strong>{translate({ id: 'premium.tier.founder.price', message: '2,99 $' })}</strong>
                        <span>{translate({ id: 'premium.tier.founder.priceUnit', message: '/ mois' })}</span>
                    </div>
                    <div className={styles.passLock}>
                        {translate({ id: 'premium.pass.lock', message: 'Tarif verrouillé à vie' })}
                    </div>
                </div>
                <div className={styles.passStub}>
                    <strong>{left}</strong>
                    <span>{translate({ id: 'premium.pass.left', message: 'places restantes' })}</span>
                </div>
            </div>
        </Link>
    )
}

// Mêmes communautés que la maquette « Le bot prend l'identité de votre serveur ».
const CAPTCHA_SERVERS: { name: string; icon: string }[] = [
    { name: 'CYRILmp4', icon: '/img/landing/iconCyrilmp4.webp' },
    { name: 'Jobless', icon: '/img/landing/iconJobless.webp' },
    { name: 'Ligue 1', icon: '/img/landing/iconLigue1.webp' },
    { name: 'NationsGlory', icon: '/img/landing/iconNationsGlory.webp' },
    { name: 'Slash FR', icon: '/img/landing/iconSlashFR.webp' },
    { name: 'Whiteout Survival', icon: '/img/identity/whiteoutsurvival-avatar.webp' },
]

const CAPTCHA_CYCLE_MS = 3200

function CaptchaScene(): React.ReactNode {
    const [index, setIndex] = useState(0)
    const [animated, setAnimated] = useState(false)
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        setAnimated(true)
        const timer = window.setInterval(() => setIndex(i => (i + 1) % CAPTCHA_SERVERS.length), CAPTCHA_CYCLE_MS)
        return () => window.clearInterval(timer)
    }, [])
    // Les cases se remplissent une à une pendant le cycle, la dernière
    // juste avant le passage au serveur suivant.
    const steps = 4
    return (
        <div className={styles.sceneCaptcha}>
            <span className={styles.captchaIconStack}>
                {CAPTCHA_SERVERS.map((server, i) => (
                    <img key={server.icon} className={`${styles.captchaIcon} ${i === index ? styles.captchaActive : ''}`} src={server.icon} alt="" width={46} height={46} />
                ))}
            </span>
            <span className={styles.captchaTitleStack}>
                {CAPTCHA_SERVERS.map((server, i) => (
                    <span key={server.name} className={`${styles.captchaTitle} ${i === index ? styles.captchaActive : ''}`}>
                        {translate({ id: 'premium.scene.captcha.title', message: 'Vérification de {server}' }, { server: server.name })}
                    </span>
                ))}
            </span>
            <span key={index} className={`${styles.captchaPuzzle} ${animated ? styles.captchaRunning : ''}`}>
                {Array.from({ length: steps }, (_, i) => (
                    <span key={i} style={{ animationDelay: `${(i * CAPTCHA_CYCLE_MS) / (steps + 0.5)}ms` }} />
                ))}
            </span>
        </div>
    )
}

// Salon simulé en ticks de 250 ms, sur un cycle de 12 s : calme, spam, calme.
// SLOW_WANT est la probabilité qu'un membre veuille écrire à ce tick.
const SLOW_WANT = [
    ...Array(12).fill(0.06),
    0.3, 0.5, 0.7, 0.8,
    ...Array(12).fill(0.8),
    0.5, 0.3, 0.15, 0.08,
    ...Array(16).fill(0.06),
]
const SLOW_TICK_MS = 250
const SLOW_BARS = SLOW_WANT.length
const SLOW_USERS = ['#d35f5f', '#a561a3', '#5f9ed3', '#d3a65f', '#5fd39a']
// Mode lent affiché, et attente imposée à chaque membre dans la simulation (en ticks).
const SLOW_LEVELS = [0, 5, 10, 30]
const SLOW_COOLDOWN = [0, 2, 4, 8]
// Débit d'envois voulus (par tick, moyenne sur 1 s) au-delà duquel chaque niveau s'impose.
const SLOW_STEPS = [1, 2.2, 3.4]
// La première réaction laisse le salon s'agiter un moment, les crans suivants vont plus vite.
const SLOW_REACT = [5, 2, 2]
const SLOW_RELAX = 6
const SLOW_MAX = SLOW_USERS.length
const SLOW_TARGET = 1.2
const SLOW_ROW = 22
const SLOW_FEED = 128

type SlowMsg = { id: number; user: number; width: number }
type SlowState = {
    t: number
    level: number
    streak: number
    ready: number[]
    bars: { want: number; sent: number }[]
    msgs: SlowMsg[]
    next: number
}

const slowRandom = (t: number, u: number) => {
    const x = Math.sin(t * 12.9898 + u * 78.233) * 43758.5453
    return x - Math.floor(x)
}

function slowStep(s: SlowState): SlowState {
    const p = SLOW_WANT[s.t % SLOW_WANT.length]
    const cooldown = SLOW_COOLDOWN[s.level]
    const ready = [...s.ready]
    let want = 0
    let next = s.next
    const fresh: SlowMsg[] = []
    SLOW_USERS.forEach((_, u) => {
        if (slowRandom(s.t, u) >= p) return
        want += 1
        // Pendant son attente, le membre ne peut pas envoyer : c'est le mode lent.
        if (s.t < ready[u]) return
        ready[u] = s.t + cooldown
        next += 1
        fresh.push({ id: next, user: u, width: 35 + ((next * 29) % 55) })
    })
    const bars = [...s.bars, { want, sent: fresh.length }].slice(-SLOW_BARS)

    // Le mode lent réagit au débit de la dernière seconde, et seulement quand
    // l'écart dure : il monte après SLOW_REACT ticks, redescend après SLOW_RELAX.
    const recent = bars.slice(-4)
    const rate = recent.reduce((sum, bar) => sum + bar.want, 0) / recent.length
    const wanted = SLOW_STEPS.filter(step => rate > step).length
    let { level, streak } = s
    if (wanted === level) {
        streak = 0
    } else {
        streak += 1
        if (streak >= (wanted > level ? SLOW_REACT[level] : SLOW_RELAX)) {
            level += wanted > level ? 1 : -1
            streak = 0
        }
    }
    return { t: s.t + 1, level, streak, ready, bars, msgs: [...s.msgs, ...fresh].slice(-14), next }
}

function slowInitial(ticks: number): SlowState {
    let s: SlowState = { t: 0, level: 0, streak: 0, ready: SLOW_USERS.map(() => 0), bars: [], msgs: [], next: 0 }
    for (let i = 0; i < ticks; i++) s = slowStep(s)
    return s
}

/**
 * Salon simulé : une couleur par membre. Quand le salon s'agite, le mode lent
 * monte un peu après, et chaque membre doit attendre entre deux messages : les
 * couleurs s'espacent dans le fil. Les barres claires sont les envois voulus,
 * les pleines ceux qui passent.
 */
function SlowmodeScene(): React.ReactNode {
    const ref = useRef<HTMLDivElement>(null)
    // Le rendu serveur et le mouvement réduit montrent un cycle complet, pic en cours.
    const [state, setState] = useState(() => slowInitial(SLOW_BARS + 24))
    const [animated, setAnimated] = useState(false)
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        setAnimated(true)
        let timer: number | undefined
        const start = () => {
            if (timer === undefined) timer = window.setInterval(() => setState(slowStep), SLOW_TICK_MS)
        }
        const stop = () => {
            window.clearInterval(timer)
            timer = undefined
        }
        const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
        if (ref.current) observer.observe(ref.current)
        return () => {
            observer.disconnect()
            stop()
        }
    }, [])

    const seconds = SLOW_LEVELS[state.level]
    const cooldown = SLOW_COOLDOWN[state.level]
    const scroll = SLOW_FEED - (state.next + 1) * SLOW_ROW
    return (
        <div ref={ref} className={`${styles.sceneSlowmode} ${animated ? styles.slowAnimated : ''}`}>
            <div className={styles.slowChannel}>
                <div className={styles.slowFeed} style={{ height: SLOW_FEED }}>
                    <div className={styles.slowTrack} style={{ transform: `translateY(${scroll}px)`, transitionDuration: `${SLOW_TICK_MS}ms` }}>
                        {state.msgs.map(msg => (
                            <div key={msg.id} className={styles.slowMsg} style={{ top: msg.id * SLOW_ROW }}>
                                <span className={styles.slowAvatar} style={{ background: SLOW_USERS[msg.user] }} />
                                <span className={styles.slowLines}>
                                    <span className={styles.slowName} style={{ width: `${30 + msg.user * 7}%`, background: SLOW_USERS[msg.user] }} />
                                    <span className={styles.slowText} style={{ width: `${msg.width}%` }} />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.slowInput} ${seconds ? styles.slowInputOn : ''}`}>
                    <span className={styles.slowUsers}>
                        {SLOW_USERS.map((color, u) => {
                            // Anneau qui se vide pendant l'attente du membre.
                            const left = cooldown ? Math.max(0, state.ready[u] - state.t) / cooldown : 0
                            return (
                                <span
                                    key={color}
                                    className={styles.slowUser}
                                    style={{ background: color, boxShadow: left ? `0 0 0 2px ${color}55` : undefined, opacity: left ? 0.45 : 1 }}
                                >
                                    {left > 0 && <span className={styles.slowUserWait} style={{ background: `conic-gradient(rgba(0, 0, 0, 0.55) ${left * 360}deg, transparent 0)` }} />}
                                </span>
                            )
                        })}
                    </span>
                    <span className={styles.slowChip}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                            <circle cx="12" cy="13" r="8" />
                            <path d="M12 9v4l2 2M9 2h6" />
                        </svg>
                        {seconds ? `${seconds} s` : translate({ id: 'premium.scene.slowmode.off', message: 'désactivé' })}
                    </span>
                </div>
            </div>
            <div className={styles.slowChart}>
                <span className={styles.slowTarget} style={{ bottom: `${(SLOW_TARGET / SLOW_MAX) * 100}%` }} />
                {/* Remonté à chaque tick : la piste glisse d'une barre, sans à-coup. */}
                <div key={state.t} className={styles.slowChartTrack} style={{ animationDuration: `${SLOW_TICK_MS}ms` }}>
                    {state.bars.map((bar, i) => (
                        <span key={i} className={`${styles.slowBar} ${i === state.bars.length - 1 ? styles.slowBarLive : ''}`}>
                            <span className={styles.slowDemand} style={{ height: `${(bar.want / SLOW_MAX) * 100}%` }} />
                            <span className={styles.slowActual} style={{ height: `${(bar.sent / SLOW_MAX) * 100}%` }} />
                        </span>
                    ))}
                </div>
            </div>
            <div className={styles.slowValue}>
                <span>{translate({ id: 'premium.scene.slowmode.label', message: 'Mode lent' })}</span>
                <strong key={seconds} className={styles.slowValueChange}>{seconds} s</strong>
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
                        <span className={styles.limitArrow} aria-hidden="true">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h13M13 6l6 6-6 6" />
                            </svg>
                        </span>
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

    if (kind === 'slowmode') {
        return <SlowmodeScene />
    }

    if (kind === 'limits') {
        const rows: [string, string, string][] = [
            [translate({ id: 'premium.scene.limits.autoroles', message: 'Rôles automatiques' }), '3', '10'],
            [translate({ id: 'premium.scene.limits.botRoles', message: 'Rôles des bots' }), '1', '15'],
            [translate({ id: 'premium.scene.limits.buttons', message: 'Boutons de bienvenue' }), '2', '4'],
            [translate({ id: 'premium.scene.limits.fileRules', message: 'Règles de fichiers par salon' }), '1', '20'],
        ]
        return (
            <div className={styles.sceneLimits}>
                {rows.map(([label, free, prem]) => (
                    <div key={label} className={styles.limitRow}>
                        <span className={styles.limitLabel}>{label}</span>
                        <span className={styles.limitFree}>{free}</span>
                        <span className={styles.limitArrow} aria-hidden="true">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h13M13 6l6 6-6 6" />
                            </svg>
                        </span>
                        <span className={styles.limitPrem}>{prem}</span>
                    </div>
                ))}
            </div>
        )
    }

    if (kind === 'captcha') {
        return <CaptchaScene />
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
    // Comparatif replié sur ses premières catégories, déplié à la demande.
    const [showAll, setShowAll] = useState(false)

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
            scene: 'kickMode',
            area: 'kick',
            title: translate({ id: 'premium.feature.kickMode.title', message: 'Anti-raid en mode expulsion' }),
            description: translate({ id: 'premium.feature.kickMode.desc', message: 'Pendant un raid, les arrivants sont expulsés avec un message pour revenir plus tard.' }),
            docsHref: '/docs/features/raid-mode',
        },
        {
            scene: 'slowmode',
            area: 'slow',
            title: translate({ id: 'premium.feature.slowmode.title', message: 'Slowmode préventif' }),
            description: translate({ id: 'premium.feature.slowmode.desc', message: 'Quand un salon s\'emballe, le mode lent monte tout seul, puis redescend quand le calme revient. Jusqu\'à 6 salons.' }),
            docsHref: '/docs/features/slowmode',
        },
        {
            scene: 'limits',
            area: 'limits',
            title: translate({ id: 'premium.feature.limits.title', message: 'Plus de place partout' }),
            description: translate({ id: 'premium.feature.limits.desc', message: 'Arrivées, Automod, Authentication Manager : chaque module voit ses limites s\'agrandir, sans rien perdre de la version gratuite.' }),
            docsHref: '#compare',
        },
        {
            scene: 'sanctionRename',
            area: 'names',
            title: translate({ id: 'premium.feature.sanctionNames.title', message: 'Noms de sanctions personnalisables' }),
            description: translate({ id: 'premium.feature.sanctionNames.desc', message: 'Adaptez chaque sanction au vocabulaire de votre communauté.' }),
            docsHref: '/docs/features/sanctions#custom-names',
        },
        {
            scene: 'captcha',
            area: 'captcha',
            title: translate({ id: 'premium.feature.captcha.title', message: 'Captcha à l\'image de votre serveur' }),
            description: translate({ id: 'premium.feature.captcha.desc', message: 'L\'icône de votre serveur remplace le logo RaidProtect dans la vérification.' }),
            docsHref: '/docs/features/captcha#activity',
        },
        {
            scene: 'honeypot',
            area: 'honeypot',
            title: translate({ id: 'premium.feature.honeypot.title', message: 'Sanctions Honeypot avancées' }),
            description: translate({ id: 'premium.feature.honeypot.desc', message: 'Débloquez Kick, Timeout, Jail et Mute : les messages du spammeur sont effacés dans tous les salons, comme avec un ban.' }),
            docsHref: '/docs/features/honeypot',
        },
        {
            badge: translate({ id: 'premium.feature.beta.badge', message: 'Bêta publique' }),
            area: 'beta',
            title: translate({ id: 'premium.feature.beta.title', message: 'Accès anticipé aux nouveautés' }),
            description: translate({ id: 'premium.feature.beta.desc', message: 'Les abonnés reçoivent en avant-première les fonctionnalités en bêta, en ce moment les doubles comptes et les nouvelles logs du serveur : salons, membres, messages, vocal et réactions, avec l\'auteur de chaque action.' }),
            docsHref: '/docs/beta/features/logs',
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
        { type: 'feature', label: translate({ id: 'premium.compare.row.preventiveSlowmode', message: 'Slowmode préventif (jusqu\'à 6 salons)' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.disconVoice', message: 'Salon vocal de statut du DISCON' }), values: [no, yes, yes] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.automod', message: 'Automod' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.imageCatalog', message: 'Catalogue personnalisé d\'images ScamLens (listes)' }), values: [no, '2', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.fileRules', message: 'Règles d\'extensions de fichiers par salon' }), values: ['1', '20', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.fileCategories', message: 'Règles d\'extensions par catégorie' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.privateInvites', message: 'Invitations d\'ami et de groupe réglées à part' }), values: [no, yes, yes] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.arrivals', message: 'Arrivées' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.autoroles', message: 'Rôles automatiques' }), values: ['3', '10', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.botRoles', message: 'Rôles des bots' }), values: ['1', '15', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.welcomeButtons', message: 'Boutons du message de bienvenue' }), values: ['2', '4', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.welcomeColor', message: 'Couleur du message de bienvenue' }), values: [no, yes, yes] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.captchaIcon', message: 'Captcha à l\'image de votre serveur' }), values: [no, yes, yes] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.reports', message: 'Signalements' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.trustedRole', message: 'Rôle de confiance (timeout préventif)' }), values: [no, yes, yes] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.authManager', message: 'Authentification Manager' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.protectedRoles', message: 'Rôles protégés' }), values: ['3', '10', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.authorizedUsers', message: 'Utilisateurs autorisés' }), values: ['20', '50', custom] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.sessionDuration', message: 'Durée de session' }), values: ['8 h', '24 h', custom] },

        { type: 'category', label: translate({ id: 'premium.compare.cat.display', message: 'Display public' }) },
        { type: 'feature', label: translate({ id: 'premium.compare.row.panels', message: 'Panneaux d\'information' }), values: [
            translate({ id: 'premium.compare.row.panels.free', message: '2 + 1 Jail' }),
            translate({ id: 'premium.compare.row.panels.founder', message: '4 + 1 Jail' }),
            custom,
        ] },
        { type: 'feature', label: translate({ id: 'premium.compare.row.staffPanels', message: 'Panneaux /display staff' }), values: [
            translate({ id: 'premium.compare.row.staffPanels.free', message: '1 + DISCON' }),
            translate({ id: 'premium.compare.row.staffPanels.founder', message: '4 + DISCON' }),
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

    const firstHidden = COMPARE_ROWS.findIndex((row, i) => row.type === 'category' && COMPARE_ROWS.slice(0, i).filter(r => r.type === 'category').length === 4)
    const visibleRows = showAll || firstHidden < 0 ? COMPARE_ROWS : COMPARE_ROWS.slice(0, firstHidden)
    const hiddenCount = COMPARE_ROWS.length - visibleRows.length - COMPARE_ROWS.slice(visibleRows.length).filter(r => r.type === 'category').length

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
        message: 'Découvrez RaidProtect Premium : personnalisation du bot, Authentification Manager étendu, sanctions HoneyPot avancées, accès aux fonctionnalités en bêta publique.',
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
                    <div className={`${styles.container} ${styles.heroGrid}`}>
                        <div className={styles.heroCopy}>
                        {typeof stats.founder === 'number' && <FounderScarcity taken={stats.founder} />}
                        <h1 className={styles.heroTitle}>
                            <Translate id="premium.hero.title.line1" description="Première ligne du titre du hero premium">
                                Une protection à votre image,
                            </Translate>{' '}
                            <span className={styles.heroTitleAccent}>
                                <Translate id="premium.hero.title.accent" description="Partie accentuée du titre du hero premium">
                                    sans compromis
                                </Translate>
                            </span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            <Translate id="premium.hero.subtitle">
                                Personnalisez RaidProtect aux couleurs de votre serveur, poussez les limites de vos modules et recevez les nouveautés en avant-première.
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
                        <FounderPass taken={stats.founder} />
                    </div>
                </section>

                {/* ============= SOCIAL PROOF / STATS ============= */}
                <section className={styles.statsSection} data-search-ignore>
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
                            <div className={styles.flagshipVisual} data-search-ignore>
                                <IdentityMockup ctaHref="https://raidprotect.bot/founder" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============= ILS NOUS FONT CONFIANCE ============= */}
                <div data-search-ignore>
                    <Servers title={translate({ id: 'premium.servers.title', message: 'Ils nous font confiance' })} transparent />
                </div>

                {/* ============= AVANTAGES PRINCIPAUX ============= */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <div className={styles.sectionHead}>
                            <div>
                                <span className={styles.sectionEyebrow}>
                                    <Translate id="premium.features.eyebrow">Ce que vous débloquez</Translate>
                                </span>
                                <h2 className={styles.sectionTitle}>
                                    <Translate id="premium.features.title">Tout le reste du Premium</Translate>
                                </h2>
                                <p className={styles.sectionSubtitle}>
                                    <Translate id="premium.features.subtitle">
                                        Des limites plus hautes, des sanctions à votre vocabulaire et un accès anticipé aux nouveautés.
                                    </Translate>
                                </p>
                            </div>
                        </div>
                        <div className={styles.bento}>
                            {FEATURES.map(feature => (
                                <article
                                    key={feature.title}
                                    className={styles.bentoCell}
                                    data-area={feature.area}
                                >
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
                                            {feature.docsHref.startsWith('#') ? (
                                                <a href={feature.docsHref}>
                                                    <Translate id="premium.feature.learnMore">En savoir plus</Translate>
                                                </a>
                                            ) : (
                                                <Link to={feature.docsHref}>
                                                    <Translate id="premium.feature.learnMore">En savoir plus</Translate>
                                                </Link>
                                            )}
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
                                        return visibleRows.map((row, i) => {
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
                                            return visibleRows.map((row, i) => {
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

                        {hiddenCount > 0 && (
                            <div className={styles.compareMore}>
                                <button type="button" className={styles.ctaSecondary} onClick={() => setShowAll(v => !v)} aria-expanded={showAll}>
                                    {showAll
                                        ? translate({ id: 'premium.compare.showLess', message: 'Replier le comparatif' })
                                        : translate({ id: 'premium.compare.showAll', message: 'Voir les {count} autres lignes' }, { count: hiddenCount })}
                                </button>
                            </div>
                        )}
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
