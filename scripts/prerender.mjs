// Prerendering / SSG-Script.
//
// Läuft NACH dem normalen Build (siehe package.json "postbuild") und
// macht aus der leeren React-SPA statische, fertig gefüllte HTML-Dateien
// - eine pro Sprache und Unterseite. Suchmaschinen und Social-Media-Bots,
// die kein JavaScript ausführen, bekommen dadurch echten Inhalt statt
// eines leeren <div id="root"></div>.
//
// Ablauf:
//   1. "vite build"                                  -> dist/            (Client-Bundle, normale Seite)
//   2. "vite build --ssr src/entry-server.jsx"        -> dist-ssr/        (Server-Bundle, nur für dieses Script)
//   3. dieses Script:
//        - rendert jede Route serverseitig (React SSR)
//        - baut daraus fertige index.html-Dateien direkt in dist/
//        - löscht dist-ssr/ wieder (wird nicht deployed)
//
// Wird automatisch von "npm run build" ausgelöst (postbuild-Script),
// Vercel braucht dafür keine Konfigurationsänderung.

import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { BASE_ROUTES, LANGS, withLang } from "../src/lib/i18n.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-ssr", "entry-server.js");

async function main() {
  if (!existsSync(ssrEntry)) {
    console.error(
      `Prerender: SSR-Bundle nicht gefunden unter ${ssrEntry}.\n` +
      `Vorher "vite build --ssr src/entry-server.jsx --outDir dist-ssr" ausführen.`
    );
    process.exit(1);
  }

  const template = await readFile(path.join(distDir, "index.html"), "utf-8");
  const { render } = await import(pathToFileUrl(ssrEntry));

  // Alle URLs sammeln: jede Basis-Route in jeder Sprache.
  const urls = [];
  for (const lang of LANGS) {
    for (const basePath of BASE_ROUTES) {
      urls.push(withLang(lang, basePath));
    }
  }

  let ok = 0;
  for (const url of urls) {
    try {
      const { html, helmet } = render(url);
      const finalHtml = injectIntoTemplate(template, html, helmet);
      const outFile = urlToOutputFile(url);
      await mkdir(path.dirname(outFile), { recursive: true });
      await writeFile(outFile, finalHtml, "utf-8");
      ok++;
    } catch (err) {
      console.error(`Prerender: Fehler bei ${url}:`, err);
      process.exitCode = 1;
    }
  }

  console.log(`Prerender: ${ok}/${urls.length} Seiten erfolgreich erzeugt.`);

  // Server-Bundle war nur ein Werkzeug für dieses Script, nicht deployen.
  await rm(path.join(root, "dist-ssr"), { recursive: true, force: true });
}

function injectIntoTemplate(template, appHtml, helmet) {
  let out = template;

  // Fallback-Title/-Description aus dem Template entfernen, damit pro
  // Seite kein doppelter <title> im HTML landet.
  out = out.replace(/<title>[\s\S]*?<\/title>\s*/, "");
  out = out.replace(/<meta\s+name="description"[\s\S]*?\/>\s*/, "");

  // Von react-helmet-async gesammelte <head>-Tags einsetzen: Title,
  // Meta-Description, Canonical, hreflang-Alternates, JSON-LD-Schema.
  const headHtml = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join("\n  ");
  out = out.replace("<!--app-head-->", headHtml);

  // html-lang-Attribut passend zur Sprache setzen.
  out = out.replace(
    '<html lang="hr">',
    `<html ${helmet.htmlAttributes.toString()}>`
  );

  // Serverseitig gerenderten Inhalt einsetzen.
  out = out.replace("<!--app-html-->", appHtml);

  return out;
}

function urlToOutputFile(url) {
  if (url === "/") {
    return path.join(distDir, "index.html");
  }
  return path.join(distDir, url.slice(1), "index.html");
}

function pathToFileUrl(p) {
  return "file://" + p.replace(/\\/g, "/");
}

main();
