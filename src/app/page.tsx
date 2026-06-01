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
        <h1>meinefinsternis</h1>

        <ul>
          <li>
            <a href="http://cv.mnfstrns.dev/" rel="me">
              cv / portfolio
            </a>
          </li>
          <li>
            <a href="http://instagram.com/meinefinsternis" rel="me noopener noreferrer" target="_blank">
              instagram
            </a>
          </li>
          <li>
            <a href="http://github.com/meinefinsternis" rel="me noopener noreferrer" target="_blank">
              github
            </a>
          </li>
          <li>
            <a href="https://www.strava.com/athletes/mnfstrns" rel="me noopener noreferrer" target="_blank">
              strava
            </a>
          </li>
          <li>
            <a href="https://open.spotify.com/user/31vy6dzc7ocdrnenc7gxirrervre" rel="me noopener noreferrer" target="_blank">
              spotify
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
