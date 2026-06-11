import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Faculty',
  description: 'Faculty members, professors, and academic staff at Sonargoan University.',
  path: '/faculty',
});

export default function FacultyPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Faculty"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Faculty' }]}
      />

      {/* TODO: Faculty Members */}
      {/* faculty directory */}
      <section className="rts-faculty rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-11">
              <div className="rts-section mb--50">
                <h3 className="rts-section-title">Faculty &amp; Staff Directory</h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center g-5">
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/01.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">Jennifer Aarons, PhD</h5>
                    <span className="designation">Assistant Professor</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/02.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">Barry Palatnik, Ed.D</h5>
                    <span className="designation">Associate Professor of History</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/03.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">Marc Robinson, MBA</h5>
                    <span className="designation">Teaching Specialist of Accounting</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/04.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">Jennifer Aarons, PhD</h5>
                    <span className="designation">Assistant Professor</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/05.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">Chengzhang Wu, Ph.D</h5>
                    <span className="designation">Professor of Literature</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/06.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">Nancy Stempin, DBA</h5>
                    <span className="designation">Assistant Professor of Accounting</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/07.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">Michael McGarvey</h5>
                    <span className="designation">Professor of Art</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single staff item */}
            <div className="col-lg-6 col-md-11">
              <div className="single-staff">
                <div className="single-staff__content">
                  <div className="staf-image">
                    <img src="/assets/images/faculty/08.jpg" alt="staff-image" />
                  </div>
                  <div className="staf-info">
                    <h5 className="name">C. Hannah Ueno</h5>
                    <span className="designation">Professor of Art</span>
                    <div className="staf-info__social">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-medium"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                    <a href="mailto:info@su.edu.bd" className="email-contact"><span><i className="fa-light fa-envelope"></i></span>info@su.edu.bd</a>
                    <a href="calltto:121" className="phone-contact"><span><i className="fa-light fa-phone"></i></span>+1 2245 1247 241</a>
                    <div className="staf-info__speciality">
                      <p>Hospitality, Tourism, Event Management and Esports</p>
                    </div>
                    <Link href="/faculty-details" className="rts-theme-btn border-btn">More Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rts-load-more-btn rt-center mt--60">
            <Link href="/faculty-details" className="rts-theme-btn primary lh-100">Load More</Link>
          </div>
        </div>
      </section>
      {/* faculty directory end */}

      <FooterUniversity />
    </>
  );
}
