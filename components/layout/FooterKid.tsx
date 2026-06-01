'use client';

import Link from 'next/link';

/**
 * Kids-school variant footer. Markup from unipix-Main/index-kid.html lines 993–1054.
 * Newsletter widget is inlined here (not a separate component) because newsletter
 * markup only appears in kid-variant footers in the source template.
 * Copyright year (#year span) is filled by main.js on navigation.
 */
export default function FooterKid() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log('[Newsletter] submitted:', data);
    window.alert('Subscribed (demo). Backend coming soon.');
    e.currentTarget.reset();
  };

  return (
    <footer className="footer kids">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="footer__widget">
              <div className="footer__widget--logo">
                <Link href="/"><img src="/assets/images/logo/kid__footer__logo.svg" alt="logo" /></Link>
              </div>
              <span className="d-block mb--20 fw-medium">Campus Location</span>
              <p className="footer__widget--description fw-medium">
                125 W 25th St, 11th Floor, New York, NY 10001, United States
              </p>
              <a href="mailto:support@finbizagency.com" className="footer__widget--mail fw-medium">support@finbizagency.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Our Campus</h6>
              <div className="footer__widget--menu">
                <ul>
                  <li><Link href="/academic">Academic</Link></li>
                  <li><Link href="/athletics">Planning & Admission</Link></li>
                  <li><Link href="/campus-life">Campus Safety</Link></li>
                  <li><Link href="/reasearch">Facility Services</Link></li>
                  <li><Link href="/academic-area">Human Resources</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Our Campus</h6>
              <div className="footer__widget--menu">
                <ul>
                  <li><Link href="/about">Accessibility </Link></li>
                  <li><Link href="/tution-fee">Financial Aid</Link></li>
                  <li><Link href="/alumni">Food Services</Link></li>
                  <li><Link href="/faculty">Housing</Link></li>
                  <li><Link href="/event">Student Life</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
            <div className="footer__widget">
              <h6 className="footer__widget--title">News Letter</h6>
              <div className="footer__widget--newsletter">
                <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="Enter your mail..." required />
                  <button className="rts_kid_button pl--20 rounded-6 min-195">
                    <span>Subscribe</span>
                    <div className="kids__btn__animation">
                      <span className="btn__icon"><i className="icon-arrow--up-right"></i></span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
