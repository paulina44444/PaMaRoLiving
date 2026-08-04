import React from "react";
/* ================= CONTACT ================= */
const Contact = ({ lang }) => {
  const isHR = lang === "hr";
  const isEN = lang === "en";

  return (
    <div className="bg-[#f7f2ed] min-h-screen">

      {/* HERO */}
      <div className="relative w-full h-[400px] overflow-hidden">

        <img
          src="/contact-image.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="max-w-6xl mx-auto px-6 w-full">

            <div className="max-w-xl mx-auto text-white text-center">

              <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center break-words">
                {isHR ? "Kontakt" : isEN ? "Contact" : "Kontakt"}
              </h1>

              <div className="w-20 h-[2px] bg-[#c6a27b] mx-auto"></div>

            </div>

          </div>

        </div>

      </div>

      {/* FORM SECTION */}
<section className="max-w-7xl mx-auto px-8 md:px-16 py-12 lg:py-24">

<p className="font-serif italic text-xl md:text-2xl text-[#2f3a40] text-center mb-12 max-w-xl mx-auto">
  {isHR
    ? "Bilo da vam je potrebna briga o nekretnini, bezbrižan boravak ili preuređenje – veselimo se vašem upitu i rado ćemo vas osobno savjetovati"
    : isEN
    ? "Whether you need property care, a worry-free stay or a redesign – we look forward to your inquiry and are happy to advise you personally"
    : "Ob Immobilienbetreuung, sorgenfreier Aufenthalt oder Neugestaltung – wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich"}
</p>

<div className="grid grid-cols-1">

          {/* FORM */}
<div className="max-w-2xl mx-auto w-full">

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


