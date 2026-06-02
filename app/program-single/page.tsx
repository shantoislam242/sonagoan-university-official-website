import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Program',
  description: 'Program details, curriculum, and admission at Sonargoan University.',
  path: '/program-single',
});

export default function ProgramSinglePage() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Program" breadcrumb={[{label:'Home',href:'/'},{label:'Programs'},{label:'Details'}]} />
      {/* TODO: Programs */}
      {/* program content */}
      <div className="rts-program rts-section-padding">
        <div className="container">
          <div className="rts-program-single-header">
            <div className="row align-items-center g-3">
              <div className="col-lg-6">
                <h3 className="rts-section-title">The Accounting program offers a Bachelor of Science in Accounting.</h3>
              </div>
              <div className="col-lg-6">
                <p className="rts-section-description">The program continues to attract students from all ethnic, racial, and cultural backgrounds as they recognize ways that Africana Studies provides them with a forum to examine the intellectual life, the historical experience, and the cultural understanding of one of this country&rsquo;s largest racial minority groups.</p>
              </div>
            </div>
          </div>
          <div className="rts-program-description">
            <div className="row sticky-coloum-wrap">
              <div className="col-lg-8">
                <div className="program-description-area" id="curriculum">
                  <div className="program-big-thumb">
                    <img src="/assets/images/course/program-big.jpg" alt="program" />
                  </div>
                  <div className="program-about">
                    <h4 className="title">About The Program</h4>
                    <p>Students electing to pursue courses in the Africana Studies program are entering into the current intellectual dialogue on multiculturalism in this society as they study with professors who have conducted notable research in African, Caribbean, Africana, and African-American Studies.</p>
                    <p>The Africana Studies program at Stockton University is affiliated with the National Council for Black Studies, Inc. (NCBS) and students are eligible to apply for membership in Ankh Maat Wedjau, the National Honor Society for majors and minors in Africana Studies. Majors and minors in Africana Studies at Stockton University will also come to appreciate their responsibility to their communities through various projects</p>
                  </div>
                  <div className="program-credit-area">
                    <h5 className="title">Program Courses: 40 credits</h5>
                    <p>Core Required Courses for all majors:</p>
                    <div className="program-accordion">
                      <div className="accordion" id="rts-accordion">
                        <div className="accordion-item">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Year One
                          </button>
                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#rts-accordion">
                            <div className="accordion-body-content">
                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Spring Semester 1</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>


                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Summer Semester 2 (Summer Session IV)</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>

                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Spring Semester 1</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Year Two
                          </button>
                          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#rts-accordion">
                            <div className="accordion-body-content">
                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Spring Semester 1</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>

                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Summer Semester 2 (Summer Session IV)</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>

                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Spring Semester 1</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>

                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Year Three
                          </button>
                          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#rts-accordion">
                            <div className="accordion-body-content">
                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Spring Semester 1</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>

                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Summer Semester 2 (Summer Session IV)</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>

                              <table className="table">
                                <thead className="table-theme">
                                  <tr>
                                    <th style={{ minWidth: '80%' }}>Spring Semester 1</th>
                                    <th>Credits</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Introduction to Africana Studies or GSS 2201 - Africana Studies</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>The Contemporary African Diaspora</td>
                                    <td>3 Credits</td>
                                  </tr>
                                  <tr>
                                    <td>African-Americans: A Seminar</td>
                                    <td>3 Credits</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single testimonial */}
                  <div className="program-student-testimonial rt-relative">
                    <h5 className="title">Student Testimonials</h5>
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
                </div>
              </div>
              {/* sidebar */}
              <div className="col-lg-4 sticky-coloum-item">
                <div className="program-sidebar">
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
                      <a href="#" className="rts-theme-btn btn-arrow btn-white">View Our Program <span><i className="fa-thin fa-arrow-right"></i></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* program content end */}
      <FooterUniversity />
    </>
  );
}
