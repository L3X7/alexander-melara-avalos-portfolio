import { Experience } from "@/features/about/types/experience";

export const allExperiences: Experience[] = [
    {
        title: "Semi-Senior DevOps Engineer",
        company: "CloudTech Solutions",
        period: "2024 - Present",
        description:
            "Leading CI/CD pipeline modernization and implementing GitOps workflows. Focused on reducing deployment times by 40%.",
        tags: ["Kubernetes", "Terraform", "Go"],
        current: true,
    },
    {
      title: "AWS Solutions Associate",
      company: "Nebula Systems",
      period: "2022 - 2023",
      description:
        "Migrated legacy monolithic applications to AWS Lambda and ECS. Implemented Infrastructure as Code (IaC) practices.",
      tags: ["AWS Lambda", "CloudFormation", "Python"],
      current: false,
    },
]