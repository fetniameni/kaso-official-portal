import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/karim_kaso",
    color: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/KARIMKASO1",
    color: "hover:text-blue-500",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@KASOKARIM",
    color: "hover:text-red-500",
  },
  {
    name: "X",
    icon: Twitter,
    url: "https://x.com/karim_kaso",
    color: "hover:text-foreground",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Contact
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        <p className="rtl-text text-center text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
          تابعني على مواقع التواصل الاجتماعي
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_hsl(24_100%_50%/0.15)]`}
              aria-label={social.name}
            >
              <social.icon
                className={`w-12 h-12 text-muted-foreground transition-colors duration-300 ${social.color}`}
              />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 pt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="rtl-text text-muted-foreground">
            © 2025 كاسو - جميع الحقوق محفوظة
          </p>
          <p className="rtl-text text-sm text-muted-foreground/60 mt-2">
            صُنع بحب من معجبة 🧡
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
