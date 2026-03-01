import { Brain, Eye, HeartPulse, Shield } from "lucide-react";

export default function FeatureSection() {
  return (
    <section
      className="w-full py-24 pb-32 bg-background relative z-10"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-center text-white mb-16 tracking-tight">
          Engineered for Peak Cognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Row Cards */}
          <div className="bg-[#0f0f11] border border-white/8 rounded-2xl p-8 flex flex-col">
            <Brain className="w-6 h-6 text-sky-400 mb-6" />
            <h3 className="text-lg font-semibold text-white mb-3">
              Real-Time Cognitive Tracking
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Monitor brain activity patterns and cognitive load in real time
              throughout your day.
            </p>
          </div>

          <div className="bg-[#0f0f11] border border-white/8 rounded-2xl p-8 flex flex-col">
            <Eye className="w-6 h-6 text-sky-400 mb-6" />
            <h3 className="text-lg font-semibold text-white mb-3">
              Adaptive Focus Modes
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Intelligent modes that adapt to your workflow, shielding you from
              distractions.
            </p>
          </div>

          <div className="bg-[#0f0f11] border border-white/8 rounded-2xl p-8 flex flex-col">
            <HeartPulse className="w-6 h-6 text-sky-400 mb-6" />
            <h3 className="text-lg font-semibold text-white mb-3">
              Neural Recovery Insights
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Track recovery cycles and optimize your rest for sustained peak
              performance.
            </p>
          </div>

          {/* Bottom Row Card spanning 3 columns */}
          <div className="md:col-span-3 bg-[#0f0f11] border border-white/8 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col justify-center max-w-xl">
              <Shield className="w-6 h-6 text-sky-400 mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">
                Precision Titanium Build
              </h3>
              <p className="text-base text-zinc-400 leading-relaxed">
                Crafted from aerospace-grade titanium. Featherweight.
                Indestructible.
              </p>
            </div>

            {/* The right side placeholder for the product image, left empty as requested */}
            <div className="flex-1 relative min-h-[250px] md:min-h-[300px] w-full mt-8 md:mt-0 flex items-center justify-center">
              {/* Product image goes here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
