import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CalculatorSection from '@/components/CalculatorSection';
import MethodologySection from '@/components/MethodologySection';
import ResultsSection from '@/components/ResultsSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <Navigation onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <CalculatorSection />
      <MethodologySection />
      <ResultsSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
