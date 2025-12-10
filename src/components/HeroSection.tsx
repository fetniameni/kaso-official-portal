import heroBg from "@/assets/hero-bg.jpg";
import kasoLogo from "@/assets/kaso-logo.png";
import { Play } from "lucide-react";
const HeroSection = () => {
  const scrollToMusic = () => {
    const element = document.querySelector("#music");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <img src={kasoLogo} alt="Kaso - كاسو" className="w-64 md:w-80 h-auto mx-auto animate-pulse-glow" />
        </div>

        {/* Tagline */}
        <h1 className="rtl-text text-2xl md:text-4xl lg:text-[42px] font-bold text-foreground leading-relaxed mb-10 animate-fade-up opacity-0 animation-delay-200">
          كاسو: صوت الشوارع اللي يهزّ القلوب بكلمات من الواقع
        </h1>

        {/* Play Button */}
        <button onClick={scrollToMusic} className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/80 text-primary-foreground px-10 py-4 rounded-full font-arabic text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(24_100%_50%/0.5)] animate-fade-up opacity-0 animation-delay-400">
          <Play className="w-6 h-6 fill-current" />
          <span>Play</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;