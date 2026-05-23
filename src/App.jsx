import React, { useState } from "react";

import {
Menu,
X,
Phone,
Mail,
MapPin,
ShieldCheck,
Search,
Leaf,
Wrench,
CloudLightning,
Key,
FileText,
House,
Sun,
Palette,
ClipboardList,
Sparkles,
Star,
Map,
Package,
Eye,
Trees,
CloudRain,
Calendar,
User,
Heart,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

/* ================= SIMPLE LANGUAGE STATE ================= */
const navLabels = {
  hr: ["Početna", "O nama", "Usluge", "Kontakt", "Impressum i privatnost"],
  de: ["Startseite", "Über uns", "Dienstleistungen", "Kontakt", "Impressum & Datenschutz"],
  en: ["Home", "About", "Services", "Contact", "Legal & Privacy"],
};

function Navigation({ setPage, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const link = "text-lg tracking-wide hover:text-[#c6a27b] transition";

  return (
    <header className="w-full bg-[#f7f2ed] border-b border-[#c6a27b] fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <button
  onClick={() => setPage("home")}
  className="flex items-center"
>
  <img
    src="/logo.png"
    alt="PaMaRo Living"
    className="h-20 w-auto opacity-95"
  />
</button>

   <nav className="hidden md:flex gap-10 text-[#5f6a70] items-center">
          {navLabels[lang].map((label, i) => (
            <button
              key={i}
              className={link}
              onClick={() => setPage(["home", "about", "services", "contact", "legal"][i])}
            >
              {label}
            </button>
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
      <button
        key={i}
        className="text-left py-3 text-xl border-b border-[#f1ebe6]"
        onClick={() => {
          setPage(["home", "about", "services", "contact", "legal"][i]);
          setMenuOpen(false);
        }}
      >
        {label} 
      </button>
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

function FooterBar({ setPage }) {
  return (
<footer className="bg-[#2f3a40] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">

        {/* obere 3 Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_auto_1fr_auto_0.6fr] gap-8 md:gap-10 items-start md:items-center text-sm max-w-5xl mx-auto text-left justify-items-start md:justify-items-stretch">

          {/* Adresse */}
<div className="flex justify-start pl-0 md:pl-10">

<a
  href="https://maps.google.com/?q=Zapadna+Ulica+36+Pisak+Croatia"
  target="_blank"
  rel="noreferrer"
  className="flex items-start gap-3 hover:text-[#c6a27b] transition"
>

<MapPin
  size={20}
  className="text-[#c6a27b] shrink-0 self-center"
/>

    <div className="leading-8 text-left">

      <div className="font-semibold mb-1">
        PaMaRo Living
      </div>

      Paula Raimondo<br />
      Zapadna Ulica 36<br />
      21318 Pisak<br />
      Croatia

    </div>
  </a>

</div>

<div className="hidden md:block w-px h-24 bg-white/20"></div>


{/* Kontakt */}
<div className="space-y-4 flex flex-col items-start text-left">

  <div className="flex items-center justify-start md:justify-start gap-3">
    <Phone size={18} className="text-[#c6a27b]" />
    <a
      href="tel:+385998377935"
      className="hover:text-[#c6a27b] transition"
    >
      +385 99 837 79 35
    </a>
  </div>

  <div className="flex items-center justify-start md:justify-start gap-3">
    <Mail size={18} className="text-[#c6a27b]" />
    <a
      href="mailto:pamaroliving@hotmail.com"
      className="hover:text-[#c6a27b] transition"
    >
      pamaroliving@hotmail.com
    </a>
  </div>

</div>

<div className="hidden md:block w-px h-24 bg-white/20"></div>

{/* Social Media */}
<div className="flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-4 pt-2">

  <a
    href="https://instagram.com/pamaro_living"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 text-[#c6a27b] hover:text-white transition duration-300"
  >
    <FaInstagram size={18} />
    <span className="text-white">Instagram</span>
  </a>

  <a
    href="https://facebook.com/DEINNAME"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 text-[#c6a27b] hover:text-white transition duration-300"
  >
    <FaFacebookF size={15} />
    <span className="text-white">Facebook</span>
  </a>

</div>
        </div>

        {/* Copyright */}
{/* Copyright */}
<div className="border-t border-[#c6a27b]/40 mt-8 pt-5 flex items-center justify-center gap-4 text-xs text-gray-300">

  <button
    onClick={() => {
      setPage("legal");
      window.scrollTo(0, 0);
    }}
    className="hover:text-[#c6a27b] transition"
  >
    Impressum & Datenschutz
  </button>

  <span className="opacity-40">|</span>

  <div>
    © {new Date().getFullYear()} PaMaRo Living. All rights reserved.
  </div>

</div>

      </div>
    </footer>
  );
}

/* ================= HOME ================= */
function Home({ lang, setPage }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

const cards = isHR
  ? [
      [
        "Briga o nekretnini",
        "Redoviti nadzor, organizacija i prisutnost tijekom cijele godine.",
          "service2"
      ],

      [
        "Bezbrižan boravak",
        "Kako bi vas pri dolasku sve čekalo spremno i bez komplikacija.",
        "service3"
      ],

      [
        "Uređenje interijera",
        "Skladni interijeri sa stilom, osjećajem za prostor i atmosferu.",
          "service4"
      ],
    ]
  : isEN
  ? [
      [
        "Property Care",
        "Regular inspections and reliable local coordination throughout the year.",
                  "service2"
      ],

      [
        "Carefree Stay",
        "Preparation and organisation before and after your stay.",
                "service3"
      ],

      [
        "Interior Styling",
        "Thoughtful interior concepts with a sense for harmony and atmosphere.",
                  "service4"
      ],
    ]
: [
    [
      "Immobilienbetreuung",
      "Regelmässige Kontrollen und Betreuung vor Ort.",
      "service2"
    ],

    [
      "Sorgenfreier Aufenthalt",
      "Vorbereitung und Organisation vor und während Ihres Aufenthalts.",
      "service3"
    ],

    [
      "Inneneinrichtung",
      "Individuelle Raumgestaltung mit Sinn für Stil, Harmonie und Atmosphäre.",
      "service4"
    ],
  ];

return (
  <div className="bg-[#f7f2ed] text-[#2f3a40]">
  
    {/* HERO IMAGE */}
<section className="relative h-[68vh] w-full overflow-hidden">
      <img
        src="/hero.jpg"
        alt="Luxury property in Dalmatia"
        className="absolute inset-0 w-full h-full object-cover object-[center_65%]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Text */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center pt-12">
        <div className="max-w-3xl text-white">
<h1 className="text-3xl md:text-5xl font-serif leading-tight">
            {isHR
              ? "Vaša nekretnina, naša briga."
              : isEN
              ? "Your property, our care."
              : "Ihre Immobilie, unsere Verantwortung."}
          </h1>

          <p className="mt-6 text-xl md:text-xl text-white/90">
            {isHR
              ? "Za dobar osjećaj, čak i kada niste ovdje."
              : isEN
              ? "So you can always feel at ease, even when you are away."
              : "Für ein gutes Gefühl – auch wenn Sie nicht vor Ort sind."}
          </p>
        </div>
      </div>
    </section>

      <section className="py-8 md:py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
{cards.map(([title, text, page]) => (
  <button
  key={title}
  onClick={() => setPage(page)}
  className="bg-white p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 w-full max-w-md text-center min-h-[260px] flex flex-col justify-center"
>

  <div className="flex justify-center mb-5">
    {page === "service2" ? (
      <House size={20} className="text-[#c6a27b]" />
    ) : page === "service3" ? (
      <Sun size={20} className="text-[#c6a27b]" />
    ) : (
      <Palette size={20} className="text-[#c6a27b]" />
    )}
  </div>

  <h3 className="font-serif text-xl mb-4">{title}</h3>

  <p className="text-sm text-[#6b7478] leading-relaxed">
    {text}
  </p>

</button>
          ))}

            </div>
      </section>

      <section className="relative w-full h-[320px] md:h-[460px] overflow-hidden">

  {/* Bild */}
  <img
    src="/sea.jpg"
    alt="Dalmatian coast"
    className="absolute inset-0 w-full h-full object-cover object-[center_65%]"
  />

  {/* Heller Overlay */}
  <div className="absolute inset-0 bg-[#efe7df]/65" />

  {/* Text */}
  <div className="relative z-10 flex items-center justify-center h-full px-6 py-12 text-center">
    <div className="max-w-3xl">

      <p className="italic text-xl md:text-4xl font-serif text-[#2f3a40] leading-relaxed">
        {isHR
    ? "„Mediteranski način života počinje osjećajem mira i lakoće.“"
    : isEN
    ? "“A Mediterranean lifestyle begins with calm and simplicity.”"
    : "„Mediterranes Lebensgefühl beginnt mit Ruhe und Leichtigkeit.“"}
      </p>



    </div>
  </div>
</section>

<section className="pt-10 pb-0 px-6 max-w-3xl mx-auto text-center">
        <h3 className="font-serif italic text-2xl mb-6">
          {isHR ? "Za koga smo tu" : isEN ? "Who We Are Here For" : "Für wen wir da sind"}
        </h3>
        <div className="w-24 h-[1px] bg-[#c6a27b] mx-auto mb-10"></div>

<p className="text-[#5f6a70]">
  {isHR
    ? "Za vlasnike koji cijene povjerenje, pouzdanost i osobnu brigu o svojoj nekretnini."
    : isEN
    ? "For owners who value trust, reliability and personal care for their property."
    : "Für Eigentümer, die Wert auf Vertrauen, Verlässlichkeit und eine persönliche Betreuung ihrer Immobilie legen."}
</p>

<p className="mt-3 text-[#5f6a70]">
  {isHR
    ? "Bilo da se radi o kući za odmor, drugom domu ili osobnom mjestu za opuštanje – o vašoj nekretnini u Dalmaciji brinemo s pažnjom, diskrecijom i visokim standardom kvalitete."
    : isEN
    ? "Whether it is a holiday home, second residence or personal retreat – we care for your property in Dalmatia with attention, discretion and high quality standards."
    : "Ob Ferienimmobilie, Zweitwohnsitz oder persönlicher Rückzugsort – wir kümmern uns mit Sorgfalt, Diskretion und einem hohen Qualitätsanspruch um Ihre Immobilie in Dalmatien."}
</p>

<p className="mt-6 text-[#5f6a70]">
  {isHR
    ? "Kontaktirajte nas. Savjetujemo vas bez obveze na njemačkom, hrvatskom, engleskom, talijanskom, španjolskom ili francuskom jeziku te zajedno pronalazimo najbolje rješenje za vašu nekretninu."
    : isEN
    ? "Contact us. We will gladly advise you without obligation in German, Croatian, English, Italian, Spanish or French and together find the right solution for your property."
    : "Kontaktieren Sie uns. Wir beraten Sie unverbindlich auf Deutsch, Kroatisch, Englisch, Italienisch, Spanisch oder Französisch und finden gemeinsam die passende Lösung für Ihre Immobilie."}
</p>
      </section>
      <div className="pb-24" />
    </div>
  );
}

/* ================= SERVICES OVERVIEW ================= */
function Services({ setPage, lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";
  return (
<section className="bg-[#f7f2ed]">


{/* HERO */}
<section className="relative overflow-hidden">

  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

    {/* LEFT */}
    <div className="flex items-center px-8 md:px-16 py-14 bg-[#f3ede7]">

      <div className="max-w-xl">

        <h1 className="font-serif text-5xl md:text-6xl text-[#2f3a40] leading-tight mb-8">
          {isHR
            ? "Naše usluge"
            : isEN
            ? "Our Services"
            : "Unsere Dienstleistungen"}
        </h1>

        <div className="w-20 h-[1px] bg-[#c6a27b] mb-8"></div>

        <p className="text-[#4d5960] text-lg leading-relaxed">
          {isHR
            ? "Sve što je vašoj nekretnini potrebno – pouzdano, diskretno i profesionalno."
            : isEN
            ? "Everything your property needs – reliable, discreet and professional."
            : "Alles, was Ihre Immobilie braucht – zuverlässig, diskret und professionell."}
        </p>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative min-h-[260px] lg:min-h-full">

      <img
        src="/services.jpg"
        alt="Services"
className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-105"
      />

<div className="absolute inset-0 bg-gradient-to-r from-[#f7f2ed] via-[#f7f2ed]/40 to-transparent"></div>

    </div>

  </div>

</section>

  {/* CONTENT */}
  <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <button
      onClick={() => setPage("service2")}
      className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition text-center border border-[#efe7df]"
    >
      <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#f3ebe3] flex items-center justify-center">
        <House size={34} className="text-[#c6a27b]" />
      </div>

<h3 className="font-serif text-3xl text-[#2f3a40] mb-5 whitespace-pre-line">
        {isHR
          ? "Briga o nekretnini"
          : isEN
? "Property Care"
          : "Immobilien-\nbetreuung"}
      </h3>

      <div className="w-10 h-[1px] bg-[#c6a27b] mx-auto mb-5"></div>

      <p className="text-[#6b7478] leading-relaxed">
        {isHR
    ? "Sve što je vašoj nekretnini potrebno – pouzdano, diskretno i profesionalno."
    : isEN
    ? "Everything your property needs – reliable, discreet and professional."
    : "Alles, was Ihre Immobilie braucht – zuverlässig, diskret und professionell."}
      </p>
    </button>

    <button
      onClick={() => setPage("service3")}
className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition text-center border border-[#efe7df]"
    >
      <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#f3ebe3] flex items-center justify-center">
        <Sun size={34} className="text-[#c6a27b]" />
      </div>

      <h3 className="font-serif text-3xl text-[#2f3a40] mb-5">
        {isHR
          ? "Bezbrižan boravak"
          : isEN
          ? "Carefree Stay"
          : "Sorgenfreier Aufenthalt"}
      </h3>

      <div className="w-10 h-[1px] bg-[#c6a27b] mx-auto mb-5"></div>

      <p className="text-[#6b7478] leading-relaxed">
        {isHR
    ? "Priprema doma i organizacija prije i nakon vašeg boravka."
    : isEN
    ? "Preparation and organisation before and after your stay."
    : "Vorbereitung und Organisation vor und nach Ihres Aufenthalts."}
      </p>
    </button>

    <button
      onClick={() => setPage("service4")}
className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition text-center border border-[#efe7df]"
    >
      <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#f3ebe3] flex items-center justify-center">
        <Palette size={34} className="text-[#c6a27b]" />
      </div>

      <h3 className="font-serif text-3xl text-[#2f3a40] mb-5">
        {isHR
          ? "Uređenje interijera"
          : isEN
          ? "Interior Styling"
          : "Stilvolle Einrichtung"}
      </h3>

      <div className="w-10 h-[1px] bg-[#c6a27b] mx-auto mb-5"></div>

      <p className="text-[#6b7478] leading-relaxed">
        {isHR
    ? "Skladni interijeri sa stilom, osjećajem za prostor i atmosferu."
    : isEN
    ? "Thoughtful interior concepts with harmony and atmosphere."
    : "Individuelle Raumgestaltung mit Stil, Harmonie und Atmosphäre."}
      </p>
    </button>

  </div>
    </div>
</section>
  );
}

function ServiceDetail({ title, children }) {
  return (
<section className="pb-24 bg-[#f7f2ed] text-[#4a545a]">
      <h1 className="text-3xl font-serif text-center">{title}</h1>
      {children}
    </section>
  );
}

/* ================= DETAIL TEXTS FULL ================= */
const Service2 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail>

      {/* HERO */}
      <div className="relative w-full h-[520px] overflow-hidden">

        <img
          src="/property-care.jpg"
          alt="Property Care"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

   <div className="max-w-xl text-white text-left">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-left">
                {isHR
                  ? "Briga o nekretnini"
                  : isEN
                  ? "Property Care"
                  : "Immobilienbetreuung"}
              </h1>

              <div className="w-20 h-[2px] bg-[#c6a27b] mb-8"></div>

              <p className="text-xl leading-relaxed text-white/90 max-w-lg">
                {isHR
                  ? "Vaša nekretnina zahtijeva redovitu brigu i izvan sezone. Mi smo na licu mjesta i brinemo se o svemu kako biste svoj dom u svakom trenutku znali u sigurnim rukama."
                  : isEN
                  ? "Your property deserves care and attention even outside the season. We look after inspections, coordination and upkeep discreetly and reliably."
                  : "Ihre Immobilie verdient auch ausserhalb der Saison Aufmerksamkeit und Pflege. Wir kümmern uns zuverlässig um Kontrollen, Organisation und den Werterhalt – diskret, persönlich und mit einem wachsamen Blick fürs Detail."}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-0">

        <div className="flex items-center justify-center gap-6 mb-16">

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

          <h2 className="font-serif text-5xl text-[#2f3a40] text-center">
            {isHR ? "Naše usluge" : isEN ? "Our Services" : "Unsere Leistungen"}
          </h2>

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">

          {/* 1 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <House size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Redoviti obilasci"
                : isEN
                ? "Regular Visits"
                : "Regelmässige Rundgänge"}
            </h3>

            <p>
              {isHR
                ? "Uključujući prozračivanje i puštanje vode."
                : isEN
                ? "Including airing out the property and running water systems."
                : "Inklusive Lüften und Wasser laufen lassen."}
            </p>
          </div>

          {/* 2 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Eye size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Kontrola stanja"
                : isEN
                ? "Property Check"
                : "Hauskontrolle"}
            </h3>

            <p>
              {isHR
                ? "Rano prepoznavanje vlage, oštećenja ili tehničkih problema."
                : isEN
                ? "Early detection of humidity, damage or technical issues."
                : "Früherkennung von Feuchtigkeit, Schäden oder technischen Auffälligkeiten."}
            </p>
          </div>

          {/* 3 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Trees size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Vrt i okućnica"
                : isEN
                ? "Outdoor Areas"
                : "Aussenanlagen"}
            </h3>

            <p>
              {isHR
                ? "Kontrola i jednostavno održavanje vrta i vanjskih prostora."
                : isEN
                ? "Inspection and basic upkeep of gardens and outdoor areas."
                : "Kontrolle und einfache Pflege von Garten und Aussenbereichen."}
            </p>
          </div>

          {/* 4 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Wrench size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Organizacija popravaka"
                : isEN
                ? "Repair Service"
                : "Reparaturservice"}
            </h3>

            <p>
              {isHR
                ? "Organizacija odgovarajućih majstora prema potrebi."
                : isEN
                ? "Organisation of suitable craftsmen whenever needed."
                : "Organisation passender Handwerker bei Bedarf."}
            </p>
          </div>

          {/* 5 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <CloudRain size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Hitne intervencije"
                : isEN
                ? "Emergency Support"
                : "Notfallservice"}
            </h3>

            <p>
              {isHR
                ? "Brza reakcija i organizacija nakon nevremena ili štetnih događaja."
                : isEN
                ? "Quick response and organisation after storms or unexpected damage."
                : "Schnelle Reaktion und Organisation nach Unwettern oder Schadenereignissen."}
            </p>
          </div>

          {/* 6 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Key size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Usluga ključeva"
                : isEN
                ? "Key Service"
                : "Schlüsselservice"}
            </h3>

            <p>
              {isHR
                ? "Sigurna pohrana i pristup vašim ključevima prema potrebi."
                : isEN
                ? "Secure storage and access to your keys whenever needed."
                : "Sichere Aufbewahrung und Zugriff auf Ihre Schlüssel bei Bedarf."}
            </p>
          </div>

          {/* 7 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Mail size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Poštanska usluga"
                : isEN
                ? "Mail Service"
                : "Postservice"}
            </h3>

            <p>
              {isHR
                ? "Prosljeđivanje i organizacija pošte prema želji."
                : isEN
                ? "Forwarding and organisation of your mail upon request."
                : "Weiterleitung und Organisation Ihrer Post nach Wunsch."}
            </p>
          </div>

          {/* 8 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <FileText size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Status izvještaji"
                : isEN
                ? "Status Reports"
                : "Statusberichte"}
            </h3>

            <p>
              {isHR
                ? "Redovite informacije o stanju vaše nekretnine."
                : isEN
                ? "Regular updates about the condition of your property."
                : "Regelmässige Informationen zum Zustand Ihrer Immobilie."}
            </p>
          </div>

          {/* 9 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Calendar size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Godišnji pregled"
                : isEN
                ? "Annual Overview"
                : "Jahresübersicht"}
            </h3>

            <p>
              {isHR
                ? "Pregled stanja i razvoja vaše nekretnine tijekom godine."
                : isEN
                ? "Overview of your property's condition and developments throughout the year."
                : "Übersicht zum Zustand und den Entwicklungen Ihrer Immobilie."}
            </p>
          </div>

        </div>

      </section>

    </ServiceDetail>
  );
};

const Service3 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail>

      {/* HERO */}
      <div className="relative w-full h-[520px] overflow-hidden">

        <img
          src="/carefree-stay.jpg"
          alt="Carefree Stay"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

<div className="max-w-xl text-white text-left">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-left">
                {isHR
                  ? "Bezbrižan boravak"
                  : isEN
                  ? "Carefree Stay"
                  : "Sorgenfreier Aufenthalt"}
              </h1>

              <div className="w-20 h-[2px] bg-[#c6a27b] mb-8"></div>

              <p className="text-xl leading-relaxed text-white/90 max-w-lg">
                {isHR
                  ? "Kako biste od prvog trenutka mogli opušteno uživati u svom boravku u Dalmaciji. Brinemo se o pripremi, organizaciji i svim detaljima vezanim uz vaš dolazak i odlazak."
                  : isEN
                  ? "So you can enjoy your time in Dalmatia from the very first moment. We take care of preparation, organisation and every detail surrounding your arrival and departure."
                  : "Damit Sie Ihre Zeit in Dalmatien vom ersten Moment an entspannt geniessen können. Wir kümmern uns um Vorbereitung, Organisation und alle Details rund um Ihre Ankunft und Abreise."}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-0">

        <div className="flex items-center justify-center gap-6 mb-16">

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

          <h2 className="font-serif text-5xl text-[#2f3a40] text-center">
            {isHR ? "Naše usluge" : isEN ? "Our Services" : "Unsere Leistungen"}
          </h2>

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">

          {/* 1 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <House size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[48px] flex items-start justify-center">
              {isHR
                ? "Priprema nekretnine"
                : isEN
                ? "Property Preparation"
                : "Vorbereitung der Immobilie"}
            </h3>

            <p>
              {isHR
                ? "Kontrola i priprema vašeg doma prije dolaska."
                : isEN
                ? "Preparation and inspection of your home before arrival."
                : "Kontrolle und Vorbereitung Ihres Zuhauses vor Ihrer Ankunft."}
            </p>
          </div>

          {/* 2 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Star size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Čišćenje i rublje"
                : isEN
                ? "Cleaning & Laundry"
                : "Reinigung & Wäsche"}
            </h3>

            <p>
              {isHR
                ? "Organizacija čišćenja i tekstila."
                : isEN
                ? "Organisation of cleaning and textiles."
                : "Organisation von Reinigung und Textilien."}
            </p>
          </div>

          {/* 3 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <ClipboardList size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Kupovina prije dolaska"
                : isEN
                ? "Pre-Arrival Shopping"
                : "Einkaufsservice"}
            </h3>

            <p>
              {isHR
                ? "Kupovina i osnovne namirnice prema vašim željama prije dolaska."
                : isEN
                ? "Groceries and essentials prepared according to your wishes before arrival."
                : "Einkäufe und Grundausstattung vor Ihrer Ankunft nach Wunsch."}
            </p>
          </div>

          {/* 4 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Key size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Usluga ključeva"
                : isEN
                ? "Key Service"
                : "Schlüsselservice"}
            </h3>

            <p>
              {isHR
                ? "Organizacija i osobna predaja ključeva pri dolasku ili odlasku."
                : isEN
                ? "Organisation and personal handover upon arrival or departure."
                : "Organisation und persönliche Übergabe bei An- oder Abreise."}
            </p>
          </div>

          {/* 5 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[210px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Sun size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Tijekom vašeg boravka"
                : isEN
                ? "During Your Stay"
                : "Während Ihres Aufenthalts"}
            </h3>

            <p>
              {isHR
                ? "Po potrebi brinemo se o organizaciji i dodatnim uslugama."
                : isEN
                ? "We assist with organisation and additional services whenever needed."
                : "Bei Bedarf kümmern wir uns um Organisation und zusätzliche Anliegen."}
            </p>
          </div>

        </div>

      </section>

    </ServiceDetail>
  );
};

const Service4 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail>

      {/* HERO */}
      <div className="relative w-full h-[520px] overflow-hidden">

        <img
          src="/interior-design.jpg"
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

<div className="max-w-xl text-white text-left">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-left">
                {isHR
                  ? "Uređenje interijera & preuređenje"
                  : isEN
                  ? "Interior Design & Redesign"
                  : "Inneneinrichtung & Neugestaltung"}
              </h1>

              <div className="w-20 h-[2px] bg-[#c6a27b] mb-8"></div>

              <p className="text-xl leading-relaxed text-white/90 max-w-lg">
                {isHR
                  ? "Promišljeni koncepti prostora s osjećajem za stil, funkcionalnost i atmosferu. Pratimo vaše preuređenje od prve ideje do završnog uređenja."
                  : isEN
                  ? "Thoughtful interior concepts with a sense for style, functionality and atmosphere. We accompany your redesign from the first idea to the final interior setup."
                  : "Durchdachte Raumkonzepte mit Gespür für Stil, Funktionalität und Atmosphäre. Wir begleiten Ihre Neugestaltung von der ersten Idee bis zur fertigen Umsetzung."}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-0">

        <div className="flex items-center justify-center gap-6 mb-16">

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

          <h2 className="font-serif text-5xl text-[#2f3a40] text-center">
            {isHR ? "Naše usluge" : isEN ? "Our Services" : "Unsere Leistungen"}
          </h2>

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

          {/* 1 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <House size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Savjetovanje na licu mjesta"
                : isEN
                ? "On-Site Consultation"
                : "Vor-Ort-Beratung"}
            </h3>

            <p>
              {isHR
                ? "Osobni obilazak i analiza prostora te vaših želja."
                : isEN
                ? "Personal visit and analysis of your rooms and wishes."
                : "Persönliche Besichtigung und Analyse Ihrer Räume und Wünsche."}
            </p>
          </div>

          {/* 2 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Map size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Koncept prostora"
                : isEN
                ? "Space Concept"
                : "Raumkonzept"}
            </h3>

            <p>
              {isHR
                ? "Tlocrtno planiranje te individualni prijedlozi uređenja i namještaja."
                : isEN
                ? "Floor plan concepts and individual furnishing proposals."
                : "Grundrissplanung sowie individuelle Einrichtungs- und Möblierungsvorschläge."}
            </p>
          </div>

          {/* 3 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Palette size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Stil & materijali"
                : isEN
                ? "Style & Materials"
                : "Stil & Materialien"}
            </h3>

            <p>
              {isHR
                ? "Razrada različitih stilova, boja i materijala."
                : isEN
                ? "Development of different styles, colours and materials."
                : "Ausarbeitung verschiedener Stilrichtungen, Farben und Materialien."}
            </p>
          </div>

          {/* 4 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Sparkles size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Namještaj & uređenje"
                : isEN
                ? "Furnishing & Setup"
                : "Möblierung & Einrichtung"}
            </h3>

            <p>
              {isHR
                ? "Odabir i usklađivanje namještaja, rasvjete i dekorativnih elemenata."
                : isEN
                ? "Selection and coordination of furniture, lighting and decorative elements."
                : "Auswahl und Zusammenstellung passender Möbel, Leuchten und Accessoires."}
            </p>
          </div>

          {/* 5 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <ClipboardList size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Budžet & troškovi"
                : isEN
                ? "Budget & Costs"
                : "Budget & Kosten"}
            </h3>

            <p>
              {isHR
                ? "Transparentan pregled troškova usklađen s vašim željama i budžetom."
                : isEN
                ? "Transparent cost overview tailored to your wishes and budget."
                : "Transparente Kostenzusammenstellung passend zu Ihren Vorstellungen."}
            </p>
          </div>

          {/* 6 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Package size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Kupovina & organizacija"
                : isEN
                ? "Purchasing & Organisation"
                : "Einkauf & Organisation"}
            </h3>

            <p>
              {isHR
                ? "Koordinacija narudžbi, dostava i organizacijskih detalja."
                : isEN
                ? "Coordination of orders, deliveries and organisational details."
                : "Koordination von Bestellungen, Lieferungen und allen organisatorischen Abläufen."}
            </p>
          </div>

          {/* 7 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Wrench size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Savjeti za renovaciju"
                : isEN
                ? "Renovation Consulting"
                : "Renovationsberatung"}
            </h3>

            <p>
              {isHR
                ? "Podrška pri odabiru materijala, boja i koncepta uređenja za kuhinje, kupaonice i stambene prostore."
                : isEN
                ? "Support with material, colour and interior concepts for kitchens, bathrooms and living spaces."
                : "Unterstützung bei Material-, Farb- und Einrichtungskonzepten für Küchen, Bäder und Wohnräume."}
            </p>
          </div>

          {/* 8 */}
          <div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
            <div className="mb-5 flex items-center justify-center">
              <Sun size={34} className="text-[#c6a27b]" />
            </div>

            <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
              {isHR
                ? "Detalji & atmosfera"
                : isEN
                ? "Final Touches"
                : "Feinschliff & Atmosphäre"}
            </h3>

            <p>
              {isHR
                ? "Usklađivanje svih detalja za skladan i zaokružen prostor."
                : isEN
                ? "Coordination of all details for a harmonious and cohesive overall look."
                : "Abstimmung aller Details für ein harmonisches und stimmiges Gesamtbild."}
            </p>
          </div>

        </div>

      </section>

    </ServiceDetail>
  );
};



/* ================= ABOUT ================= */
function About({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
<section
  id="about"
  className="bg-[#f7f2ed]"
>

  {/* HERO */}
<div className="relative h-[45vh] overflow-hidden">

    <img
      src="/about-hero.jpg"
      alt="PaMaRo Living"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/10" />

    <div className="relative z-10 h-full flex items-center">

      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">

        <div className="max-w-[520px]">

          <h1 className="font-serif text-white text-5xl md:text-6xl leading-none">
            {isHR ? "O nama" : isEN ? "About us" : "Über uns"}
          </h1>

          <div className="w-20 h-[1px] bg-[#c6a27b] mt-8" />

        </div>

      </div>

    </div>

  </div>

  {/* TEXT */}
  <div className="max-w-7xl mx-auto px-8 md:px-16 py-24">

  
<div className="max-w-[900px] mx-auto text-[17px] leading-[2.15] text-[#2f3a40]">

  {isHR ? (
    <div className="space-y-10">

      <p>
        PaMaRo Living predstavlja osobnu brigu, povjerenje i odgovoran odnos prema nekretninama. U središtu nisu samo objekti, već prije svega ljudi koji stoje iza njih.
      </p>

      <p>
        Iza PaMaRo Living stoji Paula Raimondo. Rođena u Splitu, s obiteljskim korijenima u Pisku i više od trideset godina života u Švicarskoj, spaja mediteranski način života sa švicarskom strukturom, pouzdanošću i visokim standardom kvalitete.
      </p>

      <p>
        Već je rano otkrila svoju strast prema nekretninama te je u Švicarskoj završila temeljito komercijalno obrazovanje i dodatno stručno usavršavanje za upravljanje nekretninama. Tijekom dugogodišnjeg rada u renomiranim tvrtkama za nekretnine pratila je privatne i institucionalne klijente, koordinirala projekte gradnje, renovacija i sanacija te upravljala nekretninama s velikom pažnjom i odgovornošću.
      </p>

      <p>
        Povratkom u Hrvatsku nastala je želja da upravo to iskustvo prenese u Dalmaciju — osobno, diskretno i s visokim standardom kvalitete, povjerenja i estetike.
      </p>

      <p>
        Danas PaMaRo Living predstavlja osoban, diskretan i kvalitetan pristup nekretninama i stanovanju u Dalmaciji. U središtu svakog projekta uvijek su povjerenje, pouzdanost te osjećaj za kvalitetu, estetiku i detalje.
      </p>

      <p>
        Paula Raimondo govori njemački, hrvatski, engleski i talijanski jezik te predstavlja strukturiran, srdačan i osoban način rada.
      </p>

      <p>
        Savjetodavnu podršku pruža joj suprug Marco Raimondo, koji raspolaže dugogodišnjim iskustvom u području nekretnina te izraženim jezičnim i stručnim kompetencijama.
      </p>

    </div>
  ) : isEN ? (
    <div className="space-y-10">

      <p>
        PaMaRo Living stands for personal care, trust and a responsible approach to property management. The focus is not only on properties themselves, but above all on the people behind them.
      </p>

      <p>
        Behind PaMaRo Living is Paula Raimondo. Born in Split, with family roots in Pisak and more than thirty years of life experience in Switzerland, she combines the Mediterranean way of living with Swiss structure, reliability and a strong sense of quality.
      </p>

      <p>
        From an early stage, she discovered her passion for real estate and completed a solid commercial education in Switzerland, followed by further professional training as a certified real estate manager. During her many years working for renowned real estate companies, she supported private and institutional clients, coordinated construction, renovation and refurbishment projects and managed properties with great care and responsibility.
      </p>

      <p>
        Returning to Croatia inspired the desire to bring this experience to Dalmatia — in a personal, discreet and quality-oriented way.
      </p>

      <p>
        Today, PaMaRo Living stands for personal, discreet and high-quality support surrounding properties and living in Dalmatia. Trust, reliability and a refined sense for quality, aesthetics and detail are always at the heart of every project.
      </p>

      <p>
        Paula Raimondo speaks German, Croatian, English and Italian and stands for a structured, warm and personal way of working.
      </p>

      <p>
        She is supported in an advisory capacity by her husband Marco Raimondo, who brings many years of experience in the real estate sector as well as extensive linguistic and professional expertise.
      </p>

    </div>
  ) : (
    <div className="space-y-10">

      <p>
        PaMaRo Living steht für persönliche Betreuung, Vertrauen und einen verantwortungsvollen Umgang mit Immobilien. Im Mittelpunkt stehen nicht nur Objekte, sondern vor allem die Menschen dahinter.
      </p>

      <p>
        Hinter PaMaRo Living steht Paula Raimondo. Geboren in Split, mit familiären Wurzeln in Pisak und über dreissig Jahren Lebenserfahrung in der Schweiz, verbindet sie mediterrane Lebensart mit Schweizer Struktur, Verlässlichkeit und Qualitätsbewusstsein.
      </p>

      <p>
        Bereits früh entdeckte sie ihre Leidenschaft für Immobilien und absolvierte in der Schweiz eine fundierte kaufmännische Ausbildung sowie die Weiterbildung zur eidg. Immobilienbewirtschafterin. Während ihrer langjährigen Tätigkeit bei renommierten Immobilienunternehmen betreute sie private und institutionelle Kunden, koordinierte Bau-, Renovations- und Sanierungsprojekte und begleitete Immobilien mit grosser Sorgfalt und Verantwortung.
      </p>

      <p>
        Mit der Rückkehr nach Kroatien entstand der Wunsch, genau diese Erfahrung in Dalmatien einzubringen – persönlich, diskret und mit einem hohen Anspruch an Qualität, Vertrauen und Ästhetik.
      </p>

      <p>
        Heute steht PaMaRo Living für eine persönliche, diskrete und hochwertige Begleitung rund um Immobilien und Wohnen in Dalmatien. Im Mittelpunkt stehen Vertrauen, Verlässlichkeit und ein feines Gespür für Qualität, Ästhetik und Details.
      </p>

      <p>
        Paula Raimondo spricht Deutsch, Kroatisch, Englisch und Italienisch und steht für eine strukturierte, herzliche und persönliche Arbeitsweise.
      </p>

      <p>
        Beratend unterstützt wird sie von ihrem Mann Marco Raimondo, der über langjährige Erfahrung im Immobilienbereich sowie über ausgeprägte sprachliche und fachliche Kompetenzen verfügt.
      </p>

    </div>
  )}

</div>

  </div>

  {/* VALUES */}
  <div className="border-t border-[#ddd2c6]">

    <div className="max-w-7xl mx-auto px-8 md:px-16 py-14">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* VALUE 1 */}
        <div className="flex flex-col items-center">

          <User
            size={42}
            strokeWidth={1.5}
            className="text-[#c6a27b] mb-5"
          />

          <h3 className="uppercase tracking-[0.12em] text-[26px] text-[#b88d63] mb-5">
            {isHR ? "Osobno" : isEN ? "Personal" : "Persönlich"}
          </h3>

          <p className="text-[17px] leading-[1.9] text-[#2f3a40] max-w-[220px]">
            {isHR
              ? "Posvećujemo vrijeme vašim željama i potrebama."
              : isEN
              ? "We take time for your wishes and requests."
              : "Wir nehmen uns Zeit für Ihre Anliegen."}
          </p>

        </div>

        {/* VALUE 2 */}
        <div className="flex flex-col items-center md:border-x border-[#ddd2c6]">

          <ShieldCheck
            size={42}
            strokeWidth={1.5}
            className="text-[#c6a27b] mb-5"
          />

          <h3 className="uppercase tracking-[0.12em] text-[26px] text-[#b88d63] mb-5">
            {isHR ? "Pouzdano" : isEN ? "Reliable" : "Verlässlich"}
          </h3>

          <p className="text-[17px] leading-[1.9] text-[#2f3a40] max-w-[220px]">
            {isHR
              ? "Diskretno, organizirano i pouzdano."
              : isEN
              ? "Discreet, structured and reliable."
              : "Diskret, strukturiert und zuverlässig."}
          </p>

        </div>

        {/* VALUE 3 */}
        <div className="flex flex-col items-center">

          <Heart
            size={42}
            strokeWidth={1.5}
            className="text-[#c6a27b] mb-5"
          />

          <h3 className="uppercase tracking-[0.12em] text-[26px] text-[#b88d63] mb-5">
            {isHR ? "Sa srcem" : isEN ? "With Heart" : "Mit Herz"}
          </h3>

          <p className="text-[17px] leading-[1.9] text-[#2f3a40] max-w-[220px]">
            {isHR
              ? "S pažnjom i osjećajem za detalje."
              : isEN
              ? "With care and attention to detail."
              : "Mit Sorgfalt und einem Blick fürs Detail."}
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
  );
}

/* ================= CONTACT ================= */
const Contact = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <div className="bg-[#f7f2ed] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

          {/* LEFT */}
          <div className="flex items-center px-8 md:px-16 py-14">

            <div className="max-w-xl">

              <h1 className="font-serif text-5xl md:text-6xl text-[#2f3a40] leading-tight mb-8">
                {isHR ? "Kontakt" : isEN ? "Contact" : "Kontakt"}
              </h1>

<div className="w-20 h-[1px] bg-[#c6a27b] mb-8"></div>

              <p className="text-[#4d5960] text-lg leading-relaxed">
                {isHR
                  ? "Bilo da vam je potrebna briga o nekretnini, bezbrižan boravak ili preuređenje – veselimo se vašem upitu i rado ćemo vas osobno savjetovati."
                  : isEN
                  ? "Whether you need property care, a worry-free stay or a redesign – we look forward to your inquiry and are happy to advise you personally."
                  : "Ob Immobilienbetreuung, sorgenfreier Aufenthalt oder Neugestaltung – wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich."}
              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<div className="hidden lg:block relative h-[320px] lg:h-auto overflow-hidden">

  <img
    src="/contact-image.jpg"
    alt="Mediterranean terrace"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* SOFT FADE LEFT */}
<div className="absolute inset-0 bg-gradient-to-r from-[#f7f2ed] via-[#f7f2ed]/40 to-transparent backdrop-blur-[1px]"></div>

</div>

        </div>

      </section>

      {/* FORM SECTION */}
<section className="max-w-7xl mx-auto px-8 md:px-16 py-12 lg:py-24">

<div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-20 items-start">

          {/* LEFT TEXT */}
<div className="hidden lg:block">

            <h2 className="font-serif text-4xl text-[#2f3a40] mb-6">
              {isHR
                ? "Pošaljite nam poruku"
                : isEN
                ? "Send us a message"
                : "Schreiben Sie uns"}
            </h2>

            <div className="w-16 h-[2px] bg-[#c6a27b] mb-8"></div>

            <p className="text-[#4d5960] leading-relaxed text-lg mb-14">
              {isHR
                ? "Tu smo za sva vaša pitanja i zahtjeve – odgovorit ćemo vam u najkraćem mogućem roku."
                : isEN
                ? "Send us your inquiry – we will get back to you as soon as possible."
                : "Teilen Sie uns Ihr Anliegen mit – wir melden uns so schnell wie möglich bei Ihnen."}
            </p>



          </div>

          {/* FORM */}
<div className="lg:border-l border-[#e7ddd2] pl-0 lg:pl-12">

<form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>

  <input
    type="hidden"
    name="access_key"
    value="611d2eb2-e323-4564-9367-f75b1e6f3b5c"
  />

  <input
    type="hidden"
    name="subject"
    value="Neue Kontaktanfrage – PaMaRo Living"
  />

  <input
    type="hidden"
    name="from_name"
    value="PaMaRo Living Website"
  />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <input
      type="text"
      name="name"
      required
      placeholder={isHR ? "Ime*" : isEN ? "Name*" : "Name*"}
      className="h-14 px-5 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none"
    />

    <input
      type="email"
      name="email"
      required
      placeholder={isHR ? "E-mail*" : isEN ? "E-Mail*" : "E-Mail*"}
      className="h-14 px-5 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none"
    />

  </div>

  <input
    type="text"
    name="phone"
    placeholder={isHR ? "Telefon" : isEN ? "Phone" : "Telefon"}
    className="w-full h-14 px-5 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none"
  />

  <textarea
    rows="7"
    name="message"
    required
    placeholder={isHR ? "Poruka*" : isEN ? "Message*" : "Nachricht*"}
    className="w-full px-5 py-4 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none resize-none"
  ></textarea>

  <div className="pt-2">

    <button
      type="submit"
      className="bg-[#c6a27b] hover:bg-[#b8946d] transition-colors duration-300 text-white tracking-[0.15em] uppercase text-sm px-10 h-14"
    >
      {isHR
        ? "Pošalji poruku"
        : isEN
        ? "Send Message"
        : "Nachricht senden"}
    </button>

  </div>

</form>

          </div>

        </div>

      </section>

    </div>
  );
};


/* ================= LEGAL ================= */
function Legal({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

return (
  <section className="bg-[#f8f5f1] min-h-screen">

{/* HERO */}
<section className="relative overflow-hidden">

  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[380px]">

    {/* LEFT */}
    <div className="flex items-center px-8 md:px-16 py-14 bg-[#f3ede7]">

      <div className="max-w-xl">

        <h1 className="font-serif text-5xl md:text-6xl text-[#2f3a40] leading-tight mb-8">
          {isHR
            ? "Impressum i privatnost"
            : isEN
            ? "Legal Notice & Privacy"
            : "Impressum & Datenschutz"}
        </h1>

        <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative min-h-[240px] lg:min-h-full">

      <img
        src="/legal.jpg"
        alt="Legal"
className="absolute inset-0 w-full h-full object-cover blur-[1px] scale-105"
      />

<div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f1] via-[#f8f5f1]/40 to-transparent"></div>

    </div>

  </div>

</section>

    {/* CONTENT */}
<div className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-[#2f3a40]">

      {/* Impressum */}
<div className="mb-16">

        <h2 className="font-serif text-[44px] leading-none mb-6">
          {isHR
            ? "Impressum"
            : isEN
            ? "Legal Notice"
            : "Impressum"}
        </h2>

        <div className="w-12 h-[1px] bg-[#c6a27b] mb-10" />

        <div className="space-y-5 text-[17px] leading-[2]">

          <div>
            <strong>PaMaRo Living</strong><br />
            Paula Raimondo<br />
            Zapadna Ulica 36<br />
            21318 Pisak<br />
            Croatia
          </div>

          <div>
            <strong>
              {isHR
                ? "Odgovorna osoba za sadržaj:"
                : isEN
                ? "Responsible for content:"
                : "Verantwortlich für den Inhalt:"}
            </strong><br />
            Paula Raimondo
          </div>

          <p>
            {isHR
              ? "Europska komisija pruža platformu za online rješavanje sporova (OS): https://ec.europa.eu/consumers/odr/"
              : isEN
              ? "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/"
              : "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/"}
          </p>

          <p>
            {isHR
              ? "Nismo spremni niti obvezni sudjelovati u postupku rješavanja sporova pred potrošačkom arbitražom."
              : isEN
              ? "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."
              : "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."}
          </p>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#d9c9b7] mb-16" />

      {/* Datenschutz */}
      <div>

        <h2 className="font-serif text-[44px] leading-none mb-6">
          {isHR
            ? "Pravila privatnosti"
            : isEN
            ? "Privacy Policy"
            : "Datenschutzerklärung"}
        </h2>

        <div className="w-12 h-[1px] bg-[#c6a27b] mb-10" />

        <div className="space-y-6 text-[17px] leading-[2]">

          <p>
            {isHR
              ? "Zaštita vaših osobnih podataka važna nam je. Osobne podatke obrađujemo povjerljivo i u skladu sa zakonskim propisima o zaštiti podataka."
              : isEN
              ? "The protection of your personal data is important to us. Personal data is treated confidentially and in accordance with applicable data protection regulations."
              : "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten behandeln wir vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften."}
          </p>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "Kontakt obrazac"
                : isEN
                ? "Contact form"
                : "Kontaktformular"}
            </h3>

            <p>
              {isHR
                ? "Ako nam pošaljete upit putem kontakt obrasca, vaši podaci koriste se isključivo za obradu vašeg zahtjeva."
                : isEN
                ? "If you contact us via the contact form, your data will only be used to process your inquiry."
                : "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              Web3Forms
            </h3>

            <p>
              {isHR
                ? "Za slanje kontakt obrazaca koristimo vanjsku uslugu Web3Forms. Podaci uneseni u obrazac prenose se putem zaštićene veze i koriste isključivo za obradu vašeg upita."
                : isEN
                ? "For contact form submissions we use the external service Web3Forms. Data is transmitted securely and used solely for processing your inquiry."
                : "Für die Übermittlung von Kontaktformularen verwenden wir den externen Dienst Web3Forms. Die Daten werden verschlüsselt übertragen und ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "Vaša prava"
                : isEN
                ? "Your rights"
                : "Ihre Rechte"}
            </h3>

            <p>
              {isHR
                ? "Imate pravo na informacije, ispravak ili brisanje svojih osobnih podataka."
                : isEN
                ? "You have the right to information, correction or deletion of your personal data."
                : "Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten."}
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>
);
}


export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("hr");

React.useEffect(() => {
  window.scrollTo(0, 0);
}, [page]);

  let content;

switch (page) {
  case "about": content = <About lang={lang} />; break;
  case "services": content = <Services setPage={setPage} lang={lang} />; break;
  case "service2": content = <Service2 lang={lang}/>; break;
  case "service3": content = <Service3 lang={lang}/>; break;
  case "service4": content = <Service4 lang={lang}/>; break;
  case "contact": content = <Contact lang={lang} />; break;
  case "legal": content = <Legal lang={lang} />; break;
default: content = <Home lang={lang} setPage={setPage} />;
}

  return (
<div className="flex flex-col bg-[#f7f2ed]">
      <Navigation setPage={setPage} lang={lang} setLang={setLang} />
<main className="pt-20">{content}</main>
<FooterBar setPage={setPage} />
    </div>
  );
}
