import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type CarouselImage = { src: string; alt: string };

export default function Carousel({ images, className, auto = true, interval = 4000 }: { images: CarouselImage[]; className?: string; auto?: boolean; interval?: number }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  useEffect(() => {
    if (!embla || !auto) return;
    const id = setInterval(() => embla.scrollNext(), interval);
    return () => clearInterval(id);
  }, [embla, auto, interval]);

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md", className)} ref={emblaRef}>
      <div className="flex">
        {images.map((img, i) => (
          <div key={i} className="min-w-0 flex-[0_0_100%]">
            <img src={img.src} alt={img.alt} className="h-56 w-full object-cover md:h-72" />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button key={i} className={cn("h-2 w-2 rounded-full", i === index ? "bg-accent" : "bg-foreground/30")} onClick={() => embla?.scrollTo(i)} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
