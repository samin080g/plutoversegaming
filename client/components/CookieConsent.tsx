import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ok = localStorage.getItem("plutoverse_cookies_ok");
    if (!ok) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("plutoverse_cookies_ok", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-4 z-50 mx-auto w-[95%] md:w-[720px]",
      )}
    >
      <div className="rounded-xl border border-accent/30 bg-card/70 backdrop-blur-md text-card-foreground shadow-neon">
        <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
          <p className="text-sm md:text-base leading-relaxed">
            We use cookies to personalize content and analyze traffic for a
            better gaming experience. By clicking Accept, you agree to our use
            of cookies.
          </p>
          <div className="flex gap-3 md:ml-auto">
            <Button
              onClick={accept}
              className="bg-primary hover:bg-primary/90 shadow-neon"
            >
              Accept
            </Button>
            <a
              href="#"
              className="text-accent hover:underline underline-offset-4"
              onClick={(e) => e.preventDefault()}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
