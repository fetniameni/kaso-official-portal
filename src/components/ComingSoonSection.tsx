import { Flame, Music, ExternalLink } from "lucide-react";

const teasers = [
  {
    title: "Anseni Teaser",
    tiktokUrl: "https://vm.tiktok.com/ZMDe99cEp/",
    description: "New fire incoming...",
  },
  {
    title: "3adit Live",
    tiktokUrl: "https://vm.tiktok.com/ZMDexYHQm/",
    description: "Live performance preview",
  },
];

const ComingSoonSection = () => {
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

        {/* Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {teasers.map((teaser, index) => (
            <a
              key={index}
              href={teaser.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:scale-[1.02]">
                {/* Video Placeholder */}
                <div className="aspect-[9/16] max-h-[400px] bg-gradient-to-br from-primary/30 via-card to-primary/10 relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.3),transparent_70%)] animate-pulse" />
                  
                  {/* TikTok Icon */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-black/50 border-2 border-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Music className="w-10 h-10 text-primary" />
                    </div>
                    <span className="text-muted-foreground">Watch on TikTok</span>
                  </div>

                  {/* Fire Emojis */}
                  <div className="absolute top-4 left-4 text-3xl animate-bounce">🔥</div>
                  <div className="absolute top-4 right-4 text-3xl animate-bounce" style={{ animationDelay: "0.2s" }}>🔥</div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {teaser.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-muted-foreground">{teaser.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stay Tuned */}
        <div className="text-center">
          <div className="inline-block bg-card border border-primary/50 rounded-full px-8 py-4">
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
