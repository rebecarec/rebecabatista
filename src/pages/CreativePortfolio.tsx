import { ArrowLeft, Download, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import pdfAsset from "@/assets/portfolio-pdf.asset.json";
import p3 from "@/assets/portfolio/page_3.jpg.asset.json";
import p6 from "@/assets/portfolio/page_6.jpg.asset.json";
import p11 from "@/assets/portfolio/page_11.jpg.asset.json";
import p16 from "@/assets/portfolio/page_16.jpg.asset.json";
import p18 from "@/assets/portfolio/page_18.jpg.asset.json";
import p21 from "@/assets/portfolio/page_21.jpg.asset.json";
import p25 from "@/assets/portfolio/page_25.jpg.asset.json";
import p32 from "@/assets/portfolio/page_32.jpg.asset.json";
import p34 from "@/assets/portfolio/page_34.jpg.asset.json";
import p37 from "@/assets/portfolio/page_37.jpg.asset.json";
import p40 from "@/assets/portfolio/page_40.jpg.asset.json";
import p43 from "@/assets/portfolio/page_43.jpg.asset.json";
import p45 from "@/assets/portfolio/page_45.jpg.asset.json";
import p47 from "@/assets/portfolio/page_47.jpg.asset.json";
import p48 from "@/assets/portfolio/page_48.jpg.asset.json";
import p49 from "@/assets/portfolio/page_49.jpg.asset.json";

type Work = {
  n: string;
  client: string;
  title: string;
  desc: string;
  cover: string;
  tag?: string;
};

const works: Work[] = [
  {
    n: "01",
    client: "Pernod Ricard",
    title: "Interactive Totem",
    cover: p3.url,
    tag: "Retail · Interaction",
    desc: "A point of interaction between brand and consumer. When a bottle is removed the consumer is directed to personalized content — engaging shoppers, providing analytics about the display (pick-ups, hottest zones) and supporting product launches.",
  },
  {
    n: "02",
    client: "Claro",
    title: "Morumbi Mall Store",
    cover: p6.url,
    tag: "Retail Concept · 2016",
    desc: "A new retail concept launched at the Morumbi Shopping store. Tall counters and mobile fixtures support quick interactions while fixed table areas serve longer visits. After a successful pilot, the concept rolled out across Latin America.",
  },
  {
    n: "03",
    client: "GCI — Alaska",
    title: "Store Redesign Project",
    cover: p11.url,
    tag: "International · Work Exchange",
    desc: "Developed during a work exchange in the United States. The concept reflects Alaska's unique culture and works within local sourcing constraints — many store locations are remote, so the design relies primarily on locally available materials.",
  },
  {
    n: "04",
    client: "Quem Disse, Berenice?",
    title: "Pharma Wall Fixture",
    cover: p16.url,
    tag: "Award-winning",
    desc: "The brand's first wall-mounted display designed specifically for the pharmacy channel. Modular niches and a gravity-feed tray system. Winner of POPAI 2016 (best permanent display, pharmacy/makeup) and EuroShop 2017 (best semi-permanent furniture, beauty & cosmetics).",
  },
  {
    n: "05",
    client: "Via Varejo",
    title: "Game Zone — Ponto Frio",
    cover: p18.url,
    tag: "Category Experience",
    desc: "An immersive gaming zone for Ponto Frio stores. All counters are enclosed and any products outside display cases are kept secure — balancing playful experience with loss-prevention requirements.",
  },
  {
    n: "06",
    client: "Pernod Ricard",
    title: "Shelf Adaptive Display",
    cover: p21.url,
    tag: "Modular Display",
    desc: "An adaptive shelf system designed to flex across SKUs and store formats, keeping the Absolut visual identity consistent while making fast in-store updates possible.",
  },
  {
    n: "07",
    client: "Pernod Ricard",
    title: "Interactive Zones — #InstaBar",
    cover: p25.url,
    tag: "Activation · Social",
    desc: "On-premise activation zones with a social mechanic: photograph a code or scan the QR to redeem a prize. Built to drive engagement around the #Absolut and #SuccessIsABlend campaigns.",
  },
  {
    n: "08",
    client: "Risqué",
    title: "Nail Experience",
    cover: p32.url,
    tag: "Beauty · Experiential",
    desc: "An immersive in-store nail experience for Risqué, designed to invite consumers to discover the range and test products in a guided sensorial environment.",
  },
  {
    n: "09",
    client: "OPI",
    title: "POSM Fixtures",
    cover: p34.url,
    tag: "Point-of-Sale",
    desc: "A family of point-of-sale fixtures for OPI, built to maintain a premium professional-salon feel inside the mass retail environment.",
  },
  {
    n: "10",
    client: "Colgate",
    title: "Wholesale Fixture",
    cover: p37.url,
    tag: "Wholesale Channel",
    desc: "A fixture system built for the wholesale channel — high product density, fast restock, and a clear brand block visible across large warehouse aisles.",
  },
  {
    n: "11",
    client: "Revlon & Lee Stafford",
    title: "Dufry Aisle",
    cover: p40.url,
    tag: "Travel Retail",
    desc: "An aisle concept for Dufry travel retail, hosting Revlon and Lee Stafford side by side with a coherent visual language that still lets each brand keep its own personality.",
  },
  {
    n: "12",
    client: "Via Varejo",
    title: "Tramontina Aisle",
    cover: p43.url,
    tag: "Category Management",
    desc: "A dedicated Tramontina aisle for Via Varejo: kitchen, tea & coffee and tabletop categories organised to guide the shopper from inspiration to purchase.",
  },
  {
    n: "13",
    client: "Chocolate Category",
    title: "Storytelling Aisle",
    cover: p45.url,
    tag: "Storytelling",
    desc: "An aisle that tells the story behind each chocolate — origin, cacao percentage and flavour notes — helping the consumer differentiate 55%, 65%, 70% and 85% cacao at a glance.",
  },
  {
    n: "14",
    client: "Rastrecall",
    title: "Yell Kiosk",
    cover: p47.url,
    tag: "Service Kiosk",
    desc: "A free-standing service kiosk — \"carregue aqui o seu smartphone\" — that makes the most of available wall space while creating a useful, brandable moment for the user.",
  },
  {
    n: "15",
    client: "Public Health",
    title: "Mental Health Awareness Graphics",
    cover: p48.url,
    tag: "Graphic System",
    desc: "A graphic system supporting mental-health awareness — illustrations, iconography and editorial layouts designed to make a difficult conversation feel approachable.",
  },
  {
    n: "16",
    client: "Citrino Bar",
    title: "Promotion Graphics",
    cover: p49.url,
    tag: "Hospitality · Promo",
    desc: "Promotion graphics for Citrino Bar: menus, signage and limited-time offer art built to feel native to the venue while still standing out from the regular décor.",
  },
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
        <div className="container relative pb-16 pt-12 md:pt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> Back to main site
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="h-px w-10 bg-ink/30" />
                <span className="eyebrow text-ink">Portfolio · 3D &amp; Graphics · 2025</span>
              </div>
              <h1 className="display mt-6 text-balance text-[clamp(2.75rem,7vw,6rem)] font-light text-ink">
                Creative <em className="font-normal italic text-primary">Portfolio</em>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
                A decade of retail design, point-of-sale architecture and brand
                experiences — built for global consumer brands across Latin America,
                the U.S. and Europe.
              </p>
            </div>
            <div className="lg:col-span-4">
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
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="container py-20">
        <div className="space-y-24">
          {works.map((w, i) => (
            <article
              key={w.n}
              className={`grid gap-10 lg:grid-cols-12 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-sm bg-paper shadow-soft aspect-video">
                  <img
                    src={w.cover}
                    alt={`${w.client} — ${w.title}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
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

      {/* Full PDF embed */}
      <section className="border-t border-border/60 bg-paper">
        <div className="container py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="eyebrow text-primary">The full deck</span>
              <h2 className="display mt-4 text-4xl text-ink md:text-5xl">
                Read the complete <em className="italic text-primary">2025 portfolio</em>.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href={pdfAsset.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background"
              >
                <Download className="h-4 w-4" />
                Open in new tab
              </a>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-sm border border-border bg-background shadow-soft">
            <object
              data={pdfAsset.url}
              type="application/pdf"
              className="h-[80vh] w-full"
              aria-label="Rebeca Batista — Creative Portfolio 2025 (PDF)"
            >
              <div className="p-10 text-center text-muted-foreground">
                Your browser can't display the embedded PDF.{" "}
                <a href={pdfAsset.url} className="underline">Download it here</a>.
              </div>
            </object>
          </div>
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
