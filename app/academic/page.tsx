import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Academic',
  description: 'Academic departments, programs, and disciplines at Sonargoan University.',
  path: '/academic',
});

export default function AcademicPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Academic"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Academic' }]}
      />

      {/* about university */}
      <section className="rts-about-university pt--100 pb--80">
        <div className="container">
          <div className="row">
            <div className="rts-section">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <h3 className="rts-section-title">Academics</h3>
              </div>
              <div className="col-lg-8 col-md-9 col-sm-12">
                <p className="rts-section-description">
                  This distinguished university of arts, sciences and professional studies is noted for exceptional program offerings and an interdisciplinary approach to learning, while also providing students with a diverse, high-quality student, faculty and staff population.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="academic-picture">
                <img src="/assets/images/feature/academic-1.jpg" alt="academic" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about university end */}


      <div className="rts-funfact ">
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
                  <p>in the nation for materials R&D</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* TODO: Departments */}
      {/* multi row item */}
      <div className="rts-multi-row-section pt--100">
        <div className="container">
          {/* first */}
          <div className="row g-5 justify-content-center justify-content-start align-items-center">
            <div className="col-lg-7 col-md-11">
              <div className="rts-multi-row-image">
                <img src="/assets/images/feature/multi-1.jpg" alt="undergraduate education" />
              </div>
            </div>
            <div className="col-lg-5 col-md-11">
              <div className="rts-multi-row-content">
                <h4 className="row-title">Undergraduate Education</h4>
                <p>Sonargaon University Undergrad is your guide to undergraduate academics and opportunities run by the Vice Provost for Undergraduate Education.</p>
                <div className="program-list">
                  <Link href="/program-single" className="program-item"><span>Africana Studies <i className="fa-regular fa-chevron-right"></i></span> <span>A.B</span></Link>
                  <Link href="/program-single" className="program-item"><span>Accounting, BS <i className="fa-regular fa-chevron-right"></i></span> <span>A.B</span></Link>
                  <Link href="/program-single" className="program-item"><span>Applied Mathematics <i className="fa-regular fa-chevron-right"></i></span> <span>A.B</span></Link>
                  <Link href="/program-single" className="program-item"><span>Anthropology <i className="fa-regular fa-chevron-right"></i></span> <span>A.B</span></Link>
                  <Link href="/program-single" className="mt--15 about-btn rts-nbg-btn btn-arrow">View All Program <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="row g-5 justify-content-center justify-content-start align-items-center">
            <div className="col-lg-5 col-md-11">
              <div className="rts-multi-row-content left-side">
                <h3 className="row-title">Graduate Education</h3>
                <p>The VPGE office works collaboratively across the University to ensure that every graduate student has the best possible education.</p>
                <div className="program-list">
                  <Link href="/program-single" className="program-item"><span>M.A. in American Studies <i className="fa-regular fa-chevron-right"></i></span> <span>A.B</span></Link>
                  <Link href="/program-single" className="program-item"><span>Biomedical Engineering <i className="fa-regular fa-chevron-right"></i></span> <span>A.B</span></Link>
                  <Link href="/program-single" className="program-item"><span>Master of Public Health <i className="fa-regular fa-chevron-right"></i></span> <span>A.B</span></Link>
                  <Link href="/program-single" className="mt--15 about-btn rts-nbg-btn btn-arrow">View All Program <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-11">
              <div className="rts-multi-row-image">
                <img src="/assets/images/feature/multi-2.jpg" alt="undergraduate education" />
              </div>
            </div>
          </div>
          {/* third */}
          <div className="row g-5 justify-content-center justify-content-start align-items-center">
            <div className="col-lg-7 col-md-11">
              <div className="rts-multi-row-image">
                <img src="/assets/images/feature/multi-3.jpg" alt="undergraduate education" />
              </div>
            </div>
            <div className="col-lg-5 col-md-11">
              <div className="rts-multi-row-content">
                <div className="program-list">
                  <div className="single-list">
                    <h4 className="row-title">Lifelong Learning</h4>
                    <p>Sonargaon University offers a wide range of programs, classes, internships, and an entire online high school.</p>
                    <a href="#" className="about-btn rts-nbg-btn btn-arrow">Sonargaon University Undergraduate <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></a>
                  </div>
                  <div className="single-list">
                    <h4 className="row-title">Professional Development</h4>
                    <p>Explore the 67 major fields of undergraduate study at Stanford.</p>
                    <a href="#" className="about-btn rts-nbg-btn btn-arrow">Professional Development <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* multi row item end */}


      {/* mission end */}
      <section className="rts-campus-tour rts-section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="section-title rt-center mb--50">Our Campus Tour</h2>
            <div className="col-12">
              <div className="rts-video-section height-500 mb--50">
                <a href="https://www.youtube.com/watch?v=Uwq1uiuM_9w" className="rts-video-section-player popup-video video-btn">
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
                <img src="/assets/images/about/video-thumb.jpg" alt="video-bg" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rts-video-section-text rt-center mx-3">
                <p>Embark on a journey of knowledge, discovery, and growth at Sonargaon University. Our admissions process is designed to identify bright, motivated individuals who are eager to contribute to our dynamic academic community. Whether you&apos;re a recent high school graduate or a transfer student seeking a new academic home, we invite you to explore the possibilities that await you.</p>
                <Link href="/campus-life" className="mt--15 about-btn rts-nbg-btn btn-arrow">Visit Campus <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Start */}
      <div className="rts-testimonial pb--120">
        <div className="container">
          {/* testimonial content */}
          <div className="row">
            <div className="col-12">
              <div className="rts-testimonial-box">
                <div className="testimonial-item rt-flex">
                  <div className="testimonial-item-image">
                    <img src="/assets/images/testimonial/testimonial-big.jpg" alt="testimonial thumbnail" />
                  </div>
                  <div className="testimonial-item-content w-570 rt-relative">
                    <div className="swiper swiper-data" data-swiper='{
                                        "slidesPerView":1,
                                        "loop": true,
                                        "navigation":{
                                            "nextEl":".rt-next",
                                            "prevEl":".rt-prev"
                                        },
                                        "autoplay":{
                                            "delay":"3000"
                                        }
                                }'>
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
                              I would highly recommend Michael Richard to anyone interested the subject matter. It has provided me with invaluable knowledge & a newfound passion topic. My only suggestion would be to add more live.
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
                              I would highly recommend Michael Richard to anyone interested the subject matter. It has provided me with invaluable knowledge & a newfound passion topic. My only suggestion would be to add more live.
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
                              I would highly recommend Michael Richard to anyone interested the subject matter. It has provided me with invaluable knowledge & a newfound passion topic. My only suggestion would be to add more live.
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
                    {/* rts arrow */}
                    <div className="rts-slider-arrow testimonial-arrow">
                      <div className="rt-slider-btn rt-next">
                        <i className="fa-solid fa-chevron-left"></i>
                      </div>
                      <div className="rt-slider-btn rt-prev">
                        <i className="fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial end */}

      <FooterUniversity />
    </>
  );
}
