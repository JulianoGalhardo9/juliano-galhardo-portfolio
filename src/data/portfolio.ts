export const skills = [
  // Backend
  { name: "C# / .NET", level: 85, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Clean Architecture / CQRS", level: 80, category: "backend" },
  { name: "REST APIs & Mensageria", level: 82, category: "backend" },
  
  // Frontend
  { name: "React (TypeScript)", level: 78, category: "frontend" },
  { name: "JavaScript / TypeScript", level: 85, category: "frontend" },
  
  // Bancos de Dados
  { name: "SQL Server & EF Core", level: 80, category: "database" },
  { name: "PostgreSQL / MySQL", level: 78, category: "database" },
  
  // Ferramentas / DevOps
  { name: "AWS (Cloud-Native)", level: 75, category: "tools" },
  { name: "Docker & LocalStack", level: 80, category: "tools" },
  { name: "Git & GitHub Actions (CI/CD)", level: 82, category: "tools" },
];

export const projects = [
  {
    id: 1,
    title: "AWS Lab Platform",
    description: "Plataforma distribuída cloud-native de microsserviços orientada a eventos. Possui processamento assíncrono de arquivos na AWS, CQRS via MediatR, testes com xUnit e emulação local com LocalStack.",
    tech: ["C# (.NET 10)", "AWS (ECS/Lambda)", "Docker", "SQS/SNS", "EF Core", "xUnit"],
    github: "https://github.com/JulianoGalhardo9/aws-lab-platform", // Ajuste com o link real do repo
    category: "backend",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Cripto Arbitrage",
    description: "Plataforma Full Stack de arbitragem de criptomoedas em tempo real. Integra APIs de múltiplas exchanges simultaneamente, utilizando Worker Services no backend e atualização em tempo real no frontend.",
    tech: ["C# (.NET 9)", "Angular 18", "MariaDB", "Docker", "Serilog"],
    github: "https://github.com/JulianoGalhardo9/CriptoArbitrage",
    category: "fullstack",
    icon: "🪙",
  },
  {
    id: 3,
    title: "MimoDigital (Hackathon)",
    description: "PWA Full Stack para criação e envio interativo de talões de cupons digitais. Desenvolvido no Hackathon do Servidor dos Programadores, utilizando CQRS no backend e deploy containerizado.",
    tech: ["C# (.NET 9)", "React", "TypeScript", "PostgreSQL", "Docker", "Vite"],
    github: "https://github.com/JulianoGalhardo9/MimoDigital",
    category: "fullstack",
    icon: "🎁",
  },
];

export const timeline = [
  {
    year: "2026–Presente",
    title: "Engenharia de Software (FIAP) & Especialização Avançada",
    desc: "Transição acadêmica com foco em Engenharia de Software robusta (GPA 8,9). Dedicação intensiva ao estudo de microsserviços distribuídos, arquiteturas serverless, mensageria assíncrona, testes automatizados (xUnit) e design patterns avançados (CQRS, DDD) no ecossistema .NET e AWS.",
  },
  {
    year: "2025–2026",
    title: "Ciência da Computação (Mauá) & Imersão Backend",
    desc: "Início da graduação em Ciência da Computação (GPA 8,2), consolidando bases fortes de lógica, Programação Orientada a Objetos (POO), estruturas de dados e bancos de dados relacionais. Paralelamente, expandi os estudos autodidatas para o desenvolvimento backend com Node.js e os fundamentos do ecossistema C#/.NET.",
  },
  {
    year: "2025",
    title: "Primeiros Passos & Certificações Fundamentais",
    desc: "Início oficial da jornada na tecnologia através de cursos de alta densidade. Conclusão do HarvardX CS50P (introdução à ciência da computação com Python), além de certificações focadas em Lógica de Programação, Git/GitHub pela FGV e os primeiros fundamentos de C# da Microsoft.",
  },
];

export const stack = [
  // Backend Core
  { label: "C# / .NET", color: "#512bd4" },
  { label: "Node.js", color: "#68a063" },
  
  // Arquitetura e Nuvem
  { label: "AWS", color: "#ff9900" }, 
  { label: "Docker", color: "#2496ed" }, 
  { label: "Clean Architecture", color: "#34d399" },

  // Bancos de Dados
  { label: "SQL / EF Core", color: "#cc2929" },
  
  // Frontend
  { label: "React", color: "#61dafb" }, 
];