/**
 * Back-to-top progress button. Markup from unipix-Main/index.html lines 1157-1164.
 * Scroll/visibility + click handlers are attached by main.js (backToTopInit).
 */
export default function BackToTop() {
  return (
    <div className="progress-wrap">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: 'stroke-dashoffset 10ms linear 0s',
            strokeDasharray: '307.919, 307.919',
            strokeDashoffset: '307.919',
          }}
        />
      </svg>
    </div>
  );
}
