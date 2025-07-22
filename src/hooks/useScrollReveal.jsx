import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal(selector = ".reveal", config = {}) {
  useEffect(() => {
    ScrollReveal().reveal(selector, {
      origin: "bottom",
      distance: "15px",
      duration: 1000,
      reset: false,
      ...config,
    });
  }, [selector, config]);
}
