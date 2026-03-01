import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { MeshGradient } from "@paper-design/shaders-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative">
        <MeshGradient
          className="absolute inset-0 z-0 pointer-events-none w-full h-full"
          colors={["#9bb2e4", "#0d0d0d", "#2a4f7e", "#08050a"]}
          distortion={0.85}
          swirl={0.42}
          grainMixer={0}
          grainOverlay={0}
          speed={0.84}
          scale={0.84}
          rotation={88}
        />
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
}
