import Link from 'next/link';

/**
 * University-variant header. Markup lifted verbatim from
 * unipix-Main/index.html lines 33–138, attribute names converted to JSX.
 * jQuery plugins (sticky scroll, search popup trigger, mobile menu trigger)
 * are attached by main.js + VendorPluginInitializer.
 */
export default function HeaderUniversity() {
  return (
    <header className="header header__sticky v__1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="header__wrapper">
              <div className="header__logo">
                <Link href="/" className="header__logo--link">
                  <img src="/assets/images/logo/logo__white.svg" alt="su-website" />
                </Link>
              </div>
              <div className="header__menu">
                <div className="navigation">
                  <nav className="navigation__menu">
                    <ul>
                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="javascript:void(0);" className="navigation__menu--item__link">Home</a>
                        <ul className="submenu sub__style">
                          <li><Link href="/">Home Style One</Link></li>
                          <li><Link href="/index-two">Home Style Two</Link></li>
                          <li><Link href="/index-three">Home Style three</Link></li>
                          <li><Link href="/index-four">Home Style four</Link></li>
                          <li><Link href="/index-five">Home Style five</Link></li>
                        </ul>
                      </li>

                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="javascript:void(0);" className="navigation__menu--item__link">Pages</a>
                        <ul className="submenu sub__style">
                          <li><Link href="/about">About</Link></li>
                          <li><Link href="/athletics">Athletics</Link></li>
                          <li className="has-child has-arrow">
                            <a href="#">Faculty</a>
                            <ul className="sub__style">
                              <li><Link className="mobile-menu-link" href="/faculty-sub">Faculty</Link></li>
                              <li><Link className="mobile-menu-link" href="/faculty-sub-details">Faculty Details</Link></li>
                              <li><Link href="/faculty">Faculty Staff</Link></li>
                              <li className="has-child"><Link href="/faculty-details">Faculty Staff details</Link></li>
                            </ul>
                          </li>
                          <li><Link href="/research">Research</Link></li>
                        </ul>
                      </li>
                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="#" className="navigation__menu--item__link">Academics</a>
                        <ul className="submenu sub__style">
                          <li><Link href="/academic">Academic</Link></li>
                          <li><Link href="/admission">Admission</Link></li>
                          <li><Link href="/academic-area">Academic Area</Link></li>
                          <li><Link href="/campus-life">Campus Life</Link></li>
                          <li><Link href="/scholarship">Scholarship</Link></li>
                          <li><Link href="/tution-fee">Tution Fee</Link></li>
                          <li><Link href="/alumni">Alumni</Link></li>
                          <li><Link href="/program-single">Program Single</Link></li>
                          <li><Link href="/department-details">Department Details</Link></li>
                        </ul>
                      </li>
                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="#" className="navigation__menu--item__link">Event</a>
                        <ul className="submenu sub__style">
                          <li><Link href="/event">Event</Link></li>
                          <li><Link href="/event-details">Event Details</Link></li>
                        </ul>
                      </li>
                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="#" className="navigation__menu--item__link">Blog</a>
                        <ul className="submenu sub__style">
                          <li><Link href="/blog">Blog</Link></li>
                          <li><Link href="/blog-grid">Blog Grid</Link></li>
                          <li><Link href="/blog-list">Blog List</Link></li>
                          <li><Link href="/blog-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li className="navigation__menu--item">
                        <Link href="/contact" className="navigation__menu--item__link">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header__right">
                <div className="header__right--item">
                  <div id="langSwitcher" className="lang__trigger">
                    <span className="selected__lang">English</span>
                    <i className="fa-light fa-globe"></i>
                    <div className="translate__lang">
                      <ul>
                        <li><a href="#" className="active">English</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">Spanish</a></li>
                        <li><a href="#">Romanian</a></li>
                      </ul>
                    </div>
                  </div>
                  <div id="search-btn" className="search__trigger">
                    <i className="fa-sharp fa-light fa-magnifying-glass"></i>
                  </div>
                  <div id="menu-btn" className="menu__trigger">
                    <img src="/assets/images/icon/bar__line.svg" alt="bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
