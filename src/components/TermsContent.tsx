import { 
  Scale, 
  FileText, 
  UserCheck, 
  Gamepad2, 
  Key, 
  Shield, 
  Wifi, 
  ShieldAlert, 
  Globe, 
  RefreshCw, 
  Sparkles, 
  AlertTriangle, 
  XCircle, 
  Gavel, 
  HelpCircle, 
  Mail 
} from "lucide-react";
import { memo } from "react";

const TermsContent = memo(() => {
  return (
    <>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
          <Scale className="w-6 h-6 text-primary" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-foreground">Terms and Conditions</h2>
          <span className="text-sm text-foreground/50 mt-1 font-light">Last Updated: May 22, 2026</span>
        </div>
      </div>

      <div className="space-y-8 text-foreground/80 font-light leading-relaxed">
        <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 shadow-sm">
          <p className="mb-4">
            Welcome to <strong>Sim Gamepad</strong>. These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Sim Gamepad application, website, desktop software, and related services (collectively, the &quot;Service&quot;).
          </p>
          <p className="mb-4">
            By downloading, installing, accessing, or using Sim Gamepad, you agree to be bound by these Terms.
          </p>
          <p className="font-medium text-primary flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            If you do not agree with these Terms, you must not use the Service.
          </p>
        </div>

        {/* 1. Definitions */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary" />
            1. Definitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-foreground/[0.02] border border-white/5 rounded-xl p-4">
              <span className="font-semibold text-foreground block mb-1">&quot;Sim Gamepad&quot;</span>
              <p className="text-sm text-foreground/70">Refers to the mobile application, desktop application, website, software modules, APIs, and all related services.</p>
            </div>
            <div className="bg-foreground/[0.02] border border-white/5 rounded-xl p-4">
              <span className="font-semibold text-foreground block mb-1">&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;</span>
              <p className="text-sm text-foreground/70">Refers to any individual or entity using the Service.</p>
            </div>
            <div className="bg-foreground/[0.02] border border-white/5 rounded-xl p-4">
              <span className="font-semibold text-foreground block mb-1">&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;</span>
              <p className="text-sm text-foreground/70">Refers to the owners and operators of Sim Gamepad.</p>
            </div>
            <div className="bg-foreground/[0.02] border border-white/5 rounded-xl p-4">
              <span className="font-semibold text-foreground block mb-1">&quot;Device&quot;</span>
              <p className="text-sm text-foreground/70">Refers to any smartphone, tablet, computer, or compatible hardware used with the Service.</p>
            </div>
          </div>
        </div>

        {/* 2. Eligibility */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <UserCheck className="w-5 h-5 text-primary" />
            2. Eligibility
          </h3>
          <p className="mb-3">
            You must be at least <strong>13 years old</strong> to use the Service. By using Sim Gamepad, you represent and warrant that:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>You are legally capable of entering into binding agreements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Your use of the Service complies with all applicable laws and regulations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>You will use the Service only for lawful purposes.</span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-foreground/60 italic">
            * If you are under the age of majority in your jurisdiction, you must use the Service under the supervision of a parent or legal guardian.
          </p>
        </div>

        {/* 3. Description of the Service */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Gamepad2 className="w-5 h-5 text-primary" />
            3. Description of the Service
          </h3>
          <p className="mb-4">
            Sim Gamepad enables users to transform compatible mobile devices into virtual game controllers and motion-based input devices for supported PC and gaming applications.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <span className="font-semibold text-foreground block mb-3">Key features may include:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>Motion and gyroscope steering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>Touch-based custom controls</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>Low latency Wi-Fi/Bluetooth pairing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>Wired USB communication</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>Live sensor data transmission</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>Custom controller mapping & layouts</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm text-foreground/50">
            Certain features may vary depending on device compatibility, operating system limitations, hardware capabilities, network conditions, and platform permissions.
          </p>
        </div>

        {/* 4. User Accounts */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Key className="w-5 h-5 text-primary" />
            4. User Accounts
          </h3>
          <p className="mb-3">
            Some features may require account registration. You agree to:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Provide accurate and complete information</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Maintain the confidentiality of your account credentials</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Be responsible for all activities under your account</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Notify us immediately of any unauthorized access or security breach</span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-red-500/80">
            We reserve the right to suspend or terminate accounts that violate these Terms.
          </p>
        </div>

        {/* 5. License Grant */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            5. License Grant
          </h3>
          <p className="mb-4">
            Subject to these Terms, Sim Gamepad grants you a limited, non-exclusive, non-transferable, revocable license to use the Service for personal and non-commercial purposes.
          </p>
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
            <span className="font-semibold text-foreground block mb-3 text-red-500">Prohibited Actions:</span>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mr-1">•</span>
                <span>Reverse engineer, decompile, or disassemble the Service.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mr-1">•</span>
                <span>Modify or create derivative works from the software.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mr-1">•</span>
                <span>Redistribute, resell, sublicense, or commercially exploit the Service without written permission.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mr-1">•</span>
                <span>Remove copyright, trademark, or proprietary notices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mr-1">•</span>
                <span>Use the Service to interfere with networks, systems, or third-party services.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 6. Connectivity and Performance Disclaimer */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Wifi className="w-5 h-5 text-primary" />
            6. Connectivity and Performance Disclaimer
          </h3>
          <p className="mb-3">
            Sim Gamepad relies on hardware sensors, wireless communication technologies, operating system APIs, and network conditions that may vary between devices. You acknowledge that:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Performance, latency, stability, responsiveness, and compatibility may differ across devices and platforms.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Wireless communication may be affected by interference, distance, bandwidth, or hardware limitations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Certain sensors may behave differently depending on device manufacturers and operating system implementations.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Not all devices support all features of the Service.</span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-foreground/50">
            We do not guarantee uninterrupted or error-free operation.
          </p>
        </div>

        {/* 7. Acceptable Use Policy */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-primary" />
            7. Acceptable Use Policy
          </h3>
          <p className="mb-3">
            You agree not to:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>Use the Service for illegal or unauthorized purposes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>Attempt to gain unauthorized access to servers, systems, or user accounts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>Distribute malware, harmful code, or malicious scripts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>Exploit vulnerabilities or attempt to bypass security mechanisms</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>Use automated tools to abuse the Service</span>
            </li>
          </ul>
        </div>

        {/* 8. Privacy */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            8. Privacy
          </h3>
          <p className="mb-3">
            Your use of the Service is also governed by our Privacy Policy. Sim Gamepad may collect limited technical and diagnostic information including:
          </p>
          <ul className="space-y-2 ml-4 text-sm text-foreground/70">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>Device model and operating system</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>Application crash logs & performance diagnostics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>Connectivity and pairing information</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>Anonymous usage analytics</span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-foreground/50">
            We do not intentionally collect unnecessary personal information beyond what is required to operate and improve the Service.
          </p>
        </div>

        {/* 9. Third-Party Services */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" />
            9. Third-Party Services
          </h3>
          <p className="mb-3">
            The Service may integrate with or rely on third-party platforms, operating systems, drivers, APIs, or software frameworks. We are not responsible for:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Third-party software availability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Compatibility changes made by platform providers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Third-party outages or restrictions</span>
            </li>
          </ul>
        </div>

        {/* 10. Intellectual Property */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary" />
            10. Intellectual Property
          </h3>
          <p>
            All trademarks, branding, software, source code, designs, graphics, logos, and related materials associated with Sim Gamepad are the intellectual property of the Company or its licensors. You may not use our branding or intellectual property without prior written permission.
          </p>
        </div>

        {/* 11. Updates and Modifications */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-primary" />
            11. Updates and Modifications
          </h3>
          <p className="mb-3">
            We reserve the right to:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Modify, update, or discontinue features at any time.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Release patches, bug fixes, or performance improvements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Change supported devices or compatibility requirements.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary/50 mt-2 flex-shrink-0"></span>
              <span>Introduce premium or subscription-based features in the future.</span>
            </li>
          </ul>
        </div>

        {/* 12. Beta Features */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-primary" />
            12. Beta Features
          </h3>
          <p className="mb-3">
            Certain features may be labeled as beta, experimental, or early access. These features:
          </p>
          <ul className="space-y-2 ml-4 text-sm text-foreground/70">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>May contain bugs or instability.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>May change significantly over time.</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
              <span>May be discontinued without notice.</span>
            </li>
          </ul>
          <p className="mt-3 font-semibold text-primary">
            You use beta features at your own risk.
          </p>
        </div>

        {/* 13. Disclaimer of Warranties */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <XCircle className="w-5 h-5 text-primary" />
            13. Disclaimer of Warranties
          </h3>
          <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5 text-sm">
            <p className="font-bold mb-3 uppercase tracking-wider text-orange-500">THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.</p>
            <p className="mb-2 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIM GAMEPAD DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO:
            </p>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs text-foreground/70 mb-3 pl-2">
              <div>• MERCHANTABILITY</div>
              <div>• FITNESS FOR A PARTICULAR PURPOSE</div>
              <div>• NON-INFRINGEMENT</div>
              <div>• ACCURACY</div>
              <div>• RELIABILITY</div>
              <div>• AVAILABILITY</div>
            </div>
            <p>WE DO NOT GUARANTEE THAT THE SERVICE WILL OPERATE WITHOUT INTERRUPTION, BE ERROR-FREE OR SECURE, MEET ALL USER EXPECTATIONS, OR FUNCTION IDENTICALLY ACROSS ALL DEVICES.</p>
          </div>
        </div>

        {/* 14. Limitation of Liability */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-primary" />
            14. Limitation of Liability
          </h3>
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5 text-sm">
            <p className="mb-3 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIM GAMEPAD AND ITS OWNERS, DEVELOPERS, AFFILIATES, CONTRIBUTORS, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="space-y-1 pl-4 list-disc text-foreground/70 mb-3">
              <li>Loss of data, profits, or revenue</li>
              <li>Device damage or hardware malfunctions</li>
              <li>Network interruptions or connectivity failures</li>
              <li>Input latency, gameplay disruptions, or performance degradation</li>
            </ul>
            <p className="font-semibold text-foreground border-t border-white/5 pt-3">
              IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU FOR THE SERVICE IN THE PRECEDING TWELVE (12) MONTHS.
            </p>
          </div>
        </div>

        {/* 15. Indemnification */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-primary" />
            15. Indemnification
          </h3>
          <p>
            You agree to defend, indemnify, and hold harmless Sim Gamepad and its affiliates from any claims, liabilities, damages, losses, or expenses (including attorneys' fees) arising from your use of the Service, your violation of these Terms, your misuse of connected devices or networks, or your violation of any third-party rights.
          </p>
        </div>

        {/* 16. Termination */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <XCircle className="w-5 h-5 text-primary" />
            16. Termination
          </h3>
          <p className="mb-3">
            We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, if:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>You violate these Terms.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>Your use poses security or operational risks to us or others.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-500/50 mt-2 flex-shrink-0"></span>
              <span>Required by law or regulatory authorities.</span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-foreground/50">
            Upon termination, your right to use the Service immediately ceases.
          </p>
        </div>

        {/* 17. Governing Law */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Gavel className="w-5 h-5 text-primary" />
            17. Governing Law
          </h3>
          <p>
            These Terms shall be governed and interpreted in accordance with the laws applicable in the jurisdiction where the Company operates, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.
          </p>
        </div>

        {/* 18. Severability */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-primary" />
            18. Severability
          </h3>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
          </p>
        </div>

        {/* 19. Entire Agreement */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary" />
            19. Entire Agreement
          </h3>
          <p>
            These Terms constitute the complete agreement between you and Sim Gamepad regarding the use of the Service and supersede all prior agreements or understandings.
          </p>
        </div>

        {/* 20. Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            20. Contact Information
          </h3>
          <p className="mb-3">
            For questions, support requests, or legal inquiries, please contact:
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
            <span className="font-bold text-foreground block mb-2">Sim Gamepad Support</span>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="font-semibold text-foreground/70">Email:</span>
                <a href="mailto:support.brancovenn@gmail.com" className="text-primary hover:underline font-medium">support.brancovenn@gmail.com</a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold text-foreground/70">Website:</span>
                <a href="https://www.brancovenn.com" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">https://www.brancovenn.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* 21. Acknowledgment */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-center font-medium text-foreground/70 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            By accessing or using Sim Gamepad, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          </p>
        </div>
      </div>
    </>
  );
});

TermsContent.displayName = "TermsContent";

export default TermsContent;
