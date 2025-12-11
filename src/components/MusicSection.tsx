import { useState } from "react";
import { Play, X } from "lucide-react";

interface Track {
  id: string;
  title: string;
  year: string;
  thumbnail: string;
  youtubeId: string;
}

const tracks: Track[] = [
  // 2019
  { id: "1", title: "Bouzayein Intro", year: "2019", thumbnail: "https://img.youtube.com/vi/YJtaIwt_vio/maxresdefault.jpg", youtubeId: "YJtaIwt_vio" },
  { id: "2", title: "8 CHHOUR", year: "2019", thumbnail: "https://img.youtube.com/vi/3tqGXfQTlPE/maxresdefault.jpg", youtubeId: "3tqGXfQTlPE" },
  // 2021
  { id: "3", title: "Grow Up Freestyle", year: "2021", thumbnail: "https://img.youtube.com/vi/DjzPd6bKJFI/maxresdefault.jpg", youtubeId: "DjzPd6bKJFI" },
  // 2022
  { id: "4", title: "Grow Up", year: "2022", thumbnail: "https://img.youtube.com/vi/5lgYb9wq7NQ/maxresdefault.jpg", youtubeId: "5lgYb9wq7NQ" },
  { id: "5", title: "SBAYA", year: "2022", thumbnail: "https://img.youtube.com/vi/L5KhYYQbB4c/maxresdefault.jpg", youtubeId: "L5KhYYQbB4c" },
  // 2023
  { id: "6", title: "B3IDA", year: "2023", thumbnail: "https://img.youtube.com/vi/OCkJjN2ryjM/maxresdefault.jpg", youtubeId: "OCkJjN2ryjM" },
  { id: "7", title: "NETFAKARNA SGHAR", year: "2023", thumbnail: "https://img.youtube.com/vi/ZNMHaKE_s44/maxresdefault.jpg", youtubeId: "ZNMHaKE_s44" },
  { id: "8", title: "KBERNA", year: "2023", thumbnail: "https://img.youtube.com/vi/nKlU6I7mVzs/maxresdefault.jpg", youtubeId: "nKlU6I7mVzs" },
  // 2024
  { id: "9", title: "FEELINGS", year: "2024", thumbnail: "https://img.youtube.com/vi/iD4ab4BncRc/maxresdefault.jpg", youtubeId: "iD4ab4BncRc" },
  { id: "10", title: "TOXIC", year: "2024", thumbnail: "https://img.youtube.com/vi/Vq4J3QJRJ6k/maxresdefault.jpg", youtubeId: "Vq4J3QJRJ6k" },
  // 2025
  { id: "11", title: "Mode Avion", year: "2025", thumbnail: "https://img.youtube.com/vi/j8vP7QfKLsM/maxresdefault.jpg", youtubeId: "j8vP7QfKLsM" },
];

const years = ["All", "2019", "2021", "2022", "2023", "2024", "2025"];

const MusicSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeYear, setActiveYear] = useState("All");

  const filteredTracks = activeYear === "All" 
    ? tracks 
    : tracks.filter(track => track.year === activeYear);

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
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        {/* Filter Bar */}
        <div className="flex justify-center gap-3 md:gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`w-14 h-14 md:w-[60px] md:h-[60px] rounded-full font-bold text-sm transition-all duration-300 hover:scale-110 flex-shrink-0
                ${activeYear === year 
                  ? "bg-primary-hover text-primary-foreground shadow-[0_0_25px_hsl(var(--primary)/0.6)]" 
                  : "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredTracks.map((track, index) => (
            <div
              key={track.id}
              className="group relative bg-card rounded-xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_40px_hsl(24_100%_50%/0.25)] hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                
                {/* Play Button - appears on hover */}
                <button
                  onClick={() => openModal(track.youtubeId)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`Play ${track.title}`}
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_30px_hsl(24_100%_50%/0.7)]">
                    <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
                  </div>
                </button>

                {/* Year Badge */}
                <span className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {track.year.slice(-2)}
                </span>
              </div>

              {/* Title */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {track.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTracks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No tracks for {activeYear}</p>
          </div>
        )}
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
