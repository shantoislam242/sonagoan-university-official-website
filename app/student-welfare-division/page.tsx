import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { User, Mail, Phone } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Student Welfare Division',
  description:
    'The Student Welfare Division of Sonargaon University supports students with advising, counseling, disability support, extra-curricular clubs, and learning support.',
  path: '/student-welfare-division',
});

const EMAIL = 'info@su.edu.bd';
const PHONE = '+880 1955-544907';

type Member = { name: string; role: string; photo?: string };

const TEAM: Member[] = [
  { name: 'Kazi Zulkernine Sultan Alam', role: 'Director', photo: '/assets/images/swd/kazi.png' },
  { name: 'Mohammad Yousuf Mazumder', role: 'Deputy Director', photo: '/assets/images/swd/yousuf.png' },
  { name: 'Rifat Islam', role: 'Assistant Director', photo: '/assets/images/swd/rifat.png' },
  { name: 'Surya Akter', role: 'Executive' },
  { name: 'Nusrat Jahan', role: 'Office Associate', photo: '/assets/images/swd/nusrat.png' },
];

const CLUBS = [
  'Business & Entrepreneurship Club', 'Debate Club', 'Theater Club', 'Event Management Club',
  'Photography Club', 'Sports Club', 'Environment Club', 'Blood Donation Club',
];

export default function StudentWelfareDivisionPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Student Welfare Division"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Campus Life', href: '/campus-life' },
          { label: 'Student Welfare Division' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '74px 0 20px' }}>
        <Container>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <span className="swd-eyebrow">Support &amp; Well-being</span>
            <h2 className="swd-title">A university that looks after its students</h2>
            <p className="swd-lead">
              Every student has a personal teacher advisor in their academic department to offer advice and
              support on study and other matters. In addition, our welfare team includes a Welfare Advisor, a
              Learning Support Advisor, a Student Counsellor, a Family Welfare Officer, and a secretary, who
              work closely and confidentially on the personal affairs of students.
            </p>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section style={{ background: '#ffffff', padding: '44px 0 80px' }}>
        <Container>
          <div className="swd-sechead">
            <span className="swd-eyebrow">Meet the Team</span>
            <h3 className="swd-h3">Student Welfare Division</h3>
          </div>
          <div className="swd-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="swd-card">
                <div className="swd-card__photo-wrap">
                  {m.photo ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.photo} alt="" aria-hidden className="swd-card__bg" />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={m.photo} alt={m.name} className="swd-card__photo" />
                    </>
                  ) : (
                    <span className="swd-card__placeholder" aria-hidden><User size={46} strokeWidth={1.5} /></span>
                  )}
                </div>
                <div className="swd-card__body">
                  <h4 className="swd-card__name">{m.name}</h4>
                  <p className="swd-card__role">{m.role}</p>
                  <div className="swd-card__contact">
                    <a href={`mailto:${EMAIL}`} className="swd-card__row"><Mail size={14} /><span>{EMAIL}</span></a>
                    <a href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`} className="swd-card__row"><Phone size={14} /><span>{PHONE}</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section style={{ background: '#F6F7FC', padding: '78px 0 88px' }}>
        <Container>
          <div className="swd-doc">
            <article className="swd-block">
              <h3 className="swd-block__title">Always someone to listen</h3>
              <p>
                Teacher advisors address any welfare needs a student may have. It is quite likely that you will
                never need to visit the Welfare Department, but if you feel unhappy or homesick, or if your work
                seems to be getting out of control, there is always someone available to listen and to offer
                whatever practical support is possible. If you are ill or have a medical problem, the University
                doctor provides treatment during office hours.
              </p>
            </article>

            <article className="swd-block">
              <h3 className="swd-block__title">Support for Students with Disabilities</h3>
              <p>
                It is SU&rsquo;s policy to support all students with disabilities. If you have a disability,
                please let us know when you apply so that we can assess your requirements and ensure that, where
                possible, they are fully met.
              </p>
            </article>

            <article className="swd-block">
              <h3 className="swd-block__title">Extra-Curricular Activities</h3>
              <p>
                Sonargaon University encourages students to explore extra-curricular activities that prepare
                them for the growing challenges of the world. To this end, the University runs a range of
                student clubs:
              </p>
              <div className="swd-clubs">
                {CLUBS.map((c) => <span key={c} className="swd-club">{c}</span>)}
              </div>
            </article>

            <article className="swd-block">
              <h3 className="swd-block__title">How We Teach</h3>
              <p>
                Teaching methods are designed to ensure in-depth knowledge of the subject, while developing the
                analytical, presentation, teamwork, and communication skills sought by employers. Professors
                provide the stimulus and a starting point for deeper exploration through classes and seminars. A
                seminar offers the chance to study a selected aspect of a subject in detail and to exchange ideas
                with the tutor and fellow students. In science and engineering subjects, students carry out
                experimental work in well-equipped teaching labs, working individually or in teams, and are
                assessed on their results and written reports.
              </p>
              <p>
                For most degrees, students take a combination of compulsory and optional modules. Alongside
                classes and seminars, students spend time studying and researching in the library or carrying
                out practical work and projects. A reading list is provided for each module, but students are
                responsible for planning their own reading and private study.
              </p>
            </article>

            <article className="swd-block">
              <h3 className="swd-block__title">Learning Support &amp; Private Study</h3>
              <p>
                A personal adviser monitors each student&rsquo;s progress and guides them through the course
                until graduation. University study methods may be very different from a student&rsquo;s previous
                experience, so our Learning Enhancement Tutors help improve study skills such as note-taking,
                essay writing, time management, and exam technique.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .swd-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
        .swd-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.2; margin: 0 0 16px; }
        .swd-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }

        .swd-sechead { text-align: center; margin: 0 auto 46px; }
        .swd-h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(24px, 3.2vw, 34px); margin: 0; }

        .swd-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 540px) { .swd-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 920px) { .swd-grid { grid-template-columns: repeat(5, 1fr); } }
        .swd-card { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column; transition: transform .25s ease, box-shadow .25s ease; }
        .swd-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .swd-card__photo-wrap { position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6; overflow: hidden; aspect-ratio: 1 / 1; }
        .swd-card__bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0; }
        .swd-card__photo { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: contain; object-position: center bottom; display: block; }
        .swd-card__placeholder { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #fff; background: linear-gradient(150deg, #2B3175 0%, #3a2c74 55%, #CC1579 150%); }
        .swd-card__body { padding: 16px 16px 20px; text-align: center; flex: 1; }
        .swd-card__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 15.5px; line-height: 1.3; margin: 0 0 5px; }
        .swd-card__role { color: #CC1579; font-size: 12.5px; font-weight: 600; margin: 0 0 14px; }
        .swd-card__contact { display: flex; flex-direction: column; gap: 8px; padding-top: 13px; border-top: 1px solid #F0F0F5; text-align: left; }
        .swd-card__row { display: inline-flex; align-items: center; gap: 8px; color: #5B5B78; font-size: 12.5px; text-decoration: none; word-break: break-all; transition: color .2s ease; }
        .swd-card__row svg { color: #2B3175; flex-shrink: 0; }
        .swd-card__row:hover { color: #CC1579; }
        .swd-card__row:hover svg { color: #CC1579; }

        .swd-doc { display: flex; flex-direction: column; gap: 30px; }
        .swd-block { padding-bottom: 30px; border-bottom: 1px solid #E5E6EF; }
        .swd-block:last-child { padding-bottom: 0; border-bottom: 0; }
        .swd-block__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(20px, 2.6vw, 26px); margin: 0 0 14px; }
        .swd-block p { color: #4C4C68; font-size: 16px; line-height: 1.85; margin: 0 0 14px; }
        .swd-block p:last-child { margin-bottom: 0; }

        .swd-clubs { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
        .swd-club { display: inline-flex; align-items: center; background: #fff; border: 1px solid #E5E6EF; color: #2B3175; font-weight: 600; font-size: 13.5px; padding: 8px 15px; border-radius: 999px; box-shadow: 0 6px 16px rgba(43,49,117,0.04); }
      `}</style>
    </>
  );
}
