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
                              We will rise up,<br />
                              We will shine.
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
                              We will rise up,<br />
                              We will shine.
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
                src="/assets/images/about/about1.jpeg"
                alt="Sonargaon University campus"
                style={{ width: '50%', height: 420, objectFit: 'cover', borderRadius: 14, boxShadow: '0 24px 60px rgba(43,49,117,0.18)', display: 'block' }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="about-img about-img--right"
                src="/assets/images/about/about2.jpeg"
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
      <section className="program" style={{ padding: '100px 0', background: '#F2F2F2' }}>
        <Container className="!max-w-[1600px]">
          <div className="prog2-wrap">
            {/* left intro */}
            <div className="rts__section--wrapper v__2 prog2-intro">
              <h2 className="rts__section--title text-capitalize">Our Programs</h2>
              <p className="rts__section--description">
                At Sonargaon University, education is more than a degree &mdash; it&rsquo;s a journey of
                discovery, growth, and impact. Across three faculties and a wide range of undergraduate
                and postgraduate programs, we nurture bright, motivated minds eager to learn, lead, and
                shape the world around them. Find the program that fits your ambition &mdash; and start
                turning ideas into impact.
              </p>
              <div className="prog2-stats">
                <div className="prog2-stat">
                  <h3><span className="counter">13</span></h3>
                  <p>Undergraduate Programs</p>
                </div>
                <div className="prog2-stat">
                  <h3><span className="counter">10</span></h3>
                  <p>Graduate Programs</p>
                </div>
                <div className="prog2-stat">
                  <h3><span className="counter">3</span></h3>
                  <p>Faculties</p>
                </div>
                <div className="prog2-stat">
                  <h3><span className="counter">6,000</span>+</h3>
                  <p>Students</p>
                </div>
              </div>
              <p className="prog2-obe">
                From engineering and business to law and design &mdash; explore programs built around the
                Outcome-Based Education model.
              </p>
              <div className="prog2-cta">
                <div className="campus__vector">
                  <img src="/assets/images/campus/campus__vector.svg" alt="" />
                </div>
                <Link href="/academic" className="rts-theme-btn btn-arrow">
                  View All Programs
                  <span>
                    <i className="fa-regular fa-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>

            {/* right — two large landscape cards */}
            <div className="prog2-cards">
              <Link
                href="/academic"
                className="prog2-card prog2-card--a"
                style={{ backgroundImage: 'url(/assets/images/program/program__2.jpg)' }}
              >
                <div className="prog2-card__body">
                  <h5>Undergraduate</h5>
                  <p className="prog2-card__desc">
                    Bachelor&rsquo;s degrees across Science &amp; Engineering, Business, and Arts &amp; Humanities &mdash; from CSE, EEE and Architecture to BBA, LLB and more.
                  </p>
                </div>
              </Link>
              <Link
                href="/academic"
                className="prog2-card prog2-card--b"
                style={{ backgroundImage: 'url(/assets/images/program/program__4.jpg)' }}
              >
                <div className="prog2-card__body">
                  <h5>Graduate</h5>
                  <p className="prog2-card__desc">
                    Master&rsquo;s degrees for graduates and professionals &mdash; a wide range of MBA tracks, MSCM, MTFM, MBM and LLM programs.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </Container>

        <style>{`
          .prog2-wrap { display: grid; grid-template-columns: 1fr; gap: 50px; align-items: center; }
          @media (min-width: 992px) {
            .prog2-wrap { grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
          }
          /* template caps .rts__section--wrapper.v__2 at 470px — widen so the
             intro text expands to the right instead of staying cramped */
          .prog2-intro { max-width: 700px !important; }
          /* match the About section heading size for consistency */
          .prog2-intro .rts__section--title {
            font-size: clamp(28px, 3.4vw, 40px) !important; line-height: 1.2;
          }
          .prog2-intro .rts__section--description {
            font-size: 16.5px; line-height: 1.85; color: #5B5B78; max-width: 100%; margin-bottom: 6px !important;
          }
          .prog2-intro .campus__vector { margin: 16px 0; }
          /* move the whole arrow+CTA group toward center; margin-left on the
             wrapper shifts both together so their internal alignment is intact */
          @media (min-width: 992px) { .prog2-cta { margin-left: 110px; } }
          .prog2-obe { font-size: 15px; color: #8A8AA3; font-style: italic; line-height: 1.6; margin: 18px 0 0; }
          .prog2-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 10px 0 0; max-width: 460px; }
          .prog2-stat {
            background: #ffffff; border: 1px solid #E8E8F0; border-radius: 14px;
            padding: 20px 22px; box-shadow: 0 6px 18px rgba(43,49,117,0.04);
          }
          .prog2-stat h3 {
            font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
            color: #2B3175; font-size: 34px; line-height: 1; margin: 0 0 4px;
          }
          .prog2-stat p { color: #5B5B78; font-size: 14px; margin: 0; }
          .prog2-cards { display: flex; flex-direction: column; gap: 30px; }
          .prog2-card {
            position: relative; display: block; height: 310px; border-radius: 20px;
            background-size: cover; background-position: center; overflow: hidden;
            box-shadow: 0 18px 44px rgba(43,49,117,0.16);
            transition: transform .4s ease, box-shadow .4s ease;
          }
          .prog2-card::before {
            content: ''; position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(20,16,40,0.72) 0%, rgba(20,16,40,0.05) 60%);
            transition: background .4s ease;
          }
          .prog2-card:hover { transform: translateY(-6px); box-shadow: 0 28px 60px rgba(43,49,117,0.24); }
          .prog2-card:hover::before {
            background: linear-gradient(to top, rgba(20,16,40,0.88) 0%, rgba(20,16,40,0.30) 75%);
          }
          .prog2-card__body { position: absolute; left: 30px; right: 30px; bottom: 26px; z-index: 1; }
          .prog2-card__body h5 {
            margin: 0; color: #ffffff; font-family: var(--font-poppins), Poppins, sans-serif;
            font-weight: 700; font-size: 26px;
          }
          .prog2-card__desc {
            max-height: 0; opacity: 0; overflow: hidden; margin: 0;
            color: rgba(255,255,255,0.92); font-size: 15px; line-height: 1.6;
            transition: max-height .45s ease, opacity .35s ease, margin-top .45s ease;
          }
          .prog2-card:hover .prog2-card__desc { max-height: 140px; opacity: 1; margin-top: 12px; }
          @media (min-width: 992px) {
            .prog2-card { width: 90%; }
            .prog2-card--a { align-self: flex-start; }
            .prog2-card--b { align-self: flex-end; }
          }
        `}</style>
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
