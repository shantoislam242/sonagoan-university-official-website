import Link from 'next/link';

/**
 * Kids-school variant header. Markup lifted verbatim from
 * unipix-Main/index-kid.html lines 33–119, attribute names converted to JSX.
 * jQuery plugins are attached by main.js + VendorPluginInitializer.
 */
export default function HeaderKid() {
  return (
    <header className="header header__sticky v__7 header__kid">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="header__wrapper">
              <div className="header__logo">
                <Link href="/index-kid" className="header__logo--link">
                  <img src="/assets/images/logo/logo__kid.svg" alt="su-website" />
                </Link>
              </div>
              <div className="header__menu">
                <div className="navigation">
                  <nav className="navigation__menu">
                    <ul>
                      <li className="navigation__menu--item">
                        <Link href="/index-kid" className="navigation__menu--item__link">Home</Link>
                      </li>

                      <li className="navigation__menu--item">
                        <Link href="/about-kid" className="navigation__menu--item__link">About Us</Link>
                      </li>

                      <li className="navigation__menu--item">
                        <Link href="/class-kid" className="navigation__menu--item__link">Programs</Link>
                      </li>
                      <li className="navigation__menu--item has-child has-arrow">
                        <a href="#" className="navigation__menu--item__link">Pages</a>
                        <ul className="submenu sub__style">
                          <li><Link href="/class-teacher-details">Teacher Details
                          </Link></li>
                          <li><Link href="/after-kid">Kid Breakfast</Link></li>
                          <li><Link href="/year-kid">Year 1-2</Link></li>
                          <li><Link href="/infant-kid">Infant & Junior School</Link></li>
                          <li><Link href="/campus-kid">School Life</Link></li>
                          <li><Link href="/kid-schedule">Class Schedule</Link></li>
                        </ul>
                      </li>
                      <li className="navigation__menu--item">
                        <Link href="/admission-kid" className="navigation__menu--item__link">Admission</Link>
                      </li>
                      <li className="navigation__menu--item">
                        <Link href="/contact-kid" className="navigation__menu--item__link">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header__right">
                <div className="header__right--item">
                  <div className="header__right__flex">
                    <div id="search-btn" className="search__trigger">
                      <i className="icon-search"></i>
                    </div>

                    <div id="langSwitcher" className="lang__trigger">
                      <span className="selected__lang">Eng</span>
                      <i className="icon-earth--filled"></i>
                      <div className="translate__lang">
                        <ul>
                          <li><a href="#" className="active">Eng</a></li>
                          <li><a href="#">Fr</a></li>
                          <li><a href="#">Sp</a></li>
                          <li><a href="#">Rm</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="header__right__button">
                    <a href="#" className="rts_kid_button">
                      <span>Enroll Now</span>
                      <div className="kids__btn__animation">
                        <span className="btn__icon"><i className="icon-arrow--up-right"></i></span>
                      </div>
                    </a>
                  </div>

                  <div id="menu-btn" className="menu__trigger">
                    <img src="/assets/images/icon/menu__bar.svg" alt="bar" />
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
