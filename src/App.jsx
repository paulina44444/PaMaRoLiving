import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import FooterBar from "./components/FooterBar";
import SeoLinks from "./components/SeoLinks";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

// Basis-Routen (ohne Sprach-Präfix). Kroatisch läuft an der Wurzel,
// Deutsch/Englisch werden weiter unten automatisch mit /de und /en
// gespiegelt (siehe src/lib/i18n.js).
const pageRoutes = [
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/services", Component: Services },
  { path: "/services/property-care", Component: Service2 },
  { path: "/services/carefree-stay", Component: Service3 },
  { path: "/services/interior-design", Component: Service4 },
  { path: "/contact", Component: Contact },
  { path: "/legal", Component: Legal },
];

const langs = ["hr", "de", "en"];

export default function App() {
  return (
    <div className="flex flex-col bg-[#f7f2ed]">
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
