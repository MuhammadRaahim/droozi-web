"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function IframeRouteSync() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.parent !== window) {
      // Send current pathname to parent
      window.parent.postMessage(
        { type: "navigate", path: pathname },
        "https://droozi-web.vercel.app" // parent origin
      );
    }

    // Listen for parent messages (back/forward)
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin === "https://droozi-web.vercel.app" &&
        event.data.type === "navigate"
      ) {
        if (event.data.path !== pathname) {
          router.push(event.data.path);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [pathname, router]);

  return null;
}
