export default function Dashboard() {
  return (
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-3">Player Dashboard</h2>
      <p className="text-foreground/70 max-w-2xl">Progress, rank, recent games, and achievements will be visualized here with charts and progress bars. Ask me to implement when ready.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6 h-40" />
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6 h-40" />
        <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6 h-40" />
      </div>
    </section>
  );
}
