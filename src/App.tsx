import { lazy, Suspense, useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Index = lazy(() => import("./pages/Index"));
const Product = lazy(() => import("./pages/Product"));
const SimGamepad = lazy(() => import("./pages/SimGamepad"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  // Use simple local state. When the user hard refreshes, App remounts and showIntro is true.
  // When they navigate via React Router (e.g., Home -> About -> Home), App does NOT remount, 
  // so showIntro remains false and the intro does not play again.
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AnimatePresence>
              {showIntro && (
                <IntroAnimation
                  key="intro"
                  onComplete={handleIntroComplete}
                />
              )}
            </AnimatePresence>
            <Navbar />
            <Suspense fallback={null}>
              <Routes>
                {/* Pass whether the intro is currently showing down so HeroSection can delay its animation perfectly */}
                <Route path="/" element={<Index isInitialVisit={showIntro} />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/sim-gamepad" element={<SimGamepad isInitialVisit={showIntro} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
