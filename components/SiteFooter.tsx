export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__social" aria-label="Social and contact">
        <a
          className="site-footer__icon-link"
          href="https://www.linkedin.com/in/yousra-ghassat/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Yousra Ghassat on LinkedIn"
        >
          <svg className="site-footer__icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
            />
          </svg>
        </a>
        <a className="site-footer__icon-link" href="mailto:yghassat@gmail.com" aria-label="Email Yousra Ghassat">
          <svg className="site-footer__icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
        </a>
      </div>
      <p className="site-footer__collab">
        <span className="site-footer__collab-sparkle" aria-hidden="true">
          ✦
        </span>
        Crafted in cahoots with{" "}
        <a href="https://www.felicitous.tech" target="_blank" rel="noopener noreferrer">
          Felicitous Technologies
        </a>
        <span className="site-footer__collab-sparkle site-footer__collab-sparkle--lag" aria-hidden="true">
          ✦
        </span>
      </p>
      <p className="site-footer__copy">© Yousra Ghassat</p>
    </footer>
  );
}
