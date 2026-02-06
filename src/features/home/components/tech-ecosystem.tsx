import { Card, CardContent } from "@/components/ui/card";
import { IconMask } from "@/components/ui/icon-mask";
import { TechCard } from "@/components/ui/tech-card";

export function TechEcosystem() {
	return (
		<div className="container mx-auto flex flex-col px-4 w-full md:pt-10 md:pb-15">
			<h3 className="text-4xl font-extrabold tracking-tight md:text-5xl">
				Tech Ecosystem
			</h3>
			<p className="text-muted-foreground text-lg max-w-2xl my-6">
				A comprehensive toolset for building, scalable, and maintainable
				solutions.
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
					description="Progressive Node.js framework"
					iconSrc="/icons/nestjs.svg"
					iconClass="h-7 w-7 bg-[#E0234E] transition-colors"
				></TechCard>
				<TechCard
					name=".NET"
					description="Cross-platform dev by Microsoft"
					iconSrc="/icons/dotnet.svg"
					iconClass="h-7 w-7 bg-[#512BD4] transition-color"
				></TechCard>
				<TechCard
					name="Spring Boot"
					description="Java-based framework"
					iconSrc="/icons/spring.svg"
					iconClass="h-7 w-7 bg-[#6DB33F] transition-color"
				></TechCard>
			</div>
			<div className="flex items-center gap-4 mb-6 md:mt-6">
				<div className="h-px w-12 bg-slate-400" />
				<span className="text-sm font-bold uppercase tracking-widest text-slate-500">
					MOBILE
				</span>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TechCard
					name="Flutter"
					description="Progressive Node.js framework"
					iconSrc="/icons/flutter.svg"
					iconClass="h-7 w-7 bg-[#02569B] transition-colors"
				></TechCard>
				<TechCard
					name="Kotlin"
					description="Cross-platform dev by Microsoft"
					iconSrc="/icons/kotlin.svg"
					iconClass="h-7 w-7 bg-[#7F52FF] transition-color"
				></TechCard>
			</div>
			<div className="flex items-center gap-4 mb-6 md:mt-6">
				<div className="h-px w-12 bg-slate-400" />
				<span className="text-sm font-bold uppercase tracking-widest text-slate-500">
					FRONTEND & DESIGN
				</span>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TechCard
					name="Next.js"
					description="Progressive Node.js framework"
					iconSrc="/icons/nextdotjs.svg"
					iconClass="h-7 w-7 bg-[#000000] transition-colors"
				></TechCard>
				<TechCard
					name="Angular"
					description="Cross-platform dev by Microsoft"
					iconSrc="/icons/angular.svg"
					iconClass="h-7 w-7 bg-[#0F0F11] transition-color"
				></TechCard>
				<TechCard
					name="Tailwind CSS"
					description="Cross-platform dev by Microsoft"
					iconSrc="/icons/angular.svg"
					iconClass="h-7 w-7 bg-[#06B6D4] transition-color"
				></TechCard>
			</div>
			<div className="flex items-center gap-4 mb-6 md:mt-6">
				<div className="h-px w-12 bg-slate-400" />
				<span className="text-sm font-bold uppercase tracking-widest text-slate-500">
					CLOUD & DEVOPS
				</span>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<TechCard
					name="Docker"
					description="Progressive Node.js framework"
					iconSrc="/icons/docker.svg"
					iconClass="h-7 w-7 bg-[#2496ED] transition-colors"
				></TechCard>
				<TechCard
					name="Kubernetes"
					description="Cross-platform dev by Microsoft"
					iconSrc="/icons/kubernetes.svg"
					iconClass="h-7 w-7 bg-[#326CE5] transition-color"
				></TechCard>
				<TechCard
					name="AWS"
					description="Cross-platform dev by Microsoft"
					iconClass="h-7 w-7 bg-[#06B6D4] transition-color"
					nameTextColor="#FF9900"
				></TechCard>
			</div>
		</div>
	);
}
