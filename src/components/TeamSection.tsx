import { Instagram } from "lucide-react";

const teamMembers = [
  {
    name: "Nadeer Bouzayen",
    role: "Brother",
    instagram: "https://www.instagram.com/nadeer_bouzayen",
    initial: "N",
  },
  {
    name: "Wael Bouzayen",
    role: "Brother",
    instagram: "https://www.instagram.com/wael.bouzayen",
    initial: "W",
  },
  {
    name: "Ben Aziza",
    role: "Producer",
    instagram: "https://www.instagram.com/ben_aziza",
    initial: "B",
  },
  {
    name: "Ahmed Aloui",
    role: "Collaborator",
    instagram: "https://www.instagram.com/ahmedaloui19",
    initial: "A",
  },
  {
    name: "Fansha",
    role: "Fan Page",
    instagram: "https://www.instagram.com/fanshaaaaaaaaa",
    initial: "F",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 ltr-text">
          Bouzayen Family & Team
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <a
              key={member.name}
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300 hover:scale-105">
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300">
                  <span className="text-3xl font-heading font-bold text-primary">
                    {member.initial}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>

                {/* Instagram Icon */}
                <div className="flex items-center justify-center gap-2 text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Follow</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
