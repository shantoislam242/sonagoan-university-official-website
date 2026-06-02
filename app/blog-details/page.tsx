import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import MobileMenu from '@/components/layout/MobileMenu';
import SearchPopup from '@/components/layout/SearchPopup';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Blog Post',
  description: 'Read the full blog post on the Sonargoan University site.',
  path: '/blog-details',
});

export default function BlogDetailsPage() {
  return (
    <>
      <HeaderUniversity />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Post" breadcrumb={[{label:'Home',href:'/'},{label:'Blog',href:'/blog'},{label:'Post'}]} />

      {/* TODO: Blog Posts */}
      {/* blog details */}
      <div className="rts-blog-details rts-section-padding">
        <div className="container">
          <div className="row sticky-coloum-wrap justify-content-center g-5">
            <div className="col-lg-8 col-md-10">
              <article className="blog-details">
                <div className="blog-details__featured-image">
                  <img src="/assets/images/blog/blog-details.jpg" alt="blog post" />
                </div>
                <div className="blog-details__article-meta mt--40">
                  <a href="#"><span><i className="fa-light fa-user"></i></span>Amir Nisi</a>
                  <span><span><i className="fa-light fa-clock"></i></span>20 Jan 2024, 10:30 pm</span>
                  <a href="#"><span><i className="fa-sharp fa-light fa-tags"></i></span>Study Aboard</a>
                </div>
                <h3 className="blog-title">10 Effective Study Tips for College Success</h3>
                <p>Welcome to SU Website! As a student, navigating through college can sometimes feel overwhelming. However, with the right strategies and study techniques, you can enhance your learning experience and achieve academic success. In this blog post, we&apos;ll explore 10 effective study tips to help you thrive in college.</p>
                <h5>Create a Study Schedule:</h5>
                <p>Establishing a study schedule can help you manage your time effectively and ensure that you allocate sufficient time for studying each subject. Determine your most productive hours and dedicate them to focused study sessions.</p>
                <h5>Set Specific Goals:</h5>
                <p>Set clear and achievable goals for each study session. Whether it&apos;s completing a set of practice problems or reviewing lecture notes, having specific objectives will keep you motivated and on track.</p>
                <blockquote className="rts-blockquote">
                  <h4>The SU Website Advantage</h4>
                  <p>At SU Website, we understand the transformative power of education, and we&apos;re committed to making learning accessible, engaging, and impactful for everyone. Here&apos;s how SU Website can help you on your education journey:</p>
                  <span>Maria Sarapoba</span>
                </blockquote>
                <p>Whether you&apos;re looking to advance your career, pursue your passions, or simply expand your horizons, SU Website is here to help you unlock your full potential. Embrace the journey of lifelong learning with SU Website as your trusted partner and embark on a transformative educational experience that will shape your future success.</p>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <div className="post-image">
                      <img src="/assets/images/blog/blog-recent-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="post-image">
                      <img src="/assets/images/blog/blog-recent-2.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <h3 className="sub-title">Why Lifelong Learning Matters:</h3>
                <p>In an era defined by rapid technological advancements and evolving job markets, the importance of lifelong learning cannot be overstated. Lifelong learning empowers individuals to adapt to change, acquire new knowledge and skills, and remain competitive in today&apos;s dynamic workforce. It fosters personal and professional development, enriches lives, and opens doors to endless opportunities.</p>
                <div className="row mb-5 align-items-center">
                  <div className="col-md-5">
                    <div className="post-image mb-5">
                      <img src="/assets/images/blog/blog-recent-3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="check-area-details">
                      <div className="single-check">
                        <i className="far fa-check-circle"></i>
                        <span>How will activities traditional manufacturing</span>
                      </div>
                      <div className="single-check">
                        <i className="far fa-check-circle"></i>
                        <span>All these digital and projects aim to enhance</span>
                      </div>
                      <div className="single-check">
                        <i className="far fa-check-circle"></i>
                        <span>I monitor my software that takes screenshots</span>
                      </div>
                      <div className="single-check">
                        <i className="far fa-check-circle"></i>
                        <span>Laoreet dolore niacin sodium glutimate
                        </span>
                      </div>
                      <div className="single-check">
                        <i className="far fa-check-circle"></i>
                        <span>Minim veniam sodium glutimate nostrud</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p>At SU Website, we believe that education has the power to change lives, inspire innovation, and create positive impact in the world. Join us on this exciting journey of lifelong learning and discover the endless possibilities that await you. Visit SU Website today and take the first step towards realizing your dreams and aspirations. Remember, your education journey starts here!</p>
              </article>
              <div className="blog-info">
                <div className="blog-tags">
                  <div className="tags-title">tags:</div>
                  <div className="blog-tags__list">
                    <a href="#">Education</a>
                    <a href="#">Admission</a>
                    <a href="#">Study</a>
                    <a href="#">Scholarship</a>
                  </div>
                </div>
                <div className="blog-share">
                  <div className="share">Share:</div>
                  <div className="social__media--list">
                    <a href="#" className="media"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="media"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="media"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#" className="media"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" className="media"><i className="fa-brands fa-behance"></i></a>
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="blog-author__info">
                  <div className="author-image">
                    <img src="/assets/images/author/02.png" alt="" />
                  </div>
                  <div className="author-content">
                    <a href="#">Maria Sara Khan</a>
                    <p>SU Website University brings expertise, passion, and dedication to shaping future minds.</p>
                    <div className="social__media--list">
                      <a href="#" className="media"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#" className="media"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#" className="media"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#" className="media"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#" className="media"><i className="fa-brands fa-behance"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-comment mb-5 mb-lg-0">
                <div className="blog-comment__template">
                  <h4>Share your opinion here !</h4>
                  <form className="comment-template">
                    <div className="input-area">
                      <input type="text" placeholder="Enter your name" required />
                      <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div className="input-area-full">
                      <input type="text" placeholder="Enter your Subject" required />
                    </div>
                    <textarea name="msg" className="input-area-full w-full" placeholder="Enter Your Message"></textarea>
                    <button className="rts-theme-btn with-arrow" type="submit">Submit Review
                      <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-10 sticky-coloum-item">
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
      </div>
      {/* blog details end */}

      <FooterUniversity />
    </>
  );
}
