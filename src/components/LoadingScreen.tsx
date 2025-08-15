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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Logo/Brand */}
        <div className="animate-pulse-glow">
          <h1 className="text-6xl font-serif font-bold gradient-text mb-4">
            Portfolio
          </h1>
          <p className="text-muted-foreground text-lg font-medium">
            Crafting Digital Experiences
          </p>
        </div>
        
        {/* Loading Bar */}
        <div className="w-80 h-2 bg-secondary rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Percentage */}
        <p className="text-sm text-muted-foreground font-medium">
          Loading... {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;