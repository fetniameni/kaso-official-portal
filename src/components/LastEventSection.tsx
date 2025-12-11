import { Calendar, MapPin, Instagram, Play } from "lucide-react";

const eventHighlights = [
  { type: "video", label: "Opening" },
  { type: "photo", label: "Crowd" },
  { type: "video", label: "B3IDA Live" },
  { type: "photo", label: "Stage" },
  { type: "video", label: "Finale" },
  { type: "photo", label: "Backstage" },
];

const LastEventSection = () => {
  return (
    <section id="events" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Last Event
        </h2>
        
        {/* Event Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
            Hammamet Festival 2025
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Summer 2025
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Hammamet, Tunisia
            </span>
          </div>
        </div>

        {/* Event Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {eventHighlights.map((item, index) => (
            <a
              key={index}
              href="https://www.instagram.com/bouzairies"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-video bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {item.type === "video" ? (
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/30 transition-all">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-8 h-8 text-primary/70" />
                  </div>
                )}
                <span className="text-sm text-muted-foreground mt-3">
                  {item.label}
                </span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Caption */}
        <p className="text-center text-xl text-muted-foreground italic mb-8">
          "Relive the energy!"
        </p>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/bouzairies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold transition-colors"
          >
            <Instagram className="w-5 h-5" />
            See all event coverage @bouzairies
          </a>
        </div>
      </div>
    </section>
  );
};

export default LastEventSection;
