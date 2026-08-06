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

  <div className="absolute inset-0 bg-black/15" />

  <div className="relative z-10 h-full flex items-center justify-center">

    <div className="max-w-6xl mx-auto px-6 w-full">

      <div className="max-w-xl mx-auto text-white text-center">

        <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8 text-center break-words">
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

        <h2 className="font-serif text-[44px] leading-none mb-6 break-words">
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

        <h2 className="font-serif text-[44px] leading-none mb-6 break-words">
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
              ? "Zaštita vaših osobnih podataka važna nam je. U nastavku vas informiramo o obradi osobnih podataka prilikom posjeta ovoj web stranici, u skladu s Općom uredbom o zaštiti podataka (GDPR/DSGVO)."
              : isEN
              ? "The protection of your personal data is important to us. Below we inform you about the processing of personal data when visiting this website, in accordance with the General Data Protection Regulation (GDPR)."
              : "Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten beim Besuch dieser Website gemäss der Datenschutz-Grundverordnung (DSGVO)."}
          </p>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "1. Voditelj obrade"
                : isEN
                ? "1. Controller"
                : "1. Verantwortlicher"}
            </h3>

            <p>
              {isHR
                ? "Voditelj obrade podataka u smislu GDPR-a je Paula Raimondo, PaMaRo Living, Zapadna ulica 36, 21318 Pisak, Hrvatska, e-mail: pamaroliving@hotmail.com, telefon: +385 99 837 79 35 (vidi Impressum)."
                : isEN
                ? "The controller responsible for data processing under the GDPR is Paula Raimondo, PaMaRo Living, Zapadna ulica 36, 21318 Pisak, Croatia, email: pamaroliving@hotmail.com, phone: +385 99 837 79 35 (see Legal Notice above)."
                : "Verantwortlicher im Sinne der DSGVO ist Paula Raimondo, PaMaRo Living, Zapadna ulica 36, 21318 Pisak, Kroatien, E-Mail: pamaroliving@hotmail.com, Telefon: +385 99 837 79 35 (siehe Impressum oben)."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "2. Hosting (Vercel)"
                : isEN
                ? "2. Hosting (Vercel)"
                : "2. Hosting (Vercel)"}
            </h3>

            <p>
              {isHR
                ? "Ova web stranica hostirana je kod pružatelja usluge Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, SAD. Prilikom posjeta stranice Vercel automatski prikuplja tzv. log-datoteke poslužitelja (npr. IP adresa, datum i vrijeme pristupa, korišteni preglednik, posjećena stranica). Ovo je nužno za tehnički siguran i stabilan rad stranice (čl. 6. st. 1. t. (f) GDPR – legitimni interes). Budući da Vercel ima sjedište u SAD-u, podaci se mogu obrađivati izvan EU/EGP-a; Vercel se prema vlastitim navodima obvezuje na standardne ugovorne klauzule EU-a kao odgovarajuću zaštitnu mjeru."
                : isEN
                ? "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When you visit the site, Vercel automatically collects server log files (e.g. IP address, date and time of access, browser used, page requested). This is necessary for the technically secure and stable operation of the site (Art. 6(1)(f) GDPR – legitimate interest). Because Vercel is based in the USA, data may be processed outside the EU/EEA; Vercel states that it relies on the EU Standard Contractual Clauses as an appropriate safeguard."
                : "Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim Besuch der Seite erhebt Vercel automatisch sogenannte Server-Logfiles (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, verwendeter Browser, aufgerufene Seite). Dies ist für einen technisch sicheren und stabilen Betrieb der Website erforderlich (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse). Da Vercel seinen Sitz in den USA hat, können Daten ausserhalb der EU/des EWR verarbeitet werden; Vercel gibt an, sich hierfür auf die EU-Standardvertragsklauseln als geeignete Garantie zu stützen."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "3. Kontaktni obrazac / Web3Forms"
                : isEN
                ? "3. Contact form / Web3Forms"
                : "3. Kontaktformular / Web3Forms"}
            </h3>

            <p>
              {isHR
                ? "Ako nam pišete putem kontakt obrasca, prikupljamo podatke koje unesete (ime, e-mail, po želji telefon, poruka) isključivo radi obrade vašeg upita i eventualne naknadne komunikacije (čl. 6. st. 1. t. (b) i (f) GDPR). Za tehničku obradu i slanje obrasca koristimo vanjsku uslugu Web3Forms (Web3Forms, SAD). Podaci se prenose putem šifrirane veze (SSL/TLS), pohranjuju na poslužiteljima u SAD-u (AWS, regija US-East) i prema navodima Web3Forms brišu se automatski nakon ograničenog razdoblja. Radi sprječavanja zlouporabe (spam) Web3Forms IP adresu i e-mail adresu pošiljatelja može proslijediti specijaliziranom vanjskom pružatelju usluge zaštite od spama. Više informacija: web3forms.com/privacy."
                : isEN
                ? "If you contact us via the contact form, we collect the data you enter (name, email, optionally phone, message) solely to process your inquiry and any follow-up communication (Art. 6(1)(b) and (f) GDPR). For the technical processing and delivery of the form we use the external service Web3Forms (Web3Forms, USA). Data is transmitted over an encrypted connection (SSL/TLS), stored on servers in the USA (AWS, US-East region) and, according to Web3Forms, deleted automatically after a limited period. To prevent abuse (spam), Web3Forms may forward the sender's IP address and email address to a specialised third-party anti-spam provider. More information: web3forms.com/privacy."
                : "Wenn Sie uns per Kontaktformular schreiben, erheben wir die von Ihnen eingegebenen Daten (Name, E-Mail, optional Telefon, Nachricht) ausschliesslich zur Bearbeitung Ihrer Anfrage und einer eventuellen weiteren Kommunikation (Art. 6 Abs. 1 lit. b und f DSGVO). Für die technische Verarbeitung und Zustellung des Formulars nutzen wir den externen Dienst Web3Forms (Web3Forms, USA). Die Daten werden verschlüsselt übertragen (SSL/TLS), auf Servern in den USA gespeichert (AWS, Region US-East) und laut Angaben von Web3Forms nach einer begrenzten Frist automatisch gelöscht. Zur Missbrauchsprävention (Spam) kann Web3Forms die IP-Adresse und E-Mail-Adresse des Absenders an einen spezialisierten externen Anti-Spam-Dienstleister weitergeben. Weitere Informationen: web3forms.com/privacy."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "4. Kolačići i alati za analizu"
                : isEN
                ? "4. Cookies & analytics tools"
                : "4. Cookies & Analyse-Tools"}
            </h3>

            <p>
              {isHR
                ? "Ova stranica trenutno ne koristi kolačiće za praćenje niti alate poput Google Analyticsa. Google Search Console, koju koristimo za praćenje vidljivosti stranice u Google tražilici, sama po sebi ne postavlja kolačiće na vašem uređaju – ona koristi podatke koje Google već prikuplja u sklopu tražilice, ne izravno na ovoj stranici. Ako bismo u budućnosti uveli alate za analizu posjetitelja ili slične kolačiće, prethodno bismo ovdje ažurirali ovu izjavu i zatražili vašu suglasnost putem banera za kolačiće, u skladu sa zakonskim zahtjevima."
                : isEN
                ? "This site currently does not use tracking cookies or tools such as Google Analytics. Google Search Console, which we use to monitor the site's visibility in Google Search, does not itself set cookies on your device – it relies on data Google already collects as part of its search engine, not directly on this site. Should we introduce visitor-analytics tools or similar cookies in the future, we would update this notice beforehand and request your consent via a cookie banner, as legally required."
                : "Diese Website verwendet aktuell keine Tracking-Cookies und keine Analyse-Tools wie Google Analytics. Die Google Search Console, die wir zur Beobachtung der Sichtbarkeit der Seite in der Google-Suche nutzen, setzt selbst keine Cookies auf Ihrem Gerät – sie stützt sich auf Daten, die Google ohnehin im Rahmen der Suche erhebt, nicht direkt auf dieser Website. Sollten wir künftig Analyse-Tools zur Besucherauswertung oder vergleichbare Cookies einführen, würden wir diese Erklärung vorher aktualisieren und Ihre Einwilligung über einen Cookie-Banner einholen, wie gesetzlich vorgeschrieben."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "5. Sigurnost podataka"
                : isEN
                ? "5. Data security"
                : "5. Datensicherheit"}
            </h3>

            <p>
              {isHR
                ? "Ova stranica koristi SSL/TLS enkripciju iz sigurnosnih razloga i za zaštitu prijenosa povjerljivog sadržaja. Šifrirana veza prepoznaje se po tome što adresna traka preglednika prikazuje „https://“ umjesto „http://“."
                : isEN
                ? "This site uses SSL/TLS encryption for security reasons and to protect the transmission of confidential content. You can recognise an encrypted connection by the fact that the browser's address bar shows “https://” instead of “http://”."
                : "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers „https://“ statt „http://“ anzeigt."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "6. Razdoblje pohrane"
                : isEN
                ? "6. Storage period"
                : "6. Speicherdauer"}
            </h3>

            <p>
              {isHR
                ? "Osobne podatke čuvamo samo onoliko dugo koliko je potrebno za svrhu za koju su prikupljeni (npr. obrada vašeg upita) ili dok to nalažu zakonske obveze čuvanja."
                : isEN
                ? "We store personal data only for as long as necessary for the purpose for which it was collected (e.g. processing your inquiry) or as required by statutory retention obligations."
                : "Personenbezogene Daten werden nur so lange gespeichert, wie es für den Zweck der Erhebung erforderlich ist (z. B. Bearbeitung Ihrer Anfrage) oder gesetzliche Aufbewahrungspflichten dies verlangen."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "7. Vaša prava"
                : isEN
                ? "7. Your rights"
                : "7. Ihre Rechte"}
            </h3>

            <p>
              {isHR
                ? "U skladu s GDPR-om imate pravo na pristup svojim osobnim podacima (čl. 15.), ispravak (čl. 16.), brisanje (čl. 17.), ograničenje obrade (čl. 18.), prenosivost podataka (čl. 20.) te pravo na prigovor na obradu (čl. 21.). Ako se obrada temelji na vašoj suglasnosti, tu suglasnost možete u svakom trenutku povući s učinkom za ubuduće. Za ostvarivanje ovih prava obratite nam se na pamaroliving@hotmail.com."
                : isEN
                ? "Under the GDPR you have the right to access your personal data (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), and the right to object to processing (Art. 21). Where processing is based on your consent, you may withdraw that consent at any time with future effect. To exercise these rights, please contact us at pamaroliving@hotmail.com."
                : "Nach der DSGVO haben Sie das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15), auf Berichtigung (Art. 16), auf Löschung (Art. 17), auf Einschränkung der Verarbeitung (Art. 18), auf Datenübertragbarkeit (Art. 20) sowie ein Widerspruchsrecht gegen die Verarbeitung (Art. 21). Beruht eine Verarbeitung auf Ihrer Einwilligung, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Zur Ausübung dieser Rechte wenden Sie sich bitte an pamaroliving@hotmail.com."}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-0">
              {isHR
                ? "8. Pravo na pritužbu"
                : isEN
                ? "8. Right to lodge a complaint"
                : "8. Beschwerderecht"}
            </h3>

            <p>
              {isHR
                ? "Ako smatrate da obrada vaših osobnih podataka krši GDPR, imate pravo podnijeti pritužbu nadzornom tijelu. Nadležno tijelo u Hrvatskoj je Agencija za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb, www.azop.hr. Naravno, možete se obratiti i nadzornom tijelu u svojoj zemlji boravišta."
                : isEN
                ? "If you believe that the processing of your personal data violates the GDPR, you have the right to lodge a complaint with a supervisory authority. The competent authority in Croatia is the Croatian Personal Data Protection Agency (AZOP), Selska cesta 136, 10000 Zagreb, www.azop.hr. You may of course also contact the supervisory authority in your own country of residence."
                : "Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstösst, haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig in Kroatien ist die Agencija za zaštitu osobnih podataka (AZOP), Selska cesta 136, 10000 Zagreb, www.azop.hr. Selbstverständlich können Sie sich auch an die Aufsichtsbehörde in Ihrem eigenen Wohnsitzland wenden."}
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>
);
}

export default Legal;
