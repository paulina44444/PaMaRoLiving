import React from "react";
import { House, Sun, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
/* ================= HOME ================= */
function Home({ lang }) {
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
  <>
<Helmet>
  <title>
    {isHR
      ? "PaMaRo Living | Briga o nekretnini i kućni servis u Dalmaciji"
      : isEN
      ? "PaMaRo Living | Property Care & Home Services in Dalmatia"
      : "PaMaRo Living | Immobilienbetreuung & Hausservice in Dalmatien"}
  </title>

  <meta
    name="description"
    content={
      isHR
        ? "Briga o nekretnini, priprema doma, nadzor i uređenje interijera u Dalmaciji. Pouzdana i osobna usluga za vlasnike nekretnina."
        : isEN
        ? "Property care, home preparation, inspections and interior styling in Dalmatia. Reliable and personal service for property owners."
        : "Immobilienbetreuung, Hausservice, Kontrollen und Inneneinrichtung in Dalmatien. Persönliche und zuverlässige Betreuung für Eigentümer."
    }
  />
</Helmet>

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
    ? <>Vaša nekretnina,<br className="md:hidden" /> naša briga.</>
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
  <Link
    key={title}
    to={
      page === "service2"
        ? "/services/property-care"
        : page === "service3"
        ? "/services/carefree-stay"
        : "/services/interior-design"
    }
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

</Link>
          ))}

            </div>
      </section>
```jsx
{/* SEO INTRO */}
<section className="max-w-4xl mx-auto px-6 pt-8 pb-16 text-center">

  <h2 className="font-serif text-3xl text-[#2f3a40] mb-8">
    {isHR
      ? "Pouzdana briga o nekretninama na Makarskoj i Omiškoj rivijeri"
      : isEN
      ? "Reliable Property Care on the Makarska and Omiš Riviera"
      : "Zuverlässige Immobilienbetreuung an der Makarska- und Omiš-Riviera"}
  </h2>

  <div className="space-y-6 text-[#5f6a70] leading-relaxed">

    <p>
      {isHR
        ? "PaMaRo Living pruža osobnu podršku vlasnicima nekretnina na području Makarske i Omiške rivijere. Redoviti obilasci, nadzor objekta, organizacija održavanja i koordinacija lokalnih usluga pomažu očuvati vrijednost vaše nekretnine tijekom cijele godine."
        : isEN
        ? "PaMaRo Living provides personal support for property owners along the Makarska and Omiš Riviera. Regular inspections, property supervision, maintenance coordination and local support services help preserve the value of your property throughout the year."
        : "PaMaRo Living bietet Eigentümern an der Makarska- und Omiš-Riviera persönliche Unterstützung. Regelmässige Kontrollen, Immobilienbetreuung, die Organisation von Unterhaltsarbeiten und die Koordination lokaler Dienstleistungen helfen dabei, den Wert Ihrer Immobilie langfristig zu erhalten."}
    </p>

    <p>
      {isHR
        ? "Uz brigu o nekretnini nudimo i podršku pri dolasku i boravku te individualne koncepte uređenja interijera. Sve usluge prilagođene su vlasnicima koji traže pouzdanu, diskretnu i osobnu podršku za svoj dom u Dalmaciji."
        : isEN
        ? "In addition to property care, we offer arrival support, key services and individual interior design concepts. Our services are tailored to owners seeking reliable, discreet and personal assistance for their home in Dalmatia."
        : "Ergänzend zur Immobilienbetreuung bieten wir Unterstützung rund um Anreise und Aufenthalt sowie individuelle Einrichtungskonzepte. Unsere Leistungen richten sich an Eigentümer, die für ihr Zuhause in Dalmatien eine zuverlässige, diskrete und persönliche Betreuung suchen."}
    </p>

  </div>

</section>
```

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
  </>
  );
}

export default Home;