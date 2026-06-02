import Link from 'next/link';
import BrandLogo from './BrandLogo';

/**
 * Variant footer for /index-three. Markup from unipix-Main/index-three.html lines 732+.
 */
export default function FooterHomeThree() {
  return (
    <footer className="rts-footer v_2 pt--100 pb--100">
      <div className="container">
        <div className="row gy-5 gy-lg-0">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="rts-footer-widget w-320">
              <div className="d-block rts-footer-logo mb--40">
                <BrandLogo variant="dark" />
              </div>
              <p>
                We are passionate education dedicated to providing high-quality
                resources learners all backgrounds.
              </p>
              <div className="rts-contact-link">
                <a href="mailto:contact@reacthemes.com"><i className="fa-sharp fa-light fa-location-dot"></i> Park, Melbourne, Australia </a>
                <a href="callto:121"><i className="fa-thin fa-phone"></i> 485-826-710</a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="rts-footer-widget ">
              <h6 className="rt-semi">Our Campus</h6>
              <div className="rts-footer-menu">
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
          <div className="col-lg-2 col-md-6 col-sm-4">
            <div className="rts-footer-widget ml--30">
              <h6 className="rt-semi">Our Campus</h6>
              <div className="rts-footer-menu">
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
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="rts-footer-widget ml--30">
              <h6 className="rt-semi">Recent Post</h6>
              <div className="rts-post-widget">
                <ul className="list-unstyled">
                  <li className="single-post">
                    <Link href="/blog-details" className="blog-thumb">
                      <img src="/assets/images/blog/w-1.jpg" alt="latest post" />
                    </Link>
                    <div className="post-content">
                      <span className="rt-date">October 29, 2023</span>
                      <Link href="/blog-details">
                        Avoid These 4 Common When Managing Remote Teams
                      </Link>
                    </div>
                  </li>
                  <li className="single-post">
                    <Link href="/blog-details" className="blog-thumb">
                      <img src="/assets/images/blog/small-thumb-1.jpg" alt="latest post" />
                    </Link>
                    <div className="post-content">
                      <span className="rt-date">October 29, 2023</span>
                      <Link href="/blog-details">
                        Avoid These 4 Common When Managing Remote Teams
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
