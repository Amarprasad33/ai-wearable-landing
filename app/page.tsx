import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { MeshGradient } from "@paper-design/shaders-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        <div className="fixed w-full top-4 z-50">
          <Navbar />
        </div>
        <HeroSection />
      </div>
    </main>
  );
}
