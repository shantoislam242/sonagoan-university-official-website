import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Athletics',
  description: 'Sports, fitness, and competitive athletics at Sonargoan University.',
  path: '/athletics',
});

export default function AthleticsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Athletics"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Athletics' }]}
      />

      {/* single athletics content */}
      <div className="rts-athletics rts-section-padding">
        <div className="container">
          <div className="rts-athletics__content">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="left-content">
                  <div className="athletics-image">
                    <img src="/assets/images/campus/10.jpg" alt="campus-single" />
                  </div>
                  <p className="athletics-description mt--35">
                    We have so many exciting and memorable games that have been sitting in cold storage,
                    with no one able to watch them or enjoy them,&rdquo; said Imry Halevi, assistant director of
                    athletics and director of multimedia and production. &ldquo;Our goal is to open up our history
                    to our alumni and fans.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="right-content">
                  <div className="right-content__section">
                    <h2 className="rts-section-title mb--15">Sonargaon University Athletics opens
                      the vault to sports
                    </h2>
                    <p className="description">
                      Whether it&rsquo;s watching Bobby Kennedy score a touchdown in 1947 or the
                      1990s NCAA championship win for the women&rsquo;s lacrosse team, the launch
                      of the new Harvard Athletics Video Vault makes it possible for sports fans to relive some of the University&rsquo;s most historic sporting moments.
                    </p>
                    <div className="athletics-image mt--45">
                      <img src="/assets/images/campus/11.jpg" alt="campus-single" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* single athletics content end */}

      {/* athletics gallery */}
      <div className="rts-gallery section-bg rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section mb--40 rt-center">
              <h2 className="rts-section-title">University Sport Gallery</h2>
            </div>
          </div>
          <div className="gallery-area">
            <div className="row g-5">
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x1.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/01.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x2.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/02.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x3.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/03.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x4.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/04.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x5.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/05.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x6.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/06.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* athletics gallery end */}

      {/* section three */}
      {/* single section */}
      <div className="rts-campus-section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section rt-center mb--45">
              <h3 className="rts-section-title">Athletics, Recreation, & Wellness</h3>
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
