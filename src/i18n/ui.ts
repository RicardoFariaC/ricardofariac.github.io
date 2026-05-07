export const languages = { pt: 'PT', en: 'EN' } as const;
export type Lang = keyof typeof languages;

export const ui = {
  pt: {
    // Masthead
    'masthead.vol':    'Vol. I · No. 1',
    'masthead.center': 'R. F. Costa · Registros Pessoais',
    'masthead.right':  'São José dos Campos · MMXXVI',

    // Navigation labels
    'nav.back_home':   '← R. F. Costa',
    'nav.back_blog':   '← O Diário',
    'nav.blog_center': 'O Diário',
    'nav.blog_right':  'Atualizado semanalmente, mais ou menos',

    // Homepage
    'home.eyebrow':    'Uma carta de apresentação',
    'home.role':       'Engenheiro de Computação & Dados · Mestrando em Engenharia de Sistemas Espaciais',
    'home.abstract':
      'Sou engenheiro de computação atuando com infraestrutura de dados e engenharia de sistemas. ' +
      'Formado em software e hardware, lapidado pela estatística, e presentemente redirecionado para a área de engenharia de sistemas espaciais no mestrado — ' +
      'construo pipelines, modelos e pequenas máquinas Linux que transformam dados ruidosos em decisões.',
    's1.title': 'Sobre o meu trabalho',
    's1.p1':
      'Meu centro de gravidade é a <em>engenharia de dados</em>: projetar os sistemas pouco glamorosos, mas fundamentais, ' +
      'que movem dados do sensor até a decisão. Sou mais útil quando um problema mistura ' +
      'fontes de dados heterogêneas, modelagem estatística e a disciplina de manter as coisas funcionando em sistemas Linux.',
    's1.p2':
      'Ultimamente tenho estudado Engenharia de Sistemas, o que me forçou a ter mais respeito por ' +
      'orçamentos e documentação de projetos. A prática de construção de softwares tem sido mais' +
      'flexível: menos suposições, mais atenção aos detalhes e processos de desenvolvimento mais robustos.',
    's2.title': 'Minhas habilidades &amp; instrumentos',
    's3.title': 'Minha formação',
    's3.ita.period': '2026 — atual',
    's3.ita.degree': 'M.Sc., Ciência e Tecnologia Espacial — Engenharia de Sistemas',
    's3.ita.org': 'Instituto Tecnológico de Aeronáutica (ITA)',
    's3.ita.note': 'Foco em Engenharia de Sistemas para segurança e proteção; Ciência de Dados, Análise de Dados, Categorização.',
    's3.univap.period': '2021 — 2025',
    's3.univap.degree': 'B.Eng., Engenharia de Computação',
    's3.univap.org': 'Universidade do Vale do Paraíba (Univap)',
    's3.univap.note':
      'Ênfase em Processamento de Sinais, Sistemas Distribuídos e Estatística Aplicada. ' +
      'Projeto Final sobre Geração de Diagramas baseada em Análise de Segurança e Proteção de Sistemas Críticos (STAMP).',
    's4.title': 'Experiência',
    's4.job1.period': '2024 — atual',
    's4.job1.title': 'Analista de Sistemas',
    's4.job1.note':
      'Arquitetura de pipelines, cargas de trabalho em lote &amp; streaming, contratos de qualidade de dados, ' +
      'e o trabalho constante de tornar Dashboards confiáveis.',
    's4.job2.period': '2023 — 2024',
    's4.job2.title': 'Estagiário em Engenharia de Software',
    's4.job2.note':
      'Serviços Backend e Ferramentas de Observabilidade. Primeiro contato sério com Linux em produção.',
    's5.title': 'O que estou fazendo agora',
    's5.item1': 'Escrevendo minha dissertação sobre Engenharia de Sistemas e Análise de Dados aplicada à análise de segurança de sistemas críticos.',
    's5.item2': 'Mantendo um homelab Proxmox VE; documentando as partes que doem e que funcionam bem.',
    's5.item3': 'Lendo <em>Statistical Rethinking</em>.',
    's5.item4': 'Publicando ensaios no <a href="/{lang}/blog" class="accent-link">diário</a>.',

    // Blog listing
    'blog.eyebrow':   'Periódico · entradas &amp; observações',
    'blog.title':     'O Caderno\nQuieto',
    'blog.subtitle':
      'Notas de longa forma sobre pipelines de dados, estatística, Linux, e o lento acúmulo do mestrado. ' +
      'Escritas para mim, publicadas caso sejam úteis a mais alguém.',
    'blog.read_link': 'Ler entrada →',
    'blog.end':       '— fim do volume atual —',
    'blog.back':      '← Capa',
    'blog.min_read':  'min',
    'blog.empty':     'Nenhuma entrada publicada neste idioma ainda.',

    // Footer
    'footer.correspondence': 'Correspondência',
    'footer.colophon':       'Colofão',
    'footer.set_in':         'Tipografado em',
    'footer.built_with':     'Construído com Astro.',
    'footer.last_revised':   'Última revisão,',

    // UnavailableNotice
    'notice.unavailable': 'Este post ainda não está disponível em português. Você está lendo a versão em inglês.',
    'notice.switch':      'Ver em inglês',

    // SkillTable
    'skill.languages':  'Linguagens',
    'skill.data':       'Dados',
    'skill.statistics': 'Estatística',
    'skill.ai_ml':      'IA / ML',
    'skill.systems':    'Sistemas',
    'skill.msc':        'Mestrado',
  },
  en: {
    'masthead.vol':    'Vol. I · No. 1',
    'masthead.center': 'R. F. Costa · Personal Records',
    'masthead.right':  'São José dos Campos · MMXXVI',

    'nav.back_home':   '← R. F. Costa',
    'nav.back_blog':   '← The Blog',
    'nav.blog_center': 'The Blog',
    'nav.blog_right':  'Updated weekly, ish',

    'home.eyebrow': 'A letter of introduction',
    'home.role':    'Computer & Data Engineer · MSc in Space Systems Engineering',
    'home.abstract':
      'I am a computer engineer working with data infrastructure and systems engineering. ' +
      'Trained in software and hardware, sharpened by statistics, and presently rerouting ' +
      'into space systems engineering at the master\'s level — I build pipelines, models, ' +
      'and small Linux machines that turn noisy data into decisions.',
    's1.title': 'On my work',
    's1.p1':
      'My center of gravity is <em>data engineering</em>: designing the unglamorous but ' +
      'load-bearing systems that move data from sensor to decision. I am most useful when ' +
      'a problem mixes heterogeneous data sources, statistical modeling, and the discipline ' +
      'of running things reliably on Linux systems.',
    's1.p2':
      'Lately I have been studying Systems Engineering, which has forced a healthier respect ' +
      'for budgets and project documentation. The practice of building software has become ' +
      'more flexible: fewer assumptions, more attention to detail, and more robust ' +
      'development processes.',
    's2.title': 'My skills &amp; instruments',
    's3.title': 'My education',
    's3.ita.period':   '2026 — present',
    's3.ita.degree':   'M.Sc., Space Science &amp; Technology — Systems Engineering',
    's3.ita.org':      'Instituto Técnologico de Aeronáutica (ITA)',
    's3.ita.note':     'Focus on Systems Engineering for safety and security; Data Science, Data Analysis, Categorization.',
    's3.univap.period': '2021 — 2025',
    's3.univap.degree': 'B.Eng., Computer Engineering',
    's3.univap.org':    'Universidade do Vale do Paraíba (Univap)',
    's3.univap.note':
      'Emphasis on Signal Processing, Distributed Systems, and Applied Statistics. ' +
      'Final Project on Diagram Generation based on Safety and Security Analysis of Critical Systems (STAMP).',
    's4.title': 'Experience',
    's4.job1.period': '2024 — present',
    's4.job1.title':  'System Analyst',
    's4.job1.note':
      'Pipeline architecture, batch &amp; streaming workloads, data quality contracts, ' +
      'and the steady work of making Dashboards trustworthy.',
    's4.job2.period': '2023 — 2024',
    's4.job2.title':  'Software Engineering Intern',
    's4.job2.note':   'Backend Services and Observability Tooling. First serious encounter with Linux in production.',
    's5.title': 'What I\'m doing now',
    's5.item1': 'Writing my dissertation on Systems Engineering and Data Analysis applied to safety analysis of critical systems.',
    's5.item2': 'Maintaining a Proxmox VE homelab; documenting the parts that hurt and the parts that work well.',
    's5.item3': 'Reading <em>Statistical Rethinking</em>.',
    's5.item4': 'Posting essays at <a href="/{lang}/blog" class="accent-link">the blog</a>.',

    'blog.eyebrow':  'Periodical · entries &amp; observations',
    'blog.title':    'The Quiet\nNotebook',
    'blog.subtitle':
      'Long-form notes on data pipelines, statistics, Linux, and the ' +
      'slow accumulation of master\'s coursework. Written for myself, ' +
      'published in case it is useful to anyone else.',
    'blog.read_link': 'Read entry →',
    'blog.end':       '— end of current volume —',
    'blog.back':      '← Cover',
    'blog.min_read':  'min',
    'blog.empty':     'No entries published in this language yet.',

    'footer.correspondence': 'Correspondence',
    'footer.colophon':       'Colophon',
    'footer.set_in':         'Set in',
    'footer.built_with':     'Built with Astro.',
    'footer.last_revised':   'Last revised,',

    'notice.unavailable': 'This post is not yet available in English. You are reading the Portuguese version.',
    'notice.switch':      'View in Portuguese',

    'skill.languages':  'Languages',
    'skill.data':       'Data',
    'skill.statistics': 'Statistics',
    'skill.ai_ml':      'AI / ML',
    'skill.systems':    'Systems',
    'skill.msc':        'Msc',
  },
} as const;

export type UIKey = keyof typeof ui['pt'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui['pt'][key];
  };
}
