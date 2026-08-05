import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Verhindert, dass der Browser (v.a. mobile Browser) beim Seitenwechsel
// selbstständig eine alte Scroll-Position wiederherstellen will - wir
// steuern das komplett selbst über den Effekt unten.
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Scrollt bei jedem Seitenwechsel (Klick auf einen Link) automatisch nach
// ganz oben. React Router wechselt die Seite ohne vollständigen Reload,
// daher bleibt sonst die alte Scroll-Position erhalten.
//
// useLayoutEffect statt useEffect: läuft synchron direkt nach dem
// DOM-Update, noch bevor der Browser die neue Seite anzeigt - so sieht
// man nie kurz die alte Scroll-Position "aufblitzen", bevor nach oben
// gesprungen wird (v.a. auf langsameren Mobilgeräten relevant).
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
