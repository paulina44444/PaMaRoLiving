import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLabels = {
  hr: ["Početna", "O nama", "Usluge", "Kontakt", "Impressum i privatnost"],
  de: ["Startseite", "Über uns", "Dienstleistungen", "Kontakt", "Impressum & Datenschutz"],
  en: ["Home", "About", "Services", "Contact", "Legal & Privacy"],
};
const navPaths = [
  "/",
  "/about",
  "/services",
  "/references",
  "/contact",
  "/legal",
];

function Navigation({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

const link = "text-[15px] tracking-[0.08em] hover:text-[#c6a27b] transition";

  return (
    <header className="w-full bg-[#f7f2ed] border-b border-[#c6a27b] fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
<Link to="/" className="flex items-center">
  <img
    src="/logo.png"
    alt="PaMaRo Living"
    className="h-20 w-auto opacity-95"
  />
</Link>

   <nav className="hidden md:flex gap-7 text-[#5f6a70] items-center">
          {navLabels[lang].map((label, i) => (
<Link
  key={i}
  to={navPaths[i]}
  className={link}
>
  {label}
</Link>
          ))}

          {/* Language switch */}
          <div className="flex gap-2 ml-6 text-xs">
            <button onClick={() => setLang("hr")} className={lang === "hr" ? "font-semibold" : "opacity-60"}>HR</button>
            <button onClick={() => setLang("de")} className={lang === "de" ? "font-semibold" : "opacity-60"}>DE</button>
            <button onClick={() => setLang("en")} className={lang === "en" ? "font-semibold" : "opacity-60"}>EN</button>
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
  to={navPaths[i]}
  className="text-left py-3 text-xl border-b border-[#f1ebe6]"
  onClick={() => setMenuOpen(false)}
>
  {label}
</Link>
    ))}

<div className="flex gap-4 pt-2">
  <button
    onClick={() => {
      setLang("hr");
      setMenuOpen(false);
    }}
  >
    HR
  </button>

  <button
    onClick={() => {
      setLang("de");
      setMenuOpen(false);
    }}
  >
    DE
  </button>

  <button
    onClick={() => {
      setLang("en");
      setMenuOpen(false);
    }}
  >
    EN
  </button>
</div>
  </div>
)}
</header>
  );
}

export default Navigation;