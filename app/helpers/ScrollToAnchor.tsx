import { useEffect, useRef } from "react";
import { useLocation } from "@remix-run/react";

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef("");
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }
    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 200);
    }
  }, [location]);
  return null;
}

export default ScrollToAnchor;
