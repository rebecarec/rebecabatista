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

type Work = {
  n: string;
  client: string;
  title: string;
  desc: string;
  covers: string[];
  tag?: string;
};

const works: Work[] = [
  {
    n: "01",
    client: "Claro",
    title: "Morumbi Mall Store",
    covers: [claro.url],
    tag: "Retail Concept · 2016",
    desc: "A new retail concept launched at the Morumbi Shopping store. Tall counters and mobile fixtures support quick interactions while fixed table areas serve longer visits. After a successful pilot, the concept rolled out across Latin America.",
  },
  {
    n: "02",
    client: "GCI — Alaska",
    title: "Store Redesign Project",
    covers: [gci.url],
    tag: "International · Work Exchange",
    desc: "Developed during a work exchange in the United States. The concept reflects Alaska's unique culture and works within local sourcing constraints — many store locations are remote, so the design relies primarily on locally available materials.",
  },
  {
    n: "03",
    client: "REVLON",
    title: "Dufry Aisle and Department Stores",
    covers: [revlon.url, revlon3.url],
    tag: "BEAUTY ZONE",
    desc: "An aisle concept for Dufry travel retail and department stores, hosting Revlon with a coherent visual language that lets the brand keep its own personality across formats.",
  },
  {
    n: "04",
    client: "Quem Disse, Berenice?",
    title: "Pharma Wall Fixture",
    covers: [qdb1.url],
    tag: "Award-winning",
    desc: "The brand's first wall-mounted display designed specifically for the pharmacy channel. Modular niches and a gravity-feed tray system. Winner of POPAI 2016 (best permanent display, pharmacy/makeup) and EuroShop 2017 (best semi-permanent furniture, beauty & cosmetics).",
  },
  {
    n: "05",
    client: "Ponto Frio",
    title: "Game Zone — Ponto Frio",
    covers: [pontoFrio2.url],
    tag: "Category Experience",
    desc: "An immersive gaming zone for Ponto Frio stores. All counters are enclosed and any products outside display cases are kept secure — balancing playful experience with loss-prevention requirements.",
  },
  {
    n: "06",
    client: "Pernod Ricard",
    title: "Shelf Adaptive Display",
    covers: [pernod9v2.url],
    tag: "Modular Display",
    desc: "An adaptive shelf system designed to flex across SKUs and store formats, keeping the Absolut visual identity consistent while making fast in-store updates possible.",
  },
  {
    n: "07",
    client: "Pernod Ricard",
    title: "Interactive Zones — #InstaBar",
    covers: [pernod1.url],
    tag: "Activation · Social",
    desc: "On-premise activation zones with a social mechanic: photograph a code or scan the QR to redeem a prize. Built to drive engagement around the #Absolut and #SuccessIsABlend campaigns.",
  },
  {
    n: "08",
    client: "Risqué",
    title: "Nail Experience",
    covers: [risque.url],
    tag: "Beauty · Experiential",
    desc: "An immersive in-store nail experience for Risqué, designed to invite consumers to discover the range and test products in a guided sensorial environment.",
  },
  {
    n: "09",
    client: "OPI",
    title: "POSM Fixtures",
    covers: [opi5.url, opi9.url, opi2.url],
    tag: "Point-of-Sale",
    desc: "A family of point-of-sale fixtures for OPI, built to maintain a premium professional-salon feel inside the mass retail environment.",
  },
  {
    n: "10",
    client: "Colgate",
    title: "Wholesale Fixture",
    covers: [colgate1.url],
    tag: "Wholesale Channel",
    desc: "A fixture system built for the wholesale channel — high product density, fast restock, and a clear brand block visible across large warehouse aisles.",
  },
  {
    n: "11",
    client: "Pernod Ricard",
    title: "Interactive Totem",
    covers: [pernod6.url, pernod7.url],
    tag: "Retail · Interaction",
    desc: "A point of interaction between brand and consumer. When a bottle is removed the consumer is directed to personalized content — engaging shoppers, providing analytics about the display (pick-ups, hottest zones) and supporting product launches.",
  },
  {
    n: "12",
    client: "Tramontina",
    title: "Tramontina Aisle",
    covers: [tramontina.url],
    tag: "Category Management",
    desc: "A dedicated Tramontina aisle: kitchen, tea & coffee and tabletop categories organised to guide the shopper from inspiration to purchase.",
  }
];

const CreativePortfolio = () => {
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
            <Link to="/#about" className="text-sm text-muted-foreground transition-colors hover:text-ink">About</Link>
            <Link to="/#expertise" className="text-sm text-muted-foreground transition-colors hover:text-ink">Business Expertise</Link>
            <Link to="/creative" className="text-sm text-ink transition-colors">Creative Portfolio</Link>
            <Link to="/#how" className="text-sm text-muted-foreground transition-colors hover:text-ink">How I do it</Link>
          </div>
          <Link to="/#contact" className="rounded-full border border-ink/20 px-4 py-1.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background">
            Contact
          </Link>
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
            <ArrowLeft className="h-4 w-4" /> Back to main site
          </Link>
          <div className="mt-3 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="h-px w-10 bg-ink/30" />
                <span className="eyebrow text-ink">3D Modeling, Graphics and POS Strategy · 2014 - 2021</span>
              </div>
              <h1 className="display mt-6 text-balance text-[clamp(2.75rem,7vw,6rem)] font-light text-ink">
                Creative <em className="font-normal italic text-primary">Portfolio</em>
              </h1>
              <div className="mt-6 max-w-xl space-y-4 text-lg text-muted-foreground md:text-xl">
                <p>A history of +7 years spent on retail design and manufacturing couldn't be erased by business strategy, right?</p>
                <p>In this area, I share a little bit about my not-so-far past and the interesting details of each project that built my industry knowledge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="container">
        <div className="divide-y divide-orange-500/60">
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
                      alt={`${w.client} — ${w.title}`}
                      loading="lazy"
                      className="col-span-2 row-span-2 h-full max-h-[60vh] w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <img
                      src={w.covers[1]}
                      alt={`${w.client} — ${w.title}`}
                      loading="lazy"
                      className="h-full max-h-[29vh] w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <img
                      src={w.covers[2]}
                      alt={`${w.client} — ${w.title}`}
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
                        alt={`${w.client} — ${w.title}`}
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
                  {w.tag && <span className="eyebrow text-primary">{w.tag}</span>}
                </div>
                <h2 className="display mt-4 text-3xl text-ink md:text-4xl">
                  {w.client}
                </h2>
                <h3 className="display mt-1 text-xl italic text-primary md:text-2xl">
                  {w.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {w.desc}
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
            Want to see more?
          </h3>
          <p className="max-w-md text-muted-foreground">
            Download the full portfolio PDF for a complete overview of all projects.
          </p>
          <a
            href={pdfAsset.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary"
          >
            <Download className="h-4 w-4" />
            Download full PDF portfolio
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink text-background">
        <div className="container grid gap-16 py-20 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="eyebrow text-primary-glow">Contact</span>
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
            <span>Business Strategist</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreativePortfolio;
