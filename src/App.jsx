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
Cloudrain,
Calender,
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

function FooterBar() {
  return (
    <footer className="bg-[#2f3a40] text-white mt-24">
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
        <div className="border-t border-[#c6a27b]/40 mt-6 pt-4 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} PaMaRo Living. All rights reserved.
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
    </div>
  );
}

/* ================= SERVICES OVERVIEW ================= */
function Services({ setPage, lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";
  return (
<section className="bg-[#f7f2ed]">
  <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">

  <div className="text-center mb-14">
    <div className="flex items-center justify-center gap-6 mb-4">
      <div className="w-16 h-[1px] bg-[#c6a27b]"></div>

      <h2 className="font-serif text-5xl text-[#2f3a40]">
        {isHR ? "Naše usluge" : isEN ? "Our Services" : "Unsere Dienstleistungen"}
      </h2>

      <div className="w-16 h-[1px] bg-[#c6a27b]"></div>
    </div>

    <p className="text-[#6b7478] text-lg">
      {isHR
        ? "Sve što je vašoj nekretnini potrebno – pouzdano, diskretno i profesionalno."
        : isEN
        ? "Everything your property needs – reliable, discreet and professional."
        : "Alles, was Ihre Immobilie braucht – zuverlässig, diskret und professionell."}
    </p>
  </div>
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
    ? "Redoviti nadzor, organizacija i prisutnost tijekom cijele godine."
    : isEN
    ? "Regular inspections and reliable local coordination throughout the year."
    : "Regelmässige Kontrollen und Betreuung vor Ort."}
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

            <div className="max-w-xl text-white">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center md:text-left">
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

            <div className="max-w-xl text-white">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center md:text-left">
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

            <div className="max-w-xl text-white">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center md:text-left">
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
    <section className="py-24 px-6 max-w-3xl mx-auto space-y-6 text-sm leading-relaxed">
      <h1 className="text-3xl font-serif text-center mb-10">
        {isHR ? "O PaMaRo Living" : isEN ? "About PaMaRo Living" : "Über PaMaRo Living"}
      </h1>

      {isHR ? (
        <>
          <p>PaMaRo Living predstavlja osobnu brigu, povjerenje i odgovoran odnos prema nekretninama. U središtu nisu samo objekti, već prije svega ljudi koji stoje iza njih.</p>

          <p>Tvrtku kao obrt vodi Paula Raimondo. Rođena je u Splitu, porijeklom iz Piska, a više od trideset godina živjela je u Švicarskoj. Povratak u Hrvatsku bio je svjesna odluka, proizašla iz duboke povezanosti s domovinom i želje da svoje međunarodno iskustvo prenese upravo ondje gdje su njezini korijeni.</p>

          <p>U Švicarskoj je završila temeljito komercijalno obrazovanje te je vrlo rano otkrila svoju strast prema nekretninama. Tijekom rada u nekima od najvećih švicarskih društava za upravljanje nekretninama stekla je zvanje certificirane upraviteljice nekretninama sa švicarskom saveznom diplomom te bila odgovorna za privatne i institucionalne klijente – uključujući banke i osiguravajuća društva – te preuzimala cjelovitu operativnu i organizacijsku odgovornost za nekretnine.</p>

          <p>Nakon toga djelovala je u području strateškog upravljanja imovinom i portfeljem nekretnina velikog mirovinskog fonda, gdje je vodila opsežan portfelj, aktivno pratila procese kupnje i prodaje te sudjelovala u donošenju dugoročnih investicijskih odluka. Tijekom svoje približno petnaestogodišnje profesionalne karijere pratila je i koordinirala brojne projekte gradnje, renovacije i sanacije – od početne ideje do pažljive kontrole kvalitete i završne realizacije.</p>

          <p>Danas Paula Raimondo osobno prati vlasnike i goste, s velikim angažmanom, empatijom i visokim standardom kvalitete, pouzdanosti i diskrecije. Govori njemački, hrvatski, engleski i talijanski jezik te utjelovljuje strukturiran, precizan, ali istodobno topao i ljudski pristup radu.</p>

          <p>Savjetodavnu podršku pruža joj suprug Marco Raimondo, koji raspolaže s više od dvadeset godina profesionalnog iskustva u području nekretnina, kao i izraženim jezičnim i stručnim kompetencijama.</p>
        </>
      ) : isEN ? (
        <>
          <p>PaMaRo Living stands for personal care, trust and a responsible approach to real estate. The focus is not only on properties, but above all on the people behind them.</p>

          <p>The company is run as a sole proprietorship by Paula Raimondo. She was born in Split, originally comes from Pisak and lived in Switzerland for more than thirty years. Returning to Croatia was a conscious decision – driven by a deep connection to her homeland and the desire to bring her international experience back to where her roots lie.</p>

          <p>In Switzerland, she completed a solid commercial education and discovered her passion for real estate at an early stage. While working for some of the largest property management companies in Switzerland, she completed further professional training as a certified real estate manager (Swiss Federal Diplom), supported private and institutional clients – including banks and insurance companies – and assumed full operational and organizational responsibility for properties.</p>

          <p>She later worked in strategic asset and real estate portfolio management for a major Swiss pension fund. There, she managed an extensive portfolio, actively supported acquisition and sales processes and contributed to long-term investment decisions. Over the course of her approximately fifteen-year professional career, she also supervised and coordinated numerous construction, renovation and refurbishment projects – from the initial idea through careful quality control to final completion.</p>

          <p>Today, Paula Raimondo personally supports property owners and guests – with great commitment, empathy and a strong dedication to quality, reliability and discretion. She speaks German, Croatian, English and Italian and represents a structured, precise yet warm and human approach to her work.</p>

          <p>She is supported in an advisory capacity by her husband Marco Raimondo, who has more than twenty years of professional experience in the real estate sector as well as extensive linguistic and technical expertise.</p>
        </>
      ) : (
        <>
          <p>PaMaRo Living steht für persönliche Betreuung, Vertrauen und einen verantwortungsvollen Umgang mit Immobilien. Im Mittelpunkt stehen nicht nur Objekte, sondern vor allem die Menschen dahinter.</p>

          <p>Das Unternehmen wird als Einzelfirma von Paula Raimondo geführt. Sie wurde in Split geboren, stammt ursprünglich aus Pisak und lebte über dreissig Jahre in der Schweiz. Die Rückkehr nach Kroatien war eine bewusste Entscheidung – getragen von einer tiefen Verbundenheit zur Heimat und dem Wunsch, ihre internationale Erfahrung genau dort einzubringen, wo ihre Wurzeln liegen.</p>

          <p>In der Schweiz absolvierte sie eine fundierte kaufmännische Ausbildung und entdeckte früh ihre Leidenschaft für Immobilien. Während ihrer Tätigkeit bei einigen der grössten Immobilienverwaltungsunternehmen der Schweiz absolvierte sie erfolgreich die Weiterbildung zur eidg. Immobilienbewirtschafterin, betreute private sowie institutionelle Kunden – darunter Banken und Versicherungen – und übernahm die ganzheitliche operative und organisatorische Verantwortung für Immobilien.</p>

          <p>Anschliessend war sie im Bereich des strategischen Asset- und Immobilienportfoliomanagements einer grossen Pensionskasse tätig. Dort führte sie ein umfangreiches Portfolio, begleitete aktiv An- und Verkaufsprozesse und wirkte an langfristigen Investitionsentscheidungen mit. In ihrer rund fünfzehnjährigen beruflichen Laufbahn begleitete und koordinierte sie zudem zahlreiche Bau-, Renovations- und Sanierungsprojekte – von der ersten Idee bis zur sorgfältigen Qualitätskontrolle und finalen Umsetzung.</p>

          <p>Heute begleitet Paula Raimondo Eigentümer und Gäste persönlich – mit grossem Engagement, Einfühlungsvermögen und einem hohen Anspruch an Qualität, Verlässlichkeit und Diskretion. Sie spricht Deutsch, Kroatisch, Englisch und Italienisch und steht für eine strukturierte, präzise und zugleich warme und menschliche Arbeitsweise.</p>

          <p>Beratend unterstützt wird sie von ihrem Mann Marco Raimondo, der über mehr als zwanzig Jahre Berufserfahrung im Immobilienbereich sowie über ausgeprägte sprachliche und fachliche Kompetenzen verfügt.</p>
        </>
      )}
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <section className="py-24 px-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-serif mb-10 text-center">
        {isHR ? "Kontakt" : isEN ? "Contact" : "Kontakt"}
      </h1>

      <form className="space-y-4">
        <input
          className="w-full border p-4 rounded-xl"
          placeholder={isHR ? "Ime" : isEN ? "Name" : "Name"}
        />

        <input
          className="w-full border p-4 rounded-xl"
          placeholder={isHR ? "E-mail" : isEN ? "E-mail" : "E-Mail"}
        />

        <textarea
          className="w-full border p-4 rounded-xl h-32"
          placeholder={isHR ? "Poruka" : isEN ? "Message" : "Nachricht"}
        />

        <button className="bg-[#c6a27b] text-white px-6 py-3 rounded-xl w-full">
          {isHR ? "Pošalji poruku" : isEN ? "Send message" : "Nachricht senden"}
        </button>
      </form>
    </section>
  );
}


/* ================= LEGAL ================= */
function Legal({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto text-sm leading-relaxed space-y-4">
      <h1 className="text-3xl font-serif mb-8 text-center">
        {isHR
          ? "Impressum i zaštita privatnosti"
          : isEN
          ? "Legal Notice & Privacy Policy"
          : "Impressum & Datenschutz"}
      </h1>

      <p>
        PaMaRo Living<br />
        {isHR
          ? "Vlasnica: Paula Raimondo"
          : isEN
          ? "Owner: Paula Raimondo"
          : "Inhaberin: Paula Raimondo"}
        <br />
        Zapadna Ulica 36<br />
        21318 Pisak<br />
        Croatia
      </p>

      <p>
        Tel. +385 99 837 79 35<br />
        E-Mail: pamaroliving@hotmail.com
      </p>

      <h2 className="font-serif text-xl mt-10">
        {isHR ? "Impressum" : isEN ? "Legal Notice" : "Impressum"}
      </h2>
      <p>
        {isHR
          ? "Za sadržaj ove web stranice, u skladu s važećim zakonskim propisima, odgovoran je PaMaRo Living, kojeg zastupa Paula Raimondo, na gore navedenoj adresi."
          : isEN
          ? "PaMaRo Living, represented by Paula Raimondo at the address stated above, is responsible for the content of this website in accordance with applicable legal regulations."
          : "Verantwortlich für den Inhalt dieser Website gemäss den geltenden gesetzlichen Bestimmungen ist PaMaRo Living, vertreten durch Paula Raimondo, Anschrift wie oben angegeben."}
      </p><p>
  {isHR
    ? "Svi sadržaji ove web stranice, posebno tekstovi, slike, logotipi i elementi dizajna, zaštićeni su autorskim pravima te se ne smiju koristiti, umnožavati niti prosljeđivati bez izričitog pisanog odobrenja."
    : isEN
    ? "All content on this website, especially texts, images, logos and design elements, is protected by copyright and may not be used, reproduced or distributed without explicit written permission."
    : "Alle Inhalte dieser Website, insbesondere Texte, Bilder, Logos und Designbestandteile, unterliegen dem Urheberrecht und dürfen ohne ausdrückliche schriftliche Zustimmung nicht verwendet, vervielfältigt oder weitergegeben werden."}
</p>

      <h2 className="font-serif text-xl mt-10">
        {isHR ? "Zaštita privatnosti" : isEN ? "Privacy Policy" : "Datenschutz"}
      </h2>
      <p>
        {isHR
          ? "Zaštita vaših osobnih podataka nam je iznimno važna. Osobni podaci prikupljaju se na ovoj web stranici samo u tehnički nužnom opsegu i neće se prosljeđivati trećim stranama bez vaše izričite suglasnosti."
          : isEN
          ? "The protection of your personal data is very important to us. Personal data is collected on this website only to the extent technically necessary and will not be passed on to third parties without your explicit consent."
          : "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Personenbezogene Daten werden auf dieser Website nur im technisch notwendigen Umfang erhoben und nicht ohne Ihre ausdrückliche Zustimmung an Dritte weitergegeben."}
      </p>

      <p>
        {isHR
          ? "Ako nam pošaljete upit putem kontakt obrasca ili e-maila, vaši će se podaci, uključujući kontakt podatke koje ste naveli, pohraniti u svrhu obrade upita. Te podatke ne prosljeđujemo bez vaše privole."
          : isEN
          ? "If you send us inquiries via the contact form or by email, your details, including the contact information you provide, will be stored for the purpose of processing the request. This data will not be shared without your consent."
          : "Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."}
      </p>

      <p>
        {isHR
          ? "U svakom trenutku imate pravo na informaciju o pohranjenim osobnim podacima, kao i pravo na ispravak ili brisanje u okviru zakonskih propisa."
          : isEN
          ? "You have the right at any time to obtain information about the personal data stored by us, as well as the right to correction or deletion within the framework of legal provisions."
          : "Sie haben jederzeit das Recht auf Auskunft über die bei uns gespeicherten personenbezogenen Daten sowie ein Recht auf Berichtigung oder Löschung im Rahmen der gesetzlichen Vorschriften."}
      </p>
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
      <FooterBar />
    </div>
  );
}
