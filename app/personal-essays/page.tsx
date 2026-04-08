import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Essays",
  description: "Personal essays on ambition, identity, and creativity.",
};

export default function PersonalEssaysPage() {
  return (
    <main id="page">
      <article className="page-inner">
        <h1>Maybe I don’t Want to Be Just One Thing Anymore</h1>
        <h4>On ambition, identity, and unlearning who I thought I had to become.</h4>

        <div className="essay-body">
          <p>Am I a writer now?</p>
          <p>
            I suppose that if I feel the inclination to write down my thoughts on this very page you
            are reading — in hopes of connecting with you — then I may actually be one.
          </p>
          <p>So let’s go back to where this started.</p>
          <p>
            In middle school, I decided I was going to write a novel, so I joined the writers’ club. I
            quit shortly after because I didn’t want to take public transportation at night.
          </p>
          <p>I forgot all about writing after that.</p>
          <p>Though I guess I did a handful of it to earn my degree.</p>
          <p>
            I did enjoy writing about topics I was passionate about, but I was more focused on
            churning out a paper that would earn me an A as quickly as possible.
          </p>
          <p>
            Now that I have graduated, I have found myself falling back into hobbies I used to love
            as a child.
          </p>
          <p>I suppose these hobbies have always been on my mind.</p>
          <p>I just ignored them.</p>
          <p>
            Now I can’t help but wonder if others, too, lose themselves while wrapped in their own
            expectations of who they should be.
          </p>
          <p>
            Society does play a role in what is deemed successful, but if we believe in it, is it all
            society’s fault?
          </p>
          <p>
            I guess I was part of the society that believed there was only one track I could follow to
            reach my idealized version of success.
          </p>
          <p>
            What happens when the noise stops and you’re left with yourself to truly ask what it is
            you want — and you discover that the answer is not at all what you worked toward?
          </p>
          <p>
            I find myself re-envisioning my future now. Of course, there are aspects of my last few
            years that still apply. But I choose to give myself permission to explore a different way
            to use them.
          </p>
          <p>Maybe I am a writer, or maybe I am not.</p>
          <p>Maybe I don’t want to be just one thing anymore.</p>
        </div>

        <p className="essay-source">
          <a
            href="https://open.substack.com/pub/yousraghassat/p/maybe-i-dont-want-to-be-just-one?utm_campaign=post-expanded-share&utm_medium=post%20viewer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Originally published on Substack, February 2026.
          </a>
        </p>
      </article>
    </main>
  );
}
