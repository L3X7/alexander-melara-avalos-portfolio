import { FeatureProjectsSection } from "@/features/home/components/feature-projects-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { TechEcosystem } from "@/features/home/components/tech-ecosystem";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeatureProjectsSection />
			<TechEcosystem />
		</>
	);
}
