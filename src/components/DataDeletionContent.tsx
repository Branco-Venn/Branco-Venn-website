import { Shield, Mail, User, Clock, AlertCircle, CheckCircle, Database, Info } from "lucide-react";
import { memo } from "react";

const DataDeletionContent = memo(() => {
  return (
    <>
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
    </>
  );
});

DataDeletionContent.displayName = "DataDeletionContent";

export default DataDeletionContent;
