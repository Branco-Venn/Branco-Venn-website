import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import iconImage from "@/assets/icon.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Product", path: "/product" },
  { label: "About", path: "/about" },
  { label: "Privacy", path: "/privacy" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setProductDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductDropdownOpen(false);
    }, 150);
  };

  // Performance optimization: throttled scroll handler for 120Hz
  const handleScroll = useCallback(() => setScrolled(window.scrollY > 40), []);
  
  useEffect(() => {
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", optimizedScroll, { passive: true });
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileOpen(false);
    setProductDropdownOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4.0 }}
      >
        <div className={`mx-auto flex max-w-6xl relative items-center justify-between px-6 py-3 md:px-8 rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-2xl shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.1),2px_2px_8px_rgba(0,0,0,0.15),-2px_-2px_8px_rgba(255,255,255,0.05)] border border-white/10"
            : "bg-background/40 backdrop-blur-xl shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.15),4px_4px_12px_rgba(0,0,0,0.1),-4px_-4px_12px_rgba(255,255,255,0.08)] border border-white/20"
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo className="cursor-pointer w-12 h-12 md:w-14 md:h-14" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              link.label === "Product" ? (
                <div
                  key={link.path}
                  className="relative h-full flex items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`flex outline-none items-center gap-1 text-sm font-light tracking-widest uppercase transition-all duration-300 hover:scale-105 rounded-full px-3 py-1.5 ${
                    location.pathname.startsWith('/product') 
                      ? "bg-foreground/10 opacity-100" 
                      : "opacity-50 hover:opacity-100"
                  }`}>
                    {link.label}
                  </button>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-light tracking-widest uppercase transition-all duration-300 hover:scale-105 rounded-full px-3 py-1.5 ${
                    location.pathname === link.path
                      ? "bg-foreground/10 opacity-100"
                      : "opacity-50 hover:opacity-100"
                    }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop: Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 mr-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
            <button
              className="md:hidden relative z-50 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.2),2px_2px_6px_rgba(0,0,0,0.15),-2px_-2px_6px_rgba(255,255,255,0.08)] rounded-full p-3 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Product Dropdown Rendered as Sibling for Absolute Alignment */}
          <AnimatePresence>
            {productDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -5, filter: "blur(2px)", transition: { duration: 0.15 } }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="absolute top-[100%] left-0 right-0 pt-4 z-50 pointer-events-auto"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full bg-background/80 backdrop-blur-2xl rounded-3xl shadow-[inset_2px_2px_8px_rgba(0,0,0,0.08),inset_-2px_-2px_8px_rgba(255,255,255,0.15),4px_4px_16px_rgba(0,0,0,0.12),-4px_-4px_16px_rgba(255,255,255,0.1)] border border-white/10 relative overflow-hidden">
                  <div className="px-8 py-10 flex flex-row justify-between relative">
                    {/* Left Panel - Header / Description */}
                    <div className="w-[40%] flex flex-col justify-start">
                      <h3 className="text-2xl font-medium tracking-wider text-foreground mb-4 font-brand">Product Ecosystem</h3>
                      <p className="text-base text-foreground/70 font-light leading-relaxed max-w-sm">
                        Everything you need to elevate your simulation experience and seamlessly integrate with your rig.
                      </p>
                    </div>

                    {/* Divider line */}
                    <div className="absolute left-[45%] top-10 bottom-10 w-px bg-white/10 hidden md:block" />

                    {/* Right Panel - Links */}
                    <div className="w-[50%] grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Link
                        to="/product"
                        className="group flex flex-row items-center justify-between p-5 rounded-2xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05),inset_-2px_-2px_6px_rgba(255,255,255,0.12),2px_2px_8px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.06)] transition-all duration-300 hover:scale-105 hover:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.08),inset_-1px_-1px_4px_rgba(255,255,255,0.18),3px_3px_12px_rgba(0,0,0,0.12),-3px_-3px_12px_rgba(255,255,255,0.08)]"
                        onClick={() => setProductDropdownOpen(false)}
                      >
                        <div className="flex flex-col flex-1 pr-4">
                          <span className="font-semibold text-lg tracking-widest uppercase text-foreground mb-2">Overview</span>
                          <span className="text-sm text-foreground/50 font-light tracking-wide leading-relaxed">
                            Explore our entire hardware ecosystem and tech specs.
                          </span>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                          <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-all text-foreground group-hover:text-primary" />
                        </div>
                      </Link>

                      <Link
                        to="/product/sim-gamepad"
                        className="group flex flex-row items-center justify-between p-5 rounded-2xl shadow-[inset_2px_2px_6px_rgba(0,0,0,0.05),inset_-2px_-2px_6px_rgba(255,255,255,0.12),2px_2px_8px_rgba(0,0,0,0.08),-2px_-2px_8px_rgba(255,255,255,0.06)] transition-all duration-300 hover:scale-105 hover:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.08),inset_-1px_-1px_4px_rgba(255,255,255,0.18),3px_3px_12px_rgba(0,0,0,0.12),-3px_-3px_12px_rgba(255,255,255,0.08)]"
                        onClick={() => setProductDropdownOpen(false)}
                      >
                        <div className="flex flex-col flex-1 pr-4">
                          <span className="font-bold text-lg tracking-widest uppercase text-primary mb-2">Sim Gamepad</span>
                          <span className="text-sm text-foreground/50 font-light tracking-wide leading-relaxed">
                            Turn your device into a powerful virtual button box map.
                          </span>
                        </div>
                        <div className="flex-shrink-0">
                          <img src={iconImage} alt="Sim Gamepad Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100 drop-shadow-lg" />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background shadow-[inset_4px_4px_12px_rgba(0,0,0,0.1),inset_-4px_-4px_12px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  {link.label === "Product" ? (
                    <div className="flex flex-col items-center gap-6">
                      <span className="font-logo text-2xl tracking-[0.2em] opacity-40">PRODUCT</span>
                      <Link
                        to="/product"
                        className="font-logo text-xl tracking-[0.15em] opacity-80 hover:opacity-100 transition-opacity"
                        onClick={() => setMobileOpen(false)}
                      >
                        OVERVIEW
                      </Link>
                      <Link
                        to="/product/sim-gamepad"
                        className="font-logo text-xl tracking-[0.15em] text-primary hover:opacity-100 transition-opacity"
                        onClick={() => setMobileOpen(false)}
                      >
                        SIM GAMEPAD
                      </Link>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`font-logo text-2xl tracking-[0.2em] transition-opacity duration-300 hover:opacity-100 ${location.pathname === link.path
                        ? "opacity-100"
                        : "opacity-50"
                        }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                className="mt-4 flex flex-row items-center gap-6"
              >
                <div className="flex items-center justify-center p-2 rounded-full bg-foreground/5 outline-none">
                   <LanguageSelector />
                </div>
                <ThemeToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
