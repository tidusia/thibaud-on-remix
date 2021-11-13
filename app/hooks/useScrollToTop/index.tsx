import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This is a temporary fix, Remix will handle this natively soon
export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
