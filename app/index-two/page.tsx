import { buildMetadata } from '@/lib/metadata';
import HeaderHomeTwo from '@/components/layout/HeaderHomeTwo';
import FooterHomeTwo from '@/components/layout/FooterHomeTwo';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Home — Layout 2',
  description: 'Sonargoan University official website — alternative homepage layout.',
  path: '/index-two',
});

export default function IndexTwoPage() {
  return (
    <>
      <HeaderHomeTwo />
      {/* header banner */}
      <div className="banner v__2">
        <div className="banner__wrapper">
          <div className="swiper  swiper-data" data-swiper='{
                        "slidesPerView":1,
                        "effect": "fade",
                        "loop": true,
                        "speed": 1000,
                        "autoplay":{
                            "delay":"7000"
                }}'>
            <div className="swiper-wrapper">
              {/* single slides */}
              <div className="swiper-slide">
                <div className="banner__wrapper--bg" style={{ backgroundImage: 'url(/assets/images/banner/01.jpg)' }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="banner__slides--container banner__height">
                          <div className="banner__slides--content">
                            <div className="banner__slides--content--sub">
                              <img src="/assets/images/icon/e-cap.svg" alt="cap" /> knowledge meets
                              innovation
                            </div>
                            <h1 className="banner__slides--content--title">
                              Unleashing Potential
                              Fostering Excellence
                            </h1>
                            <Link href="/program-single" className="rts-theme-btn btn-arrow">View Our Program
                              <span><i className="fa-regular fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single slides end */}
              {/* single slides */}
              <div className="swiper-slide">
                <div className="banner__wrapper--bg" style={{ backgroundImage: 'url(/assets/images/banner/02.jpg)' }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="banner__slides--container banner__height">
                          <div className="banner__slides--content">
                            <div className="banner__slides--content--sub">
                              <img src="/assets/images/icon/e-cap.svg" alt="cap" /> knowledge meets
                              innovation
                            </div>
                            <h1 className="banner__slides--content--title">
                              Unleashing Potential
                              Fostering Excellence
                            </h1>
                            <Link href="/program-single" className="rts-theme-btn btn-arrow">View Our Program
                              <span><i className="fa-regular fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single slides end */}
            </div>
          </div>
          <div className="banner__slides--navigation">
            <div className="banner__slides--navigation--single">
              <h5 className="nav__title">Undergraduate</h5>
              <Link href="/academic" className="nav__description">Browse the undergraduate
                degrees</Link>
            </div>
            <div className="banner__slides--navigation--single">
              <h5 className="nav__title">Graduate</h5>
              <Link href="/academic" className="nav__description">Browse the graduate degrees</Link>
            </div>
          </div>
        </div>
      </div>
      {/* header banner end */}
      {/* about us */}
      <section className="about v__2 pt--120 pb--80">
        <div className="container">
          <div className="row justify-content-md-center g-5">
            <div className="col-lg-6 col-md-9">
              <div className="about__left--content">
                <div className="about__left--content--left">
                  <img src="/assets/images/about/about__h2-1.png" alt="" />
                </div>
                <div className="about__left--content--center">
                  <div className="rts__circle v__1">
                    <svg className="spinner" viewBox="0 0 100 100">
                      <defs>
                        <path id="circle" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle">Sonargaon University * Estd. 1971 * Explore Future *
                        </textPath>
                      </text>
                    </svg>
                    <div className="rts__circle--icon">
                      <i className="fa-light fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
                <div className="about__left--content--right">
                  <img src="/assets/images/about/about__h2-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="about__right--content">
                <div className="about__right--content--sub">
                  <img src="/assets/images/icon/e-cap-pix.svg" alt="cap" />
                  knowledge meets innovation
                </div>
                <h2 className="about__right--content--title">About University</h2>
                <p className="about__right--content--description">At Sonargaon University, we believe in the
                  transformative power of education and the boundless potential that resides within each
                  individual.</p>
                <p className="about__right--content--description">Our mission is to foster intellectual curiosity,
                  empower individuals to realize their fullest potential, and contribute meaningfully to the
                  betterment of society. commitment to academic excellence, diversity, and community
                  engagement.</p>
                <div className="about__right--content--vision">
                  <div className="mision">
                    <div className="mision__icon">
                      <img src="/assets/images/icon/mission.svg" alt="" />
                    </div>
                    <div className="mision__title">
                      University Mission
                      Statement
                    </div>
                  </div>
                  <div className="vision">
                    <div className="vision__icon">
                      <img src="/assets/images/icon/vission.svg" alt="" />
                    </div>
                    <div className="vision__title">
                      University Vision
                      Achievement
                    </div>
                  </div>
                </div>
                <Link href="/program-single" className="rts-theme-btn btn-arrow">View Our Program
                  <span><i className="fa-regular fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about us end */}
      {/* fun fact */}
      <div className="rts-funfact v__2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 ">
              <div className="rts-funfact-wrapper">
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">90%</h2>
                  <p>post-graduation success rate</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">Top 10</h2>
                  <p>Colleges that Create Futures</p>
                </div>
                <div className="single-cta-item">
                  <h2 className="single-cta-item__title">No. 1</h2>
                  <p>in the nation for materials R&amp;D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fun fact end */}
      {/* academic program */}
      <section className="program rts-section-padding">
        <div className="container">
          <div className="row rt-center">
            <div className="col-sm-12">
              <div className="rts__section--wrapper v__5">
                <h2 className="rts__section--title">Academics &amp; Program</h2>
              </div>
            </div>
          </div>
          {/* TODO: Programs */}
          <div className="row justify-content-md-center g-0">
            <div className="col-lg-4 col-md-10">
              <div className="program__single--item">
                <div className="program__single--item--bg">
                  <img src="/assets/images/program/program__bg.jpg" alt="" />
                </div>
                <h5 className="program__single--item--title">undergraduate</h5>

                <ul className="program__single--item--list">
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Anthropology
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Mathematics
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Biomedical Engineering
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Astrophysics
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-10">
              <div className="program__single--item v__2">
                <div className="program__single--item--bg">
                  <img src="/assets/images/program/program__bg.jpg" alt="" />
                </div>
                <h5 className="program__single--item--title">graduate</h5>

                <ul className="program__single--item--list">
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Computation
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Mathematics
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Computation
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Architecture
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-10">
              <div className="program__single--item">
                <div className="program__single--item--bg">
                  <img src="/assets/images/program/program__bg.jpg" alt="" />
                </div>
                <h5 className="program__single--item--title">Lifelong Learning</h5>

                <ul className="program__single--item--list">
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Personal Development
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Arts and Humanities
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Health and Wellness
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Social Sciences
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* academic program end */}
      {/* campus life */}
      <section className="campus rts__primary__bg-2 rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper v__6">
              <p className="rts__section--wrapper--description">
                Building a vibrant community of creative and accomplished people from around the world
              </p>
              <h2 className="rts__section--wrapper--title">
                Campus <span> Life</span>
              </h2>
            </div>
          </div>
          {/* content */}
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="campus__single--item">
                <Link href="/campus-life">
                  <div className="campus__single--item--thumb">
                    <img src="/assets/images/campus/01.jpg" alt="" />
                  </div>
                </Link>
                <h5 className="campus__single--item--title"><Link href="/campus-life">Student Life <span><i className="fa-light fa-arrow-right"></i></span></Link></h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="campus__single--item">
                <Link href="/campus-life">
                  <div className="campus__single--item--thumb">
                    <img src="/assets/images/campus/02.jpg" alt="" />
                  </div>
                </Link>
                <h5 className="campus__single--item--title"><Link href="/campus-life">Arts &amp; Culture <span><i className="fa-light fa-arrow-right"></i></span></Link></h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="campus__single--item">
                <Link href="/campus-life">
                  <div className="campus__single--item--thumb">
                    <img src="/assets/images/campus/03.jpg" alt="" />
                  </div>
                </Link>
                <h5 className="campus__single--item--title"><Link href="/campus-life">Recreation &amp; Wellness <span><i className="fa-light fa-arrow-right"></i></span></Link></h5>
              </div>
            </div>
          </div>
        </div>
        {/* shape area */}
        <div className="rts__shape">
          <img src="/assets/images/icon/note_khata.svg" className="rts__shape--1" alt="" />
          <img src="/assets/images/icon/book.svg" className="rts__shape--2" alt="" />
          <img src="/assets/images/icon/compas_scale.svg" className="rts__shape--3" alt="" />
        </div>
      </section>
      {/* campus life end */}
      {/* tution fee */}
      <section className="tution rts-section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-4">
              <div className="rts__section--wrapper v__7">
                <h2 className="rts__section--title">Tuition Fees at
                  Sonargaon University</h2>
                <p className="rts__section--description">
                  At Sonargaon University Name we are committed to providing a high-quality education that is accessible to a diverse range of students.
                </p>
                <Link href="/tution-fee" className="rts-theme-btn btn-arrow">Plan Details
                  <span><i className="fa-regular fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tution__single--box v__1">
                <h5 className="tution__single--box--title">Undergraduate Programs</h5>
                <h6 className="tution__single--box--faculty">College of Arts and Sciences</h6>
                <ul className="tution__single--box--feature">
                  <li>Full-Time Tuition (per semester): $241</li>
                  <li>Part-Time Tuition (per credit): $141</li>
                </ul>
                <h6 className="tution__single--box--faculty">School of Business</h6>
                <ul className="tution__single--box--feature">
                  <li>Full-Time Tuition (per semester): $241</li>
                  <li>Part-Time Tuition (per credit): $141</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tution__single--box">
                <h5 className="tution__single--box--title">Graduate Programs</h5>
                <h6 className="tution__single--box--faculty">Graduate School/Department</h6>
                <ul className="tution__single--box--feature">
                  <li>Full-Time Tuition (per semester): $241</li>
                  <li>Part-Time Tuition (per credit): $141</li>
                </ul>
                <h6 className="tution__single--box--faculty">Additional Fees</h6>
                <ul className="tution__single--box--feature">
                  <li>Technology Fee: $149 per semester</li>
                  <li>Student Activity Fee: $99 per semester</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tution fee end */}
      {/* scholarship appication */}
      <section className="rts-scholarship rts-scholarship-bg rts-section-height">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="rts-scholarship-info">
                <h2 className="rts-section-title">Scholarships and Financial Aid</h2>
                <p className="w-740 mb--50">Each semester, Brac University is proud to honor academically talented and exceptionally skilled students with a variety of scholarships and awards. The university annually awards more than 100 million takas as scholarships to both undergraduate and postgraduate students.</p>
                <Link href="/scholarship" className="rts-theme-btn btn-arrow">Know More<span><i className="fa-thin fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* scholarship appication end */}

      {/* notice board start */}
      <section className="rts-notice rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper v__8">
              <h2 className="rts__section--title">Alumni Event</h2>
              <div className="rts__section--link">
                <Link href="/event" className="rts-nbg-btn btn-arrow">View All
                  <span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span></Link>
              </div>
            </div>
          </div>
          {/* TODO: Events */}
          <div className="row g-0 justify-content-md-center">
            <div className="col-md-11 col-lg-7">
              <div className="rts-event-section">
                <div className="rts-event-section-content">
                  <ul className="list-unstyled rts-counter">
                    <li className="single-event">
                      <div className="single-event-counter">
                        <div className="count-number rt-clip-text"></div>
                      </div>
                      <div className="single-event-content">
                        <h5 className="event-title">Diversity, Equity, and Inclusion</h5>
                        <div className="single-event-content-meta">
                          <div className="event-date">
                            <span><i className="fal fa-calendar"></i></span>
                            <span>November 28, 2023</span>
                          </div>

                          <div className="event-time">
                            <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                            <span>10:30 am</span>
                          </div>
                          <div className="event-place">
                            <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                            <span>Yarra Park, UK</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="single-event">
                      <div className="single-event-counter">
                        <div className="count-number rt-clip-text"></div>
                      </div>
                      <div className="single-event-content">
                        <h5 className="event-title">Talking Money With Kids and Teens</h5>
                        <div className="single-event-content-meta">
                          <div className="event-date">
                            <span><i className="fal fa-calendar"></i></span>
                            <span>November 28, 2023</span>
                          </div>
                          <div className="event-time">
                            <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                            <span>10:30 am</span>
                          </div>
                          <div className="event-place">
                            <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                            <span>Yarra Park, UK</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="single-event">
                      <div className="single-event-counter">
                        <div className="count-number rt-clip-text"></div>
                      </div>
                      <div className="single-event-content">
                        <h5 className="event-title">Planning for College After Affirmative Action</h5>
                        <div className="single-event-content-meta">
                          <div className="event-date">
                            <span><i className="fal fa-calendar"></i></span>
                            <span>November 28, 2023</span>
                          </div>
                          <div className="event-time">
                            <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                            <span>10:30 am</span>
                          </div>
                          <div className="event-place">
                            <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                            <span>Yarra Park, UK</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-11 col-lg-5">
              <div className="event__background">
                <img src="/assets/images/event/event__bg.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* notice board end */}
      {/* student feedback */}
      <section className="feedback rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="rts__section--wrapper v__9">
                <h2 className="rts__section--title">My Students Feedback</h2>
                <p className="rts__section--description">You&apos;ll find something to spark your curiosity and enhance</p>
              </div>
            </div>
          </div>
          {/* feedback slider */}
          <div className="row">
            <div className="col-lg-12">
              <div className="rts__testimonial--active swiper swiper-data" data-swiper='{
                        "slidesPerView":3,
                        "loop": true,
                        "speed": 1000,
                        "pagination":{
                            "el":".rts__pagination",
                            "clickable": true
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
                                "slidesPerView": 2.2
                            },
                            "1201":{
                                "slidesPerView": 3
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
                            <img src="/assets/images/testimonial/author-2.png" alt="author" />
                          </div>
                          <div className="rts__author--info">
                            <h5 className="mb-0">Samantha Willow</h5>
                            <span className="designation"> Teacher</span>
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
                            <img src="/assets/images/testimonial/author-3.png" alt="author" />
                          </div>
                          <div className="rts__author--info">
                            <h5 className="mb-0">Zent Ekizie</h5>
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
                <div className="rts__pagination v__1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* student feedback end */}

      {/* blog */}
      <section className="blog pt--120">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper v__8">
              <div className="rts__section--wrapper--left">
                <h2 className="rts__section--title mb--15">Read Our Latest News</h2>
                <p className="rts__section--description">Our mission is to provide you with valuable insights</p>
              </div>
              <div className="rts__section--link">
                <Link href="/blog" className="rts-nbg-btn btn-arrow">View All
                  <span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span></Link>
              </div>
            </div>
          </div>
          {/* blog area */}
          {/* TODO: Blog Posts */}
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <div className="blog__single--item">
                <Link href="/blog-details" className="blog__single--item--link">
                  <div className="blog__single--item--thumb">
                    <img src="/assets/images/blog/blog__1.jpg" alt="" />
                  </div>
                </Link>
                <div className="blog__single--item--meta">
                  <a href="#" className="blog__cat">Campus</a>
                  <h5 className="blog__single--item--title">
                    <Link href="/blog-details">10 from Harvard named Rhodes Scholars</Link>
                  </h5>
                  <p className="blog__single--item--excerpt">You&apos;ll find something to spark your
                    curiosity and enhance</p>

                  <div className="blog__single--item--info">
                    <div className="author">
                      <span><i className="fa-thin fa-user"></i></span>
                      <a href="#">Jon Adam</a>
                    </div>
                    <div className="date">
                      <span><i className="fa-sharp fa-thin fa-calendar"></i></span>
                      <p>Oct 29, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blog__single--item">
                <Link href="/blog-details" className="blog__single--item--link">
                  <div className="blog__single--item--thumb">
                    <img src="/assets/images/blog/blog__2.jpg" alt="" />
                  </div>
                </Link>
                <div className="blog__single--item--meta">
                  <a href="#" className="blog__cat">Marketing</a>
                  <h5 className="blog__single--item--title">
                    <Link href="/blog-details">Announcing the winners the 2023 Education </Link>
                  </h5>
                  <p className="blog__single--item--excerpt">You&apos;ll find something to spark your
                    curiosity and enhance</p>

                  <div className="blog__single--item--info">
                    <div className="author">
                      <span><i className="fa-thin fa-user"></i></span>
                      <a href="#">Jon Adam</a>
                    </div>
                    <div className="date">
                      <span><i className="fa-sharp fa-thin fa-calendar"></i></span>
                      <p>Oct 29, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
      {/* brand slider */}
      <div className="rts-brand v_1 pb--85 pt--85">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-11">
              <div className="rts-brand-slider swiper swiper-data" data-swiper='{
                    "slidesPerView":6,
                    "loop": true,
                    "autoplay":{
                        "delay":"3000"
                    },
                    "breakpoints":{
                        "320":{
                            "slidesPerView": 3,
                            "centeredSlides": true
                        },
                        "575":{
                            "slidesPerView": 4,
                            "centeredSlides": true
                        },
                        "768":{
                            "slidesPerView": 5,
                            "centeredSlides": true
                        },
                        "991":{
                            "slidesPerView": 6,
                            "centeredSlides": true
                        },
                        "1201":{
                            "slidesPerView": 6
                        }
                    }
            }'>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/01.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/02.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/03.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/04.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/05.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/06.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brand slider end */}
      <FooterHomeTwo />
    </>
  );
}
