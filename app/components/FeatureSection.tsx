"use client";

import { Brain, Eye, HeartPulse, Shield } from "lucide-react";
import { motion } from "motion/react";
import {
  CoreFocusModes,
  CoreRecovery,
  CoreTracking,
} from "./Features-illustrations";

export default function FeatureSection() {
  return (
    <section
      className="w-full py-24 pb-32 bg-background relative z-10 select-none"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white mb-4 tracking-tight">
          Engineered for Peak Cognition
        </h2>
        <p className="text-base text-zinc-400 leading-relaxed text-center mb-16">
          Real-time cognitive tracking and adaptive focus modes designed to
          maximize how you think and work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Row Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-[#0f0f11] rounded-2xl p-8 flex flex-col justify-end"
          >
            <CoreTracking className="w-full max-w-[270px] h-auto mb-9 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-3 mt-3 text-center">
              Core tracks your cognitive capacity in real time
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed text-center">
              Monitor brain activity patterns and cognitive load in real time
              throughout your day
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-[#0f0f11] rounded-2xl p-8 flex flex-col justify-end"
          >
            <div className="w-full max-w-[290px] aspect-square mb-9 mx-auto relative flex items-center justify-center overflow-hidden rounded-xl ">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute size-48 border border-blue-500/20 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.5, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute size-32 border border-blue-500/40 rounded-full"
              />
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59,130,246,0.3)",
                    "0 0 40px rgba(59,130,246,0.5)",
                    "0 0 20px rgba(59,130,246,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="size-16 border-2 border-blue-500 rounded-full flex items-center justify-center relative"
              >
                <motion.div
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="size-12 m-auto bg-blue-500/20 rounded-full "
                />
              </motion.div>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Get locked in with adaptive focus modes in core
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed text-center">
              Intelligent modes that adapt to your workflow, shielding you from
              distractions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="bg-[#0f0f11] rounded-2xl p-8 flex flex-col justify-end"
          >
            <CoreRecovery className="w-full max-w-[292px] h-auto mb-9 mx-auto" />
            <h3 className="text-lg font-semibold text-white mb-3 text-center">
              Report on neural recovery insights to get more done
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed text-center">
              Track focus and recovery cycles to optimize for sustained
              performance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
