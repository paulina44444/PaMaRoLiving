import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import FooterBar from "./components/FooterBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import References from "./pages/References";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

export default function App() {
  const [lang, setLang] = useState("hr");

  return (
    <div className="flex flex-col bg-[#f7f2ed]">
      <Navigation lang={lang} setLang={setLang} />

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />

          <Route path="/about" element={<About lang={lang} />} />

          <Route path="/services" element={<Services lang={lang} />} />

          <Route
            path="/services/property-care"
            element={<Service2 lang={lang} />}
          />

          <Route
            path="/services/carefree-stay"
            element={<Service3 lang={lang} />}
          />

          <Route
            path="/services/interior-design"
            element={<Service4 lang={lang} />}
          />

          <Route
            path="/references"
            element={<References lang={lang} />}
          />

          <Route path="/contact" element={<Contact lang={lang} />} />

          <Route path="/legal" element={<Legal lang={lang} />} />
        </Routes>
      </main>

      <FooterBar lang={lang} />
    </div>
  );
}