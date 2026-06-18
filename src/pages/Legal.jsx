import React from "react";
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

export default Legal;
