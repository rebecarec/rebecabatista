import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "pt";

type Dict = Record<string, { en: string; pt: string }>;

export const translations: Dict = {
  // Nav
  nav_contact: { en: "Contact", pt: "Contato" },

  // Hero
  hero_role: { en: "Business Strategist", pt: "Estrategista de Negócios" },
  hero_p1: {
    en: "Over a decade of global experience in consumer goods and retail strategy.",
    pt: "Mais de uma década de experiência global em bens de consumo e estratégia de varejo.",
  },
  hero_p2: {
    en: "I bridge the gap between brand long term goals and rigorous analytical strategy to drive scalable results and lasting impact.",
    pt: "Conecto objetivos de longo prazo de marca a uma estratégia analítica rigorosa para gerar resultados escaláveis e impacto duradouro.",
  },
  hero_caption: { en: "Strategy · Analytics · Operations", pt: "Estratégia · Analytics · Operações" },

  // About
  about_eyebrow: { en: "01 — About", pt: "01 — Sobre" },
  about_title_1: { en: "Strategy, made", pt: "Estratégia," },
  about_title_2: { en: "measurable", pt: "mensurável" },
  about_p1: {
    en: "With over a decade of experience developing retail strategy and trade marketing for global consumer brands, I bridge the gap between high-level business goals and actionable data insights. Currently an MBA candidate specializing in Data Analytics, I focus on transforming complex datasets into clear insights that power growth.",
    pt: "Com mais de uma década desenvolvendo estratégia de varejo e trade marketing para marcas globais de consumo, conecto objetivos de negócio de alto nível a insights de dados acionáveis. Atualmente cursando MBA com especialização em Data Analytics, foco em transformar dados complexos em insights claros que impulsionam o crescimento.",
  },
  about_p2: {
    en: "My professional background is rooted in the fast-moving consumer goods (FMCG) and technology sectors, where I have led cross-functional teams to optimize market presence and consumer engagement. Today, I combine that industry knowledge with advanced proficiency in Business Intelligence tools — building robust strategies, data models, and operations that generate profit.",
    pt: "Minha trajetória profissional está enraizada nos setores de bens de consumo (FMCG) e tecnologia, onde liderei equipes multifuncionais para otimizar presença de mercado e engajamento do consumidor. Hoje, combino esse conhecimento de indústria com proficiência avançada em ferramentas de Business Intelligence — construindo estratégias robustas, modelos de dados e operações que geram lucro.",
  },
  recent_projects: { en: "Recent Projects", pt: "Projetos Recentes" },

  // Expertise
  expertise_eyebrow: { en: "02 — Business Expertise", pt: "02 — Expertise em Negócios" },
  expertise_title_1: { en: "Data-Informed Strategy", pt: "Estratégia Guiada por Dados" },
  expertise_title_2: { en: "Results-Driven Leadership", pt: "Liderança Focada em Resultados" },
  see_more_linkedin: { en: "Contact on LinkedIn and see more", pt: "Fale no LinkedIn e veja mais" },

  // How
  how_eyebrow: { en: "03 — How I do it", pt: "03 — Como eu trabalho" },
  how_title_1: { en: "From", pt: "De" },
  how_title_2: { en: "Consumer Insights", pt: "Insights do Consumidor" },
  how_title_3: { en: "to Commercial Growth.", pt: "ao Crescimento Comercial." },

  // Contact
  contact_eyebrow: { en: "04 — Contact", pt: "04 — Contato" },
  contact_eyebrow_short: { en: "Contact", pt: "Contato" },
  contact_title_1: { en: "Let's build something", pt: "Vamos construir algo" },
  contact_title_2: { en: "that lasts", pt: "que dure" },
  footer_role: { en: "Business Strategist", pt: "Estrategista de Negócios" },

  // Projects (Index)
  proj_mt_title: { en: "Engaging gig workers with M&T Capabilities", pt: "Engajando trabalhadores gig com as capacidades do M&T" },
  proj_mt_desc: {
    en: "In the U.S., it is projected that by 2028, the population of gig workers will be more than half of the population. On this project, I worked on a proposal to help M&T Bank optimize its services to this population with such specific needs.",
    pt: "Nos EUA, projeta-se que até 2028 os trabalhadores gig representarão mais da metade da população. Neste projeto, desenvolvi uma proposta para ajudar o M&T Bank a otimizar seus serviços para essa população com necessidades tão específicas.",
  },
  proj_gosta_title: { en: "North America Expansion, possible pathways", pt: "Expansão na América do Norte, caminhos possíveis" },
  proj_gosta_desc: {
    en: "A growing healthcare AI company with a footprint in Europe, Asia, and Oceania wanted to understand more about the North America scenario. On this project, I worked on analyzing regulation, financial viability, GTM strategy, and market access paths.",
    pt: "Uma empresa em crescimento de IA para saúde, presente na Europa, Ásia e Oceania, queria entender melhor o cenário da América do Norte. Analisei regulação, viabilidade financeira, estratégia de GTM e caminhos de acesso ao mercado.",
  },
  proj_hult_title: { en: "How to engage multiple campus in the summer", pt: "Como engajar múltiplos campi durante o verão" },
  proj_hult_desc: {
    en: "With campuses in Boston, London, Dubai, New York, and San Francisco, the challenge here was to develop a project that would keep students engaged over summer, engage the community with the World Cup, and promote a friendly competition between campuses.",
    pt: "Com campi em Boston, Londres, Dubai, Nova York e São Francisco, o desafio foi desenvolver um projeto que mantivesse os alunos engajados no verão, envolvesse a comunidade com a Copa do Mundo e promovesse uma competição saudável entre os campi.",
  },
  proj_pf_title: { en: "ESG assessment and improvement plan", pt: "Diagnóstico ESG e plano de melhoria" },
  proj_pf_desc: {
    en: "In a growing services industry, it is important to know how to provide real value when it comes to ESG improvements. The challenge here was to implement ESG initiatives with real-life impacts, as frictionless to the franchisees as possible.",
    pt: "Em uma indústria de serviços em crescimento, é importante saber entregar valor real em iniciativas ESG. O desafio foi implementar ações ESG com impacto real, com o mínimo de atrito possível para os franqueados.",
  },

  // How I do it steps
  step_listen: { en: "Listen", pt: "Escutar" },
  step_listen_d: {
    en: "I like to start gathering all information possible from key stakeholders, data, and industry scenarios. Interviewing relevant specialists and clarifying assumptions is also very relevant for me, since I know research can only tell us so much.",
    pt: "Gosto de começar reunindo toda informação possível de stakeholders-chave, dados e cenários da indústria. Entrevistar especialistas e clarificar premissas também é essencial, já que a pesquisa tem seus limites.",
  },
  step_diag: { en: "Diagnose", pt: "Diagnosticar" },
  step_diag_d: {
    en: "For each possible issue, a different framework might be adequate to diagnose the issue, the traditional ones like McKinsey or BCG matrices can give insight, and the new ones like Platform Canvas can give actionable directions.",
    pt: "Para cada problema, um framework diferente pode ser adequado — os tradicionais como matrizes McKinsey ou BCG trazem insights, e os novos como Platform Canvas apontam direções acionáveis.",
  },
  step_model: { en: "Model", pt: "Modelar" },
  step_model_d: {
    en: "Building the data models, forecasts, and scenarios, can turn assumptions into testable strategies. Here is where we connect the problem with possible solutions.",
    pt: "Construir modelos de dados, previsões e cenários transforma premissas em estratégias testáveis. Aqui conectamos o problema às possíveis soluções.",
  },
  step_val: { en: "Validate Solutions", pt: "Validar Soluções" },
  step_val_d: {
    en: "Connecting problems and solutions is not enough, I believe it is also relevant to test these models, share preliminary direction with the client, and validate feasibility with real-world data or prototyping.",
    pt: "Conectar problemas e soluções não basta — é preciso testar os modelos, compartilhar direcionamentos preliminares com o cliente e validar a viabilidade com dados reais ou protótipos.",
  },
  step_rec: { en: "Recommend", pt: "Recomendar" },
  step_rec_d: {
    en: "After the most impactful plan is validated, it is important to translate complex findings into a clear, sequenced playbook that the client can understand and execute.",
    pt: "Após validar o plano de maior impacto, é importante traduzir descobertas complexas em um playbook claro e sequenciado que o cliente entenda e execute.",
  },
  step_op: { en: "Operate", pt: "Operar" },
  step_op_d: {
    en: "With the plan developed, it is extremely important to engage key stakeholders, delegate activities, and define KPIs to be evaluated. The success depends on the strategy leaving the paper and turning into real-life execution.",
    pt: "Com o plano definido, é fundamental engajar stakeholders, delegar atividades e definir KPIs. O sucesso depende de a estratégia sair do papel e virar execução real.",
  },

  // Creative Portfolio
  cp_back: { en: "Back to main site", pt: "Voltar ao site principal" },
  cp_eyebrow: { en: "3D Modeling, Graphics and POS Strategy · 2014 - 2021", pt: "Modelagem 3D, Gráficos e Estratégia PDV · 2014 - 2021" },
  cp_title_1: { en: "Creative", pt: "Portfólio" },
  cp_title_2: { en: "Portfolio", pt: "Criativo" },
  cp_p1: {
    en: "A history of +7 years spent on retail design and manufacturing couldn't be erased by business strategy, right?",
    pt: "Uma história de +7 anos em retail design e manufatura não poderia ser apagada pela estratégia de negócios, certo?",
  },
  cp_p2: {
    en: "In this area, I share a little bit about my not-so-far past and the interesting details of each project that built my industry knowledge.",
    pt: "Nesta área, compartilho um pouco do meu passado não tão distante e os detalhes interessantes de cada projeto que construíram meu conhecimento de indústria.",
  },
  cp_want_more: { en: "Want to see more?", pt: "Quer ver mais?" },
  cp_pdf_desc: {
    en: "Download the full portfolio PDF for a complete overview of all projects.",
    pt: "Baixe o portfólio completo em PDF para uma visão geral de todos os projetos.",
  },
  cp_pdf_btn: { en: "Download full PDF portfolio", pt: "Baixar portfólio completo em PDF" },

  // Works content
  w01_title: { en: "Morumbi Mall Store", pt: "Loja Shopping Morumbi" },
  w01_tag: { en: "Retail Concept · 2016", pt: "Conceito de Varejo · 2016" },
  w01_desc: {
    en: "A new retail concept launched at the Morumbi Shopping store. Tall counters and mobile fixtures support quick interactions while fixed table areas serve longer visits. After a successful pilot, the concept rolled out across Latin America.",
    pt: "Um novo conceito de varejo lançado na loja do Shopping Morumbi. Balcões altos e móveis permitem interações rápidas enquanto áreas fixas de mesa atendem visitas mais longas. Após um piloto de sucesso, o conceito foi expandido pela América Latina.",
  },
  w02_title: { en: "Store Redesign Project", pt: "Projeto de Redesign de Loja" },
  w02_tag: { en: "International · Work Exchange", pt: "Internacional · Intercâmbio" },
  w02_desc: {
    en: "Developed during a work exchange in the United States. The concept reflects Alaska's unique culture and works within local sourcing constraints — many store locations are remote, so the design relies primarily on locally available materials.",
    pt: "Desenvolvido durante intercâmbio de trabalho nos Estados Unidos. O conceito reflete a cultura única do Alasca e respeita as restrições de fornecimento local — muitas lojas ficam em áreas remotas, então o design prioriza materiais disponíveis localmente.",
  },
  w03_title: { en: "Dufry Aisle and Department Stores", pt: "Corredor Dufry e Lojas de Departamento" },
  w03_tag: { en: "BEAUTY ZONE", pt: "ZONA DE BELEZA" },
  w03_desc: {
    en: "An aisle concept for Dufry travel retail and department stores, hosting Revlon with a coherent visual language that lets the brand keep its own personality across formats.",
    pt: "Um conceito de corredor para o travel retail da Dufry e lojas de departamento, abrigando a Revlon com uma linguagem visual coerente que preserva a personalidade da marca em diferentes formatos.",
  },
  w04_title: { en: "Pharma Wall Fixture", pt: "Expositor de Parede para Farmácias" },
  w04_tag: { en: "Award-winning", pt: "Premiado" },
  w04_desc: {
    en: "The brand's first wall-mounted display designed specifically for the pharmacy channel. Modular niches and a gravity-feed tray system. Winner of POPAI 2016 (best permanent display, pharmacy/makeup) and EuroShop 2017 (best semi-permanent furniture, beauty & cosmetics).",
    pt: "Primeiro expositor de parede da marca desenhado para o canal farma. Nichos modulares e bandejas com gravidade. Vencedor do POPAI 2016 (melhor display permanente, farma/maquiagem) e EuroShop 2017 (melhor móvel semipermanente, beleza & cosméticos).",
  },
  w05_title: { en: "Game Zone — Ponto Frio", pt: "Zona Gamer — Ponto Frio" },
  w05_tag: { en: "Category Experience", pt: "Experiência de Categoria" },
  w05_desc: {
    en: "An immersive gaming zone for Ponto Frio stores. All counters are enclosed and any products outside display cases are kept secure — balancing playful experience with loss-prevention requirements.",
    pt: "Uma zona gamer imersiva para as lojas Ponto Frio. Todos os balcões são fechados e qualquer produto fora das vitrines é mantido em segurança — equilibrando experiência lúdica e prevenção de perdas.",
  },
  w06_title: { en: "Shelf Adaptive Display", pt: "Display de Prateleira Adaptativo" },
  w06_tag: { en: "Modular Display", pt: "Display Modular" },
  w06_desc: {
    en: "An adaptive shelf system designed to flex across SKUs and store formats, keeping the Absolut visual identity consistent while making fast in-store updates possible.",
    pt: "Um sistema de prateleira adaptativo, flexível para diferentes SKUs e formatos de loja, mantendo a identidade visual da Absolut consistente e permitindo atualizações rápidas no PDV.",
  },
  w07_title: { en: "Interactive Zones — #InstaBar", pt: "Zonas Interativas — #InstaBar" },
  w07_tag: { en: "Activation · Social", pt: "Ativação · Social" },
  w07_desc: {
    en: "On-premise activation zones with a social mechanic: photograph a code or scan the QR to redeem a prize. Built to drive engagement around the #Absolut and #SuccessIsABlend campaigns.",
    pt: "Zonas de ativação on-premise com mecânica social: fotografe o código ou escaneie o QR para resgatar um prêmio. Criadas para engajar as campanhas #Absolut e #SuccessIsABlend.",
  },
  w08_title: { en: "Nail Experience", pt: "Experiência de Unhas" },
  w08_tag: { en: "Beauty · Experiential", pt: "Beleza · Experiência" },
  w08_desc: {
    en: "An immersive in-store nail experience for Risqué, designed to invite consumers to discover the range and test products in a guided sensorial environment.",
    pt: "Uma experiência imersiva de unhas na loja para a Risqué, convidando o consumidor a descobrir a linha e testar produtos num ambiente sensorial guiado.",
  },
  w09_title: { en: "POSM Fixtures", pt: "Materiais de PDV" },
  w09_tag: { en: "Point-of-Sale", pt: "Ponto de Venda" },
  w09_desc: {
    en: "A family of point-of-sale fixtures for OPI, built to maintain a premium professional-salon feel inside the mass retail environment.",
    pt: "Uma família de materiais de PDV para a OPI, mantendo a sensação premium de salão profissional dentro do varejo de massa.",
  },
  w10_title: { en: "Wholesale Fixture", pt: "Expositor para Atacado" },
  w10_tag: { en: "Wholesale Channel", pt: "Canal Atacado" },
  w10_desc: {
    en: "A fixture system built for the wholesale channel — high product density, fast restock, and a clear brand block visible across large warehouse aisles.",
    pt: "Sistema de expositores para o canal atacado — alta densidade de produto, reposição rápida e um bloco de marca visível nos grandes corredores.",
  },
  w11_title: { en: "Interactive Totem", pt: "Totem Interativo" },
  w11_tag: { en: "Retail · Interaction", pt: "Varejo · Interação" },
  w11_desc: {
    en: "A point of interaction between brand and consumer. When a bottle is removed the consumer is directed to personalized content — engaging shoppers, providing analytics about the display (pick-ups, hottest zones) and supporting product launches.",
    pt: "Um ponto de interação entre marca e consumidor. Ao retirar uma garrafa, o consumidor é direcionado a conteúdo personalizado — engajando o shopper, fornecendo analytics sobre o display (pick-ups, zonas mais quentes) e apoiando lançamentos.",
  },
  w12_title: { en: "Tramontina Aisle", pt: "Corredor Tramontina" },
  w12_tag: { en: "Category Management", pt: "Gestão de Categoria" },
  w12_desc: {
    en: "A dedicated Tramontina aisle: kitchen, tea & coffee and tabletop categories organised to guide the shopper from inspiration to purchase.",
    pt: "Um corredor dedicado à Tramontina: cozinha, chá & café e mesa posta organizados para levar o shopper da inspiração à compra.",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: keyof typeof translations) => string };
const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("lang") as Lang) || "en";
  });
  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);
  const t = (key: keyof typeof translations) => translations[key]?.[lang] ?? String(key);
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
