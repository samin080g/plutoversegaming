import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Index() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(40%_30%_at_20%_20%,rgba(168,85,247,0.35),transparent_60%),radial-gradient(50%_40%_at_80%_10%,rgba(59,130,246,0.25),transparent_45%),radial-gradient(50%_50%_at_50%_100%,rgba(236,72,153,0.20),transparent_50%)]" />
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-16 lg:py-24 items-center">
        <div className="space-y-6">
          <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-wider">
            <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-fuchsia-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-shine">Welcome to</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(167,82,246,0.6)] animate-glow">Pluto Verse Gaming</span>
          </h1>
          <p className="text-foreground/80 text-lg md:text-xl max-w-xl">
            Enter the neon frontier. Discover cutting‑edge games, join elite tournaments, and rise through the leaderboard in a community built for the future of play.
          </p>
          <div className="flex flex-wrap gap-4">
            <NavLink to="/games">
              <Button className="bg-primary hover:bg-primary/90 shadow-neon px-6 h-12 text-base">Explore Games</Button>
            </NavLink>
            <NavLink to="/tournaments">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 h-12 px-6 text-base">Tournaments</Button>
            </NavLink>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6 max-w-md text-center">
            <div className="rounded-xl border border-border/60 p-4 bg-secondary/40 backdrop-blur-sm">
              <div className="text-2xl font-bold text-accent">120K+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/70">Players</div>
            </div>
            <div className="rounded-xl border border-border/60 p-4 bg-secondary/40 backdrop-blur-sm">
              <div className="text-2xl font-bold text-accent">850+</div>
              <div className="text-xs uppercase tracking-widest text-foreground/70">Tournaments</div>
            </div>
            <div className="rounded-xl border border-border/60 p-4 bg-secondary/40 backdrop-blur-sm">
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <div className="text-xs uppercase tracking-widest text-foreground/70">Community</div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-cyan-400/20 blur-3xl rounded-full" />
          <div className="relative aspect-square rounded-3xl border border-border/60 bg-secondary/50 backdrop-blur-md overflow-hidden shadow-neon">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_60%)]" />
            <div className="absolute inset-0 grid grid-cols-7 grid-rows-7 opacity-20">
              {Array.from({ length: 49 }).map((_, i) => (
                <div key={i} className="border border-white/10" />
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400 animate-float shadow-neon" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-foreground/70">
              <span>Quantum Render v2.1</span>
              <span>Neural Link Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
