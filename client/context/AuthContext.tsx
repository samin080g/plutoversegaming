import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type AuthUser = { username: string; email: string };

type StoredUser = { username: string; email: string; passwordHash: string };

type Profile = {
  email: string;
  username: string;
  mmr: number;
  plays: number;
  rankTier: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  profile: Profile | null;
  loading: boolean;
  login: (
    email: string,
    password: string,
  ) => Promise<{ ok: boolean; error?: string }>;
  signup: (
    username: string,
    email: string,
    password: string,
  ) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  playGame: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const USERS_KEY = "pluto_users";
const SESSION_KEY = "pluto_session";
const PROFILES_KEY = "pluto_profiles";

async function hashPassword(password: string): Promise<string> {
  const enc = new TextEncoder().encode(password);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  const bytes = Array.from(new Uint8Array(buf));
  return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function getUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function setUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function setSession(user: AuthUser | null) {
  if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  else localStorage.removeItem(SESSION_KEY);
}

function getSession(): AuthUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
}

function getProfiles(): Record<string, Profile> {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Profile>) : {};
  } catch {
    return {};
  }
}

function setProfiles(p: Record<string, Profile>) {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(p));
}

function tierFromMMR(mmr: number): string {
  if (mmr >= 2500) return "Diamond";
  if (mmr >= 1800) return "Platinum";
  if (mmr >= 1200) return "Gold";
  if (mmr >= 700) return "Silver";
  if (mmr >= 300) return "Bronze";
  return "Rookie"; // lowest
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sess = getSession();
    setUser(sess);
    if (sess) {
      const all = getProfiles();
      const p = all[sess.email];
      if (p) setProfile(p);
    }
    setLoading(false);
  }, []);

  const ensureProfile = (u: AuthUser) => {
    const all = getProfiles();
    if (!all[u.email]) {
      all[u.email] = {
        email: u.email,
        username: u.username,
        mmr: 0,
        plays: 0,
        rankTier: "Rookie",
      };
      setProfiles(all);
    }
    setProfile(all[u.email]);
  };

  const login = async (email: string, password: string) => {
    const users = getUsers();
    const pwd = await hashPassword(password);
    const match = users.find(
      (u) =>
        u.email.toLowerCase() === email.toLowerCase() && u.passwordHash === pwd,
    );
    if (!match) return { ok: false, error: "Invalid credentials" };
    const authUser = { username: match.username, email: match.email };
    setUser(authUser);
    setSession(authUser);
    ensureProfile(authUser);
    return { ok: true };
  };

  const signup = async (username: string, email: string, password: string) => {
    const users = getUsers();
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: "Email already registered" };
    }
    const passwordHash = await hashPassword(password);
    const newUser: StoredUser = { username, email, passwordHash };
    setUsers([...users, newUser]);
    const authUser = { username, email };
    setUser(authUser);
    setSession(authUser);
    ensureProfile(authUser);
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
    setProfile(null);
    setSession(null);
  };

  const playGame = () => {
    if (!user) return;
    const all = getProfiles();
    const current = all[user.email] ?? {
      email: user.email,
      username: user.username,
      mmr: 0,
      plays: 0,
      rankTier: "Rookie",
    };
    const gain = 75; // increase per play
    const mmr = current.mmr + gain;
    const rankTier = tierFromMMR(mmr);
    const updated: Profile = {
      ...current,
      plays: current.plays + 1,
      mmr,
      rankTier,
    };
    all[user.email] = updated;
    setProfiles(all);
    setProfile(updated);
  };

  const value = useMemo(
    () => ({ user, profile, loading, login, signup, logout, playGame }),
    [user, profile, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
