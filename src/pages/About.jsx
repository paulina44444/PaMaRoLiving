import React from "react";
import { User, ShieldCheck, Heart } from "lucide-react";
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
<section className="relative overflow-hidden">
{/* MOBILE HERO */}
<div className="lg:hidden relative h-[320px] overflow-hidden">

  <img
    src="/about-hero.jpg"
    alt="About"
className="absolute inset-0 w-full h-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-black/35"></div>

  <div className="relative z-10 h-full flex items-center px-8 pt-16">

    <div>

      <h1 className="font-serif text-5xl text-white leading-tight mb-6">
        {isHR ? "O nama" : isEN ? "About us" : "Über uns"}
      </h1>

      <div className="w-16 h-[1px] bg-white/70 mb-6"></div>

      <p className="text-white/90 leading-relaxed max-w-sm">
        {isHR
          ? "Osobna briga, povjerenje i dugogodišnje iskustvo u području nekretnina."
          : isEN
          ? "Personal care, trust and many years of experience in real estate."
          : "Persönliche Betreuung, Vertrauen und langjährige Erfahrung im Immobilienbereich."}
      </p>

    </div>

  </div>

</div>

<div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

    {/* LEFT */}
    <div className="flex items-center px-8 md:px-16 py-16">

      <div className="max-w-xl">

        <h1 className="font-serif text-5xl md:text-6xl text-[#2f3a40] leading-tight mb-8">
          {isHR ? "O nama" : isEN ? "About us" : "Über uns"}
        </h1>

        <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="hidden lg:block relative h-[320px] lg:h-auto overflow-hidden">

      <img
        src="/about-hero.jpg"
        alt="PaMaRo Living"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ objectPosition: "center top" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f2ed] via-[#f7f2ed]/70 to-transparent"></div>

    </div>

  </div>

</section>

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

export default About;

