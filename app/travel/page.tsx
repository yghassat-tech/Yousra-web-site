import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel photography and writing.",
};

export default function TravelPage() {
  return (
    <main id="page">
      <article className="page-inner">
        <p className="page-inner__label">Photography</p>
        <h1>Travel</h1>
        <p className="lede">
          Cities and places through my lens — family, identity, and the details that stay with you
          after you leave.
        </p>

        <ul className="hub-cards">
          <li>
            <Link href="/morocco">
              <p className="hub-cards__title">Morocco</p>
              <p className="hub-cards__meta">Casablanca, belonging, color</p>
            </Link>
          </li>
          <li>
            <Link href="/montreal">
              <p className="hub-cards__title">Montréal</p>
              <p className="hub-cards__meta">Arts, streets, nightlife</p>
            </Link>
          </li>
          <li>
            <Link href="/barcelona">
              <p className="hub-cards__title">Barcelona</p>
              <p className="hub-cards__meta">Architecture, stillness, Gaudí</p>
            </Link>
          </li>
        </ul>
      </article>
    </main>
  );
}
