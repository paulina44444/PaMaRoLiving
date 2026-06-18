import React from "react";
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

export default Contact;


