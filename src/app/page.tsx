const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "meinefinsternis",
  url: "https://mnfstrns.dev",
  sameAs: [
    "http://instagram.com/meinefinsternis",
    "http://github.com/meinefinsternis",
    "https://www.strava.com/athletes/mnfstrns",
    "https://open.spotify.com/user/31vy6dzc7ocdrnenc7gxirrervre",
    "https://www.linkedin.com/in/dima-at-wrk/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/photo.png" alt="meinefinsternis" className="photo" />

        <h1>meinefinsternis</h1>
        <section>
          <h2>tags:</h2>
          <p>
            building web apps, gym, cycling, travel, street pics, sunset rides,
            cooking
          </p>
        </section>
        <section>
          <h2>links:</h2>
          <ul>
            <li>
              <a
                href="http://cv.mnfstrns.dev/"
                rel="me noopener noreferrer"
                target="_blank"
              >
                cv / portfolio
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dima-at-wrk/"
                rel="me noopener noreferrer"
                target="_blank"
              >
                https://www.linkedin.com/in/dima-at-wrk/
              </a>
            </li>
            <li>
              <a
                href="http://github.com/meinefinsternis"
                rel="me noopener noreferrer"
                target="_blank"
              >
                http://github.com/meinefinsternis
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/meinefinsternis"
                rel="me noopener noreferrer"
                target="_blank"
              >
                http://instagram.com/meinefinsternis
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/athletes/mnfstrns"
                rel="me noopener noreferrer"
                target="_blank"
              >
                https://www.strava.com/athletes/mnfstrns
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/31vy6dzc7ocdrnenc7gxirrervre"
                rel="me noopener noreferrer"
                target="_blank"
              >
                https://open.spotify.com/user/31vy6dzc7ocdrnenc7gxirrervre
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
