import Link from 'next/link';

/**
 * Senior School / College variant header. Markup lifted verbatim from
 * unipix-Main/index-sc.html lines 32–126 (the outer <div class="header
 * rts__header v__6 ..."> block), attribute names converted to JSX, and the
 * @@class placeholder token removed. jQuery plugins are attached by
 * main.js + VendorPluginInitializer.
 */
export default function HeaderSc() {
  return (
    <div className="header rts__header v__6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="rts__header__wrapper">
              <div className="rts__logo">
                <Link href="/index-sc" className="rts__logo--link">
                  <img src="/assets/images/logo/logo-sc.svg" alt="SU Website School" />
                </Link>
              </div>
              <div className="header__content">
                <div className="header__content__top">
                  <div className="header__content__top__left">
                    <a href="#"><i className="fa-classic fa-light fa-location-dot"></i> 2702 Memory Lane, Chicago, IL 60605</a>
                  </div>
                  <div className="header__content__top__right">
                    <div className="follow_us">
                      <span>Follow Us-</span>
                      <div>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                      </div>
                    </div>
                    <div className="header__right--item">
                      <div id="search-btn" className="search__trigger">
                        <i className="fa-sharp fa-light fa-magnifying-glass"></i>
                      </div>
                      <div id="langSwitcher" className="lang__trigger">
                        <span className="selected__lang">En</span>
                        <i className="fa-light fa-globe"></i>
                        <div className="translate__lang">
                          <ul>
                            <li><a href="#" className="active">En</a></li>
                            <li><a href="#">Fr</a></li>
                            <li><a href="#">Sp</a></li>
                            <li><a href="#">Ru</a></li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="header__content__bottom">
                  <div className="menu ">
                    <div className="navigation">
                      <nav className="navigation__menu">
                        <ul>
                          <li className="navigation__menu--item">
                            <Link href="/index-sc" className="navigation__menu--item__link">Home</Link>
                          </li>

                          <li className="navigation__menu--item has-child has-arrow">
                            <a href="javascript:void(0);" className="navigation__menu--item__link">Program</a>
                            <ul className="submenu sub__style">
                              <li><Link href="/primary-school">Primary School</Link></li>
                              <li><Link href="/middle-school">Secondary School</Link></li>
                              <li><Link href="/six-form">Sixth Form</Link></li>
                              <li><Link href="/senior-school">Senior School</Link></li>
                            </ul>
                          </li>
                          <li className="navigation__menu--item">
                            <Link href="/campus-life-sc" className="navigation__menu--item__link">School Life</Link>
                          </li>
                          <li className="navigation__menu--item has-child has-arrow">
                            <a href="#" className="navigation__menu--item__link">Academics</a>
                            <ul className="submenu sub__style">
                              <li><Link href="/tution-fee-sc">Tution Fee</Link></li>
                              <li><Link href="/admission-sc">Apply Admission</Link></li>
                            </ul>
                          </li>
                          <li className="navigation__menu--item">
                            <Link href="/single-resource" className="navigation__menu--item__link">Resource</Link>
                          </li>
                          <li className="navigation__menu--item">
                            <Link href="/about-sc" className="navigation__menu--item__link">About</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="humberger">
                    <div id="menu-btn" className="menu__trigger">
                      <img src="/assets/images/icon/bar__line__black.svg" alt="bar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
