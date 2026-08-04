// Sprach-Helfer für URL-basiertes Routing.
// Kroatisch (hr) liegt an der Wurzel ("/"), Deutsch und Englisch
// bekommen ein Pfad-Präfix ("/de", "/en"). So kann Google jede
// Sprachversion einzeln indexieren.

export const BASE_URL = "https://www.pamaroliving.com";
export const LANGS = ["hr", "de", "en"];

/** Ermittelt die aktuelle Sprache aus dem URL-Pfad. */
export function currentLang(pathname) {
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "hr";
}

/** Entfernt ein vorhandenes /de oder /en Präfix und liefert den Basis-Pfad. */
export function stripLangPrefix(pathname) {
  if (pathname === "/de" || pathname.startsWith("/de/")) {
    return pathname.slice(3) || "/";
  }
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return pathname.slice(3) || "/";
  }
  return pathname;
}

/** Baut aus einer Sprache + Basis-Pfad den vollständigen internen Link. */
export function withLang(lang, basePath) {
  const prefix = lang === "hr" ? "" : `/${lang}`;
  return `${prefix}${basePath}` || "/";
}

/** Baut die absolute URL (für canonical / hreflang / sitemap). */
export function absoluteUrl(lang, basePath) {
  return `${BASE_URL}${withLang(lang, basePath)}`;
}
