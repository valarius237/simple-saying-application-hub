
import { Palette, Globe } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl"
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 40
  };

  return (
    <div className="flex items-center gap-3 group">
      {/* Logo Icon - Combination of Globe and Palette */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-full p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
          <Globe 
            size={iconSizes[size]} 
            className="text-primary-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          />
          <Palette 
            size={iconSizes[size] * 0.6} 
            className="text-primary-foreground/80 absolute bottom-0 right-0 transform translate-x-1 translate-y-1" 
          />
        </div>
      </div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${sizeClasses[size]} font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-tight`}>
            Global Art
          </span>
          <span className={`${size === 'lg' ? 'text-xl' : size === 'md' ? 'text-sm' : 'text-xs'} font-medium text-muted-foreground tracking-wider uppercase`}>
            Conglomerate
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
