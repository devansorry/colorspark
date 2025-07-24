import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  onAuthClick: () => void;
}

export const Hero = ({ onAuthClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="ColorSpark Hero" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-accent to-neon-mint rounded-full opacity-15 animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-neon-mint/20 rounded-full animate-pulse delay-500" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-neon-mint bg-clip-text text-transparent animate-fade-in">
          Welcome to
          <br />
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            ColorSpark
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in delay-300">
          Where creativity meets innovation. Experience the power of modern design 
          with seamless interactions and vibrant aesthetics.
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center animate-fade-in delay-500">
          <Button
            onClick={onAuthClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 transition-all duration-300 ripple-effect px-8 py-4 text-lg"
          >
            Get Started
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-neon-mint hover:bg-neon-mint/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg btn-glow"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neon-mint mb-2">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};
