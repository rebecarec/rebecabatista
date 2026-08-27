import { ArrowLeft, Download, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import pdfAsset from "@/assets/portfolio-pdf.asset.json";
import claro from "@/assets/portfolio/claro_7.jpg.asset.json";
import gci from "@/assets/portfolio/gci_shots-10.jpg.asset.json";
import qdb1 from "@/assets/portfolio/qdb-1.jpg.asset.json";
import pontoFrio2 from "@/assets/portfolio/ponto-frio-2.jpg.asset.json";
import pernod6 from "@/assets/portfolio/pernod-6.jpg.asset.json";
import pernod7 from "@/assets/portfolio/pernod-7.jpg.asset.json";
import pernod9v2 from "@/assets/portfolio/pernod-9-v2.jpg.asset.json";
import pernod1 from "@/assets/portfolio/pernod-1.jpg.asset.json";
import risque from "@/assets/portfolio/risque-03.jpg.asset.json";
import opi5 from "@/assets/portfolio/opi-5.jpg.asset.json";
import opi9 from "@/assets/portfolio/opi-9.jpg.asset.json";
import opi2 from "@/assets/portfolio/opi-2.jpg.asset.json";
import colgate1 from "@/assets/portfolio/colgate-1.jpg.asset.json";
import revlon from "@/assets/portfolio/revlon-lee-dufry-2.jpg.asset.json";
import revlon3 from "@/assets/portfolio/revlon-3.jpg.asset.json";
import tramontina from "@/assets/portfolio/tramontina-1.jpg.asset.json";
import { useLang, translations } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type WorkKey = "w01"|"w02"|"w03"|"w04"|"w05"|"w06"|"w07"|"w08"|"w09"|"w10"|"w11"|"w12";
type Work = { n: string; client: string; k: WorkKey; covers: string[] };

const works: Work[] = [
  { n: "01", client: "Claro", k: "w01", covers: [claro.url] },
  { n: "02", client: "GCI — Alaska", k: "w02", covers: [gci.url] },
  { n: "03", client: "REVLON", k: "w03", covers: [revlon.url, revlon3.url] },
  { n: "04", client: "Quem Disse, Berenice?", k: "w04", covers: [qdb1.url] },
  { n: "05", client: "Ponto Frio", k: "w05", covers: [pontoFrio2.url] },
  { n: "06", client: "Pernod Ricard", k: "w06", covers: [pernod9v2.url] },
  { n: "07", client: "Pernod Ricard", k: "w07", covers: [pernod1.url] },
  { n: "08", client: "Risqué", k: "w08", covers: [risque.url] },
  { n: "09", client: "OPI", k: "w09", covers: [opi5.url, opi9.url, opi2.url] },
  { n: "10", client: "Colgate", k: "w10", covers: [colgate1.url] },
  { n: "11", client: "Pernod Ricard", k: "w11", covers: [pernod6.url, pernod7.url] },
  { n: "12", client: "Tramontina", k: "w12", covers: [tramontina.url] },
];

const CreativePortfolio = () => {
  const { t } = useLang();
  const tk = (key: string) => t(key as keyof typeof translations);
  return (
    <main className="dark-portfolio min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-warm text-primary-foreground display text-base font-semibold">R</span>
            <span className="display text-base">Rebeca Batista</span>
          </Link>
          <div className="hidden gap-10 md:flex">
            <Link to="/#about" className="text-sm text-muted-foreground transition-colors hover:text-ink">{t("nav_about")}</Link>
            <Link to="/#expertise" className="text-sm text-muted-foreground transition-colors hover:text-ink">{t("nav_expertise")}</Link>
            <Link to="/creative" className="text-sm text-ink transition-colors">{t("nav_creative")}</Link>
            <Link to="/#how" className="text-sm text-muted-foreground transition-colors hover:text-ink">{t("nav_how")}</Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="nav" />
            <Link to="/#contact" className="rounded-full border border-ink/20 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background">
              {t("nav_contact")}
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 grain opacity-60" />
        <div className="container relative pb-16 pt-6 md:pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> {t("cp_back")}
          </Link>
          <div className="mt-3 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="h-px w-10 bg-ink/30" />
                <span className="eyebrow text-ink">{t("cp_eyebrow")}</span>
              </div>
              <h1 className="display mt-6 text-balance text-[clamp(2.75rem,7vw,6rem)] font-light text-ink">
                {t("cp_title_1")} <em className="font-normal italic text-primary">{t("cp_title_2")}</em>
              </h1>
              <div className="mt-6 max-w-xl space-y-4 text-lg text-muted-foreground md:text-xl">
                <p>{t("cp_p1")}</p>
                <p>{t("cp_p2")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="container">
        <div className="divide-y divide-primary/40">
          {works.map((w, i) => (
            <article
              key={w.n}
              className={`grid min-h-[80vh] gap-10 py-16 lg:grid-cols-12 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                {w.covers.length === 3 ? (
                  <div className="grid grid-cols-3 gap-4">
                    <img
                      src={w.covers[0]}
                      alt={`${w.client} — ${tk(w.k + "_title")}`}
                      loading="lazy"
                      className="col-span-2 row-span-2 h-full max-h-[60vh] w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <img
                      src={w.covers[1]}
                      alt={`${w.client} — ${tk(w.k + "_title")}`}
                      loading="lazy"
                      className="h-full max-h-[29vh] w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <img
                      src={w.covers[2]}
                      alt={`${w.client} — ${tk(w.k + "_title")}`}
                      loading="lazy"
                      className="h-full max-h-[29vh] w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div className={`grid gap-4 ${w.covers.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                    {w.covers.map((src, idx) => (
                      <img
                        key={idx}
                        src={src}
                        alt={`${w.client} — ${tk(w.k + "_title")}`}
                        loading="lazy"
                        className="h-auto max-h-[60vh] w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-baseline gap-4">
                  <span className="display text-2xl text-muted-foreground">{w.n}</span>
                  <span className="eyebrow text-primary">{tk(w.k + "_tag")}</span>
                </div>
                <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
                  {w.client}
                </h2>
                <h3 className="display mt-1 text-xl italic text-primary md:text-2xl">
                  {tk(w.k + "_title")}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {tk(w.k + "_desc")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>



      {/* PDF Download */}
      <section className="border-t border-border/60 py-16">
        <div className="container flex flex-col items-center justify-center gap-6 text-center">
          <h3 className="display text-2xl text-ink md:text-3xl">
            {t("cp_want_more")}
          </h3>
          <p className="max-w-md text-muted-foreground">
            {t("cp_pdf_desc")}
          </p>
          <a
            href={pdfAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary"
          >
            <Download className="h-4 w-4" />
            {t("cp_pdf_btn")}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink text-background">
        <div className="container grid gap-16 py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-start justify-between gap-6">
              <span className="eyebrow text-primary-glow">{t("contact_eyebrow_short")}</span>
              <LanguageSwitcher variant="contact" />
            </div>
            <h2 className="display mt-6 text-balance text-5xl md:text-7xl">
              {t("contact_title_1")} <em className="italic text-primary-glow">{t("contact_title_2")}</em>.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <div className="flex gap-3">
              <a
                href="mailto:rebeca.ocb@gmail.com"
                aria-label="Email Rebeca"
                className="grid h-12 w-12 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rebecarec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/rebecarec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs uppercase tracking-widest text-background/50 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Rebeca Batista</span>
            <span>{t("footer_role")}</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreativePortfolio;
