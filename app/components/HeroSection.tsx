"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full relative flex justify-center min-h-[92vh] ">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-5">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-4 lg:gap-6 max-w-xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] lg:text-5xl font-semibold leading-[1.15] tracking-tight text-white">
            Silent the noise with <span className="text-accent-blue">core</span>{" "}
            <br className="hidden sm:block" />
            Master your flow
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-base  leading-relaxed max-w-md text-zinc-300">
            World&apos;s first AI-wearable built to protect your attention.
            Shield your flow state and achieve in hours what takes others days.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            {/* Primary Button - Gradient */}
            <button
              className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-blue)]/25 active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-blue-light))",
              }}
            >
              Claim Your Core
            </button>

            {/* Secondary Button - Outlined */}
            <button className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white border border-surface-border hover:border-zinc-700 bg-surface hover:bg-[#252528] hover:shadow-(--accent-blue)/25 transition-all duration-300 active:scale-[0.98]">
              Preorder Now
            </button>
          </div>
        </div>

        {/* Right Content - Product Image Card */}
        <div className="flex-1 flex items-center justify-center lg:justify-end w-full max-w-lg lg:max-w-none">
          <div className="relative w-full max-w-[480px] aspect-square bg-transparent overflow-hidden rounded-3xl">
            {/* Background gradient image */}
            <Image
              src="/product-bg-gradient.png"
              alt=""
              fill
              className="object-cover"
              priority
              aria-hidden="true"
            />

            {/* Product ring image */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                src="/Core-product.png"
                alt="Core AI Wearable Ring"
                width={400}
                height={400}
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>

            {/* Subtle inner glow */}
            <div
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                boxShadow: "inset 0 0 60px rgba(1, 113, 229, 0.08)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
