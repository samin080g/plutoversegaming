import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { track } from "@/lib/track";

type Category = "FPS" | "Battle Royale" | "RPG" | "Sports";

const games = [
  { id: 1, title: "Neon Strikers", category: "Sports" as Category },
  { id: 2, title: "Aetherfall Legends", category: "RPG" as Category },
  { id: 3, title: "Voidfront Siege", category: "FPS" as Category },
  { id: 4, title: "Cosmic Drop", category: "Battle Royale" as Category },
  { id: 5, title: "Synthwave Skirmish", category: "FPS" as Category },
  { id: 6, title: "Chrono Realms", category: "RPG" as Category },
  { id: 7, title: "Meteor Rumble", category: "Sports" as Category },
  { id: 8, title: "Nebula Clash", category: "Battle Royale" as Category },
];

const categories: Category[] = ["FPS", "Battle Royale", "RPG", "Sports"];

export default function Games() {
  const [active, setActive] = useState<Category | "ALL">("ALL");
  const { user, playGame, profile } = useAuth();
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (active === "ALL") return games;
    return games.filter((g) => g.category === active);
  }, [active]);

  return (
    <section className="container py-12 md:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl md:text-4xl tracking-wider">Explore Games</h2>
          <p className="text-foreground/70">Browse by category and find your next obsession.</p>
        </div>
        <div className="hidden md:flex gap-2">
          <Button variant="ghost" className="hover:bg-secondary/70">New</Button>
          <Button variant="ghost" className="hover:bg-secondary/70">Top Rated</Button>
          <Button variant="ghost" className="hover:bg-secondary/70">Trending</Button>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <FilterChip label="All" active={active === "ALL"} onClick={() => setActive("ALL")} />
        {categories.map((c) => (
          <FilterChip key={c} label={c} active={active === c} onClick={() => setActive(c)} />
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((g) => (
          <div key={g.id} className="group relative rounded-2xl overflow-hidden border border-border/60 bg-secondary/40 backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-neon">
            <div className="h-36 bg-gradient-to-br from-fuchsia-500/25 via-purple-500/10 to-cyan-400/25" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{g.title}</h3>
                  <p className="text-xs text-foreground/70">{g.category}</p>
                </div>
                <span className="px-2 py-1 text-xs rounded-md bg-accent/15 text-accent">NEON</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => {
                    if (!user) {
                      toast.error("Please login to play and rank up");
                      navigate("/login");
                      return;
                    }
                    playGame();
                    track({ type: "activity", path: location.pathname, label: `play:${g.title}` });
                    toast.success(`+75 MMR • Rank: ${profile?.rankTier ?? "Rookie"}`);
                  }}
                  className="bg-primary hover:bg-primary/90 shadow-neon"
                >
                  Play
                </Button>
                <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent/10">Details</Button>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_60%)]" />
          </div>
        ))}
      </div>
    </section>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm border transition-colors",
        active
          ? "border-accent bg-accent/15 text-accent"
          : "border-border/70 text-foreground/80 hover:bg-secondary/60",
      )}
    >
      {label}
    </button>
  );
}
