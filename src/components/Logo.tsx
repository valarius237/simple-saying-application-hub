
import globalArtLogo from "@/assets/global-art-logo.jpg";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-5xl"
  };

  const imgSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-16 h-16",
    xl: "w-32 h-32"
  };

  return (
    <div className="flex items-center gap-3 group">
      <img 
        src={globalArtLogo} 
        alt="Global Art Conglomerate" 
        className={`${imgSizes[size]} rounded-full object-cover group-hover:scale-105 transition-transform duration-300`}
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight`}>
            Global Art
          </span>
          <span className={`${size === 'xl' ? 'text-2xl' : size === 'lg' ? 'text-xl' : size === 'md' ? 'text-sm' : 'text-xs'} font-medium text-muted-foreground tracking-wider uppercase`}>
            Conglomerate
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
