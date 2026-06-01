import Link from 'next/link';

/**
 * University-variant footer. Markup from unipix-Main/index.html lines 943–1004.
 * Copyright year (#year span) is filled by main.js on every navigation via
 * window.suInit.all → $('#year').text(...). Do not React-render the year.
 */
export default function FooterUniversity() {
  return (
    <footer className="footer v__1">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
              <div className="footer__widget--logo">
                <Link href="/"><img src="/assets/images/logo/logo__white.svg" alt="logo" /></Link>
              </div>
              <p className="footer__widget--description">
                We are passionate education dedicated to providing high-quality resources learners
                all backgrounds.
              </p>
              <div className="footer__widget--social">
                <ul className="social">
                  <li className="social__link"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                  <li className="social__link"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                  <li className="social__link"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                  <li className="social__link"><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Our Campus</h6>
              <div className="footer__widget--menu">
                <ul>
                  <li><Link href="/academic">Academic</Link></li>
                  <li><Link href="/athletics">Athletics</Link></li>
                  <li><Link href="/campus-life">Campus life</Link></li>
                  <li><Link href="/reasearch">Research</Link></li>
                  <li><Link href="/academic-area">Academic Area</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Our Campus</h6>
              <div className="footer__widget--menu">
                <ul>
                  <li><Link href="/about">About </Link></li>
                  <li><Link href="/tution-fee">Tution Fee</Link></li>
                  <li><Link href="/alumni">Alumni</Link></li>
                  <li><Link href="/faculty">Faculty Staff</Link></li>
                  <li><Link href="/event">Event</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6 className="footer__widget--title">Quick Button</h6>
              <div className="footer__widget--button">
                <Link href="/admission" className="cta__button active">Applying</Link>
                <Link href="/scholarship" className="cta__button">scholarship</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
