import React from "react";
import ServiceDetail from "../components/ServiceDetail";
import { Helmet } from "react-helmet-async";

import {
  House,
  Eye,
  Trees,
  Wrench,
  CloudRain,
  Key,
  Mail,
  FileText,
  Calendar,
} from "lucide-react";
const Service2 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <>
  <Helmet>
    <title>
      {isHR
        ? "PaMaRo Living | Briga o nekretnini"
        : isEN
        ? "PaMaRo Living | Property Care"
        : "PaMaRo Living | Immobilienbetreuung in Dalmatien"}
    </title>

    <meta
      name="description"
      content={
        isHR
          ? "Redoviti obilasci, kontrola nekretnine, organizacija popravaka i hitne intervencije za vlasnike nekretnina u Dalmaciji."
          : isEN
          ? "Property inspections, maintenance coordination, key holding and emergency support for homeowners in Dalmatia."
          : "Immobilienbetreuung in Dalmatien mit regelmässigen Kontrollen, Hausservice, Schlüsselservice, Reparaturorganisation und Notfallhilfe."
      }
    />

    <meta
      name="keywords"
      content={
        isHR
          ? "briga o nekretnini, nadzor kuće, Dalmacija, kuća za odmor"
          : isEN
          ? "property care, property management, home watch, Dalmatia, Croatia"
          : "Immobilienbetreuung Dalmatien, Hausservice Kroatien, Ferienhaus Betreuung, Property Management Kroatien"
      }
    />
  </Helmet>
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
{/* SEO INTRO */}
<div className="space-y-6 text-[#5f6a70] leading-relaxed">

  <p>
    {isHR
      ? "Vlasnici nekretnina koji ne borave tijekom cijele godine u Dalmaciji često trebaju pouzdanu osobu koja će redovito nadzirati njihov dom. PaMaRo Living pruža osobnu brigu o nekretninama, organizaciju održavanja te podršku prije dolaska, tijekom boravka i nakon odlaska."
      : isEN
      ? "Property owners who are not in Dalmatia all year round often need someone they can rely on. PaMaRo Living provides personal property care, maintenance coordination and support before arrival, during your stay and after departure."
      : "Wer seine Immobilie in Dalmatien nicht das ganze Jahr selbst nutzen kann, benötigt eine vertrauenswürdige Betreuung vor Ort. PaMaRo Living übernimmt die persönliche Immobilienbetreuung, organisiert notwendige Arbeiten und unterstützt Sie vor der Anreise, während Ihres Aufenthalts und nach Ihrer Abreise."}
  </p>

  <p>
    {isHR
      ? "Naše usluge obuhvaćaju redovite kontrole objekta, koordinaciju lokalnih majstora, pripremu nekretnine prije dolaska, organizaciju čišćenja te individualne koncepte uređenja interijera. Sve usluge prilagođene su vlasnicima nekretnina na području Makarske rivijere i Omiške rivijere koji traže diskretnu, pouzdanu i osobnu podršku."
      : isEN
      ? "Our services include regular property inspections, coordination of local craftsmen, home preparation before arrival, cleaning arrangements and individual interior design concepts. Every service is tailored to property owners along the Makarska and Omiš Riviera who value reliability, discretion and personal support."
      : "Unsere Leistungen umfassen regelmässige Objektkontrollen, die Koordination lokaler Handwerker, die Vorbereitung Ihrer Immobilie vor der Anreise, die Organisation von Reinigungsarbeiten sowie individuelle Konzepte für die Inneneinrichtung. Alle Dienstleistungen richten sich an Eigentümer an der Makarska- und Omiš-Riviera, die Wert auf Zuverlässigkeit, Diskretion und persönliche Betreuung legen."}
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
  </>
  );
};

export default Service2;

