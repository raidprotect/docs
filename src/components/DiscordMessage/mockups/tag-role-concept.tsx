import { translate } from "@docusaurus/Translate";
import styles from "./concept.module.css";

function TagShield() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" />
    </svg>
  );
}

/* Mockup concept du Rôle de Tag : la config du rôle à gauche, et l'effet à
 * droite : un membre porte le tag du serveur, il reçoit le rôle. */
export default function TagRoleConceptMockup() {
  return (
    <div className={styles.row} aria-hidden>
      <div className={styles.configCard}>
        <div className={styles.configTitle}>
          <img src="/img/icons/iconTagWhite.svg" alt="" loading="lazy" />
          {translate({ id: "mockup.tagroleConcept.config", message: "Rôle de Tag" })}
        </div>
        <span className={styles.configValue}>@Représentant</span>
      </div>

      <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path d="M4 12h15m0 0-5-5m5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className={styles.profileCard}>
        <div className={styles.profileBanner} />
        <div className={styles.profileBody}>
          <img className={styles.profileAvatar} src="/img/avatar/chaussette.webp" alt="" loading="lazy" />
          <div className={styles.profileName}>
            Chaussette
            <span className={`${styles.serverTag} ${styles.serverTagNew}`}>
              <TagShield />
              RP
            </span>
          </div>
          <div className={styles.profileUsername}>chaussette</div>
          <div className={styles.rolesLabel}>{translate({ id: "mockup.tagroleConcept.roles", message: "Rôles" })}</div>
          <div className={styles.roles}>
            <span className={styles.roleChip}>
              <span className={styles.roleDot} />
              {translate({ id: "mockup.tagroleConcept.roleMember", message: "Membre" })}
            </span>
            <span className={`${styles.roleChip} ${styles.roleChipNew}`}>
              <span className={styles.roleDot} />
              {translate({ id: "mockup.tagroleConcept.roleTag", message: "Représentant" })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
