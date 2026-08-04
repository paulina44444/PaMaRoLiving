import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetData, HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";

// Wird ausschliesslich vom Prerender-Script (scripts/prerender.mjs) in
// Node aufgerufen, nie im Browser ausgeliefert. Rendert die App für eine
// gegebene URL zu einem HTML-String und liefert zusätzlich die von
// react-helmet-async gesammelten <head>-Angaben (Title, Meta, Canonical,
// hreflang, JSON-LD, html-lang) zurück, damit das Prerender-Script sie
// in die statische index.html einsetzen kann.
//
// Wichtig: pro Aufruf ein frisches HelmetData-Objekt statt eines simplen
// {}, weil das Prerender-Script render() mehrfach hintereinander im
// selben Prozess aufruft (einmal pro Seite/Sprache) - mit einem
// einfachen Objekt als Context geht das Ergebnis bei manchen Seiten
// verloren (siehe react-helmet-async SSR-Dokumentation).
export function render(url) {
  const helmetData = new HelmetData({});

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetData.context}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>
  );

  const { helmet } = helmetData.context;

  return { html, helmet };
}
