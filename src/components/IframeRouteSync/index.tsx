"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function IframeRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.parent !== window) {
      window.parent.postMessage(
        {
          type: "navigate",
          path: pathname,
        },
        "https://droozi.com"
      );
    }
  }, [pathname]);

  return null;
}
