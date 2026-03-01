import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageTransition from "@/components/PageTransition";
// import ParticleBackground from "@/components/ParticleBackground"; // Removed for performance
const contactSocials = [
  {
    name: "Instagram",
    href: "https://instagram.com/brancovenn",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: "group-hover:text-pink-500",
    bgGlow: "group-hover:bg-pink-500/10 group-hover:border-pink-500/50",
    shadow: "group-hover:shadow-[0_0_20px_-5px_rgba(236,72,153,0.5)]"
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@brancovenn",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "group-hover:text-red-500",
    bgGlow: "group-hover:bg-red-500/10 group-hover:border-red-500/50",
    shadow: "group-hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.5)]"
  },
  {
    name: "X",
    href: "https://x.com/brancovenn",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "group-hover:text-foreground",
    bgGlow: "group-hover:bg-foreground/10 group-hover:border-foreground/50",
    shadow: "group-hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)] dark:group-hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
  },
  {
    name: "Discord",
    href: "https://discord.gg/brancovenn",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
      </svg>
    ),
    color: "group-hover:text-[#5865F2]",
    bgGlow: "group-hover:bg-[#5865F2]/10 group-hover:border-[#5865F2]/50",
    shadow: "group-hover:shadow-[0_0_20px_-5px_rgba(88,101,242,0.5)]"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setSending(true);

    // Simulate sending (replace with real API endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully",
      description: "Our team will reach out to you within 24 hours.",
    });

    setForm({ name: "", email: "", message: "" });
    setSending(false);
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen w-full overflow-hidden bg-background pt-24 pb-16 text-foreground">

        {/* Antigravity Background removed for performance */}
        {/* <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-100 mix-blend-screen">
          <ParticleBackground />
        </div> */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 py-12 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Info & Socials */}
            <div className="flex flex-col justify-center h-full relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 tracking-wide uppercase">
                  Support & Inquiries
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 dark:text-white">
                  Get in Touch.
                  <br />
                  <span className="text-muted-foreground font-light">We're here to help.</span>
                </h1>
                <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-lg mb-12">
                  Whether you have a question about SimGamepad, need technical support, or want to explore partnership opportunities, our team is ready to assist you.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                className="flex flex-col gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all shadow-lg shadow-black/5 dark:shadow-none">
                    <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest opacity-60">Email Us</p>
                    <a href="mailto:brancovenn@gmail.com" className="text-lg font-semibold cursor-pointer">brancovenn@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all shadow-lg shadow-black/5 dark:shadow-none">
                    <MapPin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest opacity-60">Location</p>
                    <p className="text-lg font-semibold">Global Remote Team</p>
                  </div>
                </div>

                <motion.div
                  className="mt-8 pt-8 border-t border-border/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/70 mb-5">
                    Connect With Us
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 relative z-50 w-full max-w-md">
                    {contactSocials.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center justify-between px-4 py-3.5 md:px-5 md:py-4 rounded-2xl border border-white/10 dark:border-white/5 bg-black/5 dark:bg-white/5 backdrop-blur-md transition-all duration-300 overflow-hidden ${social.bgGlow} ${social.shadow}`}
                        whileHover={{ y: -4, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {/* Background Shine */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer z-0" />

                        <div className="relative z-10 flex items-center gap-3">
                          <div className={`text-foreground/70 transition-colors duration-300 ${social.color}`}>
                            {social.icon}
                          </div>
                          <span className={`font-semibold text-sm transition-colors duration-300 ${social.color} opacity-90 group-hover:opacity-100`}>
                            {social.name}
                          </span>
                        </div>

                        {/* External Link Arrow */}
                        <div className={`relative z-10 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-foreground/50 ${social.color}`}>
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

            </div>

            {/* Right Column: Glassmorphic Form */}
            <motion.div
              className="relative w-full max-w-xl mx-auto lg:ml-auto z-20"
              initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Glow Behind Form */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent blur-3xl opacity-50 dark:opacity-30 rounded-[3rem]" />

              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col gap-6 p-8 sm:p-10 rounded-[2.5rem] border border-white/20 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-black/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold tracking-tight">Send a Message</h3>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Name */}
                <div className="relative group">
                  <label htmlFor="name" className="absolute left-5 top-[-10px] bg-white dark:bg-[#0a0a0a] px-2 text-xs font-semibold uppercase tracking-widest text-primary z-10 rounded-md shadow-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 px-5 py-4 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <label htmlFor="email" className="absolute left-5 top-[-10px] bg-white dark:bg-[#0a0a0a] px-2 text-xs font-semibold uppercase tracking-widest text-primary z-10 rounded-md shadow-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 px-5 py-4 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message */}
                <div className="relative group flex-1">
                  <label htmlFor="message" className="absolute left-5 top-[-10px] bg-white dark:bg-[#0a0a0a] px-2 text-xs font-semibold uppercase tracking-widest text-primary z-10 rounded-md shadow-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full h-full min-h-[140px] resize-none rounded-2xl border border-white/30 dark:border-white/10 bg-white/50 dark:bg-white/5 px-5 py-4 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300"
                    placeholder="How can we help you today?"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  className="relative overflow-hidden mt-4 w-full flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-5 text-lg font-bold text-primary-foreground shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                  whileHover={{ scale: sending ? 1 : 1.02 }}
                  whileTap={{ scale: sending ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Launch Message
                        <motion.div
                          className="ml-1"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Send size={18} />
                        </motion.div>
                      </>
                    )}
                  </span>
                  {/* Hover Shine Effect */}
                  {!sending && (
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
