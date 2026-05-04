import { Mail, Linkedin } from "lucide-react";
import portrait from "@/assets/rebeca.jpg";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import mtbankHeader from "@/assets/mtbank-presentation.jpeg";

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

const projects = [
  {
    client: "M&T Bank",
    title: "Engaging gig workers with M&T Capabilities",
    desc: "In the U.S. it is projected that by 2028 the population of gig workers will be more than half of the population. How can M&T optimize its services to keep relevant to this population with such specific needs.",
  },
  {
    client: "Gosta Labs",
    title: "North America Expansion, possible pathways",
    desc: "A growing healthcare tech company with footprint in Europe, Asia, and Oceania wants to expand. On this project the regulation, financial viability, and market access.",
  },
  {
    client: "Hult Cup",
    title: "How to engage multiple campus in the summer",
    desc: "With campuses in Boston, London, Dubai, New York and San Francisco. The challenge here was to develop something that would keep students engaged, and showcase Hult as an institution related to sports.",
  },
  {
    client: "Planet Fitness",
    title: "ESG assessment and improvement plan",
    desc: "In a growing services industry, how to provide meaningful value when it comes to ESG improvements. The challenge here was to implement actions that would land frictionless to thousands of franchisees.",
  },
];

const howIDoIt = [
  { n: "01", title: "Listen", desc: "Gather all information possible from key stakeholders, data, and industry scenarios. Interview relevant people, and clarify assumptions." },
  { n: "02", title: "Diagnose", desc: "For each possible issue, a different framework might be adequate, the traditional ones give insight, the new ones give actionable directions." },
  { n: "03", title: "Model", desc: "Build the data models, forecasts and scenarios that turn assumptions into evidence." },
  { n: "04", title: "Validate Solutions", desc: "Test models, share preliminary direction with client, and validate feasibility." },
  { n: "05", title: "Recommend", desc: "Translate findings into a clear, sequenced plan a team can actually execute." },
  { n: "06", title: "Operate", desc: "Engage key stakeholders, delegate activities, and define KPIs to be evaluated. What is not measured is not done." },
];

const Marquee = () => {
  const items = [...marqueeWords, ...marqueeWords];
  return (
    <div className="overflow-hidden border-y border-border/70 bg-paper py-5">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {items.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="display text-3xl md:text-5xl text-ink/80 px-8">{w}</span>
            <span className="display text-3xl md:text-5xl text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
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
            {[["About", "#about"], ["Expertise", "#expertise"], ["How I do it", "#how"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} className="text-sm text-muted-foreground transition-colors hover:text-ink">{l}</a>
            ))}
          </div>
          <a href="#contact" className="rounded-full border border-ink/20 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background">
            Get in touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grain opacity-60" />
        <div className="container relative grid grid-cols-1 items-center gap-12 pb-20 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="h-px w-10 bg-ink/30" />
              <span className="eyebrow text-ink">Business Strategist</span>
            </div>
            <h1 className="display mt-6 text-balance text-[clamp(3rem,8vw,7.5rem)] font-light text-ink">
              Rebeca <em className="font-normal italic text-primary">Batista</em>
            </h1>
            <div className="mt-8 max-w-xl space-y-4 text-lg text-muted-foreground md:text-xl">
              <p>Over a decade of global experience in consumer goods and retail strategy.</p>
              <p>
                I bridge the gap between brand long term goals and rigorous analytical strategy
                to drive scalable results and lasting impact.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-sm shadow-soft">
              <img src={portrait} alt="Portrait of Rebeca Batista" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/40 to-transparent p-4">
                <span className="eyebrow text-background">Strategy · Analytics · Operations</span>
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
          </div>
        </div>

        {/* Recent projects gallery */}
        <div className="mt-16">
          <span className="eyebrow text-muted-foreground">Recent Projects</span>
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
        <div className="container py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="eyebrow text-primary">02 — Expertise</span>
              <h2 className="display mt-6 max-w-3xl text-5xl text-ink md:text-6xl">
                <span className="text-ink">Data-Informed Strategy</span>{" "}
                <span className="text-primary">+</span>{" "}
                <em className="italic text-primary/90">Results-Driven Leadership</em>
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
              Contact on LinkedIn and see more
            </a>
          </div>
        </div>
      </section>

      {/* How I do it */}
      <section id="how" className="container py-20">
        <span className="eyebrow text-primary">03 — How I do it</span>
        <h2 className="display mt-6 max-w-3xl text-5xl text-ink md:text-6xl">
          From <em className="italic text-primary">Consumer Insights</em> to Commercial Growth.
        </h2>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {howIDoIt.map((p) => (
            <li key={p.n} className="grid grid-cols-12 items-baseline gap-6 py-5">
              <span className="display col-span-2 text-lg text-muted-foreground md:col-span-1">{p.n}</span>
              <h3 className="display col-span-10 text-2xl text-ink md:col-span-3 md:text-3xl">{p.title}</h3>
              <p className="col-span-12 text-muted-foreground md:col-span-8">{p.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink text-background">
        <div className="container grid gap-16 py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow text-primary-glow">04 — Contact</span>
            <h2 className="display mt-6 text-balance text-5xl md:text-7xl">
              Let's build something <em className="italic text-primary-glow">that lasts</em>.
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
            </div>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="container flex flex-col items-start justify-between gap-3 py-6 text-xs uppercase tracking-widest text-background/50 md:flex-row md:items-center">
            <span>© {new Date().getFullYear()} Rebeca Batista</span>
            <span>Business Strategist</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
