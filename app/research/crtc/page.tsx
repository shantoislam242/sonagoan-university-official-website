import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpenCheck,
  Brain,
  GraduationCap,
  Mail,
  Play,
  Scale,
  Share2,
  ShieldCheck,
} from 'lucide-react';
import CrtcInteractive from './CrtcInteractive';

export const metadata = buildMetadata({
  title: 'Center for Research, Training & Consultancy',
  description:
    'The Center for Research, Training & Consultancy (CRTC) leads research, training, consultancy and publication initiatives at Sonargaon University.',
  path: '/research/crtc',
});

const STATS = [
  { number: '30+', label: 'Research initiatives per year' },
  { number: '12', label: 'Departments engaged' },
  { number: '5', label: 'Core program areas' },
  { number: '2012', label: 'Established' },
];

const VALUES = [
  {
    title: 'Equal opportunity',
    text: 'Every department gets a fair chance to take part in research and training.',
    Icon: Scale,
  },
  {
    title: 'Quality assurance',
    text: 'Research and training output is held to a consistent standard.',
    Icon: ShieldCheck,
  },
  {
    title: 'Knowledge sharing',
    text: 'Ideas and findings are exchanged with research bodies, both local and international.',
    Icon: Share2,
  },
  {
    title: 'Open inquiry',
    text: 'Scientific and intellectual openness comes first, never traded for volume.',
    Icon: Brain,
  },
];

type TeamMember = {
  name: string;
  title: string;
  photo: string;
  email?: string;
};

const TEAM: TeamMember[] = [
  {
    name: 'Prof. Dr. Mohammed A Mabud',
    title: 'Director',
    photo: '/assets/images/crtc/mohammed-a-mabud.png',
  },
  {
    name: 'Md. Abu Hanif',
    title: 'Additional Director',
    photo: '/assets/images/crtc/md-abu-hanif.png',
  },
  {
    name: 'Muhammad Imanuddin',
    title: 'CISCO Trainer',
    photo: '/assets/images/crtc/muhammad-imanuddin.png',
  },
];

const NOTICES = [
  { day: '12', month: 'Jun', title: 'Call for research proposal submission under CRTC review.' },
  { day: '28', month: 'May', title: 'Training workshop registration for faculty research methods.' },
  { day: '16', month: 'Apr', title: 'Technical Committee meeting schedule for submitted proposals.' },
  { day: '07', month: 'Mar', title: 'CRTC seminar on publication ethics and research quality.' },
];

const VIDEOS = [
  { id: 'RyFmVOeQ9po', title: 'CRTC Knowledge Exchange Session' },
  { id: 'SAZJ7-bQmU4', title: 'Research Training Highlights' },
  { id: 'VGgZyiZhox4', title: 'Faculty Workshop Session' },
];

export default function CrtcPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Center for Research, Training & Consultancy"
        bgImage="/assets/images/crtc/hero.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'CRTC' },
        ]}
      />

      <section style={{ background: '#ffffff', padding: '72px 0 34px' }}>
        <Container>
          <div className="crtc-stats">
            {STATS.map((stat) => (
              <div key={stat.label} className="crtc-stat">
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ background: '#ffffff', padding: '42px 0 82px' }}>
        <Container>
          <div className="crtc-about">
            <div>
              <span className="crtc-kicker">About CRTC</span>
              <h2 className="crtc-title">Research, training and consultancy for a stronger SU.</h2>
              <p className="crtc-lead">
                Sonargaon University began in 2012 with three faculties and has since grown into twelve
                departments spanning engineering, business, law, architecture and the arts. As SU works toward
                becoming a recognized teaching-and-research university, the Center for Research, Training &amp;
                Consultancy (CRTC) was established to lead that effort.
              </p>
            </div>

            <aside className="crtc-vision">
              <div className="crtc-vision__icon">
                <GraduationCap size={28} />
              </div>
              <h3>Vision</h3>
              <p>To position Sonargaon University as a reputed teaching-and-research university within the next decade.</p>
              <div className="crtc-vision__mission">
                <h4>Mission</h4>
                <p>
                  To drive consistent research, training and consultancy initiatives that generate knowledge, support
                  stakeholders, and elevate SU alongside Bangladesh&apos;s leading research universities.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section style={{ background: '#F6F7FC', padding: '76px 0 84px' }}>
        <Container>
          <div className="crtc-section-head">
            <span className="crtc-kicker">Principles</span>
            <h2 className="crtc-title">Core Values</h2>
          </div>
          <div className="crtc-values">
            {VALUES.map(({ title, text, Icon }) => (
              <article key={title} className="crtc-value-card">
                <span className="crtc-value-card__icon">
                  <Icon size={22} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CrtcInteractive>
        <section style={{ background: '#F6F7FC', padding: '78px 0 26px' }}>
          <Container>
            <div className="crtc-section-head">
              <span className="crtc-kicker">Leadership</span>
              <h2 className="crtc-title">Management Team</h2>
            </div>
            <div className="crtc-team">
              {TEAM.map((member) => (
                <article key={member.name} className="crtc-team-card">
                  <div className="crtc-team-card__photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.photo} alt="" aria-hidden className="crtc-team-card__photo-bg" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={member.photo} alt={member.name} className="crtc-team-card__photo-main" />
                  </div>
                  <div className="crtc-team-card__body">
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="crtc-team-card__email">
                        <Mail size={15} />
                        {member.email}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section style={{ background: '#F6F7FC', padding: '52px 0 90px' }}>
          <Container>
            <div className="crtc-media-grid">
              <div className="crtc-panel">
                <div className="crtc-panel__head">
                  <span className="crtc-panel__icon">
                    <BookOpenCheck size={20} />
                  </span>
                  <h2>Notice Board</h2>
                </div>
                <div className="crtc-notices">
                  {NOTICES.map((notice) => (
                    <Link href="/notice-details" key={notice.title} className="crtc-notice">
                      <span className="crtc-notice__date">
                        {notice.day}
                        <small>{notice.month}</small>
                      </span>
                      <span className="crtc-notice__title">{notice.title}</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="crtc-panel">
                <div className="crtc-panel__head">
                  <span className="crtc-panel__icon">
                    <Play size={20} />
                  </span>
                  <h2>Videos</h2>
                </div>
                <div className="crtc-videos">
                  {VIDEOS.map((video) => (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="crtc-video"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} />
                      <span className="crtc-video__play">
                        <Play size={17} fill="currentColor" />
                      </span>
                      <strong>{video.title}</strong>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      </CrtcInteractive>

      <FooterUniversity />

      <style>{`
        .crtc-kicker {
          display: inline-block; color: #CC1579; font-weight: 700; font-size: 13px;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px;
        }
        .crtc-title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: clamp(26px, 3.4vw, 38px); line-height: 1.22; margin: 0;
        }
        .crtc-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 20px 0 0; }
        .crtc-section-head { text-align: center; margin: 0 auto 42px; max-width: 720px; }

        .crtc-stats {
          display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px;
          border: 1px solid #ECECF3; background: #fff; box-shadow: 0 14px 36px rgba(43,49,117,0.07);
        }
        @media (min-width: 800px) { .crtc-stats { grid-template-columns: repeat(4, 1fr); } }
        .crtc-stat { padding: 26px 20px; text-align: center; border-right: 1px solid #ECECF3; }
        .crtc-stat:last-child { border-right: 0; }
        .crtc-stat strong {
          display: block; color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif;
          font-size: clamp(30px, 4vw, 44px); line-height: 1; margin-bottom: 8px;
        }
        .crtc-stat span { display: block; color: #5B5B78; font-size: 14.5px; line-height: 1.45; font-weight: 600; }

        .crtc-about { display: grid; grid-template-columns: 1fr; gap: 34px; align-items: start; }
        @media (min-width: 920px) { .crtc-about { grid-template-columns: 1.7fr 1fr; gap: 64px; } }
        .crtc-vision {
          background: #F8F8FC; border: 1px solid #ECECF3; padding: 30px;
          box-shadow: 0 14px 36px rgba(43,49,117,0.07); position: relative; overflow: hidden;
        }
        .crtc-vision::before {
          content: ''; position: absolute; inset: 0 0 auto 0; height: 4px;
          background: linear-gradient(90deg, #2B3175, #CC1579);
        }
        .crtc-vision__icon {
          width: 54px; height: 54px; display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.1); color: #CC1579; margin-bottom: 18px;
        }
        .crtc-vision h3, .crtc-vision h4 {
          font-family: var(--font-poppins), Poppins, sans-serif; color: #2B3175; font-weight: 700; margin: 0 0 10px;
        }
        .crtc-vision h3 { font-size: 22px; }
        .crtc-vision h4 { font-size: 16px; }
        .crtc-vision p { color: #5B5B78; font-size: 15.5px; line-height: 1.75; margin: 0; }
        .crtc-vision__mission { margin-top: 24px; padding-top: 22px; border-top: 1px solid #E6E7F0; }

        .crtc-values { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 680px) { .crtc-values { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1040px) { .crtc-values { grid-template-columns: repeat(4, 1fr); } }
        .crtc-value-card {
          background: #fff; border: 1px solid #ECECF3; padding: 26px 23px; min-height: 220px;
          box-shadow: 0 12px 32px rgba(43,49,117,0.06); transition: transform .25s ease, box-shadow .25s ease;
        }
        .crtc-value-card:hover { transform: translateY(-5px); box-shadow: 0 24px 48px rgba(43,49,117,0.13); }
        .crtc-value-card__icon {
          width: 46px; height: 46px; display: inline-flex; align-items: center; justify-content: center;
          background: rgba(43,49,117,0.08); color: #2B3175; margin-bottom: 18px;
        }
        .crtc-value-card h3 {
          font-family: var(--font-poppins), Poppins, sans-serif; color: #2B3175; font-weight: 700;
          font-size: 18px; margin: 0 0 10px;
        }
        .crtc-value-card p { color: #5B5B78; font-size: 14.5px; line-height: 1.65; margin: 0; }

        .crtc-activity { max-width: 1360px; margin: 0 auto; display: grid; gap: 14px; }
        .crtc-activity__item { border: 1px solid #ECECF3; background: #F8F8FC; overflow: hidden; }
        .crtc-activity__button {
          width: 100%; border: 0; background: transparent; display: flex; align-items: center; justify-content: space-between;
          gap: 18px; padding: 20px 22px; text-align: left; color: #2B3175; cursor: pointer;
        }
        .crtc-activity__button strong {
          display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-size: 17px; margin-bottom: 5px;
        }
        .crtc-activity__button small { display: block; color: #8A8AA3; font-size: 13.5px; font-weight: 600; }
        .crtc-activity__button svg { color: #CC1579; flex-shrink: 0; transition: transform .25s ease; }
        .crtc-activity__item.is-open .crtc-activity__button svg { transform: rotate(180deg); }
        .crtc-activity__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .28s ease; }
        .crtc-activity__panel p {
          overflow: hidden; margin: 0; color: #5B5B78; font-size: 15.5px; line-height: 1.75;
          padding: 0 22px;
        }
        .crtc-activity__item.is-open .crtc-activity__panel { grid-template-rows: 1fr; }
        .crtc-activity__item.is-open .crtc-activity__panel p { padding-bottom: 22px; }

        .crtc-team {
          display: grid; grid-template-columns: 1fr; gap: 24px; justify-content: center;
          max-width: 1000px; margin: 0 auto;
        }
        @media (min-width: 600px) { .crtc-team { grid-template-columns: repeat(2, minmax(0, 300px)); } }
        @media (min-width: 900px) { .crtc-team { grid-template-columns: repeat(3, minmax(0, 300px)); } }
        .crtc-team-card {
          background: #fff; border: 1px solid #ECECF3; box-shadow: 0 14px 38px rgba(43,49,117,0.08);
          overflow: hidden; transition: transform .25s ease, box-shadow .25s ease;
        }
        .crtc-team-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .crtc-team-card__photo {
          position: relative; aspect-ratio: 1 / 1; background: #EEF0F6; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .crtc-team-card__photo-bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top;
          transform: scale(1.12); filter: blur(18px); opacity: .42;
        }
        .crtc-team-card__photo-main {
          position: relative; z-index: 1; width: 100%; height: 100%; object-fit: contain; object-position: center bottom;
          display: block;
        }
        .crtc-team-card__body { min-height: 104px; padding: 22px 20px 24px; text-align: center; }
        .crtc-team-card h3 {
          font-family: var(--font-poppins), Poppins, sans-serif; color: #2B3175; font-size: 18px;
          line-height: 1.35; font-weight: 700; margin: 0 0 6px;
        }
        .crtc-team-card p { color: #5B5B78; font-size: 15px; line-height: 1.35; margin: 0; }
        .crtc-team-card__email {
          display: inline-flex; align-items: center; justify-content: center; gap: 7px; color: #CC1579;
          font-size: 13.5px; font-weight: 600; margin-top: 12px; text-decoration: none;
        }
        .crtc-team-card__email:hover { text-decoration: underline; }

        .crtc-media-grid { display: grid; grid-template-columns: 1fr; gap: 26px; }
        @media (min-width: 940px) { .crtc-media-grid { grid-template-columns: 1fr 1fr; gap: 32px; } }
        .crtc-panel { background: #fff; border: 1px solid #ECECF3; padding: 28px; box-shadow: 0 14px 36px rgba(43,49,117,0.07); }
        .crtc-panel__head { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
        .crtc-panel__icon {
          width: 42px; height: 42px; display: inline-flex; align-items: center; justify-content: center;
          color: #CC1579; background: rgba(204,21,121,0.1);
        }
        .crtc-panel__head h2 {
          color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-size: 24px;
          font-weight: 700; margin: 0;
        }
        .crtc-notices { display: grid; gap: 13px; }
        .crtc-notice {
          display: grid; grid-template-columns: 58px 1fr 18px; gap: 14px; align-items: center; text-decoration: none;
          border: 1px solid #F0F0F5; padding: 13px; color: #2B3175; transition: border-color .2s ease, background .2s ease;
        }
        .crtc-notice:hover { border-color: #d7d8e6; background: #F8F8FC; }
        .crtc-notice__date {
          height: 54px; display: flex; flex-direction: column; align-items: center; justify-content: center;
          background: #2B3175; color: #fff; font-weight: 800; line-height: 1;
        }
        .crtc-notice__date small { font-size: 11px; margin-top: 5px; text-transform: uppercase; color: #fff; }
        .crtc-notice__title { color: #2B3175; font-size: 14.5px; line-height: 1.45; font-weight: 600; }
        .crtc-notice svg { color: #CC1579; }

        .crtc-videos { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 560px) { .crtc-videos { grid-template-columns: repeat(2, 1fr); } }
        .crtc-video { position: relative; display: block; overflow: hidden; text-decoration: none; background: #11152B; min-height: 168px; }
        .crtc-video img { width: 100%; height: 168px; object-fit: cover; display: block; opacity: .82; transition: transform .25s ease, opacity .25s ease; }
        .crtc-video:hover img { transform: scale(1.04); opacity: .68; }
        .crtc-video__play {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          width: 46px; height: 46px; display: inline-flex; align-items: center; justify-content: center;
          background: #CC1579; color: #fff; border-radius: 50%;
        }
        .crtc-video strong {
          position: absolute; left: 14px; right: 14px; bottom: 13px; color: #fff; font-size: 13.5px;
          line-height: 1.35; font-family: var(--font-poppins), Poppins, sans-serif;
        }

        .crtc-gallery { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 620px) { .crtc-gallery { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 980px) { .crtc-gallery { grid-template-columns: repeat(3, 1fr); } }
        .crtc-gallery__item {
          border: 0; padding: 0; background: #DDE0EB; cursor: pointer; aspect-ratio: 4 / 3;
          overflow: hidden; box-shadow: 0 12px 30px rgba(43,49,117,0.08);
        }
        .crtc-gallery__item img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .28s ease; }
        .crtc-gallery__item:hover img { transform: scale(1.05); }
        .crtc-lightbox {
          position: fixed; inset: 0; z-index: 9999; background: rgba(17,21,43,.88);
          display: flex; align-items: center; justify-content: center; padding: 24px;
        }
        .crtc-lightbox img { max-width: min(1100px, 94vw); max-height: 86vh; object-fit: contain; box-shadow: 0 22px 70px rgba(0,0,0,.35); }
        .crtc-lightbox__close {
          position: absolute; top: 22px; right: 22px; width: 44px; height: 44px; border: 0; border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center; color: #2B3175; background: #fff; cursor: pointer;
        }

        @media (max-width: 799px) {
          .crtc-stat { border-right: 0; }
          .crtc-stat:nth-child(odd) { border-right: 1px solid #ECECF3; }
          .crtc-stat:nth-child(-n+2) { border-bottom: 1px solid #ECECF3; }
        }
        @media (max-width: 520px) {
          .crtc-panel { padding: 22px 16px; }
          .crtc-notice { grid-template-columns: 52px 1fr; }
          .crtc-notice svg { display: none; }
        }
      `}</style>
    </>
  );
}
