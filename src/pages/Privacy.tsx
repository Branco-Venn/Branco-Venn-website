import { motion } from "framer-motion";
import { Shield, Mail, Database, Lock, ArrowRight, User, Clock, AlertCircle, CheckCircle, ExternalLink, Globe, RefreshCw, Info } from "lucide-react";

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
                  Information We Collect
                </h3>
                <div className="space-y-4">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">a. Information from Third-Party Authentication Providers</h4>
                    <p className="text-foreground/70 font-light leading-relaxed mb-3">
                      When you sign in using a third-party authentication provider (such as Google, Apple, or Facebook), we may receive:
                    </p>
                    <ul className="space-y-2 text-foreground/70 font-light leading-relaxed ml-4">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                        <span>Your name</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                        <span>Email address</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                        <span>Profile picture (if permitted)</span>
                      </li>
                    </ul>
                    <p className="text-foreground/70 font-light leading-relaxed mt-3">
                      We only collect the information necessary to authenticate your account and provide our services.
                    </p>
                  </div>
                  
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">b. Automatically Collected Information</h4>
                    <p className="text-foreground/70 font-light leading-relaxed mb-3">
                      We may collect:
                    </p>
                    <ul className="space-y-2 text-foreground/70 font-light leading-relaxed ml-4">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-500/50 mt-2 flex-shrink-0"></span>
                        <span>Device information (device type, OS)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-500/50 mt-2 flex-shrink-0"></span>
                        <span>App usage data (features used, session duration)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-blue-500/50 mt-2 flex-shrink-0"></span>
                        <span>Log data (IP address, timestamps)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-primary" />
                  How We Use Your Information
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-3">
                  We use your information to:
                </p>
                <ul className="space-y-2 text-foreground/70 font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span>Authenticate users and manage accounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span>Provide and improve app functionality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span>Ensure security and prevent fraud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
                    <span>Communicate important updates</span>
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-foreground/80 font-medium">
                    We do <strong>not sell your personal data</strong> to third parties.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  Sharing of Information
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-3">
                  We do not share your personal data except:
                </p>
                <ul className="space-y-2 text-foreground/70 font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500/50 mt-2 flex-shrink-0"></span>
                    <span>To comply with legal obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500/50 mt-2 flex-shrink-0"></span>
                    <span>To protect our rights and prevent misuse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500/50 mt-2 flex-shrink-0"></span>
                    <span>With trusted service providers (e.g., hosting, analytics) strictly for operating the service</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  Data Retention
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  We retain your data only as long as necessary to:
                </p>
                <ul className="space-y-2 text-foreground/70 font-light leading-relaxed mt-2">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 mt-2 flex-shrink-0"></span>
                    <span>Provide our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 mt-2 flex-shrink-0"></span>
                    <span>Comply with legal obligations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 mt-2 flex-shrink-0"></span>
                    <span>Resolve disputes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  Data Deletion
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-3">
                  You can request deletion of your data at any time.
                </p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-3">
                  <p className="text-foreground/80 font-medium flex items-center gap-2">
                    For detailed instructions, visit: <ArrowRight className="w-4 h-4 text-green-500" /> <a href="#data-deletion" className="text-green-500 hover:underline">https://brancovenn.com/privacy#data-deletion</a>
                  </p>
                </div>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Upon request, we will delete your data within <strong>7–14 business days</strong>, subject to legal requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Lock className="w-5 h-5 text-primary" />
                  Data Security
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-3">
                  We implement reasonable technical and organizational measures to protect your data, including:
                </p>
                <ul className="space-y-2 text-foreground/70 font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500/50 mt-2 flex-shrink-0"></span>
                    <span>Secure storage systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500/50 mt-2 flex-shrink-0"></span>
                    <span>Access controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500/50 mt-2 flex-shrink-0"></span>
                    <span>Encryption where applicable</span>
                  </li>
                </ul>
                <p className="text-foreground/60 font-light text-sm leading-relaxed mt-3">
                  However, no system is completely secure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  Your Rights
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-3">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="space-y-2 text-foreground/70 font-light leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500/50 mt-2 flex-shrink-0"></span>
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500/50 mt-2 flex-shrink-0"></span>
                    <span>Request correction or deletion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500/50 mt-2 flex-shrink-0"></span>
                    <span>Withdraw consent</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  Third-Party Services
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-3">
                  Our application integrates with third-party authentication providers and services. These providers may collect and process your data according to their own privacy policies.
                </p>
                <p className="text-foreground/70 font-light leading-relaxed">
                  We encourage you to review their policies for more information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  Children's Privacy
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Our services are not intended for children under 13. We do not knowingly collect personal data from children.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Database className="w-5 h-5 text-primary" />
                  Changes to This Policy
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Us
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed mb-3">
                  If you have any questions about this Privacy Policy, contact us at:
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <div className="space-y-2">
                    <p className="text-foreground/80 font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" /> <a href="mailto:brancovenn@gmail.com" className="text-primary hover:underline">brancovenn@gmail.com</a>
                    </p>
                    <p className="text-foreground/80 font-medium flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" /> <a href="https://brancovenn.com" className="text-primary hover:underline">https://brancovenn.com</a>
                    </p>
                  </div>
                </div>
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

            <div className="space-y-6">
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <User className="w-5 h-5 text-blue-500" />
                  1. Deletion via Application (Recommended)
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-4">
                  If available, you can delete your account directly within the application by navigating to:
                </p>
                <div className="bg-background/50 border border-foreground/20 rounded-lg p-4 mb-4">
                  <p className="text-foreground font-mono text-center">
                    <strong>Settings → Account → Delete Account</strong>
                  </p>
                </div>
                <p className="text-foreground/80 font-medium leading-relaxed mb-3">
                  Once initiated:
                </p>
                <ul className="space-y-2 text-foreground/70 font-normal leading-relaxed ml-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Your account and associated data will be permanently deleted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>You will be logged out immediately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span>This action is irreversible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  2. Deletion via Request (Alternative Method)
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-4">
                  If you are unable to access your account or prefer manual deletion, you may request data deletion by:
                </p>
                <ol className="space-y-4 text-foreground/80 font-medium leading-relaxed">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      Sending an email to <strong>brancovenn@gmail.com</strong>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      Using the subject line: <strong>"Data Deletion Request"</strong>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      Including:
                      <ul className="mt-2 ml-4 space-y-1 text-foreground/70 font-normal">
                        <li>• Your full name</li>
                        <li>• Email address associated with your account</li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-500" />
                  3. Processing Your Request
                </h3>
                <ul className="space-y-2 text-foreground/80 font-medium leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 mt-2 flex-shrink-0"></span>
                    <span>We will verify your identity to protect your data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 mt-2 flex-shrink-0"></span>
                    <span>Once verified, your data will be deleted within <strong>7–14 business days</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 mt-2 flex-shrink-0"></span>
                    <span>You will receive confirmation upon completion</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-500/5 border border-orange-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Database className="w-5 h-5 text-orange-500" />
                  4. What Data is Deleted
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-3">
                  Upon deletion, we remove:
                </p>
                <ul className="space-y-2 text-foreground/70 font-normal leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500/50 mt-2 flex-shrink-0"></span>
                    <span>Account information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500/50 mt-2 flex-shrink-0"></span>
                    <span>Authentication data (e.g., name, email)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500/50 mt-2 flex-shrink-0"></span>
                    <span>User-generated data and preferences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Info className="w-5 h-5 text-yellow-500" />
                  5. Data Retention
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed mb-3">
                  Certain minimal data may be retained if required for:
                </p>
                <ul className="space-y-2 text-foreground/70 font-normal leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-500/50 mt-2 flex-shrink-0"></span>
                    <span>Legal compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-500/50 mt-2 flex-shrink-0"></span>
                    <span>Security and fraud prevention</span>
                  </li>
                </ul>
                <p className="text-foreground/70 font-light leading-relaxed mt-3">
                  Such data will not be used for any other purpose.
                </p>
              </div>

              <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-500" />
                  6. Contact
                </h3>
                <p className="text-foreground/80 font-medium leading-relaxed">
                  For any questions regarding data deletion, contact: <strong>brancovenn@gmail.com</strong>
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
