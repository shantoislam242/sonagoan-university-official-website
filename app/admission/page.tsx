import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import AdmissionForm from '@/components/forms/AdmissionForm';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Admission',
  description: 'Apply for admission to Sonargoan University. Application form, requirements, and procedure.',
  path: '/admission',
});

export default function AdmissionPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Admission"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Admission' }]}
      />

      {/* admission page content */}
      <div className="rts-page-content rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* TODO: Admission Information */}
              <div className="admission-content-top">
                <h3 className="rts-section-title">
                  First-Year Applicants
                </h3>

                <div className="admission-big-thumb">
                  <img src="/assets/images/course/admission-bg.jpg" alt="admission" />
                </div>

                <div className="requirement-deadline">
                  <h3 className="rts-section-title">Requirements and Deadlines</h3>
                  <div className="requirement-deadline__content">
                    <ul>
                      <li className="single-requirement">$90 nonrefundable application fee or fee waiver request</li>
                      <li className="single-requirement">ACT or SAT test scores (test optional)</li>
                      <li className="single-requirement">School Report form and counselor letter of recommendation </li>
                      <li className="single-requirement">Official transcript(s) or academic results</li>
                      <li className="single-requirement">Letters of recommendation from two teachers</li>
                      <li className="single-requirement">Midyear transcript (due by February 15)</li>
                      <li className="single-requirement">$90 nonrefundable application fee or fee waiver request</li>
                      <li className="single-requirement">ACT or SAT test scores (test optional)</li>
                      <li className="single-requirement">School Report form and counselor letter of recommendation </li>
                      <li className="single-requirement">Official transcript(s) or academic results</li>
                      <li className="single-requirement">Letters of recommendation from two teachers</li>
                      <li className="single-requirement">Midyear transcript (due by February 15)</li>
                    </ul>
                  </div>
                </div>
                <div className="application-deadline">
                  <h3 className="rts-section-title">Application Deadlines</h3>
                  <div className="application-deadline__content">
                    <div className="application-deadline__content--table">
                      <table className="table">
                        <thead className="table-theme">
                          <tr>
                            <td>Event</td>
                            <td>Restrictive Early Action</td>
                            <td>Regular Decision</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Standard Application Deadline</td>
                            <td>November 1</td>
                            <td>January 10</td>
                          </tr>
                          <tr>
                            <td>Notification of Missing Documents</td>
                            <td>Mid-November</td>
                            <td>Mid-February</td>
                          </tr>
                          <tr>
                            <td>Decision Released By</td>
                            <td>Mid-December</td>
                            <td>Early April</td>
                          </tr>
                          <tr>
                            <td>Student Reply Date</td>
                            <td>May 1</td>
                            <td>May 1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p> Sonargaon University reserves the right to evaluate an application and render a final decision even if all pieces of the application have not been received.</p>
                    <p className="w-95 mx-0">Applicants are limited to a total of three applications for undergraduate admission, whether for first-year admission, transfer admission or a <br />combination of both. If you have submitted fewer than three applications to Sonargaon University, you may reapply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row sticky-coloum-wrap g-5 mt--45">
            <div className="col-lg-8">
              <div className="rts-ap-section">
                <h3 className="rts-section-title mb--30">Application Details</h3>
                <div className="rts-application-form">
                  <AdmissionForm />
                </div>
              </div>
            </div>
            <div className="col-lg-4 sticky-coloum-item">
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
                    <p>Joint New Event About
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
      {/* admission page content end */}

      <FooterUniversity />
    </>
  );
}
