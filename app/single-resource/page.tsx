import { buildMetadata } from '@/lib/metadata';
import HeaderSc from '@/components/layout/HeaderSc';
import FooterSc from '@/components/layout/FooterSc';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Resource',
  description: 'Educational resource details on the Sonargoan University site.',
  path: '/single-resource',
});

export default function SingleResourcePage() {
  return (
    <>
      <HeaderSc />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Resource" breadcrumb={[{label:'Home',href:'/'},{label:'Resources'},{label:'Details'}]} />

      {/* TODO: Research Publications */}
      {/* program content */}
      <div className="rts-program rts-section-padding">
        <div className="container">
          <div className="rts-program-single-header">
            <div className="row align-items-center g-3">
              <div className="col-lg-6">
                <h3 className="rts-section-title">Unleashing Curiosity &ndash; Science Resources for Young Minds.</h3>
              </div>
              <div className="col-lg-6">
                <p className="rts-section-description">At SU Website school, our Science Resources are designed to spark curiosity, creativity, and critical thinking among students. Through interactive learning, experiments, and real-world applications, we make science fun and engaging.</p>
              </div>
            </div>
          </div>
          <div className="rts-program-description">
            <div className="row sticky-coloum-wrap">
              <div className="col-lg-8">
                <div className="program-description-area" id="curriculum">
                  <div className="program-big-thumb">
                    <img src="/assets/images/about/resources.webp" className="rounded-10" alt="program" />
                  </div>
                  <div className="program-about">
                    <h4 className="title">About The Program</h4>
                    <p>At SU Website School, we believe that science is the key to understanding the world around us. Our Science Resources are designed to ignite curiosity, foster creativity, and develop problem-solving skills in young learners. Through interactive experiments, hands-on projects, and real-world applications, students explore the fundamentals of life sciences, physical sciences, and earth sciences.</p>
                    <p>We encourage students to think critically, ask questions, and discover answers through guided exploration. Our engaging science lessons help students connect theoretical knowledge with practical experiences, making learning both fun and meaningful.</p>
                  </div>
                  <ul className="program__list">
                    <li><i className="fa-light fa-check"></i> Interactive Learning &ndash; Engaging lessons with visual aids, models, and experiments.</li>
                    <li><i className="fa-light fa-check"></i> Hands-on Experiments &ndash; Practical activities to explore scientific concepts.</li>
                    <li><i className="fa-light fa-check"></i> Eco-Friendly Projects &ndash; Teaching sustainability and environmental awareness.</li>
                    <li><i className="fa-light fa-check"></i> Real-World Applications &ndash; Applying scientific knowledge in real-world scenarios.</li>
                  </ul>

                  {/* resource pricing plan */}
                  <div className="resource__plan">
                    <div className="row g-5">
                      <div className="col-lg-6 col-md-6">
                        <div className="single__resource__plan">
                          <div className="plan__header">
                            <div className="plan__name">High School</div>
                            <div className="plan__price">
                              <h2 className="price">$89 <span>/ Per Month</span></h2>
                              <span>Grow your Business by Professional Plan</span>
                            </div>
                            <div className="plan__icon"><img src="/assets/images/icon/box-icon.svg" alt="" /></div>
                          </div>
                          <button className="purchase__plan">Select Plan</button>
                          <div className="plan__content">
                            <h6>Key Feature</h6>
                            <ul>
                              <li><i className="fa-light fa-circle-check"></i> $7,500 semester-only</li>
                              <li><i className="fa-light fa-circle-check"></i> $60 one-time non-refundable application fee</li>
                              <li> <i className="fa-light fa-circle-check"></i> Full-time enrollment includes a minimum of four credits and a maximum of six credits. </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="single__resource__plan">
                          <div className="plan__header">
                            <div className="plan__name">Secondary School</div>
                            <div className="plan__price">
                              <h2 className="price">$199 <span>/ Per Month</span></h2>
                              <span>Grow your Business by Professional Plan</span>
                            </div>
                            <div className="plan__icon"><img src="/assets/images/icon/box-icon.svg" alt="" /></div>
                          </div>
                          <button className="purchase__plan">Select Plan</button>
                          <div className="plan__content">
                            <h6>Key Feature</h6>
                            <ul>
                              <li><i className="fa-light fa-circle-check"></i> $7,500 semester-only</li>
                              <li><i className="fa-light fa-circle-check"></i> $60 one-time non-refundable application fee</li>
                              <li> <i className="fa-light fa-circle-check"></i> $1,650 semester-only (per course)</li>
                              <li> <i className="fa-light fa-circle-check"></i> $60 one-time non-refundable application fee </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* resource pricing plan end */}


                  <div className="program-student-testimonial rt-relative">
                    <h5 className="title fw-bold">Student Testimonials</h5>
                    <div className="single-testimonial-box">
                      <div className="single-testimonial-active">
                        <div className="swiper-wrapper">
                          {/* single slide */}
                          <div className="swiper-slide">
                            <div className="single-testimonial-item rt-relative">
                              <div className="rating-star mb--10">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-light fa-star"></i>
                              </div>
                              <p className="rt-testimonial-text">
                                I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in nights, or whenever you&apos;re in the mood for a culinary.
                              </p>
                              <div className="rt-testimonial-author mt--30">
                                <div className="rt-author-meta rt-flex rt-gap-20">
                                  <div className="rt-author-img">
                                    <img src="/assets/images/testimonial/author-1.png" alt="author" />
                                  </div>
                                  <div className="rt-author-info">
                                    <h5 className="mb-0">David Jhon</h5>
                                    <p>Artist and Instructor</p>
                                  </div>
                                </div>
                              </div>
                              <div className="quote-icon">
                                <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                              </div>
                            </div>
                          </div>
                          {/* single slide */}
                          <div className="swiper-slide">
                            <div className="single-testimonial-item rt-relative">
                              <div className="rating-star mb--10">
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-solid fa-star"></i>
                                <i className="fa-sharp fa-light fa-star"></i>
                              </div>
                              <p className="rt-testimonial-text">
                                I can&apos;t recommend The Gourmet Haven enough. It&apos;s a place for special date in nights, or whenever you&apos;re in the mood for a culinary.
                              </p>
                              <div className="rt-testimonial-author mt--30">
                                <div className="rt-author-meta rt-flex rt-gap-20">
                                  <div className="rt-author-img">
                                    <img src="/assets/images/testimonial/author-1.png" alt="author" />
                                  </div>
                                  <div className="rt-author-info">
                                    <h5 className="mb-0">David Jhon</h5>
                                    <p>Artist and Instructor</p>
                                  </div>
                                </div>
                              </div>
                              <div className="quote-icon">
                                <img src="/assets/images/testimonial/quote.svg" alt="quote" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                  <div className="program-credit-area faq sc__accordion single__resource pt--80 mt-0">
                    <h3 className="faq__title">Frequently Asked Questions (FAQ)</h3>
                    <div className="program-accordion">
                      <div className="accordion" id="rts-accordion">
                        <div className="accordion-item expanded">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What are the admission requirements for SU Website University?
                          </button>
                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#rts-accordion">
                            <div className="accordion-body">
                              <p>
                                Admission requirements vary by program. Please refer to the Admissions section on our website for detailed information or contact the Admissions Office for assistance.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How do I apply for financial aid?
                          </button>
                          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#rts-accordion">
                            <div className="accordion-body">
                              <p>
                                Admission requirements vary by program. Please refer to the Admissions section on our website for detailed information or contact the Admissions Office for assistance.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I contact SU Website University?
                          </button>
                          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#rts-accordion">
                            <div className="accordion-body">
                              <p>Admission requirements vary by program. Please refer to the Admissions section on our website for detailed information or contact the Admissions Office for assistance.</p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                            Are online courses available?
                          </button>
                          <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#rts-accordion">
                            <div className="accordion-body">
                              <p>Admission requirements vary by program. Please refer to the Admissions section on our website for detailed information or contact the Admissions Office for assistance.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* sidebar */}
              <div className="col-lg-4 sticky-coloum-item">
                <div className="program-sidebar sc__version">
                  {/* curriculum */}
                  <div className="program-curriculum">
                    <h6 className="heading-title">B.A In African Studies</h6>
                    <div className="program-menu">
                      <ul className="list-unstyled">
                        <li><a href="#curriculum"><span><i className="fa-light fa-arrow-right"></i></span>Course Curriculum</a></li>
                        <li><Link href="/faculty-details"><span><i className="fa-light fa-arrow-right"></i></span>Program Faculty</Link></li>
                        <li><Link href="/admission"><span><i className="fa-light fa-arrow-right"></i></span>Apply Admission</Link></li>
                        <li><Link href="/scholarship"><span><i className="fa-light fa-arrow-right"></i></span>Scholarship </Link></li>
                        <li><Link href="/event"><span><i className="fa-light fa-arrow-right"></i></span>Joint Event</Link></li>
                      </ul>
                    </div>
                  </div>
                  {/* contact info */}
                  <div className="program-info">
                    <h5>Department Contact Info</h5>
                    <p>B.A. in Africana Studies</p>
                    <div className="contact-info">
                      <h5>Contact:</h5>
                      <a href="mailto:barry.suwebsite@info.com">barry.suwebsite@info.com</a>
                      <a href="callto:121">664-254-251</a>
                    </div>
                    <div className="social-info">
                      <h5>Social Info:</h5>
                      <div className="social-info-link">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                      </div>
                    </div>
                  </div>

                  {/* join event */}
                  <div className="program-event">
                    <div className="program-event-content">
                      <p>Joint New Event About <br />
                        African History
                      </p>
                      <h4 className="event-title">B.A. in Africana
                        Studies</h4>
                      <div className="single-event-content-meta">
                        <div className="event-time">
                          <span><i className="fa-sharp fa-thin fa-clock"></i></span>
                          <span>10:30 am</span>
                        </div>
                        <div className="event-place">
                          <span><i className="fa-sharp fa-thin fa-location-dot"></i></span>
                          <span>Yarra Park, UK</span>
                        </div>
                        <div className="event-date">
                          <span><i className="fal fa-calendar"></i></span>
                          <span>November 28, 2023</span>
                        </div>
                      </div>
                      <a href="#" className="rts-theme-btn btn-arrow btn-white">Join Now <span><i className="fa-thin fa-arrow-right"></i></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* program content end */}


      {/* footer twitter slider  */}
      <div className="x__slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xxl-9 col-xl-7 d-flex align-items-center">
              <div className="x__slider__active overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="x__slider__item">
                      <img src="/assets/images/twitt.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="x__slider__navigation">
                <div className="rts__slider--arrow">
                  <div className="rts__prev slider__btn"><i className="fa-light fa-arrow-left"></i></div>
                  <div className="rts__next slider__btn"><i className="fa-light fa-arrow-right"></i></div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 col-xxl-3">
              <div className="subscription__form">
                <h5 className="subscription__form--title">Subscribe to newsletter</h5>

                <form>
                  <input type="email" placeholder="Enter your email address" required />
                  <button type="submit" className="cta__button">Subscribe <span><i className="fa-regular fa-arrow-right"></i></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSc />
    </>
  );
}
