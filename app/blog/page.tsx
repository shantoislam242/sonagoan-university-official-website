import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Blog',
  description: 'University blog — articles, insights, and stories from the Sonargoan community.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner title="Blog" breadcrumb={[{label:'Home',href:'/'},{label:'Blog'}]} />

      {/* university blog list */}
      <div className="rts-blog v_3 rts-section-padding">
        <div className="container">
          {/* TODO: Blog Posts */}
          <div className="row justify-content-md-start justify-content-sm-center g-5">
            {/* single blog item */}
            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog">
                <div className="blog single-blog__content">
                  <div className="blog__thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/01.jpg" alt="blog thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__meta">
                    <div className="blog__meta--da">
                      <div className="blog-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try something new feature! </Link></h5>
                    <Link href="/blog-details" className="rts-theme-btn primary with-arrow lh-100">Read More <span><i className="fa-thin fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog">
                <div className="blog single-blog__content">
                  <div className="blog__thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/02.jpg" alt="blog thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__meta">
                    <div className="blog__meta--da">
                      <div className="blog-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Samira Khan</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Those inequalities are inequalities that occur within households </Link></h5>
                    <Link href="/blog-details" className="rts-theme-btn primary with-arrow lh-100">Read More <span><i className="fa-thin fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog">
                <div className="blog single-blog__content">
                  <div className="blog__thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/03.jpg" alt="blog thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__meta">
                    <div className="blog__meta--da">
                      <div className="blog-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Samira Khan</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">After decades of improvement, cardiovascular health rates </Link></h5>
                    <Link href="/blog-details" className="rts-theme-btn primary with-arrow lh-100">Read More <span><i className="fa-thin fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog">
                <div className="blog single-blog__content">
                  <div className="blog__thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/01.jpg" alt="blog thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__meta">
                    <div className="blog__meta--da">
                      <div className="blog-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try something new feature! </Link></h5>
                    <Link href="/blog-details" className="rts-theme-btn primary with-arrow lh-100">Read More <span><i className="fa-thin fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog">
                <div className="blog single-blog__content">
                  <div className="blog__thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/02.jpg" alt="blog thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__meta">
                    <div className="blog__meta--da">
                      <div className="blog-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Samira Khan</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Those inequalities are inequalities that occur within households </Link></h5>
                    <Link href="/blog-details" className="rts-theme-btn primary with-arrow lh-100">Read More <span><i className="fa-thin fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-sm-10 col-md-6 col-lg-6 col-xl-4">
              <div className="single-blog">
                <div className="blog single-blog__content">
                  <div className="blog__thumb">
                    <Link href="/blog-details">
                      <img src="/assets/images/blog/03.jpg" alt="blog thumbnail" />
                    </Link>
                  </div>
                  <div className="blog__meta">
                    <div className="blog__meta--da">
                      <div className="blog-date">
                        <span><i className="fal fa-calendar"></i></span>
                        <span>November 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Samira Khan</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">After decades of improvement, cardiovascular health rates</Link></h5>
                    <Link href="/blog-details" className="rts-theme-btn primary with-arrow lh-100">Read More <span><i className="fa-thin fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
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
