import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import CookieConsent from "@/components/CookieConsent";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/news", label: "News" },
  { to: "/tournaments", label: "Tournaments" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(168,85,247,0.35),transparent_50%),radial-gradient(60%_40%_at_90%_10%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(50%_50%_at_10%_90%,rgba(236,72,153,0.25),transparent_45%)] bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 bg-grid-neon animate-bg-pan" />
      <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-xl bg-background/60">
        <div className="container flex h-16 items-center gap-4">
          <NavLink to="/" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-neon animate-pulse" />
            <span className="font-display text-lg md:text-xl tracking-widest bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-fuchsia-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-shine drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
              Pluto Verse Gaming
            </span>
          </NavLink>

          <nav className="ml-auto hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-md text-sm transition-colors",
                    "hover:text-accent-foreground hover:bg-accent/20",
                    isActive ? "text-accent bg-accent/10" : "text-foreground/80",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-2 hidden md:flex gap-2">
            {user ? (
              <>
                <div className="px-3 py-2 rounded-md border border-border/60 bg-secondary/50 text-sm">
                  {user.username}
                </div>
                <Button variant="ghost" className="hover:bg-secondary/60" onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <NavLink to="/login"><Button variant="ghost" className="hover:bg-secondary/60">Login</Button></NavLink>
                <NavLink to="/signup"><Button className="bg-primary shadow-neon hover:bg-primary/90">Sign Up</Button></NavLink>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="relative">
        <Outlet />
      </main>

      <footer className="mt-10 border-t border-border/60 bg-background/60">
        <div className="container py-8 text-sm text-foreground/70 flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()} Pluto Verse Gaming. All rights reserved.</p>
          <div className="md:ml-auto flex gap-4">
            <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-accent">Privacy</a>
            <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-accent">Terms</a>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}
