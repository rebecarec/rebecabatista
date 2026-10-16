import { Mail, Linkedin, Github, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import NavDropdown from "@/components/NavDropdown";
import headshot from "@/assets/home-headshot.jpg.asset.json";
import presentation from "@/assets/home-presenting.jpg.asset.json";
import outdoors from "@/assets/home-outdoors.jpg.asset.json";
import podium from "@/assets/home-podium.jpg.asset.json";
import team from "@/assets/home-team.jpg.asset.json";
import storyVideo from "@/assets/home-story.mp4.asset.json";
import { useLang } from "@/contexts/LanguageContext";


const ribbonWords = [
  "MECE Framework", "BCG Growth Share Matrix", "Platform Canvas Framework", "Power BI",
  "Tableau", "Long-term Value Creation", "Python", "SQL", "ERP Systems", "Smartsheet",
  "Microsoft Office", "Google Sheets", "Adobe Creative Cloud", "Autocad", "Sketchup",
  "Canva", "Waterfall & Agile Project Management", "Accessible Market Analysis",
  "Risk Assessment", "Customer Behavior", "Neuroscience", "Leadership",
  "Operations Management", "Business Intelligence", "Key-Account Development Strategy",
  "Retail Strategy", "Cash-Flow Management", "Budgeting and Forecasting",
  "Implementation Roadmap", "Strategy Development", "5 Forces Analysis", "PESTEL Analysis",
];

const Ribbon = () => {
  const items = [...ribbonWords, ...ribbonWords];
  return (
    <div className="overflow-hidden bg-gradient-sun py-3.5">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center text-base text-white md:text-lg">
            <span className="px-3 opacity-80">✦</span>
            <span className="font-light">{w}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const BrandMark = () => (
  <svg aria-hidden="true" viewBox="0 0 473.26 491.86" className="h-5 w-5 text-primary">
    <path
      d="M242.83,1V63m0,328.64v99.21m-155-248H1m471.26,0h-37.2M403,403l-17.54-17.54M408.12,79.52,373.05,114.6M67.26,418.4l70.16-70.16M72.4,74.38,125,127"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32.8"
    />
  </svg>
);

const Index = () => {
  const { t, lang, setLang } = useLang();

  const projects = [
    { client: "M&T Bank", sector: t("sector_finance"), title: t("proj_mt_title"), desc: t("proj_mt_desc") },
    { client: "Gosta Labs", sector: t("sector_health"), title: t("proj_gosta_title"), desc: t("proj_gosta_desc") },
    { client: "Hult Cup", sector: t("sector_tech"), title: t("proj_hult_title"), desc: t("proj_hult_desc") },
    { client: "Autodesk", sector: t("sector_tech"), title: t("proj_autodesk_title"), desc: t("proj_autodesk_desc") },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <nav className="container flex h-14 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <BrandMark />
            <span className="display text-lg text-primary">Rebeca Batista</span>
          </a>
          <div className="flex items-center gap-2">
            <NavDropdown buttonClassName="grid h-8 w-9 place-items-center rounded-md bg-secondary text-primary transition-colors hover:bg-border/60" />
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              aria-label={t("nav_translate")}
              className="flex h-8 items-center gap-1.5 rounded-md bg-secondary px-3 text-primary transition-colors hover:bg-border/60"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm font-medium">{t("nav_translate")}</span>
            </button>
            <a
              href="#contact"
              className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("nav_connect")}
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="container grid grid-cols-1 items-center gap-10 py-12 lg:grid-cols-2 lg:gap-14 lg:py-16">
        {/* Photo collage */}
        <div className="group relative mx-auto h-[420px] w-full max-w-[560px] md:h-[520px]">
          <div className="absolute right-0 top-0 h-[52%] w-[52%] rotate-[2deg] overflow-hidden rounded-lg shadow-soft transition-all duration-500 ease-out hover:z-20 hover:-translate-y-1.5 hover:scale-[1.04] motion-reduce:transition-none">
            <img
              src={headshot.url}
              alt="Portrait of Rebeca Batista"
              className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:blur-[3px] group-hover:opacity-60 hover:!scale-100 hover:!blur-none hover:!opacity-100 motion-reduce:transition-none"
            />
          </div>
          <div className="absolute left-0 top-[16%] h-[34%] w-[46%] rotate-[-3deg] overflow-hidden rounded-lg shadow-soft transition-all duration-500 ease-out hover:z-20 hover:-translate-y-1.5 hover:scale-[1.04] motion-reduce:transition-none">
            <img
              src={outdoors.url}
              alt="Rebeca with colleagues outdoors"
              className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:blur-[3px] group-hover:opacity-60 hover:!scale-100 hover:!blur-none hover:!opacity-100 motion-reduce:transition-none"
            />
          </div>
          <div className="absolute bottom-0 left-0 h-[38%] w-[32%] rotate-[-4deg] overflow-hidden rounded-lg shadow-soft transition-all duration-500 ease-out hover:z-20 hover:-translate-y-1.5 hover:scale-[1.04] motion-reduce:transition-none">
            <img
              src={podium.url}
              alt="Rebeca presenting at a podium"
              className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:blur-[3px] group-hover:opacity-60 hover:!scale-100 hover:!blur-none hover:!opacity-100 motion-reduce:transition-none"
            />
          </div>
          <div className="absolute bottom-[2%] left-[30%] h-[40%] w-[58%] rotate-[3deg] overflow-hidden rounded-lg shadow-soft transition-all duration-500 ease-out hover:z-20 hover:-translate-y-1.5 hover:scale-[1.04] motion-reduce:transition-none">
            <img
              src={team.url}
              alt="Rebeca with her team"
              className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:blur-[3px] group-hover:opacity-60 hover:!scale-100 hover:!blur-none hover:!opacity-100 motion-reduce:transition-none"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="max-w-xl text-justify text-[15px] leading-relaxed md:text-base">
            <em className="font-medium">{t("home_hello")}</em>
            {t("home_intro")}
            <em>{t("home_intro_em")}</em>.
          </p>
          <blockquote className="mt-12">
            <p className="display text-balance text-3xl leading-tight text-primary md:text-[2.6rem]">
              “{t("home_quote")}”
            </p>
            <footer className="mt-2 text-right text-sm text-primary">{t("home_quote_author")}</footer>
          </blockquote>
        </div>
      </section>

      <Ribbon />

      {/* Recent projects */}
      <section id="projects" className="container py-12">
        <h2 className="display text-xl text-primary">{t("home_recent")}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.client} className="rounded-lg border border-border p-6 transition-colors hover:border-accent">
              <span className="text-sm">{p.client} [{p.sector}]</span>
              <h3 className="display mt-2 text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-3 text-justify text-sm leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/projects"
            className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("home_more_projects")}
          </Link>
        </div>
      </section>

      {/* My story */}
      <section id="story" className="bg-paper">
        <div className="container grid gap-10 py-14 lg:grid-cols-[1fr_340px]">
          <div>
            <h2 className="display text-xl text-primary">{t("story_title")}</h2>
            <div className="mt-5 space-y-4 text-justify text-[15px] leading-relaxed">
              <p>{t("story_p1")}</p>
              <p>{t("story_p2")}<em>“{t("story_p2_em")}”</em>.</p>
              <div>
                <p>{t("story_l1")}</p>
                <p>{t("story_l2")}</p>
                <p>{t("story_l3")}</p>
                <p>{t("story_l4")}</p>
              </div>
              <p>{t("story_p3")}</p>
              <p>
                {t("story_p4a")}
                <strong className="font-semibold text-primary">{t("story_p4b")}</strong>
                {t("story_p4c")}
              </p>
            </div>
          </div>
          <div className="justify-self-center lg:justify-self-end">
            <video
              src={storyVideo.url}
              poster={presentation.url}
              aria-label="Rebeca presenting research findings"
              autoPlay
              muted
              loop
              playsInline
              className="h-[495px] w-[300px] rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-16">
        <span className="text-base">{t("contact_label")}</span>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-8">
          <h2 className="display text-4xl text-primary md:text-5xl">{t("contact_headline")}</h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/rebecarec/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rebecarec"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:rebeca.ocb@gmail.com"
              aria-label="Email Rebeca"
              className="grid h-14 w-14 place-items-center rounded-full border border-primary/40 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container py-4 text-xs">
          Rebeca Batista {new Date().getFullYear()} ©
        </div>
      </footer>
    </main>
  );
};

export default Index;
