import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user, profile } = useAuth();
  const mmr = profile?.mmr ?? 0;
  const nextCap =
    mmr < 300
      ? 300
      : mmr < 700
        ? 700
        : mmr < 1200
          ? 1200
          : mmr < 1800
            ? 1800
            : mmr < 2500
              ? 2500
              : 3000;
  const prevCap =
    mmr < 300
      ? 0
      : mmr < 700
        ? 300
        : mmr < 1200
          ? 700
          : mmr < 1800
            ? 1200
            : mmr < 2500
              ? 1800
              : 2500;
  const progress = Math.min(
    100,
    Math.round(((mmr - prevCap) / (nextCap - prevCap)) * 100),
  );

  return (
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-1">
        Player Dashboard
      </h2>
      <p className="text-foreground/70">Welcome, {user?.username}.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
          <h3 className="font-semibold mb-3">Season Progress</h3>
          <div className="h-3 rounded-full bg-foreground/10 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-foreground/70">
            {progress}% to next tier
          </div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
          <h3 className="font-semibold mb-3">Rank</h3>
          <div className="text-3xl font-bold text-accent">
            {profile?.rankTier ?? "Rookie"}
          </div>
          <div className="text-sm text-foreground/70">MMR {mmr}</div>
        </div>
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
          <h3 className="font-semibold mb-3">Recent Stats</h3>
          <ul className="text-sm space-y-1 text-foreground/80">
            <li>• Plays: {profile?.plays ?? 0}</li>
            <li>• Next Tier at: {nextCap} MMR</li>
            <li>• Keep playing games to rank up!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
