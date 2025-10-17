import Carousel from "@/components/Carousel";

const heroImages = [
  {
    src: "https://images.pexels.com/photos/7233194/pexels-photo-7233194.jpeg",
    alt: "Neon purple background",
  },
  {
    src: "https://images.pexels.com/photos/106400/pexels-photo-106400.jpeg",
    alt: "Esports audience",
  },
];

const news = [
  {
    title: "Pro scene heats up across major titles",
    summary:
      "Top-tier teams shake up leaderboards with meta-breaking strategies across FPS, BR, and MOBA scenes.",
    image: "https://images.pexels.com/photos/106400/pexels-photo-106400.jpeg",
    url: "https://www.esports.net/",
    tag: "Esports",
  },
  {
    title: "New season launches bring fresh maps and modes",
    summary:
      "Multiple franchises roll out content drops with neon-soaked arenas, revamped progress tracks, and limited-time events.",
    image: "https://images.pexels.com/photos/7233194/pexels-photo-7233194.jpeg",
    url: "https://store.steampowered.com/news/",
    tag: "Updates",
  },
  {
    title: "Speedrunners set stunning records this month",
    summary:
      "Community showcases frame-perfect routing and new skips, pushing the boundaries on classic and modern titles.",
    image:
      "https://images.pexels.com/photos/34001135/pexels-photo-34001135.jpeg",
    url: "https://www.speedrun.com/news",
    tag: "Community",
  },
];

export default function News() {
  return (
    <section className="container py-12 md:py-16">
      <Carousel images={heroImages} className="mb-10 relative" />
      <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-3">
        Trending Gaming News
      </h2>
      <p className="text-foreground/70 mb-6 max-w-2xl">
        Curated highlights from around the gaming world. Tap through for full
        articles.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((n, i) => (
          <a
            key={i}
            href={n.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md overflow-hidden hover:shadow-neon transition-shadow"
          >
            <img
              src={n.image}
              alt={n.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <span className="text-xs px-2 py-1 rounded bg-accent/15 text-accent">
                {n.tag}
              </span>
              <h3 className="mt-2 font-semibold">{n.title}</h3>
              <p className="text-sm text-foreground/70">{n.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
