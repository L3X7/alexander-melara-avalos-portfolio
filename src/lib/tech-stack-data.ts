import { Tech } from "@/features/tech-stack/types/tech";

export const allTechStack: Tech[] = [
    //BACKEND
    {
        category: "backend",
        level: "Intermediate",
        name: "NestJS",
        description: "Progressive Node.js framework for scalable server-side apps.",
        iconSrc: "/icons/nestjs.svg",
        iconClass: "h-7 w-7 bg-[#E0234E] transition-colors",

    },
    {
        category: "backend",
        level: "Advanced",
        name: ".NET",
        description: "High-performance, unified platform for any workload.",
        iconSrc: "/icons/dotnet.svg",
        iconClass: "h-7 w-7 bg-[#512BD4] transition-color",

    },
    {
        category: "backend",
        level: "Intermediate",
        name: "Spring Boot",
        description: "The standard for production-grade enterprise Java.",
        iconSrc: "/icons/spring.svg",
        iconClass: "h-7 w-7 bg-[#6DB33F] transition-color",

    },
    //CLOUD
    {
        category: "cloud",
        level: "Intermediate",
        name: "AWS",
        description: "The leading cloud platform for scalable infrastructure",
        nameTextColor: "#FF9900"

    },
    {
        category: "cloud",
        level: "Intermediate",
        name: "Digital ocean",
        description: "Developer-friendly cloud computing.",
        iconSrc: "/icons/digitalocean.svg",
        iconClass: "h-7 w-7 bg-[#0080FF] transition-color"

    },
    {
        category: "cloud",
        level: "Intermediate",
        name: "Vercel",
        description: "The frontend cloud for Next.js and React.",
        iconSrc: "/icons/vercel.svg",
        iconClass: "h-7 w-7 bg-[#000000] transition-color dark:bg-white"

    },
    {
        category: "cloud",
        level: "Familiar",
        name: "Hetzner",
        description: "A powerful German cloud provider known for its exceptional price-to-performance ratio",
        iconSrc: "/icons/hetzner.svg",
        iconClass: "h-7 w-7 bg-[#D50C2D] transition-color"

    },

    //FROTEND

    {
        category: "frontend",
        level: "Intermediate",
        name: "Next.js",
        description: "The React framework for production-grade apps.",
        iconSrc: "/icons/nextdotjs.svg",
        iconClass: "h-7 w-7 bg-[#000000] transition-colors dark:bg-white",

    },
    {
        category: "frontend",
        level: "Advanced",
        name: "Angular",
        description: "Enterprise-scale framework for robust applications.",
        iconSrc: "/icons/angular.svg",
        iconClass: "h-7 w-7 bg-[#000000] transition-color dark:bg-white",

    },

    //MOBILE
    {
        category: "mobile",
        level: "Intermediate",
        name: "Android (Java/Kotlin)",
        description: "Native performance with deep system integration.",
        iconSrc: "/icons/android.svg",
        iconClass: "h-7 w-7 bg-[#3DDC84] transition-color",

    },
    {
        category: "mobile",
        level: "Intermediate",
        name: "Flutter",
        description: "High-performance apps from a single codebase.",
        iconSrc: "/icons/flutter.svg",
        iconClass: "h-7 w-7 bg-[#02569B] transition-color",
    },
    {
        category: "mobile",
        level: "Familiar",
        name: "React Native",
        description: "Cross-platform apps using the React ecosystem.",
        iconSrc: "/icons/react.svg",
        iconClass: "h-7 w-7 bg-[#61DAFB] transition-color",
    },

    //DATABASE
    {
        category: "database",
        level: "Intermediate",
        name: "SQL Server",
        description: "A robust RDBMS with the .NET ecosystem.",
        iconSrc: "/icons/database.svg",
        iconClass: "h-7 w-7 bg-[#000000] transition-color dark:bg-white",

    },
    {
        category: "database",
        level: "Intermediate",
        name: "PostgreSQL",
        description: "The world's most advanced open-source database.",
        iconSrc: "/icons/postgresql.svg",
        iconClass: "h-7 w-7 bg-[#4169E1] transition-color",
    },
    {
        category: "database",
        level: "Intermediate",
        name: "MySQL",
        description: "Fast, reliable, and widely-used standard.",
        iconSrc: "/icons/mysql.svg",
        iconClass: "h-7 w-7 bg-[#4479A1] transition-color",
    },
    {
        category: "database",
        level: "Intermediate",
        name: "MongoDB",
        description: "Flexible, document-based NoSQL scaling.",
        iconSrc: "/icons/mongodb.svg",
        iconClass: "h-7 w-7 bg-[#47A248] transition-color",
    },
    //DEVOPS
    {
        category: "devops",
        level: "Intermediate",
        name: "Docker",
        description: "Standard for containerizing applications.",
        iconSrc: "/icons/docker.svg",
        iconClass: "h-7 w-7 bg-[#2496ED] transition-colors",

    },
    {
        category: "devops",
        level: "Intermediate",
        name: "Kubernetes",
        description: "Orchestration for scaling containerized apps.",
        iconSrc: "/icons/kubernetes.svg",
        iconClass: "h-7 w-7 bg-[#326CE5] transition-color",

    },

    //UI & DESIGN
    {
        category: "ui & design",
        level: "Intermediate",
        name: "Tailwind CSS",
        description: "Utility-first framework for rapid UI development.",
        iconSrc: "/icons/tailwindcss.svg",
        iconClass: "h-7 w-7 bg-[#06B6D4] transition-color",
    },
    {
        category: "ui & design",
        level: "Intermediate",
        name: "Shadcn UI",
        description: "Re-usable components built with Radix UI and Tailwind.",
        iconSrc: "/icons/shadcnui.svg",
        iconClass: "h-7 w-7 bg-[#000000] transition-colors dark:bg-white",

    },
]