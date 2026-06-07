import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Home',
  description:
    'Sonargoan University official website — programs, faculty, events, admission, and campus life.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeaderUniversity />

      {/* header banner */}
      <div className="banner v__1">
        <div className="container">
          <div className="col-sm-12">
            <div className="banner__wrapper">
              <div className="banner__wrapper--left">
                <img src="/assets/images/banner/image__1.jpg" alt="" />
              </div>
              <div className="banner__wrapper--middle">
                <div className="banner__content">
                  <h6 className="banner__content--sub">
                    <img src="/assets/images/icon/e-cap.svg" alt="cap" /> knowledge meets innovation
                  </h6>
                  <h1 className="banner__content--title">
                    University
                    <span> Of SU Website</span>
                  </h1>
                  <span className="home-hero-accent" />
                  <div className="banner__content--circle rts__circle v__2">
                    <svg className="spinner" viewBox="0 0 100 100">
                      <defs>
                        <path id="circle" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle">SU Website University * Estd. 1971 * Explore Future *</textPath>
                      </text>
                    </svg>
                    <div className="rts__circle--icon save-from-hidden">
                      <a href="https://www.youtube.com/watch?v=7ahgosTZJHg" className="video-play  rts-video-btn popup-video">
                        <i className="fa-sharp fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="banner__content--description">
                    <p>Remember to tailor the section names to fit the specific needs and
                      structure of your university website.
                    </p>
                    <Link href="/program-single" className="rts-theme-btn btn-arrow">View Our Program
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="banner__wrapper--right">
                <img src="/assets/images/banner/image__2.jpg" alt="banner right" />
              </div>
            </div>
            {/* banner animated shape */}
            <div className="banner__wrapper--shape">
              <img src="/assets/images/banner/banner-svg.svg" alt="banner" />
            </div>
          </div>
        </div>
        <div className="grid-line">
          <div className="grid-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      {/* header banner end */}

      {/* About */}
      <section className="about rts__padding--120-100 v__1">
        <div className="container">
          <div className="row justify-content-md-center align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="about__images">
                <div className="about__images--wrapper">
                  <div className="about__images--wrapper--left">
                    <img src="/assets/images/about/about__h1.png" alt="" />
                  </div>
                  <div className="about__images--wrapper--center">
                    <div className="rts__circle v__1">
                      <svg className="spinner" viewBox="0 0 100 100">
                        <defs>
                          <path id="circle-2" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#circle-2">SU Website University * Estd. 1971 * Explore Future *</textPath>
                        </text>
                      </svg>
                      <div className="rts__circle--icon">
                        <i className="fa-light fa-arrow-right"></i>
                      </div>
                    </div>
                  </div>
                  <div className="about__images--wrapper--right">
                    <img src="/assets/images/about/about__h2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div className="about__content">
                <h2 className="rts__title">About Our University su-website</h2>
                <p className="rts__description">At University SU Website, we believe in the transformative power of education and the boundless potential within every individual. Established in 1971, we have been dedicated to fostering intellectual curiosity, academic excellence, and a vibrant campus community.</p>
                <div className="stroke__text v__1">EST. 1971</div>
                <Link href="/program-single" className="rts-nbg-btn btn-arrow">University Overview <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
        {/* funfact */}
        <div className="container rts__pt100">
          <div className="row justify-content-center">
            <div className="col-lg-12 rts-funfact v__1">
              <div className="rts-funfact-wrapper">
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">20,000</h2>
                  <p>undergraduate & graduate
                    students</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">16,214</h2>
                  <p>SU Website University Faculty
                    & Staff</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">300k</h2>
                  <p>SU Website University alumni
                    Worldwide</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">20,000</h2>
                  <p>undergraduate & graduate
                    students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}

      {/* TODO: Programs */}
      {/* program */}
      <section className="rts__section rts__light rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <h2 className="rts__section--title">Our Programs</h2>
              <div className="rts__section--link">
                <Link href="/program-single" className="rts-nbg-btn btn-arrow">more program<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="rts__program--item" style={{ backgroundImage: 'url(/assets/images/program/program__1.jpg)' }}>
                <h5 className="rts__program--item--title">Graduation Program</h5>
                <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at SU Website University.</p>
                <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="rts__program--item" style={{ backgroundImage: 'url(/assets/images/program/program__2.jpg)' }}>
                <h5 className="rts__program--item--title">Summer Program</h5>
                <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at SU Website University.</p>
                <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="rts__program--item" style={{ backgroundImage: 'url(/assets/images/program/program__3.jpg)' }}>
                <h5 className="rts__program--item--title">Undergraduate</h5>
                <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at SU Website University.</p>
                <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="rts__program--item" style={{ backgroundImage: 'url(/assets/images/program/program__4.jpg)' }}>
                <h5 className="rts__program--item--title">Online Program</h5>
                <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at SU Website University.</p>
                <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* program end */}

      {/* campus life */}
      <section className="rts__section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="rts__section--wrapper v__2">
                <h2 className="rts__section--title">Campus Life</h2>
                <p className="rts__section--description">Embark on a journey of knowledge, discovery, and growth at SU Website University. Our admissions process is designed identify bright, motivated individuals who are eager contribute to our dynamic academic community.</p>
                <div className="campus__vector">
                  <img src="/assets/images/campus/campus__vector.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="campus__life">
                {/* single campus */}
                <div className="campus__life--single">
                  <div className="campus__life--single--bg">
                    <img src="/assets/images/campus/campus__life__bg__1.jpg" alt="" />
                  </div>
                  <div className="campus__life--single--flex">
                    <div className="campus__life--single--content">
                      <h4 className="campus__life--single--title"><Link href="/campus-life">Student Life</Link></h4>
                      <p className="campus__life--single--description">Building a vibrant community of creative and accomplished people from around.</p>
                    </div>
                    <div className="campus__life--single--button">
                      <Link href="/campus-life"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                {/* single campus end */}
                {/* single campus */}
                <div className="campus__life--single">
                  <div className="campus__life--single--bg">
                    <img src="/assets/images/campus/campus__life__bg__2.jpg" alt="" />
                  </div>
                  <div className="campus__life--single--flex">
                    <div className="campus__life--single--content">
                      <h4 className="campus__life--single--title"><Link href="/campus-life">Arts & Culture</Link></h4>
                      <p className="campus__life--single--description">Building a vibrant community of creative and accomplished people from around.</p>
                    </div>
                    <div className="campus__life--single--button">
                      <Link href="/campus-life"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                {/* single campus end */}
                {/* single campus */}
                <div className="campus__life--single">
                  <div className="campus__life--single--bg">
                    <img src="/assets/images/campus/campus__life__bg__3.jpg" alt="" />
                  </div>
                  <div className="campus__life--single--flex">
                    <div className="campus__life--single--content">
                      <h4 className="campus__life--single--title"><Link href="/athletics">Athletics</Link></h4>
                      <p className="campus__life--single--description">Building a vibrant community of creative and accomplished people from around.</p>
                    </div>
                    <div className="campus__life--single--button">
                      <Link href="/athletics"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
                {/* single campus end */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* campus life end */}

      {/* TODO: Faculty Members */}
      {/* team */}
      <section className="rts__section rts__light rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <h2 className="rts__section--title">University Professors</h2>
              <div className="rts__section--link">
                <Link href="/faculty" className="rts-nbg-btn btn-arrow">Find More Professor<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
          {/* team member area */}
          <div className="row g-5">
            {/* single team */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rts__single--member">
                <div className="rts__single--member--thumb">
                  <Link href="/faculty-details">
                    <img src="/assets/images/speaker/teacher__1.jpg" alt="" />
                  </Link>
                </div>
                <div className="rts__single--member--meta">
                  <h5 className="rts__single--member--meta--title">
                    <Link href="/faculty-details">C. Hannah Ueno</Link>
                  </h5>
                  <span className="rts__single--member--meta--designation">
                    Assistant Professor
                  </span>
                </div>
              </div>
            </div>
            {/* single team end */}
            {/* single team */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rts__single--member">
                <div className="rts__single--member--thumb">
                  <Link href="/faculty-details">
                    <img src="/assets/images/speaker/teacher__2.jpg" alt="" />
                  </Link>
                </div>
                <div className="rts__single--member--meta">
                  <h5 className="rts__single--member--meta--title">
                    <Link href="/faculty-details">Thomas Fred</Link>
                  </h5>
                  <span className="rts__single--member--meta--designation">
                    Associate Professor of History
                  </span>
                </div>
              </div>
            </div>
            {/* single team end */}
            {/* single team */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rts__single--member">
                <div className="rts__single--member--thumb">
                  <Link href="/faculty-details">
                    <img src="/assets/images/speaker/teacher__3.jpg" alt="" />
                  </Link>
                </div>
                <div className="rts__single--member--meta">
                  <h5 className="rts__single--member--meta--title">
                    <Link href="/faculty-details">Jennifer Aarons</Link>
                  </h5>
                  <span className="rts__single--member--meta--designation">
                    Professor of Art
                  </span>
                </div>
              </div>
            </div>
            {/* single team end */}
            {/* single team */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="rts__single--member">
                <div className="rts__single--member--thumb">
                  <Link href="/faculty-details">
                    <img src="/assets/images/speaker/teacher__4.jpg" alt="" />
                  </Link>
                </div>
                <div className="rts__single--member--meta">
                  <h5 className="rts__single--member--meta--title">
                    <Link href="/faculty-details">Michael McGarvey</Link>
                  </h5>
                  <span className="rts__single--member--meta--designation">
                    Professor of Literature
                  </span>
                </div>
              </div>
            </div>
            {/* single team end */}
          </div>
          {/* team member area end */}
        </div>
      </section>
      {/* team end */}

      {/* research */}
      <section className="rts__section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper v__3">
              <h2 className="rts__section--title">PUBLICATION & <br />
                RESEARCH </h2>
              <div className="rts__section--details">
                <p className="rts__description">
                  Dive into the vast array of courses offered at our university, spanning across 10+ specializations. Embrace an educational journey that ignites intellectual curiosity and nurtures intuitive learning among our students.
                </p>
                <Link href="/research" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
          {/* research content */}
          <div className="row g-5">
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__research--single">
                <div className="rts__research--single--thumb">
                  <Link href="/research">
                    <img src="/assets/images/research/01.jpg" alt="" />
                  </Link>
                </div>
                <div className="rts__research--single--meta">
                  <Link className="rts__research--single--meta--title" href="/research">Are Social Net Work Beneficial for our Society?</Link>
                  <p className="rts__research--single--meta--excerpt">
                    The American Journal of Applied Scientific Research (AJASR): A Rigorous Peer-Reviewed Platform.
                  </p>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__research--single">
                <div className="rts__research--single--thumb">
                  <Link href="/research">
                    <img src="/assets/images/research/02.jpg" alt="" />
                  </Link>
                </div>
                <div className="rts__research--single--meta">
                  <Link className="rts__research--single--meta--title" href="/research">Unveiling the Frontiers Discovery and Innovation</Link>
                  <p className="rts__research--single--meta--excerpt">
                    The American Journal of Applied Scientific Research (AJASR): A Rigorous Peer-Reviewed Platform.
                  </p>
                </div>
              </div>
            </div>
            {/* single item end */}
            {/* single item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__research--single">
                <div className="rts__research--single--thumb">
                  <Link href="/research">
                    <img src="/assets/images/research/03.jpg" alt="" />
                  </Link>
                </div>
                <div className="rts__research--single--meta">
                  <Link className="rts__research--single--meta--title" href="/research">Exploring Environmental Frontiers Unveiling Insights Labs Research</Link>
                  <p className="rts__research--single--meta--excerpt">
                    Our commitment extends beyond the confines of the laboratory walls; we aim to bridge the gap
                  </p>
                </div>
              </div>
            </div>
            {/* single item end */}
          </div>
        </div>
      </section>
      {/* research end */}

      {/* student feedback */}
      <section className="rts__section rts-section-padding rts__primary__bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="rts__section--wrapper v__4">
                <h2 className="rts__section--title">Student Feedback</h2>
                <p className="rts__section--description">Your opinion matters, and by providing feedback, you contribute to the continuous enhancement of our academic programs, support services, and campus life</p>
                <div className="rts__slider--arrow">
                  <div className="rts__prev slider__btn"><i className="fa-light fa-arrow-left"></i></div>
                  <div className="rts__next slider__btn"><i className="fa-light fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
            {/* student feedback testimonial */}
            <div className="col-lg-7">
              <div className="rts__testimonial--active swiper swiper-data" data-swiper='{
                        "slidesPerView":2,
                        "loop": true,
                        "speed": 1000,
                        "navigation":{
                            "nextEl":".rts__next",
                            "prevEl":".rts__prev"
                        },
                        "autoplay":{
                            "delay":"7000"
                        },
"breakpoints":{
                            "320":{
                                "slidesPerView": 1
                            },
                            "575":{
                                "slidesPerView": 1.5
                            },
                            "768":{
                                "slidesPerView": 2
                            },
                            "991":{
                                "slidesPerView": 2
                            },
                            "1201":{
                                "slidesPerView": 2
                            }
                        }
                    }'>
                <div className="swiper-wrapper">
                  {/* single slide */}
                  <div className="swiper-slide">
                    <div className="rts__single--testimonial">
                      <div className="rts__rating--star">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-light fa-star"></i>
                      </div>
                      <p className="rts__single--testimonial--text">
                        I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in nights, or whenever you&apos;re in the mood for a culinary.
                      </p>
                      <div className="rts__single--testimonial--author">
                        <div className="rts__single--testimonial--author--meta">
                          <div className="rts__author--img">
                            <img src="/assets/images/testimonial/author-1.png" alt="author" />
                          </div>
                          <div className="rts__author--info">
                            <h5 className="mb-0">Emma Elizabeth</h5>
                            <span className="designation">Assistant Teacher</span>
                          </div>
                        </div>
                        <div className="rts__single--testimonial--quote">
                          <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single slide end */}
                  {/* single slide */}
                  <div className="swiper-slide">
                    <div className="rts__single--testimonial">
                      <div className="rts__rating--star">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-light fa-star"></i>
                      </div>
                      <p className="rts__single--testimonial--text">
                        I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in nights, or whenever you&apos;re in the mood for a culinary.
                      </p>
                      <div className="rts__single--testimonial--author">
                        <div className="rts__single--testimonial--author--meta">
                          <div className="rts__author--img">
                            <img src="/assets/images/testimonial/author-1.png" alt="author" />
                          </div>
                          <div className="rts__author--info">
                            <h5 className="mb-0">Emma Elizabeth</h5>
                            <span className="designation">Assistant Teacher</span>
                          </div>
                        </div>
                        <div className="rts__single--testimonial--quote">
                          <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single slide end */}
                  {/* single slide */}
                  <div className="swiper-slide">
                    <div className="rts__single--testimonial">
                      <div className="rts__rating--star">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-light fa-star"></i>
                      </div>
                      <p className="rts__single--testimonial--text">
                        I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in nights, or whenever you&apos;re in the mood for a culinary.
                      </p>
                      <div className="rts__single--testimonial--author">
                        <div className="rts__single--testimonial--author--meta">
                          <div className="rts__author--img">
                            <img src="/assets/images/testimonial/author-1.png" alt="author" />
                          </div>
                          <div className="rts__author--info">
                            <h5 className="mb-0">Emma Elizabeth</h5>
                            <span className="designation">Assistant Teacher</span>
                          </div>
                        </div>
                        <div className="rts__single--testimonial--quote">
                          <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single slide end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* student feedback end */}

      {/* TODO: Events */}
      {/* UPCOMING EVENT */}
      <section className="rts__section rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <h2 className="rts__section--title">Upcoming event</h2>
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
              <div className="rts__single--event">
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
              <div className="rts__single--event">
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
                      Sustainability & Development Showcase: Green
                      Living at SU Website </Link>
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
              <div className="rts__single--event">
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
      {/* UPCOMING EVENT END */}

      {/* TODO: News */}
      {/* blog area start */}
      <div className="rts-blog v_1 rts__light rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-11 col-lg-12">
              <div className="rts-section rts-border-bottom-1 mb--50 pb--20">
                <h2 className="rts-section-title text-uppercase">
                  Latest Blogs
                </h2>
                <p className="rts-section-description">Whether you&rsquo;re considering a foundation course or an undergraduate academics is a place.</p>
                <Link href="/blog" className="rts-nbg-btn btn-arrow">View All<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
          {/* blog content */}
          <div className="row g-5 justify-content-md-center">
            <div className="col-md-11 col-lg-6">
              <div className="rts-blog-post blog-v-full">
                <div className="single-blog-post">
                  <Link href="/blog-details" className="blog-thumb">
                    <img src="/assets/images/blog/big-thumb-1.jpg" alt="blog-thumb" />
                  </Link>
                  <div className="blog-content">
                    <div className="post-meta">
                      <div className="rt-author">
                        <span>
                          <i className="fa-light fa-user"></i>
                        </span>
                        <a href="#">Masum Sakib</a>
                      </div>
                      <div className="rt-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                    </div>
                    <Link href="/blog-details" className="post-title">
                      Classroom community-building It&rsquo;s ok to try something new!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-11 col-lg-6">
              <div className="rts-blog-post">
                {/* single blog */}
                <div className="single-blog-post">
                  <div className="blog-thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/small-thumb-1.jpg" alt="post-thumbnail" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <div className="rt-author">
                        <span>
                          <i className="fa-light fa-user"></i>
                        </span>
                        <a href="#">Samira Khan</a>
                      </div>
                      <div className="rt-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                    </div>
                    <Link href="/blog-details" className="post-title">
                      Those inequalities are inequalities that occur within households
                    </Link>
                  </div>
                </div>
                {/* single blog */}
                <div className="single-blog-post">
                  <div className="blog-thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/small-thumb-2.jpg" alt="post-thumbnail" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <div className="rt-author">
                        <span>
                          <i className="fa-light fa-user"></i>
                        </span>
                        <a href="#">Zent Ekizie</a>
                      </div>
                      <div className="rt-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                    </div>
                    <Link href="/blog-details" className="post-title">
                      Those inequalities are inequalities that occur within households
                    </Link>
                  </div>
                </div>
                {/* single blog */}
                <div className="single-blog-post">
                  <div className="blog-thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/small-thumb-3.jpg" alt="post-thumbnail" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <div className="rt-author">
                        <span>
                          <i className="fa-light fa-user"></i>
                        </span>
                        <a href="#">Zayed Khan</a>
                      </div>
                      <div className="rt-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                    </div>
                    <Link href="/blog-details" className="post-title">
                      After decades of improvement, cardiovascular health rates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog area end */}

      <FooterUniversity />
    </>
  );
}
