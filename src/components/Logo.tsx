interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const Logo = ({ className = "", width = 40, height = 40 }: LogoProps) => {
  const hasSizeClasses = className.includes("w-") || className.includes("h-");

  return (
    <img
      src="/BV.svg"
      alt="Branco Venn Logo"
      className={`inline-block object-contain dark:invert ${className}`}
      style={hasSizeClasses ? undefined : { width, height }}
      loading="eager"
      decoding="async"
    />
  );
};

export default Logo;
