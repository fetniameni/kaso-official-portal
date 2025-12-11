import { Instagram, ExternalLink, Play } from "lucide-react";
const highlights = [{
  type: "post",
  label: "Studio Session"
}, {
  type: "reel",
  label: "Live Performance"
}, {
  type: "post",
  label: "Behind the Scenes"
}, {
  type: "reel",
  label: "New Track Preview"
}, {
  type: "post",
  label: "Fan Moments"
}, {
  type: "reel",
  label: "Concert Vibes"
}];
const BouzairiesSection = () => {
  return <section id="bouzairies" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Bouzairies Exclusive
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Behind the scenes, exclusive news & more
        </p>

        {/* Highlights Grid */}
        

        {/* CTA Button */}
        <div className="text-center">
          <a href="https://www.instagram.com/bouzairies" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
            <Instagram className="w-6 h-6" />
            Follow @bouzairies
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>;
};
export default BouzairiesSection;