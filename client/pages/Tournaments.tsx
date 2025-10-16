export default function Tournaments() {
  return (
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-3">Tournaments & Events</h2>
      <p className="text-foreground/70 max-w-2xl">
        Upcoming and past events, registration and leaderboards will be here. Say the word when you want this built out.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
            <div className="h-4 w-2/3 bg-foreground/20 rounded mb-3" />
            <div className="h-20 rounded-md bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
