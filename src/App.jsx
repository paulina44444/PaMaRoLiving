import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import FooterBar from "./components/FooterBar";
import SeoLinks from "./components/SeoLinks";
import ScrollToTop from "./components/ScrollToTop";
import { BASE_ROUTES, LANGS } from "./lib/i18n";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

// Basis-Routen (ohne Sprach-Präfix) kommen zentral aus src/lib/i18n.js,
// damit Router und Prerender-Script (scripts/prerender.mjs) immer
// dieselben Seiten kennen. Kroatisch läuft an der Wurzel, Deutsch/
// Englisch werden weiter unten automatisch mit /de und /en gespiegelt.
const componentsByPath = {
  "/": Home,
  "/about": About,
  "/services": Services,
  "/services/property-care": Service2,
  "/services/carefree-stay": Service3,
  "/services/interior-design": Service4,
  "/contact": Contact,
  "/legal": Legal,
};

const pageRoutes = BASE_ROUTES.map((path) => ({
  path,
  Component: componentsByPath[path],
}));

const langs = LANGS;

export default function App() {
  return (
    <div className="flex flex-col bg-[#f7f2ed]">
      <ScrollToTop />
      <Navigation />
      <SeoLinks />

      <main className="pt-28 md:pt-36">
        <Routes>
          {langs.flatMap((lang) =>
            pageRoutes.map(({ path, Component }) => {
              const routePath =
                lang === "hr" ? path : `/${lang}${path === "/" ? "" : path}`;
              return (
                <Route
                  key={`${lang}-${path}`}
                  path={routePath}
                  element={<Component lang={lang} />}
                />
              );
            })
          )}
        </Routes>
      </main>

      <FooterBar />
    </div>
  );
}
