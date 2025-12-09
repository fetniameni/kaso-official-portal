import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

interface LyricsSong {
  id: string;
  title: string;
  titleAr: string;
  lyrics: string;
}

const songs: LyricsSong[] = [
  {
    id: "1",
    title: "B3IDA",
    titleAr: "بعيدة",
    lyrics: `بعيدة عليا و أنا بعيد عليها
ماعادش نحكي معاها، ماعادش تحكي معايا
قلبي تعب من السكوت
و عينيها تبكي من غير صوت

الحب اللي كان بيناتنا
ولى ذكرى و خلى جراحاتنا
نحب نرجع للوقت الأول
قبل ما كل شي يتبدل

بعيدة... بعيدة...
و المسافة تزيد كل يوم
بعيدة... بعيدة...
و القلب ما عادش يلوم`,
  },
  {
    id: "2",
    title: "KBERNA",
    titleAr: "كبرنا",
    lyrics: `كبرنا و الدنيا علمتنا
إللي يحبك ما يخليك وحدك
كبرنا و الوقت بدلنا
و الناس إللي كانت قربنا بعدت

في الشارع تعلمنا كلشي
الصبر و القوة و التحدي
ما نستناوش حد يفهمنا
نكتبو قصتنا بإيدينا

كبرنا... كبرنا...
و الحلم ما زال في قلوبنا
كبرنا... كبرنا...
و نعرفو شنوا نحبو`,
  },
  {
    id: "3",
    title: "Bouzayein Intro",
    titleAr: "بوزيان - مقدمة",
    lyrics: `اسمي بوزيان، من قلب تونس
نحكي بصوتي اللي يفهم يحس
الكلام يجي من الروح
و الإيقاع يجي من الجروح

ما نخاف من حد، ما نسكت
على الحق نموت، ما نهربت
هاذي قصتي، هاذا مشواري
من الشارع للنجوم طاري`,
  },
];

const LyricsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.titleAr.includes(searchQuery) ||
      song.lyrics.includes(searchQuery)
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="lyrics" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Lyrics
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search lyrics... / ابحث في الكلمات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card border border-border rounded-full py-4 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Lyrics Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredSongs.map((song) => (
            <div
              key={song.id}
              className="bg-card rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-primary/50"
            >
              <button
                onClick={() => toggleExpand(song.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <div>
                  <h3 className="font-heading font-bold text-lg">
                    {song.title}
                  </h3>
                  <p className="rtl-text text-muted-foreground text-sm">
                    {song.titleAr}
                  </p>
                </div>
                {expandedId === song.id ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {expandedId === song.id && (
                <div className="px-5 pb-5 border-t border-border/50">
                  <pre className="rtl-text font-arabic text-foreground/90 whitespace-pre-wrap leading-relaxed pt-5">
                    {song.lyrics}
                  </pre>
                </div>
              )}
            </div>
          ))}

          {filteredSongs.length === 0 && (
            <p className="text-center text-muted-foreground py-8 rtl-text">
              لم يتم العثور على نتائج
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LyricsSection;
