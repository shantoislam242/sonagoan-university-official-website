import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Campus Life',
  description: 'Student life, clubs, residences, and campus culture at Sonargoan University.',
  path: '/campus-life',
});

export default function CampusLifePage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Campus Life"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Campus Life' }]}
      />

      {/* campus life */}
      {/* TODO: Campus Life */}
      <div className="rts-campus-life rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="campus-life">
              <div className="campus-life__content">
                <h1 className="section-title">Campus Life</h1>
                <p className="description w-680">
                  Our thriving residential campus is home to a community of creative and
                  accomplished people from around the world.
                </p>
                <div className="campus-video">
                  <img src="/assets/images/campus/video-bg.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* campus life end */}

      {/* funfact */}
      <div className="rts-funfact v_2 stroke">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 ">
              <div className="rts-funfact-wrapper">
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">1,623</h2>
                  <p>Faculty Members</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">6:1</h2>
                  <p>Student-to-faculty Ratio</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">Nearly 200</h2>
                  <p>Graduate Fields of study</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* funfact end */}

      {/* section one */}
      {/* TODO: Campus Life */}
      <div className="rts-campus-section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section rt-center mb--45">
              <h3 className="rts-section-title">Student Life</h3>
            </div>
          </div>
          <div className="row g-5">
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/01.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Student Affairs</a></h5>
                    <p className="item-description">Comprising more than 25 offices &amp; centers, Student Affairs provides a broad of this services.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/02.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Housing &amp; Dining</a></h5>
                    <p className="item-description">Nearly all undergraduates and more than 65% graduate students reside in 81 merit undergraduate</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/03.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Engagement &amp; Diversity</a></h5>
                    <p className="item-description">Growing up in the Chicago suburbs, Jess found video games to be a rich portal to alternative.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
          </div>
        </div>
      </div>
      {/* single section end */}

      {/* section two */}
      {/* TODO: Campus Life */}
      <div className="rts-campus-section rts-section-padding v_2">
        <div className="container">
          <div className="row">
            <div className="rts-section rt-center mb--45">
              <h3 className="rts-section-title">Arts &amp; Culture</h3>
            </div>
          </div>
          <div className="row g-5">
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/04.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">The Arts at Sonargaon University</a></h5>
                    <p className="item-description">Stanford has a rich tradition of fostering creativity and the arts, A vibrant campus</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/05.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Museums</a></h5>
                    <p className="item-description">The Stanford campus is home to two world-class art museums.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/06.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Performing Arts</a></h5>
                    <p className="item-description">Presents range performances and distinctive performing arts experiences.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
          </div>
        </div>
      </div>
      {/* single section end */}

      {/* section three */}
      {/* TODO: Campus Life */}
      <div className="rts-campus-section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section rt-center mb--45">
              <h3 className="rts-section-title">Athletics, Recreation, &amp; Wellness</h3>
            </div>
          </div>
          <div className="row g-5">
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/07.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Recreation and Wellness</a></h5>
                    <p className="item-description">Students, faculty, recreational facilities and wellness programs.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/08.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">Cardinal Athletics</a></h5>
                    <p className="item-description">Stanford students compete in 36 varsity sports and 43 club sports.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-item">
                <div className="single-item__content">
                  <div className="single-item__image">
                    <img src="/assets/images/campus/09.jpg" alt="item-image" />
                  </div>
                  <div className="single-item__meta">
                    <h5 className="item-title"><a href="#">BeWell</a></h5>
                    <p className="item-description">Offers incentives, programs, and activities that promote health and wellness.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* single item end */}
          </div>
        </div>
      </div>
      {/* single section end */}

      <FooterUniversity />
    </>
  );
}
