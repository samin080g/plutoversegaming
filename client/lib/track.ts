export type TrackEvent =
  | { type: "page_view"; path: string }
  | { type: "login"; path: string; email: string }
  | { type: "signup"; path: string; email: string; username: string }
  | { type: "activity"; path: string; label: string };

export async function track(event: TrackEvent) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: event.type, data: event, path: event.path }),
      keepalive: true,
    });
  } catch {}
}
