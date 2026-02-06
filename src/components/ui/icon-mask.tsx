export function IconMask({
	src,
	className,
}: {
	src: string;
	className: string;
}) {
	return (
		<div
			className={className}
			style={{
				maskImage: `url('${src}')`,
				maskSize: "contain",
				maskRepeat: "no-repeat",
				maskPosition: "center",
				WebkitMaskImage: `url('${src}')`,
				WebkitMaskSize: "contain",
				WebkitMaskRepeat: "no-repeat",
				WebkitMaskPosition: "center",
			}}
		></div>
	);
}
