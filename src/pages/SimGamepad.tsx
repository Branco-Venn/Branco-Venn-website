import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Smartphone, Gamepad2, Wifi, Zap, Monitor, ChevronDown, MousePointer2, Layers } from "lucide-react";
import { useRef } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import heroImageLogo from "@/assets/SimGamepadLogo.png";
import PageTransition from "@/components/PageTransition";
import PlexusBackground from "@/components/PlexusBackground";

const features = [
    {
        icon: <Wifi className="w-8 h-8 text-primary" />,
        title: "Ultra-Low Latency",
        description: "Experience near-zero lag with our optimized networking stack. Your actions happen the moment you touch the screen."
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "Customizable Layouts",
        description: "Rearrange buttons, adjust sensitivity, and create multiple profiles for every game in your library."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Haptic Feedback",
        description: "Feel the rumble. Our advanced vibration sync brings every explosion and collision to life in your hands."
    },
    {
        icon: <MousePointer2 className="w-8 h-8 text-primary" />,
        title: "Touch Precision",
        description: "Transform your high-refresh rate phone screen into a precision input device for competitive gaming."
    }
];

interface SimGamepadProps {
    isInitialVisit?: boolean;
}

const SimGamepad = ({ isInitialVisit = false }: SimGamepadProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lockedInitialVisit = useRef(isInitialVisit).current;
    const baseDelay = lockedInitialVisit ? 4.5 : 0;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backdropY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <PageTransition>
            <div ref={containerRef} className="min-h-screen bg-background selection:bg-primary/30 scroll-smooth">
                
                {/* Global Background Plexus Animation */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
                    <PlexusBackground />
                </div>

                <div className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
                    {/* Hero Section */}
                    <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
                        
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: baseDelay, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-foreground/80 text-xs md:text-sm font-semibold mb-8 tracking-widest uppercase backdrop-blur-md"
                            >
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Ultimate Mobile Control
                            </motion.div>

                            <div className="mb-8 relative">
                                <motion.h1
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: baseDelay + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                                    className="text-[14vw] sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black tracking-tighter leading-[0.9] bg-gradient-to-br from-foreground to-foreground/40 bg-clip-text text-transparent pb-4 pr-10"
                                >
                                    SIM <br className="hidden sm:block" />
                                    GAMEPAD.
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: baseDelay + 0.4 }}
                                    className="text-2xl md:text-3xl font-light text-muted-foreground mt-2 tracking-tight"
                                >
                                    Your Phone is Player 1.
                                </motion.p>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: baseDelay + 0.5 }}
                                className="text-lg md:text-xl text-muted-foreground/70 leading-relaxed max-w-xl mb-12 mx-auto lg:mx-0"
                            >
                                Don't have a controller? No problem. Sim Gamepad instantly transforms your smartphone into a high-performance PC controller with zero-latency response.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: baseDelay + 0.6 }}
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                            >
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <button
                                            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-foreground px-10 py-5 text-lg font-bold text-background transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/5"
                                        >
                                            <Download size={22} className="relative z-10 transition-transform group-hover:-translate-y-1" />
                                            <span className="relative z-10">Get Desktop App</span>
                                            <ChevronDown size={18} className="relative z-10 opacity-70 group-hover:rotate-180 transition-transform" />
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent opacity-0 group-hover:opacity-10 transition-opacity" />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start" className="w-[280px] p-2 bg-background/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
                                        {[
                                            { name: "Windows", ext: ".exe (64-bit)", href: "/downloads/SimGamepad.exe", icon: <path d="M0,12.402l35.687-4.86l0.016,34.423l-35.67,0.204L0,12.402z M35.67,46.454l0.033,34.439l-35.703-4.891V46.121L35.67,46.454z M40.336,6.311L88,0v41.697l-47.664,0.27v-35.656C40.336,6.311,40.336,6.311,40.336,6.311z M88,46.887V88l-47.664-6.527V46.617L88,46.887z" />, vb: "0 0 88 88" },
                                            { name: "macOS", ext: ".dmg", href: "/downloads/simgamepad.dmg", icon: <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />, vb: "0 0 24 24" },
                                            { name: "Linux", ext: ".AppImage", href: "/downloads/simgamepad.AppImage", icon: <path d="M256 0c-43.2 0-82.6 15.3-112.5 39.7C106 72 80 119.8 80 176c0 30 11.8 55.4 30.6 74.3C80.3 270 48 316.5 48 368c0 61.9 50.1 112 112 112c14.2 0 27.6-2.7 40-7.5c20.3-8 44.4-15.6 74.3-15.3l3.3.1c29.9-.3 54 7.3 74.3 15.3c12.4 4.8 25.8 7.5 40 7.5c61.9 0 112-50.1 112-112c0-51.5-32.3-98-62.6-117.7c18.8-18.9 30.6-44.3 30.6-74.3c0-56.2-26-104-63.5-136.3C338.6 15.3 299.2 0 256 0zm0 32c32.7 0 62.7 11.2 85.1 29c21.8 17.3 35.3 43.1 35.3 70.3c0 23.3-8.8 44.8-23.7 61.1c-14.7 16-35.3 26.5-56.7 26.5c-48.4 0-48.4-48-40.4-48c0 0-40.4-16.2-40.4 48c0 0 0 48-40.4 48c-21.4 0-42-10.5-56.7-26.5c-14.9-16.3-23.7-37.8-23.7-61.1c0-27.2 13.5-53 35.3-70.3C193.3 43.2 223.3 32 256 32z" />, vb: "0 0 512 512" }
                                        ].map((p) => (
                                            <DropdownMenuItem key={p.name} asChild>
                                                <a href={p.href} download className="flex items-center gap-4 p-4 rounded-xl cursor-pointer hover:bg-white/5 transition-all group overflow-hidden relative">
                                                    <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                                                        <svg viewBox={p.vb} className="w-5 h-5 text-foreground/80 group-hover:text-foreground" fill="currentColor">
                                                            {p.icon}
                                                        </svg>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-foreground tracking-tight">{p.name}</span>
                                                        <span className="text-[0.65rem] text-muted-foreground uppercase tracking-widest">{p.ext}</span>
                                                    </div>
                                                </a>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                <a
                                    href="#mobile"
                                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-md px-10 py-5 text-lg font-bold text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/20 active:scale-95 shadow-xl"
                                >
                                    <Smartphone size={22} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                                    <span>Get Mobile App</span>
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 100, rotate: 5 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1.2, delay: baseDelay + 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-1 relative w-full flex items-center justify-center pt-10 sm:pt-0"
                        >
                            <div className="absolute inset-[-20%] bg-gradient-to-tr from-primary/30 via-blue-500/10 to-transparent blur-[100px] rounded-full opacity-60 animate-pulse" />
                            <motion.img
                                src={heroImageLogo}
                                alt="Sim Gamepad Logo"
                                style={{ y: backdropY }}
                                className="relative z-10 w-full max-w-[500px] h-auto object-contain drop-shadow-[0_45px_65px_rgba(0,0,0,0.6)] animate-float-slow"
                            />
                        </motion.div>
                    </section>
                </div>

                {/* Features Grid */}
                <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/50 bg-clip-text text-transparent">
                            Engineered for Gamers.
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground/60 max-w-2xl font-light">
                            Every aspect of Sim Gamepad is built with performance and precision in mind.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                                className="group relative p-10 rounded-[2.5rem] border border-foreground/5 bg-foreground/[0.02] backdrop-blur-xl hover:bg-foreground/[0.05] hover:border-foreground/10 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className="relative z-10 w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                    <div className="text-foreground group-hover:text-primary transition-colors duration-500">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="relative z-10 text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                                    {feature.title}
                                </h3>
                                <p className="relative z-10 text-muted-foreground/80 leading-relaxed font-light group-hover:text-foreground/80 transition-colors duration-500">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Large CTA Section */}
                <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pb-40">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden border border-foreground/10 bg-gradient-to-br from-foreground to-foreground/80 text-background text-center md:text-left shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                        
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.9]">
                                Ready to take <br className="hidden md:block" /> control?
                            </h2>
                            <p className="text-lg md:text-xl font-medium mb-12 opacity-80 leading-relaxed tracking-tight">
                                Join thousands of players who have turned their smartphones into a high-performance gaming edge.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
                                <a href="#downloads" className="px-10 py-5 rounded-full bg-background text-foreground font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
                                    Start Playing Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Footer Spacer */}
                <div className="h-20" />
            </div>
        </PageTransition>
    );
};

export default SimGamepad;

