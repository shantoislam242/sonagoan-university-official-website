import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'School / Department Details',
  description: 'School or department profile, faculty, and academic programs at Sonargoan University.',
  path: '/faculty-sub-details',
});

export default function FacultySubDetailsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="School / Department"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Schools', href: '/faculty-sub' },
          { label: 'Details' },
        ]}
      />

      {/* content */}
      <div className="rts-faculty-details rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section mb--60">
              <h3 className="rts-section-title">Message from Dean</h3>
            </div>
          </div>
          <div className="row">
            {/* TODO: Faculty Members */}
            <div className="col-lg-4 col-md-8">
              <div className="faculty-image text-center">
                <img className="img-fluid mw-100 " src="/assets/images/faculty/02.jpg" alt="faculty image" />
                <div className="h5 mb-2 mt-5">Barry Palatnik, Ed.D</div>
                <span>Assistant Professor</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faculty-content-text ms-lg-5 mt-5 mt-lg-0">
                <p className="h6 mb-
                        4">It&rsquo;s your Time Join to explore</p>
                <p className="mb-5">The Faculty of Arts Sonargaon University warmly welcomes you to a vast, vivid and vigorous academic landscape of relentless pursuits and superb brilliance.</p>
                <p className="h6 mb-
                        4">Learn to lead</p>
                <p className="mb-5">In line with the lifelong motto of Sonargaon University &lsquo;where leaders are created&rsquo;, FA is devoted to produce accomplished, as well as skilled, learners who can meet the professional requirements of today&rsquo;s local and global job market. Be it an academic seminar or an in-house cricket tournament or a debate festival, students and teachers at FA work hand in hand to make it a success. This is how we make sure that each of our students remains engaged in academic and extracurricular rigors to grow to his or her fullest extent. This is how FA of Sonargaon University creates local leaders for the global demands.</p>
                <p className="h6 mb-
                        4">Challenge yourself to change the world</p>
                <p>Education becomes meaningful only when it can change the world when necessary. This is what my colleagues and I are working for every single day of the week at FA. I hope that you will find whatever information you may need here and if not please feel free to let me know. I warmly welcome your comments and suggestions. Thank you very much for your kind visit.</p>
              </div>
            </div>
            <div className="border-top my-60"></div>
            {/* TODO: Departments */}
            <div className="row align-items-center justify-content-md-center">
              <div className="col-lg-6 col-md-11">
                <div className="faculty-content-text me-5">
                  <h4 className="font-32 mb-4">Mission</h4>
                  <p>Create innovative knowledge through intellectual practice, critical engagement, and creative endeavor. It is dedicated to providing students with enriched curriculum that fosters deeper understanding and appreciation of societies, cultures, languages, literatures, and artistic trends to address the contemporary global and local challenges.</p>
                  <h4 className="font-32 mb-4 mt-5">Vision</h4>
                  <p>Create innovative knowledge through intellectual practice, critical engagement, and creative endeavor. It is dedicated to providing students with enriched curriculum that fosters deeper understanding and appreciation of societies, cultures, languages, literatures, and artistic trends to address the contemporary global and local challenges.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-11">
                <figure className="mt-5 mt-lg-0">
                  <img className="mw-100" src="/assets/images/faculty/09.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          {/* TODO: Departments */}
          <div className="row g-5 faculty-sub-details rts-section-padding">
            <div className="rts-section mb-4 text-center">
              <h3 className="rts-section-title">List of Departments</h3>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="single-cat-item">
                <div className="cat-thumb">
                  <img src="/assets/images/course/09.jpg" alt="course-thumbnail" />
                </div>
                <div className="cat-meta">
                  <div className="cat-title">
                    <Link href="/department-details">Department of English</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/department-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
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
                    <Link href="/department-details">Department of Music</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/department-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
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
                    <Link href="/department-details">Department of History</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/department-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
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
                    <Link href="/department-details">Department of Philosophy</Link>
                  </div>
                  <div className="cat-link">
                    <Link href="/department-details" className="cat-link-arrow"><i className="fa-sharp fa-regular fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center g-0">
            <div className="rts-section mb--60 text-center">
              <h3 className="rts-section-title">Academics &amp; Program</h3>
            </div>
            <div className="col-lg-4 col-md-10">
              <div className="program__single--item">
                <div className="program__single--item--bg">
                  <img src="/assets/images/program/program__bg.jpg" alt="" />
                </div>
                <h5 className="program__single--item--title">undergraduate</h5>

                <ul className="program__single--item--list">
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Anthropology
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Mathematics
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Biomedical Engineering
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Astrophysics
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-10">
              <div className="program__single--item v__2">
                <div className="program__single--item--bg">
                  <img src="/assets/images/program/program__bg.jpg" alt="" />
                </div>
                <h5 className="program__single--item--title">graduate</h5>

                <ul className="program__single--item--list">
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Computation
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Mathematics
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Applied Computation
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Architecture
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-10">
              <div className="program__single--item">
                <div className="program__single--item--bg">
                  <img src="/assets/images/program/program__bg.jpg" alt="" />
                </div>
                <h5 className="program__single--item--title">Lifelong Learning</h5>

                <ul className="program__single--item--list">
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Personal Development
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Arts and Humanities
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Health and Wellness
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                  <li className="program__single--item--list--item">
                    <Link href="/program-single" className="link__list">Social Sciences
                      <span><i className="fa-regular fa-arrow-right"></i></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt--120">
            <div className="rts__section--wrapper">
              <div className="rts__section--wrapper--left">
                <h2 className="rts__section--title text-capitalize">Upcoming event</h2>
              </div>
              <div className="rts__section--link">
                <Link href="/event" className="rts-nbg-btn btn-arrow">View All<span><i className="fa-sharp fa-regular fa-arrow-right"></i>
                </span></Link>
              </div>
            </div>
          </div>
          {/* event content */}
          <div className="row g-5">
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__3">
                <div className="rts__single--event--thumb">
                  <Link href="/event-details">
                    <img src="/assets/images/event/01.jpg" alt="event" />
                  </Link>
                </div>
                <div className="rts__single--event--meta">
                  <div className="rts__single--event--meta--dl">
                    <span className="date">
                      <img src="/assets/images/icon/calendar.svg" alt="" />
                      <span>Nov 11, 2023</span>
                    </span>
                    <span className="location">
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                      <span>Yarra Park, UK</span>
                    </span>
                  </div>
                  <h5 className="rts__single--event--meta--title">
                    <Link href="/event-details">
                      Edu Fest 2023: Igniting Minds Off on
                      Transforming Lives </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__3">
                <div className="rts__single--event--thumb">
                  <Link href="/event-details">
                    <img src="/assets/images/event/02.jpg" alt="event" />
                  </Link>
                </div>
                <div className="rts__single--event--meta">
                  <div className="rts__single--event--meta--dl">
                    <span className="date">
                      <img src="/assets/images/icon/calendar.svg" alt="" />
                      <span>Nov 11, 2023</span>
                    </span>
                    <span className="location">
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                      <span>Yarra Park, UK</span>
                    </span>
                  </div>
                  <h5 className="rts__single--event--meta--title">
                    <Link href="/event-details">
                      Sustainability Showcase: Green
                      Living at Sonargaon University </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__3">
                <div className="rts__single--event--thumb">
                  <Link href="/event-details">
                    <img src="/assets/images/event/03.jpg" alt="event" />
                  </Link>
                </div>
                <div className="rts__single--event--meta">
                  <div className="rts__single--event--meta--dl">
                    <span className="date">
                      <img src="/assets/images/icon/calendar.svg" alt="" />
                      <span>Nov 11, 2023</span>
                    </span>
                    <span className="location">
                      <i className="fa-sharp fa-light fa-location-dot"></i>
                      <span>Yarra Park, UK</span>
                    </span>
                  </div>
                  <h5 className="rts__single--event--meta--title">
                    <Link href="/event-details">
                      Career Carnival: Explore Your
                      Professional Journey </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content end */}

      {/* gallery */}
      <div className="rts-gallery section-bg rts-section-padding">
        <div className="container">
          <div className="row">
            <div className="rts-section mb--50 rt-center">
              <h2 className="rts-section-title">University Sport Gallery</h2>
            </div>
          </div>
          <div className="gallery-area">
            <div className="row g-5">
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x1.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/01.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x2.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/02.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x3.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/03.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x4.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/04.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x5.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/05.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
              {/* single gallery item */}
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery">
                  <a href="/assets/images/campus/gallery/2x6.jpg" className="single-gallery__item">
                    <img src="/assets/images/campus/gallery/06.jpg" alt="gallery" />
                    <div className="single-gallery__icon">
                      <i className="fa-light fa-circle-plus"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gallery end */}

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
