import { useState } from "react";
import {
  FileText,
  Github,
  Languages,
  Linkedin,
  Mail,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavDropdown from "@/components/NavDropdown";
import FilterDropdown from "@/components/FilterDropdown";
import { useLang } from "@/contexts/LanguageContext";
import mtBankImage from "@/assets/projects/project-0.jpg.asset.json";
import hultImage from "@/assets/projects/hult-cup-new.jpg.asset.json";
import gostaImage from "@/assets/projects/project-2.jpg.asset.json";
import autodeskImage from "@/assets/projects/autodesk-new.jpg.asset.json";
import feedImage from "@/assets/projects/project-4.jpg.asset.json";
import dadosImage from "@/assets/projects/dados-new.jpg.asset.json";

const englishProjects = [
  {
    meta: "PROJECT · 04/2026 · M&T Bank · Finance",
    industry: "Finance",
    date: "04/2026",
    title: "Engaging gig workers with M&T capabilities",
    description:
      "In the U.S., it is projected that by 2028, the population of gig workers will be more than half of the population. On this project, I worked on a proposal to help M&T Bank optimize its services to this population with such specific needs.",
    image: mtBankImage.url,
    alt: "Rebeca Batista presenting the M&T Bank project",
  },
  {
    meta: "PROJECT · 03/2026 · Gosta Labs · Healthcare",
    industry: "Healthcare",
    date: "03/2026",
    title: "North-America GTM Strategy",
    description:
      "A growing healthcare AI company with a footprint in Europe, Asia, and Oceania wanted to understand more about the North America scenario. On this project, I worked on analyzing regulation, financial viability, GTM strategy, and market access paths.",
    image: gostaImage.url,
    alt: "Rebeca Batista and the Gosta Labs project team",
  },
  {
    meta: "PROJECT · 01/2026 · Hult Cup · Technology",
    industry: "Technology",
    date: "01/2026",
    title: "Engaging multiple campus over summer",
    description:
      "With campuses around the globe, the challenge here was to develop a platform that would keep students engaged over summer, engage the community with the World Cup, and promote a friendly competition between campuses.",
    image: hultImage.url,
    alt: "Rebeca Batista presenting the Hult Cup project",
  },
  {
    meta: "PROJECT · 11/2025 · Autodesk · Technology",
    industry: "Technology",
    date: "11/2025",
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
    industry: "Finanças",
    title: "Engajando trabalhadores gig com as capacidades do M&T",
    description:
      "Nos EUA, projeta-se que até 2028 os trabalhadores gig representarão mais da metade da população. Neste projeto, desenvolvi uma proposta para ajudar o M&T Bank a otimizar seus serviços para essa população com necessidades tão específicas.",
  },
  {
    ...englishProjects[1],
    meta: "PROJETO · 03/2026 · Gosta Labs · Saúde",
    industry: "Saúde",
    title: "Estratégia de entrada na América do Norte",
    description:
      "Uma empresa em crescimento de IA para saúde, presente na Europa, Ásia e Oceania, queria entender melhor o cenário da América do Norte. Analisei regulação, viabilidade financeira, estratégia de GTM e caminhos de acesso ao mercado.",
  },
  {
    ...englishProjects[2],
    meta: "PROJETO · 01/2026 · Hult Cup · Tecnologia",
    industry: "Tecnologia",
    title: "Engajando múltiplos campi durante o verão",
    description:
      "Com campi ao redor do mundo, o desafio foi desenvolver uma plataforma que mantivesse os alunos engajados no verão, envolvesse a comunidade com a Copa do Mundo e promovesse uma competição saudável entre os campi.",
  },
  {
    ...englishProjects[3],
    meta: "PROJETO · 11/2025 · Autodesk · Tecnologia",
    industry: "Tecnologia",
    title: "Otimização de software para data centers",
    description:
      "Quando os canteiros de obras têm novas necessidades, quão bem uma ferramenta líder consegue evoluir? Aqui, pesquisei o cenário atual dos data centers e também a projeção de toda a indústria. Ao final, construí uma melhoria de software para a Autodesk.",
  },
];

export const FEED_DATES = {
  dados: "10/2026",
  original: "08/2026",
} as const;

export const projectDates = englishProjects.map((project) => project.date);
export const englishIndustries = englishProjects.map((project) => project.industry);
export const portugueseIndustries = portugueseProjects.map((project) => project.industry);

const englishFeed = [
  "Have you ever stopped to think that perhaps the problem isn’t the crazy requests, but rather how you receive them?",
  "Throughout my career, I’ve often received requests... challenging, to put it mildly, let’s say. But over time I understood that it’s part of the requester’s job to ask. Just as it’s also part of the job of the person receiving the request to direct the requests and give clarity.",
  "No matter how intimidating some seats are within the company, and you feel you need to say yes to everything that comes your way, to me what you need is:",
  "- Know how to extract the core of the request that comes to you.",
  "E.g.: “What do we really want by doing this?”. Once you understand that, you can offer more productive alternatives that the person who made the request might not even know were possible.",
  "- Know how to signal when something is wrong.",
  "E.g.: “What you’re asking me goes against what department X gave me as a directive/budget for the project. Are you sure we should move forward this way?”; “If we change it now, the launch deadline will be impacted.” By doing this, you share information people often don’t have and think is simpler than it really is.",
  "- Know how to explain the chain of events involved in a change of plans.",
  "E.g.: “I can deliver what you’re asking, but if I do that now, we’ll face impact X and Y.” By sharing this, you expose the impacts of decisions, and you also open the door for the requester to choose what matters most or think with you about how to reduce the impact.",
  "- Know how to ask for help and delegate tasks (perhaps the hardest one on this list)",
  "This one is a work in progress… You need to build partnerships within the team with people who can help you, and you NEED to let go of your tasks.",
  "Be clear about what you need help with, hand over to others something you can explain clearly — and really explain it, correcting 10 times if necessary, but don’t say “it’s faster if I do it myself”.",
  "Don’t be afraid to delegate your tasks to someone, because your image is at more risk from delaying a delivery than from accepting help.",
  "Well, the text got a bit long today, huh. I hate long texts on LinkedIn, but I’ve summarized as much as I could, folks.",
  "Final message: be open to listening and truly willing to collaborate. And don’t forget that, as boring, challenging, and complex as some requests may be, it’s easier to negotiate ways of getting things done than to fight against them.",
];

const portugueseFeed = [
  "Você já parou pra pensar que talvez o problema não esteja nas solicitações malucas, mas em como você as recebe?",
  "Durante a minha carreira, por diversas vezes recebi solicitações... no mínimo desafiadoras, vamos dizer assim. Só que ao longo do tempo eu entendi que faz parte do trabalho de quem pede, pedir. Assim como, também faz parte do trabalho de quem recebe o pedido, direcionar as solicitações e dar clareza.",
  "Por mais assustadoras que algumas cadeiras sejam dentro da empresa, e você sinta que precisa dizer sim pra tudo o que chega, pra mim o que você precisa é:",
  "- Saber extrair o core da solicitação que chega pra você.",
  "Ex.: “O que realmente queremos fazendo isso?”. Entendendo isso, você consegue dar alternativas mais produtivas que talvez quem te fez a solicitação nem soubesse que eram possíveis.",
  "- Saber sinalizar quando algo está errado.",
  "Ex.: “O que você está me pedindo vai contra o que a área X me passou como diretriz/verba pro projeto. Tem certeza de que devemos seguir assim?”; “Se mudarmos agora, o prazo de lançamento será impactado”. Fazendo isso, você compartilha uma informação que muitas vezes as pessoas nem sabem e acham que é mais simples do que realmente é.",
  "- Saber explicar a cadeia de eventos que envolve uma mudança no planejamento.",
  "Ex.: “Consigo atender o que você me pede, mas se eu fizer isso nesse momento, vamos ter impacto X e Y”. Compartilhando isso, você expõe os impactos das decisões, e também abre pra que o outro solicitante escolha o que é mais importante ou pense com você em como reduzir o impacto.",
  "- Saber pedir ajuda e delegar tarefas (talvez o mais difícil dessa lista)",
  "Aqui é meio que uma construção… Você precisa construir parcerias no time que vão saber te ajudar, e você PRECISA largar o osso das suas atividades.",
  "Seja claro sobre o que você precisa de ajuda, passe pros outros algo que você consiga explicar claramente, e realmente explique, se for necessário, corrija 10 vezes, mas não fale “é mais rápido se eu fizer sozinho”.",
  "Não tenha medo de delegar suas tarefas pra alguém, porque a sua imagem corre mais risco atrasando uma entrega do que aceitando ajuda.",
  "Bom, ficou meio longo o texto hoje, né. Odeio texto longo no LinkedIn, mas sintetizei em tudo o que deu, rede.",
  "Mensagem final: esteja aberto a ouvir e realmente disposto a colaborar. E não esqueça que, por mais chatas, desafiadoras e complexas que algumas solicitações sejam, é mais fácil negociar formas de fazer do que lutar contra elas.",
];

const englishDados = [
  "The dashboard shows volume, and the network even seems to hold a large market share. But when you look closer, the numbers don’t add up. So what do you do when the data every company considers so valuable doesn’t match the reality of your area?",
  "First, we need to analyze how that information was collected. Every area of the organization has different metrics, and for other departments the data may be perfectly adequate.",
  "Knowing who built the strategy behind a database, you can align expectations on what you can (and can’t) extract from it, adapting your analysis to the information available. From there, the way forward isn’t to discard everything that isn’t 100% suited to your area, but to fill the gaps intelligently and translate that combination into what you actually need.",
  "Let’s take an example…",
  "The number of stores doesn’t tell you much if you need to know the profitability of a given region. BUUUT it can help you understand how much you need to invest to serve 100% of that market. Knowing what that coverage would cost in investment, you can assess real profitability and dig into what actually generates revenue and good ROI in this scenario.",
  "In my view, building a heavy data structure that collects as much information as possible isn’t always the way to go. But making good use of what’s already at hand — that is essential for developing insights that create real value for the business.",
  "And where you are — how do you deal with it when the company’s “official” metric doesn’t speak the same language as the reality of your area?",
];

const portugueseDados = [
  "O dashboard indica volume, e a rede até parece ter uma grande participação. Mas quando você olha de perto, os números não fecham. E então, o que fazer quando os dados que toda empresa considera de tanto valor não batem com a realidade da sua área?",
  "Primeiro, a gente precisa analisar como essa informação foi coletada. Cada área da organização tem métricas diferentes, e talvez para outros setores os dados estejam completamente adequados.",
  "Sabendo quem montou a estratégia de uma base de dados, você consegue alinhar expectativas sobre o que dá (e o que não dá) para extrair dela, adaptando sua análise às informações disponíveis. A partir daí, o caminho não é descartar tudo o que não está 100% adaptado à sua área, mas agregar o que falta de forma inteligente e traduzir essa combinação para a sua necessidade.",
  "Vamos de exemplo…",
  "A quantidade de lojas não te diz muita coisa se você precisa saber a rentabilidade de uma determinada região. MASSSS pode te ajudar a entender o quanto você precisa investir para atender 100% desse mercado. Sabendo quanto custaria essa cobertura em investimentos, você consegue avaliar a rentabilidade real e aprofundar no que realmente gera receita e bom ROI nesse cenário.",
  "A meu ver, criar uma estrutura de dados pesada coletando o máximo de informações possíveis nem sempre é o caminho. Mas fazer bom uso do que se tem à mão, sim, é essencial para desenvolver insights que gerem valor de verdade para o negócio.",
  "E por aí, como vocês lidam quando a métrica \"oficial\" da empresa não conversa com a realidade da sua área?",
];

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

export const normalizeText = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export const matchesKeyword = (query: string, parts: string[]) => {
  const terms = normalizeText(query).split(/\s+/).filter(Boolean);
  if (terms.length === 0) return true;
  const haystack = normalizeText(parts.join(" "));
  return terms.every((term) => haystack.includes(term));
};

export const matchesDate = (date: string, selected: string) =>
  selected === "" || date === selected;

export const matchesIndustry = (industry: string, selected: string) =>
  selected === "" || industry === selected;

export const uniqueIndustries = (industries: string[]) =>
  Array.from(new Set(industries.filter(Boolean))).sort((a, b) => a.localeCompare(b));

export const uniqueDates = (dates: string[]) =>
  Array.from(new Set(dates)).sort((a, b) => {
    const [monthA, yearA] = a.split("/").map(Number);
    const [monthB, yearB] = b.split("/").map(Number);
    return yearB - yearA || monthB - monthA;
  });

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
        feedNew: "FEED · 10/2026",
        feedTitle: "LinkedIn Content",
        contact: "Contact",
        headline: "Let’s work together!",
        noResults: "No results for",
        clear: "Clear search",
        allDates: "All dates",
        allIndustries: "All industries",
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
        feedNew: "FEED · 10/2026",
        feedTitle: "Conteúdo no LinkedIn",
        contact: "Contato",
        headline: "Vamos trabalhar juntos!",
        noResults: "Nenhum resultado para",
        clear: "Limpar busca",
        allDates: "Todas as datas",
        allIndustries: "Todas as indústrias",
      };

  const [query, setQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const feedCards = [
    {
      key: "feed-10-2026",
      date: FEED_DATES.dados,
      industry: "",
      meta: labels.feedNew,
      image: dadosImage.url,
      alt: "Two colleagues reviewing a project dashboard on a computer screen",
      paragraphs: lang === "en" ? englishDados : portugueseDados,
    },
    {
      key: "feed-08-2026",
      date: FEED_DATES.original,
      industry: "",
      meta: labels.feed,
      image: feedImage.url,
      alt: "You got this handwritten on grid paper",
      paragraphs: lang === "en" ? englishFeed : portugueseFeed,
    },
  ];

  const allDates = uniqueDates([
    ...projects.map((project) => project.date),
    ...feedCards.map((feed) => feed.date),
  ]);

  const allIndustries = uniqueIndustries(projects.map((project) => project.industry));

  const visibleFeeds = feedCards.filter(
    (feed) =>
      matchesDate(feed.date, selectedDate) &&
      matchesIndustry(feed.industry, selectedIndustry) &&
      matchesKeyword(query, [feed.meta, labels.feedTitle, ...feed.paragraphs]),
  );

  const visibleProjects = projects.filter(
    (project) =>
      matchesDate(project.date, selectedDate) &&
      matchesIndustry(project.industry, selectedIndustry) &&
      matchesKeyword(query, [project.meta, project.title, project.description]),
  );

  const hasResults = visibleFeeds.length > 0 || visibleProjects.length > 0;

  return (
    <main className="min-h-screen bg-background text-primary">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 shadow-sm backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Rebeca Batista home">
            <BrandMark />
            <span className="display text-xl">Rebeca Batista</span>
          </Link>
          <div className="flex items-center gap-3">
            <NavDropdown
              buttonClassName="flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary transition-colors hover:bg-secondary/80"
              iconClassName="h-5 w-5"
            />
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
            <FilterDropdown
              label={labels.date}
              allLabel={labels.allDates}
              options={allDates}
              selected={selectedDate}
              onSelect={setSelectedDate}
              icon={<SlidersHorizontal />}
            />
            <FilterDropdown
              label={labels.industry}
              allLabel={labels.allIndustries}
              options={allIndustries}
              selected={selectedIndustry}
              onSelect={setSelectedIndustry}
              icon={<SlidersHorizontal />}
            />
            <Button variant="secondary" size="sm"><FileText />{labels.type}</Button>
          </div>
          <label className="flex h-9 w-full items-center gap-3 rounded-lg border border-secondary bg-background px-3 text-foreground md:w-[296px]">
            <Search className="h-4 w-4" aria-hidden="true" />
            <input
              type="text"
              aria-label={labels.search}
              placeholder={labels.search}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-foreground"
            />
            {query.trim() !== "" && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={labels.clear}
                className="shrink-0 rounded-sm transition-colors hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </label>
        </div>

        <div className="mt-4 space-y-4">
          {visibleFeeds.map((feed) => (
            <article key={feed.key} className="grid min-h-[350px] overflow-hidden rounded-lg border border-accent bg-card p-6 md:grid-cols-[minmax(0,1.45fr)_minmax(340px,1fr)] md:gap-6">
              <div className="min-w-0 pr-1">
                <p className="text-lg">{feed.meta}</p>
                <h2 className="display mt-2 text-2xl font-semibold text-foreground">{labels.feedTitle}</h2>
                <div className="mt-5 h-[196px] overflow-y-auto pr-5 text-[17px] leading-relaxed text-accent">
                  {feed.paragraphs.map((paragraph, index) => (
                    <p key={index} className={index === 0 ? "" : "mt-4"}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <img src={feed.image} alt={feed.alt} className="mt-5 h-[302px] w-full rounded-lg object-cover md:mt-0" />
            </article>
          ))}

          {visibleProjects.map((project) => (
            <article key={project.meta} className="grid min-h-[350px] overflow-hidden rounded-lg border border-foreground bg-card p-6 md:grid-cols-[minmax(0,1.45fr)_minmax(340px,1fr)] md:gap-6">
              <div className="min-w-0">
                <p className="text-lg">{project.meta}</p>
                <h2 className="display mt-2 text-2xl font-semibold">{project.title}</h2>
                <p className="mt-5 max-w-[690px] text-[17px] leading-relaxed text-foreground">{project.description}</p>
              </div>
              <img src={project.image} alt={project.alt} className="mt-5 h-[302px] w-full rounded-lg object-cover md:mt-0" />
            </article>
          ))}

          {!hasResults && (
            <div className="flex min-h-[160px] flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-secondary bg-card p-8 text-center">
              <p className="text-lg text-foreground">
                {labels.noResults} “{query.trim()}”.
              </p>
              <Button variant="secondary" size="sm" onClick={() => setQuery("")}>
                <X />
                <span>{labels.clear}</span>
              </Button>
              {selectedDate !== "" && (
                <Button variant="secondary" size="sm" onClick={() => setSelectedDate("")}>
                  <X />
                  <span>{labels.allDates}</span>
                </Button>
              )}
              {selectedIndustry !== "" && (
                <Button variant="secondary" size="sm" onClick={() => setSelectedIndustry("")}>
                  <X />
                  <span>{labels.allIndustries}</span>
                </Button>
              )}
            </div>
          )}
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