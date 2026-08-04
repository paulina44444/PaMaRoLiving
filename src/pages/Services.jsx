import React from "react";
import { House, Sun, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { withLang } from "../lib/i18n";

function Services({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

return (
  <>
    <Helmet>
      <title>
        {isHR
          ? "PaMaRo Living | Naše usluge"
          : isEN
          ? "PaMaRo Living | Our Services"
          : "PaMaRo Living | Unsere Dienstleistungen"}
      </title>

      <meta
        name="description"
        content={
          isHR
            ? "Briga o nekretnini, bezbrižan boravak i uređenje interijera u Dalmaciji."
            : isEN
            ? "Property care, carefree stay and interior styling services in Dalmatia."
            : "Immobilienbetreuung, sorgenfreier Aufenthalt und stilvolle Einrichtung in Dalmatien."
        }
      />
    </Helmet>

    <section className="bg-[#f7f2ed]">

      {/* HERO */}
      <div className="relative w-full h-[400px] overflow-hidden">

        <img
          src="/services.jpg"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

            <div className="max-w-xl mx-auto text-white text-center">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center">
                {isHR
                  ? "Naše usluge"
                  : isEN
                  ? "Our Services"
                  : "Unsere Dienstleistungen"}
              </h1>

              <div className="w-20 h-[2px] bg-[#c6a27b] mx-auto"></div>

            </div>

          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">

        <p className="font-serif italic text-xl md:text-2xl text-[#2f3a40] text-center mb-12">
          {isHR
            ? "Sve što je vašoj nekretnini potrebno – pouzdano, diskretno i profesionalno"
            : isEN
            ? "Everything your property needs – reliable, discreet and professional"
            : "Alles, was Ihre Immobilie braucht – zuverlässig, diskret und professionell"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Property Care */}
          <Link
            to={withLang(lang, "/services/property-care")}
            className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition text-center border border-[#efe7df] block"
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
                ? "Osobna briga o nekretnini, redovite kontrole i organizacija na licu mjesta."
                : isEN
                ? "Personal property care, regular inspections and on-site coordination."
                : "Persönliche Betreuung, regelmässige Kontrollen und Organisation vor Ort."}
            </p>
          </Link>

          {/* Carefree Stay */}
          <Link
            to={withLang(lang, "/services/carefree-stay")}
            className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition text-center border border-[#efe7df] block"
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
          </Link>

          {/* Interior Styling */}
          <Link
            to={withLang(lang, "/services/interior-design")}
            className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition text-center border border-[#efe7df] block"
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
          </Link>

        </div>

      </div>

    </section>
  </>
  );
}

export default Services;