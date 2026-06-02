import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Blog List',
  description: 'University blog in list layout.',
  path: '/blog-list',
});

export default function BlogListPage() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog List" breadcrumb={[{label:'Home',href:'/'},{label:'Blog List'}]} />

      {/* TODO: Blog Posts */}
      {/* university blog list */}
      <div className="rts-blog v_5 rts-section-padding">
        <div className="container">
          <div className="row sticky-coloum-wrap g-5">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  {/* single blog item */}
                  <div className="single-blog">
                    <div className="blog single-blog__content">
                      <div className="blog__thumb">
                        <Link href="/blog-details">
                          <img src="/assets/images/blog/blog-big-1.jpg" alt="blog thumbnail" />
                        </Link>
                      </div>
                      <div className="blog__meta">
                        <div className="blog__meta--da">
                          <div className="blog-date">
                            <span><i className="fal fa-calendar"></i></span>
                            <span>Dec 28, 2023</span>
                          </div>
                          <div className="blog-author">
                            <span><i className="far fa-user"></i>
                            </span>
                            <span><a href="#">Maria coli</a></span>
                          </div>
                          <div className="blog-cat">
                            <span><i className="fa-light fa-tags"></i>
                            </span>
                            <span><a href="#">Study Aboard</a></span>
                          </div>
                        </div>
                        <h5 className="blog__title"> <Link href="/blog-details">Unlocking Potential: Harnessing the Transformative Power of Education for Lifelong Learning.</Link></h5>
                        <p className="excerpt">
                          Harnessing the Transformative Power of Education for Lifelong Learning&quot; explores the profound impact of education as a catalyst for personal and societal transformation. This insightful work delves into the dynamic relationship between education and lifelong learning, emphasizing the boundless possibilities it creates.
                        </p>
                        <Link href="/blog-details" className="rts-theme-btn primary">Read More</Link>
                      </div>
                    </div>
                  </div>
                  {/* single blog item end */}
                  {/* single blog item */}
                  <div className="single-blog">
                    <div className="blog single-blog__content">
                      <div className="blog__thumb">
                        <Link href="/blog-details">
                          <img src="/assets/images/blog/blog-big-2.jpg" alt="blog thumbnail" />
                        </Link>
                      </div>
                      <div className="blog__meta">
                        <div className="blog__meta--da">
                          <div className="blog-date">
                            <span><i className="fal fa-calendar"></i></span>
                            <span>Dec 28, 2023</span>
                          </div>
                          <div className="blog-author">
                            <span><i className="far fa-user"></i>
                            </span>
                            <span><a href="#">Maria coli</a></span>
                          </div>
                          <div className="blog-cat">
                            <span><i className="fa-light fa-tags"></i>
                            </span>
                            <span><a href="#">Study Aboard</a></span>
                          </div>
                        </div>
                        <h5 className="blog__title"> <Link href="/blog-details">Empowering Minds: Unleashing the Revolutionary Force of Education for Lifelong Growth.</Link></h5>
                        <p className="excerpt">
                          Empowering Minds: Unleashing the Revolutionary Force of Education for Lifelong Growth&quot; stands as a beacon of enlightenment, beckoning individuals to embark on a transformative journey through the boundless realm of knowledge.
                        </p>
                        <Link href="/blog-details" className="rts-theme-btn primary">Read More</Link>
                      </div>
                    </div>
                  </div>
                  {/* single blog item end */}
                  {/* single blog item */}
                  <div className="single-blog">
                    <div className="blog single-blog__content">
                      <div className="blog__thumb">
                        <Link href="/blog-details">
                          <img src="/assets/images/blog/blog-big-3.jpg" alt="blog thumbnail" />
                        </Link>
                      </div>
                      <div className="blog__meta">
                        <div className="blog__meta--da">
                          <div className="blog-date">
                            <span><i className="fal fa-calendar"></i></span>
                            <span>Dec 28, 2023</span>
                          </div>
                          <div className="blog-author">
                            <span><i className="far fa-user"></i>
                            </span>
                            <span><a href="#">Maria coli</a></span>
                          </div>
                          <div className="blog-cat">
                            <span><i className="fa-light fa-tags"></i>
                            </span>
                            <span><a href="#">Study Aboard</a></span>
                          </div>
                        </div>
                        <h5 className="blog__title"> <Link href="/blog-details">Unlocking Potential: Harnessing the Transformative Power of Education for Lifelong Learning.</Link></h5>
                        <p className="excerpt">
                          Harnessing the Transformative Power of Education for Lifelong Learning&quot; explores the profound impact of education as a catalyst for personal and societal transformation. This insightful work delves into the dynamic relationship between education and lifelong learning, emphasizing the boundless possibilities it creates.
                        </p>
                        <Link href="/blog-details" className="rts-theme-btn primary">Read More</Link>
                      </div>
                    </div>
                  </div>
                  {/* single blog item end */}
                </div>
              </div>
            </div>
            <div className="col-lg-4  sticky-coloum-item">
              <div className="rt__sidebar">
                <div className="program-sidebar">
                  {/* curriculum */}
                  <div className="program-curriculum">
                    <h6 className="heading-title">Category</h6>
                    <div className="program-menu">
                      <ul className="list-unstyled">
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Course Curriculum</a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Program Faculty</a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Study Aboard</a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Scholarship </a></li>
                        <li><a href="#"><span><i className="fa-light fa-arrow-right"></i></span>Education Expo</a></li>
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
          <div className="rts-load-more-btn rt-center mt--60">
            <a href="#" className="rts-theme-btn primary primary lh-100">Load More</a>
          </div>
        </div>
      </div>
      {/* university blog list end */}

      <FooterUniversity />
    </>
  );
}
