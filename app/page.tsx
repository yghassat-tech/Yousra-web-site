import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Yousra Ghassat" },
  description: "Creative storyteller in fashion, culture, and digital campaigns.",
};

export default function HomePage() {
  return (
    <main id="page">
      <section className="hero" aria-labelledby="hero-heading">
        <span className="visually-hidden">Hero photograph of Yousra Ghassat.</span>
        <div className="hero__bg" role="presentation" />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__content">
            <h1 id="hero-heading" className="hero__tagline">
              Creative storyteller in fashion, culture, and digital campaigns.
            </h1>
            <Link className="link-cta link-cta--inverse" href="/about">
              About me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
