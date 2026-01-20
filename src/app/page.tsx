import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TradingAssets } from "@/components/TradingAssets";
import { HowItWorks } from "@/components/HowItWorks";
import { Programs } from "@/components/Programs";
import { WhyUs } from "@/components/WhyUs";
import { EarningsCalculator } from "@/components/EarningsCalculator";
import { Payouts } from "@/components/Payouts";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ScrollReveal width="100%">
        <Hero />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <TradingAssets />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Programs />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <WhyUs />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <EarningsCalculator />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <Payouts />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <FAQ />
      </ScrollReveal>
      <ScrollReveal width="100%">
        <CTABanner />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
