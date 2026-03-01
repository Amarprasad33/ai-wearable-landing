import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background custom-scrollbar">
      <div className="relative">
        <div className="fixed w-full top-4 z-50">
          <Navbar />
        </div>
        {/* Hero section */}
        <HeroSection />
      </div>
      <div className="relative">
        {/* Features section */}
        <FeatureSection />
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
}
