import type { ReactNode } from "react";

export function SectionHeading({
  num,
  id,
  children,
  aside,
  className = "mb-[clamp(24px,4vw,48px)]",
}: {
  num: string;
  id: string;
  children: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  const heading = (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-[13px] text-muted">[{num}]</span>
      <h2
        id={id}
        className="m-0 text-[clamp(32px,4.4vw,56px)] leading-[1.05] font-semibold tracking-[-0.03em]"
      >
        {children}
      </h2>
    </div>
  );

  if (!aside) return <div className={className}>{heading}</div>;

  return (
    <div className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 ${className}`}>
      {heading}
      <span className="font-mono text-[13px] text-muted">{aside}</span>
    </div>
  );
}
