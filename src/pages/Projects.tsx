import {
  FileText,
  Github,
  Languages,
  Linkedin,
  Mail,
  Menu,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLang } from "@/contexts/LanguageContext";
import mtBankImage from "@/assets/projects/project-0.jpg.asset.json";
import hultImage from "@/assets/projects/project-1.jpg.asset.json";
import gostaImage from "@/assets/projects/project-2.jpg.asset.json";
import autodeskImage from "@/assets/projects/project-3.jpg.asset.json";
import feedImage from "@/assets/projects/project-4.jpg.asset.json";

const englishProjects = [
  {
    meta: "PROJECT · 04/2026 · M&T Bank · Finance",
    title: "Engaging gig workers with M&T capabilities",
    description:
      "In the U.S., it is projected that by 2028, the population of gig workers will be more than half of the population. On this project, I worked on a proposal to help M&T Bank optimize its services to this population with such specific needs.",
    image: mtBankImage.url,
    alt: "Rebeca Batista presenting the M&T Bank project",
  },
  {
    meta: "PROJECT · 03/2026 · Gosta Labs · Healthcare",
    title: "North-America GTM Strategy",
    description:
      "A growing healthcare AI company with a footprint in Europe, Asia, and Oceania wanted to understand more about the North America scenario. On this project, I worked on analyzing regulation, financial viability, GTM strategy, and market access paths.",
    image: gostaImage.url,
    alt: "Rebeca Batista and the Gosta Labs project team",
  },
  {
    meta: "PROJECT · 01/2026 · Hult Cup · Technology",
    title: "Engaging multiple campus over summer",
    description:
      "With campuses around the globe, the challenge here was to develop a platform that would keep students engaged over summer, engage the community with the World Cup, and promote a friendly competition between campuses.",
    image: hultImage.url,
    alt: "Rebeca Batista presenting the Hult Cup project",
  },
  {
    meta: "PROJECT · 11/2025 · Autodesk · Technology",
    title: "Software optimization for data-centers",
    description:
      "When construction sites have new needs, how effectively can a leading tool grow? Here, I worked researching not only the current scenario of data-centers, but also the forecast of the whole industry. At the end, building a software improvement for Autodesk.",
    image: autodeskImage.url,
    alt: "Rebeca Batista at Autodesk",
  },
];

const portugueseProjects = [
  {
    ...englishProjects[0],
    meta: "PROJETO · 04/2026 · M&T Bank · Finanças",
    title: "Engajando trabalhadores gig com as capacidades do M&T",
    description:
      "Nos EUA, projeta-se que até 2028 os trabalhadores gig representarão mais da metade da população. Neste projeto, desenvolvi uma proposta para ajudar o M&T Bank a otimizar seus serviços para essa população com necessidades tão específicas.",
  },
  {
    ...englishProjects[1],
    meta: "PROJETO · 03/2026 · Gosta Labs · Saúde",
    title: "Estratégia de entrada na América do Norte",
    description:
      "Uma empresa em crescimento de IA para saúde, presente na Europa, Ásia e Oceania, queria entender melhor o cenário da América do Norte. Analisei regulação, viabilidade financeira, estratégia de GTM e caminhos de acesso ao mercado.",
  },
  {
    ...englishProjects[2],
    meta: "PROJETO · 01/2026 · Hult Cup · Tecnologia",
    title: "Engajando múltiplos campi durante o verão",
    description:
      "Com campi ao redor do mundo, o desafio foi desenvolver uma plataforma que mantivesse os alunos engajados no verão, envolvesse a comunidade com a Copa do Mundo e promovesse uma competição saudável entre os campi.",
  },
  {
    ...englishProjects[3],
    meta: "PROJETO · 11/2025 · Autodesk · Tecnologia",
    title: "Otimização de software para data centers",
    description:
      "Quando os canteiros de obras têm novas necessidades, quão bem uma ferramenta líder consegue evoluir? Aqui, pesquisei o cenário atual dos data centers e também a projeção de toda a indústria. Ao final, construí uma melhoria de software para a Autodesk.",
  },
];

const BrandMark = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-primary">
    <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.55 4.55l2.1 2.1M17.35 17.35l2.1 2.1M19.45 4.55l-2.1 2.1M6.65 17.35l-2.1 2.1" fill="none" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const Projects = () => {
  const { lang, setLang } = useLang();
  const projects = lang === "en" ? englishProjects : portugueseProjects;
  const labels = lang === "en"
    ? {
        title: "Curious about my work?",
        subtitle: "Scroll or filter below",
        translate: "Translate",
        connect: "Connect!",
        date: "Date",
        industry: "Industry",
        type: "Type",
        search: "Search for keywords...",
        feed: "FEED · 08/2026",
        feedTitle: "LinkedIn Content",
        contact: "Contact",
        headline: "Let’s work together!",
      }
    : {
        title: "Quer conhecer meu trabalho?",
        subtitle: "Role ou filtre abaixo",
        translate: "Traduzir",
        connect: "Contato!",
        date: "Data",
        industry: "Indústria",
        type: "Tipo",
        search: "Busque por palavras-chave...",
        feed: "FEED · 08/2026",
        feedTitle: "Conteúdo no LinkedIn",
        contact: "Contato",
        headline: "Vamos trabalhar juntos!",
      };

  return (
    <main className="min-h-screen bg-background text-primary">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Rebeca Batista home">
            <BrandMark />
            <span className="display text-xl">Rebeca Batista</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button asChild variant="secondary" size="icon" className="h-9 w-9">
              <Link to="/projects" aria-label="Projects"><Menu /></Link>
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setLang(lang === "en" ? "pt" : "en")}
              aria-label={labels.translate}
              className="gap-2 px-3.5"
            >
              <Languages />
              <span>{labels.translate}</span>
            </Button>
            <Button asChild size="sm" className="px-4">
              <a href="#contact">{labels.connect}</a>
            </Button>
          </div>
        </nav>
      </header>

      <section className="border-b border-border bg-gradient-to-r from-muted via-accent/50 to-accent px-6 py-16 md:py-[58px]">
        <div className="mx-auto max-w-[1277px]">
          <h1 className="display text-[2.65rem] leading-none md:text-[3.25rem]">{labels.title}</h1>
          <p className="mt-2 text-lg">{labels.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1325px] px-6 py-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="sm"><SlidersHorizontal />{labels.date}</Button>
            <Button variant="secondary" size="sm"><SlidersHorizontal />{labels.industry}</Button>
            <Button variant="secondary" size="sm"><FileText />{labels.type}</Button>
          </div>
          <label className="flex h-9 w-full items-center gap-3 rounded-lg border border-secondary bg-background px-3 text-foreground md:w-[296px]">
            <Search className="h-4 w-4" aria-hidden="true" />
            <input
              type="search"
              aria-label={labels.search}
              placeholder={labels.search}
              className="w-full bg-transparent text-sm outline-none placeholder:text-foreground"
            />
          </label>
        </div>

        <div className="mt-4 space-y-4">
          <article className="grid min-h-[350px] overflow-hidden rounded-lg border border-accent bg-card p-6 md:grid-cols-[minmax(0,1.45fr)_minmax(340px,1fr)] md:gap-6">
            <div className="min-w-0 pr-1">
              <p className="text-lg">{labels.feed}</p>
              <h2 className="display mt-2 text-2xl font-semibold text-foreground">{labels.feedTitle}</h2>
              <div className="mt-5 h-[196px] overflow-y-auto pr-5 text-[17px] leading-relaxed text-accent">
                <p>Have you ever stopped to think that perhaps the problem isn’t the crazy demands, but rather how you handle receiving them? ■</p>
                <p className="mt-6">Throughout my career, I’ve often received requests to put it mildly, out of touch. But over time, I realized that making requests is simply part of the requester’s job. Just as providing clear direction and instructions is part of the job for the person receiving the request.</p>
                <p className="mt-1">No matter how intimidating certain roles within the company might seem, or how unusual the request may sound, clarity creates better work.</p>
              </div>
            </div>
            <img src={feedImage.url} alt="Rebeca Batista with a colleague at an event" className="mt-5 h-[302px] w-full rounded-lg object-cover md:mt-0" />
          </article>

          {projects.map((project) => (
            <article key={project.meta} className="grid min-h-[350px] overflow-hidden rounded-lg border border-foreground bg-card p-6 md:grid-cols-[minmax(0,1.45fr)_minmax(340px,1fr)] md:gap-6">
              <div className="min-w-0">
                <p className="text-lg">{project.meta}</p>
                <h2 className="display mt-2 text-2xl font-semibold">{project.title}</h2>
                <p className="mt-5 max-w-[690px] text-[17px] leading-relaxed text-foreground">{project.description}</p>
              </div>
              <img src={project.image} alt={project.alt} className="mt-5 h-[302px] w-full rounded-lg object-cover md:mt-0" />
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-5 bg-gradient-to-r from-accent/70 to-primary/70 text-primary-foreground">
        <div className="mx-auto max-w-[1325px] px-6 py-6 md:py-9">
          <p className="text-xl">{labels.contact}</p>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-8 md:mt-24">
            <h2 className="display text-4xl md:text-5xl">{labels.headline}</h2>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/rebecarec/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-[74px] w-[74px] place-items-center rounded-full border border-primary-foreground/70 transition-colors hover:bg-primary-foreground/10"><Linkedin className="h-7 w-7" /></a>
              <a href="https://github.com/rebecarec" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-[74px] w-[74px] place-items-center rounded-full border border-primary-foreground/70 transition-colors hover:bg-primary-foreground/10"><Github className="h-7 w-7" /></a>
              <a href="mailto:rebeca.ocb@gmail.com" aria-label="Email Rebeca" className="grid h-[74px] w-[74px] place-items-center rounded-full border border-primary-foreground/70 transition-colors hover:bg-primary-foreground/10"><Mail className="h-7 w-7" /></a>
            </div>
          </div>
          <div className="mt-24 border-t border-primary-foreground/80 pt-2 text-xs md:mt-28">Rebeca Batista {new Date().getFullYear()} ©</div>
        </div>
      </section>
    </main>
  );
};

export default Projects;