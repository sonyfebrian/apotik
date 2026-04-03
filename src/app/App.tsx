import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { FocusSection } from './components/FocusSection';
import { ServiceProductGrid } from './components/ServiceProductGrid';
import { SocialProof } from './components/SocialProof';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <FocusSection />
        <ServiceProductGrid />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
