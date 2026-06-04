const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "meinefinsternis",
  url: "https://mnfstrns.dev",
  sameAs: [
    "https://instagram.com/meinefinsternis",
    "https://open.spotify.com/user/31vy6dzc7ocdrnenc7gxirrervre",
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
            building web apps, gym, cycling, sunset rides, art, chill trips,
            museums, street photos, hiking, cooking, perfumes, long walks,
            ballet, table tennis, concerts, traveling, road trips
          </p>
        </section>
        <section>
          <h2>links:</h2>
          <ul>
            <li>
              <a
                href="https://cv.mnfstrns.dev/"
                rel="me noopener noreferrer"
                target="_blank"
              >
                cv / portfolio
              </a>
            </li>
            <li>
              <a
                href="http://instagram.com/meinefinsternis"
                rel="me noopener noreferrer"
                target="_blank"
              >
                http://instagram.com/mnfstrns
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/31vy6dzc7ocdrnenc7gxirrervre"
                rel="me noopener noreferrer"
                target="_blank"
              >
                https://open.spotify.com/user/mnfstrns
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>contact me:</h2>
          <a href="mailto:i.am@mnfstrns.dev">i.am@mnfstrns.dev</a>
        </section>
      </main>
    </>
  );
}
