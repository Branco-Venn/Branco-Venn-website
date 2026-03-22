import { Languages } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "zh-CN", name: "Chinese (Mandarin)" },
  { code: "hi", name: "Hindi" },
  { code: "ar", name: "Arabic" },
  { code: "pt", name: "Portuguese (Brazilian)" },
  { code: "fr", name: "French" },
  { code: "ja", name: "Japanese" },
  { code: "de", name: "German" },
  { code: "id", name: "Indonesian" },
  { code: "ko", name: "Korean" },
  { code: "tr", name: "Turkish" },
  { code: "ru", name: "Russian" },
  { code: "it", name: "Italian" },
];

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState("en");

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    
    // Connect to Google Translate's hidden iframe combo element to translate the page natively
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event('change'));
    } else {
      // Fallback if script is slow/delayed: setup cookie and reload
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      document.cookie = `googtrans=/en/${langCode}; domain=.${window.location.hostname}; path=/`;
      window.location.reload();
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="p-2.5 rounded-full bg-background/50 backdrop-blur-sm border border-foreground/10 shadow-[0_0_15px_hsl(var(--foreground)/0.15)] hover:shadow-[0_0_25px_hsl(var(--foreground)/0.3)] transition-all duration-300 outline-none flex items-center justify-center text-foreground/80 hover:text-foreground hover:scale-105 active:scale-95"
          aria-label="Select Language"
        >
          <Languages size={18} strokeWidth={1.5} />
        </button>
      </DropdownMenuTrigger>
      
      {/* Scrollable dropdown for many language options */}
      <DropdownMenuContent 
        align="end" 
        className="w-[200px] max-h-[300px] overflow-y-auto bg-background/90 backdrop-blur-2xl border border-white/10 rounded-xl shadow-2xl p-1 custom-scrollbar"
      >
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`cursor-pointer rounded-lg hover:bg-white/5 focus:bg-white/5 transition-colors flex items-center justify-between text-sm py-2 px-3 tracking-wide outline-none ${
              currentLang === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-foreground/80'
            }`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span>{lang.name}</span>
            <span className="text-[10px] uppercase opacity-50 font-mono tracking-widest">{lang.code}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
