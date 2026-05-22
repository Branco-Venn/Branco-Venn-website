import { motion } from "framer-motion";
import { memo, ReactNode, useMemo } from "react";
import OptimizedSection from "@/components/OptimizedSection";
import TermsContent from "@/components/TermsContent";

const GlassPanel = memo(({ children }: { children: ReactNode }) => (
  <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.05),inset_-2px_-2px_8px_rgba(255,255,255,0.1),4px_4px_16px_rgba(0,0,0,0.08),-4px_-4px_16px_rgba(255,255,255,0.05)]">
    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm pointer-events-none" />
    <div className="relative z-10 p-8 md:p-12">
      {children}
    </div>
  </div>
));

GlassPanel.displayName = "GlassPanel";

const Terms = () => {
  const memoizedSection = useMemo(() => (
    <OptimizedSection delay={1}>
      <GlassPanel>
        <TermsContent />
      </GlassPanel>
    </OptimizedSection>
  ), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 smooth-transform">
      <div className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent font-brand">
            Terms of Service
          </h1>
          <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
            Please read these terms carefully before using Sim Gamepad.
          </p>
        </motion.div>

        <div className="space-y-12">
          {memoizedSection}
        </div>
      </div>
    </div>
  );
};

export default memo(Terms);
