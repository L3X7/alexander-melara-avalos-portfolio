import { cn } from "@/lib/utils";

export function CodeWindow({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"relative w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#0f1117] shadow-2xl",
				className,
			)}
		>
			<div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
				<div className="h-3 w-3 rounded-full bg-[#ff5f56]" />{" "}
				{/* Red */}
				<div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />{" "}
				{/* Yellow */}
				<div className="h-3 w-3 rounded-full bg-[#27c93f]" />{" "}
				{/* Green */}
			</div>
			<div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
				<div className="mb-4">
					<span className="text-purple-400">const</span>{" "}
					<span className="text-blue-400">cloudConfig</span>{" "}
					<span className="text-slate-300">=</span>{" "}
					<span className="text-yellow-400">{"{"}</span>
				</div>
				<div className="pl-4">
					<div>
						<span className="text-slate-300">provider:</span>{" "}
						<span className="text-green-400">'AWS'</span>,
					</div>
					<div>
						<span className="text-slate-300">region:</span>{" "}
						<span className="text-green-400">'us-east-1'</span>,
					</div>
					<div>
						<span className="text-slate-300">architecture:</span>{" "}
						<span className="text-green-400">'microservices'</span>,
					</div>
					<div>
						<span className="text-slate-300">sustainability:</span>{" "}
						<span className="text-purple-400">true</span>,
					</div>
					<div>
						<span className="text-slate-300">
							containerization:
						</span>{" "}
						<span className="text-yellow-400">[</span>
						<span className="text-green-400">'Docker'</span>,{" "}
						<span className="text-green-400">'K8s'</span>
						<span className="text-yellow-400">]</span>
					</div>
				</div>

				<div className="mb-4">
					<span className="text-yellow-400">{"}"}</span>;
				</div>

				<div className="mt-6 flex items-center gap-2 text-slate-500">
					<span>// Initializing secure pipeline...</span>
				</div>
				<div className="mt-1 flex items-center gap-2">
					<span className="text-green-400">{">"}</span>
					<span className="text-blue-400">~</span>
					<span className="animate-pulse text-slate-300">_</span>
				</div>
			</div>
		</div>
	);
}
