import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Schools & Departments',
  description: 'Browse schools, departments, and faculty divisions at Sonargoan University.',
  path: '/faculty-sub',
});

export default function FacultySubPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Schools & Departments"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Schools & Departments' }]}
      />

      {/* TODO: Departments */}
      {/* faculty directory */}
      <section className="rts-faculty rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-11 d-flex flex-wrap gap-5 justify-content-between align-items-start mb--60 border-bottom pb-5">
              <div className="rts-section">
                <h3 className="rts-section-title">Faculty &amp; Staff Directory</h3>
              </div>
              <div className="search-filter">
                <form action="#" className="cat-search-form">
                  <input type="text" placeholder="What interests you?" name="s" id="cat" />
                  <button type="submit" className="cat-search"><i className="fa-light fa-magnifying-glass"></i></button>
                </form>
              </div>
            </div>
          </div>
          {/* TODO: Faculty Members */}
          <div className="row g-5">
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/01.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Arts</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>

              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/02.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Science</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/03.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Law</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/03.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Social
                      Sciences</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/04.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Business Studies</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/05.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Engineering &amp;
                      Technology</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/06.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Fine Art</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/07.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Biological Sciences</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/08.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Medicine</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/09.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">M.A. in Education</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/10.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Faculty of Earth and Environmental Sciences</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/11.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Education, MA</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/12.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Nursing, DNP</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/13.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">M.A. in Counseling</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/14.jpg" alt="course-thumbnail" />
                  <Link href="/faculty-sub-details" className="cat-link-btn">Online Education</Link>
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">M.S. in Nursing</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single item */}
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/15.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/faculty-sub-details">Master of Public Health</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/faculty-sub-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="rts-load-more-btn rt-center mt--60">
            <Link href="/faculty-details" className="rts-theme-btn primary lh-100">Load More</Link>
          </div>
        </div>
      </section>
      {/* faculty directory end */}

      <FooterUniversity />
    </>
  );
}
