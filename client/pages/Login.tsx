import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <section className="container py-12 md:py-16 max-w-md">
      <h2 className="font-display text-3xl tracking-wider mb-6">Login</h2>
      <div className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
        <div className="grid gap-4">
          <div>
            <label className="text-sm">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input type="password" className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <Button className="bg-primary hover:bg-primary/90 shadow-neon h-11">Sign In</Button>
        </div>
      </div>
    </section>
  );
}
