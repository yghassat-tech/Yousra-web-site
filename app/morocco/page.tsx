import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Morocco",
  description: "Photography and writing from Morocco.",
};

const photos = [
  "/assets/images/travel/Morocco/IMG_0558.webp",
  "/assets/images/travel/Morocco/IMG_0620.webp",
  "/assets/images/travel/Morocco/IMG_0625.webp",
  "/assets/images/travel/Morocco/IMG_0626.webp",
  "/assets/images/travel/Morocco/IMG_0629.webp",
  "/assets/images/travel/Morocco/IMG_0630.webp",
  "/assets/images/travel/Morocco/IMG_0631.jpg",
  "/assets/images/travel/Morocco/IMG_0639.webp",
  "/assets/images/travel/Morocco/IMG_0640.webp",
  "/assets/images/travel/Morocco/IMG_0641.webp",
  "/assets/images/travel/Morocco/IMG_0643.webp",
];

export default function MoroccoPage() {
  return (
    <main id="page">
      <section className="travel-hero travel-hero--morocco">
        <div className="travel-hero__bg" role="presentation" />
        <div className="travel-hero__scrim" aria-hidden="true" />
        <div className="travel-hero__inner">
          <h1 id="morocco-hero-title" className="travel-hero__title-stack">
            <span className="travel-hero__kicker">To the place that</span>
            <span className="travel-hero__kicker">holds my heart</span>
            <span className="travel-hero__headline">Morocco</span>
          </h1>
        </div>
      </section>
      <article className="page-inner page-inner--wide travel-story travel-story--morocco">
        <Link className="back-link" href="/travel">
          ← Travel
        </Link>

        <div className="travel-story__prose">
          <p>
            At the beginning of my trip, I was introduced to the feeling of being a foreigner in a
            country that has always shaped my identity.
          </p>
          <p>
            Growing up in the United States, the cost of travel meant visits were rare. Morocco lived
            mostly in stories, family memories, and imagination.
          </p>
          <p>
            But once I arrived, it became something more. Through the music, fashion, local streets,
            and the people around me, Casablanca began to feel like home. Through others, I began to
            understand more about myself.
          </p>
          <p>
            There, I found a kind of joy I had not experienced elsewhere — the joy that only family
            and belonging can bring.
          </p>
          <p>
            Below is Morocco through my eyes:
            <br />
            a collection of photographs capturing the colors, moments, and spirit of a place that is
            both new and deeply familiar to me.
          </p>

          <h3>It is a strange thing to visit the place that makes up half of your identity.</h3>
          <h4>To Morocco — where I’ve never felt more alive.</h4>
          <p className="travel-story__signoff">Cheers to us</p>
        </div>

        <div className="media-grid media-grid--masonry" aria-label="Morocco travel photographs">
          {photos.map((src) => (
            <div key={src} className="media-grid__cell">
              <img src={src} alt="Morocco travel photograph" loading="lazy" />
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
