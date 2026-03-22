import { motion } from "framer-motion";
import { Download, Smartphone } from "lucide-react";
import { useRef } from "react";
import heroImage from "@/assets/hero-gamepad.png";
import ParticleBackground from "./ParticleBackground";

interface HeroSectionProps {
  isInitialVisit?: boolean;
}

const HeroSection = ({ isInitialVisit = false }: HeroSectionProps) => {
  // Lock the prop value on mount so framer-motion delays don't abruptly change to 0
  // when the Intro finishes and App.tsx unmounts it (which sets isInitialVisit to false).
  const lockedInitialVisit = useRef(isInitialVisit).current;

  // CASE 1: Initial page load (locked is true) -> full 4.5s intro wait
  // CASE 2: Navigating away and back -> instant 0s delay
  const delay = lockedInitialVisit ? 4.5 : 0;
  const delay2 = lockedInitialVisit ? 4.7 : 0.05;
  const delay3 = lockedInitialVisit ? 5.1 : 0.1;
  const delay4 = lockedInitialVisit ? 5.3 : 0.15;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background product image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="SIM Gamepad — phone as controller"
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* Cinematic gradient overlay: black left → transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Colorful Particle Canvas Background */}
      <ParticleBackground />

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center">
        {/* Atmospheric background glow behind text */}
        <div className="absolute left-[-10%] top-1/4 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10">
          {/* Title - Removed max-w-2xl constraint to prevent bg-clip-text clipping on large font sizes */}
          <div className="mb-6 flex flex-col w-full">
            <motion.h1
              className="text-[5.5rem] sm:text-7xl md:text-[8rem] lg:text-[10.5rem] font-extrabold leading-[0.85] tracking-tighter bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent pb-2"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              SIM
            </motion.h1>
            <motion.h1
              className="text-[5.5rem] sm:text-7xl md:text-[8rem] lg:text-[10.5rem] font-extrabold leading-[0.85] tracking-tighter bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent pb-4"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: delay2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              GAMEPAD
            </motion.h1>
          </div>

          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: delay3 }}
              className="mb-10 max-w-xl"
            >
              <p className="text-lg md:text-xl font-light text-foreground/70 tracking-wide leading-relaxed">
                Turn your phone into a powerful PC controller. <br className="hidden sm:block" />
                <span className="font-medium text-foreground/90">Zero latency. Fully customizable.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: delay4 }}
            >
              <a
                href="#downloads"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-foreground px-8 py-4 text-lg font-medium text-background transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.2)]"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="h-1/2 w-1/2 bg-background/20 blur-xl rounded-full"></div>
                </div>
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download Desktop</span>
              </a>
              <a
                href="#mobile"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md px-8 py-4 text-lg font-medium text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/20 active:scale-95"
              >
                <Smartphone size={20} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                <span>Get Mobile App</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
