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
{/* SEO INTRO */}
<section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">

  <h2 className="font-serif text-3xl text-[#2f3a40] mb-8">
    {isHR
      ? "Bezbrižan boravak na Makarskoj i Omiškoj rivijeri"
      : isEN
      ? "Carefree Stay on the Makarska and Omiš Riviera"
      : "Sorgenfreier Aufenthalt an der Makarska- und Omiš-Riviera"}
  </h2>

  <div className="space-y-6 text-[#5f6a70] leading-relaxed">

    <p>
      {isHR
        ? "Dolazak u vlastitu nekretninu trebao bi biti jednostavan i opušten. Priprema doma prije dolaska, organizacija čišćenja i briga o svim detaljima omogućuju vam da od prvog trenutka uživate u svom boravku."
        : isEN
        ? "Arriving at your own property should be simple and stress-free. Preparing your home before arrival, organising cleaning services and taking care of every detail allows you to enjoy your stay from the very first moment."
        : "Die Ankunft in der eigenen Immobilie sollte unkompliziert und entspannt sein. Die Vorbereitung Ihres Zuhauses, die Organisation von Reinigungsarbeiten und die Betreuung aller Details ermöglichen Ihnen einen sorgenfreien Aufenthalt ab dem ersten Moment."}
    </p>

    <p>
      {isHR
        ? "PaMaRo Living podržava vlasnike nekretnina na području Makarske i Omiške rivijere pri dolasku, boravku i odlasku. Od pripreme nekretnine i usluge ključeva do organizacije dodatnih usluga – brinemo se da vaš dom bude spreman kada vam je potreban."
        : isEN
        ? "PaMaRo Living supports property owners along the Makarska and Omiš Riviera before arrival, during their stay and upon departure. From property preparation and key services to arranging additional assistance, we ensure your home is ready whenever you need it."
        : "PaMaRo Living unterstützt Eigentümer an der Makarska- und Omiš-Riviera vor der Anreise, während des Aufenthalts und bei der Abreise. Von der Vorbereitung der Immobilie über den Schlüsselservice bis zur Organisation zusätzlicher Dienstleistungen sorgen wir dafür, dass Ihr Zuhause jederzeit bereit ist."}
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
</>
);
};

export default Service3;

