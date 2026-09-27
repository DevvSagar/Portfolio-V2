export const personalInfo = {
  name: "Sagar",
  role: "Backend Software Engineer",
  roles: [
    "Backend Software Engineer",
    "Distributed Systems Architect",
    "Python & FastAPI Specialist",
    "Golang & Microservices Engineer",
    "High-Throughput API Architect"
  ],
  email: "devvsag@gmail.com",
  location: "India",
  status: "Available for High-Impact Backend Roles",
  bio: "DSA builds the mind. Backend builds the machine. Together, they’re lethal.",
  about: "Backend Software Engineer specializing in DSA, high-concurrency systems, and high-throughput services. Building robust APIs and distributed systems with Go, Python, and JavaScript, with a strong focus on algorithms, advanced relational databases, system design, and asynchronous programming. Focused on clean, strongly typed code and reliable, production-grade engineering.",
  github: "https://github.com/DevvSagar",
  linkedin: "https://www.linkedin.com/in/devvsag/",
  twitter: "https://x.com/devvxsagar",
  discord: "https://discord.com/users/devvx.",
  discordUsername: "devvx.",
  blog: "https://hashnode.com",
  hashnode: "https://hashnode.com",
  devlogUrl: "https://github.com/DevvSagar/Devlog",
  website: "https://devvx.in"
};

export const techStackData = [
  {
    category: "Core & Languages",
    icon: "💻",
    technologies: [
      {
        name: "PYTHON",
        version: "v3.12",
        icon: "python",
        bg: "bg-[#2563eb]",
        textColor: "text-white",
        desc: "Strictly typed asynchronous Python 3.12+, generators, concurrency with asyncio and uvloop event loops.",
        usage: "Core language for microservices and API gateways."
      },
      {
        name: "GOLANG",
        version: "v1.22",
        icon: "golang",
        bg: "bg-[#00add8]",
        textColor: "text-white",
        desc: "High-concurrency systems programming, goroutines, channels, microservices, and blazing-fast compiled network services.",
        usage: "Low-latency microservices and high-throughput concurrent backends."
      },
      {
        name: "SQL",
        version: "SQL:2023",
        icon: "database",
        bg: "bg-[#336791]",
        textColor: "text-white",
        desc: "Complex query optimization, indexing strategies (B-Tree, GIN), CTEs, and window functions.",
        usage: "Relational querying and database performance tuning."
      },
      {
        name: "JAVASCRIPT",
        version: "ES2024 / Node 20",
        icon: "javascript",
        bg: "bg-[#f7df1e]",
        textColor: "text-black",
        desc: "ES6+ asynchronous runtime, V8 event loop mechanics, Node.js microservices, and serverless compute scripting.",
        usage: "Server-side runtimes, asynchronous automation, and backend tooling."
      }
    ]
  },
  {
    category: "Frameworks",
    icon: "⚡",
    technologies: [
      {
        name: "FASTAPI",
        version: "v0.111",
        icon: "fastapi",
        bg: "bg-[#059669]",
        textColor: "text-white",
        desc: "Asynchronous REST & WebSocket APIs, automatic OpenAPI docs, and dependency injection architecture.",
        usage: "Primary Python framework for high-throughput production services."
      },
      {
        name: "GIN",
        version: "v1.10",
        icon: "gin",
        bg: "bg-[#0284c7]",
        textColor: "text-white",
        desc: "Martini-like Go HTTP web framework featuring fast routing, middleware chaining, and JSON validation.",
        usage: "High-performance Go microservices and low-latency API gateways."
      },
      {
        name: "CHI",
        version: "v5.0",
        icon: "chi",
        bg: "bg-[#7c3aed]",
        textColor: "text-white",
        desc: "Lightweight, idiomatic and composable router for building Go HTTP services with context propagation.",
        usage: "Modular Go HTTP microservices and middleware routing."
      }
    ]
  },
  {
    category: "Databases",
    icon: "🗄️",
    technologies: [
      {
        name: "POSTGRESQL",
        version: "v16.3",
        icon: "postgresql",
        bg: "bg-[#2563eb]",
        textColor: "text-white",
        desc: "ACID transactions, JSONB document querying, partitioned tables, and connection pooling via PgBouncer.",
        usage: "Primary relational storage for critical transactions."
      },
      {
        name: "MONGODB",
        version: "v7.0",
        icon: "mongodb",
        bg: "bg-[#16a34a]",
        textColor: "text-white",
        desc: "Document store for semi-structured payloads, aggregation pipelines, and high-velocity logs.",
        usage: "NoSQL store for dynamic audit logs & events."
      },
      {
        name: "FIREBASE",
        version: "v10.12",
        icon: "firebase",
        bg: "bg-[#ea580c]",
        textColor: "text-white",
        desc: "Firestore document collections, real-time reactive listeners, Firebase Authentication, and security rules.",
        usage: "Real-time state synchronization, document storage, and reactive client triggers."
      },
      {
        name: "SUPABASE",
        version: "v2.43",
        icon: "supabase",
        bg: "bg-[#059669]",
        textColor: "text-white",
        desc: "PostgreSQL with Row Level Security (RLS), real-time change data capture, auto-generated REST/GraphQL APIs, and Edge Functions.",
        usage: "Serverless relational database with fine-grained RLS and real-time streaming."
      }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    technologies: [
      {
        name: "AWS",
        version: "Cloud v2",
        icon: "aws",
        bg: "bg-[#1f2937]",
        textColor: "text-[#f59e0b]",
        desc: "EC2 compute, S3 object storage, RDS managed databases, IAM security roles, and CloudWatch.",
        usage: "Scalable cloud infrastructure hosting & managed services."
      },
      {
        name: "DOCKER",
        version: "v26.1",
        icon: "docker",
        bg: "bg-[#0284c7]",
        textColor: "text-white",
        desc: "Multi-stage minimal containerization, non-root security profiles, and docker-compose orchestration.",
        usage: "Reproducible container runtimes & isolated environments."
      },
      {
        name: "OBSERVABILITY",
        version: "Prometheus v2.52",
        icon: "observability",
        bg: "bg-[#7c3aed]",
        textColor: "text-white",
        desc: "Prometheus metrics collection, Grafana visualization dashboards, and structured JSON telemetry logs.",
        usage: "Real-time production health monitoring, alerting, and APM tracing."
      },
      {
        name: "NETWORKING & SECURITY",
        version: "TLS 1.3 / HTTP/2",
        icon: "networking & security",
        bg: "bg-[#dc2626]",
        textColor: "text-white",
        desc: "VPC networking, reverse proxy configuration (Nginx), TLS/SSL termination, and security hardening.",
        usage: "Zero-trust network isolation and transport layer encryption."
      },
      {
        name: "CI/CD",
        version: "Actions v4",
        icon: "cicd",
        bg: "bg-[#059669]",
        textColor: "text-white",
        desc: "Automated test suites, linter pipelines, container builds, and zero-downtime deployment workflows.",
        usage: "Continuous integration, automated QA validation, and continuous delivery."
      },
      {
        name: "LINUX",
        version: "Kernel 6.8+",
        icon: "linux",
        bg: "bg-[#ea580c]",
        textColor: "text-white",
        desc: "POSIX shell scripting, systemd service management, kernel tuning, and network diagnostics.",
        usage: "Production server environments, daemon lifecycle, and kernel orchestration."
      }
    ]
  },
  {
    category: "Version Control",
    icon: "🔀",
    technologies: [
      {
        name: "GIT",
        version: "v2.45",
        icon: "git",
        bg: "bg-[#f05032]",
        textColor: "text-white",
        desc: "Distributed version control system, interactive rebasing, branch strategies, and commit history management.",
        usage: "Local source code versioning, commit signing, and feature branch isolation."
      },
      {
        name: "GITHUB",
        version: "CLI v2.50",
        icon: "github",
        bg: "bg-[#181717]",
        textColor: "text-white",
        desc: "Automated GitHub Actions CI/CD workflows, pull request reviews, branch protection rules, and releases.",
        usage: "Collaborative code repository hosting, team code review, and release distribution."
      }
    ]
  }
];

export const projectsData = [
  {
    id: "devlog",
    title: "Devlog",
    status: "Ongoing",
    icon: "notebook",
    tagline: "A modern, high-performance blogging platform and developer journal built with FastAPI, PostgreSQL, and Jinja2 templates.",
    sectionTitle: "What I Am Doing With This",
    tags: ["FastAPI", "Python", "PostgreSQL", "Redis", "AWS Boto3", "Docker", "NGINX", "Pytest", "Jinja2"],
    summary: [
      "Demonstrating production-grade Python & FastAPI backend engineering.",
      "Engineered a scalable developer journal with PostgreSQL and Jinja2.",
      "Implementing Redis caching and async queues to scale high-concurrency throughput."
    ],
    github: "https://github.com/DevvSagar/Devlog",
    liveDemo: "https://github.com/DevvSagar/Devlog"
  },
  {
    id: "scribo-ai",
    title: "Scribo AI",
    status: "Completed",
    icon: "audio-lines",
    tagline: "AI meeting summarization and automated meeting scheduler platform.",
    sectionTitle: "What I Solved With This",
    tags: [
      "React + Vite",
      "Node.js + Express",
      "AssemblyAI",
      "Rate Limiting",
      "Tailwind CSS",
      "Vercel + Render"
    ],
    summary: [
      "Automated manual note-taking after experiencing grueling 7+ hour onboarding meetings.",
      "AI pipeline that processes audio & video into structured summaries and action items.",
      "Engineered an automated scheduler syncing meetings across Zoom, Google Meet, and Teams."
    ],
    github: "https://github.com/DevvSagar/scribo",
    liveDemo: "https://github.com/DevvSagar/scribo"
  }
];

export const experienceData = [
  {
    role: "Software Engineer Intern",
    company: "Growigh",
    type: "Internship",
    duration: "Jul 2026 - Present",
    period: "3 mos",
    location: "Greater Bengaluru Area · Remote",
    logoColor: "bg-[#eab308]",
    logoLetter: "G",
    description: [
      "Debugged critical backend issues across FastAPI services, tracing root causes (including a broken migration that once wiped DB tables) instead of just patching symptoms.",
      "Engineered and maintained high-throughput RESTful endpoints, database schemas, and asynchronous background worker pipelines.",
      "Collaborated on backend architecture performance tuning, query optimization, and production issue triage."
    ],
    skills: ["Python", "FastAPI", "PostgreSQL", "Database Migrations", "Backend Engineering"]
  },
  {
    role: "Customer Service Specialist",
    company: "Etech Global Services",
    type: "Full-time",
    duration: "May 2026 - Jul 2026",
    period: "3 mos",
    location: "Kota, Rajasthan, India · Remote",
    logoColor: "bg-[#0284c7]",
    logoLetter: "Etech",
    description: [
      "Customer Associate Manager at Etech Global Services, handling inbound customer support calls for clients across the US.",
      "Assisted customers with their queries, provided accurate solutions, and resolved complex customer issues while maintaining high service quality."
    ],
    skills: ["Customer Service", "US Client Relations", "Problem Solving", "Communication"]
  },
  {
    role: "Customer Service Specialist",
    company: "Etech Global Services",
    type: "Full-time",
    duration: "Nov 2025 - Jan 2026",
    period: "3 mos",
    location: "Kota, Rajasthan, India · Remote",
    logoColor: "bg-[#0284c7]",
    logoLetter: "Etech",
    description: [
      "Customer Associate Manager at Etech Global Services, handling inbound customer support calls for clients across the US.",
      "Assisted customers with their queries, provided accurate solutions, and ensured consistent customer satisfaction."
    ],
    skills: ["Customer Service", "Client Communication", "Conflict Resolution"]
  }
];

