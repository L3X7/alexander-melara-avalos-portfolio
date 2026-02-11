import { Experience } from "../types/experience";

interface ExperienceTimelineProps {
	experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
	return (
		<div className="mx-auto pt-4 mt-8">
			<div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 space-y-12">
				{experiences.map((exp, index) => (
					<div key={index} className="relative pl-8">
						<span
							className={`absolute top-1 -left-2.25 h-4 w-4 rounded-full border-2 border-white dark:border-gray-900 ${
								exp.current
									? "bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900"
									: "bg-gray-300"
							}`}
						></span>
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
							<h3 className="text-lg font-bold text-gray-900 dark:text-white">
								{exp.title}
							</h3>
							<span className="text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
								{exp.period}
							</span>
						</div>
						<p className="text-base font-semibold text-gray-600 dark:text-gray-400 mb-4">
							{exp.company}
						</p>
						<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
							{exp.description}
						</p>
						<div className="flex flex-wrap gap-2">
							{exp.tags.map((tag, i) => (
								<span
									key={i}
									className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-300"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
