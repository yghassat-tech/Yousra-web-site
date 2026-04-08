import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Projects",
  description: "Brand and digital campaign work.",
};

export default function CampaignProjectsPage() {
  return (
    <main id="page">
      <article className="page-inner">
        <p className="page-inner__label">Portfolio</p>
        <h1>Campaign Projects</h1>
        <p className="lede">
          Spec campaigns and creative direction for fashion and lifestyle brands — storytelling meant
          for digital and social.
        </p>

        <ul className="hub-cards">
          <li>
            <Link href="/free-people-spec">
              <p className="hub-cards__title">Free People Spec</p>
              <p className="hub-cards__meta">Spec campaign · Endless Summer</p>
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
