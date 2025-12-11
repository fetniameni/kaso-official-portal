import { useState } from "react";
import { Instagram, X, Camera } from "lucide-react";

const photoPlaceholders = [
  { id: 1, aspect: "tall", label: "Studio" },
  { id: 2, aspect: "wide", label: "Concert" },
  { id: 3, aspect: "square", label: "Backstage" },
  { id: 4, aspect: "square", label: "Recording" },
  { id: 5, aspect: "tall", label: "Photoshoot" },
  { id: 6, aspect: "wide", label: "Live Show" },
  { id: 7, aspect: "square", label: "Fans" },
  { id: 8, aspect: "tall", label: "Studio Session" },
  { id: 9, aspect: "square", label: "Behind Scenes" },
];

const PhotoAlbumSection = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="photos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
          Moments in Photos
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Captured memories from the journey
        </p>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-4 max-w-5xl mx-auto mb-12">
          {photoPlaceholders.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo.id)}
              className={`group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-border/50 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 ${
                photo.aspect === "tall"
                  ? "aspect-[3/4]"
                  : photo.aspect === "wide"
                  ? "aspect-[4/3]"
                  : "aspect-square"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-card to-primary/10" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Camera className="w-10 h-10 text-primary/50 mb-2 group-hover:scale-110 group-hover:text-primary transition-all" />
                <span className="text-xs text-muted-foreground">{photo.label}</span>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-primary font-bold">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/karim_kaso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-bold transition-colors"
          >
            <Instagram className="w-5 h-5" />
            See more on @karim_kaso
          </a>
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-card rounded-xl p-8 max-w-lg w-full text-center">
              <div className="aspect-square bg-gradient-to-br from-primary/30 via-card to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <Camera className="w-20 h-20 text-primary/50" />
              </div>
              <p className="text-muted-foreground mb-4">
                View this photo on Instagram
              </p>
              <a
                href="https://www.instagram.com/karim_kaso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-full font-bold transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Instagram className="w-5 h-5" />
                Open Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoAlbumSection;
