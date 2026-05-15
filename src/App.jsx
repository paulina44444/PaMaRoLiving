import React, { useState } from "react";

import {
  Menu,
  X,
  Phone,
  Mail
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

  const link = "text-base tracking-wide hover:text-[#c6a27b] transition";

  return (
    <header className="w-full bg-white border-b border-[#c6a27b] fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <button
  onClick={() => setPage("home")}
  className="flex items-center"
>
  <img
    src="/logo.png"
    alt="PaMaRo Living"
    className="h-28 w-auto opacity-90 sepia-[0.15]"
  />
</button>

   <nav className="hidden md:flex gap-8 text-[#5f6a70] items-center">
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
        className="text-left py-3 text-lg border-b border-[#f1ebe6]"
        onClick={() => {
          setPage(["home", "about", "services", "contact", "legal"][i]);
          setMenuOpen(false);
        }}
      >
        {label} 
      </button>
    ))}

    <div className="flex gap-4 pt-2">
      <button onClick={() => setLang("hr")}>HR</button>
      <button onClick={() => setLang("de")}>DE</button>
      <button onClick={() => setLang("en")}>EN</button>
    </div>
  </div>
)}
</header>
  );
}

function FooterBar() {
  return (
    <footer className="bg-[#2f3a40] text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* obere 3 Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-sm text-center md:text-left">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/logo.png"
              alt="PaMaRo Living"
              className="h-28 w-auto brightness-0 invert opacity-95"
            />
          </div>

          {/* Adresse */}
          <div className="leading-8">
            <div className="font-semibold mb-2">
              PaMaRo Living
            </div>

            Paula Raimondo<br />
            Zapadna Ulica 36<br />
            21318 Pisak<br />
            Croatia
          </div>

          {/* Kontakt */}
          <div className="space-y-4">

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone size={18} className="text-[#c6a27b]" />
              <span>+385 99 837 79 35</span>
            </div>
<div className="flex items-center justify-center md:justify-start gap-3">
  <Mail size={18} className="text-[#c6a27b]" />
  <span>pamaroliving@hotmail.com</span>
</div>
            <div className="flex items-center justify-center md:justify-start gap-5 pt-2">

  <a
    href="https://instagram.com/pamaroliving"
    target="_blank"
    rel="noreferrer"
    className="text-[#c6a27b] hover:text-white transition duration-300"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://facebook.com/pamaroliving"
    target="_blank"
    rel="noreferrer"
    className="text-[#c6a27b] hover:text-white transition duration-300"
  >
    <FaFacebookF size={15} />
  </a>

</div>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} PaMaRo Living. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

/* ================= HOME ================= */
function Home({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  const cards = isHR
    ? [
        [
          "Iznajmljivanje i upravljanje gostima",
          " Profesionalna prezentacija, učinkovito upravljanje rezervacijama i osobna komunikacija s gostima – za zadovoljne goste i opuštene vlasnike.",
        ],
        [
          "Cjelogodišnja briga o nekretnini",
          "Redovite kontrole, organizacija popravaka i osobno izvještavanje – kako bi vaša nekretnina uvijek bila u sigurnim rukama.",
        ],
        [
          " Podrška kod projekata i prodaje",
          " Praćenje renovacija i preuređenja te podrška u procesu prodaje – transparentno, promišljeno i s jasnim fokusom na kvalitetu i razvoj vrijednosti.",
        ],
      ]
    : isEN
    ? [
        [
          "Rental & Guest Management",
          " Professional market presentation, structured reservation management and personal guest communication – for satisfied guests and relaxed property owners.",
        ],
        [
          "Year-Round Property Care",
          "Regular inspections, coordination of repairs and personal reporting – ensuring your property is always in safe hands.",
        ],
        [
          " Project & Sales Support",
          " Coordination of renovation and redesign projects as well as guidance throughout the sales process – structured, transparent and focused on quality and value enhancement.",
        ],
      ]
    : [
        [
          "Vermietung & Gästemanagement",
          " Professionelle Vermarktung, strukturierte Prozesse und persönliche Gästebetreuung – für zufriedene Gäste und entspannte Eigentümer.",
        ],
        [
          "Ganzjährige Immobilienbetreuung",
          "Regelmässige Kontrollen, Organisation von Reparaturen und persönliches Reporting – damit Ihre Immobilie jederzeit in sicheren Händen ist.",
        ],
        [
          " Projekt- & Verkaufsbegleitung",
          " Begleitung bei Renovationen, Neugestaltung und Verkaufsprozessen – strukturiert, transparent und mit Blick auf Qualität und Wertentwicklung.",
        ],
      ];

  return (
    <div className="bg-[#f7f2ed] text-[#2f3a40]">
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">
          {isHR
            ? "Vaša nekretnina u sigurnim i stručnim rukama u Dalmaciji"
            : isEN
            ? "Your property in safe and professional hands in Dalmatia"
            : "Ihre Immobilie in sicheren und professionellen Händen in Dalmatien"}
        </h1>

        <p className="text-[#5f6a70] text-base md:text-lg leading-relaxed">
          {isHR
            ? "Povjerenje, kvaliteta i strukturiran pristup – od iznajmljivanja do cjelogodišnjeg upravljanja."
            : isEN
            ? "Trust, quality and a structured approach – from rentals to year-round property management."
            : "Vertrauen, Qualität und ein strukturierter Ansatz – von der Vermietung bis zur ganzjährigen Verwaltung."}
        </p>
      </section>

      <section className="py-12 md:py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          {cards.map(([title, text]) => (
            <div
              key={title}
className="bg-white p-6 md:p-10 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 w-full max-w-md text-center min-h-[260px] flex flex-col justify-center"
            >
              <h3 className="font-serif text-xl mb-4">{title}</h3>
              <p className="text-sm text-[#6b7478] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center bg-[#efe7df]">
        <p className="italic text-xl md:text-2xl font-serif text-[#2f3a40] max-w-2xl mx-auto">
          {isHR
            ? "„Brinemo o detaljima – kako biste se vi mogli opustiti.“"
            : isEN
            ? "“We take care of the details – so you can truly relax.”"
            : "„Wir kümmern uns um die Details – damit Sie sich entspannt zurücklehnen können.“"}
        </p>
      </section>

      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h3 className="font-serif text-2xl mb-6">
          {isHR ? "Za koga smo tu" : isEN ? "Who We Are Here For" : "Für wen wir da sind"}
        </h3>

        <p className="text-[#5f6a70]">
          {isHR
            ? "Za vlasnike koji žele sigurnost, transparentnost i profesionalno upravljanje svojom nekretninom."
            : isEN
            ? " For property owners who value security, transparency and professional management of their property."
            : "Für Eigentümer, die Wert auf Sicherheit, Transparenz und professionelle Betreuung legen."}
        </p>

        <p className="mt-4 text-[#5f6a70]">
          {isHR
            ? "Bilo da je riječ o kući za odmor, investiciji ili mjestu za opuštanje – osobno i pouzdano pratimo vlasnike i goste u Dalmaciji, uz visoke standarde kvalitete."
            : isEN
            ? "Whether it is a holiday home, an investment property or a personal retreat – we support owners and guests in Dalmatia personally, reliably and with the highest quality standards."
            : "Ob Ferienimmobilie, Investition oder erholsamer Aufenthalt – wir begleiten Eigentümer und Gäste in Dalmatien persönlich, zuverlässig und mit einem hohen Anspruch an Qualität."}
        </p>

        <p className="mt-8 text-[#5f6a70]">
          {isHR
            ? "Kontaktirajte nas. Savjetujemo vas bez obveze na njemačkom, hrvatskom, engleskom, talijanskom, španjolskom ili francuskom jeziku. Zajedno ćemo pronaći najbolje rješenje za vašu nekretninu."
            : isEN
            ? "Contact us. We will gladly advise you without obligation in German, Croatian, English, Italian, Spanish or French. Together we will find the best solution for your property."
            : "Kontaktieren Sie uns. Wir beraten Sie unverbindlich auf Deutsch, Kroatisch, Englisch, Italienisch, Spanisch oder Französisch. Gemeinsam finden wir die passende Lösung für Ihre Immobilie."}
        </p>
      </section>
    </div>
  );
}

/* ================= SERVICES OVERVIEW ================= */
function Services({ setPage, lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  const items = isHR
    ? [
        ["Iznajmljivanje i upravljanje gostima", "service1"],
        ["Cjelogodišnje upravljanje", "service2"],
        ["Bezbrižan odmor", "service3"],
        ["Preuređenje / dekoracija", "service4"],
        
        ["Podrška kod renovacija i sanacija", "service6"],
        ["Podrška pri prodaji", "service7"],
      ]
    : isEN
    ? [
        ["Rental & Guest Management", "service1"],
        ["Year-Round Property Management", "service2"],
        ["Carefree Owner Stay", "service3"],
        ["Interior Redesign & Styling", "service4"],
        
        ["Renovation & Refurbishment Support", "service6"],
        ["Sales Support", "service7"],
      ]
    : [
        ["Vermietung und Gästemanagement", "service1"],
        ["Ganzjährige Verwaltung", "service2"],
        ["Sorgenfreier Urlaub", "service3"],
        ["Neugestaltung/Dekoration", "service4"],
        
        ["Unterstützung bei Renovationen und Sanierungen", "service6"],
        ["Unterstützung beim Verkauf", "service7"],
      ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif text-center mb-12">
        {isHR ? "Usluge" : isEN ? "Services" : "Dienstleistungen"}
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map(([title, page]) => (
          <button
            key={title}
            onClick={() => setPage(page)}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 text-left font-serif"
          >
            {title}
          </button>
        ))}
      </div>
    </section>
  );
}

function ServiceDetail({ title, children }) {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto space-y-6 text-sm leading-relaxed text-[#4a545a]">
      <h1 className="text-3xl font-serif text-center">{title}</h1>
      {children}
    </section>
  );
}

/* ================= DETAIL TEXTS FULL ================= */
const Service1 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail title={isHR ? "Iznajmljivanje i upravljanje gostima" : isEN ? "Rental & Guest Management" : "Vermietung und Gästemanagement"}>
      <p>
        {isHR
          ? "Nudimo dugogodišnje, uspješno iskustvo u iznajmljivanju, visoko razumijevanje kvalitete i izražene jezične kompetencije. Znamo što je važno – za zadovoljne goste i opuštene vlasnike."
          : isEN
          ? "We offer many years of successful rental experience, a strong understanding of quality standards and excellent language skills. We know what truly matters – for satisfied guests and relaxed property owners."
          : "Wir bieten eine langjährige, erfolgreiche Erfahrung in der Vermietung, ein hohes Qualitätsverständnis und ausgeprägte Sprachkenntnisse zeichnen uns aus. Wir wissen, worauf es ankommt – für zufriedene Gäste und entspannte Eigentümer."}
      </p>

      <p><strong>{isHR ? "Naše usluge:" : isEN ? "Our services:" : "Unsere Leistungen:"}</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        {isHR ? (
          <>
            <li>Objava vaše nekretnine na svim relevantnim kanalima</li>
            <li>Izrada promotivnih fotografija u svrhu najma</li>
            <li>Predlaganje i određivanje cijena</li>
            <li>Upravljanje rezervacijama</li>
            <li>Komunikacija s gostima prije, tijekom i nakon boravka</li>
            <li>Prijava u mVisitor te obračun turističke pristojbe</li>
          </>
        ) : isEN ? (
          <>
            <li>Listing your property on all relevant channels</li>
            <li>Creation of appealing property images within the scope of rental marketing</li>
            <li>Strategic pricing recommendations and rate management</li>
            <li>Reservation and calendar management</li>
            <li>Guest communication before, during and after the stay</li>
            <li>Registration in mVisitor and tourist tax handling</li>
          </>
        ) : (
          <>
            <li>Inserierung Ihrer Unterkunft auf allen relevanten Kanälen</li>
            <li>Erstellung ansprechender Objektbilder im Rahmen der Vermietung</li>
            <li>Preise vorschlagen und festlegen</li>
            <li>Buchungen verwalten</li>
            <li>Kommunikation mit Gästen vor, während und nach dem Aufenthalt</li>
            <li>Anmeldung im mVisitor sowie Abrechnung der Touristenabgabe</li>
          </>
        )}
      </ul>

      <p><strong>{isHR ? "Dodatno dostupne usluge:" : isEN ? "Additional services available:" : "Zusätzlich buchbare Leistungen:"}</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        {isHR ? (
          <>
            <li>Završno i međučišćenje</li>
            <li>Osobni doček gostiju</li>
            <li>Kontrola apartmana nakon odlaska</li>
            <li>Organizacija manjih popravaka</li>
          </>
        ) : isEN ? (
          <>
            <li>Final and interim cleaning services</li>
            <li>Personal guest welcome and on-site support</li>
            <li>Property inspection after departure</li>
            <li>Coordination of minor repairs and maintenance</li>
          </>
        ) : (
          <>
            <li>End- und Zwischenreinigungen</li>
            <li>Persönlicher Gästeempfang</li>
            <li>Kontrolle der Wohnung nach Abreise</li>
            <li>Organisation kleinerer Reparaturen</li>
          </>
        )}
      </ul>
    </ServiceDetail>
  );
};

const Service2 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail title={isHR ? "Cjelogodišnje upravljanje" : isEN ? "Year-Round Property Management" : "Ganzjährige Verwaltung"}>
      <p>
        {isHR
          ? "Nekretnina zahtijeva redovitu brigu i izvan sezone. Vremenski utjecaji, osobito zimi, mogu uzrokovati oštećenja – bilo zbog vlage, hladnoće ili tehničkih kvarova. Mi smo na licu mjesta i brinemo se o svemu kako biste svoju nekretninu u svakom trenutku znali u sigurnim rukama."
          : isEN
          ? "A property requires regular care even outside the main season. Weather conditions, especially in winter, can cause damage – whether due to humidity, cold or technical defects. We are on site and take care of everything so you always know your property is in safe hands."
          : "Eine Immobilie benötigt auch ausserhalb der Saison regelmässige Betreuung. Witterungseinflüsse, insbesondere im Winter, können Schäden verursachen – sei es durch Feuchtigkeit, Kälte oder technische Defekte. Wir sind vor Ort und kümmern uns darum, damit Sie Ihre Immobilie jederzeit in sicheren Händen wissen."}
      </p>

      <p><strong>{isHR ? "Naše usluge:" : isEN ? "Our services:" : "Unsere Leistungen:"}</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        {isHR ? (
          <>
            <li>Redoviti obilasci nekretnine (uključujući provjetravanje i puštanje vode)</li>
            <li>Vizualna kontrola vlage, oštećenja ili tehničkih nepravilnosti</li>
            <li>Kontrola vrta i vanjskih prostora uz jednostavne radove održavanja</li>
            <li>Organizacija manjih popravaka prema potrebi</li>
            <li>Izvanredne intervencije nakon nevremena ili hitnih situacija</li>
            <li>Pohrana ključeva</li>
            <li>Elektronička ili fizička dostava pošte</li>
            <li>Kratko izvješće nakon svakog obilaska</li>
            <li>Detaljno godišnje izvješće o stanju nekretnine</li>
          </>
        ) : isEN ? (
          <>
            <li>Regular property inspections (including ventilation and water checks)</li>
            <li>Visual control for humidity, damage or technical irregularities</li>
            <li>Garden and outdoor area inspection with basic maintenance</li>
            <li>Coordination of minor repairs when needed</li>
            <li>Emergency interventions after storms or urgent situations</li>
            <li>Key holding service</li>
            <li>Electronic or physical mail handling</li>
            <li>Short report after each inspection</li>
            <li>Detailed annual property condition report</li>
          </>
        ) : (
          <>
            <li>Regelmässige Rundgänge der Immobilie (inkl. Lüften und Wasser laufen lassen)</li>
            <li>Sichtkontrolle auf Feuchtigkeit, Schäden oder technische Auffälligkeiten</li>
            <li>Garten- und Aussenbereichskontrolle inkl. einfacher Pflegearbeiten</li>
            <li>Organisation kleinerer Reparaturarbeiten bei Bedarf</li>
            <li>Ausserordentliche Einsätze nach Unwettern oder Notfällen</li>
            <li>Schlüsselaufbewahrung</li>
            <li>Elektronische oder physische Zustellung der Post</li>
            <li>Kurzes Reporting nach jedem Rundgang</li>
            <li>Ausführlicher Zustandsbericht einmal pro Jahr</li>
          </>
        )}
      </ul>
    </ServiceDetail>
  );
};

const Service3 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail title={isHR ? "Bezbrižan odmor" : isEN ? "Carefree Owner Stay" : "Sorgenfreier Urlaub"}>
      <p>
        {isHR
          ? "Kako biste svoj boravak mogli uživati od prve do posljednje minute – bez organizacijskog stresa."
          : isEN
          ? "So that you can enjoy your stay from the first to the last minute – without any organizational stress."
          : "Damit Sie Ihren Aufenthalt von der ersten bis zur letzten Minute geniessen können – ohne organisatorischen Stress."}
      </p>

      <p><strong>{isHR ? "Naše usluge:" : isEN ? "Our services:" : "Unsere Leistungen:"}</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        {isHR ? (
          <>
            <li>Čišćenje prije dolaska i nakon odlaska</li>
            <li>Postavljanje i pranje posteljine</li>
            <li>Na zahtjev: napunjen hladnjak pri dolasku</li>
            <li>Zatvaranje nekretnine nakon odlaska</li>
            <li>Kratko izvješće o stanju prije i nakon boravka</li>
          </>
        ) : isEN ? (
          <>
            <li>Cleaning before arrival and after departure</li>
            <li>Bed linen preparation and laundry service</li>
            <li>On request: pre-filled refrigerator upon arrival</li>
            <li>Securing the property after departure</li>
            <li>Short condition report before and after your stay</li>
          </>
        ) : (
          <>
            <li>Reinigung vor Ankunft und nach Abreise</li>
            <li>Betten beziehen und Wäsche waschen</li>
            <li>Auf Wunsch: gefüllter Kühlschrank bei Ankunft</li>
            <li>Schliessen der Immobilie nach Abreise</li>
            <li>Kurzes Zustandsreporting vor und nach Ihrem Aufenthalt</li>
          </>
        )}
      </ul>
    </ServiceDetail>
  );
};

const Service4 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail title={isHR ? "Preuređenje / dekoracija" : isEN ? "Redesign & Styling" : "Neugestaltung/Dekoration"}>
      <p>
        {isHR
          ? "Imamo osjećaj za prostor i volimo nekretnine oblikovati sa stilom, udobno i s posebnim wow-efektom – kako za vlastito korištenje tako i za iznajmljivanje."
          : isEN
          ? "We have a strong sense for space and love designing properties with style, comfort and a distinctive wow effect – both for private use and for rental purposes."
          : "Wir haben ein Gespür für Räume und lieben es, Immobilien stilvoll, gemütlich und mit einem besonderen Wow-Effekt zu gestalten – sowohl für Eigennutzung als auch für die Vermietung."}
      </p>

      <p><strong>{isHR ? "Naše usluge:" : isEN ? "Our services:" : "Unsere Leistungen:"}</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        {isHR ? (
          <>
            <li>Kreativni prijedlozi uređenja uključujući okvirnu procjenu troškova</li>
            <li>Jednokratno preuređenje jednog apartmana besplatno u slučaju preuzimanja iznajmljivanja (troškove materijala snosi vlasnik)</li>
          </>
        ) : isEN ? (
          <>
            <li>Creative interior concepts including an initial cost estimate</li>
            <li>One-time redesign of an apartment free of charge when we take over the rental management (material costs borne by the owner)</li>
          </>
        ) : (
          <>
            <li>Kreative Gestaltungsvorschläge inkl. grober Kostenschätzung</li>
            <li>Einmalige Umgestaltung eines Apartments kostenlos bei Übernahme der Vermietung (Materialkosten trägt der Eigentümer)</li>
          </>
        )}
      </ul>

      <p>
        {isHR
          ? "(Primjeri fotografija iz vlastitih projekata dostupni su na upit)"
          : isEN
          ? "(Sample images from our own projects are available upon request)"
          : "(Beispielbilder aus eigenen Projekten verfügbar)"}
      </p>
    </ServiceDetail>
  );
};



const Service6 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail title={isHR ? "Podrška kod renovacija i sanacija" : isEN ? "Renovation & Refurbishment Support" : "Unterstützung bei Renovationen und Sanierungen"}>
      <p>
        {isHR
          ? "Mnogi vlasnici ne mogu biti trajno prisutni na licu mjesta. Preuzimamo ulogu vaše produžene ruke i osiguravamo nesmetan tijek radova."
          : isEN
          ? "Many owners cannot be permanently on site. We act as your extended arm and ensure smooth coordination of all works."
          : "Viele Eigentümer können nicht dauerhaft vor Ort sein. Wir übernehmen die Rolle Ihres verlängernden Arms und sorgen für einen reibungslosen Ablauf."}
      </p>

      <p><strong>{isHR ? "Naše usluge:" : isEN ? "Our services:" : "Unsere Leistungen:"}</strong></p>
      <ul className="list-disc pl-6 space-y-1">
        {isHR ? (
          <>
            <li> koordinacija i dogovor termina s izvođačima radova</li>
            <li> organizacija pristupa nekretnini za izvođače</li>
            <li> prosljeđivanje ponuda i informacija vlasniku</li>
            <li> usklađivanje termina i tijeka radova</li>
            <li> prisutnost na lokaciji prema potrebi radi organizacijske podrške</li>
            <li> fotodokumentacija napretka radova</li>
            <li> redovito informiranje vlasnika o stanju radova</li>

          </>
        ) : isEN ? (
          <>
            <li>Coordination and scheduling with contractors</li>
            <li>Organizing access to the property for contractors</li>
            <li>Forwarding offers and information to the property owner</li>
            <li>Coordination of schedules and workflow of the works</li>
           <li>On-site presence when necessary for organizational support</li>
           <li>Photo documentation of the progress of the works</li>
           <li>Regular updates to the owner on the status of the works</li>          </>
        ) : (
          <>
            <li>Koordination und Terminabstimmung mit Handwerkern</li>
            <li>Organisation des Zugangs zur Immobilie für Handwerker</li>
            <li>Weiterleitung von Angeboten und Informationen an den Eigentümer</li>
            <li>Abstimmung der Termine und des Ablaufs der Arbeiten</li>
            <li>Anwesenheit vor Ort bei Bedarf zur organisatorischen Unterstützung</li>
            <li>Fotodokumentation des Fortschritts der Arbeiten</li>
            <li>Regelmäßige Information des Eigentümers über den Stand der Arbeiten</li>          </>
        )}
      </ul>

      <p>
        {isHR
          ? "Napomena: Ne preuzimamo stručnu izvedbu niti pravnu odgovornost."
          : isEN
          ? "Note: We do not assume professional execution or legal responsibility."
          : "Hinweis: Keine fachliche Ausführung oder rechtliche Verantwortung."}
      </p>
    </ServiceDetail>
  );
};

const Service7 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <ServiceDetail title={isHR ? "Podrška pri prodaji" : isEN ? "Sales Support" : "Unterstützung beim Verkauf"}>
      <p><strong>{isHR ? "Naše usluge:" : isEN ? "Our services:" : "Unsere Leistungen:"}</strong></p>

      <ul className="list-disc pl-6 space-y-1">
        {isHR ? (
          <>
            <li>Savjetovanje o strategiji prodaje i pozicioniranju na tržištu</li>
            <li>Izrada oglasa, prezentacijskih materijala i marketinške dokumentacije</li>
            <li>Organizacija i pratnja razgledavanja</li>
            <li>Komunikacija s potencijalnim kupcima</li>
            <li>Praćenje cjelokupnog procesa prodaje</li>
          </>
        ) : isEN ? (
          <>
            <li>Consulting on sales strategy and market positioning</li>
            <li>Preparation of listings, exposés and marketing materials</li>
            <li>Organization and accompaniment of property viewings</li>
            <li>Communication with prospective buyers</li>
            <li>Support throughout the entire sales process</li>
          </>
        ) : (
          <>
            <li>Beratung zur Verkaufsstrategie und Positionierung am Markt</li>
            <li>Erstellung von Inseraten, Exposés und Marketingunterlagen</li>
            <li>Organisation und Begleitung von Besichtigungen</li>
            <li>Kommunikation mit Kaufinteressenten</li>
            <li>Begleitung des Verkaufsprozesses</li>
          </>
        )}
      </ul>

      <p>
        {isHR
          ? "Pravni zaključak ugovora kao i porezno i pravno savjetovanje provode se isključivo putem ovlaštenog odvjetnika. Rado ćemo vam preporučiti odgovarajućeg stručnjaka."
          : isEN
          ? "The legal conclusion of contracts as well as tax and legal advice are carried out exclusively by an authorized attorney. We are happy to recommend a suitable professional."
          : "Der rechtliche Vertragsabschluss sowie die steuerliche und rechtliche Beratung erfolgen ausschliesslich durch einen beauftragten Anwalt. Wir stellen Ihnen gerne einen zur Seite."}
      </p>
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

          <p>In der Schweiz absolvierte sie eine fundierte kaufmännische Ausbildung und entdeckte früh ihre Leidenschaft für Immobilien. Während ihrer Tätigkeit bei einigen der grössten Immobilienverwaltungsunternehmen der Schweiz absolvierte sie die Weiterbildung zur eidg. Immobilienbewirtschafterin ab, betreute private sowie institutionelle Kunden – darunter Banken und Versicherungen – und übernahm die ganzheitliche operative und organisatorische Verantwortung für Immobilien.</p>

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

  let content;

switch (page) {
  case "about": content = <About lang={lang} />; break;
  case "services": content = <Services setPage={setPage} lang={lang} />; break;
  case "service1": content = <Service1 lang={lang} />; break;
  case "service2": content = <Service2 lang={lang}/>; break;
  case "service3": content = <Service3 lang={lang}/>; break;
  case "service4": content = <Service4 lang={lang}/>; break;
  
  case "service6": content = <Service6 lang={lang}/>; break;
  case "service7": content = <Service7 lang={lang}/>; break;
  case "contact": content = <Contact lang={lang} />; break;
  case "legal": content = <Legal lang={lang} />; break;
  default: content = <Home lang={lang} />;
}

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f2ed]">
      <Navigation setPage={setPage} lang={lang} setLang={setLang} />
      <main className="flex-grow pt-36 md:pt-44">{content}</main>
      <FooterBar />
    </div>
  );
}
