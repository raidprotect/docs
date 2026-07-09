import React, { useEffect, useRef, useState } from 'react'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import styles from './styles.module.css'

/** Teinte du cercle d'avatar RaidProtect (rouge de marque), seul avatar rendu
 *  via le logo SVG masqué. */
const RP_TINT = '#D35F5F'

/** Avatar : soit le logo RaidProtect (masque teinté), soit une vraie icône de
 *  serveur (temporairement, en attendant des avatars dédiés). */
type Avatar = { kind: 'mark' } | { kind: 'img'; src: string }

type Identity = {
    slug: string
    avatar: Avatar
    /** Nom en SVG (couleur, police et effet déjà intégrés). */
    nameSrc: string
    /** Bannière en WebP. */
    bannerSrc: string
    /** Pseudo en texte brut (barre de message « Message @… »). */
    label: string
}

const NAME = (slug: string) => `/img/identity/${slug}-name.svg`
const BANNER = (slug: string) => `/img/identity/${slug}-banner.webp`
const AVATAR = (slug: string) => `/img/identity/${slug}-avatar.webp`
const ICON = (file: string) => `/img/landing/${file}`

// Jeu d'identités piloté par les assets. RaidProtect en ancrage (logo + rouge),
// puis des communautés réelles ; chacune a son nom en SVG et sa bannière WebP.
// L'avatar est, pour l'instant, l'icône du serveur (sauf RaidProtect).
const IDENTITIES: Identity[] = [
    { slug: 'raidprotect', avatar: { kind: 'mark' }, nameSrc: NAME('raidprotect'), bannerSrc: BANNER('raidprotect'), label: 'RaidProtect' },
    { slug: 'cyrilmp4', avatar: { kind: 'img', src: ICON('iconCyrilmp4.webp') }, nameSrc: NAME('cyrilmp4'), bannerSrc: BANNER('cyrilmp4'), label: 'CYRILmp4' },
    { slug: 'jobless', avatar: { kind: 'img', src: ICON('iconJobless.webp') }, nameSrc: NAME('jobless'), bannerSrc: BANNER('jobless'), label: 'Jobless' },
    { slug: 'ligue1', avatar: { kind: 'img', src: ICON('iconLigue1.webp') }, nameSrc: NAME('ligue1'), bannerSrc: BANNER('ligue1'), label: 'Ligue 1' },
    { slug: 'nationsglory', avatar: { kind: 'img', src: ICON('iconNationsGlory.webp') }, nameSrc: NAME('nationsglory'), bannerSrc: BANNER('nationsglory'), label: 'NG' },
    { slug: 'slashfr', avatar: { kind: 'img', src: ICON('iconSlashFR.webp') }, nameSrc: NAME('slashfr'), bannerSrc: BANNER('slashfr'), label: 'Rooster' },
    { slug: 'whiteoutsurvival', avatar: { kind: 'img', src: AVATAR('whiteoutsurvival') }, nameSrc: NAME('whiteoutsurvival'), bannerSrc: BANNER('whiteoutsurvival'), label: 'Ben' },
]
const COUNT = IDENTITIES.length

const IDENTITY_FADE_MS = 850

export type IdentityMockupProps = {
    /** Lien du bouton révélé au survol (paiement Founder par défaut).
     *  Passer null/'' masque l'overlay si la maquette est réutilisée sans CTA. */
    ctaHref?: string | null
}

/**
 * Maquette de profil Discord (décorative) qui fait défiler des identités pour
 * illustrer la personnalisation Premium : le bot prend l'apparence de la
 * communauté. Chaque identité est pilotée par des assets (nom en SVG, avatar,
 * bannière WebP). Cycle désactivé si l'utilisateur préfère un mouvement réduit.
 * Composant autonome, réutilisable ailleurs.
 */
export default function IdentityMockup({ ctaHref = 'https://raidprotect.bot/founder' }: IdentityMockupProps = {}): React.ReactNode {
    const [index, setIndex] = useState(0)
    // Index de l'identité sortante : rendu en calque au-dessus, il se fond
    // (crossfade) pour éviter tout clignotement pendant le changement.
    const [prev, setPrev] = useState<number | null>(null)
    const idxRef = useRef(0)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
        const timer = setInterval(() => {
            const cur = idxRef.current
            const next = (cur + 1) % COUNT
            idxRef.current = next
            setPrev(cur)
            setIndex(next)
        }, 3200)
        return () => clearInterval(timer)
    }, [])

    // Retire le calque sortant une fois le fondu terminé.
    useEffect(() => {
        if (prev == null) return
        const t = setTimeout(() => setPrev(null), IDENTITY_FADE_MS)
        return () => clearTimeout(t)
    }, [prev, index])

    const id = IDENTITIES[index]
    const old = prev != null ? IDENTITIES[prev] : null

    const renderAvatarInner = (avatar: Avatar) =>
        avatar.kind === 'mark'
            ? <span className={styles.mockupAvatarMark} />
            : <img className={styles.mockupAvatarImg} src={avatar.src} alt="" aria-hidden loading="lazy" />

    const avatarBg = (identity: Identity): React.CSSProperties | undefined =>
        identity.avatar.kind === 'mark' ? { background: RP_TINT } : undefined

    return (
        <div className={styles.root} aria-hidden>
            <div className={styles.tilt}>
                <div className={styles.mockup}>
                    <button type="button" className={styles.mockupMenu} tabIndex={-1}>⋯</button>
                    <div className={styles.mockupBanner} style={{ backgroundImage: `url(${id.bannerSrc})` }} />
                    {old && (
                        <div key={`banner-${prev}`} className={`${styles.mockupBanner} ${styles.mockupBannerPrev} ${styles.mockupFadeOut}`} style={{ backgroundImage: `url(${old.bannerSrc})` }} />
                    )}
                    <div className={styles.mockupAvatar} style={avatarBg(id)}>
                        {renderAvatarInner(id.avatar)}
                    </div>
                    {old && (
                        <div key={`avatar-${prev}`} className={`${styles.mockupAvatar} ${styles.mockupAvatarPrev} ${styles.mockupFadeOut}`} style={avatarBg(old)}>
                            {renderAvatarInner(old.avatar)}
                        </div>
                    )}
                    {/* Statut hors des avatars : calque au-dessus des deux, jamais masqué
                        par le crossfade. */}
                    <span className={styles.mockupStatus} />
                    <div className={styles.mockupBody}>
                        <div className={styles.mockupNameRow}>
                            <span className={styles.mockupNameWrap}>
                                <img key={`name-${index}`} className={`${styles.mockupNameImg} ${styles.mockupNameIn}`} src={id.nameSrc} alt="" aria-hidden />
                                {old && (
                                    <img key={`name-${prev}`} className={`${styles.mockupNameImg} ${styles.mockupNamePrev} ${styles.mockupNameOut}`} src={old.nameSrc} alt="" aria-hidden />
                                )}
                            </span>
                            <span className={styles.mockupTag}>
                                <svg className={styles.mockupTagVerified} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M19.06 6.94a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.12 0l-4-4a1.5 1.5 0 0 1 2.12-2.12L10 13.88l6.94-6.94a1.5 1.5 0 0 1 2.12 0Z" />
                                </svg>
                                <span className={styles.mockupTagText}>APP</span>
                            </span>
                        </div>
                        <div className={styles.mockupUser}>
                            RaidProtect#0418
                            <img className={styles.mockupSlash} src="/img/icons/iconSupportsCommand.svg" alt="" aria-hidden />
                        </div>
                        <div className={styles.mockupMutual}>
                            <span className={styles.mockupMutualDots}>
                                <img src={ICON('iconWankilStudio.webp')} alt="" aria-hidden loading="lazy" />
                                <img src={ICON('iconTeamVitality.webp')} alt="" aria-hidden loading="lazy" />
                                <img src={ICON('iconGenshinImpactFR.webp')} alt="" aria-hidden loading="lazy" />
                            </span>
                            <Translate id="premium.mockup.mutual">40 serveurs en commun</Translate>
                        </div>
                        <div className={styles.mockupButtons}>
                            <span className={styles.mockupBtnDark}>
                                <span className={styles.mockupBtnIcon}>+</span>
                                <Translate id="premium.mockup.addApp">Ajouter l'app</Translate>
                            </span>
                            <span className={styles.mockupBtnBlurple}>
                                <svg className={styles.mockupBtnIcon} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
                                </svg>
                                <Translate id="premium.mockup.store">Boutique</Translate>
                            </span>
                        </div>
                        <p className={styles.mockupDesc}>
                            <Translate id="premium.mockup.desc">Fonctionnalités avancées de modération et de sécurité propulsées par RaidProtect.</Translate>
                        </p>
                        <div className={styles.mockupActivity}>
                            <span className={styles.mockupActivityLabel}>
                                <Translate id="premium.mockup.watching">Regarde</Translate>
                            </span>
                            <span className={styles.mockupActivityValue}>/settings</span>
                        </div>
                        <div className={styles.mockupMessage}>
                            <Translate id="premium.mockup.message" values={{ name: id.label }}>
                                {'Envoyer un message à @{name}'}
                            </Translate>
                            <span className={styles.mockupEmoji}>☺</span>
                        </div>
                    </div>
                    {ctaHref && (
                        <div className={styles.mockupHover}>
                            <Link to={ctaHref} className={styles.mockupHoverBtn} tabIndex={-1}>
                                <span className={styles.mockupHoverPlus}>
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <Translate id="premium.mockup.customize">Customiser mon RaidProtect</Translate>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
