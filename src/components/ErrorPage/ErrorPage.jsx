import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <section className={styles.error}>
      <svg className={styles.leafTopLeft} viewBox="0 0 120 70" aria-hidden="true">
        <path d="M10 60 Q30 20 60 10 Q90 5 110 10" fill="none" stroke="#7C9A5C" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="40" cy="30" rx="10" ry="5" fill="#7C9A5C" transform="rotate(-30 40 30)" />
        <ellipse cx="70" cy="14" rx="10" ry="5" fill="#7C9A5C" transform="rotate(-10 70 14)" />
        <ellipse cx="100" cy="14" rx="9" ry="4.5" fill="#7C9A5C" transform="rotate(20 100 14)" />
      </svg>

      <svg className={styles.leafBottomRight} viewBox="0 0 140 80" aria-hidden="true">
        <path d="M10 60 Q30 20 60 10 Q90 5 110 10" fill="none" stroke="#7C9A5C" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="40" cy="30" rx="10" ry="5" fill="#7C9A5C" transform="rotate(-30 40 30)" />
        <ellipse cx="70" cy="14" rx="10" ry="5" fill="#7C9A5C" transform="rotate(-10 70 14)" />
        <ellipse cx="100" cy="14" rx="9" ry="4.5" fill="#7C9A5C" transform="rotate(20 100 14)" />
      </svg>

      <div className={styles.inner}>
        <svg className={styles.illustration} viewBox="0 0 320 280" role="img">
          <title>An organic produce bag tipped over and spilled</title>
          <desc>
            An animated illustration of a dark green produce bag lying on its
            side, gently rocking, with a wilted sprout swaying, scattered seeds
            bouncing and a 404 tag swinging
          </desc>

          <ellipse cx="160" cy="248" rx="120" ry="14" fill="#E5E1D3" />

          <g className={styles.bagRock}>
            <g transform="rotate(-7 160 160)">
              <path
                d="M70 90 Q68 80 78 76 L210 76 Q222 80 220 92 L232 210 Q234 224 218 226 L80 226 Q64 224 66 210 Z"
                fill="#3E4A33"
              />
              <path d="M78 76 L210 76 Q222 80 220 92 L218 104 L72 104 L70 92 Q68 80 78 76 Z" fill="#576B43" />
              <rect x="72" y="100" width="148" height="8" rx="2" fill="#2E3A26" />

              <g transform="translate(145,150)">
                <circle r="34" fill="none" stroke="#A9BB8D" strokeWidth="2.5" />
                <path d="M-18 -10 Q-26 0 -18 10 Q-10 4 -10 0 Q-10 -4 -18 -10" fill="#A9BB8D" />
                <path d="M18 -10 Q26 0 18 10 Q10 4 10 0 Q10 -4 18 -10" fill="#A9BB8D" />
                <text x="0" y="-3" textAnchor="middle" fontSize="15" fontWeight="500" fill="#D9E2C8">404</text>
                <text x="0" y="13" textAnchor="middle" fontSize="9" fill="#A9BB8D">not found</text>
              </g>
            </g>
          </g>

          <g className={styles.sprout} transform="translate(150,205)">
            <path d="M0 40 Q-4 10 6 -10 Q12 -22 6 -34" fill="none" stroke="#8B9C5E" strokeWidth="3.5" strokeLinecap="round" />
            <ellipse className={styles.leafSway1} cx="8" cy="-30" rx="13" ry="7" fill="#9CAE6B" transform="rotate(-50 8 -30)" />
            <ellipse className={styles.leafSway2} cx="-6" cy="-12" rx="11" ry="6" fill="#B7BE7A" transform="rotate(150 -6 -12)" />
            <ellipse className={styles.leafSway1} cx="10" cy="2" rx="10" ry="5.5" fill="#9CAE6B" transform="rotate(-30 10 2)" />
          </g>

          <circle className={styles.seed1} cx="92" cy="244" r="3" fill="#7C9A5C" />
          <circle className={styles.seed2} cx="104" cy="248" r="2.5" fill="#7C9A5C" />
          <circle className={styles.seed3} cx="116" cy="243" r="3" fill="#7C9A5C" />
          <circle className={styles.seed2} cx="225" cy="246" r="2.5" fill="#7C9A5C" />
          <circle className={styles.seed1} cx="237" cy="242" r="3" fill="#7C9A5C" />

          <g className={styles.tagSwing} transform="translate(228,170)">
            <rect x="-2" y="-30" width="4" height="60" rx="2" fill="#D9D4C0" />
            <rect x="-22" y="-34" width="44" height="14" rx="3" fill="#FAF9F5" stroke="#C9C4B0" strokeWidth="1" />
            <text x="0" y="-23.5" textAnchor="middle" fontSize="9" fill="#5A5648">oops</text>
          </g>
        </svg>

        <p className={styles.eyebrow}>Error 404</p>

        <h1 className={styles.heading}>
          This bag spilled
          <br />
          before it reached you
        </h1>

        <p className={styles.subtext}>
          The page you're looking for got lost on the way from the farm.
          Let's get you back to fresher ground.
        </p>

        <div className={styles.actions}>
          <Link to="/" className={styles.primaryBtn}>
            Back to home
          </Link>
          <Link to="/everything" className={styles.secondaryBtn}>
            Shop everything
          </Link>
        </div>
      </div>
    </section>
  );
}
