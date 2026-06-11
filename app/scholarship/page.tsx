import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Scholarship',
  description: 'Scholarships, financial aid, and funding opportunities at Sonargoan University.',
  path: '/scholarship',
});

export default function ScholarshipPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Scholarship"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Scholarship' }]}
      />

      {/* Scholarship content */}
      <div className="rts-scholarship rts-section-padding">
        <div className="container">
          <div className="rts-scholarship-description">
            <div className="row sticky-coloum-wrap justify-content-md-center justify-content-start">
              <div className="col-lg-8 col-md-11">
                <div className="program-description-area">
                  <div className="program-big-thumb">
                    <img src="/assets/images/course/scholarship-big.jpg" alt="program" />
                  </div>
                  <div className="program-about">
                    <h4 className="title">Scholarship Opportunities at Sonargaon University</h4>
                    <p>At Sonargaon University, we are committed to supporting academic excellence and ensuring that deserving students have access to quality education. Through a range of scholarship opportunities, we aim to recognize and reward outstanding achievements. Explore the various scholarships available:</p>
                  </div>
                  <div className="repeating-content">
                    <h5 className="title">Merit-Based Scholarships</h5>
                    <div className="row g-5">
                      <div className="col-lg-6">
                        <div className="single-information-box rt-theme-bg">
                          <div className="single-info">
                            <h4 className="title">Presidential Scholarship</h4>
                            <p className="amount"><u>Amount:</u>$6,142per academic year</p>
                            <u className="eligibility">Eligibility:</u>
                            <p>Awarded to students with exceptional academic achievements.</p>
                            <u className="application">Application Process:</u>
                            <p>Automatically considered during
                              the admissions process.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-information-box rt-primary-bg">
                          <div className="single-info">
                            <h4 className="title">Innovation Scholarships</h4>
                            <p className="amount"><u>Amount:</u>$6,142per academic year</p>
                            <u className="eligibility">Eligibility:</u>
                            <p>Awarded to students with exceptional academic achievements.</p>
                            <u className="application">Application Process:</u>
                            <p>Automatically considered during
                              the admissions process.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-information-box rt-secondary-bg big-box">
                          <div className="single-info">
                            <h4 className="title">Innovation Scholarships</h4>
                            <div className="single-info-content">
                              <div className="left-item">
                                <p className="amount"><u>Amount:</u>$6,142per academic year</p>
                                <u className="application">Application Process:</u>
                                <p>Apply through the respective department.
                                </p>
                              </div>
                              <div className="right-item">
                                <u className="eligibility">Eligibility:</u>
                                <p>Awarded to students with exceptional academic achievements.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* second item */}
                  <div className="repeating-content mt--50">
                    <h5 className="title">Specialized Scholarships</h5>
                    <div className="row g-5">
                      <div className="col-lg-6">
                        <div className="single-information-box rt-primary-bg">
                          <div className="single-info">
                            <h4 className="title">Financial Excellence Scholarship</h4>
                            <p className="amount"><u>Amount:</u>$6,142per academic year</p>
                            <u className="eligibility">Eligibility:</u>
                            <p>Awarded to students with exceptional academic achievements.</p>
                            <u className="application">Application Process:</u>
                            <p>Automatically considered during
                              the admissions process.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-information-box rt-theme-bg">
                          <div className="single-info">
                            <h4 className="title">Athletic Scholarships</h4>
                            <p className="amount"><u>Amount:</u>$6,142per academic year</p>
                            <u className="eligibility">Eligibility:</u>
                            <p>Awarded to students with exceptional academic achievements.</p>
                            <u className="application">Application Process:</u>
                            <p>Automatically considered during
                              the admissions process.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-information-box rt-secondary-bg big-box">
                          <div className="single-info">
                            <h4 className="title">[Diversity/Inclusion] Scholarship</h4>
                            <div className="single-info-content">
                              <div className="left-item">
                                <p className="amount"><u>Amount:</u>$6,142per academic year</p>
                                <u className="application">Application Process:</u>
                                <p>Apply through the respective department.
                                </p>
                              </div>
                              <div className="right-item">
                                <u className="eligibility">Eligibility:</u>
                                <p>Awarded to students with exceptional academic achievements.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="desc mt--40">
                      For detailed information on eligibility criteria, application deadlines, and the application process for each scholarship, please visit our [Scholarships] page or contact the Sonargaon University Financial Aid Office.
                    </p>
                  </div>

                  {/* scholarship requirement */}
                  {/* si = scholarship-information */}
                  <div className="si">
                    <h4 className="title">Scholarship Requirements at
                      Sonargaon University
                    </h4>
                    <p>
                      At Sonargaon University, we believe in recognizing and supporting exceptional talent and achievements. Our scholarship programs aim to provide financial assistance
                    </p>
                    <div className="si__list">
                      <ul className="list-unstyled">
                        <li className="si__list--single">
                          Outstanding academic achievements.
                        </li>
                        <li className="si__list--single">
                          High school GPA of [3.4 GPA].
                        </li>
                        <li className="si__list--single">
                          Exceptional standardized test scores (SAT/ACT).
                        </li>
                        <li className="si__list--single">
                          Active involvement in extracurricular activities.
                        </li>
                        <li className="si__list--single">
                          Exceptional standardized test scores (SAT/ACT).
                        </li>
                        <li className="si__list--single">
                          Active involvement in extracurricular activities.
                        </li>
                        <li className="si__list--single">
                          Exceptional standardized test scores (SAT/ACT).
                        </li>
                        <li className="si__list--single">
                          Active involvement in extracurricular activities.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* faq */}
                  <div className="program-credit-area faq mt--50">
                    <h4 className="title">Frequently Asked Questions (FAQ)</h4>
                    <div className="program-accordion">
                      <div className="accordion" id="rts-accordion">
                        <div className="accordion-item">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What are the admission requirements for Sonargaon University?
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
                            How do I contact Sonargaon University?
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

                  {/* TODO: Admission Information */}
                  {/* scholarship application */}
                  <div className="scholarship-form">
                    <h3 className="title">Scholarship Application Form</h3>
                    <div className="scholarship-form__application">
                      <form className="apply-form">
                        <div className="single-input">
                          <input type="text" placeholder="First name" />
                          <input type="text" placeholder="Last name" />
                        </div>
                        <div className="single-input">
                          <input type="email" placeholder="Email Address" />
                          <input type="tel" placeholder="Phone Number" />
                        </div>
                        <div className="single-input">
                          <input type="text" id="datepicker" placeholder="dd/mm/yy" required />
                          <select name="gender" id="gender">
                            <option value="*">Gender</option>
                            <option value="*">Male</option>
                            <option value="*">Female</option>
                          </select>
                        </div>
                        <div className="single-input">
                          <input type="text" placeholder="Country" />
                          <input type="text" placeholder="Citizenship" />
                        </div>
                        <div className="single-input">
                          <input type="text" placeholder="Current Collage" />
                          <input type="text" placeholder="Current GPA" />
                        </div>

                        <button type="submit" className="rts-theme-btn primary with-arrow">Submit Now <span><i className="fa-thin fa-arrow-right"></i></span></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* sidebar */}
              <div className="col-lg-4 col-md-11 sticky-coloum-item">
                <div className="program-sidebar">
                  {/* curriculum */}
                  <div className="program-curriculum">
                    <h6 className="heading-title">B.A In African Studies</h6>
                    <div className="program-menu">
                      <ul className="list-unstyled">
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Course Curriculum</a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Program Faculty</a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Apply Admission</a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Scholarship </a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Joint Event</a></li>
                      </ul>
                    </div>
                  </div>
                  {/* contact info */}
                  <div className="program-info">
                    <h5>Department Contact Info</h5>
                    <p>B.A. in Africana Studies</p>
                    <div className="contact-info">
                      <h5>Contact:</h5>
                      <a href="mailto:info@su.edu.bd">info@su.edu.bd</a>
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
                      <a href="#" className="rts-theme-btn with-arrow btn-white lh-100">Joint Now <span><i className="fa-thin fa-arrow-right"></i></span></a>
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
