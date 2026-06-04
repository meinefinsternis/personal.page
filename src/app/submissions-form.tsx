"use client";

import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

type Submission = { url: string; text: string; createdAt: number };

function shortUrl(raw: string) {
  try {
    const u = new URL(raw);
    return (
      u.hostname.replace("www.", "") +
      (u.pathname !== "/" ? u.pathname.slice(0, 30) + "…" : "")
    );
  } catch {
    return raw.slice(0, 40);
  }
}

export function SubmissionsForm({ initial }: { initial: Submission[] }) {
  const [list, setList] = useState(initial);
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const isDev = process.env.NODE_ENV === "development";
  const tokenRef = useRef<string | null>(isDev ? "dev" : null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!tokenRef.current) return;

    setStatus("loading");
    const res = await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, text, token: tokenRef.current }),
    });

    if (res.ok) {
      setList([{ url, text, createdAt: Date.now() }, ...list]);
      setUrl("");
      setText("");
      setStatus("idle");
      tokenRef.current = null;
      turnstileRef.current?.reset();
    } else {
      setStatus("error");
      turnstileRef.current?.reset();
    }
  }

  return (
    <section>
      <h2>drop a track or link:</h2>
      <form onSubmit={handleSubmit} className="drop-form">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="url"
          required
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="text"
          maxLength={150}
          rows={2}
          required
        />
        <div className="drop-form-footer">
          {!isDev && (
            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={(t) => {
                tokenRef.current = t;
              }}
            />
          )}
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "..." : "добавить"}
          </button>
        </div>
        {status === "error" && (
          <p className="drop-error">что-то пошло не так, попробуй ещё раз</p>
        )}
      </form>

      {list.length > 0 && (
        <ul className="drop-list">
          {list.map((s) => (
            <li key={s.createdAt}>
              <span className="drop-text">&ldquo;{s.text}&rdquo;</span>
              {" — "}
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {shortUrl(s.url)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
