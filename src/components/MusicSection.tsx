import { useState } from "react";
import { Play, X } from "lucide-react";

interface Track {
  id: string;
  title: string;
  titleAr: string;
  year: string;
  thumbnail: string;
  youtubeId: string;
  type: "album" | "film" | "single";
}

const tracks: Track[] = [
  {
    id: "1",
    title: "Bouzayein - Intro",
    titleAr: "بوزيان - مقدمة",
    year: "2019",
    thumbnail: "https://img.youtube.com/vi/YJtaIwt_vio/maxresdefault.jpg",
    youtubeId: "YJtaIwt_vio",
    type: "album",
  },
  {
    id: "2",
    title: "FEELINGS",
    titleAr: "فيلم FEELINGS",
    year: "2024",
    thumbnail: "https://img.youtube.com/vi/iD4ab4BncRc/maxresdefault.jpg",
    youtubeId: "iD4ab4BncRc",
    type: "film",
  },
  {
    id: "3",
    title: "B3IDA",
    titleAr: "بعيدة",
    year: "2023",
    thumbnail: "https://img.youtube.com/vi/OCkJjN2ryjM/maxresdefault.jpg",
    youtubeId: "OCkJjN2ryjM",
    type: "single",
  },
  {
    id: "4",
    title: "KBERNA",
    titleAr: "كبرنا",
    year: "2023",
    thumbnail: "https://img.youtube.com/vi/ZNMHaKE_s44/maxresdefault.jpg",
    youtubeId: "ZNMHaKE_s44",
    type: "single",
  },
];

const MusicSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="music" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Music
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16" />

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(24_100%_50%/0.2)]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => openModal(track.youtubeId)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={`Play ${track.title}`}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(24_100%_50%/0.6)]">
                    <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
                  </div>
                </button>

                {/* Type Badge */}
                <span className="absolute top-3 right-3 rtl-text bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                  {track.type === "album" && "ألبوم"}
                  {track.type === "film" && "فيلم"}
                  {track.type === "single" && "سينغل"}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-heading font-bold text-lg mb-1">
                  {track.title}
                </h3>
                <p className="rtl-text text-muted-foreground text-sm">
                  {track.titleAr} • {track.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MusicSection;
