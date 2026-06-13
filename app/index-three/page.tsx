import { buildMetadata } from '@/lib/metadata';
import HeaderHomeThree from '@/components/layout/HeaderHomeThree';
import FooterHomeThree from '@/components/layout/FooterHomeThree';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Home — Layout 3',
  description: 'Sonargoan University official website — alternative homepage layout.',
  path: '/index-three',
});

export default function IndexThreePage() {
  return (
    <>
      <HeaderHomeThree />

      {/* Sticky hero (Stanford-style): the hero pins at the top while the
          content below scrolls up over it. Lower z-index keeps it under both
          the content and the fixed navbar. */}
      <div style={{ position: 'sticky', top: 0, zIndex: 0 }}>
      {/* header banner */}
      <div className="banner v__2">
        <div className="banner__wrapper">
          <div className="swiper  swiper-data" data-swiper='{
                        "slidesPerView":1,
                        "effect": "fade",
                        "loop": true,
                        "speed": 1000,
                        "autoplay":{
                            "delay":"7000"
                }}'>
            <div className="swiper-wrapper">
              {/* single slides */}
              <div className="swiper-slide">
                <div className="banner__wrapper--bg" style={{ backgroundImage: 'url(/assets/images/banner/01.jpg)' }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="banner__slides--container banner__height">
                          <div className="banner__slides--content">
                            <div className="banner__slides--content--sub">
                              <img src="/assets/images/icon/e-cap.svg" alt="cap" /> knowledge meets
                              innovation
                            </div>
                            <h1 className="banner__slides--content--title">
                              Unleashing Potential
                              Fostering Excellence
                            </h1>
                            <Link href="/program-single" className="rts-theme-btn btn-arrow">View Our Program
                              <span><i className="fa-regular fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single slides end */}
              {/* single slides */}
              <div className="swiper-slide">
                <div className="banner__wrapper--bg" style={{ backgroundImage: 'url(/assets/images/banner/02.jpg)' }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="banner__slides--container banner__height">
                          <div className="banner__slides--content">
                            <div className="banner__slides--content--sub">
                              <img src="/assets/images/icon/e-cap.svg" alt="cap" /> knowledge meets
                              innovation
                            </div>
                            <h1 className="banner__slides--content--title">
                              Unleashing Potential
                              Fostering Excellence
                            </h1>
                            <Link href="/program-single" className="rts-theme-btn btn-arrow">View Our Program
                              <span><i className="fa-regular fa-arrow-right"></i></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* single slides end */}
            </div>
          </div>
          <div className="banner__slides--navigation">
            <div className="banner__slides--navigation--single">
              <h5 className="nav__title">Undergraduate</h5>
              <Link href="/academic" className="nav__description">Browse the undergraduate
                degrees</Link>
            </div>
            <div className="banner__slides--navigation--single">
              <h5 className="nav__title">Graduate</h5>
              <Link href="/academic" className="nav__description">Browse the graduate degrees</Link>
            </div>
          </div>
        </div>
      </div>
      {/* header banner end */}
      </div>
      {/* end sticky hero */}

      {/* Everything below scrolls up over the pinned hero (opaque bg + higher
          z-index), but still passes under the fixed navbar. */}
      <div style={{ position: 'relative', zIndex: 2, background: '#ffffff' }}>

      {/* mission section — centered intro (Stanford-style), SU theme */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontWeight: 700,
              color: '#2B3175',
              fontSize: 'clamp(28px, 4vw, 44px)',
              lineHeight: 1.2,
              marginBottom: 28,
            }}
          >
            A Mission Defined by Possibility
          </h2>
          <p
            style={{
              color: '#5B5B78',
              fontSize: 'clamp(17px, 1.9vw, 21px)',
              lineHeight: 1.9,
              marginBottom: 40,
            }}
          >
            The mission of Sonargaon University is to impart world-class education and
            provide research facilities so that students can attain their full
            intellectual, social and personal potentials. SU also wants to create
            facilities for higher education to the students of Bangladesh at an
            affordable cost, keeping in view the challenges of the twenty-first century.
            SU is committed to developing human capital by cultivating creative thinking
            in individuals, and offers education through modern modes of teaching.
          </p>
          <Link href="/mission-vision" className="rts-theme-btn btn-arrow">
            Explore Our Vision
            <span>
              <i className="fa-regular fa-arrow-right"></i>
            </span>
          </Link>
          </div>
        </Container>
      </section>

      {/* About — redesigned, balanced two-column layout */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div
            className="about-grid"
            style={{ display: 'grid', gap: 56, alignItems: 'center' }}
          >
            {/* Header — label + title (sits top-right on desktop, top-centered on mobile) */}
            <div className="about-header" style={{ gridArea: 'header' }}>
              <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                About Us
              </span>
              <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.2, margin: 0 }}>
                About Sonargaon University
              </h2>
            </div>

            {/* Images — staggered tilted pair with stat label */}
            <div className="su-about-imgs" style={{ gridArea: 'images', position: 'relative', display: 'flex', gap: 28, justifyContent: 'center', alignItems: 'flex-start' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="about-img about-img--left"
                src="/assets/images/about/about__h1.png"
                alt="Sonargaon University campus"
                style={{ width: '50%', height: 420, objectFit: 'cover', borderRadius: 14, boxShadow: '0 24px 60px rgba(43,49,117,0.18)', display: 'block' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="about-img about-img--right"
                src="/assets/images/about/about__h2.png"
                alt="Sonargaon University building"
                style={{ width: '50%', height: 420, objectFit: 'cover', borderRadius: 14, marginTop: 70, boxShadow: '0 24px 60px rgba(43,49,117,0.18)', display: 'block' }}
              />
              {/* accent stat card */}
              <div
                className="about-stat"
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 24,
                  background: 'linear-gradient(135deg, #2B3175, #CC1579)',
                  color: '#ffffff',
                  borderRadius: 14,
                  padding: '16px 22px',
                  boxShadow: '0 14px 30px rgba(204,21,121,0.30)',
                  zIndex: 3,
                }}
              >
                <div style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, fontSize: 26, lineHeight: 1 }}>
                  21,000+
                </div>
                <div style={{ fontSize: 12, letterSpacing: '0.04em', marginTop: 4, opacity: 0.9 }}>
                  students since 2012
                </div>
              </div>
            </div>

            {/* Body — description + checklist + link */}
            <div className="about-body" style={{ gridArea: 'body' }}>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, marginBottom: 26 }}>
                Sonargaon University (SU) is one of Bangladesh&rsquo;s preeminent private
                universities &mdash; approved by the University Grants Commission (UGC) and the
                Government of Bangladesh, and sponsored by the non-profit Sonargaon University
                Trust. It was founded to bring quality education within the reach of students
                with modest economic means.
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0, display: 'grid', gap: 14 }}>
                {[
                  'Approved by UGC & the Government of Bangladesh',
                  'Sponsored by the non-profit Sonargaon University Trust',
                  'Over 21,000 students educated since 2012',
                  'Guided by a strong Academic Advisory Council',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: '50%', background: '#CC1579', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                      <Check size={15} color="#ffffff" strokeWidth={3} />
                    </span>
                    <span style={{ color: '#1C1C1A', fontSize: 16, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="rts-nbg-btn btn-arrow">University Overview <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
            </div>
          </div>
        </Container>
        <style>{`
          /* Mobile: header (centered) -> images -> body */
          .about-grid {
            grid-template-columns: 1fr;
            grid-template-areas: "header" "images" "body";
          }
          .about-header { text-align: center; }
          @media (min-width: 992px) {
            /* Desktop: images span both rows on the left; header + body stack on the right */
            .about-grid {
              grid-template-columns: 1fr 1fr;
              grid-template-areas: "images header" "images body";
            }
            .about-header { text-align: left; align-self: end; }
            .about-body { align-self: start; }
          }
          .about-img { transition: transform .45s ease, box-shadow .45s ease; will-change: transform; }
          .about-img--left { transform: rotate(-4deg); }
          .about-img--right { transform: rotate(4deg); }
          .about-img--left:hover,
          .about-img--right:hover {
            transform: rotate(0deg) scale(1.04);
            box-shadow: 0 32px 72px rgba(43,49,117,0.28);
          }
          /* Mobile: drop the tilt/offset, keep a tidy equal-height pair */
          /* Mobile: tilted pair, left-aligned, overlapping only at the bottom */
          @media (max-width: 991px) {
            .su-about-imgs { display: block !important; position: relative; min-height: 440px; margin: 8px 0 24px; }
            .about-img--left {
              width: 58% !important; height: 270px !important; margin: 0 !important;
            }
            .about-img--right {
              position: absolute !important; right: 0; top: 95px;
              width: 56% !important; height: 270px !important; margin: 0 !important; z-index: 2;
            }
            .about-stat { left: auto !important; right: 0 !important; bottom: 0 !important; z-index: 3; }
          }
          @media (max-width: 480px) {
            .su-about-imgs { min-height: 340px; }
            .about-img--left { height: 240px !important; }
            .about-img--right { height: 240px !important; top: 90px; }
          }
        `}</style>
      </section>
      {/* About End */}

      {/* our program */}
      {/* TODO: Programs */}
      <section className="program rts-section-padding">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5">
              <div className="rts__section--wrapper v__2">
                <h2 className="rts__section--title text-capitalize">Our Programs</h2>
                <p className="rts__section--description">
                  Embark on a journey of knowledge, discovery, and growth at Sonargaon University.
                  Our admissions process is designed identify bright, motivated individuals who are
                  eager contribute to our dynamic academic community.
                </p>
                <div className="campus__vector">
                  <img src="/assets/images/campus/campus__vector.svg" alt="" />
                </div>
                <Link href="/academic" className="rts-theme-btn btn-arrow">
                  View All Program
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-10 mt-5 mt-md-0">
              <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                  <div className="program__content">
                    <div
                      className="rts__program--item v__2"
                      style={{ backgroundImage: 'url(/assets/images/program/program__1.jpg)' }}
                    >
                      <h5 className="rts__program--item--title">Summer Program</h5>
                      <p className="rts__program--item--description">
                        Embark on a journey of knowledge discovery, and growth at Sonargaon University.
                      </p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">
                        Learn More
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </Link>
                      <h5 className="rts__program--item--title--show">Summer Program</h5>
                    </div>
                    {/* second one */}
                    <div
                      className="rts__program--item v__2"
                      style={{ backgroundImage: 'url(/assets/images/program/program__2.jpg)' }}
                    >
                      <h5 className="rts__program--item--title">Undergraduate</h5>
                      <p className="rts__program--item--description">
                        Embark on a journey of knowledge discovery, and growth at Sonargaon University.
                      </p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">
                        Learn More
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </Link>
                      <h5 className="rts__program--item--title--show">Undergraduate</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="program__content mt--85">
                    <div
                      className="rts__program--item v__2"
                      style={{ backgroundImage: 'url(/assets/images/program/program__3.jpg)' }}
                    >
                      <h5 className="rts__program--item--title">Summer Program</h5>
                      <p className="rts__program--item--description">
                        Embark on a journey of knowledge discovery, and growth at Sonargaon University.
                      </p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">
                        Learn More
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </Link>
                      <h5 className="rts__program--item--title--show">Summer Program</h5>
                    </div>
                    {/* second one */}
                    <div
                      className="rts__program--item v__2"
                      style={{ backgroundImage: 'url(/assets/images/program/program__4.jpg)' }}
                    >
                      <h5 className="rts__program--item--title">Online Program</h5>
                      <p className="rts__program--item--description">
                        Embark on a journey of knowledge discovery, and growth at Sonargaon University.
                      </p>
                      <Link href="/program-single" className="rts-nbg-btn btn-arrow">
                        Learn More
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </Link>
                      <h5 className="rts__program--item--title--show">Online Program</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our program end */}

      {/* campus life start */}
      <div className="rts-campus pt--100 rts-campus-bg mobile-padding moving">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-lg-start">
            <div className="col-lg-6 col-xl-5 col-md-10 col-sm-11">
              <div className="rts-left-section">
                <h2 className="section-title rt-white mb--55">
                  Embark on a Journey: Unveiling the Story of Sonargaon University
                </h2>
                <Link
                  href="/about"
                  className="about-btn rts-nbg-btn btn-arrow
                    rt-white"
                >
                  Learn More{' '}
                  <span>
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 col-md-10 col-sm-11">
              <div className="rts-right-section rt-relative">
                <p className="rt-white mb--40">
                  Embark on a journey of knowledge, discovery, and growth at Sonargaon University. Our admissions process is designed to identify bright, motivated
                  individuals who are eager to contribute to our dynamic academic community.
                </p>
                <img className="round" src="/assets/images/feature/01.jpg" alt="campus images" />
                <div className="rts-round-shape"></div>
              </div>
            </div>
          </div>
          <div className="bottom-text rt-clip-text">About University</div>
          <div className="rt-shape">
            <img
              className="rt-shape__1"
              data-speed="0.04"
              src="/assets/images/feature/shape/01.png"
              alt=""
            />
            <img
              className="shape rt-shape__2"
              data-speed="0.04"
              src="/assets/images/feature/shape/02.png"
              alt=""
            />
            <img
              className="shape rt-shape__3"
              data-speed="0.04"
              src="/assets/images/feature/shape/03.png"
              alt=""
            />
            <img
              className="shape rt-shape__4"
              data-speed="0.04"
              src="/assets/images/feature/shape/04.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* campus life end */}

      {/* tution fee */}
      <section className="tution v__2 rts-section-padding">
        <div className="container">
          <div className="row justify-content-sm-center justify-content-md-start align-items-center g-5">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="rts__section--wrapper v__7">
                <h2 className="rts__section--title">
                  Tuition Fees at
                  Sonargaon University
                </h2>
                <p className="rts__section--description">
                  At Sonargaon University Name we are committed to providing a high-quality
                  education that is accessible to a diverse range of students.
                </p>
                <Link href="/tution-fee" className="rts-theme-btn btn-arrow">
                  Plan Details
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="tution__single--box v__1">
                <h5 className="tution__single--box--title">Undergraduate Programs</h5>
                <h6 className="tution__single--box--faculty">College of Arts and Sciences</h6>
                <ul className="tution__single--box--feature">
                  <li>Full-Time Tuition (per semester): $241</li>
                  <li>Part-Time Tuition (per credit): $141</li>
                </ul>
                <h6 className="tution__single--box--faculty">School of Business</h6>
                <ul className="tution__single--box--feature">
                  <li>Full-Time Tuition (per semester): $241</li>
                  <li>Part-Time Tuition (per credit): $141</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="tution__single--box">
                <h5 className="tution__single--box--title">Graduate Programs</h5>
                <h6 className="tution__single--box--faculty">Graduate School/Department</h6>
                <ul className="tution__single--box--feature">
                  <li>Full-Time Tuition (per semester): $241</li>
                  <li>Part-Time Tuition (per credit): $141</li>
                </ul>
                <h6 className="tution__single--box--faculty">Additional Fees</h6>
                <ul className="tution__single--box--feature">
                  <li>Technology Fee: $149 per semester</li>
                  <li>Student Activity Fee: $99 per semester</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tution fee end */}

      {/* campus life */}
      <div className="campus v__2 pt--120 pb--60">
        <div className="container">
          <div className="campus__wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="campus__link">
                  <Link href="/campus-life" className="campus__link--btn">
                    Campus Life
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="campus__right--text">
                  <h2 className="campus__right--text--title">
                    Thriving Beyond Classes Campus Life at Sonargaon University
                  </h2>
                  <p className="campus__right--text--description">
                    Step into a World of Possibilities: Sonargaon University Campus Life is a Hub of Energy,
                    Creativity, and Collaboration. Discover a Home Away from Home Where Every
                    Moment Counts.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="campus__paralax--image"
        style={{ backgroundImage: "url('/assets/images/campus/paralax__image.jpg')" }}
      ></div>

      {/* apply start */}
      <section className="rts-application-area moving rts-section-padding v_1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div className="rts__section--wrapper v__9">
                <h2 className="rts__section--title">Apply for Admission</h2>
                <p className="rts__section--description">
                  Welcome to the gateway of possibilities your admission to Sonargaon University.
                  At Sonargaon University, we understand.
                </p>
              </div>
            </div>
          </div>
          {/* application form */}
          <div className="row justify-content-md-center">
            <div className="col-md-11 col-lg-6 col-xl-7">
              <div className="rts-admission-form-image">
                <img src="/assets/images/feature/admission-form.jpg" alt="" />
              </div>
              <div className="rts-section-big-text">Admission Now</div>
            </div>
            <div className="col-md-11 col-lg-6 col-xl-5">
              <div className="rts-application-form">
                <div className="rts-application-form-content">
                  <h5 className="heading-title  mb--25">Application Form</h5>
                  <form className="rts-form">
                    <div className="rts-input rt-flex">
                      <div className="single-input">
                        <input
                          type="text"
                          name="fname"
                          id="fname"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="single-input">
                        <input
                          type="text"
                          name="lname"
                          id="lname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="rts-input rt-flex">
                      <div className="single-input">
                        <input
                          type="email"
                          name="email"
                          id="email2"
                          placeholder="Email.."
                          required
                        />
                      </div>
                      <div className="single-input">
                        <input
                          type="number"
                          name="Phone"
                          id="Phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>

                    <div className="rts-input rt-flex">
                      <div className="single-input">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          placeholder="address"
                          required
                        />
                      </div>
                      <div className="single-input">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                          required
                        />
                      </div>
                    </div>

                    <div className="rts-input rt-flex">
                      <div className="single-input">
                        <input
                          type="text"
                          name="country"
                          id="country"
                          placeholder="Country"
                          required
                        />
                      </div>
                      <div className="single-input">
                        <input
                          type="number"
                          name="zip"
                          id="zip"
                          placeholder="Zip Code"
                          required
                        />
                      </div>
                    </div>
                    <div className="rts-input w-full">
                      <div className="single-input">
                        <input
                          type="text"
                          name="data"
                          id="datepicker"
                          placeholder="dd/mm/yy"
                          required
                        />
                      </div>
                    </div>
                    <div className="rts-input w-full">
                      <div className="single-input">
                        <textarea
                          name="msg"
                          id="msg"
                          placeholder="Enter Your Comments"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="rts-theme-btn rts-nbg-btn btn-arrow v2 full-btn"
                    >
                      Apply Now{' '}
                      <span>
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-shape">
            <img
              src="/assets/images/feature/shape/01.svg"
              data-speed="0.04"
              alt="shape"
              className="rt-shape__1"
            />
            <img
              src="/assets/images/feature/shape/02.svg"
              data-speed="0.04"
              alt="shape"
              className="shape rt-shape__2"
            />
            <img
              src="/assets/images/feature/shape/03.svg"
              data-speed="0.04"
              alt="shape"
              className="shape rt-shape__3"
            />
            <img
              src="/assets/images/feature/shape/04.svg"
              data-speed="0.04"
              alt="shape"
              className="shape rt-shape__4"
            />
            <img
              src="/assets/images/feature/shape/05.svg"
              data-speed="0.04"
              alt="shape"
              className="shape rt-shape__5"
            />
          </div>
        </div>
      </section>
      {/* apply end */}

      {/* UPCOMING EVENT */}
      {/* TODO: Events */}
      <section className="rts__section rts__light pt--120">
        <div className="container">
          <div className="row">
            <div className="rts__section--wrapper rt__lowercase">
              <h2 className="rts__section--title">Upcoming event</h2>
              <div className="rts__section--link">
                <Link href="/event" className="rts-nbg-btn btn-arrow">
                  View All
                  <span>
                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* event content */}
          <div className="row g-5">
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__2">
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
                      Transforming Lives{' '}
                    </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__2">
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
                      Living at Sonargaon University{' '}
                    </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
            {/* single event item */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="rts__single--event v__2">
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
                      Professional Journey{' '}
                    </Link>
                  </h5>
                  <Link href="/event-details" className="rts__round--btn">
                    <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* single event item */}
          </div>
        </div>
      </section>
      {/* UPCOMING EVENT END */}

      {/* brand slider */}
      <div className="rts-brand v_1 rts-section-padding rts__light">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-11">
              <div
                className="rts-brand-slider swiper swiper-data"
                data-swiper='{
                    "slidesPerView":6,
                    "loop": true,
                    "autoplay":{
                        "delay":"3000"
                    },
                    "breakpoints":{
                        "320":{
                            "slidesPerView": 3,
                            "centeredSlides": true
                        },
                        "575":{
                            "slidesPerView": 4,
                            "centeredSlides": true
                        },
                        "768":{
                            "slidesPerView": 5,
                            "centeredSlides": true
                        },
                        "991":{
                            "slidesPerView": 6,
                            "centeredSlides": true
                        },
                        "1201":{
                            "slidesPerView": 6
                        }
                    }
            }'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/01.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/02.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/03.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/04.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/05.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-brand-logo">
                      <a href="#">
                        <img src="/assets/images/brand/06.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* brand slider end */}

      {/* newsletter */}
      <div className="rts-newsletter v_1 rts-cta-background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="rts-newsletter-box"
                style={{ backgroundImage: 'url(/assets/images/newsletter/bg-1.jpg)' }}
              >
                <div className="rts-newsletter-box-content">
                  <h4 className="newsletter-title">
                    Don&rsquo;t Miss Awesome Story From Our Alumni
                  </h4>
                  <div className="newsletter-form w-530">
                    <form>
                      <input
                        type="email"
                        name="subscription"
                        id="subscription"
                        placeholder="Enter Your mail"
                        required
                      />
                      <button type="submit" className="rts-nbg-btn btn-arrow">
                        Subscribe{' '}
                        <span>
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter end */}

      <FooterHomeThree />
      </div>
      {/* end overlapping content */}
    </>
  );
}
