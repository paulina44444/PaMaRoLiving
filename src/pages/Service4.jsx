import React from "react";
import ServiceDetail from "../components/ServiceDetail";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import {
  House,
  Map,
  Palette,
  Sparkles,
  ClipboardList,
  Package,
  Sun,
} from "lucide-react";
const Service4 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <>
  <Helmet>
    <title>
      {isHR
        ? "PaMaRo Living | Uređenje interijera"
        : isEN
        ? "PaMaRo Living | Interior Design"
        : "PaMaRo Living | Inneneinrichtung in Dalmatien"}
    </title>

    <meta
      name="description"
      content={
        isHR
          ? "Uređenje interijera, koncepti prostora, odabir namještaja, boja i materijala za nekretnine u Dalmaciji."
          : isEN
          ? "Interior design, space concepts, furniture selection and styling for properties in Dalmatia."
          : "Inneneinrichtung, Raumkonzepte, Farbgestaltung und Möblierung für Ferienimmobilien und Wohnräume in Dalmatien."
      }
    />

    <meta
      name="keywords"
      content={
        isHR
          ? "uređenje interijera, dizajn interijera, Dalmacija, nekretnina"
          : isEN
          ? "interior design, interior styling, Dalmatia, Croatia"
          : "Inneneinrichtung Dalmatien, Interior Design Kroatien, Ferienhaus Einrichtung, Raumgestaltung Dalmatien"
      }
    />
  </Helmet>
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
                  ? "Uređenje interijera"
                  : isEN
                  ? "Interior Design"
                  : "Stilvolle Einrichtung"}
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
                ? "Space Concepts"
                : "Raumkonzepte"}
            </h3>

            <p>
{isHR
  ? "Promišljeni prijedlozi rasporeda i uređenja prostora za skladan i ugodan dom, uključujući renovacije i preuređenja."
  : isEN
  ? "Thoughtful space planning and furnishing ideas for harmonious and inviting living environments, including renovations and redesigns."
  : "Durchdachte Raumaufteilungen und Einrichtungsvorschläge für ein harmonisches Wohngefühl – auch bei Renovationen und Umgestaltungen."}
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
<div className="bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
  <div className="mb-5 flex items-center justify-center">
    <Palette size={34} className="text-[#c6a27b]" />
  </div>

  <h3 className="font-serif text-lg mb-1 min-h-[56px] flex items-start justify-center">
    {isHR
      ? "Koncept boja"
      : isEN
      ? "Colour Concepts"
      : "Farbkonzepte"}
  </h3>

  <p>
    {isHR
      ? "Harmonične kombinacije boja prilagođene prostoru, svjetlu i okruženju."
      : isEN
      ? "Harmonious colour schemes tailored to the space, natural light and surrounding environment."
      : "Harmonische Farbwelten abgestimmt auf Architektur, Lichtverhältnisse und Umgebung."}
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
  ? "Budžet & procjena troškova"
  : isEN
  ? "Budget & Cost Estimation"
  : "Budget & Kostenschätzung"}
            </h3>

            <p>
{isHR
  ? "Realna procjena troškova kao orijentacija za planiranje i kasniju realizaciju projekta."
  : isEN
  ? "Realistic cost estimates to support planning and provide guidance for the implementation phase."
  : "Realistische Kostenschätzung als Orientierung für die spätere Umsetzung Ihres Projekts."}
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
{/* REFERENCES */}
<section className="max-w-5xl mx-auto px-6 pt-20 text-center">

  <div className="w-20 h-[1px] bg-[#c6a27b] mx-auto mb-8"></div>

  <h3 className="font-serif text-3xl text-[#2f3a40] mb-6">
    {isHR
      ? "Reference & inspiracija"
      : isEN
      ? "References & Inspiration"
      : "Referenzen & Wohninspirationen"}
  </h3>

  <p className="text-[#5f6a70] leading-relaxed max-w-2xl mx-auto mb-6">
    {isHR
      ? "Uvid u odabrane koncepte prostora, detalje i mediteransku atmosferu stanovanja."
      : isEN
      ? "Insights into selected interior concepts, details and Mediterranean living atmosphere."
      : "Einblicke in ausgewählte Raumkonzepte, Details und mediterrane Wohnatmosphäre."}
  </p>

  <p className="text-[#5f6a70] leading-relaxed max-w-2xl mx-auto mb-10">
    {isHR
      ? "Za odabrane projekte po želji izrađujemo i atmosferične fotografije za prezentaciju vaše nekretnine."
      : isEN
      ? "For selected projects, we also create atmospheric photography for the presentation of your property upon request."
      : "Für ausgewählte Projekte erstellen wir auf Wunsch auch atmosphärische Aufnahmen zur Präsentation Ihrer Immobilie."}
  </p>

<Link
  to="/references"
  className="inline-block border border-[#c6a27b] text-[#2f3a40] px-8 py-4 tracking-[0.12em] uppercase text-sm hover:bg-[#c6a27b] hover:text-white transition"
>
  {isHR
    ? "Pogledajte reference"
    : isEN
    ? "View References"
    : "Referenzen ansehen"}
</Link>

</section>
</ServiceDetail>
</>
);
};

export default Service4;

