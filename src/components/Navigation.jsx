import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { currentLang, stripLangPrefix, withLang } from "../lib/i18n";

const navLabels = {
  hr: ["Početna", "O nama", "Usluge", "Kontakt", "Impressum i privatnost"],
  de: ["Startseite", "Über uns", "Dienstleistungen", "Kontakt", "Impressum & Datenschutz"],
  en: ["Home", "About", "Services", "Contact", "Legal & Privacy"],
};
const navPaths = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/legal",
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const lang = currentLang(location.pathname);
  const basePath = stripLangPrefix(location.pathname);

const link = "text-[15px] tracking-[0.08em] hover:text-[#c6a27b] transition";

  return (
    <header className="w-full bg-[#f7f2ed] border-b border-[#c6a27b] fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
<Link to={withLang(lang, "/")} className="flex items-center">
  <img
    src="/logo.png"
    alt="PaMaRo Living"
    className="h-24 md:h-28 w-auto"
  />
</Link>

   <nav className="hidden md:flex gap-7 text-[#5f6a70] items-center">
          {navLabels[lang].map((label, i) => (
<Link
  key={i}
  to={withLang(lang, navPaths[i])}
  className={link}
>
  {label}
</Link>
          ))}

          {/* Language switch */}
          <div className="flex gap-2 ml-6 text-xs">
            {["hr", "de", "en"].map((l) => (
              <Link
                key={l}
                to={withLang(l, basePath)}
                className={lang === l ? "font-semibold" : "opacity-60"}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
</nav>

{/* Mobile menu button */}
<button
className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>

</div>
{/* Mobile navigation */}
{menuOpen && (
  <div className="md:hidden bg-white border-t border-[#e8e1dc] px-6 py-6 flex flex-col gap-5 text-[#5f6a70] shadow-lg">
    {navLabels[lang].map((label, i) => (
<Link
  key={i}
  to={withLang(lang, navPaths[i])}
  className="text-left py-3 text-xl border-b border-[#f1ebe6]"
  onClick={() => setMenuOpen(false)}
>
  {label}
</Link>
    ))}

<div className="flex gap-4 pt-2">
  {["hr", "de", "en"].map((l) => (
    <Link
      key={l}
      to={withLang(l, basePath)}
      onClick={() => setMenuOpen(false)}
    >
      {l.toUpperCase()}
    </Link>
  ))}
</div>
  </div>
)}
</header>
  );
}

export default Navigation;
