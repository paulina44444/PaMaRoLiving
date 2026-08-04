import React from "react";
function Legal({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";

return (
<section className="bg-[#f7f2ed] min-h-screen">

{/* HERO */}
<div className="relative w-full h-[400px] overflow-hidden">

  <img
    src="/legal.jpg"
    alt="Legal"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/25" />

  <div className="relative z-10 h-full flex items-center justify-center">

    <div className="max-w-6xl mx-auto px-6 w-full">

      <div className="max-w-xl mx-auto text-white text-center">

        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center">
          {isHR
            ? "Impressum i privatnost"
            : isEN
            ? "Legal Notice & Privacy"
            : "Impressum & Datenschutz"}
        </h1>

        <div className="w-20 h-[2px] bg-[#c6a27b] mx-auto"></div>

      </div>

    </div>

  </div>

</div>

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
