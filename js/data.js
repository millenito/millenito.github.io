const portfolioData = {
    about: {
        name: "Lord Maxie Millenito K",
        title: "DevOps Engineer",
        bio: `Hi! I'm a DevOps Engineer and System Engineer with strong experience in backend development, 
cloud infrastructure, and automation. I specialize in Linux/UNIX environments and enjoy 
optimizing performance and scalability in complex systems.

Experience: 7+ years across DevOps, Web Development, and Infrastructure
Location: Jakarta, Indonesia
Education: Bachelor's in Information Systems, Kalbis University

I’m passionate about:
• Cloud infrastructure (Alibaba Cloud, GCP, Huawei Cloud)
• Backend development (PHP, Go, Python)
• Containerization and CI/CD (Docker, Gitlab CI, GitHub Actions, Jenkins)
• Monitoring & logging (Grafana Loki, Sentry, Metabase)
• Automation and scripting (Shell, Python, Pentaho)`,
    },

    skills: {
         technical: [
            "Cloud Platforms: Alibaba Cloud, GCP, Huawei Cloud, Biznet GIO Cloud, Cloudflare",
            `Cloud Managed Services: Load Balancing (CLB/SLB/ALB), Relational Database Service (RDS),\n    Object & Cloud Storage (OSS), Cloudflare R2`,
            "Languages: PHP (Laravel, Yii, CodeIgniter), Go, Python, JavaScript (Vue), Bash/Shell,\n   Dart (Flutter), HTML/CSS",
            "Databases: Oracle, PostgreSQL, MySQL",
            "Scripting: Bash, Shell, Python",
            "Operating Systems: Linux (Ubuntu, CentOS, RHEL), Windows Server"
        ],
        tools: [
            "Monitoring & Reporting: Grafana, Loki, Sentry, Goaccess, Metabase, Pentaho Spoon",
            "CI/CD Tools: GitHub Actions, Jenkins, GitLab CI",
            "Containerization: Docker, Docker Compose",
            "Messaging & Queues: RabbitMQ, Redis",
            "Web Servers: Nginx, Apache, Caddy, Reverse Proxies",
        ]
    },

    projects: [
        {
            name: "Zolog",
            description: `A multi-tenant logistics and invoicing system with connote entry, delivery tracking,
   and dynamic reporting. Built scalable APIs and dashboards, 
   deployed in a containerized environment.`,
            technologies: ["Laravel", "Go", "Docker", "Redis", "GitHub Actions", "Cloudflare R2"],
            site: "https://www.zolog.id",
        },
    ],

    contact: {
        email: "metrinito@gmail.com",
        linkedin: "https://linkedin.com/in/millenito",
        github: "https://github.com/millenito",
        website: "https://millenito.github.io"
    },
    education: {
        degree: "Bachelor's in Information Systems",
        institution: "Kalbis University",
        location: "Jakarta, Indonesia",
        year: "2017"
    },
    certifications: [
        "Cloud Security - Best Practice to Protect Your Servers on Alibaba Cloud (Alibaba, 2024)",
        "Cloud Computing - Operate and Manage a Cloud Server (Alibaba Cloud, 2024)",
        "Elastic Cloud Infrastructure: Containers and Services (Google Cloud, 2019)",
        "Essential Google Cloud Infrastructure: Core Services (Google Cloud, 2019)"
    ],
    currentDirectory: "/home/guest",
    fileSystem: {
        "/home/guest": {
            type: "directory",
            contents: ["about.txt", "skills.txt", "projects/", "contact.txt"]
        },
        "/home/guest/projects": {
            type: "directory",
            contents: ["zolog.md"]
        }
    }
};
