'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { ChevronDown, X } from 'lucide-react';

const ACTIVITIES = [
  {
    title: 'Research',
    summary: 'University-wide research support',
    detail:
      'University-wide support for research across the faculties of Arts & Humanities, Science & Engineering, and Business Administration.',
  },
  {
    title: 'Training',
    summary: 'Capacity-building workshops and certificates',
    detail:
      'Capacity-building workshops led by SU faculty and outside resource persons, running from weeks to months, with certificates for participants.',
  },
  {
    title: 'Seminar, workshop & conference',
    summary: 'Regular knowledge-exchange events',
    detail:
      'Regular knowledge-exchange events tied to current developments in education and research.',
  },
  {
    title: 'Technical committee',
    summary: 'Proposal and report review',
    detail:
      'Reviews research proposals and reports for technical soundness against CRTC guidelines; meets twice per proposal, covering roughly 30 initiatives a year.',
  },
  {
    title: 'Publication',
    summary: 'Publication process management',
    detail:
      'Manages the publication process for reports, articles and papers cleared by the Technical Committee.',
  },
];

const GALLERY = [
  '/assets/images/crtc/gallery/hero-img.jpg',
  '/assets/images/crtc/gallery/02-05-2023-1683008991.jpg',
  '/assets/images/crtc/gallery/09-11-2023-1699524214.jpeg',
  '/assets/images/crtc/gallery/09-11-2023-1699524318.jpeg',
  '/assets/images/crtc/gallery/24-10-2022-1666608820.jpg',
  '/assets/images/crtc/gallery/24-10-2022-1666608873.jpg',
];

export default function CrtcInteractive({ children }: { children?: ReactNode }) {
  const [openActivity, setOpenActivity] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <section style={{ background: '#ffffff', padding: '78px 0 86px' }}>
        <div className="max-w-[1600px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">
          <div className="crtc-section-head">
            <span className="crtc-kicker">Program Areas</span>
            <h2 className="crtc-title">Core Activities</h2>
          </div>

          <div className="crtc-activity">
            {ACTIVITIES.map((activity, index) => {
              const isOpen = openActivity === index;
              return (
                <article key={activity.title} className={`crtc-activity__item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="crtc-activity__button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenActivity(isOpen ? -1 : index)}
                  >
                    <span>
                      <strong>{activity.title}</strong>
                      <small>{activity.summary}</small>
                    </span>
                    <ChevronDown size={20} />
                  </button>
                  <div className="crtc-activity__panel">
                    <p>{activity.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {children}

      <section style={{ background: '#F6F7FC', padding: '78px 0 92px' }}>
        <div className="max-w-[1600px] mx-auto px-[16px] sm:px-[24px] lg:px-[32px]">
          <div className="crtc-section-head">
            <span className="crtc-kicker">Moments</span>
            <h2 className="crtc-title">Photo Gallery</h2>
          </div>

          <div className="crtc-gallery">
            {GALLERY.map((image, index) => (
              <button
                key={image}
                type="button"
                className="crtc-gallery__item"
                onClick={() => setActiveImage(image)}
                aria-label={`Open gallery image ${index + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={`CRTC gallery image ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage && (
        <div className="crtc-lightbox" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}>
          <button type="button" className="crtc-lightbox__close" aria-label="Close image">
            <X size={24} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={activeImage} alt="Selected CRTC gallery item" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
