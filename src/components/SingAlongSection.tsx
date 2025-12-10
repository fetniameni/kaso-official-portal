import { useState, useRef, useEffect } from "react";
import { Music2 } from "lucide-react";

const SingAlongSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Placeholder for lyrics - user should add their own licensed content
  const lyricsPlaceholder = [
    "أضف كلمات الأغنية هنا",
    "يمكنك إضافة كل سطر",
    "من كلمات B3IDA",
    "بالتنسيق الصحيح",
  ];

  return (
    <section id="sing-along" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Music2 className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center rtl-text">
            غنّي مع كاسو
          </h2>
        </div>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          {/* YouTube Video */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-[0_0_30px_hsl(24_100%_50%/0.2)]">
            <iframe
              ref={iframeRef}
              src="https://www.youtube.com/embed/OCkJjN2ryjM?enablejsapi=1"
              title="B3IDA - KASO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onLoad={() => setIsPlaying(true)}
            />
          </div>

          {/* Lyrics Display */}
          <div className="bg-card rounded-xl border border-border/50 p-6 md:p-8 max-h-[400px] overflow-y-auto custom-scrollbar">
            <p className="text-center text-muted-foreground mb-6 rtl-text font-arabic">
              شغّل الفيديو وغنّي مع كاسو
            </p>
            <div className="space-y-3 rtl-text">
              {lyricsPlaceholder.map((line, index) => (
                <p
                  key={index}
                  className="font-arabic text-lg md:text-xl text-foreground/70 py-2 px-4 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary cursor-default"
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 text-sm rtl-text font-arabic">
              * يرجى إضافة كلمات الأغنية المرخصة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingAlongSection;
