import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { GraduationCap, Lightbulb } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'About Us',
  description: 'Learn about Sonargoan University — our history, mission, leadership, and community.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="About Us"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* ===== Overview ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 64px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              About Us
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.18, marginBottom: 22 }}>
              About Sonargaon University
            </h2>
          </div>
          <p style={{ color: '#5B5B78', fontSize: 18, lineHeight: 1.9, textAlign: 'center', maxWidth: 1240, margin: '0 auto' }}>
            Sonargaon University (SU) is one of Bangladesh&rsquo;s preeminent private universities &mdash; approved by the University Grants Commission (UGC) of Bangladesh and the Government of Bangladesh (GoB), and sponsored by the Sonargaon University (SU) Trust. The Trust is a registered, non-political, non-profit voluntary organization. Its members &mdash; mostly eminent entrepreneurs from the academic arena &mdash; recognized the need for a private university that brings quality education within the reach of students of modest economic means.
          </p>
        </Container>
      </section>

      {/* ===== Teaching & Research — two feature cards ===== */}
      <section style={{ background: '#F6F7FC', padding: '70px 0' }}>
        <Container className="!max-w-[1600px]">
          <div className="about-feature-grid" style={{ display: 'grid', gap: 30 }}>
            <article style={{ background: '#ffffff', borderRadius: 18, padding: '40px 38px', boxShadow: '0 12px 34px rgba(43,49,117,0.06)' }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: 'linear-gradient(135deg, #2B3175, #CC1579)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, boxShadow: '0 8px 18px rgba(204,21,121,0.22)' }}>
                <GraduationCap size={30} color="#ffffff" strokeWidth={2} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 24, marginBottom: 14 }}>
                Teaching &amp; Learning
              </h3>
              <p style={{ color: '#5B5B78', fontSize: 16.5, lineHeight: 1.85, margin: 0 }}>
                The quality of our teaching and learning is underpinned by the best staff-to-student ratios. Our professors teach at every level while remaining engaged in ground-breaking research. Our work is audited regularly by the University Grants Commission (UGC) of Bangladesh, and we are supported by a strong Academic Advisory Council.
              </p>
            </article>
            <article style={{ background: '#ffffff', borderRadius: 18, padding: '40px 38px', boxShadow: '0 12px 34px rgba(43,49,117,0.06)' }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: 'linear-gradient(135deg, #2B3175, #CC1579)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22, boxShadow: '0 8px 18px rgba(204,21,121,0.22)' }}>
                <Lightbulb size={30} color="#ffffff" strokeWidth={2} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 24, marginBottom: 14 }}>
                Research &amp; Distinction
              </h3>
              <p style={{ color: '#5B5B78', fontSize: 16.5, lineHeight: 1.85, margin: 0 }}>
                We are committed to launching young people into a boundless future and confronting the grand challenges of our time through undaunted research and scholarship. Ranked No.&nbsp;4 among the highest research-fund-spending private universities in Bangladesh &mdash; as published in the UGC Annual Report, 2018 &mdash; SU continues to earn national and international distinction for its academic and creative excellence.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* ===== Community callout ===== */}
      <section style={{ background: '#ffffff', padding: '40px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div
            style={{
              position: 'relative',
              maxWidth: 980,
              margin: '0 auto',
              background: 'linear-gradient(135deg, #F5F4FB 0%, #FBF2F7 100%)',
              border: '1px solid #ECEAF4',
              borderRadius: 24,
              padding: '64px 56px',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {/* soft decorative quote mark */}
            <span
              aria-hidden
              style={{
                position: 'absolute',
                top: 6,
                left: 34,
                fontFamily: 'Georgia, serif',
                fontSize: 140,
                lineHeight: 1,
                color: 'rgba(204,21,121,0.10)',
                pointerEvents: 'none',
              }}
            >
              &ldquo;
            </span>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 18 }}>
              All Together
            </span>
            <p style={{ color: '#2B3175', fontSize: 'clamp(19px, 2.2vw, 25px)', lineHeight: 1.65, fontWeight: 500, margin: '0 auto 26px', maxWidth: 760 }}>
              So what defines our students, faculty, and community members? The way we work &mdash; all together. It&rsquo;s not about the accomplishments of an individual; it&rsquo;s about what we can accomplish together. It is our belief that together we can create a world of good.
            </p>
            <p style={{ color: '#CC1579', fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(21px, 2.6vw, 28px)', margin: 0 }}>
              Join us on the journey.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== Our Values — original timeline layout, new content ===== */}
      <section className="rts-mission rts-section-padding">
        <div className="container">
          <div className="row justify-content-center rt-center">
            <div className="rts-section mb--50">
              <h2 className="rts-section-title">Our Values</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="rts-timeline-section">
                <div className="rts-timeline-content">
                  <div className="left-side">
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Quality Education</h5>
                      <p>
                        Delivering world-class teaching underpinned by strong staff-to-student ratios &mdash; where professors teach at every level while driving ground-breaking research.
                      </p>
                      <img src="/assets/images/about/mission-1.jpg" alt="Quality Education" />
                    </div>
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Research &amp; Innovation</h5>
                      <p>
                        Ranked among the top private universities in Bangladesh for research-fund spending, turning ideas into impact through undaunted scholarship.
                      </p>
                      <img src="/assets/images/about/mission-2.jpg" alt="Research and Innovation" />
                    </div>
                  </div>
                  <div className="separator">
                  </div>
                  <div className="right-side">
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Accessibility</h5>
                      <p>
                        Bringing quality higher education within reach through 50&ndash;100% result-based scholarships, so talent &mdash; not financial means &mdash; defines who succeeds.
                      </p>
                      <img src="/assets/images/about/mission-3.jpg" alt="Accessibility" />
                    </div>
                    <div className="single-timeline-item">
                      <h5 className="timeline-title">Community</h5>
                      <p>
                        Built on a simple belief &mdash; it&rsquo;s not about the accomplishments of an individual; it&rsquo;s what we can accomplish together.
                      </p>
                      <img src="/assets/images/about/mission-4.jpg" alt="Community" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .about-feature-grid { grid-template-columns: 1fr; }
          @media (min-width: 768px) { .about-feature-grid { grid-template-columns: 1fr 1fr; } }

          /* widen the timeline text columns so the new (longer) copy fits in ~2 lines
             instead of the template's narrow 330px wrap */
          .rts-mission .rts-timeline-section .rts-timeline-content .single-timeline-item p,
          .rts-mission .rts-timeline-section .rts-timeline-content .left-side .single-timeline-item p {
            max-width: 520px !important;
          }
          @media (max-width: 991px) {
            .rts-mission .rts-timeline-section .rts-timeline-content .single-timeline-item p,
            .rts-mission .rts-timeline-section .rts-timeline-content .left-side .single-timeline-item p {
              max-width: 380px !important;
            }
          }
        `}</style>
      </section>

      <section className="rts-campus-tour rts-section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="section-title rt-center mb--50">Our Campus Tour</h2>
            <div className="col-12">
              <div className="rts-video-section height-500 mb--50">
                <a href="https://www.youtube.com/watch?v=Uwq1uiuM_9w" className="rts-video-section-player popup-video video-btn">
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
                <img src="/assets/images/about/video-thumb.jpg" alt="video-bg" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rts-video-section-text rt-center mx-3">
                <p>Embark on a journey of knowledge, discovery, and growth at Sonargaon University. Our admissions process is designed to identify bright, motivated individuals who are eager to contribute to our dynamic academic community. Whether you&apos;re a recent high school graduate or a transfer student seeking a new academic home, we invite you to explore the possibilities that await you.</p>
                <Link href="/campus-life" className="mt--15 about-btn rts-nbg-btn btn-arrow">Visit Campus <span><i className="fa-sharp fa-regular fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterUniversity />
    </>
  );
}
