import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterBar({ lang }) {
  const isHR = lang === "hr";
  const isEN = lang === "en";
  return (
<footer className="bg-[#2f3a40] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">

        {/* obere 3 Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_auto_1fr_auto_0.6fr] gap-8 md:gap-10 items-start md:items-center text-sm max-w-5xl mx-auto text-left justify-items-start md:justify-items-stretch">

          {/* Adresse */}
<div className="flex justify-start pl-0 md:pl-10">

<a
  href="https://maps.google.com/?q=Zapadna+Ulica+36+Pisak+Croatia"
  target="_blank"
  rel="noreferrer"
  className="flex items-start gap-3 hover:text-[#c6a27b] transition"
>

<MapPin
  size={20}
  className="text-[#c6a27b] shrink-0 self-center"
/>

    <div className="leading-8 text-left">

      <div className="font-semibold mb-1">
        PaMaRo Living
      </div>

      Paula Raimondo<br />
      Zapadna Ulica 36<br />
      21318 Pisak<br />
      Croatia

    </div>
  </a>

</div>

<div className="hidden md:block w-px h-24 bg-white/20"></div>


{/* Kontakt */}
<div className="space-y-4 flex flex-col items-start text-left">

  <div className="flex items-center justify-start md:justify-start gap-3">
    <Phone size={18} className="text-[#c6a27b]" />
    <a
      href="tel:+385998377935"
      className="hover:text-[#c6a27b] transition"
    >
      +385 99 837 79 35
    </a>
  </div>

  <div className="flex items-center justify-start md:justify-start gap-3">
    <Mail size={18} className="text-[#c6a27b]" />
    <a
      href="mailto:pamaroliving@hotmail.com"
      className="hover:text-[#c6a27b] transition"
    >
      pamaroliving@hotmail.com
    </a>
  </div>

</div>

<div className="hidden md:block w-px h-24 bg-white/20"></div>

{/* Social Media */}
<div className="flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-4 pt-2">

  <a
    href="https://instagram.com/pamaro_living"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 text-[#c6a27b] hover:text-white transition duration-300"
  >
    <FaInstagram size={18} />
    <span className="text-white">Instagram</span>
  </a>

  <a
    href="https://facebook.com/DEINNAME"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 text-[#c6a27b] hover:text-white transition duration-300"
  >
    <FaFacebookF size={15} />
    <span className="text-white">Facebook</span>
  </a>

</div>
        </div>

        {/* Copyright */}
{/* Copyright */}
<div className="border-t border-[#c6a27b]/40 mt-8 pt-5 flex items-center justify-center gap-4 text-xs text-gray-300">

<Link
  to="/legal"
  className="hover:text-[#c6a27b] transition"
>
  {isHR
    ? "Impresum i privatnost"
    : isEN
    ? "Legal Notice & Privacy Policy"
    : "Impressum & Datenschutz"}
</Link>

  <span className="opacity-40">|</span>

<div>
  © {new Date().getFullYear()} PaMaRo Living.
  {isHR
    ? " Sva prava pridržana."
    : isEN
    ? " All rights reserved."
    : " Alle Rechte vorbehalten."}
</div>

</div>

      </div>
    </footer>
  );
}

export default FooterBar;