type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return <span className={`font-bold text-2xl ${className}`}>🚀 MySite</span>;
}
