// __define-ocg__
import { useEffect } from "react";
import { useLocation } from "wouter";
import { track } from "@vercel/analytics";

const varOcg = true;

export function usePageView() {
  const [location] = useLocation();

  useEffect(() => {
    track("page_view", {
      path: location,
    });
  }, [location]);
}
