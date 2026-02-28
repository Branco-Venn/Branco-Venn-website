import { motion } from "framer-motion";
import { Download, Smartphone, Gamepad2, Wifi, Zap, Monitor, ChevronDown } from "lucide-react";
import { useRef } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import heroImage from "@/assets/hero-gamepad.png";
import PageTransition from "@/components/PageTransition";

const features = [
    {
        icon: <Wifi className="w-8 h-8 text-primary" />,
        title: "Ultra-Low Latency",
        description: "Connect via Wi-Fi or USB for an instantaneous, lag-free gaming experience locally on your network."
    },
    {
        icon: <Gamepad2 className="w-8 h-8 text-primary" />,
        title: "Customizable Layouts",
        description: "Adjust button sizes, layouts, and mappings to match any game or your personal preference."
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Haptic Feedback",
        description: "Feel every action with advanced haptic vibration synchronization right in the palm of your hand."
    },
    {
        icon: <Monitor className="w-8 h-8 text-primary" />,
        title: "PC Integration",
        description: "Seamlessly pairs with the SimGamepad Desktop client, recognized natively as a standard PC gamepad."
    }
];

interface SimGamepadProps {
    isInitialVisit?: boolean;
}

const SimGamepad = ({ isInitialVisit = false }: SimGamepadProps) => {
    // Lock the prop value on mount so framer-motion delays don't abruptly change to 0
    const lockedInitialVisit = useRef(isInitialVisit).current;

    // Sync the animation delays identically to HeroSection
    const baseDelay = lockedInitialVisit ? 4.5 : 0;

    return (
        <PageTransition>
            <div className="min-h-screen bg-background pt-24 pb-16">

                {/* Dynamic Header Section */}
                <section className="relative overflow-hidden w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col-reverse md:flex-row items-center gap-12">

                    <div className="flex-1 z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: baseDelay, ease: "easeOut" }}
                            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 tracking-wide"
                        >
                            Ultimate Mobile Control
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: baseDelay + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
                        >
                            Sim Gamepad.
                            <br />
                            <span className="text-muted-foreground font-light">Your Phone is the Player 1.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: baseDelay + 0.4, ease: "easeOut" }}
                            className="text-xl text-muted-foreground/80 leading-relaxed max-w-xl mb-10"
                        >
                            Don't have a controller? No problem. Sim Gamepad instantly transforms your smartphone into a high-performance PC controller with customizable layouts and ultra-low latency.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: baseDelay + 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 outline-none"
                                    >
                                        <Download size={20} />
                                        Get Desktop App
                                        <ChevronDown size={16} className="ml-1 opacity-70" />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start" className="w-[240px] p-2 bg-background/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                                    <DropdownMenuItem asChild>
                                        <a href="/downloads/SimGamepad.exe" download className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                <svg viewBox="0 0 88 88" className="w-4 h-4 text-foreground" fill="currentColor">
                                                    <path d="M0,12.402l35.687-4.86l0.016,34.423l-35.67,0.204L0,12.402z M35.67,46.454l0.033,34.439l-35.703-4.891V46.121L35.67,46.454z M40.336,6.311L88,0v41.697l-47.664,0.27v-35.656C40.336,6.311,40.336,6.311,40.336,6.311z M88,46.887V88l-47.664-6.527V46.617L88,46.887z" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Windows</span>
                                                <span className="text-xs text-muted-foreground">.exe (64-bit)</span>
                                            </div>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="/downloads/simgamepad.dmg" download className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                <svg viewBox="0 0 24 24" className="w-5 h-5 text-foreground" fill="currentColor">
                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">macOS</span>
                                                <span className="text-xs text-muted-foreground">.dmg</span>
                                            </div>
                                        </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <a href="/downloads/simgamepad.AppImage" download className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                                <svg viewBox="0 0 512 512" className="w-4 h-4 text-foreground" fill="currentColor">
                                                    <path d="M256 0c-43.2 0-82.6 15.3-112.5 39.7C106 72 80 119.8 80 176c0 30 11.8 55.4 30.6 74.3C80.3 270 48 316.5 48 368c0 61.9 50.1 112 112 112c14.2 0 27.6-2.7 40-7.5c20.3-8 44.4-15.6 74.3-15.3l3.3.1c29.9-.3 54 7.3 74.3 15.3c12.4 4.8 25.8 7.5 40 7.5c61.9 0 112-50.1 112-112c0-51.5-32.3-98-62.6-117.7c18.8-18.9 30.6-44.3 30.6-74.3c0-56.2-26-104-63.5-136.3C338.6 15.3 299.2 0 256 0zm0 32c32.7 0 62.7 11.2 85.1 29c21.8 17.3 35.3 43.1 35.3 70.3c0 23.3-8.8 44.8-23.7 61.1c-14.7 16-35.3 26.5-56.7 26.5c-48.4 0-48.4-48-40.4-48c0 0-40.4-16.2-40.4 48c0 0 0 48-40.4 48c-21.4 0-42-10.5-56.7-26.5c-14.9-16.3-23.7-37.8-23.7-61.1c0-27.2 13.5-53 35.3-70.3C193.3 43.2 223.3 32 256 32z M216 64a16 16 0 1 0 0 32a16 16 0 1 0 0-32zM296 64a16 16 0 1 0 0 32a16 16 0 1 0 0-32zm-40 64c24.6 0 49.3 12.8 63 33.7c15.7 23.9 14.8 55.6 .4 77.4c-11.2 16.9-32 30.6-63.4 30.6c-31.4 0-52.2-13.7-63.4-30.6c-14.4-21.8-15.3-53.5 .4-77.4C206.7 140.8 231.4 128 256 128z M128 352a16 16 0 1 0 0 32a16 16 0 1 0 0-32zM384 352a16 16 0 1 0 0 32a16 16 0 1 0 0-32z" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold">Linux</span>
                                                <span className="text-xs text-muted-foreground">.AppImage</span>
                                            </div>
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <a
                                href="#download-mobile"
                                className="inline-flex items-center justify-center gap-3 rounded-lg border border-border bg-background/50 backdrop-blur-md px-8 py-4 text-lg font-medium text-foreground transition-all hover:bg-secondary hover:scale-105 active:scale-95"
                            >
                                <Smartphone size={20} />
                                Get Mobile App
                            </a>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: baseDelay + 0.4, ease: "easeOut" }}
                        className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl opacity-50 dark:opacity-30 rounded-full" />
                        <img
                            src={heroImage}
                            alt="Sim Gamepad App UI"
                            className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-float-slow"
                        />
                    </motion.div>

                </section>

                {/* Features Grid */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-secondary/30 border border-border hover:bg-secondary/60 transition-colors duration-500"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center shadow-lg shadow-black/5 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </PageTransition>
    );
};

export default SimGamepad;
