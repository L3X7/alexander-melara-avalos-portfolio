import { Tech } from "@/features/tech-stack/types/tech";

export const allTechStack: Tech[] = [
    //BACKEND
    {
        category: "backend",
        level: "Intermediate",
        name: "NestJS",
        description: "Scalable, server-side Node.js framework.",
        iconSrc: "/icons/nestjs.svg",
        iconClass: "h-7 w-7 bg-[#E0234E] transition-colors",

    },
    {
        category: "backend",
        level: "Advanced",
        name: ".NET",
        description: "High-performance cross-platform development.",
        iconSrc: "/icons/dotnet.svg",
        iconClass: "h-7 w-7 bg-[#512BD4] transition-color",

    },
    {
        category: "backend",
        level: "Intermediate",
        name: "Spring Boot",
        description: "High-performance cross-platform development.",
        iconSrc: "/icons/spring.svg",
        iconClass: "h-7 w-7 bg-[#6DB33F] transition-color",

    },
    //CLOUD
    {
        category: "cloud",
        level: "Intermediate",
        name: "Docker",
        description: "Containerization for consistent deployment.",
        iconSrc: "/icons/docker.svg",
        iconClass: "h-7 w-7 bg-[#2496ED] transition-colors",

    },
    {
        category: "cloud",
        level: "Intermediate",
        name: "Kubernetes",
        description: "Automated container orchestration at scale.",
        iconSrc: "/icons/kubernetes.svg",
        iconClass: "h-7 w-7 bg-[#326CE5] transition-color",

    },
    {
        category: "cloud",
        level: "Intermediate",
        name: "AWS",
        description: "Comprehensive enterprise cloud infrastructure.",
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
        description: "Frontend cloud for edge deployment.",
        iconSrc: "/icons/vercel.svg",
        iconClass: "h-7 w-7 bg-[#000000] transition-color dark:bg-white"

    },

    //FROTEND

    {
        category: "frontend",
        level: "Intermediate",
        name: "Next.js",
        description: "he React framework for the web.",
        iconSrc: "/icons/nextdotjs.svg",
        iconClass: "h-7 w-7 bg-[#000000] transition-colors dark:bg-white",

    },
    {
        category: "frontend",
        level: "Advanced",
        name: "Angular",
        description: "High-performance cross-platform development.",
        iconSrc: "/icons/angular.svg",
        iconClass: "h-7 w-7 bg-[#0F0F11] transition-color dark:bg-white",

    },
    {
        category: "frontend",
        level: "Intermediate",
        name: "Tailwind CSS",
        description: "Utility-first API-driven styling.",
        iconSrc: "/icons/tailwindcss.svg",
        iconClass: "h-7 w-7 bg-[#06B6D4] transition-color dark:bg-white",
    },
]