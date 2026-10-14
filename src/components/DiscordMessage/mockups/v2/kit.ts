import { translate } from "@docusaurus/Translate";
import type { Component, SelectOption } from "../../types";

/* Briques des écrans /settings en composants V2 (bot 3.5.0), répliquées
 * depuis src/utils/SettingsScreen.ts. */

export const t = (id: string, message: string) => translate({ id: `mockup.v2.${id}`, message });

const IDS = {
  iconSettings: "1398382688372789399",
  iconSettingsWhite: "1398382690444513281",
  iconBookOpen: "1558104365812678656",
  iconFolderOpenWhite: "1556746550473003050",
  iconFolderBlurple: "1556754973004398653",
  iconFolderOpenBlurple: "1556746549298724914",
  iconChevronRightBlurple: "1556732980074909726",
  iconChevronRightWhite: "1556732980960166032",
  iconPreviousWhite: "1398382652087599249",
  iconSupportWhite: "1398382703111438428",
  iconDocs: "1398382586908250242",
  iconDocsWhite: "1398382589227565148",
  iconPremium: "1483848678656573460",
  iconPremiumWhite: "1483797758681808916",
  iconAlert: "1398382516871626752",
  iconWarning: "1398382729300545637",
  iconLanguage: "1398382614800367637",
  iconLanguageWhite: "1398382617258098828",
  iconPrefix: "1398382644328403004",
  iconPrefixWhite: "1398382647025336351",
  iconKey: "1471316982581170452",
  iconKeyWhite: "1473631642969964771",
  iconTime: "1398382711457976494",
  iconTimeWhite: "1398382713743999027",
  iconCustom: "1398382567073255565",
  iconCustomWhite: "1398382569195700415",
  iconAntiraid: "1398382518885159173",
  iconAntiraidWhite: "1398382520629727284",
  iconCaptcha: "1398382544038269019",
  iconCaptchaWhite: "1398382553169264766",
  iconCalendar: "1398382537965043838",
  iconRole: "1398382673491398756",
  iconRoleWhite: "1398382675630489752",
  iconChannelText: "1398382555929247976",
  iconChannelTextWhite: "1398382557841719367",
  iconDISCON: "1398382571762749452",
  iconAntispam: "1398382523175796887",
  iconFilter: "1455545113597050890",
  iconHoneypot: "1499431125334888579",
  iconSlowmode: "1406763293829500938",
  iconSlowmodeWhite: "1406763295997689936",
  iconAuthManager: "1473448366317900011",
  iconDmlock: "1398382582584049815",
  iconDmlockWhite: "1398382584584474634",
  iconToggleEnable: "1398382720840630412",
  iconToggleDisable: "1398382718827364475",
  iconMembers: "1398382630688391198",
  iconRefreshWhite: "1398382662598787134",
  iconReset: "1398382669112410163",
  iconResetWhite: "1398382670735605844",
  iconCreateWhite: "1398382565060251792",
  iconEnable: "1398382593447034911",
  iconEnableWhite: "1398382595519156345",
  iconDisable: "1398382576393130056",
  iconDisableWhite: "1398382578397872240",
  iconSanctions: "1398382679694770237",
  iconSanctionsWhite: "1398382681439604747",
  iconSanctionsBAN: "1451994040202432682",
  iconSanctionsBANTemp: "1451994047093674005",
  iconSanctionsSOFTBAN: "1451994049119522838",
  iconSanctionsKICK: "1451994048012488892",
  iconSanctionsJAIL: "1454171922429378723",
  iconSanctionsJAILTemp: "1454171923863834654",
  iconSanctionsMUTE: "1469442639924433024",
  iconSanctionsTIMEOUT: "1451994054286901430",
  iconSanctionsWARN: "1451994057369845873",
  iconInvite: "1484572091054428374",
  iconLocking: "1398382621918236828",
  iconView: "1522844880366338078",
  iconViewWhite: "1451994061555761387",
  iconDisplay: "1484589023791022171",
  iconTrash: "1412742710095511562",
  iconSearch: "1409623281719574672",
  iconSearchWhite: "1409623284755988632",
  iconFail: "1398382599654867054",
  iconLogs: "1398382626099695627",
  iconLogsWhite: "1398382628599763125",
  iconCancel: "1473751418178375734",
  iconSpam: "1398382694915903589",
  iconLinks: "1398382619539931267",
  iconBots: "1398382535968297010",
  iconDuplicate: "1398382591060475917",
  iconMentions: "1398382635016785930",
  iconCommand: "1407131770901631067",
  iconLoader: "1558103545255821362",
  iconLoaderWhite: "1558103546363252756",
  iconActivity: "1558103542391250964",
  iconSucceed: "1466760598972006496",
  iconScamLens: "1516713500519694366",
  iconScamLensWhite: "1516713501404434473",
  iconHide: "1526445391170506860",
  iconPlus: "1529398638147797036",
  iconMinus: "1529398637199888424",
  iconUser: "1451994060561715453",
  iconInfo: "1398382613026181140",
  iconTag: "1398382705472962671",
  iconTagWhite: "1398382707284644032",
  iconReport: "1398382664276246550",
  iconReportWhite: "1398382666675650600",
  iconSuggestWhite: "1398382698850160812",
  iconSanctionStatusACTIVE: "1470135256337219767",
  iconSanctionStatusCANCELED: "1451994050583593102",
  iconLanguageFR: "1531310537168916541",
  iconLanguageEN: "1531310534681559151",
  iconLanguageES: "1531310535851905085",
  iconLanguageDE: "1531310532827811892",
  iconLanguagePT: "1531310538292858900",
  iconLanguageIT: "1546097453839683625",
  iconLanguageTR: "1546097458558279700",
  iconLanguageVI: "1546097459221241898",
  iconLanguageJA: "1546097455131656223",
  iconLanguagezh_CN: "1546098312741134397",
  iconLanguagezh_TW: "1546098313760215131",
  colorRedProtect: "1483906785164394687",
  colorOrangeProtect: "1483906783373426821",
  colorYellowProtect: "1483906786338537664",
  colorGreenProtect: "1483906781188063407",
  colorBlueProtect: "1483906780001079356",
  colorIndigoProtect: "1483906782412931233",
  colorPurpleProtect: "1483906784509956239",
  colorWhiteProtect: "1547268201040314374",
  iconBeta: "1484589021035364402",
  iconBlock: "1457744777822077136",
  iconChecking: "1398382560437866506",
  iconCustomize: "1484589022281076777",
  iconExportWhite: "1398382597431759039",
  iconHeart: "1398382606420148350",
  iconImportWhite: "1455545115656585446",
  iconRestricted: "1412742703434698818",
  iconSanctionsUNBAN: "1451994055054721208",
  iconSanctionsUNJAIL: "1454170813950595084",
  iconSanctionsUNMUTE: "1469442641144975575",
  iconSanctionsUNTIMEOUT: "1451994056233058386",
  iconSetup: "1398382692537471090",
  iconSuccess: "1398382696677380178",
  iconCreate: "1398382562900054166",
  iconGrade: "1473448367173537855",
  iconAMManager: "1473448365294489670",
  iconAMManagerWhite: "1473631638213623808",
  iconWebhook: "1473448368532357351",
  iconAuditLogs: "1471316981654491156",
  iconID: "1398382611042275368",
  iconPin: "1473448576314118254",
  iconValidate: "1473751419269021779",
  iconButtonFirst: "1411286270319267871",
  iconButtonPrevious: "1411286276136636458",
  iconButtonNext: "1411286274232549417",
  iconButtonLast: "1411286272315752522",
  securityRankS: "1471294407524225275",
  securityRankA: "1471294402340327597",
  securityRankB: "1471294403271458910",
  securityRankC: "1471294404005331208",
  securityRankD: "1471294405297049750",
  securityRankE: "1471294405888708640",
  fontGGsans: "1483797751216078959",
  fontTempo: "1483797756370882673",
  fontSakura: "1483797755297005661",
  fontJellybean: "1483797752201871492",
  fontModern: "1483797754429046926",
  fontMedieval: "1483797753468424303",
  font8Bit: "1483797750222159876",
  fontVampyre: "1483797757608202360",
  effectSolid: "1483821899107536976",
  effectNeon: "1483821897237139526",
  effectToon: "1483821900147855381",
  effectPop: "1483821897769816176",
  icon0: "1473707852995756193",
  icon1: "1473707854082085007",
  icon2: "1473707854979535082",
  icon3: "1473707855604486257",
  icon4: "1473707856799731784",
  icon5: "1473707857919873253",
  icon6: "1473707859446468758",
  icon7: "1473707860629127395",
  icon8: "1473707861250146305",
  icon9: "1473707862646718662",
} as const;

export type IconName = keyof typeof IDS;

const ANIMATED = new Set<IconName>(["iconPremium", "iconAlert"]);

/* Emoji dans un texte markdown. */
export const i = (name: IconName) =>
  `![](https://cdn.discordapp.com/emojis/${IDS[name]}.${ANIMATED.has(name) ? "gif" : "webp"})`;

/* Emoji d'un composant (bouton, option). */
export const ce = (name: IconName) => ({ name, id: IDS[name], ...(ANIMATED.has(name) ? { animated: true } : {}) });

export const COLORS = {
  default: 0xd35f5f,
  error: 0xe92427,
  warn: 0xe59400,
  premium: 0xffab22,
  success: 0x57f287,
  discon: { 5: 0x448ad6, 4: 0x57f287, 3: 0xe5b117, 2: 0xe92427, 1: 0xffffff } as Record<number, number>,
};

/* --- Composants --- */

type Style = 1 | 2 | 3 | 4 | 5;

export interface BtnOpts {
  label?: string;
  style?: Style;
  emoji?: IconName;
  id?: string;
  url?: string;
  disabled?: boolean;
}

let autoId = 0;
export function btn({ label, style = 2, emoji, id, url, disabled }: BtnOpts): Component {
  return {
    type: 2,
    style,
    ...(label ? { label } : {}),
    custom_id: id ?? `v2-${autoId++}`,
    ...(url ? { url } : {}),
    ...(emoji ? { emoji: ce(emoji) } : {}),
    ...(disabled ? { disabled: true } : {}),
  };
}

export const text = (content: string): Component => ({ type: 10, content });
export const sep = (divider = true): Component => ({ type: 13, divider, spacing: 1 });
export const row = (...components: Component[]): Component => ({ type: 1, components });
export const section = (content: string, accessory: Component): Component => ({
  type: 9,
  components: [{ type: 10, content }],
  accessory: accessory as never,
});
export const container = (components: Component[], accent: number = COLORS.default): Component => ({
  type: 17,
  accent_color: accent,
  components,
});

export interface Opt {
  label: string;
  description?: string;
  emoji?: IconName;
  default?: boolean;
}

export const opts = (list: Opt[]): SelectOption[] =>
  list.map((o, n) => ({
    label: o.label,
    value: String(n),
    ...(o.description ? { description: o.description } : {}),
    ...(o.emoji ? { emoji: ce(o.emoji) } : {}),
    ...(o.default ? { default: true } : {}),
  }));

export const select = (placeholder: string, list: Opt[], disabled?: boolean): Component =>
  row({ type: 3, custom_id: `v2-sel-${autoId++}`, placeholder, options: opts(list), ...(disabled ? { disabled } : {}) });

export const channelSelect = (placeholder: string, values?: string[], disabled?: boolean): Component =>
  row({ type: 8, custom_id: `v2-ch-${autoId++}`, placeholder, values, disabled });
export const roleSelect = (placeholder: string, values?: string[], disabled?: boolean): Component =>
  row({ type: 6, custom_id: `v2-role-${autoId++}`, placeholder, values, disabled });
export const userSelect = (placeholder: string, values?: string[], disabled?: boolean): Component =>
  row({ type: 5, custom_id: `v2-user-${autoId++}`, placeholder, values, disabled });

export const custom = (): Opt => ({ label: t("custom", "Valeur personnalisée"), emoji: "iconCustomWhite" });

/* --- Boutons standards --- */

export const configure = (id?: string, emoji: IconName = "iconSettingsWhite") =>
  btn({ label: t("configure", "Configurer"), emoji, id });
export const edit = (id?: string, emoji: IconName = "iconCustomWhite", style: Style = 1) =>
  btn({ label: t("edit", "Modifier"), emoji, id, style });
export const toggle = (on: boolean, id?: string, disabled?: boolean) =>
  btn({
    label: on ? t("disable", "Désactiver") : t("enable", "Activer"),
    emoji: on ? "iconToggleEnable" : "iconToggleDisable",
    id,
    disabled,
  });
export const reset = (id?: string, disabled?: boolean) =>
  btn({ label: t("reset", "Réinitialiser"), style: 4, emoji: "iconResetWhite", id, disabled });
export const createOne = (id?: string) => btn({ label: t("createOne", "En créer un pour moi"), style: 1, emoji: "iconCreateWhite", id });
export const refresh = (id?: string) => btn({ label: t("refresh", "Actualiser"), style: 1, emoji: "iconRefreshWhite", id });

/* Réglage : titre, valeur citée, indice, et le bouton d'action en accessoire. */
export function setting(icon: IconName, name: string, value: string | string[] | null, accessory: Component, hint?: string) {
  const lines = [`### ${i(icon)} ${name}`];
  if (value !== null) for (const v of Array.isArray(value) ? value : [value]) lines.push(`> ${v}`);
  if (hint) lines.push(`-# ${hint}`);
  return section(lines.join("\n"), accessory);
}

export function heading(icon: IconName, name: string, hint?: string) {
  return text(`### ${i(icon)} ${name}${hint ? `\n-# ${hint}` : ""}`);
}

/* --- Écran --- */

export type Tab = "general" | "arrivals" | "protection" | "moderation" | "utilities";

export const TAB_LABEL: Record<Tab, () => string> = {
  general: () => t("tab.general", "Général"),
  arrivals: () => t("tab.arrivals", "Arrivées"),
  protection: () => t("tab.protection", "Protection"),
  moderation: () => t("tab.moderation", "Modération"),
  utilities: () => t("tab.utilities", "Utilitaires"),
};

/* Étape du fil d'Ariane : libellé et écran cible (la dernière est l'écran courant). */
export type Crumb = { label: string; id?: string };

export interface ScreenOpts {
  title: string;
  icon?: IconName;
  desc?: string;
  /* Bouton en accessoire du titre (interrupteur général, réinitialiser…). */
  accessory?: Component;
  tab?: Tab;
  crumbs?: Crumb[];
  body?: Component[];
  rows?: Component[];
  /* Écran ouvert par commande : ni fil d'Ariane ni Retour. */
  command?: boolean;
  docs?: string | false;
  extraNav?: Component[];
  notices?: Array<{ content: string; accent?: number; buttons?: Component[] }>;
  accent?: number;
  below?: Component[];
}

export const SUPPORT_URL = "https://discord.gg/raidprotect";
export const docsUrl = (suffix: string) => `https://raidprotect.bot/docs/beta/${suffix}`;

export function navRow(back: string | null, docs?: string | false, extra: Component[] = []) {
  return row(
    ...(back !== null ? [btn({ emoji: "iconPreviousWhite", id: back })] : []),
    btn({ label: t("support", "Serveur Support"), style: 5, emoji: "iconSupportWhite", url: SUPPORT_URL }),
    ...(docs ? [btn({ label: "Documentation", style: 5, emoji: "iconDocsWhite", url: docsUrl(docs) })] : []),
    ...extra
  );
}

export function breadcrumb(tab: Tab, crumbs: Crumb[]) {
  return row(
    btn({ label: TAB_LABEL[tab](), emoji: "iconFolderOpenBlurple", id: `home:${tab}` }),
    ...crumbs.map((c, n) =>
      n === crumbs.length - 1
        ? btn({ label: c.label, style: 1, emoji: "iconChevronRightWhite", disabled: true })
        : btn({ label: c.label, emoji: "iconChevronRightBlurple", id: c.id })
    )
  );
}

export function screen(o: ScreenOpts): Component[] {
  const head = `## ${o.icon ? `${i(o.icon)} ` : ""}${o.title}${o.desc ? `\n\n${o.desc}` : ""}`;
  const crumbs = o.crumbs ?? [{ label: o.title }];
  const back = crumbs.length > 1 ? crumbs[crumbs.length - 2].id ?? `home:${o.tab}` : `home:${o.tab}`;
  const body = o.body ?? [];
  const rows = o.rows ?? [];
  const inner: Component[] = [
    o.accessory ? section(head, o.accessory) : text(head),
    ...(!o.command && o.tab ? [breadcrumb(o.tab, crumbs)] : []),
    ...(body.length ? [sep(), ...body] : []),
    ...(rows.length ? [sep(body.length === 0), ...rows] : []),
    sep(),
    navRow(o.command ? null : back, o.docs, o.extraNav),
  ];
  return [
    ...(o.notices ?? []).map((n) =>
      container([text(n.content), ...(n.buttons?.length ? [row(...n.buttons)] : [])], n.accent ?? COLORS.error)
    ),
    container(inner, o.accent),
    ...(o.below ?? []),
  ];
}

/* Encart affiché en tête d'un écran réservé au premium. */
export const premiumNotice = (content: string) => ({ content: `${i("iconPremium")} ${content}`, accent: COLORS.premium });

export const permissionNotice = (perms: string[]) => ({
  content: `${i("iconAlert")} :no_entry_sign: **${t(
    "perm.title",
    "RaidProtect a besoin des permissions suivantes pour cette fonctionnalité :"
  )}**\n${perms.map((p) => `\`${p}\``).join(", ")}\n${t(
    "perm.hint",
    "Accordez-les à son rôle dans Paramètres du serveur > Rôles, ou donnez-lui la permission `Administrateur`."
  )}`,
});
