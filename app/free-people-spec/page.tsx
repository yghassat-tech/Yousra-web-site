import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free People Spec",
  description: "Endless Summer — speculative digital campaign for Free People.",
};

const campaignImages = [
  { src: "/assets/images/free-people/Endless+Summer+(4).webp", alt: "Endless Summer — speculative Free People campaign visual" },
  { src: "/assets/images/free-people/Be Free Be You.webp", alt: "Be Free Be You — speculative Free People campaign visual" },
  { src: "/assets/images/free-people/Endless+Summer+(1).webp", alt: "Endless Summer — speculative Free People campaign visual" },
  { src: "/assets/images/free-people/Live for you.webp", alt: "Live for you — speculative Free People campaign visual" },
  { src: "/assets/images/free-people/freepeople.webp", alt: "Free People — speculative campaign visual" },
];

export default function FreePeopleSpecPage() {
  return (
    <main id="page">
      <section className="campaign-hero" aria-label="Endless Summer — campaign hero artwork">
        <div className="campaign-hero__bg" role="presentation" />
      </section>
      <article className="page-inner page-inner--wide">
        <Link className="back-link" href="/campaign-projects">
          ← Campaign Projects
        </Link>
        <h1>Free People Spec</h1>

        <div className="campaign-block">
          <h2>Campaign Concept</h2>
          <p>
            Endless Summer is a speculative digital campaign inspired by the free-spirited aesthetic
            of Free People. It evokes sun-washed imagery, flowing silhouettes, and minimal
            typography to capture the feeling of carefree summer days.
          </p>

          <h2>Objective</h2>
          <p>
            To reinforce Free People’s identity as a brand rooted in individuality and
            self-expression while creating visually engaging content.
          </p>

          <h2>Target Audience</h2>
          <p>Young women exploring identity, freedom, and personal style.</p>

          <h2>Creative Direction</h2>
          <p>
            Sun-washed tones, flowing silhouettes, and minimal typography. Messaging such as “Live for
            You” emphasizes individuality and ease.
          </p>

          <h2>Execution</h2>
          <p>
            A digital campaign expressed through editorial-style visuals and brand storytelling
            across web and social platforms.
          </p>
        </div>

        <p className="campaign-disclaimer">
          Spec advertisement created for portfolio purposes. This concept campaign was developed
          independently and is not affiliated with or endorsed by Free People. Images are property
          of Free People.
        </p>

        <h2>Campaign Visuals</h2>
        <p className="lede">
          Campaign art lives in <code>public/assets/images/free-people/</code>. Add Image 6 there when you have it.
        </p>
        <div className="media-grid" aria-label="Campaign image placeholders">
          {campaignImages.map(({ src, alt }) => (
            <div key={src} className="media-grid__cell">
              <img src={src} alt={alt} loading="lazy" />
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}
