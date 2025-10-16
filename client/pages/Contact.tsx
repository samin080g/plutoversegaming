export default function Contact() {
  return (
    <section className="container py-12 md:py-16 max-w-2xl">
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-3">
        Contact Us
      </h2>
      <p className="text-foreground/70 mb-6">
        Have a message for the Pluto Verse team? Send it our way.
      </p>
      <form className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6 grid gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Name</label>
            <input className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea
            rows={5}
            className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <button className="h-11 rounded-md bg-primary hover:bg-primary/90 shadow-neon">
          Send Message
        </button>
      </form>
    </section>
  );
}
