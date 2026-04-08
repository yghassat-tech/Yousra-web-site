import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montréal",
  description: "Photography and writing from Montréal.",
};

const photos = [
  "/assets/images/travel/Montreal/IMG_0591.webp",
  "/assets/images/travel/Montreal/IMG_0592.webp",
  "/assets/images/travel/Montreal/IMG_0594.webp",
  "/assets/images/travel/Montreal/IMG_0595.webp",
  "/assets/images/travel/Montreal/IMG_1357.webp",
  "/assets/images/travel/Montreal/IMG_1373.webp",
];

export default function MontrealPage() {
  return (
    <main id="page">
      <section className="travel-hero travel-hero--montreal">
        <div className="travel-hero__bg" role="presentation" />
        <div className="travel-hero__scrim" aria-hidden="true" />
        <div className="travel-hero__inner">
          <h1 id="montreal-hero-title" className="travel-hero__title-stack">
            <span className="travel-hero__headline">Montréal</span>
          </h1>
        </div>
      </section>
      <article className="page-inner page-inner--wide">
        <Link className="back-link" href="/travel">
          ← Travel
        </Link>

        <p className="travel-verse">A patron of the arts.</p>

        <p>The train stopped at Place des Arts.</p>
        <p>Art spilled into the streets as people danced freely.</p>
        <p>I stepped into the Quartier des Spectacles, the lights echoing that same energy.</p>
        <p>Even at night, nothing felt still.</p>
        <p>Every boutique honors its designs. Every record store celebrates its music.</p>
        <p>Everywhere I turned, there was art. And I felt it.</p>
        <p className="travel-verse">Montréal, a city that stays with you</p>

        <div className="media-grid media-grid--masonry" aria-label="Montréal travel photographs">
          {photos.map((src) => (
            <div key={src} className="media-grid__cell">
              <img src={src} alt="Montréal travel photograph" loading="lazy" />
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
