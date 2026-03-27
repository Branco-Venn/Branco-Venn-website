import { motion } from "framer-motion";
import { memo, ReactNode } from "react";

interface OptimizedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const OptimizedSection = memo(({ children, delay = 0, className = "" }: OptimizedSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: delay * 0.1, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={`smooth-transform ${className}`}
    >
      {children}
    </motion.section>
  );
});

OptimizedSection.displayName = "OptimizedSection";

export default OptimizedSection;
