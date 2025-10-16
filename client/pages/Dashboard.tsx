import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const progress = 64;
  return (
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-1">Player Dashboard</h2>
      <p className="text-foreground/70">Welcome, {user?.username}.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
          <h3 className="font-semibold mb-3">Season Progress</h3>
          <div className="h-3 rounded-full bg-foreground/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 text-sm text-foreground/70">{progress}% complete</div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
          <h3 className="font-semibold mb-3">Rank</h3>
          <div className="text-3xl font-bold text-accent">Diamond IV</div>
          <div className="text-sm text-foreground/70">MMR 3,245</div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
          <h3 className="font-semibold mb-3">Recent Achievements</h3>
          <ul className="text-sm space-y-1 text-foreground/80">
            <li>• Perfect Aim Streak</li>
            <li>• Zero-Death Run</li>
            <li>• Tournament Qualifier</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
