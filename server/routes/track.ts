import type { RequestHandler } from "express";

export const handleTrack: RequestHandler = async (req, res) => {
  try {
    const webhook = process.env.TRACK_WEBHOOK_URL;
    // Always respond quickly; if not configured, no-op
    if (!webhook) {
      return res.status(204).end();
    }

    const payload = {
      type: req.body?.type ?? "unknown",
      data: req.body?.data ?? {},
      ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
      ua: req.headers["user-agent"],
      path: req.body?.path ?? req.originalUrl,
      ts: new Date().toISOString(),
    };

    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    res.status(202).json({ ok: true });
  } catch (e) {
    res.status(202).json({ ok: true });
  }
};
