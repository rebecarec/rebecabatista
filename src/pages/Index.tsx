import { ArrowUpRight, Mail, Linkedin, MapPin } from "lucide-react";
import portrait from "@/assets/rebeca.jpg";

const expertise = [
  { title: "Retail Strategy", desc: "Long-term commercial planning across regions and channels." },
  { title: "Trade Marketing", desc: "Activation programs that move share and lift category." },
  { title: "Data Analytics", desc: "Translating dense datasets into decisions that compound." },
  { title: "Business Intelligence", desc: "Models, dashboards and the operating cadence around them." },
];

const experience = [
  { years: "10+", label: "Years in FMCG & retail" },
  { years: "3", label: "Continents of market exposure" },
  { years: "MBA", label: "Candidate, Data Analytics" },
];

const work = [
  { tag: "Strategy", title: "Channel Architecture for Global FMCG", desc: "Redesigned the route-to-market across modern and traditional trade." },
  { tag: "Analytics", title: "Demand Sensing Model", desc: "Built a forecasting framework that cut over-stock by double digits." },
  { tag: "Operations", title: "Trade Investment Optimization", desc: "Reallocated promo spend toward elasticity-positive SKUs." },
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-border/70 bg-paper py-5">
    <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
      {Array.from({ length: 2 }).map((_, i) => (
        <div key={i} className="flex items-center gap-16">
          {["Retail Strategy", "Trade Marketing", "Business Intelligence", "FMCG", "Data Analytics", "Consumer Goods", "Go-to-Market"].map((w) => (
            <span key={w} className="display text-3xl md:text-5xl text-ink/80">
              {w} <span className="text-primary">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-warm text-primary-foreground display text-lg font-semibold">R</span>
            <span className="display text-lg">Rebeca Batista</span>
          </a>
          <div className="hidden gap-10 md:flex">
            {[["About", "#about"], ["Expertise", "#expertise"], ["Work", "#work"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} className="text-sm text-muted-foreground transition-colors hover:text-ink">{l}</a>
            ))}
          </div>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background">
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grain opacity-60" />
        <div className="container relative grid grid-cols-1 gap-12 pb-24 pt-20 md:pt-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink">Business Strategist</span>
            </div>
            <h1 className="display mt-8 text-balance text-[clamp(3.25rem,9vw,8.5rem)] font-light text-ink">
              Rebeca <em className="font-normal italic text-primary">Batista</em>
            </h1>
            <p className="mt-8 max-w-xl text-balance text-lg text-muted-foreground md:text-xl">
              A decade of global experience in consumer goods and retail strategy — bridging
              long-term brand vision with the analytical rigor that drives lasting impact.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary">
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#about" className="text-sm font-medium text-ink underline decoration-primary decoration-2 underline-offset-8 hover:decoration-ink">
                About me
              </a>
            </div>
            <div className="mt-14 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              São Paulo, BR · currently in Boston, MA
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm shadow-soft">
              <img src={portrait} alt="Portrait of Rebeca Batista" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/40 to-transparent p-5">
                <span className="eyebrow text-background">Strategy · Analytics · Operations</span>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 hidden rotate-[-6deg] rounded-full bg-primary px-4 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground shadow-glow md:block">
              Available for projects
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* About */}
      <section id="about" className="container py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="eyebrow text-primary">01 — About</span>
            <h2 className="display mt-6 text-5xl text-ink md:text-6xl">
              Strategy, made <em className="italic text-primary">measurable</em>.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>
              With over a decade of experience developing retail strategy and trade marketing for global
              consumer brands, I bridge the gap between high-level business goals and actionable data
              insights. Currently an MBA candidate specializing in Data Analytics, I focus on transforming
              complex datasets into clear insights that power growth.
            </p>
            <p>
              My professional background is rooted in the fast-moving consumer goods (FMCG) and technology
              sectors, where I have led cross-functional teams to optimize market presence and consumer
              engagement. Today, I combine that industry knowledge with advanced proficiency in Business
              Intelligence tools — building robust strategies, data models, and operations that generate profit.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-border/70 pt-8">
              {experience.map((e) => (
                <div key={e.label}>
                  <div className="display text-4xl text-ink">{e.years}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{e.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="border-y border-border/60 bg-paper">
        <div className="container py-28">
          <div className="flex items-end justify-between gap-8">
            <div>
              <span className="eyebrow text-primary">02 — Expertise</span>
              <h2 className="display mt-6 max-w-3xl text-5xl text-ink md:text-6xl">
                Where commercial intuition meets analytical rigor.
              </h2>
            </div>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            {expertise.map((item, i) => (
              <div key={item.title} className="group relative bg-background p-10 transition-colors hover:bg-cream">
                <div className="flex items-start justify-between">
                  <span className="display text-sm text-primary">0{i + 1}</span>
                  <ArrowUpRight className="h-5 w-5 text-ink/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <h3 className="display mt-12 text-3xl text-ink md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container py-28">
        <span className="eyebrow text-primary">03 — Selected work</span>
        <h2 className="display mt-6 max-w-3xl text-5xl text-ink md:text-6xl">
          Projects with <em className="italic text-primary">compounding</em> outcomes.
        </h2>
        <ul className="mt-16 divide-y divide-border border-y border-border">
          {work.map((p, i) => (
            <li key={p.title} className="group">
              <a href="#contact" className="grid grid-cols-12 items-center gap-6 py-8 transition-colors hover:bg-paper">
                <span className="display col-span-2 text-lg text-muted-foreground md:col-span-1">0{i + 1}</span>
                <span className="col-span-3 text-xs uppercase tracking-widest text-primary md:col-span-2">{p.tag}</span>
                <h3 className="display col-span-7 text-2xl text-ink md:col-span-5 md:text-3xl">{p.title}</h3>
                <p className="col-span-12 hidden text-muted-foreground md:col-span-3 md:block">{p.desc}</p>
                <ArrowUpRight className="col-span-12 h-6 w-6 justify-self-end text-ink/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:col-span-1" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink text-background">
        <div className="container grid gap-16 py-28 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow text-primary-glow">04 — Contact</span>
            <h2 className="display mt-6 text-balance text-5xl md:text-7xl">
              Let's build something <em className="italic text-primary-glow">that lasts</em>.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-background/70">
              Open to strategy engagements, advisory work and full-time roles where data-led commercial thinking
              creates the difference.
            </p>
            <a
              href="mailto:rebeca.ocb@gmail.com"
              className="mt-10 inline-flex items-center gap-3 border-b border-background/40 pb-2 text-2xl transition-colors hover:border-primary-glow hover:text-primary-glow md:text-4xl"
            >
              rebeca.ocb@gmail.com
              <ArrowUpRight className="h-6 w-6" />
            </a>
          </div>
          <div className="space-y-8 lg:col-span-4 lg:col-start-9">
            <div>
              <div className="eyebrow text-background/50">Based in</div>
              <div className="mt-2 text-lg">Boston, Massachusetts</div>
            </div>
            <div>
              <div className="eyebrow text-background/50">Originally from</div>
              <div className="mt-2 text-lg">São Paulo, Brazil</div>
            </div>
            <div className="flex gap-3 pt-4">
              <a href="mailto:rebeca.ocb@gmail.com" className="grid h-11 w-11 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="grid h-11 w-11 place-items-center rounded-full border border-background/30 transition-colors hover:bg-primary hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="container flex flex-col items-start justify-between gap-3 py-8 text-xs uppercase tracking-widest text-background/50 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Rebeca Batista</span>
            <span>Business Strategist · Boston / São Paulo</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
