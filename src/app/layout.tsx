"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import IframeRouteSync from "@/components/IframeRouteSync";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // routes without Header / Footer
  const noLayoutRoutes = ["/privacy-policy"];
  const hideLayout = noLayoutRoutes.includes(pathname);

  // Wait for client path to avoid hydration issues
  if (!pathname) return null;

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {/* Send path updates to parent */}
          <IframeRouteSync />

          <div className="isolate">
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
          </div>

          {!hideLayout && <ScrollToTop />}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
