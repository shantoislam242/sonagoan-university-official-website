import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Blog Grid',
  description: 'University blog in grid layout.',
  path: '/blog-grid',
});

export default function BlogGridPage() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Grid" breadcrumb={[{label:'Home',href:'/'},{label:'Blog Grid'}]} />

      {/* TODO: Blog Posts */}
      {/* university blog list */}
      <div className="rts-blog v_4 rts-section-padding">
        <div className="container">
          <div className="row justify-content-center g-5">
            {/* single blog item */}
            <div className="col-lg-10 col-md-11 col-xl-6">
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
                        <span>Dec 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try
                        something new feature! </Link></h5>
                    <Link href="/blog-details" className="about-btn rts-nbg-btn btn-arrow">Read More <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-lg-10 col-md-11 col-xl-6">
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
                        <span>Dec 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try
                        something new feature! </Link></h5>
                    <Link href="/blog-details" className="about-btn rts-nbg-btn btn-arrow">Read More <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-lg-10 col-md-11 col-xl-6">
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
                        <span>Dec 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try
                        something new feature! </Link></h5>
                    <Link href="/blog-details" className="about-btn rts-nbg-btn btn-arrow">Read More <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-lg-10 col-md-11 col-xl-6">
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
                        <span>Dec 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try
                        something new feature! </Link></h5>
                    <Link href="/blog-details" className="about-btn rts-nbg-btn btn-arrow">Read More <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-lg-10 col-md-11 col-xl-6">
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
                        <span>Dec 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try
                        something new feature! </Link></h5>
                    <Link href="/blog-details" className="about-btn rts-nbg-btn btn-arrow">Read More <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>
            </div>
            {/* single blog item end */}
            {/* single blog item */}
            <div className="col-lg-10 col-md-11 col-xl-6">
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
                        <span>Dec 28, 2023</span>
                      </div>
                      <div className="blog-author">
                        <span><i className="far fa-user"></i>
                        </span>
                        <span><a href="#">Maria coli</a></span>
                      </div>
                    </div>
                    <h5 className="blog__title"> <Link href="/blog-details">Classroom community-building It&rsquo;s ok to try
                        something new feature! </Link></h5>
                    <Link href="/blog-details" className="about-btn rts-nbg-btn btn-arrow">Read More <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
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
