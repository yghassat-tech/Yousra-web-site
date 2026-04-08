import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Yousra Ghassat — writer and photographer.",
};

export default function AboutPage() {
  return (
    <main id="page">
      <article className="page-about">
        <div className="page-about__layout">
          <figure className="page-about__figure">
            <img
              src="/assets/images/IMG_2717.jpg"
              alt="Portrait of Yousra Ghassat outdoors with mountains in the background"
              width={960}
              height={1280}
              loading="lazy"
            />
          </figure>
          <div className="page-about__body">
            <p className="page-about__label">Hello! My Name Is</p>
            <h1>Yousra Ghassat</h1>

            <h2>About Me</h2>
            <p>
              I am drawn to the moments that reveal something real about people and the world around
              them. Through writing and photography, I try to capture the small details, emotions,
              and stories that might otherwise go unnoticed.
            </p>
            <p>
              My work is rooted in curiosity about people, culture, and everyday life. Whether
              through short stories, visual moments, or reflections, I aim to document experiences
              that feel honest and human.
            </p>
            <p>
              This portfolio brings together pieces that moved me to create. Thank you for taking the
              time to explore them.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
