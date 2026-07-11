import { useLang } from "@/contexts/LanguageContext";

type Variant = "nav" | "contact";

const FlagUS = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className} aria-hidden>
    <rect width="60" height="40" fill="#fff" />
    {[...Array(7)].map((_, i) => (
      <rect key={i} y={i * (40 / 13) * 2 + (40 / 13)} width="60" height={40 / 13} fill="#B22234" />
    ))}
    {[...Array(7)].map((_, i) => (
      <rect key={"t" + i} y={i * (40 / 13) * 2} width="60" height={40 / 13} fill="#B22234" />
    ))}
    <rect width="24" height={(40 / 13) * 7} fill="#3C3B6E" />
  </svg>
);

const FlagBR = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 40" className={className} aria-hidden>
    <rect width="60" height="40" fill="#009C3B" />
    <polygon points="30,4 56,20 30,36 4,20" fill="#FFDF00" />
    <circle cx="30" cy="20" r="8" fill="#002776" />
    <path d="M22,20 Q30,15 38,20" stroke="#fff" strokeWidth="1.2" fill="none" />
  </svg>
);

export const LanguageSwitcher = ({ variant = "nav" }: { variant?: Variant }) => {
  const { lang, setLang } = useLang();
  const isNav = variant === "nav";

  const base = "inline-flex items-center gap-1.5 rounded-sm p-0.5 transition-all";
  const active = "ring-2 ring-primary shadow-md opacity-100";
  const inactive = "opacity-40 hover:opacity-80";

  return (
    <div className={`flex items-center gap-2 ${isNav ? "" : ""}`}>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-label="English"
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? active : inactive}`}
      >
        <FlagUS className={isNav ? "h-4 w-6" : "h-6 w-9"} />
      </button>
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-label="Português"
        aria-pressed={lang === "pt"}
        className={`${base} ${lang === "pt" ? active : inactive}`}
      >
        <FlagBR className={isNav ? "h-4 w-6" : "h-6 w-9"} />
      </button>
      {isNav && (
        <span className="ml-1 text-xs font-semibold tracking-widest text-ink">
          {lang.toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default LanguageSwitcher;
