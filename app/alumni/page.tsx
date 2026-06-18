import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Alumni',
  description: 'Sonargoan University alumni network stories, events, and giving.',
  path: '/alumni',
});

export default function AlumniPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner title="Alumni" breadcrumb={[{label:'Home',href:'/'},{label:'Alumni'}]} />

      {/* alumni banner */}
      <div className="alumni-banner rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="rts__section--wrapper v__9">
                <h2 className="rts__section--title">Save the date for Sonargaon University Reunion Homecoming!</h2>
                <p className="rts__section--description">Calling all &rsquo;4s and &rsquo;9s! It&rsquo;s time to reunite with your
                  classmates on November 24&ndash;27, 2024.</p>
              </div>
            </div>
          </div>
          {/* banner image */}
          <div className="row">
            <div className="col-sm-12">
              <div className="alumni__banner__image">
                <img src="/assets/images/banner/alumni__banner.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* alumni banner end */}

      {/* upcoming event */}
      <section className="rts__section rts-section-padding rts__light">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <div className="rts__section--wrapper--left">
                <h2 className="rts__section--title text-capitalize">Upcoming event</h2>
              </div>
              <div className="rts__section--link">
                <Link href="/event" className="rts-nbg-btn btn-arrow">View All<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
          {/* event content */}
          <div className="row g-5">
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__3">
                <div className="rts__single--event--thumb">
                  <Link href="/event-details">
                    <img src="/assets/images/event/01.jpg" alt="event" />
                  </Link>
                </div>
                <div className="rts__single--event--meta">
                  <div className="rts__single--event--meta--dl">
                    <span className="date">
                      <img src="/assets/images/icon/calendar.svg" alt="" />
                      <span>Nov 11, 2023</span>
                    </span>
                    <span className="location">
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                      <span>Yarra Park, UK</span>
                    </span>
                  </div>
                  <h5 className="rts__single--event--meta--title">
                    <Link href="/event-details">
                      Edu Fest 2023: Igniting Minds Off on
                      Transforming Lives </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__3">
                <div className="rts__single--event--thumb">
                  <Link href="/event-details">
                    <img src="/assets/images/event/02.jpg" alt="event" />
                  </Link>
                </div>
                <div className="rts__single--event--meta">
                  <div className="rts__single--event--meta--dl">
                    <span className="date">
                      <img src="/assets/images/icon/calendar.svg" alt="" />
                      <span>Nov 11, 2023</span>
                    </span>
                    <span className="location">
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                      <span>Yarra Park, UK</span>
                    </span>
                  </div>
                  <h5 className="rts__single--event--meta--title">
                    <Link href="/event-details">
                      Sustainability Showcase: Green
                      Living at Sonargaon University </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__3">
                <div className="rts__single--event--thumb">
                  <Link href="/event-details">
                    <img src="/assets/images/event/03.jpg" alt="event" />
                  </Link>
                </div>
                <div className="rts__single--event--meta">
                  <div className="rts__single--event--meta--dl">
                    <span className="date">
                      <img src="/assets/images/icon/calendar.svg" alt="" />
                      <span>Nov 11, 2023</span>
                    </span>
                    <span className="location">
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                      <span>Yarra Park, UK</span>
                    </span>
                  </div>
                  <h5 className="rts__single--event--meta--title">
                    <Link href="/event-details">
                      Career Carnival: Explore Your
                      Professional Journey </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
          </div>
        </div>
      </section>
      {/* upcoming event end */}

      {/* TODO: Alumni */}
      {/* student stories */}
      <section className="alumni-stories rts-section-padding">
        <div className="container">
          <div className="row g-5 g-md-0 justify-content-sm-center">
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-11">
              <div className="left__side">
                <div className="rts__section--wrapper v__7">
                  <h2 className="rts__section--title">Stories of Sonargaon University Student</h2>
                  <p className="rts__section--description">Embark on a journey of knowledge, discovery, and growth at Sonargaon University. Our admissions process is designed identify bright, motivated individuals who are eager contribute to our dynamic academic community.</p>
                </div>
                <div className="left__side__image">
                  <img src="/assets/images/alumni/01.jpg" alt="alumni" />
                  <h5 className="left__side__title">Voices of Victory: Sonargaon University Student Stories</h5>
                  <p className="left__side__description">Through these narratives, readers gain insight into the diverse backgrounds, aspirations, and achievements of individuals.</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-6 offset-xl-1 col-sm-11">
              <div className="right__side">
                <div className="right__side__image">
                  <img src="/assets/images/alumni/02.jpg" alt="alumni" />
                </div>
                <h5 className="right__side__title">Unveiling Sonargaon University: Inspiring Student Stories</h5>
                <p className="right__side__description">Delve into the heartfelt narratives of Sonargaon University students, where each story resonates with triumph, resilience, and personal growth. From academic achievements to life-changing experiences, these stories illuminate.</p>
                <div className="right__side__link">
                  <Link href="/program-single" className="rts-theme-btn btn-arrow">View all story
                    <span><i className="fa-regular fa-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* student stories end */}

      {/* reunion gallery */}
      <div className="rts-gallery rts__light rts-section-padding ">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper v__5">
              <h2 className="rts__section--title">University Reunion Gallery</h2>
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
      {/* reunion gallery end */}
      {/* event speaker */}
      <div className="rts-event-speaker rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <h2 className="rts__section--title text-capitalize">Event Speakers</h2>
            </div>
          </div>
          {/* event speaker list */}
          <div className="row g-5">
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/01.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Rick Zonson</Link></h5>
                    <span className="designation">Assistant Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/02.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Thomas Fred</Link></h5>
                    <span className="designation">Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/03.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Albert Mack</Link></h5>
                    <span className="designation">Head Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
            {/* single speaker item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="event-speaker">
                <div className="event-speaker__details">
                  <div className="speaker-thumb">
                    <img src="/assets/images/speaker/04.jpg" alt="speaker-thumb" />
                    <div className="speaker-social-link">
                      <a href="#"><i className="fa-brands fa-skype"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                  </div>
                  <div className="speaker-meta">
                    <h5 className="speaker__name"><Link href="/faculty-details">Micheal Alfred</Link></h5>
                    <span className="designation">Assistant Teacher</span>
                  </div>
                </div>
              </div>
            </div>
            {/* single speaker item end */}
          </div>
        </div>
      </div>
      {/* event speaker end */}

      <FooterUniversity />
    </>
  );
}
