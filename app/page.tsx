import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import ResortWeeksSection from '@/components/ResortWeeksSection';
import DestinationsSection from '@/components/DestinationsSection';
import HotelsShowcase from '@/components/HotelsShowcase';
import MultiCitySection from '@/components/MultiCitySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <WhyJoinSection />
      <ResortWeeksSection />
      <DestinationsSection />
      <HotelsShowcase />
      <MultiCitySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
