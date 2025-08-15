import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Delay before transitioning
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-10 z-10">
        {/* Logo/Brand with enhanced glow */}
        <div className="relative">
          <div className="animate-pulse-glow">
            <h1 className="text-7xl font-serif font-bold gradient-text mb-6 relative">
              Portfolio
              <div className="absolute inset-0 text-7xl font-serif font-bold text-primary/10 blur-xl">
                Portfolio
              </div>
            </h1>
          </div>
          <p className="text-muted-foreground text-xl font-medium tracking-wide">
            Crafting Digital Experiences
          </p>
        </div>
        
        {/* Enhanced Loading Bar */}
        <div className="relative w-96 mx-auto">
          <div className="h-1 bg-secondary/40 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-primary via-primary-glow to-accent relative transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          
          {/* Glow effect under progress bar */}
          <div 
            className="absolute top-0 h-1 rounded-full bg-primary/30 blur-sm transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Percentage with animation */}
        <div className="space-y-2">
          <p className="text-lg text-foreground font-semibold animate-pulse">
            {progress}%
          </p>
          <p className="text-sm text-muted-foreground font-medium tracking-wider">
            Loading Resources...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;