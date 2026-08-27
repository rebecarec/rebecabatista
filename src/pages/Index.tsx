import { Mail, Linkedin, Github } from "lucide-react";
import portrait from "@/assets/rebeca-square.png.asset.json";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import mtbankHeader from "@/assets/mtbank-presentation.jpeg";
import { useLang } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const marqueeWords = [
  "Strategy Development", "Implementation Roadmap", "Forecasting", "Budgeting",
  "Long-term Value Creation", "Strategic Recommendations", "Go-to-Market Strategy",
  "Cash-flow Management", "Retail Strategy", "Key-Account Development Strategy",
  "Business Intelligence", "Operations Management", "Leadership", "Project Implementation",
  "Customer Behavior", "Risk Assessment", "Accessible Market Analysis",
  "Financial Ratios Analysis", "Statistical Process Control", "Hypothesis Testing",
  "PDF & CDF's", "Waterfall & Agile PM Methodology", "MECE Framework",
  "BCG Growth Share Matrix", "Platform Canvas Framework", "Power BI", "Tableau",
  "Python", "SQL", "ERP Systems", "Smartsheet", "Microsoft Office",
  "Google Sheets", "Adobe Creative Cloud", "Autocad", "Sketchup", "Canva",
];

const partnerships = [
  { src: project1, label: "M&T Bank" },
  { src: project2, label: "Gosta Labs" },
  { src: project3, label: "Hult Cup" },
  { src: project4, label: "OPPO" },
];

const Marquee = () => {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="overflow-hidden border-y border-border/70 bg-gradient-sun py-5">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="display text-3xl md:text-5xl text-ink/80 px-8">{w}</span>
            <span className="display text-3xl md:text-5xl text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const { t } = useLang();

  const projects = [
    { client: "M&T Bank", title: t("proj_mt_title"), desc: t("proj_mt_desc") },
    { client: "Gosta Labs", title: t("proj_gosta_title"), desc: t("proj_gosta_desc") },
    { client: "Hult Cup", title: t("proj_hult_title"), desc: t("proj_hult_desc") },
    { client: "Planet Fitness", title: t("proj_pf_title"), desc: t("proj_pf_desc") },
  ];

  const howIDoIt = [
    { n: "01", title: t("step_listen"), desc: t("step_listen_d") },
    { n: "02", title: t("step_diag"), desc: t("step_diag_d") },
    { n: "03", title: t("step_model"), desc: t("step_model_d") },
    { n: "04", title: t("step_val"), desc: t("step_val_d") },
    { n: "05", title: t("step_rec"), desc: t("step_rec_d") },
    { n: "06", title: t("step_op"), desc: t("step_op_d") },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-warm text-primary-foreground display text-base font-semibold">R</span>
            <span className="display text-base">Rebeca Batista</span>
          </a>
          <div className="hidden gap-10 md:flex">
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-ink">{t("nav_about")}</a>
            <a href="#expertise" className="text-sm text-muted-foreground transition-colors hover:text-ink">{t("nav_expertise")}</a>
            <a href="/creative" className="text-sm text-muted-foreground transition-colors hover:text-ink">{t("nav_creative")}</a>
            <a href="#how" className="text-sm text-muted-foreground transition-colors hover:text-ink">{t("nav_how")}</a>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher variant="nav" />
            <a href="#contact" className="rounded-full border border-ink/20 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background">
              {t("nav_contact")}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grain opacity-60" />
        <div className="container relative grid grid-cols-1 items-center gap-12 py-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-10 bg-accent" />
              <span className="eyebrow text-ink">{t("hero_role")}</span>
            </div>
            <h1 className="display mt-6 text-balance text-[clamp(3rem,7vw,6.5rem)] font-light text-ink">
              Rebeca <em className="font-normal italic text-accent">Batista</em>
            </h1>
            <div className="mt-8 max-w-xl space-y-4 text-lg text-muted-foreground md:text-xl">
              <p>{t("hero_p1")}</p>
              <p>{t("hero_p2")}</p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <span className="tape left-6 -top-3 z-10" />
            <div className="relative aspect-square w-full overflow-hidden rounded-sm shadow-soft ring-1 ring-accent/40">
              <img
                src={portrait.url}
                alt="Portrait of Rebeca Batista"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent p-5">
                <span className="eyebrow text-background">{t("hero_caption")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* About */}
      <section id="about" className="container py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-accent">{t("about_eyebrow")}</span>
            <h2 className="display mt-6 text-5xl text-ink md:text-6xl">
              {t("about_title_1")} <em className="italic text-primary">{t("about_title_2")}</em>.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>{t("about_p1")}</p>
            <p>{t("about_p2")}</p>
          </div>
        </div>

        {/* Recent projects gallery */}
        <div className="mt-16">
          <span className="eyebrow text-muted-foreground">{t("recent_projects")}</span>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {partnerships.map((p, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-paper shadow-soft"
              >
                <img
                  src={p.src}
                  alt={p.label}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/40" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-background">{p.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="border-y border-border/60 bg-paper">
        <div className="container pt-24 pb-12">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow text-primary">{t("expertise_eyebrow")}</span>
              <h2 className="display mt-6 max-w-3xl text-5xl text-ink md:text-6xl">
                <span className="text-ink">{t("expertise_title_1")}</span>{" "}
                <span className="text-primary">+</span>{" "}
                <em className="italic text-primary/90">{t("expertise_title_2")}</em>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-soft">
                <img src={mtbankHeader} alt="Rebeca presenting at M&T Bank" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.client} className="group relative bg-background transition-colors hover:bg-cream">
                <div className="p-8">
                  <span className="eyebrow text-primary">{p.client}</span>
                  <h3 className="display mt-4 text-2xl text-ink md:text-3xl">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://www.linkedin.com/in/rebecarec/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary"
            >
              <Linkedin className="h-4 w-4" />
              {t("see_more_linkedin")}
            </a>
          </div>
        </div>
      </section>

      {/* How I do it */}
      <section id="how" className="container py-20">
        <span className="eyebrow text-accent">{t("how_eyebrow")}</span>
        <h2 className="display mt-6 max-w-3xl text-5xl text-ink md:text-6xl">
          {t("how_title_1")} <em className="italic text-primary">{t("how_title_2")}</em> {t("how_title_3")}
        </h2>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {howIDoIt.map((p) => (
            <li key={p.n} className="grid grid-cols-12 items-center gap-6 py-5">
              <span className="display col-span-2 text-lg text-muted-foreground md:col-span-1">{p.n}</span>
              <h3 className="display col-span-10 text-2xl text-ink md:col-span-3 md:text-3xl">{p.title}</h3>
              <p className="col-span-12 text-muted-foreground md:col-span-8">{p.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-sun text-ink">
        <div className="container grid gap-16 py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-start justify-between gap-6">
              <span className="eyebrow text-ink/70">{t("contact_eyebrow")}</span>
              <LanguageSwitcher variant="contact" />
            </div>
            <h2 className="display mt-6 text-balance text-5xl md:text-7xl">
              {t("contact_title_1")} <em className="italic text-primary">{t("contact_title_2")}</em>.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <div className="flex gap-3">
              <a
                href="mailto:rebeca.ocb@gmail.com"
                aria-label="Email Rebeca"
                className="grid h-12 w-12 place-items-center rounded-full border border-ink/30 transition-colors hover:bg-ink hover:text-background"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rebecarec/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-12 w-12 place-items-center rounded-full border border-ink/30 transition-colors hover:bg-ink hover:text-background"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/rebecarec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-12 w-12 place-items-center rounded-full border border-ink/30 transition-colors hover:bg-ink hover:text-background"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-ink/10">
          <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs uppercase tracking-widest text-ink/50 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Rebeca Batista</span>
            <span>{t("footer_role")}</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
