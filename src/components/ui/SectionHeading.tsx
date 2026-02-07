interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="h-1 w-8 bg-red" />
      <h2 className="headline-stamp text-navy text-2xl md:text-3xl">{children}</h2>
      <div className="h-1 w-8 bg-red" />
    </div>
  );
}
