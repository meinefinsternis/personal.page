import { redis } from '@/lib/redis'
import { SubmissionsForm } from './submissions-form'

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

export default async function Home() {
  const initial = await redis.lrange<{ url: string; text: string; createdAt: number }>('submissions', 0, 49)
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
          <h2>inspo:</h2>
          <ul>
            <li>
              <a
                href="https://fuckyou.design/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://fuckyou.design/
              </a>
            </li>
            <li>
              <a
                href="https://designreviewed.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://designreviewed.com/
              </a>
            </li>
            <li>
              <a
                href="https://searchsystem.co/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://searchsystem.co/
              </a>
            </li>
            <li>
              <a
                href="https://www.oobject.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.oobject.com/
              </a>
            </li>
            <li>
              <a
                href="https://magasindesobjetsusuels.tumblr.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://magasindesobjetsusuels.tumblr.com/
              </a>
            </li>
            <li>
              <a
                href="https://digitalcollections.nypl.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://digitalcollections.nypl.org/
              </a>
            </li>
            <li>
              <a
                href="https://www.webdesignmuseum.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.webdesignmuseum.org/
              </a>
            </li>
            <li>
              <a
                href="https://mechanical-pencil.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://mechanical-pencil.com/
              </a>
            </li>
            <li>
              <a
                href="https://bitburner-official.github.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://bitburner-official.github.io/
              </a>
            </li>
            <li>
              <a
                href="https://transitions.dev/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://transitions.dev/
              </a>
            </li>
            <li>
              <a
                href="https://sheets.works/data-viz/keyboard-sounds"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://sheets.works/data-viz/keyboard-sounds
              </a>
            </li>
            <li>
              <a
                href="https://github.com/VoltAgent/awesome-design-md"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://github.com/VoltAgent/awesome-design-md
              </a>
            </li>
            <li>
              <a
                href="https://www.tinytooltown.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                https://www.tinytooltown.com/
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>contact me:</h2>
          <a href="mailto:i.am@mnfstrns.dev">i.am@mnfstrns.dev</a>
        </section>
        <SubmissionsForm initial={initial} />
      </main>
    </>
  );
}
