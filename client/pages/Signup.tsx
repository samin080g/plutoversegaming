import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setSubmitting(true);
    const res = await signup(username, email, password);
    setSubmitting(false);
    if (!res.ok) {
      toast.error(res.error || "Signup failed");
      return;
    }
    toast.success("Account created! Welcome ✨");
    navigate("/dashboard");
  };

  return (
    <section className="container py-12 md:py-16 max-w-md">
      <h2 className="font-display text-3xl tracking-wider mb-6">Create Account</h2>
      <form onSubmit={onSubmit} className="rounded-2xl border border-border/60 bg-secondary/40 backdrop-blur-md p-6">
        <div className="grid gap-4">
          <div>
            <label className="text-sm">Username</label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="mt-1 w-full rounded-md border border-border bg-background/60 px-3 py-2 outline-none focus:ring-2 focus:ring-accent" />
          </div>
          <Button disabled={submitting} className="bg-primary hover:bg-primary/90 shadow-neon h-11">{submitting ? "Creating..." : "Sign Up"}</Button>
        </div>
      </form>
    </section>
  );
}
