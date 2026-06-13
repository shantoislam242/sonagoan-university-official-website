import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'About Us',
  description: 'Learn about Sonargoan University — our history, mission, leadership, and community.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="About Us"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* about university */}
      <section className="rts-about-university rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section">
              <div className="col-lg-4 col-md-5">
                <h3 className="rts-section-title">About University</h3>
              </div>
              <div className="col-lg-8 col-md-7">
                <p className="rts-section-description">
                  Sonargaon University (SU) is one of Bangladesh&rsquo;s preeminent private universities, approved by the University Grants Commission (UGC) of Bangladesh and the Government of Bangladesh (GoB), and sponsored by the Sonargaon University (SU) Trust &mdash; a registered, non-political, non-profit voluntary organization. The members of the SU Trust, mostly eminent entrepreneurs from the academic arena, felt the need for a private university to bring quality education within the reach of students with modest economic means. The quality of our teaching and learning is underpinned by the best staff-to-student ratios; our professors teach at every level as well as engage in ground-breaking research. Our work is audited regularly by the UGC, and we are supported by a strong Academic Advisory Council.
                </p>
                <p className="rts-section-description">
                  We are launching young people into a boundless future and confronting the grand challenges of our time through undaunted research and scholarship. Ranked No.&nbsp;4 among the highest research-fund-spending private universities in Bangladesh (UGC Annual Report, 2018), we have in recent years achieved the National Award 2018 (a2i innovation competition), the Asia Young Designer Award 2019, Best Supporting Architecture School of Bangladesh, the A3f Sustainable Design Award 2019, and the Shah Cement DOT Student Design Award 2019. The University has educated more than 6,000 students since its commencement in 2012. We turn ideas into impact and transform lives and our world. For more about our impact, visit our Facebook page (Sonargaon University) and website www.su.edu.bd.
                </p>
                <p className="rts-section-description">
                  So what defines our students, faculty and community members? The way we work together. It&rsquo;s not about the accomplishments of an individual; it&rsquo;s what we can accomplish together. It is our belief that together we can create a world of good.
                </p>
                <p className="rts-section-description">
                  <strong>Join us on the journey.</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 justify-content-md-center justify-content-start">
            <div className="col-lg-7 col-xl-8 col-md-11">
              <div className="rts-about-section">
                <img src="/assets/images/about/about-01.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-5 col-xl-4 col-md-11">
              <div className="rts-about-details">
                <div className="single-about-info">
                  <div className="content">
                    <h3 className="title">20,000</h3>
                    <img src="/assets/images/icon/11.svg" alt="" />
                  </div>
                  <div className="desc">
                    <p>undergraduate and graduate students</p>
                  </div>
                </div>
                <div className="single-about-info">
                  <div className="content">
                    <h3 className="title">16,214</h3>
                    <img src="/assets/images/icon/12.svg" alt="" />
                  </div>
                  <div className="desc">
                    <p>Sonargaon University Faculty and Staff</p>
                  </div>
                </div>
                <div className="single-about-info">
                  <div className="content">
                    <h3 className="title">300k</h3>
                    <img src="/assets/images/icon/13.svg" alt="" />
                  </div>
                  <div className="desc">
                    <p>Sonargaon University Alumni Worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about university end */}

      {/* history */}
      <div className="rts-history">
        <div className="container">
          <div className="row g-5 justify-content-md-center justify-content-start align-items-center">
            <div className="col-lg-6 col-md-11">
              <div className="rts-history-image">
                <img src="/assets/images/about/history.jpg" alt="history" />
              </div>
            </div>
            <div className="col-lg-6 col-md-11">
              <div className="rts-history-section">
                <h4 className="rts-section-title mb--40">The history of Sonargaon University</h4>
                <p>
                  On September 8, 1971, Sonargaon University, the first college in the American colonies, was founded in Cambridge, Massachusetts. Sonargaon University was officially founded by a vote by the Great and General Court of the Massachusetts Bay Colony.
                  <span className="d-block mb--30"></span>
                  Sonargaon University endowment started with John Sonargaon University initial donation of 400 books and half his estate, but in 1721, Thomas Hollis began the now standard practice of requiring that a donation be used for a specific purpose when he donated money for &ldquo;a Divinity Professor, to read lectures in the Halls to the students.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history end */}

      <div className="rts-funfact rts-section-padding">
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

      {/* mission */}
      <section className="rts-mission">
        <div className="container">
          <div className="row justify-content-center rt-center">
            <div className="rts-section mb--50">
              <h2 className="rts-section-title">Mission and Values</h2>
            </div>
          </div>
          {/* mission */}
          <div className="row">
            <div className="col-lg-12">
              <div className="rts-timeline-section">
                <div className="rts-timeline-content">
                  <div className="left-side">
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Diversity</h5>
                      <p> Celebrating a rich tapestry of backgrounds,
                        perspectives, and talents
                      </p>
                      <img src="/assets/images/about/mission-1.jpg" alt="" />
                    </div>
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Innovation</h5>
                      <p> Encouraging creativity, critical thinking, and a
                        spirit of innovation.
                      </p>
                      <img src="/assets/images/about/mission-2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="separator">
                  </div>
                  <div className="right-side">
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Excellence</h5>
                      <p> Striving for academic and research excellence
                        in all endeavors.
                      </p>
                      <img src="/assets/images/about/mission-3.jpg" alt="" />
                    </div>
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Academic Excellence</h5>
                      <p> Our commitment to academic excellence is reflected in
                        the diverse range
                      </p>
                      <img src="/assets/images/about/mission-4.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <div className="rts-testimonial rts-section-padding">
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
