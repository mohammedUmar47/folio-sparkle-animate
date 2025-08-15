import { Award, Code, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full Stack Development",
      description: "Expert in modern web technologies and frameworks"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Building fast, efficient, and scalable applications"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Best Practices",
      description: "Following industry standards and clean code principles"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Photo */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent overflow-hidden shadow-2xl">
              {/* Placeholder for photo - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-white font-serif text-6xl">
                JD
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif font-bold text-foreground">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Full Stack Developer with over 5 years of experience 
                creating innovative digital solutions. My journey started with a love 
                for problem-solving and has evolved into expertise across the entire 
                development spectrum.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or mentoring aspiring developers. 
                I believe in continuous learning and sharing knowledge with the community.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;