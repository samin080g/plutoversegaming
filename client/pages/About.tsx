export default function About() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
            About Pluto Verse Gaming
          </h2>
          <p className="text-foreground/80 text-lg">
            We are a global community of gamers forging the future of play. From
            FPS to RPGs and Battle Royale, we host neon‑lit tournaments, share
            pro tips, and celebrate every victory.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <StatCard title="Founded" value="2025" />
            <StatCard title="Members" value="120K+" />
            <StatCard title="Events" value="850+" />
            <StatCard title="Servers" value="30+ Regions" />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-cyan-400/20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl border border-border/60 bg-secondary/50 backdrop-blur-md p-8 shadow-neon">
            <h3 className="font-semibold text-xl mb-3">Our Mission</h3>
            <p className="text-foreground/80">
              Empower players to compete, connect, and create. We build fair
              ladders, community‑driven events, and tools that help you rank up
              while having fun.
            </p>
            <div className="mt-6 grid gap-4">
              <Bullet>
                Inclusive by design: everyone starts at Rookie and can rise.
              </Bullet>
              <Bullet>
                Community‑first moderation and zero‑toxicity policy.
              </Bullet>
              <Bullet>
                Cutting‑edge visuals, low latency, and global reach.
              </Bullet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
      <div className="text-sm text-foreground/70">{title}</div>
      <div className="text-2xl font-bold text-accent">{value}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
      <span className="text-foreground/80">{children}</span>
    </div>
  );
}
