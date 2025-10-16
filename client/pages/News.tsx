export default function News() {
  return (
    <section className="container py-12 md:py-16">
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-3">News</h2>
      <p className="text-foreground/70 max-w-2xl">
        Gaming news cards linking to full articles will appear here. Ask me to flesh this page out when you’re ready.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
            <div className="h-28 rounded-md bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 mb-4" />
            <div className="h-4 w-3/4 bg-foreground/20 rounded mb-2" />
            <div className="h-4 w-1/2 bg-foreground/10 rounded" />
          </div>
        ))}
      </div>
    </section>
  );
}
