import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Notice',
  description: 'Notice details from Sonargoan University.',
  path: '/notice-details',
});

export default function NoticeDetailsPage() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Notice" breadcrumb={[{label:'Home',href:'/'},{label:'Notices'},{label:'Details'}]} />

      {/* TODO: Notices */}
      {/* notice details */}
      <div className="rts-notice-details rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-center justify-content-start">
            <div className="col-lg-7 col-md-10 mb-5 mb-lg-0">
              <div className="rts-notice-full">
                <div className="notice-content">
                  <h4 className="notice-title mb--40">Urgent Admission Notice: Extended Deadline for Submission of
                    Applications </h4>

                  <div className="notice-content__description">
                    <img src="/assets/images/logo/logo-default.svg" alt="unilogo" className="institute-logo mb--25" />

                    <p><b>Date:</b> February 14, 2024</p>
                    <p> Dear Prospective Students,</p>

                    <p><b>Subject: Admission Criteria and Requirements for Undergraduate Programs</b></p>

                    <p>
                      We are delighted to announce the commencement of the admissions process for
                      undergraduate programs at [Your
                      College/Institution Name]. As you embark on this exciting journey of higher
                      education, we would like to provide you
                      with essential information regarding the admission criteria and requirements.
                    </p>

                    <p><b>1. Program Offerings:</b>
                      SU Website University offers a diverse range of undergraduate
                      programs across
                      various disciplines, including but not limited to Arts, Sciences, Engineering,
                      Business, and Humanities. Detailed
                      information about each program, including curriculum, specializations, and faculty,
                      can be found on our official
                      website.</p>
                    <p>
                      <b>2. Application Process:</b>
                      - Online Application: All applicants are required to submit an online application
                      through our admissions portal. The
                      application portal can be accessed through our official website.
                      - Application Fee: A non-refundable application fee is applicable for all
                      applicants. Details regarding the
                      application fee payment process are available on the admissions portal.
                      - Supporting Documents: Applicants are required to submit all necessary supporting
                      documents, including transcripts,
                      standardized test scores, and any additional requirements specified for the chosen
                      program.
                    </p>

                    <p>
                      <b>3. Important Dates:</b>
                      - Application Deadline: The deadline for submission of applications is [Insert
                      Application Deadline Date].
                      - Admission Decision: Applicants can expect to receive admission decisions within
                      12 Dec 2024 after the
                      application deadline.
                    </p>

                    <p>
                      <b>4. Information Session:</b>
                      - To learn more about our undergraduate programs, admission process, and campus
                      life, we
                      invite you to attend our
                      upcoming information session scheduled for [Insert Date and Time]. Details regarding
                      the
                      information session will be
                      available on our website.
                    </p>


                    <p>
                      Should you have any questions or require further assistance regarding the admission
                      process, please do not hesitate
                      to contact the admissions office at [Admissions Office Contact Information].
                    </p>

                    <p>
                      We look forward to receiving your application and welcoming you to SU Website
                      University as part of our
                      vibrant academic community.
                    </p>

                    <p>
                      Best regards,
                    </p>
                    <p>
                      <b>Dr. Adam Smith</b>
                    </p>
                    <img src="/assets/images/sign.png" alt="sign" className="mb--25" />
                    <p>
                      <b>Assistant Professor</b>
                    </p>
                    <p>
                      <b>SU Website University</b>

                    </p>
                  </div>
                  <div className="notice-content__download mt--30">
                    <a href="/assets/files/document.pdf" className="rts-theme-btn" download>Download <span><i className="fa-sharp fa-light fa-file-pdf"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-10">
              <div className="rts-notice-section ">
                <div className="rts-section rt-between pb--25 rts-border-bottom-2">
                  <h4 className="rts-section-title">Notice</h4>
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
                                  Notice Regarding Upcoming Campus Event: Spring Fling
                                  Carnival.
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
                                  Important Notice: Changes to Examination Schedule for Fall
                                  Semester 2024.
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
                                  Notice Regarding Deadline Extension for Assignment
                                  Submission in Biology 101.
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
                                  Urgent Notice: Campus Maintenance Work Scheduled for March
                                  5th-7th.
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
                                  Notice of Guest Lecture: Dr. John Smith on Neuroscience
                                  Advances.
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
                                  Urgent Notice: Campus Maintenance Work Scheduled for March
                                  5th-7th.
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
                                  Notice of Guest Lecture: Dr. John Smith on Neuroscience
                                  Advances.
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
                                <a href="#">
                                  Important Notice: Midterm Examination Schedule for Spring
                                  Semester 2024.
                                </a>
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
                                <a href="#">
                                  Notice Regarding Final Examination Timetable for Fall
                                  Semester 2023
                                </a>
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
                                <a href="#">
                                  Urgent Notice: Changes to Exam Dates for Biology 10
                                </a>
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
                                <a href="#">
                                  Notice of Exam Venue Change for Chemistry 201
                                </a>
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
                                <a href="#">
                                  Reminder Notice: Registration Deadline for Winter Term
                                  Examinations
                                </a>
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
                                <a href="#">
                                  Admission Notice: Applications Now Open for Fall 2024 Intake
                                </a>
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
                                <a href="#">
                                  Important Notice: Admission Criteria and Requirements for
                                  Undergraduate Programs
                                </a>
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
                                <a href="#">
                                  Urgent Admission Notice: Extended Deadline for Submission of
                                  Applications
                                </a>
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
                                <a href="#">
                                  Notice of Scholarship Opportunities for Incoming Freshmen
                                </a>
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
                                <a href="#">
                                  Admission Notice: Information Session for Prospective
                                  Students on 2024
                                </a>
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
      </div>
      {/* notice details end */}



      {/* newsletter */}
      <div className="rts-newsletter v_1 rts-cta-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="rts-newsletter-box" style={{backgroundImage: 'url(/assets/images/newsletter/bg-1.jpg)'}}>
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
