import { useEffect, useRef, useState } from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./concept.module.css";

/* Mockup concept animée du Rôle de Tag : la config à gauche, le profil à
 * droite. En boucle : le membre porte le tag RP et a le rôle ; il change de
 * tag, le rôle disparaît une seconde plus tard ; il remet le tag RP, le rôle
 * revient. Cycle désactivé si l'utilisateur préfère un mouvement réduit.
 *
 * Phases : 0 = RP + rôle, 1 = autre tag (rôle encore là), 2 = autre tag sans
 * rôle, 3 = RP revenu (rôle pas encore réattribué). */
const PHASE_DURATIONS = [2600, 1000, 2600, 1000];

export default function TagRoleConceptMockup() {
  const [phase, setPhase] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      reduced.current = true;
      return;
    }
    const t = setTimeout(() => setPhase((phase + 1) % 4), PHASE_DURATIONS[phase]);
    return () => clearTimeout(t);
  }, [phase]);

  const hasTag = phase === 0 || phase === 3;
  const hasRole = phase === 0 || phase === 1;

  return (
    <div className={styles.row} aria-hidden>
      <div className={styles.configCard}>
        <div className={styles.configTitle}>
          <img src="/img/icons/iconTagWhite.svg" alt="" loading="lazy" />
          {translate({ id: "mockup.tagroleConcept.config", message: "Rôle de Tag" })}
        </div>
        <span className={styles.configValue}>@Rôle de Tag</span>
      </div>

      <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M4 12h15m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className={styles.profileCard}>
        <div className={styles.profileBanner} />
        <div className={styles.profileBody}>
          <div className={styles.profileAvatarWrap}>
            <img className={styles.profileAvatar} src="/img/avatar/zallom.webp" alt="" loading="lazy" />
            <span className={styles.profileStatus} />
          </div>
          <div className={`${styles.profileName} ${hasRole ? "" : styles.profileNameMuted}`}>Zallom</div>
          <div className={styles.profileUsernameRow}>
            <span className={styles.profileUsername}>zallom</span>
            {hasTag ? (
              <span key="rp" className={`${styles.serverTag} ${styles.serverTagNew} ${styles.tagIn}`}>
                <img src="/img/mockup/tag-rp.png" alt="" loading="lazy" />
                RP
              </span>
            ) : (
              <span key="other" className={`${styles.serverTag} ${styles.tagIn}`}>
                <img src="/img/mockup/tag-fr.png" alt="" loading="lazy" />
                FR
              </span>
            )}
          </div>
          <div className={styles.roles}>
            <span className={`${styles.roleChip} ${styles.roleChipNew} ${hasRole ? "" : styles.roleHidden}`}>
              <span className={styles.roleDot} />
              <span className={styles.roleLabel}>
                {translate({ id: "mockup.tagroleConcept.roleTag", message: "Rôle de Tag" })}
              </span>
            </span>
            <span className={styles.roleChip}>
              <span className={styles.roleDot} />
              {translate({ id: "mockup.tagroleConcept.roleMember", message: "Membre" })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
