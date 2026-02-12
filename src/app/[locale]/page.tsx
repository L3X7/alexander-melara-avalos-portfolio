import { FeatureProjectsSection } from "@/features/home/components/feature-projects-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { TechEcosystemSection } from "@/features/home/components/tech-ecosystem-section";


export default function Home() {
	return (
		<>
			<HeroSection />
			<FeatureProjectsSection />
			<TechEcosystemSection />
		</>
	);
}
