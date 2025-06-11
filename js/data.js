const portfolioData = {
    about: {
        name: "Your Name",
        title: "DevOps Engineer",
        bio: `Hello! I'm a passionate DevOps engineer with expertise in cloud infrastructure,
automation, and continuous integration/deployment. I love building scalable
systems and optimizing development workflows.

Experience: 3+ years in DevOps and Infrastructure
Location: Remote / Your City
Education: Bachelor's in Computer Science

I'm passionate about:
• Cloud infrastructure (AWS, Azure, GCP)
• Infrastructure as Code (Terraform, Ansible)
• Container orchestration (Docker, Kubernetes)
• CI/CD pipelines and automation
• Monitoring and observability`
    },
    
    skills: {
        technical: [
            "Cloud Platforms: AWS, Azure, Google Cloud Platform",
            "Infrastructure as Code: Terraform, Ansible, CloudFormation",
            "Containerization: Docker, Kubernetes, Docker Compose",
            "CI/CD: Jenkins, GitLab CI, GitHub Actions, Azure DevOps",
            "Monitoring: Prometheus, Grafana, ELK Stack, Datadog",
            "Scripting: Bash, Python, PowerShell",
            "Version Control: Git, GitLab, GitHub",
            "Operating Systems: Linux (Ubuntu, CentOS, RHEL), Windows Server"
        ],
        tools: [
            "Configuration Management: Ansible, Puppet, Chef",
            "Service Mesh: Istio, Linkerd",
            "Security: HashiCorp Vault, AWS IAM, RBAC",
            "Databases: MySQL, PostgreSQL, MongoDB, Redis",
            "Web Servers: Nginx, Apache, HAProxy"
        ]
    },
    
    projects: [
        {
            name: "Multi-Cloud Infrastructure Automation",
            description: "Designed and implemented Infrastructure as Code solution supporting AWS, Azure, and GCP using Terraform modules. Reduced deployment time by 80% and improved consistency across environments.",
            technologies: ["Terraform", "AWS", "Azure", "GCP", "Ansible"],
            github: "https://github.com/yourusername/multi-cloud-iac"
        },
        {
            name: "Kubernetes CI/CD Pipeline",
            description: "Built complete CI/CD pipeline for microservices deployment on Kubernetes. Includes automated testing, security scanning, and blue-green deployments.",
            technologies: ["Kubernetes", "GitLab CI", "Docker", "Helm", "ArgoCD"],
            github: "https://github.com/yourusername/k8s-cicd"
        },
        {
            name: "Monitoring & Alerting Stack",
            description: "Implemented comprehensive monitoring solution using Prometheus, Grafana, and ELK stack. Created custom dashboards and alert rules for 99.9% uptime.",
            technologies: ["Prometheus", "Grafana", "Elasticsearch", "Logstash", "Kibana"],
            github: "https://github.com/yourusername/monitoring-stack"
        }
    ],
    
    contact: {
        email: "your.email@example.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername",
        twitter: "https://twitter.com/yourusername",
        website: "https://yourwebsite.com"
    },
    
    currentDirectory: "/home/devops",
    fileSystem: {
        "/home/devops": {
            type: "directory",
            contents: ["about.txt", "skills.txt", "projects/", "contact.txt", "resume.pdf"]
        },
        "/home/devops/projects": {
            type: "directory",
            contents: ["project1.md", "project2.md", "project3.md"]
        }
    }
};