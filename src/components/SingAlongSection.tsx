import { useState, useRef, useEffect } from "react";
import { Music2 } from "lucide-react";

const SingAlongSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Placeholder for lyrics - user should add their own licensed content
  const lyricsPlaceholder = [
   "كايني   پكاسو صورتك بإيديا" ,

"إيه، أنا كازو لي كتبتك بإيديا",

"مهدم الدنيا ومديت لك ثنيا",

"ماكنتش نمثل كي قتلك، كان ليا" ,

"قتلك عندك ناس، هات نقولهم",

"واللي مش عاجبهم نيك أمهم",

"أحنا تا نوليوا وهوما يسكروا فمهم",

"هات نقدوا الخير اللي غدوة يغمهم",

"جرينا على حاجات وحرقنا حاجات",

"برشا أمنيات لين ضلوعي حيات",

"برشا أحاسيس لين حياتي حلات",

"دعيت وحدي في السر ما تكونش أيامات",

"ما صدقتش آش عطيت، عشت معاك تريپ ما صارش",

"عشنا حاجات كثيرة، وشكون من اللي عرفنا ما غارش؟",

"نحكيوا غدوة بعيدة، تقولي، هذا ما يتقالش",

"أنا دايما معاك صعيب، كا نبعد وما نقدرش",

"أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك",

"أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك",

"ياي، وأبعد، وأبعد، بعيدة لين ما عادش نراك",

"وأبعد، وأبعد، بعيدة لين ما عادش نراك",

"قريب، اللي قريب لقلبي وعينيا",

"اللي مدلي المحبة كيما هِيَ، كيما جات، جات",

"اللي قسمها، مش قسّمها عليا",

"مش اللي حسبها معايا متاع هات، هات",

"وهاني اليوم قدمت ومنعت",

"وهاني اليوم أنا اللي ثنيتي صنعت",

"وهاني اليوم خليتك سمعت",

"غصيت وبلعت باش منعت كيّني تصنعت",

"أنا مش مسامح روحي فكلمتين",

"مش مسامح روحي فحلمتين",

"ضاع وقت وأنا سارح",

"ضاع وقت وأنا سارح",

"مش مسامح روحي فكلمتين",

"مش مسامح روحي فحلمتين",

"ضاع وقت وأنا سارح",

"ضاع وقت وأنا سارح",

"عشت معك نهاري كأنه سنين",

"واللي كان يسير بحاجات حبيتهم",

"ما كنتش نفرق نهاري من الليل",

"نعرف صباحاتي لو كان بِك بديتهم",

"حياتي معاك أنا علاش، مين، وفاش وفين؟",

"ما هوماش خايبين، أنا اللي حطيتهم",

"ما كناش واعيين كنمعنيوا بالعين",

"أنا ريتك فيهم أما أنتِ ريتهم",

"عطى قلبي معاك من اللي عندُه",

"بعِدنا عباد حبوا يقربوا",

"ديما أحنا زوز باللي نجربوا",

"جرينا وجارينا، ماناش صغار وهانا نخربوا",

"كنا واحد مش إثنين، كنا ماشيين فرد ثنية",

"مديت برشا مني، ما خديتيش علاش عليا؟",

"حاكيلك حاجات أنا ما نعرفهمش عليا",

"ما خسرتش القريب، وليت بعيد حتى بالنية",

"أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك",

"أما أنتِ اليوم بعيدة، بعيدة، بعيدة لين ماعادش نراك",

"ياي، وأبعد، وأبعد، بعيدة لين ما عادش نراك",

"وأبعد، وأبعد، بعيدة لين ما عادش نراك",

"وأبعد، وأبعد، بعيدة لين ما عادش نراك",

"وأبعد، وأبعد، بعيدة لين ما عادش نراك",
  ];

  return (
    <section id="sing-along" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Music2 className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center rtl-text">
            غنّي مع Kaso
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
