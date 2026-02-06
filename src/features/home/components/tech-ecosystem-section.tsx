import { TechCard } from "@/components/ui/tech-card";

export function TechEcosystemSection() {
	return (
		<div id="tech-stack" className="scroll-mt-24 container mx-auto flex flex-col w-full mt-5 mb-10 md:pt-10 md:pb-10  px-4">
			<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
				Tech Ecosystem
			</h3>
			<p className="text-muted-foreground text-lg leading-relaxed my-6">
				Delivering end-to-end solutions by integrating{" "}
				<span className="text-foreground font-medium">
					modern frontends
				</span>{" "}
				with{" "}
				<span className="text-foreground font-medium">
					robust backends
				</span>{" "}
				and{" "}
				<span className="text-foreground font-medium">
					cloud-native infrastructure
				</span>
				.
			</p>
			<div className="flex items-center gap-4 mb-6 md:mt-6">
				<div className="h-px w-12 bg-slate-400" />
				<span className="text-sm font-bold uppercase tracking-widest text-slate-500">
					Backend
				</span>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TechCard
					name="NestJS"
					description="Scalable, server-side Node.js framework."
					iconSrc="/icons/nestjs.svg"
					iconClass="h-7 w-7 bg-[#E0234E] transition-colors"
				></TechCard>
				<TechCard
					name=".NET"
					description="High-performance cross-platform development."
					iconSrc="/icons/dotnet.svg"
					iconClass="h-7 w-7 bg-[#512BD4] transition-color"
				></TechCard>
				<TechCard
					name="Spring Boot"
					description="Production-grade Java microservices."
					iconSrc="/icons/spring.svg"
					iconClass="h-7 w-7 bg-[#6DB33F] transition-color"
				></TechCard>
			</div>
			<div className="flex items-center gap-4 mt-6 mb-6">
				<div className="h-px w-12 bg-slate-400" />
				<span className="text-sm font-bold uppercase tracking-widest text-slate-500">
					MOBILE
				</span>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TechCard
					name="Flutter"
					description="Natively compiled cross-platform apps."
					iconSrc="/icons/flutter.svg"
					iconClass="h-7 w-7 bg-[#02569B] transition-colors"
				></TechCard>
				<TechCard
					name="Kotlin"
					description="Modern, concise Android development."
					iconSrc="/icons/kotlin.svg"
					iconClass="h-7 w-7 bg-[#7F52FF] transition-color"
				></TechCard>
			</div>
			<div className="flex items-center gap-4 mb-6 mt-6">
				<div className="h-px w-12 bg-slate-400" />
				<span className="text-sm font-bold uppercase tracking-widest text-slate-500">
					FRONTEND & DESIGN
				</span>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TechCard
					name="Next.js"
					description="The React framework for the web."
					iconSrc="/icons/nextdotjs.svg"
					iconClass="h-7 w-7 bg-[#000000] transition-colors dark:bg-white"
				></TechCard>
				<TechCard
					name="Angular"
					description="Enterprise-scale web application platform."
					iconSrc="/icons/angular.svg"
					iconClass="h-7 w-7 bg-[#0F0F11] transition-color dark:bg-white"
				></TechCard>
				<TechCard
					name="Tailwind CSS"
					description="Utility-first API-driven styling."
					iconSrc="/icons/tailwindcss.svg"
					iconClass="h-7 w-7 bg-[#06B6D4] transition-color"
				></TechCard>
			</div>
			<div className="flex items-center gap-4 mb-6 mt-6">
				<div className="h-px w-12 bg-slate-400" />
				<span className="text-sm font-bold uppercase tracking-widest text-slate-500">
					CLOUD & DEVOPS
				</span>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TechCard
					name="Docker"
					description="Containerization for consistent deployment."
					iconSrc="/icons/docker.svg"
					iconClass="h-7 w-7 bg-[#2496ED] transition-colors"
				></TechCard>
				<TechCard
					name="Kubernetes"
					description="Automated container orchestration at scale."
					iconSrc="/icons/kubernetes.svg"
					iconClass="h-7 w-7 bg-[#326CE5] transition-color"
				></TechCard>
				<TechCard
					name="AWS"
					description="Comprehensive enterprise cloud infrastructure."
					nameTextColor="#FF9900"
				></TechCard>
				<TechCard
					name="Digital ocean"
					description="Developer-friendly cloud computing."
					iconSrc="/icons/digitalocean.svg"
					iconClass="h-7 w-7 bg-[#0080FF] transition-color"
				></TechCard>
				<TechCard
					name="Vercel"
					description="Frontend cloud for edge deployment."
					iconSrc="/icons/vercel.svg"
					iconClass="h-7 w-7 bg-[#000000] transition-color dark:bg-white"
				></TechCard>
			</div>
		</div>
	);
}
