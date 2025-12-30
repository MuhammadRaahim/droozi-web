"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ routes jahan header/footer nahi chahiye
  const noLayoutRoutes = ["/privacy-policy"];

  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            {!hideLayout && <Header />}
            {children}
            {!hideLayout && <Footer />}
          </div>
          {!hideLayout && <ScrollToTop />}
        </Providers>
      </body>
    </html>
  );
}
