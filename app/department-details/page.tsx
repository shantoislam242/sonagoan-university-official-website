import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Department Details',
  description: 'Department profile, faculty, and offerings at Sonargoan University.',
  path: '/department-details',
});

export default function DepartmentDetailsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Department"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Department' }]}
      />

      {/* program content */}
      {/* TODO: Departments */}
      <div className="rts-program rts-section-padding">
        <div className="container">
          <div className="rts-program-single-header">
            <div className="row align-items-center g-3">
              <div className="col-lg-6">
                <h3 className="rts-section-title">Introduction Department <br /> Of English</h3>
              </div>
              <div className="col-lg-6">
                <p className="rts-section-description">The program continues to attract students from all ethnic, racial, and cultural backgrounds as they recognize ways that Africana Studies provides them with a forum to examine the intellectual life, the historical experience, and the cultural understanding of one of this country&rsquo;s largest racial minority groups.</p>
              </div>
            </div>
          </div>
          <div className="rts-program-description">
            <div className="row sticky-coloum-wrap">
              <div className="col-lg-12">
                <div className="program-description-area" id="curriculum">
                  <div className="program-big-thumb">
                    <img src="/assets/images/faculty/10.jpg" alt="program" />
                  </div>
                  <div className="program-about">
                    <h4 className="title">About The Program</h4>
                    <p>The Department of English, under the Faculty of Arts &amp; Social Sciences (FA), started its journey with two predominant visions: first, to enhance and nourish students&rsquo; mental, ethical, and creative facets of their personality; secondly, to prepare themselves for efficient professional and technical employment in future. There can be no denying that ethics, values, morality and creativity are the essential ingredients of nation-building.</p>
                    <p>As a pioneering private university of this country, SU Website has always been committed to imparting these ingredients among its students as the larger concerns of society. The Department of English firmly believes that value-education can bring excellence in leadership, and consequently excellence in nation-building.</p>
                  </div>
                  {/* TODO: Faculty Members */}
                  <div className="row g-5 faculty-sub-details mt--40">
                    <div className="rts-section mb-4 text-start">
                      <h3 className="rts-section-title">List of Departments</h3>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single-cat-item">
                        <div className="cat-thumb">
                          <img src="/assets/images/course/09.jpg" alt="course-thumbnail" />
                        </div>
                        <div className="cat-meta">
                          <div className="cat-title">
                            <Link href="/program-single">Bachelor of arts in English</Link>
                          </div>
                          <div className="cat-link">
                            <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single-cat-item">
                        <div className="cat-thumb">
                          <img src="/assets/images/course/10.jpg" alt="course-thumbnail" />
                        </div>
                        <div className="cat-meta">
                          <div className="cat-title">
                            <Link href="/program-single">M.A. English</Link>
                          </div>
                          <div className="cat-link">
                            <Link href="/program-single" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single-cat-item">
                        <div className="cat-thumb">
                          <img src="/assets/images/course/11.jpg" alt="course-thumbnail" />
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="single-cat-item">
                        <div className="cat-thumb">
                          <img src="/assets/images/course/12.jpg" alt="course-thumbnail" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* program content end */}
      {/* blog */}
      <div className="rts-blog v_1 rts__light rts-section-padding">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-11 col-lg-12">
              <div className="rts-section rts-border-bottom-1 mb--50 pb--20">
                <h2 className="rts-section-title text-uppercase">
                  Latest Blogs
                </h2>
                <p className="rts-section-description">Whether you&rsquo;re considering a foundation course or an undergraduate academics is a place.</p>
                <Link href="/blog" className="rts-nbg-btn btn-arrow">View All<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
          {/* blog content */}
          <div className="row g-5 justify-content-md-center">
            <div className="col-md-11 col-lg-6">
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
                        <a href="#">Masum Sakib</a>
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
              </div>
            </div>
            <div className="col-md-11 col-lg-6">
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
                      Those inequalities are inequalities that occur within households
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
                        <a href="#">Zent Ekizie</a>
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
                        <a href="#">Zayed Khan</a>
                      </div>
                      <div className="rt-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                    </div>
                    <Link href="/blog-details" className="post-title">
                      After decades of improvement, cardiovascular health rates
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog end */}

      <FooterUniversity />
    </>
  );
}
