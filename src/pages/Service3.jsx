import React from "react";
import ServiceDetail from "../components/ServiceDetail";
import { Helmet } from "react-helmet-async";

import {
  House,
  Star,
  ClipboardList,
  Key,
  Sun,
} from "lucide-react";
const Service3 = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <>
  <Helmet>
    <title>
      {isHR
        ? "PaMaRo Living | Bezbrižan boravak"
        : isEN
        ? "PaMaRo Living | Carefree Stay"
        : "PaMaRo Living | Sorgenfreier Aufenthalt in Dalmatien"}
    </title>

    <meta
      name="description"
      content={
        isHR
          ? "Priprema nekretnine, organizacija čišćenja, usluga ključeva i podrška tijekom vašeg boravka u Dalmaciji."
          : isEN
          ? "Property preparation, key holding, cleaning coordination and personal support during your stay in Dalmatia."
          : "Vorbereitung Ihrer Immobilie, Schlüsselservice, Organisation von Reinigung und persönliche Betreuung während Ihres Aufenthalts in Dalmatien."
      }
    />

    <meta
      name="keywords"
      content={
        isHR
          ? "priprema nekretnine, usluga ključeva, Dalmacija, kuća za odmor"
          : isEN
          ? "property preparation, key service, holiday home, Dalmatia, Croatia"
          : "Schlüsselservice Dalmatien, Ferienhaus Service Kroatien, Hausservice Dalmatien, Betreuung Ferienimmobilie"
      }
    />
  </Helmet>
    <ServiceDetail>

      {/* HERO */}
      <div className="relative w-full h-[400px] overflow-hidden">

        <img
          src="/carefree-stay.jpg"
          alt="Carefree Stay"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

<div className="max-w-xl mx-auto text-white text-center">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center break-words">
                {isHR
                  ? "Bezbrižan boravak"
                  : isEN
                  ? "Carefree Stay"
                  : "Sorgenfreier Aufenthalt"}
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
      ? "Vaš dom spreman za dolazak, bez brige o detaljima"
      : isEN
      ? "Your home ready on arrival, without the hassle"
      : "Ihr Zuhause bereit bei der Ankunft – ganz ohne Aufwand für Sie"}
  </p>

  <div className="space-y-6 text-[#5f6a70] leading-relaxed">

    <p>
      {isHR
        ? "PaMaRo Living priprema vašu nekretninu na području Makarske i Omiške rivijere prije vašeg dolaska – uključujući čišćenje, kupovinu prema želji i osobnu predaju ključeva. Tu smo i tijekom vašeg boravka po potrebi, kako biste se mogli opušteno prepustiti odmoru od prvog do zadnjeg dana."
        : isEN
        ? "PaMaRo Living prepares your property along the Makarska and Omiš Riviera before you arrive – including cleaning, groceries on request and a personal key handover. We're also on hand during your stay whenever needed, so you can relax from the first day to the last."
        : "PaMaRo Living bereitet Ihre Immobilie an der Makarska- und Omiš-Riviera vor Ihrer Ankunft vor – inklusive Reinigung, Einkauf nach Wunsch und persönlicher Schlüsselübergabe. Auch während Ihres Aufenthalts sind wir bei Bedarf für Sie da, damit Sie sich vom ersten bis zum letzten Tag entspannt zurücklehnen können."}
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
          <div className="w-full sm:w-64 bg-[#f7f2ed] rounded-3xl p-5 min-h-[220px] shadow-sm text-center">
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
</>
);
};

export default Service3;

