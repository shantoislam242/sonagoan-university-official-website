import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Head of the Departments',
  description:
    'Meet the heads of the academic departments at Sonargaon University the academic leaders guiding each department across our three faculties.',
  path: '/head-of-departments',
});

type Head = {
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  photo: string;
  // Profile page link. '#' until the SU profile page exists; the two heads
  // that already have a published profile point to it.
  profile: string;
};

const P = '/assets/images/heads';
// Department-head profiles already published on the Mechanical Engineering site.
const ME = 'https://mechanical-engineering-olive.vercel.app/faculty-member';

const HEADS: Head[] = [
  {
    name: 'Brig. Gen. (Retd) Prof. Habibur Rahman Kamal, ndc, psc',
    designation: 'Professor & Head',
    department: 'Civil Engineering',
    email: 'hrkamal@gmail.com',
    phone: '01955529745',
    photo: `${P}/civil.jpeg`,
    profile: `${ME}/habibur-rahman-kamal`,
  },
  {
    name: 'Engr. Mohammad Abdul Baset',
    designation: 'Associate Professor & Head',
    department: 'Textile Engineering',
    email: 'basettex7@gmail.com',
    phone: '01676877697',
    photo: `${P}/textile.jpg`,
    profile: '#',
  },
  {
    name: 'Prof. Md. Mostofa Hossain',
    designation: 'Professor & Head',
    department: 'Mechanical Engineering',
    email: 'headme@su.edu.bd',
    phone: '01955529729',
    photo: `${P}/mechanical.jpeg`,
    profile: `${ME}/mostofa-hossain`,
  },
  {
    name: 'Prof. Khabirul Haque Chowdhury',
    designation: 'Professor & Head',
    department: 'Naval Architecture & Marine Engineering',
    email: 'khabir.buet@gmail.com',
    phone: '01619214080',
    photo: `${P}/naval.png`,
    profile: '#',
  },
  {
    name: 'Prof. Bulbul Ahamed',
    designation: 'Professor & Head',
    department: 'Computer Science & Engineering',
    email: 'bulbul_cse@su.edu.bd',
    phone: '01955529841',
    photo: `${P}/cse.jpg`,
    profile: '#',
  },
  {
    name: 'Akmal Hakim',
    designation: 'Associate Professor & Head',
    department: 'Architecture',
    email: 'akmal67@gmail.com',
    phone: '01711534795',
    photo: `${P}/architecture.jpg`,
    profile: '#',
  },
  {
    name: 'Md. Rasel Hawlader',
    designation: 'Assistant Professor & Head (Acting)',
    department: 'Business Administration',
    email: 'raselhawlader71@gmail.com',
    phone: '01992077406',
    photo: `${P}/business.jpg`,
    profile: '#',
  },
  {
    name: 'Md. Ahshan Habib',
    designation: 'Associate Professor & Head',
    department: 'Fashion Design & Technology',
    email: 'habib826620@yahoo.com',
    phone: '01955529877',
    photo: `${P}/fashion.jpg`,
    profile: '#',
  },
  {
    name: 'Md. Tajbir Husain',
    designation: 'Assistant Professor & Head',
    department: 'Apparel Manufacture & Technology',
    email: 'Mtajbirsojib@gmail.com',
    phone: '01721978664',
    photo: `${P}/apparel.jpg`,
    profile: '#',
  },
  {
    name: 'Md. Rais Uddin Mollah',
    designation: 'Assistant Professor & Head',
    department: 'Electrical & Electronics Engineering',
    email: 'raismollah.su.eee@gmail.com',
    phone: '01955529768',
    photo: `${P}/eee.jpg`,
    profile: '#',
  },
  {
    name: 'Md. Shamim Sarker',
    designation: 'Assistant Professor & Head',
    department: 'B.A. Honours (Bangla)',
    email: 'shahriarshamim35@gmail.com',
    phone: '01958642454',
    photo: `${P}/bangla.jpg`,
    profile: '#',
  },
  {
    name: 'Sharmin Jahan Runa',
    designation: 'Assistant Professor & Head',
    department: 'Law',
    email: 'sharminjahanlaw88@gmail.com',
    phone: '01955529862',
    photo: `${P}/law.png`,
    profile: '#',
  },
];

export default function HeadOfDepartmentsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Head of the Departments"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'Head of the Departments' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 54px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Departmental Leadership
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, marginBottom: 16 }}>
              Meet Our Department Heads
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.8, margin: 0 }}>
              The academic leaders guiding each department across Sonargaon University&rsquo;s three faculties.
            </p>
          </div>

          <div className="hod-grid">
            {HEADS.map((h) => {
              const ext = h.profile.startsWith('http');
              const linkProps = ext ? { target: '_blank', rel: 'noopener noreferrer' } : {};
              return (
                <article key={h.department} className="hod-card">
                  <a href={h.profile} {...linkProps} className="hod-card__photo-wrap" aria-label={`View profile of ${h.name}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={h.photo} alt="" aria-hidden className="hod-card__bg" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={h.photo} alt={h.name} className="hod-card__photo" />
                  </a>
                  <div className="hod-card__body">
                    <h3 className="hod-card__name">
                      <a href={h.profile} {...linkProps}>{h.name}</a>
                    </h3>
                    <p className="hod-card__role">{h.designation}</p>
                    <p className="hod-card__dept">{h.department}</p>
                    <div className="hod-card__contact">
                      <div className="hod-card__info">
                        <a href={`mailto:${h.email}`} className="hod-card__row">
                          <Mail size={15} />
                          <span>{h.email}</span>
                        </a>
                        <a href={`tel:${h.phone}`} className="hod-card__row">
                          <Phone size={15} />
                          <span>{h.phone}</span>
                        </a>
                      </div>
                      <a href={h.profile} {...linkProps} className="hod-card__profile">
                        View Profile <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .hod-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 540px) { .hod-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .hod-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .hod-grid { grid-template-columns: repeat(4, 1fr); } }
        .hod-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .hod-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .hod-card__photo-wrap {
          display: block; position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .hod-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92);
          z-index: 0;
        }
        .hod-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .hod-card__body { padding: 16px 18px 18px; display: flex; flex-direction: column; flex: 1; }
        .hod-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 16px; line-height: 1.3; margin: 0 0 4px;
        }
        .hod-card__name a { color: inherit; text-decoration: none; transition: color .2s ease; }
        .hod-card__name a:hover { color: #CC1579; }
        .hod-card__role { color: #5B5B78; font-size: 13px; margin: 0 0 3px; }
        .hod-card__dept { color: #CC1579; font-size: 12.5px; font-weight: 600; margin: 0 0 14px; }
        .hod-card__contact {
          margin-top: auto; display: flex; align-items: center; justify-content: space-between;
          gap: 12px; padding-top: 13px; border-top: 1px solid #F0F0F5;
        }
        .hod-card__info { display: flex; flex-direction: column; gap: 7px; min-width: 0; }
        .hod-card__row {
          display: inline-flex; align-items: center; gap: 8px;
          color: #5B5B78; font-size: 12.5px; text-decoration: none; word-break: break-all;
          transition: color .2s ease;
        }
        .hod-card__row svg { color: #2B3175; flex-shrink: 0; }
        .hod-card__row:hover { color: #CC1579; }
        .hod-card__row:hover svg { color: #CC1579; }
        .hod-card__profile {
          display: inline-flex; align-items: center; gap: 5px; flex-shrink: 0; white-space: nowrap;
          align-self: flex-end; margin-bottom: 1px;
          color: #CC1579; font-weight: 600; font-size: 12.5px;
          text-decoration: none; text-underline-offset: 3px;
          transition: gap .2s ease;
        }
        .hod-card__profile svg { color: #CC1579; flex-shrink: 0; }
        .hod-card__profile:hover { gap: 9px; text-decoration: underline; }
      `}</style>
    </>
  );
}
