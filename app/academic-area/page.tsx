import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Academic Areas',
  description: 'Areas of academic study, schools, and disciplines at Sonargoan University.',
  path: '/academic-area',
});

export default function AcademicAreaPage() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />
      <PageBanner
        title="Academic Areas"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Academic Areas' }]}
      />

      {/* content */}
      <div className="rts-academic-area rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section">
              <h3 className="rts-section-title">Academic Areas of Study</h3>
            </div>
          </div>
          {/* academic top */}
          <div className="search-filter mb--40">
            <div className="row g-5">
              <div className="col-lg-7 col-md-6">
                <div className="category-search">
                  <h6>Areas of Study:</h6>
                  <form className="cat-search-form">
                    <input type="text" placeholder="What interests you?" name="s" id="cat" />
                    <button type="submit" className="cat-search"><i className="fa-light fa-magnifying-glass"></i></button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="category-filter">
                  <h6>Program Type:</h6>
                  <select name="cat-search" id="cat-filter">
                    <option value="*">Undergraduate Programs</option>
                    <option value="*">Accounting BS</option>
                    <option value="*">Africana Studies, BA</option>
                    <option value="*">Applied Physics, BA, BS</option>
                    <option value="*">Biology, BA, BS</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* TODO: Departments */}
          <div className="all-program-category">
            <div className="row g-5">
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/01.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Accounting BS</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>

                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/02.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Africana Studies, BA</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/03.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Applied Physics, BA, BS</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/03.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Applied Physics, BA, BS</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/04.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Biology, BA, BS</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/05.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Chemistry, BA, BS</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/06.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Computer Science, BS</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/07.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Economics, BA</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/08.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Business Administration</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/09.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Online Education</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">American Studies, MA</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/10.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">graduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">M.A. in Education</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/11.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">graduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Education, MA</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/12.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Undergraduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Nursing, DNP</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/13.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">graduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">M.A. in Counseling</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/14.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">Online Education</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">M.S. in Nursing</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* single item */}
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-cat-item">
                  <div className="cat-thumb">
                    <img src="/assets/images/course/15.jpg" alt="course-thumbnail" />
                    <Link href="/program-single" className="cat-link-btn">graduate</Link>
                  </div>
                  <div className="cat-meta">
                    <div className="cat-title">
                      <Link href="/program-single">Master of Public Health</Link>
                    </div>
                    <div className="cat-link">
                      <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="rts-load-more-btn ">
              <a href="#" className="rts-theme-btn primary lh-100">Load More</a>
            </div>
          </div>
        </div>
      </div>

      <FooterUniversity />
    </>
  );
}
