import { Flame } from "lucide-react";
import { useEffect } from "react";

const teasers = [
  {
    title: "Anseni Teaser",
    tiktokVideoId: "7450985627462925601",
  },
  {
    title: "3adit Live",
    tiktokVideoId: "7449767371989334305",
  },
];

const ComingSoonSection = () => {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="coming-soon" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="w-10 h-10 text-primary animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Coming Soon
            </h2>
            <Flame className="w-10 h-10 text-primary animate-pulse" />
          </div>
          <p className="text-xl text-primary font-heading">
            New tracks dropping soon...
          </p>
        </div>

        {/* TikTok Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {teasers.map((teaser, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Title */}
              <div className="p-4 flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {teaser.title}
                </h3>
              </div>

              {/* TikTok Embed */}
              <div className="flex justify-center pb-4">
                <blockquote
                  className="tiktok-embed"
                  cite={`https://www.tiktok.com/@kaso/video/${teaser.tiktokVideoId}`}
                  data-video-id={teaser.tiktokVideoId}
                  style={{ maxWidth: "325px", minWidth: "280px" }}
                >
                  <section></section>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Stay Tuned */}
        <div className="text-center">
          <div className="inline-block bg-card border border-primary/50 rounded-full px-8 py-4 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300">
            <p className="text-lg font-heading font-bold">
              <span className="text-primary">Stay tuned!</span>
              <span className="text-muted-foreground ml-2">More heat coming your way 🔥</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
