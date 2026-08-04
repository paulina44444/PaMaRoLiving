import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { BASE_URL, LANGS, absoluteUrl, currentLang, stripLangPrefix } from "../lib/i18n";

// Zusätzliche <head>-Tags, die auf jeder Seite gebraucht werden:
// - canonical URL (self-referencing)
// - hreflang alternate links für hr/de/en + x-default
// - das html-lang Attribut passend zur aktuell angezeigten Sprache
// - strukturierte Daten (JSON-LD) fürs lokale Google-Ranking
//
// Wird einmal zentral in App.jsx gerendert, react-helmet-async führt
// das automatisch mit den Helmet-Tags der einzelnen Seiten zusammen.
function SeoLinks() {
  const location = useLocation();
  const lang = currentLang(location.pathname);
  const basePath = stripLangPrefix(location.pathname);

  const descriptions = {
    hr: "Briga o nekretnini, uređenje interijera i osobna podrška vlasnicima nekretnina u Dalmaciji.",
    de: "Immobilienbetreuung, Inneneinrichtung und persönliche Unterstützung für Immobilieneigentümer in Dalmatien.",
    en: "Property care, interior design and personal support for property owners in Dalmatia.",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PaMaRo Living",
    description: descriptions[lang],
    image: `${BASE_URL}/logo.png`,
    url: absoluteUrl(lang, basePath),
    telephone: "+385998377935",
    email: "pamaroliving@hotmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Zapadna ulica 36",
      addressLocality: "Pisak",
      postalCode: "21318",
      addressCountry: "HR",
    },
    areaServed: ["Dalmatia", "Makarska Riviera", "Omiš Riviera"],
    sameAs: ["https://instagram.com/pamaro_living"],
  };

  return (
    <Helmet>
      <html lang={lang} />
      <link rel="canonical" href={absoluteUrl(lang, basePath)} />
      {LANGS.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={absoluteUrl(l, basePath)}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl("hr", basePath)} />
      <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
    </Helmet>
  );
}

export default SeoLinks;
