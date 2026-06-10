import { Nav } from '@/components/landing/Nav';
import { Hero } from '@/components/landing/Hero';
import { Why } from '@/components/landing/Why';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Analytics } from '@/components/landing/Analytics';
import { DiffusionKit } from '@/components/landing/DiffusionKit';
import { UseCases } from '@/components/landing/UseCases';
import { Pricing } from '@/components/landing/Pricing';
import { Reassurance } from '@/components/landing/Reassurance';
import { Faq } from '@/components/landing/Faq';
import { FinalCta } from '@/components/landing/FinalCta';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF6EF] scroll-smooth">
      <Nav />
      <Hero />
      <Why />
      <HowItWorks />
      <Analytics />
      <DiffusionKit />
      <UseCases />
      <Pricing />
      <Reassurance />
      <Faq />
      <FinalCta />
    </div>
  );
}
