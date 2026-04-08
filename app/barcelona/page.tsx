import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barcelona",
  description: "Photography and writing from Barcelona.",
};

const photos = [
  "/assets/images/travel/Barcelona/IMG_0598.webp",
  "/assets/images/travel/Barcelona/IMG_0599.webp",
  "/assets/images/travel/Barcelona/IMG_0605.webp",
  "/assets/images/travel/Barcelona/IMG_0607.webp",
  "/assets/images/travel/Barcelona/IMG_0608.webp",
  "/assets/images/travel/Barcelona/IMG_0609.webp",
];

export default function BarcelonaPage() {
  return (
    <main id="page">
      <section className="travel-hero travel-hero--barcelona">
        <div className="travel-hero__bg" role="presentation" />
        <div className="travel-hero__scrim" aria-hidden="true" />
        <div className="travel-hero__inner">
          <h1 id="barcelona-hero-title" className="travel-hero__title-stack">
            <span className="travel-hero__headline">Barcelona</span>
          </h1>
        </div>
      </section>
      <article className="page-inner page-inner--wide">
        <Link className="back-link" href="/travel">
          ← Travel
        </Link>

        <p>A city shaped by Gaudí’s imagination.</p>
        <p>Beauty lived not only in its architecture, but in the people who filled its streets.</p>
        <p>There was a softness in the air that was contagious.</p>
        <p>I fell in love with a busy city that still made space for the soul.</p>
        <p>
          It made me slow down. And as I moved through it, the winding stairs of the Sagrada Família
          felt like a lesson in the twists of life itself.
        </p>
        <p>Where, at the top, a beautiful city awaited me.</p>
        <p className="travel-verse">Barcelona, the city that taught me to be still</p>

        <div className="media-grid media-grid--masonry" aria-label="Barcelona travel photographs">
          {photos.map((src) => (
            <div key={src} className="media-grid__cell">
              <img src={src} alt="Barcelona travel photograph" loading="lazy" />
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
