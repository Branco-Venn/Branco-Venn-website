import { motion } from "framer-motion";
import { Shield, Mail, Database, Lock } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95">
      <div className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/70 font-light max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your data.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Privacy Policy Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.05),inset_-2px_-2px_8px_rgba(255,255,255,0.1),4px_4px_16px_rgba(0,0,0,0.08),-4px_-4px_16px_rgba(255,255,255,0.05)] border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Privacy Policy</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  What Data We Collect
                </h3>
                <ul className="space-y-3 text-foreground/70 font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span><strong>Name:</strong> Collected via Facebook authentication for user identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span><strong>Email:</strong> Collected via Facebook login for account management and communication</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-primary" />
                  Why We Collect It
                </h3>
                <ul className="space-y-3 text-foreground/70 font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span><strong>Authentication:</strong> To verify your identity and provide secure access to our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span><strong>App Functionality:</strong> To enable core features and personalize your experience</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  Data Storage
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  All your data is stored securely using Supabase, our trusted database provider. We implement industry-standard security measures to protect your information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  If you have any questions about our privacy practices, please contact us at: <strong>brancovenn@email.com</strong>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Data Deletion Section */}
          <motion.section
            id="data-deletion"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.05),inset_-2px_-2px_8px_rgba(255,255,255,0.1),4px_4px_16px_rgba(0,0,0,0.08),-4px_-4px_16px_rgba(255,255,255,0.05)] border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-red-500/10 border border-red-500/20">
                <Shield className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Data Deletion</h2>
            </div>

            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
              <p className="text-foreground/80 font-medium leading-relaxed text-center">
                Users can request deletion of their data by contacting: <strong>brancovenn@email.com</strong>
              </p>
            </div>

            <div className="mt-6 text-foreground/60 font-light text-sm leading-relaxed">
              <p>We will process your deletion request within 30 days and confirm once your data has been permanently removed from our systems.</p>
            </div>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/50 font-light text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
