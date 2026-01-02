"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function IframeRouteSync() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run inside iframe
    if (typeof window === "undefined" || window.parent === window) return;

    // Build full path with query string if any
    const fullPath = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");

    // Send message to parent
    window.parent.postMessage(
      {
        type: "navigate", // must match backend listener
        path: fullPath,
      },
      "*" // or replace * with your backend domain for security
    );
  }, [pathname, searchParams]);

  return null;
}
