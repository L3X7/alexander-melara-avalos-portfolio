import { Project } from "@/features/projects/types/project";

export const allProjects: Project[] = [
    {
        id: 1,
        title: "Zirkl0s",
        description:
            "A Circular Economy Logistics Platform focusing on sustainability and resource recovery. Built to optimize routes for material collection and track lifecycle metrics.",
        localeKey: "description",
        url: "/project-detail?id=1",
        role: "Lead Software Engineer",
        timeline: "Jan 2026 - Present",
        tags: [
            "frontend",
            "backend",
            "nextjs",
            "nestjs",
            "in development"
        ],
        detailTopics: [
            {
                numberOrder: "01",
                title: "The Challenge",
                description: "The industrial circular economy is currently fragmented, relying on opaque supply chains and manual coordination (spreadsheets, emails) to trade recoverable resources. Businesses struggle to find reliable partners for waste valorization, leading to inefficient logistics and lost revenue. The goal was to replace these disconnected processes with a unified, transparent marketplace that simplifies complex B2B negotiations while providing verifiable sustainability metrics."
            },
            {
                numberOrder: "02",
                title: "The Solution",
                description: "I engineered a robust B2B platform focused on trust and traceability. The backend architecture, built with NestJS and Prisma, manages complex state machines for multi-stage negotiations and order fulfillment. On the frontend, we utilized Next.js to create a clean, data-dense interface that allows logistics managers to visualize material flows instantly. The system abstracts the complexity of circular logistics, presenting users with actionable insights on resource recovery rates and transaction status in real-time."
            }
        ],
        keyFeaturesNumberOrder: "03",
        keyFeatures: [
            {
                title: "Smart Negotiations",
                description: "Real-time offer and counter-offer system with automated state validation."
            },
            {

                title: "Lifecycle Tracking",
                description: "End-to-end visibility of material recovery, from generation to re-processing."
            }
        ],
        imagesNumberOrder: "04",
        images: [
            {
                url: "/images/projects/project-1-1.png",
                title: "Index",
                type: "desktop",
                mainImage: true
            },
            {
                url: "/images/projects/project-1-2.png",
                title: "Crud",
                type: "desktop",
                mainImage: false
            }
        ],
    },
    {
        id: 2,
        title: "Service conecta",
        description: "A specialized service-on-demand platform connecting verified providers with corporate and individual clients.",
        localeKey: "description",
        url: "/project-detail?id=2",
        role: "Lead Software Engineer",
        timeline: "Jun 2025 - Present",
        tags: [
            "mobile",
            "backend",
            "flutter",
            "nestjs",
            "in development"
        ],
        detailTopics: [
            {
                numberOrder: "01",
                title: "The Challenge",
                description: "Finding reliable local professionals (plumbers, electricians, tutors) is often a fragmented experience plagued by low trust and slow communication. The lack of standardized pricing and verification creates friction for users, while skilled providers struggle to maintain visibility in a crowded, unorganized market. The objective was to build a bridge that guarantees trust and immediacy."
            },
            {
                numberOrder: "02",
                title: "The Solution",
                description: "I developed Service Conecta as a mobile-first ecosystem using Flutter for a seamless cross-platform experience. The architecture relies on a NestJS backend with WebSockets to handle real-time negotiation and status updates. We implemented a precise geolocation engine that allows users to track providers in real-time (similar to ride-sharing apps) while managing complex background services to ensure battery efficiency for the worker's app."
            }
        ],
        keyFeaturesNumberOrder: "03",
        keyFeatures: [
            {
                title: "Live Geo-Tracking",
                description: "Real-time provider location tracking using background services and optimized map rendering."
            },
            {
                title: "Instant Negotiation",
                description: "In-app chat and quote system powered by WebSockets for sub-second latency."
            },
            {
                title: "Trusted Verification",
                description: "Automated identity checks and a robust rating system to ensure community safety."
            }
        ],

        imagesNumberOrder: "04",
        images: [
            {
                url: "/images/projects/project-2-1.png",
                title: "Login",
                type: "mobile",
                mainImage: true
            },
            {
                url: "/images/projects/project-2-2.png",
                title: "Home",
                type: "mobile",
                mainImage: false
            },
            {
                url: "/images/projects/project-2-3.png",
                title: "Map",
                type: "mobile",
                mainImage: false
            }
        ],
    },
];