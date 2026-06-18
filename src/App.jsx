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
CloudRain,
Calendar,
User,
Heart,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Navigation from "./components/Navigation";
import FooterBar from "./components/FooterBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./components/ServiceDetail";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import References from "./pages/References";


/* ================= CONTACT ================= */
const Contact = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <div className="bg-[#f7f2ed] min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden">
{/* MOBILE HERO */}
<div className="lg:hidden relative h-[320px] overflow-hidden">

  <img
    src="/contact-image.jpg"
    alt="Kontakt"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/35"></div>

  <div className="relative z-10 h-full flex items-center px-8 pt-16">

    <div>

      <h1 className="font-serif text-5xl text-white leading-tight mb-6">
        {isHR ? "Kontakt" : isEN ? "Contact" : "Kontakt"}
      </h1>

      <div className="w-16 h-[1px] bg-white/70 mb-6"></div>

      <p className="text-white/90 leading-relaxed max-w-sm">
        {isHR
          ? "Bilo da vam je potrebna briga o nekretnini, bezbrižan boravak ili preuređenje."
          : isEN
          ? "Whether you need property care, a carefree stay or redesign."
          : "Ob Immobilienbetreuung, sorgenfreier Aufenthalt oder Neugestaltung."}
      </p>

    </div>

  </div>

</div>

<div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

          {/* LEFT */}
          <div className="flex items-center px-8 md:px-16 py-16">

            <div className="max-w-xl">

              <h1 className="font-serif text-5xl md:text-6xl text-[#2f3a40] leading-tight mb-8">
                {isHR ? "Kontakt" : isEN ? "Contact" : "Kontakt"}
              </h1>

<div className="w-20 h-[1px] bg-[#c6a27b] mb-8"></div>

              <p className="text-[#4d5960] text-lg leading-relaxed">
                {isHR
                  ? "Bilo da vam je potrebna briga o nekretnini, bezbrižan boravak ili preuređenje – veselimo se vašem upitu i rado ćemo vas osobno savjetovati."
                  : isEN
                  ? "Whether you need property care, a worry-free stay or a redesign – we look forward to your inquiry and are happy to advise you personally."
                  : "Ob Immobilienbetreuung, sorgenfreier Aufenthalt oder Neugestaltung – wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich."}
              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
{/* RIGHT IMAGE */}
<div className="hidden lg:block relative h-[320px] lg:h-auto overflow-hidden">

  <img
    src="/contact-image.jpg"
    alt="Mediterranean terrace"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* SOFT FADE LEFT */}
<div className="absolute inset-0 bg-gradient-to-r from-[#f7f2ed] via-[#f7f2ed]/70 to-transparent"></div>

</div>

        </div>

      </section>

      {/* FORM SECTION */}
      {/* MOBILE INTRO */}
<div className="lg:hidden px-8 pt-10 pb-2">

  <p className="text-[#4d5960] leading-relaxed text-lg">
    {isHR
      ? "Veselimo se vašem upitu i rado ćemo vas osobno savjetovati."
      : isEN
      ? "We look forward to your inquiry and are happy to advise you personally."
      : "Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich."}
  </p>

</div>
<section className="max-w-7xl mx-auto px-8 md:px-16 py-12 lg:py-24">

<div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-20 items-start">

          {/* LEFT TEXT */}
<div className="hidden lg:block">

            <h2 className="font-serif text-4xl text-[#2f3a40] mb-6">
              {isHR
                ? "Pošaljite nam poruku"
                : isEN
                ? "Send us a message"
                : "Schreiben Sie uns"}
            </h2>

            <div className="w-16 h-[2px] bg-[#c6a27b] mb-8"></div>

            <p className="text-[#4d5960] leading-relaxed text-lg mb-14">
              {isHR
                ? "Tu smo za sva vaša pitanja i zahtjeve – odgovorit ćemo vam u najkraćem mogućem roku."
                : isEN
                ? "Send us your inquiry – we will get back to you as soon as possible."
                : "Teilen Sie uns Ihr Anliegen mit – wir melden uns so schnell wie möglich bei Ihnen."}
            </p>



          </div>

          {/* FORM */}
<div className="lg:border-l border-[#e7ddd2] pl-0 lg:pl-12">

<form
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>

  <input
    type="hidden"
    name="access_key"
    value="611d2eb2-e323-4564-9367-f75b1e6f3b5c"
  />

  <input
    type="hidden"
    name="subject"
    value="Neue Kontaktanfrage – PaMaRo Living"
  />

  <input
    type="hidden"
    name="from_name"
    value="PaMaRo Living Website"
  />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <input
      type="text"
      name="name"
      required
      placeholder={isHR ? "Ime*" : isEN ? "Name*" : "Name*"}
      className="h-14 px-5 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none"
    />

    <input
      type="email"
      name="email"
      required
      placeholder={isHR ? "E-mail*" : isEN ? "E-Mail*" : "E-Mail*"}
      className="h-14 px-5 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none"
    />

  </div>

  <input
    type="text"
    name="phone"
    placeholder={isHR ? "Telefon" : isEN ? "Phone" : "Telefon"}
    className="w-full h-14 px-5 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none"
  />

  <textarea
    rows="7"
    name="message"
    required
    placeholder={isHR ? "Poruka*" : isEN ? "Message*" : "Nachricht*"}
    className="w-full px-5 py-4 border border-[#e7ddd2] bg-transparent text-[#2f3a40] placeholder:text-[#9b9b9b] outline-none resize-none"
  ></textarea>

  <div className="pt-2">

    <button
      type="submit"
      className="bg-[#c6a27b] hover:bg-[#b8946d] transition-colors duration-300 text-white tracking-[0.15em] uppercase text-sm px-10 h-14"
    >
      {isHR
        ? "Pošalji poruku"
        : isEN
        ? "Send Message"
        : "Nachricht senden"}
    </button>

  </div>

</form>

          </div>

        </div>

      </section>

    </div>
  );
};


/* ================= LEGAL ================= */
function Legal({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

return (
<section className="bg-[#f7f2ed] min-h-screen">

{/* HERO */}
<section className="relative overflow-hidden">
{/* MOBILE HERO */}
<div className="lg:hidden relative h-[320px] overflow-hidden">

  <img
    src="/legal.jpg"
    alt="Legal"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/35"></div>

  <div className="relative z-10 h-full flex items-center px-8 pt-16">

    <div>

      <h1 className="font-serif text-5xl text-white leading-tight mb-6">
        {isHR
          ? "Impressum i privatnost"
          : isEN
          ? "Legal Notice & Privacy"
          : "Impressum & Datenschutz"}
      </h1>

      <div className="w-16 h-[1px] bg-white/70 mb-6"></div>

      <p className="text-white/90 leading-relaxed max-w-sm">
        {isHR
          ? "Transparentnost i pažljivo postupanje s vašim podacima su nam važni."
          : isEN
          ? "Transparency and the careful handling of your data are important to us."
          : "Transparenz und der sorgfältige Umgang mit Ihren Daten sind uns wichtig."}
      </p>

    </div>

  </div>

</div>

<div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">

    {/* LEFT */}
<div className="flex items-center px-8 md:px-16 py-16">

      <div className="max-w-xl">

        <h1 className="font-serif text-5xl md:text-6xl text-[#2f3a40] leading-tight mb-8">
          {isHR
            ? "Impressum i privatnost"
            : isEN
            ? "Legal Notice & Privacy"
            : "Impressum & Datenschutz"}
        </h1>

        <div className="w-20 h-[1px] bg-[#c6a27b]"></div>
        <div className="w-20 h-[1px] bg-[#c6a27b] mb-8"></div>

<p className="text-[#5f6a70] text-lg leading-relaxed max-w-md">
  {isHR
    ? "Transparentnost i pažljivo postupanje s vašim podacima su nam važni."
    : isEN
    ? "Transparency and the careful handling of your data are important to us."
    : "Transparenz und der sorgfältige Umgang mit Ihren Daten sind uns wichtig."}
</p>

      </div>

    </div>

    {/* RIGHT IMAGE */}
<div className="hidden lg:block relative h-[320px] lg:h-auto overflow-hidden">

      <img
        src="/legal.jpg"
        alt="Legal"
className="absolute inset-0 w-full h-full object-cover"
      />

<div className="absolute inset-0 bg-gradient-to-r from-[#f7f2ed] via-[#f7f2ed]/70 to-transparent"></div>

    </div>

  </div>

</section>

    {/* CONTENT */}
<div className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-[#2f3a40]">

      {/* Impressum */}
<div className="mb-16">

        <h2 className="font-serif text-[44px] leading-none mb-6">
          {isHR
            ? "Impressum"
            : isEN
            ? "Legal Notice"
            : "Impressum"}
        </h2>

        <div className="w-12 h-[1px] bg-[#c6a27b] mb-10" />

        <div className="space-y-5 text-[17px] leading-[2]">

          <div>
            <strong>PaMaRo Living</strong><br />
            Paula Raimondo<br />
            Zapadna Ulica 36<br />
            21318 Pisak<br />
            Croatia
          </div>

          <div>
            <strong>
              {isHR
                ? "Odgovorna osoba za sadržaj:"
                : isEN
                ? "Responsible for content:"
                : "Verantwortlich für den Inhalt:"}
            </strong><br />
            Paula Raimondo
          </div>

          <p>
            {isHR
              ? "Europska komisija pruža platformu za online rješavanje sporova (OS): https://ec.europa.eu/consumers/odr/"
              : isEN
              ? "The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr/"
              : "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/"}
          </p>

          <p>
            {isHR
              ? "Nismo spremni niti obvezni sudjelovati u postupku rješavanja sporova pred potrošačkom arbitražom."
              : isEN
              ? "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board."
              : "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."}
          </p>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#d9c9b7] mb-16" />

      {/* Datenschutz */}
      <div>

        <h2 className="font-serif text-[44px] leading-none mb-6">
          {isHR
            ? "Pravila privatnosti"
            : isEN
            ? "Privacy Policy"
            : "Datenschutzerklärung"}
        </h2>

        <div className="w-12 h-[1px] bg-[#c6a27b] mb-10" />

        <div className="space-y-6 text-[17px] leading-[2]">

          <p>
            {isHR
              ? "Zaštita vaših osobnih podataka važna nam je. Osobne podatke obrađujemo povjerljivo i u skladu sa zakonskim propisima o zaštiti podataka."
              : isEN
              ? "The protection of your personal data is important to us. Personal data is treated confidentially and in accordance with applicable data protection regulations."
              : "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Personenbezogene Daten behandeln wir vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften."}
          </p>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "Kontakt obrazac"
                : isEN
                ? "Contact form"
                : "Kontaktformular"}
            </h3>

            <p>
              {isHR
                ? "Ako nam pošaljete upit putem kontakt obrasca, vaši podaci koriste se isključivo za obradu vašeg zahtjeva."
                : isEN
                ? "If you contact us via the contact form, your data will only be used to process your inquiry."
                : "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              Web3Forms
            </h3>

            <p>
              {isHR
                ? "Za slanje kontakt obrazaca koristimo vanjsku uslugu Web3Forms. Podaci uneseni u obrazac prenose se putem zaštićene veze i koriste isključivo za obradu vašeg upita."
                : isEN
                ? "For contact form submissions we use the external service Web3Forms. Data is transmitted securely and used solely for processing your inquiry."
                : "Für die Übermittlung von Kontaktformularen verwenden wir den externen Dienst Web3Forms. Die Daten werden verschlüsselt übertragen und ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "Vaša prava"
                : isEN
                ? "Your rights"
                : "Ihre Rechte"}
            </h3>

            <p>
              {isHR
                ? "Imate pravo na informacije, ispravak ili brisanje svojih osobnih podataka."
                : isEN
                ? "You have the right to information, correction or deletion of your personal data."
                : "Sie haben das Recht auf Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten."}
            </p>
          </div>

        </div>

      </div>

    </div>

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
case "service4": content = <Service4 lang={lang} setPage={setPage}/>; break;
  case "references": content = <References lang={lang} setPage={setPage} />; break;
  case "contact": content = <Contact lang={lang} />; break;
  case "legal": content = <Legal lang={lang} />; break;
default: content = <Home lang={lang} setPage={setPage} />;
}

  return (
<div className="flex flex-col bg-[#f7f2ed]">
      <Navigation setPage={setPage} lang={lang} setLang={setLang} />
<main className="pt-20">{content}</main>
<FooterBar
  setPage={setPage}
  lang={lang}
/>
    </div>
  );
}
