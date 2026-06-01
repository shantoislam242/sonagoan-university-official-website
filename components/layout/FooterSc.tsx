import Link from 'next/link';

/**
 * Senior School / College variant footer. Markup from unipix-Main/index-sc.html
 * lines 874–935. Copyright year (#year) is filled by main.js on navigation.
 */
export default function FooterSc() {
  return (
    <footer className="footer sc">
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
                  <li><Link href="/athletics">Planning & Admission</Link></li>
                  <li><Link href="/campus-life">Campus Safety</Link></li>
                  <li><Link href="/reasearch">Facility Services</Link></li>
                  <li><Link href="/academic-area">Human Resources</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
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
