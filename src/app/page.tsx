import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import OurEthos from "@/components/OurEthos";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Droozi – Modern Web Solutions",
  description: "Droozi",
  icons: {
    icon: '/favicon.svg', 
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <OurEthos />
      <Features />
      <Pricing />
      <Roadmap />
      <Contact />
    </>
  );
}
