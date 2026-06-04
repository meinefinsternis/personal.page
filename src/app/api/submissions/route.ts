import { redis } from "@/lib/redis";

type Submission = { url: string; text: string; createdAt: number };

export async function GET() {
  const items = await redis.lrange<Submission>("submissions", 0, 49);
  return Response.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { url, text, token } = body;

  if (!url?.trim() || !text?.trim() || !token) {
    return Response.json({ error: "missing fields" }, { status: 400 });
  }

  if (process.env.NODE_ENV !== "development") {
    const form = new FormData();
    form.append("secret", process.env.TURNSTILE_SECRET_KEY!);
    form.append("response", token);

    const verification = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: form },
    );
    const { success } = await verification.json();

    if (!success) {
      return Response.json({ error: "captcha failed" }, { status: 400 });
    }
  }

  await redis.lpush("submissions", {
    url: url.trim().slice(0, 500),
    text: text.trim().slice(0, 150),
    createdAt: Date.now(),
  });

  return Response.json({ success: true });
}
