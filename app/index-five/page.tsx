import { buildMetadata } from '@/lib/metadata';
import HeaderHomeFive from '@/components/layout/HeaderHomeFive';
import FooterHomeFive from '@/components/layout/FooterHomeFive';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Home Layout 5',
  description: 'Sonargoan University official website alternative homepage layout.',
  path: '/index-five',
});

export default function IndexFivePage() {
  return (
    <>
      <HeaderHomeFive />
      {/* banner area */}
      <div className="banner v__5">
        <div className="banner__left__side__content">
          <div className="banner__left__side__content__social">
            <span>Follow-</span>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
          </div>
          <div className="banner__left__side__content__hour">
            <span className="time">10:30 AM - 02:45 pM</span>
            <span className="day">mON - fRI</span>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="banner__content">
                  <div className="banner__content__top">
                    <div className="banner__content__left">
                      <h5 className="banner__sub__heading"><img src="/assets/images/icon/e-cap-small.svg" alt="" /> knowledge meets innovation</h5>
                      <h1 className="banner__heading__title">
                        Explore Boundless
                        Opportunities at Sonargaon University
                      </h1>
                    </div>
                    <div className="banner__content__right">
                      <p className="banner__description__text">Welcome to Sonargaon University, where academic excellence converges with a vibrant community spirit to shape the leaders of tomorrow. Nestled within our historic campus, Sonargaon University offers a dynamic environment.</p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">View Our Program<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span></Link>
                    </div>
                  </div>
                  <div className="banner__content__bottom">
                    <div className="banner__content__bottom__left">
                      <div className="rts__circle v__3">
                        <svg className="spinner" viewBox="0 0 100 100">
                          <defs>
                            <path id="circle" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
                          </defs>
                          <text>
                            <textPath xlinkHref="#circle">Sonargaon University * Estd. 1971 * Explore Future *</textPath>
                          </text>
                        </svg>
                        <div className="rts__circle--icon save-from-hidden">
                          <a href="https://www.youtube.com/watch?v=7ahgosTZJHg" className="video-play  rts-video-btn popup-video">
                            <i className="fa-sharp fa-solid fa-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="banner__content__bottom__right o-hidden">
                      <div className="swiper  swiper-data" data-swiper='{
                                            "slidesPerView":1,
                                            "effect": "fade",
                                            "loop": true,
                                            "speed": 1000,
                                            "navigation":{
                                                "nextEl":".rts__next",
                                                "prevEl":".rts__prev"
                                            },
                                            "autoplay":{
                                                "delay":"7000"
                                            }}'>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="banner__content__slide__item">
                              <img src="/assets/images/banner/slider__5.jpg" alt="" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="banner__content__slide__item">
                              <img src="/assets/images/banner/slider__5-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="banner__content__slide__item">
                              <img src="/assets/images/banner/slider__5-3.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rts__slider--arrow v__2">
          <div className="slider__btn rts__prev">
            <i className="fa-light fa-arrow-left"></i>
          </div>
          <div className="slider__btn rts__next">
            <i className="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </div>
      {/* banner area end */}
      {/* marque style */}
      <div className="marquee">
        <div className="single__marque__item">
          <ul className="single__marque__item__list">
            <li className="single__marque__item__list__text">Anthropology <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Applied Mathematics <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Astrophysics <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Biomedical Engineering <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Arts And Humanities <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
          </ul>
          <ul className="single__marque__item__list">
            <li className="single__marque__item__list__text">Anthropology <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Applied Mathematics <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Astrophysics <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Biomedical Engineering <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Arts And Humanities <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
          </ul>
        </div>
        <div className="single__marque__item v__2">
          <ul className="single__marque__item__list">
            <li className="single__marque__item__list__text">Architecture <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Applied Computation <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Social Sciences <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Health And Wellness <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Personal Developments <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
          </ul>
          <ul className="single__marque__item__list">
            <li className="single__marque__item__list__text">Architecture <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Applied Computation <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Social Sciences <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Health And Wellness <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
            <li className="single__marque__item__list__text">Personal Developments <span><img src="/assets/images/icon/marquee__vector.svg" alt="" /></span></li>
          </ul>
        </div>
      </div>
      {/* marque style end */}
      {/* about us */}
      <div className="about rts-section-padding v__5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
              <div className="rts__section--wrapper v__7">
                <h6 className="rts__section--subheading">
                  <img src="/assets/images/icon/e-cap-small.svg" alt="" /> about
                </h6>
                <h2 className="rts__section--title mb-0">
                  History Sonargaon University
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <p className="about__description__text">
                Welcome to Sonargaon University, where academic excellence, innovation, and community thrive. Nestled in the heart of USA, our university is dedicated to fostering a diverse and inclusive environment where students from all walks of life can thrive and excel. With a rich history of scholarship and a commitment to cutting-edge research, Sonargaon University offers a wide range of programs across various disciplines, ensuring that every student can find their passion and pursue their goals.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="about__image">
                <img src="/assets/images/about/about__5.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us end */}
      {/* our program */}
      {/* TODO: Programs */}
      <section className="program pb--120">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-md-start align-items-center">
            <div className="col-lg-5">
              <div className="rts__section--wrapper v__2">
                <h6 className="rts__section--subheading">
                  <img src="/assets/images/icon/e-cap-small.svg" alt="" /> program
                </h6>
                <h2 className="rts__section--title text-capitalize">Our Programs</h2>
                <p className="rts__section--description">Embark on a journey of knowledge, discovery, and growth at Sonargaon University. Our admissions process is designed identify bright, motivated individuals who are eager contribute to our dynamic academic community.</p>
                <div className="campus__vector">
                  <img src="/assets/images/campus/campus__vector.svg" alt="" />
                </div>
                <Link href="/academic" className="rts-theme-btn btn-arrow">View All Program
                  <span><i className="fa-regular fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-10 mt-5 mt-md-0">
              <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                  <div className="program__content">
                    <div className="rts__program--item v__2" style={{ backgroundImage: 'url(/assets/images/program/program__1.jpg)' }}>
                      <h5 className="rts__program--item--title">Summer Program</h5>
                      <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at Sonargaon University.</p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span></Link>
                      <h5 className="rts__program--item--title--show">Summer Program</h5>
                    </div>
                    {/* second one */}
                    <div className="rts__program--item v__2" style={{ backgroundImage: 'url(/assets/images/program/program__2.jpg)' }}>
                      <h5 className="rts__program--item--title">Undergraduate</h5>
                      <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at Sonargaon University.</p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span></Link>
                      <h5 className="rts__program--item--title--show">Undergraduate</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="program__content mt--85">
                    <div className="rts__program--item v__2" style={{ backgroundImage: 'url(/assets/images/program/program__3.jpg)' }}>
                      <h5 className="rts__program--item--title">Summer Program</h5>
                      <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at Sonargaon University.</p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span></Link>
                      <h5 className="rts__program--item--title--show">Summer Program</h5>
                    </div>
                    {/* second one */}
                    <div className="rts__program--item v__2" style={{ backgroundImage: 'url(/assets/images/program/program__4.jpg)' }}>
                      <h5 className="rts__program--item--title">Online Program</h5>
                      <p className="rts__program--item--description">Embark on a journey of knowledge discovery, and growth at Sonargaon University.</p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">Learn More<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span></Link>
                      <h5 className="rts__program--item--title--show">Online Program</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our program end */}
      {/* campus life */}
      <div className="campus v__3 pt--120 pb--60">
        <div className="container">
          <div className="campus__wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="campus__link">
                  <Link href="/campus-life" className="campus__link--btn">
                    Campus Life
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="campus__right--text">
                  <h2 className="campus__right--text--title">
                    Thriving Beyond Classes Campus Life at Sonargaon University
                  </h2>
                  <p className="campus__right--text--description">
                    Step into a World of Possibilities: Sonargaon University Campus Life is a Hub of Energy, Creativity, and Collaboration. Discover a Home Away from Home Where Every Moment Counts.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="campus__paralax--image" style={{ backgroundImage: "url('/assets/images/campus/paralax__image-2.jpg')" }}>
      </div>

      {/* campus life end */}
      {/* testimonial */}
      <div className="rts-testimonial v__3 rts-section-padding">
        <div className="container">
          {/* testimonial content */}
          <div className="row gy-md-5 justify-content-md-center">
            <div className="col-lg-12 col-md-11">
              <div className="rts-testimonial-box v__3">
                <div className="testimonial-item">
                  <div className="testimonial-item-image">
                    <img src="/assets/images/testimonial/testimonial-big-2.jpg" alt="testimonial thumbnail" />
                  </div>
                  <div className="testimonial-item-content w-670 rt-relative">
                    <div className="swiper swiper-data" data-swiper='{
                                            "slidesPerView":1,
                                            "loop": true,
                                            "autoplay":{
                                                "delay":"3000"
                                            }
                                    }'>
                      <div className="swiper-wrapper">
                        {/* single testimonial */}
                        <div className="swiper-slide">
                          <div className="single-testimonial">
                            <div className="rt-between mb--30">
                              <div className="rt-icon">
                                <img src="/assets/images/testimonial/quote-2.svg" alt="quote icon" />
                              </div>
                            </div>
                            <h3 className="testimonial-text">
                              We can completely reimagine how our cities, hospitals, and families prepare for and deal with cold and flu season.”
                            </h3>
                            <div className="rt-testimonial-author mt--100">
                              <div className="rt-author-meta rt-flex rt-gap-20">
                                <div className="rt-author-img">
                                  <img src="/assets/images/testimonial/author-1.png" alt="author" />
                                </div>
                                <div className="rt-author-info">
                                  <h5 className="mb-1">David Jhon</h5>
                                  <p>Artist and Instructor</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* single testimonial */}
                        <div className="swiper-slide">
                          <div className="single-testimonial">
                            <div className="rt-between mb--30">
                              <div className="rt-icon">
                                <img src="/assets/images/testimonial/quote-2.svg" alt="quote icon" />
                              </div>
                            </div>
                            <h3 className="testimonial-text">
                              We can completely reimagine how our cities, hospitals, and families prepare for and deal with cold and flu season.”
                            </h3>
                            <div className="rt-testimonial-author mt--100">
                              <div className="rt-author-meta rt-flex rt-gap-20">
                                <div className="rt-author-img">
                                  <img src="/assets/images/author/02.png" alt="author" />
                                </div>
                                <div className="rt-author-info">
                                  <h5 className="mb-1">Maria Sarapova</h5>
                                  <p>Instructor</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* single testimonial */}
                        <div className="swiper-slide">
                          <div className="single-testimonial">
                            <div className="rt-between mb--30">
                              <div className="rt-icon">
                                <img src="/assets/images/testimonial/quote-2.svg" alt="quote icon" />
                              </div>
                            </div>
                            <h3 className="testimonial-text">
                              We can completely reimagine how our cities, hospitals, and families prepare for and deal with cold and flu season.”
                            </h3>
                            <div className="rt-testimonial-author mt--100">
                              <div className="rt-author-meta rt-flex rt-gap-20">
                                <div className="rt-author-img">
                                  <img src="/assets/images/testimonial/author-1.png" alt="author" />
                                </div>
                                <div className="rt-author-info">
                                  <h5 className="mb-1">De Mack</h5>
                                  <p>Singer & Instructor</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial end */}
      {/* research */}
      <section className="rts__section rts__light rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper v__10">
              <div className="rts__section--wrapper--left">
                <h6 className="rts__section--subheading">
                  <img src="/assets/images/icon/e-cap-small.svg" alt="" /> research
                </h6>
                <h2 className="rts__section--title">Sonargaon University Research
                  Centers </h2>
              </div>
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
                  <Link className="rts__research--single--meta--title" href="/research">Exploring Environmental Frontiers Unveiling Insights</Link>
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

      {/* admission */}
      <section className="rts-application-area  rts-section-padding v_2 v__3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="rts__section--wrapper v__11 rt-center">
                <h6 className="rts__section--subheading">
                  <img src="/assets/images/icon/e-cap-small.svg" alt="" /> research
                </h6>
                <h2 className="rts__section--title mb-0">Admission Now</h2>
              </div>
            </div>
          </div>
          {/* application form */}
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="rts-admission-form-image">
                <img src="/assets/images/feature/admission-form-2.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-10">
              <div className="rts-application-form ">
                <div className="rts-application-form-content v__3">
                  <h5 className="heading-title mb--25">Admission Form</h5>
                  <form className="rts-form">
                    <div className="rts-input rt-flex">
                      <div className="single-input">
                        <input type="text" name="fname" id="fname" placeholder="First Name" required />
                      </div>
                      <div className="single-input">
                        <input type="text" name="lname" id="lname" placeholder="Last Name" required />
                      </div>
                      <div className="single-input">
                        <input type="email" name="email" id="email" placeholder="Email.." required />
                      </div>
                      <div className="single-input">
                        <input type="number" name="Phone" id="Phone" placeholder="Phone" required />
                      </div>
                    </div>

                    <div className="rts-input rt-flex">
                      <div className="single-input">
                        <input type="text" name="address" id="address" placeholder="address" required />
                      </div>
                      <div className="single-input">
                        <input type="text" name="city" id="city" placeholder="City" required />
                      </div>
                      <div className="single-input">
                        <input type="text" name="country" id="country" placeholder="Country" required />
                      </div>
                      <div className="single-input">
                        <input type="number" name="zip" id="zip" placeholder="Zip Code" required />
                      </div>
                    </div>

                    <div className="rts-input rt-flex">
                      <div className="single-input">
                        <input type="text" name="data" id="datepicker" placeholder="dd/mm/yy" required className="hasDatepicker" />
                      </div>
                      <div className="single-input">
                        <input type="text" name="subject" id="subjcet" placeholder="Your Subject" />
                      </div>
                    </div>
                    <div className="rts-input w-full">
                    </div>
                    <div className="rts-input w-full">
                      <div className="single-input">
                        <textarea name="msg" id="msg" placeholder="Enter Your Comments"></textarea>
                      </div>
                    </div>
                    <button type="submit" className="rts-theme-btn rts-nbg-btn btn-arrow v2 full-btn">Apply Now <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* admission end */}

      {/* event */}
      {/* TODO: Events */}
      <section className="rts__section pb--120">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper">
              <div className="rts__section--wrapper--left">
                <h6 className="rts__section--subheading">
                  <img src="/assets/images/icon/e-cap-small.svg" alt="" /> Event
                </h6>
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
      {/* event end */}
      {/* blog */}
      {/* TODO: Blog Posts */}
      <section className="blog rts__light rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper v__8">
              <div className="rts__section--wrapper--left">
                <h6 className="rts__section--subheading">
                  <img src="/assets/images/icon/e-cap-small.svg" alt="" /> Blog
                </h6>
                <h2 className="rts__section--title mb--15">Read Our Latest News</h2>
                <p className="rts__section--description">Our mission is to provide you with valuable insights</p>
              </div>
              <div className="rts__section--link">
                <Link href="/blog" className="rts-nbg-btn btn-arrow">View All News
                  <span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span></Link>
              </div>
            </div>
          </div>
          {/* blog area */}
          <div className="row g-5">
            <div className="col-lg-6 col-md-6">
              <div className="blog__single--item v__2">
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
              <div className="blog__single--item v__2">
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

      {/* newsletter */}
      <div className="rts-newsletter v_1 rts-cta-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-newsletter-box" style={{ backgroundImage: 'url(/assets/images/newsletter/bg-1.jpg)' }}>
                <div className="rts-newsletter-box-content">
                  <h4 className="newsletter-title">Don&rsquo;t Miss Awesome Story From Our Alumni
                  </h4>
                  <div className="newsletter-form w-530">
                    <form>
                      <input type="email" name="subscription" id="subscription" placeholder="Enter Your mail" required />
                      <button type="submit" className="rts-nbg-btn btn-arrow">Subscribe <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter end */}
      <FooterHomeFive />
    </>
  );
}
