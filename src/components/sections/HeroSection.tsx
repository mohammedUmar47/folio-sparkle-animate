import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left side - Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
              Hello, I'm{' '}
              <span className="gradient-text">
                John Doe
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I craft exceptional digital experiences through innovative development 
              and thoughtful design. Passionate about creating solutions that make 
              a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold animate-pulse-glow hover:scale-105 transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold hover:scale-105 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Right side - Hero Illustration */}
        <div className="relative animate-float">
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Professional developer illustration" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout}
          className="rounded-full hover:bg-primary/10"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;