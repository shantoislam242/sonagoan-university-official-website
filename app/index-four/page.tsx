import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Home — Layout 4',
  description: 'Sonargoan University official website — alternative homepage layout.',
  path: '/index-four',
});

export default function IndexFourPage() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />
      {/* hero slider start */}
      <div className="rts-hero-slider rt-relative v_2">
        <div
          className="rts-hero-slider-active swiper swiper-data"
          data-swiper='{
            "slidesPerView":1,
            "effect": "fade",
            "loop": false,
            "speed": 1000,
            "navigation":{
                "nextEl":".rt-next",
                "prevEl":".rt-prev"
            },
            "autoplay":{
                "delay":"7000"
            }
}'
        >
          <div className="swiper-wrapper">
            {/* single slider */}
            <div className="swiper-slide">
              <div className="rts-slider-height rts-slider-overlay rt-relative ">
                <div
                  className="rts-slider-bg"
                  data-background="assets/images/banner/slider__4.jpg"
                  style={{ backgroundImage: 'url(/assets/images/banner/slider__4.jpg)' }}
                ></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-6 col-md-8 col-sm-9">
                      <div className="rts-slider">
                        <div className="rts-slider-content">
                          <h6 className="rts-subtitle">
                            <img src="/assets/images/icon/e-cap.svg" alt="education hat" /> knowledge meets innovation
                          </h6>
                          <h1 className="rts-slider-title">
                            Inspiring Minds Shaping Futures
                          </h1>
                          <p className="rts-slider-desc">
                            Remember to tailor the section names to fit the specific needs and structure of your university website.
                          </p>
                          <div className="rts-slider-btn">
                            <Link href="/academic" className="rts-theme-btn btn-arrow">
                              View Our Program <span><i className="fa-thin fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* single slider */}
            <div className="swiper-slide">
              <div className="rts-slider-height rts-slider-overlay rt-relative ">
                <div
                  className="rts-slider-bg"
                  data-background="assets/images/banner/slider__5.jpg"
                  style={{ backgroundImage: 'url(/assets/images/banner/slider__5.jpg)' }}
                ></div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-6 col-xl-6 col-md-8 col-sm-9">
                      <div className="rts-slider">
                        <div className="rts-slider-content">
                          <h6 className="rts-subtitle">
                            <img src="/assets/images/icon/e-cap.svg" alt="education hat" /> knowledge meets innovation
                          </h6>
                          <h1 className="rts-slider-title">
                            Inspiring Minds Shaping Futures
                          </h1>
                          <p className="rts-slider-desc">
                            Remember to tailor the section names to fit the specific needs and structure of your university website.
                          </p>
                          <div className="rts-slider-btn">
                            <Link href="/academic" className="rts-theme-btn btn-arrow">
                              View Our Program <span><i className="fa-thin fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider arrow */}
          <div className="rts-slider-arrow">
            <div className="rt-slider-btn rt-next">
              <i className="fa-regular fa-arrow-left"></i>
            </div>
            <div className="rt-slider-btn rt-prev">
              <i className="fa-regular fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      {/* hero slider  end */}
      {/* apply start */}
      <section className="rts-application-area  rts-section-padding v_2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="rts-section rt-center mb--80">
              <h2 className="rts-section-title">Apply Now</h2>
            </div>
          </div>
          {/* application form */}
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="rts-admission-form-image">
                <img src="/assets/images/feature/admission-form.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-10">
              <div className="rts-application-form ">
                <div className="rts-application-form-content v__2">
                  <h5 className="heading-title mb--25">Application Form</h5>
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
                        <input type="text" name="data" id="datepicker" placeholder="dd/mm/yy" required />
                      </div>
                      <div className="single-input">
                        <input type="text" name="subject" id="subjcet" placeholder="Your Subject" />
                      </div>
                    </div>
                    <div className="rts-input w-full"></div>
                    <div className="rts-input w-full">
                      <div className="single-input">
                        <textarea name="msg" id="msg" placeholder="Enter Your Comments"></textarea>
                      </div>
                    </div>
                    <button type="submit" className="rts-theme-btn rts-nbg-btn btn-arrow v2 full-btn">
                      Apply Now <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-shape">
            <img src="/assets/images/apply/shape/01.png" alt="shape" className="shape rt-shape__1" />
            <img src="/assets/images/apply/shape/02.png" alt="shape" className="shape rt-shape__2" />
            <img src="/assets/images/apply/shape/03.png" alt="shape" className="shape rt-shape__3" />
            <img src="/assets/images/apply/shape/04.png" alt="shape" className="shape rt-shape__4" />
          </div>
        </div>
      </section>
      {/* apply end */}
      {/* campus life start */}
      <div className="rts-campus rts-campus-bg v_2">
        <div className="container">
          <div className="row g-40 align-items-center">
            <div className="col-lg-6">
              <div className="rts-left-section">
                <h2 className="section-title">
                  Campus
                  <span>History</span>
                </h2>
                <div className="left-section-content">
                  <p>Founded on the principles of knowledge, innovation, and community, SU Website University has a storied history that spans decades of academic excellence and societal impact. Our journey began with a vision to create a center of learning that would not only shape individual futures but contribute to the advancement of society as a whole.</p>
                  <Link href="/campus-life" className="rts-theme-btn primary btn-arrow">
                    Read More<span><i className="fa-thin fa-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rts-right-section rt-relative">
                <div className="campus-video">
                  <img src="/assets/images/feature/campus-2.jpg" alt="campus images" />
                  <a className="video-play popup-video" href="https://www.youtube.com/watch?v=Uwq1uiuM_9w">
                    <img src="/assets/images/icon/play-round.svg" className="round" alt="" />
                    <img src="/assets/images/icon/play-icon.svg" className="play-icon" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* campus life end */}
      {/* program start */}
      <section className="rts-program v_2 rts-section-padding">
        <div className="container">
          <div className="row rt-center">
            <div className="col-sm-12">
              <div className="rts__section--wrapper v__5">
                <h2 className="rts__section--title">Discover Our Program</h2>
              </div>
            </div>
          </div>
          {/* program content */}
          {/* TODO: Programs */}
          <div className="row justify-content-center g-0">
            <div className="col-lg-4 col-md-10">
              <div className="rts-program-single">
                <div className="rts-program-single__content">
                  <div className="rts-program-hover">
                    <div className="icon">
                      <img src="/assets/images/program/icon/03.svg" alt="education" />
                    </div>
                    <Link href="/program-single" className="program-link">Graduate Admissions</Link>
                    <p>Embark on a journey of knowledge, discovery, and growth at SU Website University.</p>
                    <Link href="/program-single" className="about-btn rts-nbg-btn btn-arrow rt-white before-white">
                      Visit Program <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10">
              <div className="rts-program-single ">
                <div className="rts-program-single__content">
                  <div className="rts-program-hover center-item rt-primary-bg">
                    <ul className="list-unstyled">
                      <li className="single-program">
                        <div className="icon-box">
                          <img src="/assets/images/icon/04.svg" alt="" />
                        </div>
                        <Link href="/program-single">Major Programs</Link>
                      </li>
                      <li className="single-program">
                        <div className="icon-box">
                          <img src="/assets/images/icon/05.svg" alt="" />
                        </div>
                        <Link href="/program-single">Minors Programs</Link>
                      </li>
                      <li className="single-program">
                        <div className="icon-box">
                          <img src="/assets/images/icon/06.svg" alt="" />
                        </div>
                        <Link href="/program-single">Bachelor&rsquo;s &amp; Master&rsquo;s</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10">
              <div className="rts-program-single">
                <div className="rts-program-single__content">
                  <div className="rts-program-hover">
                    <div className="icon">
                      <img src="/assets/images/program/icon/01.svg" alt="education" />
                    </div>
                    <Link href="/program-single" className="program-link">Online Education</Link>
                    <p>Embark on a journey of knowledge, discovery, and growth at SU Website University.</p>
                    <Link href="/program-single" className="about-btn rts-nbg-btn btn-arrow rt-white before-white">
                      Visit Program <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* program end */}
      {/* scholarship appication */}
      <section className="rts-scholarship rts-scholarship-bg rts-section-height">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="rts-scholarship-info">
                <h2 className="rts-section-title">Scholarships and Financial Aid</h2>
                <p className="w-740 mb--50">Each semester, Brac University is proud to honor academically talented and exceptionally skilled students with a variety of scholarships and awards. The university annually awards more than 100 million takas as scholarships to both undergraduate and postgraduate students.</p>
                <Link href="/scholarship" className="rts-theme-btn btn-arrow">
                  Know More<span><i className="fa-thin fa-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* scholarship appication end */}
      {/* apply procedure  */}
      <section className="rts-application-procedure rts-section-padding">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-12 col-sm-11">
              <div className="rts-section mb--40 rt-between">
                <h2 className="rts-section-title w-440">How to Apply to SU Website University</h2>
                <p className="w-520">If you have any questions or need assistance at any step of the application process, our admissions team is here to help. We look forward to welcoming you to SU Website University.</p>
              </div>
            </div>
          </div>
          {/* apply content */}
          <div className="row justify-content-sm-center justify-content-md-start g-5">
            <div className="col-lg-4 col-md-6 col-sm-11">
              <div className="single-procedure">
                <div className="procedure-image">
                  <img src="/assets/images/apply/01.jpg" alt="application-thumb" />
                </div>
                <div className="rt-clip-serial rt-clip-text">01</div>
                <div className="icon">
                  <img src="/assets/images/icon/07.svg" alt="" />
                </div>
                <a href="#">Create an Account:</a>
                <p>Take the time to explore the diverse range of undergraduate and graduate programs offered at SU Website University</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-11">
              <div className="single-procedure">
                <div className="procedure-image">
                  <img src="/assets/images/apply/01.jpg" alt="application-thumb" />
                </div>
                <div className="rt-clip-serial rt-clip-text">02</div>
                <div className="icon">
                  <img src="/assets/images/icon/06.svg" alt="" />
                </div>
                <a href="#">Online Application</a>
                <p>Take the time to explore the diverse range of undergraduate and graduate programs offered at SU Website University</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-11">
              <div className="single-procedure">
                <div className="procedure-image">
                  <img src="/assets/images/apply/01.jpg" alt="application-thumb" />
                </div>
                <div className="rt-clip-serial rt-clip-text">03</div>
                <div className="icon">
                  <img src="/assets/images/icon/06.svg" alt="" />
                </div>
                <a href="#">Programs &amp; Requirements</a>
                <p>Take the time to explore the diverse range of undergraduate and graduate programs offered at SU Website University</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* apply procedure end  */}
      {/* research area */}
      <section className="rts-research rt-relative research-bg rts-section-height">
        <div className="container">
          <div className="section-bg rt-relative">
            <div className="row justify-content-md-center">
              <div className="col-lg-5 col-md-11">
                <div className="rts-research-image">
                  <img src="/assets/images/feature/research-1.jpg" alt="research" />
                </div>
              </div>
              <div className="col-lg-7 col-md-11">
                <div className="research-content-area">
                  <h2 className="rts-section-title mt--80 mb--20">
                    University Research Centers and Institutes:
                  </h2>
                  <p>Discover a network of cutting-edge research centers and institutes that serve as hubs of innovation within SU Website University From state-of-the-art laboratories.</p>
                  <div className="research-subject mt--30">
                    <div className="single-research">
                      <div className="icon">
                        <img src="/assets/images/icon/09.svg" alt="biomedical" />
                      </div>
                      <div className="content">
                        <h6>Biomedical Sciences</h6>
                        <p>
                          Delve into groundbreaking research in biomedical Sciences
                        </p>
                      </div>
                    </div>
                    <div className="single-research">
                      <div className="icon">
                        <img src="/assets/images/icon/10.svg" alt="biomedical" />
                      </div>
                      <div className="content">
                        <h6>Health and Medicine</h6>
                        <p>
                          From clinical trials to public health initiatives
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="research-meta-info mt--50 mb--70">
                    <a href="#" className="rts-theme-btn btn-arrow">
                      Join Community<span><i className="fa-thin fa-arrow-right"></i></span>
                    </a>
                    <div className="research-author">
                      <div className="image">
                        <img src="/assets/images/author/01.png" alt="author" />
                      </div>
                      <div className="info">
                        <h6>Jon Pool</h6>
                        <p>Research Manager</p>
                      </div>
                    </div>
                    <div className="research-author">
                      <div className="image">
                        <img src="/assets/images/icon/phone.svg" alt="phone" />
                      </div>
                      <div className="info">
                        <h6><a href="callto:121">+1012405451</a></h6>
                        <p>Phone Number</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="research-big-text rt-clip-text">Our Research Community</div>
              </div>
            </div>
          </div>
          <div className="rt-shape">
            <div className="rt-shape__1">
              <img src="/assets/images/feature/research/01.svg" alt="" />
            </div>
            <div className="rt-shape__2">
              <img src="/assets/images/feature/research/02.svg" alt="" />
            </div>
            <div className="rt-shape__3">
              <img src="/assets/images/feature/research/03.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* research area end */}
      {/* notice board start */}
      <section className="rts-notice rts-section-padding rts-section-padding">
        <div className="container">
          <div className="row gy-5 gy-lg-0 justify-content-md-center">
            <div className="col-md-11 col-lg-7">
              <div className="rts-event-section">
                <h4 className="rts-section-title mb--25">Alumni Event</h4>
                <div className="rts-event-section-content">
                  {/* TODO: Events */}
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
              <div className="rts-notice-section ">
                <div className="rts-section rt-between pb--25 rts-border-bottom-2">
                  <h4 className="rts-section-title">Notice</h4>
                  <a href="#" className="rts-arrow">View All <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></a>
                </div>
                <div className="rts-tab">
                  <ul className="nav nav-pills pb--30" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Latest</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Exam</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Admission</button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                      <ul className="list-unstyled notice-content-box">
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              20
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Notice Regarding Upcoming Campus Event: Spring Fling Carnival.
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              22
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Important Notice: Changes to Examination Schedule for Fall Semester 2024.
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              24
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Notice Regarding Deadline Extension for Assignment Submission in Biology 101.
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              25
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Urgent Notice: Campus Maintenance Work Scheduled for March 5th-7th.
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              25
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Notice of Guest Lecture: Dr. John Smith on Neuroscience Advances.
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                      <ul className="list-unstyled notice-content-box">
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              20
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Important Notice: Midterm Examination Schedule for Spring Semester 2024.
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              21
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Notice Regarding Final Examination Timetable for Fall Semester 2023
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              22
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Urgent Notice: Changes to Exam Dates for Biology 10
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              23
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Notice of Exam Venue Change for Chemistry 201
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              25
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Reminder Notice: Registration Deadline for Winter Term Examinations
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                      <ul className="list-unstyled notice-content-box">
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              26
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Admission Notice: Applications Now Open for Fall 2024 Intake
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              27
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Important Notice: Admission Criteria and Requirements for Undergraduate Programs
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              28
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Urgent Admission Notice: Extended Deadline for Submission of Applications
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              29
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Notice of Scholarship Opportunities for Incoming Freshmen
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="single-notice">
                          <div className="single-notice-item">
                            <div className="notice-date">
                              30
                              <span>Jan</span>
                            </div>
                            <div className="notice-content">
                              <p>
                                <Link href="/notice-details">
                                  Admission Notice: Information Session for Prospective Students on 2024
                                </Link>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* notice board end */}
      {/* Testimonial Start */}
      <div className="rts-testimonial v_2 rt-relative pt--120 pb--120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-10">
              <div className="rts-section text-center mb--45">
                <h2 className="rts-section-title">Our Students Feedback</h2>
              </div>
            </div>
          </div>
          {/* testimonial content */}
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-10">
              <div className="rts-testimonial-box">
                <div className="testimonial-item rt-flex">
                  <div className="testimonial-item-image save-from-hidden">
                    <img src="/assets/images/testimonial/testimonial-big.jpg" alt="testimonial thumbnail" />
                    <a href="https://www.youtube.com/watch?v=7ahgosTZJHg" className="video-play popup-video">
                      <img src="/assets/images/icon/video-btn.svg" alt="video" />
                    </a>
                  </div>
                  <div className="testimonial-item-content w-630 rt-relative">
                    <div className="testmonial-v2">
                      <div className="swiper-wrapper">
                        {/* single testimonial */}
                        <div className="swiper-slide">
                          <div className="single-testimonial">
                            <div className="rt-between mb--50">
                              <div className="rt-icon">
                                <img src="/assets/images/testimonial/quote.svg" alt="quote icon" />
                              </div>
                              <div className="rt-review">
                                <div className="rating-star mb--10">
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-light fa-star"></i>
                                </div>
                                <p className="rt-secondary rt-medium --p-s">4.5 ( 112 Review)</p>
                              </div>
                            </div>
                            <p className="testimonial-text">
                              I would highly recommend Michael Richard to anyone interested the subject matter. It has provided me with invaluable knowledge &amp; a newfound passion topic. My only suggestion would be to add more live.
                            </p>
                            <div className="rt-testimonial-author mt--50">
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
                            <div className="rt-between mb--50">
                              <div className="rt-icon">
                                <img src="/assets/images/testimonial/quote.svg" alt="quote icon" />
                              </div>
                              <div className="rt-review">
                                <div className="rating-star mb--10">
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-light fa-star"></i>
                                </div>
                                <p className="rt-secondary rt-medium --p-s">4.5 ( 112 Review)</p>
                              </div>
                            </div>
                            <p className="testimonial-text">
                              I would highly recommend Michael Richard to anyone interested the subject matter. It has provided me with invaluable knowledge &amp; a newfound passion topic. My only suggestion would be to add more live.
                            </p>
                            <div className="rt-testimonial-author mt--50">
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
                            <div className="rt-between mb--50">
                              <div className="rt-icon">
                                <img src="/assets/images/testimonial/quote.svg" alt="quote icon" />
                              </div>
                              <div className="rt-review">
                                <div className="rating-star mb--10">
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-solid fa-star"></i>
                                  <i className="fa-sharp fa-light fa-star"></i>
                                </div>
                                <p className="rt-secondary rt-medium --p-s">4.5 ( 112 Review)</p>
                              </div>
                            </div>
                            <p className="testimonial-text">
                              I would highly recommend Michael Richard to anyone interested the subject matter. It has provided me with invaluable knowledge &amp; a newfound passion topic. My only suggestion would be to add more live.
                            </p>
                            <div className="rt-testimonial-author mt--50">
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
                      </div>
                    </div>
                    {/* rts dot */}
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial end */}
      {/* blog area start */}
      <div className="rts-blog rts-section-padding v_2 no-bg">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-11 col-lg-12">
              <div className="rts-section rts-border-bottom-1 mb--50 pb--20">
                <h2 className="rts-section-title">
                  Latest From Our Blogs
                </h2>
                <p className="rts-section-description">Whether you&rsquo;re considering a foundation course or an undergraduate academics is a place.</p>
                <Link href="/blog" className="rts-arrow">View All <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
          {/* blog content */}
          {/* TODO: Blog Posts */}
          <div className="row g-5">
            <div className="col-lg-6">
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
                        <a href="#">Samira Khan</a>
                      </div>
                      <div className="rt-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                    </div>
                    <Link href="/blog-detail" className="post-title">
                      Interactive Worksheets: Printable worksheets have come to life!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
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
                      Classroom community-building It&rsquo;s ok to try something new!
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
                      <img src="/assets/images/blog/small-thumb-3.jpg" alt="post-thumbnail" />
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
                      After decades of improvement, health rates on worrying
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog area end */}
      {/* brand slider */}
      <div className="rts-brand v_1 pb--120">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-11">
              <div
                className="rts-brand-slider swiper swiper-data"
                data-swiper='{
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
            }'
              >
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

      {/* newsletter */}
      <div className="rts-newsletter v_1 rts-cta-background rts__white">
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
      <FooterUniversity />
    </>
  );
}
