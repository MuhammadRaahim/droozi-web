"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function IframeRouteSync() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.parent !== window) {
      // Post the full pathname to the parent
      window.parent.postMessage(
        { type: "navigate", path: pathname },
        "https://droozi-web.vercel.app" // match exactly parent script origin
      );
    }
  }, [pathname]);

  return null;
}
