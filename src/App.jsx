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
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";


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
