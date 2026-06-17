import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github } from "lucide-react";
import portrait from "@/assets/rebeca.jpg";

const skills = {
  "Trade & Field Marketing": [
    "Go-to-market strategy for new product launches",
    "National visual-merchandising forecasting",
    "Merchandising material distribution based on commercial data",
    "Campaign data analysis and monthly reporting",
    "Investment planning and budget allocation",
  ],
  "Retail Architecture & Design": [
    "Long-lasting promotional materials (stores, displays, store-in-store)",
    "Component definition by durability, cost, and production time",
    "Brand and visual identity studies, moodboard development",
    "Technical drawings, store layouts, and on-site assessments",
    "Key-visual deployment to point-of-purchase materials",
  ],
  "Tools & Software": [
    "Adobe Creative Suite (Illustrator, Photoshop, InDesign)",
    "Google SketchUp + Vray Renderer",
    "AutoCAD, 3Ds Max",
    "Microsoft Office, TOTVS (ERP)",
  ],
};

const experience = [
  {
    role: "Senior Trade Marketing Analyst",
    company: "Nissin Foods do Brasil",
    period: "02/2021 — Present",
    bullets: [
      "Budget planning, control, and allocation across national visual-merchandising operations.",
      "Go-to-market visual merchandising strategy for new product launches.",
      "Development of new merchandising material and supplier homologation.",
      "Periodic site visits to assess execution and identify regional improvement opportunities.",
      "Onboarding and training of new team members.",
    ],
  },
  {
    role: "Retail Architect",
    company: "Fábrica de Idéias",
    period: "07/2020 — 02/2021",
    bullets: [
      "Created long-lasting promotional materials for pharma, telecom, electronics, and consumer goods.",
      "Brand and visual identity studies, moodboards, and store layouts.",
      "Technical drawings and presentation decks for client meetings.",
    ],
  },
  {
    role: "Retail Architect",
    company: "Exhimia",
    period: "07/2014 — 06/2020",
    bullets: [
      "Grew from the budgeting area into creative coordination, leading the creative pipeline.",
      "Designed displays and fixtures, defined components, and managed third-party production.",
      "Selected, onboarded, and trained new team members.",
    ],
  },
  {
    role: "Design Intern (International)",
    company: "IdX Corporation — Chicago, IL (US)",
    period: "01/2018 — 04/2018",
    bullets: [
      "3-month exchange at a retail-design multinational.",
      "Refit project for a telecommunications brand based in Alaska.",
      "Customer journey analysis and brand identity work in English.",
    ],
  },
  {
    role: "Architecture Intern",
    company: "Evidence Displays",
    period: "03/2013 — 04/2014",
    bullets: [
      "Merchandising material quotation and store renovation footprint adjustments.",
      "Budget and timeline control; final pre-shipping checklists.",
    ],
  },
  {
    role: "Decoration Assistant",
    company: "Revert Realce Imobiliário",
    period: "11/2012 — 02/2013",
    bullets: [
      "Real estate and event services quotations.",
      "Technical visit scheduling and coordination.",
    ],
  },
];

const education = [
  { title: "Neuroscience and Applied Psychology", inst: "Universidade Presbiteriana Mackenzie", note: "Post-graduate · 2019–2020" },
  { title: "Architecture and Urbanism", inst: "Universidade Cruzeiro do Sul", note: "Bachelor · 2012–2016" },
  { title: "Chemistry Technical School", inst: "ETEC Tiquatira", note: "Technical · 2010–2012" },
  { title: "Omnichannel Distribution & Trade Marketing Strategies", inst: "Fundação Getúlio Vargas (FGV)", note: "30h · 2021" },
];

const CreativePortfolio = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-warm text-primary-foreground display text-base font-semibold">R</span>
            <span className="display text-base">Rebeca Batista</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="container grid grid-cols-1 items-center gap-12 pt-14 pb-16 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="h-px w-10 bg-ink/30" />
            <span className="eyebrow text-ink">Creative Portfolio</span>
          </div>
          <h1 className="display mt-6 text-balance text-[clamp(2.5rem,7vw,6rem)] font-light text-ink">
            Trade Marketing, <em className="font-normal italic text-primary">Visual Merchandising</em> & Retail
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            13 years of work experience across Trade and Field Marketing and retail architecture —
            building point-of-purchase fixtures, launching products, and translating brand intent
            into physical experiences.
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden rounded-sm shadow-soft">
            <img src={portrait} alt="Portrait of Rebeca Batista" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border/60 bg-paper">
        <div className="container py-16">
          <span className="eyebrow text-primary">01 — Capabilities</span>
          <h2 className="display mt-6 max-w-3xl text-4xl text-ink md:text-5xl">
            What I <em className="italic text-primary">bring to the shelf</em>.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-3">
            {Object.entries(skills).map(([cat, list]) => (
              <div key={cat} className="bg-background p-8">
                <h3 className="display text-xl text-ink">{cat}</h3>
                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {list.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="container py-20">
        <span className="eyebrow text-primary">02 — Experience</span>
        <h2 className="display mt-6 max-w-3xl text-4xl text-ink md:text-5xl">
          A decade <em className="italic text-primary">on the floor</em>.
        </h2>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {experience.map((e) => (
            <li key={e.role + e.company} className="grid grid-cols-12 gap-6 py-8">
              <div className="col-span-12 md:col-span-4">
                <h3 className="display text-2xl text-ink">{e.role}</h3>
                <p className="mt-1 text-sm text-primary">{e.company}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{e.period}</p>
              </div>
              <ul className="col-span-12 space-y-2 text-muted-foreground md:col-span-8">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Education & Languages */}
      <section className="border-y border-border/60 bg-paper">
        <div className="container grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow text-primary">03 — Education</span>
            <ul className="mt-8 space-y-6">
              {education.map((ed) => (
                <li key={ed.title}>
                  <h3 className="display text-xl text-ink">{ed.title}</h3>
                  <p className="text-sm text-muted-foreground">{ed.inst}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground/80">{ed.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <span className="eyebrow text-primary">04 — Languages</span>
            <ul className="mt-8 space-y-3 text-ink">
              <li className="flex items-baseline justify-between border-b border-border pb-2">
                <span className="display text-lg">Portuguese</span>
                <span className="text-sm text-muted-foreground">Native</span>
              </li>
              <li className="flex items-baseline justify-between border-b border-border pb-2">
                <span className="display text-lg">English</span>
                <span className="text-sm text-muted-foreground">Fluent · TOEFL 98 (C1)</span>
              </li>
              <li className="flex items-baseline justify-between border-b border-border pb-2">
                <span className="display text-lg">Spanish</span>
                <span className="text-sm text-muted-foreground">Intermediate</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-ink text-background">
        <div className="container grid gap-16 py-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow text-primary-glow">Get in touch</span>
            <h2 className="display mt-6 text-balance text-4xl md:text-6xl">
              Let's design <em className="italic text-primary-glow">the next shelf</em>.
            </h2>
          </div>
          <div className="flex items-end lg:col-span-4">
            <div className="flex gap-3">
              <a href="mailto:rebeca.ocb@gmail.com" aria-label="Email" className="grid h-12 w-12 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/rebecarec/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-12 w-12 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/rebecarec" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-12 w-12 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs uppercase tracking-widest text-background/50 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Rebeca Batista</span>
            <span>Creative Portfolio</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreativePortfolio;
