'use client';

import Link from 'next/link';
import BrandLogo from './BrandLogo';

/**
 * Off-canvas mobile drawer. Markup from unipix-Main/index.html lines 1024-1143
 * (outer side-bar wrapper + close button + desktop info wrapper + mobile menu nav).
 * Open/close toggling is driven by jQuery click handlers attached in main.js.
 * 'use client' is added because future iterations may need close-on-navigation.
 */
export default function MobileMenu() {
  return (
    <div id="side-bar" className="side-bar">
      <button className="close-icon-menu" aria-label="Close menu">
        <i className="far fa-times" />
      </button>
      <div className="inner-main-wrapper-desk">
        <div className="thumbnail">
          <BrandLogo variant="light" />
        </div>
        <div className="inner-content">
          <p className="disc">
            A modern HTML template for education, offering intuitive design &amp;
            essential features for seamless learning experiences.
          </p>
          <div className="offcanvase__banner mt--50">
            <div className="offcanvase__banner--content">
              <img src="/assets/images/offcanvase.jpg" alt="offcanvase" />
              <Link href="/admission" className="rts-theme-btn">
                Apply Now
              </Link>
            </div>
          </div>
          <div className="offcanvase__info">
            <div className="offcanvase__info--content">
              <a href="callto:+61485826710">
                <span>
                  <i className="fa-sharp fa-light fa-phone" />
                </span>
                +(61) 485-826-710
              </a>
              <a href="#">
                <span>
                  <i className="fa-sharp fa-light fa-location-dot" />
                </span>
                Yarra Park, Melbourne, Australia
              </a>
              <div className="offcanvase__info--content--social">
                <p className="title">Follow Us:</p>
                <div className="social__links">
                  <a href="#">
                    <i className="fa-brands fa-facebook" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">

          <li className="has-droupdown">
            <a href="#" className="main">Homepages</a>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" href="/">Home Style One</Link></li>
              <li><Link className="mobile-menu-link" href="/index-two">Home Style Two</Link></li>
              <li><Link className="mobile-menu-link" href="/index-three">Home Style Three</Link></li>
              <li><Link className="mobile-menu-link" href="/index-four">Home Style Four</Link></li>
              <li><Link className="mobile-menu-link" href="/index-five">Home Style Five</Link></li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">Pages</a>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" href="/about">About Us</Link></li>
              <li><Link className="mobile-menu-link" href="/athletics">Athletics</Link></li>
              <li className="has-dropdown third-lvl">
                <a href="javascript:void(0);">Faculty</a>
                <ul className="submenu third-lvl base">
                  <li><Link className="mobile-menu-link" href="/faculty-sub">Faculty</Link></li>
                  <li><Link className="mobile-menu-link" href="/faculty-sub-details">Faculty Details</Link></li>
                  <li><Link className="mobile-menu-link" href="/faculty">Faculty</Link></li>
                  <li><Link className="mobile-menu-link" href="/faculty-details">Faculty Staff details</Link></li>
                </ul>
              </li>
              <li><Link className="mobile-menu-link" href="/research">Research</Link></li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">Academics</a>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" href="/academic">Academic</Link></li>
              <li><Link className="mobile-menu-link" href="/admission">Admission</Link></li>
              <li><Link className="mobile-menu-link" href="/academic-area">Academic Area</Link></li>
              <li><Link className="mobile-menu-link" href="/campus-life">Campus Life</Link></li>
              <li><Link className="mobile-menu-link" href="/scholarship">Scholarship</Link></li>
              <li><Link className="mobile-menu-link" href="/tution-fee">Tution Fee</Link></li>
              <li><Link className="mobile-menu-link" href="/alumni">Alumni</Link></li>
              <li><Link className="mobile-menu-link" href="/program-single">Program Single</Link></li>
              <li><Link className="mobile-menu-link" href="/department-details">Department Details</Link></li>
            </ul>
          </li>

          <li className="has-droupdown">
            <a href="#" className="main">Events</a>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" href="/event">Event</Link></li>
              <li><Link className="mobile-menu-link" href="/event-details">Event Details</Link></li>
            </ul>
          </li>
          <li className="has-droupdown">
            <a href="#" className="main">Blog</a>
            <ul className="submenu mm-collapse">
              <li><Link className="mobile-menu-link" href="/blog">Blog</Link></li>
              <li><Link className="mobile-menu-link" href="/blog-grid">Blog Grid</Link></li>
              <li><Link className="mobile-menu-link" href="/blog-list">Blog List</Link></li>
              <li><Link className="mobile-menu-link" href="/blog-details">Blog Details</Link></li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className="main">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <div className="offcanvase__info--content mt--30">
        <a href="callto:+61485826710"><span><i className="fa-sharp fa-light fa-phone"></i></span>+(61) 485-826-710</a>
        <a href="#"><span><i className="fa-sharp fa-light fa-location-dot"></i></span>Yarra Park, Melbourne, Australia</a>
        <div className="offcanvase__info--content--social">
          <p className="title">Follow Us:</p>
          <div className="social__links">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
