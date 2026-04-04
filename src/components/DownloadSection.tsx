import { motion } from "framer-motion";
import { Download } from "lucide-react";
import linuxLogo from "@/assets/linux-svgrepo-com.svg";

const ThemedLogoImage = ({
  alt,
  src,
  className,
}: {
  alt: string;
  src: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    className={`${className} object-contain dark:invert`}
    loading="lazy"
    decoding="async"
  />
);

const WindowsLogo = ({ className }: { className?: string }) => (
  <ThemedLogoImage alt="Windows Logo" src="/windows-logo.svg" className={className} />
);

const MacOSLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const LinuxLogo = ({ className }: { className?: string }) => (
  <ThemedLogoImage alt="Linux Logo" src={linuxLogo} className={className} />
);

const platforms = [
  {
    name: "Windows",
    logo: WindowsLogo,
    file: "SimGamepad_Installer.zip",
    ext: ".exe",
    href: "/downloads/SimGamepad_Installer.zip",
    download: true,
  },
  {
    name: "macOS",
    logo: MacOSLogo,
    file: "simgamepad.dmg",
    ext: ".dmg",
    href: "/downloads/simgamepad.dmg",
  },
  {
    name: "Linux",
    logo: LinuxLogo,
    file: "simgamepad.AppImage",
    ext: ".AppImage",
    href: "/downloads/simgamepad.AppImage",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const DownloadSection = () => {
  return (
    <section id="downloads" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-[4rem] font-extrabold tracking-tighter bg-gradient-to-br from-foreground to-foreground/50 bg-clip-text text-transparent pb-2">
            Download Desktop
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Available for all major platforms
          </p>
        </motion.div>

        {/* Platform cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-3 md:gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {platforms.map((platform) => {
            const Logo = platform.logo;
            return (
              <motion.a
                key={platform.name}
                href={platform.href}
                download={platform.download ? true : undefined}
                className="group relative flex flex-col items-center gap-6 rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-lg p-10 overflow-hidden transform-gpu transition-all duration-500 ease-out hover:bg-foreground/10 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_30px_60px_-18px_rgba(0,0,0,0.45)] hover:border-foreground/20"
                variants={cardVariants}
              >
                {/* Subtle internal gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-foreground/0 to-foreground/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                
                <Logo
                  className="relative z-10 h-14 w-14 text-muted-foreground transition-all duration-500 group-hover:text-foreground group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] dark:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.ext}
                  </p>
                </div>
                <div className="relative z-10 flex items-center gap-2 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/5 px-6 py-3 text-sm font-medium transition-all group-hover:bg-foreground group-hover:text-background shadow-sm">
                  <Download size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  Download
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
