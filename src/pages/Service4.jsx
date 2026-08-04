import React from "react";
import ServiceDetail from "../components/ServiceDetail";
import { Helmet } from "react-helmet-async";

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

  </Helmet>
    <ServiceDetail>

      {/* HERO */}
      <div className="relative w-full h-[400px] overflow-hidden">

        <img
          src="/interior-design.jpg"
          alt="Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

<div className="max-w-xl mx-auto text-white text-center">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center break-words">
                {isHR
                  ? "Uređenje interijera"
                  : isEN
                  ? "Interior Design"
                  : "Stilvolle Einrichtung"}
              </h1>

              <div className="w-20 h-[2px] bg-[#c6a27b] mx-auto"></div>

            </div>

          </div>

        </div>

      </div>
{/* SEO INTRO */}
<section className="max-w-3xl mx-auto px-6 pt-16 pb-8 text-center">

  <p className="font-serif italic text-xl md:text-2xl text-[#2f3a40] mb-8">
    {isHR
      ? "Vaš dom, nanovo osmišljen – sa stilom i strukturom"
      : isEN
      ? "Your home, reimagined – with style and structure"
      : "Ihr Zuhause, neu gedacht – mit Stil und Struktur"}
  </p>

  <div className="space-y-6 text-[#5f6a70] leading-relaxed">

    <p>
      {isHR
        ? "Od odabira boja i materijala do rasporeda prostora i namještaja, svaki detalj doprinosi ugodnoj atmosferi doma. PaMaRo Living prati vlasnike nekretnina na području Makarske i Omiške rivijere od prve ideje do završnog uređenja – bilo da uređujete novi apartman, kuću za odmor ili želite osvježiti postojeći prostor."
        : isEN
        ? "From the choice of colours and materials to furniture and space planning, every detail contributes to a welcoming atmosphere. PaMaRo Living accompanies property owners along the Makarska and Omiš Riviera from the first idea to the final setup – whether furnishing a new apartment, a holiday home or refreshing an existing property."
        : "Von der Auswahl der Farben und Materialien bis zur Möblierung und Raumaufteilung trägt jedes Detail zu einer harmonischen Atmosphäre bei. PaMaRo Living begleitet Eigentümer an der Makarska- und Omiš-Riviera von der ersten Idee bis zur fertigen Einrichtung – ob neue Ferienwohnung, Ferienhaus oder die Neugestaltung bestehender Räume."}
    </p>

  </div>

</section>
      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-0">

        <div className="flex items-center justify-center gap-6 mb-16">

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

          <h2 className="font-serif text-5xl text-[#2f3a40] text-center">
            {isHR ? "Naše usluge" : isEN ? "Our Services" : "Unsere Leistungen"}
          </h2>

          <div className="w-20 h-[1px] bg-[#c6a27b]"></div>

        </div>

        <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">

          {/* 1 */}
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
<div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
</>
);
};

export default Service4;

