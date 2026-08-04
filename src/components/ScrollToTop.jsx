import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrollt bei jedem Seitenwechsel (Klick auf einen Link) automatisch nach
// ganz oben. React Router wechselt die Seite ohne vollständigen Reload,
// daher bleibt sonst die alte Scroll-Position erhalten.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
