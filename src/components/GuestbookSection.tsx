import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
}

const initialEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "أحمد",
    message: "كاسو أسطورة!",
    timestamp: new Date("2024-12-01"),
  },
  {
    id: "2",
    name: "سارة",
    message: "B3IDA في قلبي",
    timestamp: new Date("2024-12-05"),
  },
];

const GuestbookSection = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !message.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      const newEntry: GuestbookEntry = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        timestamp: new Date(),
      };

      setEntries([newEntry, ...entries]);
      setName("");
      setMessage("");
      setIsSubmitting(false);

      toast({
        title: "تم الإرسال!",
        description: "شكرًا على رسالتك",
      });
    }, 500);
  };

  return (
    <section id="guestbook" className="py-20 md:py-32 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <MessageCircle className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center rtl-text">
            كتاب الضيوف
          </h2>
        </div>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        <div className="max-w-2xl mx-auto">
          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border/50 p-6 mb-8">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="اسمك"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors rtl-text"
                />
              </div>
              <div>
                <textarea
                  placeholder="رسالتك لكاسو..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={200}
                  rows={3}
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none rtl-text"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground py-3 px-6 rounded-lg font-arabic font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>إرسال</span>
              </button>
            </div>
          </form>

          {/* Entries List */}
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-card rounded-xl border border-border/50 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(24_100%_50%/0.1)]"
              >
                <div className="flex items-start justify-between gap-4 rtl-text">
                  <div className="flex-1">
                    <h4 className="font-arabic font-bold text-primary mb-1">
                      {entry.name}
                    </h4>
                    <p className="text-foreground/90 font-arabic">
                      {entry.message}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {entry.timestamp.toLocaleDateString("ar-TN")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestbookSection;
