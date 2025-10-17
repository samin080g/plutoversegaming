import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { track } from "@/lib/track";

const heroImages = [
  { src: "https://images.pexels.com/photos/106400/pexels-photo-106400.jpeg", alt: "Esports stage" },
  { src: "https://images.pexels.com/photos/7233194/pexels-photo-7233194.jpeg", alt: "Neon background" },
];

const trending = [
  { title: "Neon Arena Showdown", prize: "$25,000", image: "https://images.pexels.com/photos/106400/pexels-photo-106400.jpeg" },
  { title: "Quantum Royale Finals", prize: "$15,000", image: "https://images.pexels.com/photos/7233194/pexels-photo-7233194.jpeg" },
  { title: "Aether RPG Clash", prize: "$8,000", image: "https://images.pexels.com/photos/34001135/pexels-photo-34001135.jpeg" },
];

const upcoming = [
  { title: "Star Circuit Cup", date: "2025-11-10", image: "https://images.pexels.com/photos/7787753/pexels-photo-7787753.jpeg" },
  { title: "Synthwave Open", date: "2025-12-01", image: "https://images.pexels.com/photos/33372452/pexels-photo-33372452.png" },
  { title: "Meteor League", date: "2026-01-15", image: "https://images.pexels.com/photos/33661602/pexels-photo-33661602.jpeg" },
];

export default function Tournaments() {
  const onRegister = (name: string) => {
    toast.success(`Registered for ${name}`);
    track({ type: "activity", path: location.pathname, label: `register:${name}` });
  };

  return (
    <section className="container py-12 md:py-16">
      <Carousel images={heroImages} className="mb-10 relative" />
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-3">Tournaments & Events</h2>
      <p className="text-foreground/70 mb-6 max-w-2xl">Follow live brackets and join upcoming events. Compete, climb, and claim glory.</p>

      <h3 className="text-xl font-semibold mb-3">Trending Now</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {trending.map((t, i) => (
          <div key={i} className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md overflow-hidden">
            <img src={t.image} alt={t.title} className="h-40 w-full object-cover" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{t.title}</h4>
                <p className="text-sm text-foreground/70">Prize Pool {t.prize}</p>
              </div>
              <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent/10">View</Button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-3">Upcoming</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcoming.map((u, i) => (
          <div key={i} className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md overflow-hidden">
            <img src={u.image} alt={u.title} className="h-40 w-full object-cover" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{u.title}</h4>
                <p className="text-sm text-foreground/70">Starts {u.date}</p>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-neon" onClick={() => onRegister(u.title)}>Register</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
